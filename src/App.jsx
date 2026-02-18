import { useEffect } from 'react'
import './App.css'

const roleChips = ['IIT JEE / NEET Faculty', 'Sales & Marketing', 'Schools / Colleges', 'Healthcare + IT']

const filters = [
  { label: 'Industry', value: 'EdTech + IT', icon: '🏢' },
  { label: 'Experience', value: '2-5 years', icon: '📊' },
  { label: 'Role Type', value: 'Full-time', icon: '💼' },
  { label: 'Location', value: 'Remote / Hybrid', icon: '📍' }
]

const previewJobs = [
  {
    role: 'IIT JEE Mathematics Teacher',
    company: 'Allen Career Institute',
    location: 'Kota, Rajasthan',
    salary: '₹8-12 LPA',
    demand: 'High Demand',
    match: 94,
    icon: '🎓'
  },
  {
    role: 'Senior Backend Developer',
    company: 'PhysicsWallah',
    location: 'Noida, UP',
    salary: '₹15-22 LPA',
    demand: 'Active Hiring',
    match: 92,
    icon: '💻'
  },
  {
    role: 'NEET Biology Faculty',
    company: 'Aakash Institute',
    location: 'Delhi NCR',
    salary: '₹7-11 LPA',
    demand: 'Fast Track',
    match: 91,
    icon: '📚'
  }
]

const funnelSteps = [
  {
    title: 'Browse role-fit jobs',
    text: 'See role-specific openings with salary, demand, and AI match scores before signup.'
  },
  {
    title: 'Open a job and check fit',
    text: 'Review responsibilities, team context, and your profile gap analysis in one screen.'
  },
  {
    title: 'Upload resume to unlock',
    text: 'Resume parsing activates full ranking, recruiter visibility, and one-click applications.'
  },
  {
    title: 'Apply with one click',
    text: 'Submit instantly with auto-filled profile and start getting recruiter responses faster.'
  }
]

const engagementLoop = [
  'Instant job alerts when your match score is above 85%',
  'Recruiter profile views and interview nudges in your dashboard',
  'Weekly AI career recommendations based on your response patterns'
]

const trustStats = [
  { value: '1M+', label: 'Talent Pool', icon: '👥' },
  { value: '5,500+', label: 'Companies', icon: '🏢' },
  { value: '100%', label: 'Verified Profiles', icon: '✓' },
  { value: 'AI', label: 'Career Guidance', icon: '🤖' }
]

const careerCards = [
  {
    icon: '🎯',
    title: 'Discover role-fit jobs',
    description: 'Browse teaching & IT roles matched to your skills and experience'
  },
  {
    icon: '💰',
    title: 'Preview salary and demand',
    description: 'See real salary ranges in ₹ LPA and hiring demand before applying'
  },
  {
    icon: '🤖',
    title: 'Get AI match score',
    description: 'Know exactly how well you fit each role with AI-powered analysis'
  },
  {
    icon: '👀',
    title: 'Track recruiter activity',
    description: 'See who viewed your profile and get instant interview invites'
  },
  {
    icon: '⚡',
    title: 'Apply with one click',
    description: 'Auto-filled applications save time and increase response rates'
  }
]

const recruiterJobs = [
  {
    role: 'IIT JEE Physics Teacher',
    company: 'Allen Career Institute',
    badge: 'A',
    tone: 'tone-indigo',
    location: 'Kota, Rajasthan',
    salary: '₹8-12 LPA',
    posted: '2h ago',
    match: 96,
    urgent: true
  },
  {
    role: 'Senior Backend Developer',
    company: 'PhysicsWallah',
    badge: 'P',
    tone: 'tone-purple',
    location: 'Noida, UP',
    salary: '₹15-22 LPA',
    posted: '3h ago',
    match: 93,
    urgent: true
  },
  {
    role: 'NEET Chemistry Faculty',
    company: 'Aakash Institute',
    badge: 'A',
    tone: 'tone-coral',
    location: 'Delhi NCR',
    salary: '₹7-11 LPA',
    posted: '5h ago',
    match: 91,
    urgent: false
  },
  {
    role: 'Product Manager',
    company: 'Unacademy',
    badge: 'U',
    tone: 'tone-cyan',
    location: 'Bangalore, KA',
    salary: '₹18-28 LPA',
    posted: '6h ago',
    match: 89,
    urgent: false
  },
  {
    role: 'Academic Counselor',
    company: "Byju's",
    badge: 'B',
    tone: 'tone-green',
    location: 'Bangalore, KA',
    salary: '₹5-8 LPA',
    posted: '8h ago',
    match: 87,
    urgent: false
  },
  {
    role: 'React Native Developer',
    company: 'Vedantu',
    badge: 'V',
    tone: 'tone-orange',
    location: 'Remote',
    salary: '₹12-18 LPA',
    posted: '10h ago',
    match: 90,
    urgent: false
  }
]

