// Funnel Analytics and Reporting

export class FunnelAnalytics {
  constructor(database) {
    this.db = database;
  }

  // Generate funnel report
  async generateFunnelReport(userType, timeRange = '30d') {
    const stages = await this.getStageMetrics(userType, timeRange);
    const conversions = await this.getConversionMetrics(userType, timeRange);
    const dropoffs = await this.getDropoffAnalysis(userType, timeRange);
    
    return {
      userType,
      timeRange,
      totalUsers: stages[0]?.userCount || 0,
      stages,
      conversions,
      dropoffs,
      recommendations: this.generateRecommendations(dropoffs)
    };
  }

  // Get metrics for each stage
  async getStageMetrics(userType, timeRange) {
    // Query database for stage completion data
    const query = `
      SELECT 
        stage_id,
        COUNT(DISTINCT user_id) as user_count,
        AVG(time_spent_seconds) as avg_time_spent,
        COUNT(*) as total_actions
      FROM funnel_events
      WHERE user_type = ? 
        AND timestamp >= DATE_SUB(NOW(), INTERVAL ${this.parseTimeRange(timeRange)})
      GROUP BY stage_id
      ORDER BY stage_id
    `;
    
    return this.db.query(query, [userType]);
  }

  // Calculate conversion rates between stages
  async getConversionMetrics(userType, timeRange) {
    const stages = await this.getStageMetrics(userType, timeRange);
    const conversions = [];

    for (let i = 0; i < stages.length - 1; i++) {
      const current = stages[i];
      const next = stages[i + 1];
      
      conversions.push({
        from: current.stage_id,
        to: next.stage_id,
        rate: (next.user_count / current.user_count) * 100,
        usersLost: current.user_count - next.user_count
      });
    }

    return conversions;
  }

  // Analyze drop-off points
  async getDropoffAnalysis(userType, timeRange) {
    const conversions = await this.getConversionMetrics(userType, timeRange);
    
    return conversions
      .filter(c => c.rate < 50)
      .map(c => ({
        ...c,
        severity: c.rate < 30 ? 'critical' : c.rate < 50 ? 'high' : 'medium',
        impact: c.usersLost
      }))
      .sort((a, b) => a.rate - b.rate);
  }

  // Time to conversion analysis
  async getTimeToConversion(userType, fromStage, toStage) {
    const query = `
      SELECT 
        user_id,
        TIMESTAMPDIFF(SECOND, 
          MIN(CASE WHEN stage_id = ? THEN timestamp END),
          MIN(CASE WHEN stage_id = ? THEN timestamp END)
        ) as time_to_convert_seconds
      FROM funnel_events
      WHERE user_type = ?
      GROUP BY user_id
      HAVING time_to_convert_seconds IS NOT NULL
    `;
    
    const results = await this.db.query(query, [fromStage, toStage, userType]);
    
    return {
      average: this.calculateAverage(results.map(r => r.time_to_convert_seconds)),
      median: this.calculateMedian(results.map(r => r.time_to_convert_seconds)),
      p90: this.calculatePercentile(results.map(r => r.time_to_convert_seconds), 90)
    };
  }

  // Cohort analysis
  async getCohortAnalysis(userType, cohortBy = 'week') {
    const query = `
      SELECT 
        DATE_FORMAT(first_seen, '%Y-%W') as cohort,
        stage_id,
        COUNT(DISTINCT user_id) as user_count
      FROM (
        SELECT 
          user_id,
          stage_id,
          MIN(timestamp) OVER (PARTITION BY user_id) as first_seen
        FROM funnel_events
        WHERE user_type = ?
      ) cohort_data
      GROUP BY cohort, stage_id
      ORDER BY cohort, stage_id
    `;
    
    return this.db.query(query, [userType]);
  }

  // A/B test impact analysis
  async getABTestImpact(testId, userType, stage) {
    const query = `
      SELECT 
        variant,
        COUNT(DISTINCT user_id) as users,
        COUNT(DISTINCT CASE WHEN stage_id = ? THEN user_id END) as converted_users,
        (COUNT(DISTINCT CASE WHEN stage_id = ? THEN user_id END) / COUNT(DISTINCT user_id)) * 100 as conversion_rate
      FROM funnel_events fe
      JOIN ab_test_assignments ata ON fe.user_id = ata.user_id
      WHERE ata.test_id = ? AND fe.user_type = ?
      GROUP BY variant
    `;
    
    return this.db.query(query, [stage, stage, testId, userType]);
  }

  // Generate recommendations based on dropoffs
  generateRecommendations(dropoffs) {
    const recommendations = [];

    dropoffs.forEach(dropoff => {
      if (dropoff.from === 'immediate_value' && dropoff.to === 'micro_commitment') {
        recommendations.push({
          priority: 'high',
          stage: dropoff.from,
          issue: 'Users not engaging after seeing value',
          suggestions: [
            'Add more prominent CTAs',
            'Improve match score visibility',
            'Add social proof (testimonials, success stories)',
            'Reduce friction in next step'
          ]
        });
      }

      if (dropoff.from === 'micro_commitment' && dropoff.to === 'resume_upload') {
        recommendations.push({
          priority: 'critical',
          stage: dropoff.from,
          issue: 'Users not uploading resume (critical conversion point)',
          suggestions: [
            'Emphasize benefits of resume upload',
            'Show preview of AI matches they\'ll unlock',
            'Add trust signals (data privacy, security)',
            'Simplify upload process',
            'Allow LinkedIn import as alternative'
          ]
        });
      }

      if (dropoff.from === 'lead_capture' && dropoff.to === 'product_experience') {
        recommendations.push({
          priority: 'high',
          stage: dropoff.from,
          issue: 'Employers not activating after signup',
          suggestions: [
            'Improve onboarding flow',
            'Send activation emails',
            'Offer guided tour',
            'Show quick wins (candidate previews)'
          ]
        });
      }
    });

    return recommendations;
  }

  // Helper methods
  parseTimeRange(timeRange) {
    const match = timeRange.match(/(\d+)([dwmy])/);
    if (!match) return '30 DAY';
    
    const [, value, unit] = match;
    const units = { d: 'DAY', w: 'WEEK', m: 'MONTH', y: 'YEAR' };
    return `${value} ${units[unit]}`;
  }

  calculateAverage(values) {
    return values.reduce((a, b) => a + b, 0) / values.length;
  }

  calculateMedian(values) {
    const sorted = values.sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  }

  calculatePercentile(values, percentile) {
    const sorted = values.sort((a, b) => a - b);
    const index = Math.ceil((percentile / 100) * sorted.length) - 1;
    return sorted[index];
  }
}
