import './Stats.css'

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <h2 className="section-title">Trusted by India's top talent and employers</h2>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">1M+</div>
            <p className="stat-label">Registered professionals</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">5,500+</div>
            <p className="stat-label">Employer partners</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">72 hrs</div>
            <p className="stat-label">AI shortlisting time</p>
          </div>
        </div>

        <div className="companies-section">
          <h3 className="companies-title">Hiring with Tallento.ai</h3>
          <div className="companies-grid">
            <div className="company-badge">Allen Career Institute</div>
            <div className="company-badge">Aakash Institute</div>
            <div className="company-badge">PhysicsWallah</div>
            <div className="company-badge">Byju's</div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              We asked a simple question: if groceries and cabs can arrive in 10 minutes, 
              why does hiring still take 30 days? We're solving for speed, relevance, and dignity.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src="https://images.pexels.com/photos/16749987/pexels-photo-16749987.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&dpr=2" alt="Sandeep Boora" onError={(e) => { e.currentTarget.src = '/avatar-fallback.svg' }} />
              </div>
              <div className="author-info">
                <div className="author-name">Sandeep Boora</div>
                <div className="author-role">Co-founder, Tallento.ai</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
