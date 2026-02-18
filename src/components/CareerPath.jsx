import './CareerPath.css'

const CareerPath = () => {
  return (
    <section className="career-path">
      <div className="career-container">
        <h2 className="section-title">Why Tallento.ai?</h2>
        <p className="section-subtitle">
          From weeks to minutes. We're transforming how India hires.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Quick Commerce Hiring</h3>
            <p>If groceries can arrive in 10 minutes, why should hiring take 30 days? Get matched and hired in minutes with our AI-powered platform.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎮</div>
            <h3>Gamified Experience</h3>
            <p>Engaging job journeys with gamification. Track progress, earn rewards, and make your job search fun and motivating.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✅</div>
            <h3>Verified Talent</h3>
            <p>All candidates are verified with AI-generated trust scores. Work with top brands like Allen, Aakash, PhysicsWallah, and Byju's.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile-First Design</h3>
            <p>Apply on the go with our intuitive mobile app. Built for India's youth with simple, fast, and accessible job search.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerPath
