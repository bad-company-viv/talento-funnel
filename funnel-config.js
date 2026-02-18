// Tallento.ai Conversion Funnel Configuration

export const FunnelConfig = {
  JOB_SEEKER: {
    stages: [
      {
        id: 'awareness',
        name: 'Awareness',
        description: 'User lands on platform',
        actions: ['page_view', 'landing_visit']
      },
      {
        id: 'immediate_value',
        name: 'Immediate Value',
        description: 'Show role-specific jobs, salary, demand, match % without signup',
        actions: [
          'view_job_listings',
          'see_salary_data',
          'view_demand_metrics',
          'see_match_percentage'
        ],
        valueProps: ['role_specific_jobs', 'salary_insights', 'demand_data', 'ai_match_preview']
      },
      {
        id: 'personalization',
        name: 'Personalization',
        description: 'Apply filters - industry, experience, role',
        actions: [
          'filter_by_industry',
          'filter_by_experience',
          'filter_by_role',
          'filter_by_location'
        ]
      },
      {
        id: 'micro_commitment',
        name: 'Micro-Commitment',
        description: 'Browse → Click Job → Check Match',
        actions: [
          'browse_jobs',
          'click_job_card',
          'view_job_details',
          'check_match_score',
          'view_similar_jobs'
        ]
      },
      {
        id: 'resume_upload',
        name: 'Resume Upload (Funnel Unlock)',
        description: 'Upload resume to unlock AI parsing and best opportunities',
        actions: [
          'click_upload_resume',
          'resume_uploaded',
          'ai_parsing_started',
          'profile_auto_generated'
        ],
        critical: true
      },
      {
        id: 'activation',
        name: 'Activation',
        description: 'AI shows best opportunities based on parsed profile',
        actions: [
          'view_ai_matches',
          'see_personalized_recommendations',
          'profile_completion_prompt'
        ]
      },
      {
        id: 'easy_application',
        name: 'Easy Application',
        description: 'One-click apply with auto-filled profile',
        actions: [
          'one_click_apply',
          'auto_fill_application',
          'submit_application',
          'application_confirmed'
        ]
      },
      {
        id: 'engagement_loop',
        name: 'Engagement Loop',
        description: 'Alerts, recruiter views, new matches',
        actions: [
          'receive_job_alert',
          'recruiter_viewed_profile',
          'new_match_notification',
          'message_from_recruiter',
          'interview_invitation'
        ]
      },
      {
        id: 'retention',
        name: 'Retention',
        description: 'Continuous recommendations and career guidance',
        actions: [
          'weekly_job_recommendations',
          'career_insights',
          'skill_gap_analysis',
          'salary_trends',
          'return_visit'
        ]
      }
    ]
  },

  EMPLOYER: {
    stages: [
      {
        id: 'awareness',
        name: 'Awareness',
        description: 'Employer lands on platform',
        actions: ['page_view', 'employer_landing_visit']
      },
      {
        id: 'immediate_roi',
        name: 'Immediate ROI',
        description: 'Show faster hiring, verified candidates, AI screening benefits',
        actions: [
          'view_roi_metrics',
          'see_hiring_speed_stats',
          'view_candidate_quality_data',
          'see_ai_screening_demo'
        ],
        valueProps: ['faster_hiring', 'verified_candidates', 'ai_screening', 'cost_savings']
      },
      {
        id: 'problem_validation',
        name: 'Problem Validation',
        description: 'Identify pain points - slow hiring, low-quality applications, manual effort',
        actions: [
          'view_problem_statement',
          'see_industry_challenges',
          'compare_traditional_vs_ai',
          'read_case_studies'
        ],
        painPoints: ['slow_hiring', 'low_quality_applications', 'manual_screening', 'high_cost_per_hire']
      },
      {
        id: 'solution_positioning',
        name: 'Solution Positioning',
        description: 'AI matches, shortlist automation, recruiter dashboard',
        actions: [
          'view_ai_matching_demo',
          'see_automation_features',
          'explore_dashboard',
          'view_feature_list'
        ]
      },
      {
        id: 'micro_commitment',
        name: 'Micro-Commitment',
        description: 'Explore features → See candidate previews → Check success stats',
        actions: [
          'explore_features',
          'view_candidate_previews',
          'check_success_statistics',
          'view_pricing_page',
          'compare_plans'
        ]
      },
      {
        id: 'lead_capture',
        name: 'Lead Capture',
        description: 'Demo request or post job',
        actions: [
          'request_demo',
          'start_free_trial',
          'post_first_job',
          'signup_completed'
        ],
        critical: true
      },
      {
        id: 'product_experience',
        name: 'Product Experience',
        description: 'View pipeline, matches, hiring insights',
        actions: [
          'view_candidate_pipeline',
          'see_ai_matches',
          'access_hiring_analytics',
          'use_recruiter_dashboard',
          'filter_candidates'
        ]
      },
      {
        id: 'hiring_action',
        name: 'Hiring Action',
        description: 'Shortlist → Interview → Hire',
        actions: [
          'shortlist_candidate',
          'send_interview_invite',
          'schedule_interview',
          'make_offer',
          'hire_completed'
        ]
      },
      {
        id: 'retention',
        name: 'Retention',
        description: 'Subscription, repeat hiring, analytics, talent pipeline',
        actions: [
          'subscribe_to_plan',
          'post_additional_job',
          'view_hiring_analytics',
          'build_talent_pipeline',
          'export_reports',
          'team_collaboration'
        ]
      }
    ]
  }
};

export const ConversionGoals = {
  JOB_SEEKER: {
    primary: 'application_submitted',
    secondary: ['resume_uploaded', 'profile_completed', 'job_viewed'],
    retention: 'weekly_active_user'
  },
  EMPLOYER: {
    primary: 'hire_completed',
    secondary: ['demo_requested', 'job_posted', 'candidate_shortlisted'],
    retention: 'monthly_subscription'
  }
};
