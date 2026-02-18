import './OpportunityBanner.css'

const OpportunityBanner = () => {
  const handleCTAClick = () => {
    window.location.href = 'https://tallento.ai/'
  }

  return (
    <section className="opportunity-banner">
      <div className="banner-container">
        <div className="banner-content">
          <h2>Fast, fair, and future-ready hiring for Bharat</h2>
          <p>Join India's largest recruitment ecosystem. Built for Tier 1, 2 & 3 cities with mobile-first simplicity. Available in Hindi, English, and regional languages.</p>
          <button className="banner-cta" onClick={handleCTAClick}>Start Your Profile</button>
          <p className="banner-note">✓ iOS & Android • ✓ 100% Bootstrapped • ✓ Made in India 🇮🇳</p>
        </div>
        <div className="banner-visual">
          <div className="floating-card card-1">
            <div className="mini-job">
              <span className="job-title">NEET Biology Teacher</span>
              <span className="match-score">96%</span>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="mini-job">
              <span className="job-title">Full Stack Developer</span>
              <span className="match-score">92%</span>
            </div>
          </div>
          <div className="floating-card card-3">
            <div className="mini-job">
              <span className="job-title">Operations Manager</span>
              <span className="match-score">89%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpportunityBanner
