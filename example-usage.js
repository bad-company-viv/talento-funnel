// Example Usage of Tallento.ai Funnel Tracking

import { FunnelTracker } from './funnel-tracker.js';
import { FunnelAnalytics } from './funnel-analytics.js';

// Initialize tracker with your analytics service
const tracker = new FunnelTracker(analyticsService);
const analytics = new FunnelAnalytics(database);

// ============================================
// JOB SEEKER FUNNEL EXAMPLES
// ============================================

// 1. User lands on platform and views jobs
tracker.trackStage('user123', 'JOB_SEEKER', 'awareness');
tracker.trackJobSeekerJourney.viewJobs('user123', {
  industry: 'IT',
  experience: '3-5 years',
  role: 'Software Engineer'
});

// 2. User applies filters and sees personalized results
tracker.trackStage('user123', 'JOB_SEEKER', 'personalization');
tracker.trackAction('user123', 'JOB_SEEKER', 'personalization', 'filter_by_industry', {
  industry: 'IT'
});

// 3. User clicks on a job and checks match score
tracker.trackStage('user123', 'JOB_SEEKER', 'micro_commitment');
tracker.trackAction('user123', 'JOB_SEEKER', 'micro_commitment', 'click_job_card', {
  jobId: 'job456'
});
tracker.trackJobSeekerJourney.viewMatchScore('user123', 'job456', 87);

// 4. CRITICAL: User uploads resume (funnel unlock)
tracker.trackJobSeekerJourney.uploadResume('user123', {
  size: 245000,
  type: 'application/pdf'
});

// 5. User sees AI-matched opportunities
tracker.trackStage('user123', 'JOB_SEEKER', 'activation');
tracker.trackAction('user123', 'JOB_SEEKER', 'activation', 'view_ai_matches', {
  matchCount: 12
});

// 6. User applies with one-click
tracker.trackJobSeekerJourney.oneClickApply('user123', 'job456');

// 7. Engagement loop - user receives alerts
tracker.trackJobSeekerJourney.receiveAlert('user123', 'new_match');
tracker.trackAction('user123', 'JOB_SEEKER', 'engagement_loop', 'recruiter_viewed_profile', {
  recruiterId: 'rec789'
});

// ============================================
// EMPLOYER FUNNEL EXAMPLES
// ============================================

// 1. Employer lands and sees ROI metrics
tracker.trackStage('employer456', 'EMPLOYER', 'awareness');
tracker.trackEmployerJourney.viewROI('employer456', 'hiring_speed');

// 2. Employer validates their problem
tracker.trackStage('employer456', 'EMPLOYER', 'problem_validation');
tracker.trackAction('employer456', 'EMPLOYER', 'problem_validation', 'view_problem_statement', {
  painPoint: 'slow_hiring'
});

// 3. Employer explores solution features
tracker.trackStage('employer456', 'EMPLOYER', 'solution_positioning');
tracker.trackAction('employer456', 'EMPLOYER', 'solution_positioning', 'view_ai_matching_demo');

// 4. Employer previews candidates
tracker.trackStage('employer456', 'EMPLOYER', 'micro_commitment');
tracker.trackEmployerJourney.exploreCandidates('employer456', {
  role: 'Senior Developer',
  experience: '5+ years'
});

// 5. CRITICAL: Employer requests demo or posts job
tracker.trackEmployerJourney.requestDemo('employer456', {
  companyName: 'TechCorp',
  size: '50-200',
  industry: 'SaaS'
});

// OR posts first job
tracker.trackEmployerJourney.postJob('employer456', {
  title: 'Senior Software Engineer',
  industry: 'IT'
});

// 6. Employer uses product features
tracker.trackStage('employer456', 'EMPLOYER', 'product_experience');
tracker.trackAction('employer456', 'EMPLOYER', 'product_experience', 'view_candidate_pipeline');

// 7. Employer takes hiring action
tracker.trackEmployerJourney.shortlistCandidate('employer456', 'candidate123', 'job789');
tracker.trackAction('employer456', 'EMPLOYER', 'hiring_action', 'schedule_interview', {
  candidateId: 'candidate123',
  jobId: 'job789'
});

// 8. PRIMARY GOAL: Employer completes hire
tracker.trackEmployerJourney.completeHire('employer456', 'candidate123', 'job789');

// ============================================
// ANALYTICS EXAMPLES
// ============================================

// Get funnel report
const jobSeekerReport = await analytics.generateFunnelReport('JOB_SEEKER', '30d');
console.log('Job Seeker Funnel Report:', jobSeekerReport);

// Identify drop-off points
const dropoffs = await analytics.getDropoffAnalysis('EMPLOYER', '30d');
console.log('Critical Drop-offs:', dropoffs);

// Time to conversion analysis
const timeToConvert = await analytics.getTimeToConversion(
  'JOB_SEEKER',
  'resume_upload',
  'easy_application'
);
console.log('Average time from resume upload to application:', timeToConvert.average, 'seconds');

// Get user's current funnel position
const position = tracker.getUserFunnelPosition('user123', 'JOB_SEEKER');
console.log('User funnel position:', position);
// Output: { currentStage: 'engagement_loop', completedStages: [...], nextStage: 'retention', progress: 88.9 }

// Cohort analysis
const cohorts = await analytics.getCohortAnalysis('JOB_SEEKER', 'week');
console.log('Cohort performance:', cohorts);

// A/B test impact
const abTestResults = await analytics.getABTestImpact('test_resume_cta', 'JOB_SEEKER', 'resume_upload');
console.log('A/B Test Results:', abTestResults);

// ============================================
// REAL-TIME MONITORING
// ============================================

// Monitor conversion rates
setInterval(async () => {
  const conversionRate = await tracker.calculateConversionRate(
    'JOB_SEEKER',
    'micro_commitment',
    'resume_upload',
    '24h'
  );
  
  if (conversionRate < 0.3) {
    console.warn('⚠️ Low conversion rate detected:', conversionRate);
    // Trigger alert or optimization
  }
}, 3600000); // Check every hour

// ============================================
// OPTIMIZATION TRIGGERS
// ============================================

// Trigger personalized interventions based on funnel position
function triggerIntervention(userId, userType) {
  const position = tracker.getUserFunnelPosition(userId, userType);
  
  if (userType === 'JOB_SEEKER') {
    if (position.currentStage === 'micro_commitment') {
      // User is browsing but hasn't uploaded resume
      sendEmail(userId, 'resume_upload_benefits');
      showPopup(userId, 'unlock_ai_matches');
    }
    
    if (position.currentStage === 'activation' && !hasApplied(userId)) {
      // User uploaded resume but hasn't applied
      sendPushNotification(userId, 'top_matches_waiting');
    }
  }
  
  if (userType === 'EMPLOYER') {
    if (position.currentStage === 'micro_commitment') {
      // Employer exploring but hasn't signed up
      showChatbot(userId, 'offer_demo');
    }
    
    if (position.currentStage === 'product_experience' && !hasShortlisted(userId)) {
      // Employer signed up but not engaging
      sendEmail(userId, 'onboarding_guide');
    }
  }
}
