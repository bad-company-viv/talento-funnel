// Tallento.ai Funnel Tracker Implementation

import { FunnelConfig, ConversionGoals } from './funnel-config.js';

export class FunnelTracker {
  constructor(analyticsService) {
    this.analytics = analyticsService;
    this.sessionData = new Map();
  }

  // Track user entering a funnel stage
  trackStage(userId, userType, stageId, metadata = {}) {
    const stage = this.getStageConfig(userType, stageId);
    
    const event = {
      userId,
      userType,
      stageId,
      stageName: stage?.name,
      timestamp: new Date().toISOString(),
      sessionId: this.getSessionId(userId),
      metadata
    };

    this.analytics.track('funnel_stage_entered', event);
    this.updateUserJourney(userId, stageId);
    
    return event;
  }

  // Track specific actions within a stage
  trackAction(userId, userType, stageId, action, metadata = {}) {
    const event = {
      userId,
      userType,
      stageId,
      action,
      timestamp: new Date().toISOString(),
      sessionId: this.getSessionId(userId),
      metadata
    };

    this.analytics.track('funnel_action', event);
    
    // Check if this action completes the stage
    this.checkStageCompletion(userId, userType, stageId, action);
    
    return event;
  }

  // Job Seeker specific tracking methods
  trackJobSeekerJourney = {
    viewJobs: (userId, filters = {}) => {
      return this.trackAction(userId, 'JOB_SEEKER', 'immediate_value', 'view_job_listings', { filters });
    },
    
    viewMatchScore: (userId, jobId, matchScore) => {
      return this.trackAction(userId, 'JOB_SEEKER', 'micro_commitment', 'check_match_score', { 
        jobId, 
        matchScore 
      });
    },
    
    uploadResume: (userId, resumeData) => {
      const event = this.trackAction(userId, 'JOB_SEEKER', 'resume_upload', 'resume_uploaded', {
        fileSize: resumeData.size,
        fileType: resumeData.type
      });
      
      // Critical conversion point
      this.analytics.track('critical_conversion', {
        userId,
        conversionType: 'resume_upload',
        timestamp: new Date().toISOString()
      });
      
      return event;
    },
    
    oneClickApply: (userId, jobId) => {
      return this.trackAction(userId, 'JOB_SEEKER', 'easy_application', 'one_click_apply', { jobId });
    },
    
    receiveAlert: (userId, alertType) => {
      return this.trackAction(userId, 'JOB_SEEKER', 'engagement_loop', 'receive_job_alert', { alertType });
    }
  };

  // Employer specific tracking methods
  trackEmployerJourney = {
    viewROI: (userId, metric) => {
      return this.trackAction(userId, 'EMPLOYER', 'immediate_roi', 'view_roi_metrics', { metric });
    },
    
    exploreCandidates: (userId, filters = {}) => {
      return this.trackAction(userId, 'EMPLOYER', 'micro_commitment', 'view_candidate_previews', { filters });
    },
    
    requestDemo: (userId, companyData) => {
      const event = this.trackAction(userId, 'EMPLOYER', 'lead_capture', 'request_demo', companyData);
      
      // Critical conversion point
      this.analytics.track('critical_conversion', {
        userId,
        conversionType: 'demo_request',
        timestamp: new Date().toISOString()
      });
      
      return event;
    },
    
    postJob: (userId, jobData) => {
      const event = this.trackAction(userId, 'EMPLOYER', 'lead_capture', 'post_first_job', {
        jobTitle: jobData.title,
        industry: jobData.industry
      });
      
      // Critical conversion point
      this.analytics.track('critical_conversion', {
        userId,
        conversionType: 'job_posted',
        timestamp: new Date().toISOString()
      });
      
      return event;
    },
    
    shortlistCandidate: (userId, candidateId, jobId) => {
      return this.trackAction(userId, 'EMPLOYER', 'hiring_action', 'shortlist_candidate', { 
        candidateId, 
        jobId 
      });
    },
    
    completeHire: (userId, candidateId, jobId) => {
      const event = this.trackAction(userId, 'EMPLOYER', 'hiring_action', 'hire_completed', { 
        candidateId, 
        jobId 
      });
      
      // Primary conversion goal
      this.analytics.track('conversion_goal_achieved', {
        userId,
        goalType: 'hire_completed',
        timestamp: new Date().toISOString()
      });
      
      return event;
    }
  };

  // Calculate conversion rates between stages
  calculateConversionRate(userType, fromStage, toStage, timeRange = '30d') {
    return this.analytics.query({
      metric: 'conversion_rate',
      userType,
      fromStage,
      toStage,
      timeRange
    });
  }

  // Identify drop-off points
  identifyDropoffs(userType, timeRange = '30d') {
    const stages = FunnelConfig[userType].stages;
    const dropoffs = [];

    for (let i = 0; i < stages.length - 1; i++) {
      const currentStage = stages[i].id;
      const nextStage = stages[i + 1].id;
      
      const rate = this.calculateConversionRate(userType, currentStage, nextStage, timeRange);
      
      if (rate < 0.5) { // Less than 50% conversion
        dropoffs.push({
          fromStage: currentStage,
          toStage: nextStage,
          conversionRate: rate,
          severity: rate < 0.3 ? 'high' : 'medium'
        });
      }
    }

    return dropoffs;
  }

  // Get user's current position in funnel
  getUserFunnelPosition(userId, userType) {
    const journey = this.getUserJourney(userId);
    const stages = FunnelConfig[userType].stages;
    
    const completedStages = journey.filter(stage => 
      stages.some(s => s.id === stage)
    );

    return {
      currentStage: completedStages[completedStages.length - 1],
      completedStages,
      nextStage: this.getNextStage(userType, completedStages),
      progress: (completedStages.length / stages.length) * 100
    };
  }

  // Helper methods
  getStageConfig(userType, stageId) {
    return FunnelConfig[userType]?.stages.find(s => s.id === stageId);
  }

  getSessionId(userId) {
    if (!this.sessionData.has(userId)) {
      this.sessionData.set(userId, `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
    }
    return this.sessionData.get(userId);
  }

  updateUserJourney(userId, stageId) {
    // Store in database or cache
    const journey = this.getUserJourney(userId) || [];
    if (!journey.includes(stageId)) {
      journey.push(stageId);
      this.saveUserJourney(userId, journey);
    }
  }

  checkStageCompletion(userId, userType, stageId, action) {
    const stage = this.getStageConfig(userType, stageId);
    if (stage?.critical && stage.actions.includes(action)) {
      this.analytics.track('critical_stage_completed', {
        userId,
        userType,
        stageId,
        action,
        timestamp: new Date().toISOString()
      });
    }
  }

  getUserJourney(userId) {
    // Retrieve from database or cache
    return [];
  }

  saveUserJourney(userId, journey) {
    // Save to database or cache
  }

  getNextStage(userType, completedStages) {
    const stages = FunnelConfig[userType].stages;
    const lastCompleted = completedStages[completedStages.length - 1];
    const currentIndex = stages.findIndex(s => s.id === lastCompleted);
    return stages[currentIndex + 1]?.id || null;
  }
}
