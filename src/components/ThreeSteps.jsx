import './ThreeSteps.css'

const ThreeSteps = () => {
  return (
    <section className="three-steps">
      <div className="steps-container">
        <h2 className="section-title">Get hired in 3 simple steps</h2>
        
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon">📱</div>
            <h3>Create Profile</h3>
            <p>Sign up in seconds on our mobile app. Add your skills, experience, and preferences. Our AI instantly analyzes your profile.</p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon">🤖</div>
            <h3>AI Matches You</h3>
            <p>Get personalized job recommendations from 5,500+ employers. See match scores, salary ranges, and company details instantly.</p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon">🎯</div>
            <h3>Get Hired Fast</h3>
            <p>Apply with one tap. Get shortlisted in ~72 hours. Interview and join top companies like Allen, Aakash, and PhysicsWallah.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThreeSteps
