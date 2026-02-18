import './NoProblem.css'

const NoProblem = () => {
  return (
    <section className="no-problem">
      <div className="problem-container">
        <div className="problem-content">
          <h2>Built for India's youth, by Indians</h2>
          <p>
            Serving every corner of India - from Mumbai to Patna, Bangalore to Jaipur. 
            Access jobs in Hindi, English, and regional languages. Get AI mentorship designed for Indian job seekers.
          </p>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span>AI Career Mentorship in Hindi & English</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎥</span>
              <span>Video Profiles - Show Your Talent</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🗣️</span>
              <span>Voice Search in Regional Languages</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🇮🇳</span>
              <span>Tier 2 & 3 City Focus</span>
            </div>
          </div>
        </div>
        
        <div className="problem-visual">
          <div className="stats-showcase">
            <div className="showcase-item">
              <div className="showcase-number">120+</div>
              <div className="showcase-label">Team Members</div>
            </div>
            <div className="showcase-item">
              <div className="showcase-number">₹0</div>
              <div className="showcase-label">External Funding</div>
            </div>
            <div className="showcase-item">
              <div className="showcase-number">100%</div>
              <div className="showcase-label">Bootstrapped & Profitable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NoProblem
