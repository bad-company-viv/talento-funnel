import './Recommendations.css'

const Recommendations = () => {
  const handleCTAClick = () => {
    window.location.href = 'https://tallento.ai/'
  }

  return (
    <section className="recommendations">
      <div className="recommendations-container">
        <h2 className="section-title">Trending opportunities across India</h2>
        <p className="section-subtitle">
          From metros to Tier 2 cities - explore verified roles with top employers.
        </p>
        
        <div className="jobs-list">
          <div className="job-item">
            <div className="job-left">
              <div className="company-icon">🎓</div>
              <div className="job-details">
                <h3>IIT JEE Mathematics Faculty</h3>
                <p className="company">Allen Career Institute • Kota, Rajasthan</p>
                <div className="job-tags">
                  <span className="tag">IIT JEE</span>
                  <span className="tag">Mathematics</span>
                  <span className="tag">Full-time</span>
                </div>
              </div>
            </div>
            <div className="job-right">
              <div className="salary">₹8-12 LPA</div>
              <div className="match-indicator high">96% Match</div>
            </div>
          </div>

          <div className="job-item">
            <div className="job-left">
              <div className="company-icon">💻</div>
              <div className="job-details">
                <h3>Backend Developer</h3>
                <p className="company">PhysicsWallah • Noida, Uttar Pradesh</p>
                <div className="job-tags">
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">Remote</span>
                </div>
              </div>
            </div>
            <div className="job-right">
              <div className="salary">₹10-18 LPA</div>
              <div className="match-indicator high">93% Match</div>
            </div>
          </div>

          <div className="job-item">
            <div className="job-left">
              <div className="company-icon">📚</div>
              <div className="job-details">
                <h3>NEET Chemistry Teacher</h3>
                <p className="company">Aakash Institute • Delhi NCR</p>
                <div className="job-tags">
                  <span className="tag">NEET</span>
                  <span className="tag">Chemistry</span>
                  <span className="tag">Full-time</span>
                </div>
              </div>
            </div>
            <div className="job-right">
              <div className="salary">₹6-10 LPA</div>
              <div className="match-indicator high">91% Match</div>
            </div>
          </div>

          <div className="job-item">
            <div className="job-left">
              <div className="company-icon">🎯</div>
              <div className="job-details">
                <h3>Academic Counselor</h3>
                <p className="company">Byju's • Bangalore, Karnataka</p>
                <div className="job-tags">
                  <span className="tag">Sales</span>
                  <span className="tag">Counseling</span>
                  <span className="tag">Hybrid</span>
                </div>
              </div>
            </div>
            <div className="job-right">
              <div className="salary">₹4-7 LPA</div>
              <div className="match-indicator medium">85% Match</div>
            </div>
          </div>

          <div className="job-item">
            <div className="job-left">
              <div className="company-icon">👨‍🏫</div>
              <div className="job-details">
                <h3>English Teacher (CBSE)</h3>
                <p className="company">Delhi Public School • Pune, Maharashtra</p>
                <div className="job-tags">
                  <span className="tag">CBSE</span>
                  <span className="tag">English</span>
                  <span className="tag">Full-time</span>
                </div>
              </div>
            </div>
            <div className="job-right">
              <div className="salary">₹5-8 LPA</div>
              <div className="match-indicator high">89% Match</div>
            </div>
          </div>

          <div className="job-item">
            <div className="job-left">
              <div className="company-icon">⚛️</div>
              <div className="job-details">
                <h3>React Native Developer</h3>
                <p className="company">Unacademy • Bangalore, Karnataka</p>
                <div className="job-tags">
                  <span className="tag">React Native</span>
                  <span className="tag">Mobile</span>
                  <span className="tag">Remote</span>
                </div>
              </div>
            </div>
            <div className="job-right">
              <div className="salary">₹12-20 LPA</div>
              <div className="match-indicator high">90% Match</div>
            </div>
          </div>
        </div>

        <button className="view-all-btn" onClick={handleCTAClick}>Check Your Match</button>
      </div>
    </section>
  )
}

export default Recommendations