const recommendedJobs = [
  {
    role: 'IIT JEE Mathematics Teacher',
    company: 'Allen Career Institute',
    location: 'Kota, Rajasthan',
    salary: '₹8-12 LPA',
    match: 94,
    tags: ['IIT JEE', 'Mathematics', 'Full-time']
  },
  {
    role: 'Backend Developer',
    company: 'PhysicsWallah',
    location: 'Noida, UP',
    salary: '₹10-18 LPA',
    match: 91,
    tags: ['Node.js', 'MongoDB', 'Remote']
  },
  {
    role: 'NEET Chemistry Faculty',
    company: 'Aakash Institute',
    location: 'Delhi NCR',
    salary: '₹6-10 LPA',
    match: 89,
    tags: ['NEET', 'Chemistry', 'Full-time']
  },
  {
    role: 'Full Stack Developer',
    company: 'Unacademy',
    location: 'Bangalore, KA',
    salary: '₹12-20 LPA',
    match: 92,
    tags: ['React', 'Node.js', 'Hybrid']
  },
  {
    role: 'Academic Counselor',
    company: "Byju's",
    location: 'Bangalore, KA',
    salary: '₹4-7 LPA',
    match: 86,
    tags: ['Sales', 'Counseling', 'Full-time']
  },
  {
    role: 'English Teacher (CBSE)',
    company: 'Delhi Public School',
    location: 'Pune, MH',
    salary: '₹5-8 LPA',
    match: 88,
    tags: ['CBSE', 'English', 'Full-time']
  }
]

const jobCategories = [
  { title: 'IIT JEE NEET Olympiad NDA Coaching Jobs', icon: '🎓' },
  { title: 'Sales Marketing Non Teaching Jobs', icon: '📣' },
  { title: 'Schools Teaching Non Teaching Jobs', icon: '🏫' },
  { title: 'College Universities Jobs', icon: '🏛️' },
  { title: 'CA CS CAT MAT Jobs', icon: '🧮' },
  { title: 'IIT JAM GATE NET Jobs', icon: '🧪' },
  { title: 'Medical Nursing College Jobs', icon: '🩺' },
  { title: 'IT Jobs', icon: '💻' },
  { title: 'Health Care', icon: '❤️' }
]

const hiringTrends = [
  { label: 'Teaching & Coaching', value: 92 },
  { label: 'Non-Teaching Ops', value: 74 },
  { label: 'Healthcare', value: 68 },
  { label: 'IT & Product', value: 81 }
]

