import './SuccessStories.css'

const SuccessStories = () => {
  const handleCTAClick = () => {
    window.location.href = 'https://tallento.ai/'
  }

  return (
    <section className="success-stories">
      <div className="success-container">
        <p className="section-label">SUCCESS STORIES</p>
        <h2 className="section-title">They found their dream job.<br/>You're next.</h2>
        
        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-value">94%</div>
            <p className="stat-description">Placement Rate</p>
          </div>
          <div className="stat-item">
            <div className="stat-value">3 Days</div>
            <p className="stat-description">Avg. Time to Interview</p>
          </div>
          <div className="stat-item">
            <div className="stat-value">45%</div>
            <p className="stat-description">Salary Increase</p>
          </div>
        </div>

        <div className="stories-content">
          <div className="video-card">
            <div className="video-thumbnail">
              <div className="play-button">▶</div>
              <div className="video-overlay"></div>
            </div>
            <div className="video-info">
              <h3>Watch Success Stories</h3>
              <p>2:45 min</p>
            </div>
          </div>

          <div className="testimonials-list">
            <div className="testimonial-item">
              <div className="testimonial-header">
                <div className="avatar">👨‍💻</div>
                <div className="user-info">
                  <h4>Rahul Sharma</h4>
                  <p>Software Engineer at PhysicsWallah</p>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="testimonial-text">
                "I uploaded my resume on Monday and had three interviews scheduled by Friday. 
                The AI matching was incredibly accurate. Got placed in my dream EdTech company!"
              </p>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-header">
                <div className="avatar">👨‍🏫</div>
                <div className="user-info">
                  <h4>Priya Patel</h4>
                  <p>IIT JEE Physics Teacher at Allen</p>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="testimonial-text">
                "What impressed me most was how the platform understood my teaching experience. 
                Not just my skills, but my passion for education. Life-changing opportunity!"
              </p>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-header">
                <div className="avatar">👩‍💼</div>
                <div className="user-info">
                  <h4>Anjali Verma</h4>
                  <p>Academic Counselor at Byju's</p>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="testimonial-text">
                "As someone from a Tier 2 city, I was skeptical. But the quality of matches was exceptional. 
                Found my dream role in just 2 weeks with 40% salary hike!"
              </p>
            </div>
          </div>
        </div>

        <button className="success-cta" onClick={handleCTAClick}>Start Your Success Story</button>
      </div>
    </section>
  )
}

export default SuccessStories
