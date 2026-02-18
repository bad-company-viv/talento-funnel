import './Hero.css'

const Hero = () => {
  const handleCTAClick = () => {
    window.location.href = 'https://tallento.ai/'
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your career starts here.<br />
            <span className="hero-subtitle">India's Quick Commerce of Hiring.</span>
          </h1>
          <p className="hero-description">
            Join 1M+ professionals across India who found their dream job in minutes, not months. 
            AI-powered matching for teaching and IT roles from Tier 1 to Tier 3 cities.
          </p>
          <button className="hero-cta" onClick={handleCTAClick}>Start Your Profile</button>
          <p className="hero-note">✓ 1M+ Indians hired • ✓ 5,500+ employers • ✓ Verified talent</p>
        </div>
        
        <div className="hero-card">
          <div className="job-card">
            <div className="job-header">
              <div className="company-logo">🎓</div>
              <div className="job-info">
                <h3>IIT JEE Physics Teacher</h3>
                <p>Allen Career Institute • Kota, Rajasthan</p>
              </div>
              <div className="match-badge">95% Match</div>
            </div>
            <div className="job-details">
              <div className="detail-item">
                <span className="label">Salary</span>
                <span className="value">₹6-10 LPA</span>
              </div>
              <div className="detail-item">
                <span className="label">Posted</span>
                <span className="value high">2h ago 🔥</span>
              </div>
            </div>
            <button className="view-job-btn" onClick={handleCTAClick}>Check Match</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