function App() {
  const handleCheckMatch = () => {
    window.location.href = 'https://tallento.ai/'
  }

  const handleResumeUpload = () => {
    window.location.href = 'https://tallento.ai/resume-checker'
  }

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="funnel">
      <header className="top-nav">
        <div className="container nav-inner">
          <a href="#" className="brand" aria-label="Tallento home">
            <img src="/logo.webp" alt="Tallento.ai logo" />
          </a>
          <button 
            type="button" 
            className="nav-cta"
            onClick={() => window.location.href = 'https://tallento.ai/'}
          >
            Get Matched in 60s
          </button>
        </div>
      </header>

      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>
              Find the right role,
              <span> not another job board.</span>
            </h1>
            <p>
              Get immediate relevance with role-fit jobs, real salary bands, hiring demand, and AI match
              confidence before you create an account.
            </p>
            <div className="chip-row">
              {roleChips.map((chip) => (
                <button key={chip} className="chip" type="button">
                  {chip}
                </button>
              ))}
            </div>
            <div className="hero-cta-row">
              <button 
                type="button" 
                className="btn-primary"
                onClick={() => window.location.href = 'https://tallento.ai/'}
              >
                Browse Jobs
              </button>
              <a
                className="btn-secondary"
                href="https://tallento.ai/resume-checker"
                target="_blank"
                rel="noreferrer"
              >
                Check ATS Score
              </a>
            </div>
          </div>

          <div className="relevance-card">
            <div className="relevance-head">
              <p>Personal Match Dashboard</p>
              <strong>92% profile fit</strong>
            </div>
            <div className="gauge-wrap" aria-label="Match quality gauge">
              <div className="gauge-fill">
                <span>92</span>
              </div>
              <p>Match Confidence Gauge</p>
            </div>
            <div className="metric-grid">
              <div>
                <span>Salary Range</span>
                <strong>$95k-$128k</strong>
              </div>
              <div>
                <span>Open Roles</span>
                <strong>218</strong>
              </div>
              <div>
                <span>Market Demand</span>
                <strong>Very High</strong>
              </div>
              <div>
                <span>Response Time</span>
                <strong>~36 hrs</strong>
              </div>
            </div>
          </div>
        </div>
        <a href="#hiring-trends" className="scroll-next" aria-label="Scroll to next section">
          Scroll to explore ↓
        </a>
      </section>

      <section className="infographic-section animate-on-scroll" id="hiring-trends">
        <div className="container">
          <article className="trend-card">
            <h3>Live hiring trend by category</h3>
            <div className="trend-bars">
              {hiringTrends.map((trend) => (
                <div key={trend.label} className="trend-row">
                  <span>{trend.label}</span>
                  <div className="trend-track">
                    <div className="trend-fill" style={{ width: `${trend.value}%` }} />
                  </div>
                  <strong>{trend.value}%</strong>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="categories-section animate-on-scroll">
        <div className="container">
          <div className="section-head">
            <h2>Opportunities across every major career track</h2>
            <p>Not only tech jobs. Tallento supports teaching, non-teaching, exams, healthcare, and IT roles.</p>
          </div>
          <div className="categories-grid">
            {jobCategories.map((category) => (
              <article key={category.title} className="category-item">
                <span className="category-icon" aria-hidden="true">
                  {category.icon}
                </span>
                <p>{category.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-strip animate-on-scroll">
        <div className="container trust-grid">
          {trustStats.map((item) => (
            <article key={item.label}>
              <div className="trust-icon">{item.icon}</div>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="career-start animate-on-scroll">
        <div className="container">
          <div className="section-head">
            <h2>Your career path starts here</h2>
            <p>Make better job decisions with relevance-first discovery and AI guided fit checks.</p>
          </div>
          <div className="career-grid">
            {careerCards.map((item) => (
              <article key={item.title} className="career-card">
                <div className="career-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="filters-section animate-on-scroll">
        <div className="container">
          <div className="section-head">
            <h2>Personalize your feed in 15 seconds</h2>
            <p>Set your context once. Tallento continuously updates recommendations around your goals.</p>
          </div>
          <div className="filter-grid">
            {filters.map((filter) => (
              <article key={filter.label} className="filter-card">
                <div className="filter-icon">{filter.icon}</div>
                <span className="filter-label">{filter.label}</span>
                <strong className="filter-value">{filter.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="preview-section animate-on-scroll" id="jobs">
        <div className="container">
          <div className="section-head">
            <h2>Preview value before signup</h2>
            <p>Explore real openings and AI fit previews before committing your profile details.</p>
          </div>
          <div className="jobs-grid">
            {previewJobs.map((job) => (
              <article key={job.role} className="job-preview-card">
                <div className="job-preview-header">
                  <div className="job-icon">{job.icon}</div>
                </div>
                <h3>{job.role}</h3>
                <p className="job-company">{job.company}</p>
                <div className="job-meta-preview">
                  <small>📍 {job.location}</small>
                  <small>💰 {job.salary}</small>
                  <small className="demand-badge">{job.demand}</small>
                </div>
                <button type="button" className="check-match-preview" onClick={handleCheckMatch}>Check Match</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section animate-on-scroll" id="how-it-works">
        <div className="container">
          <div className="section-head">
            <h2>Micro-commitment journey</h2>
            <p>Low friction path: browse, open, evaluate fit, then unlock with resume upload.</p>
          </div>
          <div className="journey-grid">
            {funnelSteps.map((step, idx) => (
              <article className="journey-card" key={step.title}>
                <span>0{idx + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="recruiters-section animate-on-scroll">
        <div className="container">
          <div className="recruiter-head">
            <div className="section-head left">
              <h2>Recruiters are actively hiring.</h2>
              <p>Fresh roles added every hour. Your perfect match could be live right now across India.</p>
            </div>
            <button type="button" className="view-jobs-btn">
              View All Jobs →
            </button>
          </div>

          <div className="recruiter-grid">
            {recruiterJobs.map((job) => (
              <article key={job.role} className="recruiter-card">
                <div className="recruiter-top">
                  <div className={`company-badge ${job.tone}`}>{job.badge}</div>
                  <div className="recruiter-title-wrap">
                    <h3>
                      {job.role} <span className="verified-mark">✓</span>
                      {job.urgent && <span className="urgent-badge">Urgent</span>}
                    </h3>
                    <p>{job.company}</p>
                  </div>
                  <button type="button" className="bookmark-btn" aria-label={`Save ${job.role}`}>
                    ⭐
                  </button>
                </div>

                <div className="recruiter-meta">
                  <span>📍 {job.location}</span>
                  <span>💰 {job.salary}</span>
                  <span>🕒 {job.posted}</span>
                </div>

                <button type="button" className="apply-quick-btn">
                  Quick Apply
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mid-cta animate-on-scroll">
        <div className="container">
          <h2>Your next opportunity should not take months.</h2>
          <p>Get discovered by recruiters and unlock role-fit jobs in minutes.</p>
          <button type="button" className="btn-primary">
            Start Your Profile
          </button>
        </div>
      </section>

      <section className="proof-section animate-on-scroll">
        <div className="container proof-grid">
          <div className="proof-media">
            <h3>They found their dream job. You are next.</h3>
            <div className="video-placeholder">
              <img src="/Testimonials.png" alt="Success Stories" className="testimonials-image" />
            </div>
          </div>
          <div className="proof-list">
            <article>
              <strong>94%</strong>
              <p>match confidence after resume upload</p>
            </article>
            <article>
              <strong>3 Days</strong>
              <p>average first recruiter response</p>
            </article>
            <article>
              <strong>45%</strong>
              <p>higher interview conversion</p>
            </article>
          </div>
        </div>
      </section>

      <section className="testimonials-section animate-on-scroll">
        <div className="container">
          <div className="testimonials-grid">
            <article className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">👨‍💻</div>
                <div className="testimonial-info">
                  <h4>Rahul Sharma</h4>
                  <p>Software Engineer at PhysicsWallah</p>
                </div>
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="testimonial-quote">
                "I uploaded my resume on Monday and had three interviews scheduled by Friday. 
                The AI matching was incredibly accurate. Got placed in my dream EdTech company!"
              </p>
            </article>

            <article className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">👨‍🏫</div>
                <div className="testimonial-info">
                  <h4>Priya Patel</h4>
                  <p>IIT JEE Physics Teacher at Allen</p>
                </div>
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="testimonial-quote">
                "What impressed me most was how the platform understood my teaching experience. 
                Not just my skills, but my passion for education. Life-changing opportunity!"
              </p>
            </article>

            <article className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">👩‍💼</div>
                <div className="testimonial-info">
                  <h4>Anjali Verma</h4>
                  <p>Academic Counselor at Byju's</p>
                </div>
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="testimonial-quote">
                "As someone from a Tier 2 city, I was skeptical. But the quality of matches was exceptional. 
                Found my dream role in just 2 weeks with 40% salary hike!"
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="resume-section animate-on-scroll">
        <div className="container resume-grid">
          <div className="resume-content">
            <div className="resume-badge">🚀 Unlock AI Features</div>
            <h2>Resume upload unlocks your best opportunities</h2>
            <p>
              AI parses your skills, experience, and career trajectory to rank jobs, improve match quality, 
              and auto-fill applications. Get personalized recommendations in seconds.
            </p>
            <div className="resume-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>AI-powered profile parsing</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Instant job matching & ranking</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>One-click application auto-fill</span>
              </div>
            </div>
            <button type="button" className="btn-primary" onClick={handleResumeUpload}>
              Upload Resume & Unlock
            </button>
          </div>
          <div className="resume-panel">
            <div className="panel-header">
              <span className="status-badge">✓ AI Parsing Complete</span>
            </div>
            <div className="panel-content">
              <h3>Top fit: IIT JEE Mathematics Teacher</h3>
              <p className="company-match">Allen Career Institute • 96% Match</p>
              <ul className="insights-list">
                <li>
                  <span className="insight-icon">🎯</span>
                  <span>5 high-fit teaching jobs unlocked</span>
                </li>
                <li>
                  <span className="insight-icon">📊</span>
                  <span>Profile completion: 42% → 94%</span>
                </li>
                <li>
                  <span className="insight-icon">⚡</span>
                  <span>One-click apply now available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="recommended-section animate-on-scroll">
        <div className="container">
          <div className="section-head">
            <h2>Recommended for you</h2>
            <p>Based on your role goals, salary intent, and experience across India.</p>
          </div>
          <div className="recommended-grid">
            {recommendedJobs.map((job) => (
              <article key={job.role} className="recommended-card">
                <div className="recommended-header">
                  <div className="company-icon-small">
                    {job.company.includes('Allen') ? '🎓' : 
                     job.company.includes('Physics') ? '💻' : 
                     job.company.includes('Aakash') ? '📚' :
                     job.company.includes('Unacademy') ? '⚛️' :
                     job.company.includes('Byju') ? '🎯' : '👨‍🏫'}
                  </div>
                </div>
                <h3>{job.role}</h3>
                <p className="company-name">{job.company}</p>
                <div className="job-meta-row">
                  <span>📍 {job.location}</span>
                  <span>💰 {job.salary}</span>
                </div>
                <div className="job-tags-row">
                  {job.tags.map((tag) => (
                    <span key={tag} className="job-tag">{tag}</span>
                  ))}
                </div>
                <button type="button" className="check-match-btn" onClick={handleCheckMatch}>Check Match</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="loop-section animate-on-scroll">
        <div className="container">
          <div className="section-head">
            <h2>Your complete job search journey</h2>
            <p>From application to career growth - we've got you covered at every step.</p>
          </div>
          <div className="loop-grid">
            <article className="loop-card">
              <div className="loop-icon">⚡</div>
              <h3>Easy application, higher output</h3>
              <p>One-click apply with auto-filled profile, resume highlights, and role-specific pitch snippets. Save hours on applications.</p>
              <div className="loop-features">
                <span className="feature-tag">✓ Auto-fill applications</span>
                <span className="feature-tag">✓ Resume highlights</span>
                <span className="feature-tag">✓ Custom pitch snippets</span>
              </div>
            </article>
            <article className="loop-card">
              <div className="loop-icon">🔄</div>
              <h3>Engagement loop</h3>
              <p>Stay informed and never miss an opportunity with real-time updates.</p>
              <ul className="engagement-list">
                {engagementLoop.map((item) => (
                  <li key={item}>
                    <span className="list-icon">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="loop-card">
              <div className="loop-icon">🎯</div>
              <h3>Retention engine</h3>
              <p>
                Continuous job recommendations and AI career guidance keep you active and growing beyond your first application.
              </p>
              <div className="loop-features">
                <span className="feature-tag">✓ Weekly recommendations</span>
                <span className="feature-tag">✓ Career insights</span>
                <span className="feature-tag">✓ Skill development</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="footer-cta animate-on-scroll" id="career">
        <div className="container">
          <h2>Your next role should not take months.</h2>
          <p>Start with relevance. Unlock with resume. Apply in one click.</p>
          <button 
            type="button" 
            className="btn-primary"
            onClick={() => window.location.href = 'https://tallento.ai/'}
          >
            Get Hired Faster
          </button>
        </div>
      </section>

      <footer className="site-footer animate-on-scroll">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/logo.webp" alt="Tallento.ai logo" />
            </div>
            <div className="footer-text">
              <p className="footer-description">
                Discover Tallento.ai, the innovative online educational job portal for IIT JEE, NEET, schools, 
                colleges, universities, and other educational institutes. Connect with top talent and premier 
                educational opportunities effortlessly.
              </p>
              <p className="footer-copyright">
                All rights reserved © {new Date().getFullYear()} FPS JOB PRIVATE LIMITED
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
