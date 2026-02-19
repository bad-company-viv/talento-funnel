import { useEffect } from 'react'
import './App.css'

const roleChips = ['IIT JEE / NEET Faculty', 'Sales & Marketing', 'Schools / Colleges', 'Healthcare + IT']

const filters = [
  { label: 'Industry', value: 'EdTech + IT', icon: 'building' },
  { label: 'Experience', value: '2-5 years', icon: 'chart' },
  { label: 'Role Type', value: 'Full-time', icon: 'briefcase' },
  { label: 'Location', value: 'Remote / Hybrid', icon: 'pin' }
]

const previewJobs = [
  {
    role: 'IIT JEE Mathematics Teacher',
    company: 'Allen Career Institute',
    location: 'Kota, Rajasthan',
    salary: '₹8-12 LPA',
    demand: 'High Demand',
    match: 94,
    icon: 'graduation'
  },
  {
    role: 'Senior Backend Developer',
    company: 'PhysicsWallah',
    location: 'Noida, UP',
    salary: '₹15-22 LPA',
    demand: 'Active Hiring',
    match: 92,
    icon: 'code'
  },
  {
    role: 'NEET Biology Faculty',
    company: 'Aakash Institute',
    location: 'Delhi NCR',
    salary: '₹7-11 LPA',
    demand: 'Fast Track',
    match: 91,
    icon: 'book'
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
  { value: '1M+', label: 'Talent Pool', icon: 'users' },
  { value: '5,500+', label: 'Companies', icon: 'building' },
  { value: '100%', label: 'Verified Profiles', icon: 'checkBadge' },
  { value: 'AI', label: 'Career Guidance', icon: 'spark' }
]

const careerJourneySteps = [
  {
    number: '01',
    icon: 'target',
    title: 'Browse role-fit jobs',
    description: 'See teaching & IT roles with salary ranges in ₹ LPA, hiring demand, and AI match scores before signup.'
  },
  {
    number: '02',
    icon: 'coins',
    title: 'Preview salary and demand',
    description: 'Real salary ranges and market demand insights help you make informed decisions before applying.'
  },
  {
    number: '03',
    icon: 'spark',
    title: 'Get AI match score',
    description: 'Know exactly how well you fit each role with AI-powered analysis of your skills and experience.'
  },
  {
    number: '04',
    icon: 'file',
    title: 'Upload resume to unlock',
    description: 'AI parsing activates full ranking, recruiter visibility, and one-click application features.'
  },
  {
    number: '05',
    icon: 'bolt',
    title: 'Apply & track activity',
    description: 'One-click apply with auto-filled profile and track recruiter views and interview invites in real-time.'
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

const jobCategories = [
  { title: 'IIT JEE NEET Olympiad NDA Coaching Jobs', icon: 'graduation' },
  { title: 'Sales Marketing Non Teaching Jobs', icon: 'megaphone' },
  { title: 'Schools Teaching Non Teaching Jobs', icon: 'school' },
  { title: 'College Universities Jobs', icon: 'university' },
  { title: 'CA CS CAT MAT Jobs', icon: 'calculator' },
  { title: 'IIT JAM GATE NET Jobs', icon: 'flask' },
  { title: 'Medical Nursing College Jobs', icon: 'stethoscope' },
  { title: 'IT Jobs', icon: 'code' },
  { title: 'Health Care', icon: 'heart' }
]

const hiringTrends = [
  { label: 'Teaching & Coaching', value: 92 },
  { label: 'Non-Teaching Ops', value: 74 },
  { label: 'Healthcare', value: 68 },
  { label: 'IT & Product', value: 81 }
]

function Icon({ name, className = '' }) {
  const cls = `app-icon ${className}`.trim()

  switch (name) {
    case 'building':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M3 21h18M6 21V5h12v16M9 9h.01M12 9h.01M15 9h.01M9 13h.01M12 13h.01M15 13h.01M11 21v-4h2v4" /></svg>
    case 'chart':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M4 20V10M10 20V4M16 20v-7M22 20v-12M3 20h20" /></svg>
    case 'briefcase':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M9 6V4h6v2M3 9h18v10H3zM3 12h18" /></svg>
    case 'pin':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M12 22s7-5.4 7-12a7 7 0 1 0-14 0c0 6.6 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></svg>
    case 'graduation':
      return <svg viewBox="0 0 24 24" className={cls}><path d="m2 9 10-5 10 5-10 5L2 9Zm4 2.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" /></svg>
    case 'code':
      return <svg viewBox="0 0 24 24" className={cls}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" /></svg>
    case 'book':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M4 5h8a3 3 0 0 1 3 3v11H7a3 3 0 0 0-3 3V5Zm16 0h-8a3 3 0 0 0-3 3v11h8a3 3 0 0 1 3 3V5Z" /></svg>
    case 'users':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    case 'checkBadge':
      return <svg viewBox="0 0 24 24" className={cls}><path d="m9 12 2 2 4-4M12 3l2.4 1.6 2.9-.3.8 2.8 2.5 1.5-1.5 2.5.3 2.9-2.8.8-1.6 2.4-2.4-1.6-2.9.3-.8-2.8-2.5-1.5 1.5-2.5-.3-2.9 2.8-.8L12 3Z" /></svg>
    case 'spark':
      return <svg viewBox="0 0 24 24" className={cls}><path d="m12 3 2.2 4.8L19 10l-4.8 2.2L12 17l-2.2-4.8L5 10l4.8-2.2L12 3Zm7 11 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2ZM5 14l.8 1.7L7.5 17l-1.7.8L5 19.5l-.8-1.7L2.5 17l1.7-.8L5 14Z" /></svg>
    case 'target':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" /></svg>
    case 'coins':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M6 6c0-1.7 2.7-3 6-3s6 1.3 6 3-2.7 3-6 3-6-1.3-6-3Zm0 6c0 1.7 2.7 3 6 3s6-1.3 6-3M6 18c0 1.7 2.7 3 6 3s6-1.3 6-3M6 6v12m12-12v12" /></svg>
    case 'file':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M14 2H6v20h12V8l-4-6Zm0 0v6h4M8 13h8M8 17h8" /></svg>
    case 'bolt':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /></svg>
    case 'megaphone':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M3 11v2a3 3 0 0 0 3 3h2l6 3V5L8 8H6a3 3 0 0 0-3 3Zm11-3 7-2v12l-7-2" /></svg>
    case 'school':
      return <svg viewBox="0 0 24 24" className={cls}><path d="m2 10 10-6 10 6-10 6-10-6Zm3 1.8V18h14v-6.2M10 18v-4h4v4" /></svg>
    case 'university':
      return <svg viewBox="0 0 24 24" className={cls}><path d="m2 9 10-5 10 5M4 10v8M8 10v8M12 10v8M16 10v8M20 10v8M2 21h20" /></svg>
    case 'calculator':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M7 3h10v18H7zM9 7h6M9 11h2M13 11h2M9 15h2M13 15h2M9 19h6" /></svg>
    case 'flask':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M10 2h4M10 2v4l-5 9a4 4 0 0 0 3.5 6h7a4 4 0 0 0 3.5-6l-5-9V2M8 14h8" /></svg>
    case 'stethoscope':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M6 3v5a4 4 0 0 0 8 0V3M4 3h4M12 3h4M14 14v2a4 4 0 1 0 8 0v-2a2 2 0 1 0-4 0v2a2 2 0 1 1-4 0v-2Z" /></svg>
    case 'heart':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M12 21s-7-4.3-9.2-9A5.3 5.3 0 0 1 12 6a5.3 5.3 0 0 1 9.2 6c-2.2 4.7-9.2 9-9.2 9Z" /></svg>
    case 'clock':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M12 7v5l3 3M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
    case 'bookmark':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M6 3h12v18l-6-4-6 4V3Z" /></svg>
    case 'star':
      return <svg viewBox="0 0 24 24" className={cls}><path d="m12 3 2.7 5.5 6 .9-4.4 4.2 1 6-5.3-2.8-5.3 2.8 1-6L3.3 9.4l6-.9L12 3Z" /></svg>
    case 'rocket':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M5 14c0-5 4-9 9-9h3v3c0 5-4 9-9 9H5Zm6-6 4 4M7 15l-2 4 4-2M10 18l-1 3 3-1" /></svg>
    case 'refresh':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M3 12a9 9 0 0 1 15.4-6.4L21 8M21 4v4h-4M21 12a9 9 0 0 1-15.4 6.4L3 16M3 20v-4h4" /></svg>
    case 'arrowRight':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    case 'userCode':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M18 9l-2 2 2 2M22 9l2 2-2 2" /></svg>
    case 'userTeach':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M18 10h6M21 7v6" /></svg>
    case 'userWork':
      return <svg viewBox="0 0 24 24" className={cls}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M17 9h6v8h-6z" /></svg>
    default:
      return null
  }
}

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
                <strong>₹9.5-₹12.8 LPA</strong>
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
        <a href="#hiring-trends" className="scroll-next hero-scroll-next" aria-label="Scroll to next section">
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

      <section className="categories-section animate-on-scroll" id="categories">
        <div className="container">
          <div className="section-head">
            <h2>Opportunities across every major career track</h2>
            <p>Not only tech jobs. Tallento supports teaching, non-teaching, exams, healthcare, and IT roles.</p>
          </div>
          <div className="categories-grid">
            {jobCategories.map((category) => (
              <article key={category.title} className="category-item">
                <span className="category-icon" aria-hidden="true">
                  <Icon name={category.icon} />
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
              <div className="trust-icon"><Icon name={item.icon} /></div>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="career-journey-section animate-on-scroll" id="how-it-works">
        <div className="container">
          <div className="section-head">
            <h2>Your complete career journey with Tallento</h2>
            <p>From discovery to hire - a seamless, AI-powered path designed for teaching & IT professionals.</p>
          </div>
          <div className="journey-grid">
            {careerJourneySteps.map((step, idx) => (
              <article className="journey-card" key={step.title}>
                <div className="journey-icon"><Icon name={step.icon} /></div>
                <div className="journey-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <span>{step.number}</span>
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
                <div className="filter-icon"><Icon name={filter.icon} /></div>
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
                  <div className="job-icon"><Icon name={job.icon} /></div>
                </div>
                <h3>{job.role}</h3>
                <p className="job-company">{job.company}</p>
                <div className="job-meta-preview">
                  <small><Icon name="pin" className="inline-icon" /> {job.location}</small>
                  <small><Icon name="coins" className="inline-icon" /> {job.salary}</small>
                  <small className="demand-badge">{job.demand}</small>
                </div>
                <button type="button" className="check-match-preview" onClick={handleCheckMatch}>Check Match</button>
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
                <div className="testimonial-avatar">
                  <img src="https://images.pexels.com/photos/3400573/pexels-photo-3400573.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&dpr=2" alt="Rahul Sharma" onError={(e) => { e.currentTarget.src = '/avatar-fallback.svg' }} />
                </div>
                <div className="testimonial-info">
                  <h4>Rahul Sharma</h4>
                  <p>Software Engineer</p>
                </div>
                <div className="testimonial-rating">
                  {Array.from({ length: 5 }).map((_, i) => <Icon key={`r1-${i}`} name="star" className="rating-star" />)}
                </div>
              </div>
              <p className="testimonial-quote">
                "I uploaded my resume on Monday and had three interviews scheduled by Friday. 
                The AI matching was incredibly accurate. Got placed in my dream EdTech company!"
              </p>
            </article>

            <article className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="https://images.pexels.com/photos/33703816/pexels-photo-33703816.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&dpr=2" alt="Priya Patel" onError={(e) => { e.currentTarget.src = '/avatar-fallback.svg' }} />
                </div>
                <div className="testimonial-info">
                  <h4>Priya Patel</h4>
                  <p>IIT JEE Physics Teacher</p>
                </div>
                <div className="testimonial-rating">
                  {Array.from({ length: 5 }).map((_, i) => <Icon key={`r2-${i}`} name="star" className="rating-star" />)}
                </div>
              </div>
              <p className="testimonial-quote">
                "What impressed me most was how the platform understood my teaching experience. 
                Not just my skills, but my passion for education. Life-changing opportunity!"
              </p>
            </article>

            <article className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&dpr=2" alt="Anjali Verma" onError={(e) => { e.currentTarget.src = '/avatar-fallback.svg' }} />
                </div>
                <div className="testimonial-info">
                  <h4>Anjali Verma</h4>
                  <p>Academic Counselor</p>
                </div>
                <div className="testimonial-rating">
                  {Array.from({ length: 5 }).map((_, i) => <Icon key={`r3-${i}`} name="star" className="rating-star" />)}
                </div>
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
            <div className="resume-badge"><Icon name="rocket" className="inline-icon" /> Unlock AI Features</div>
            <h2>Resume upload unlocks your best opportunities</h2>
            <p>
              AI parses your skills, experience, and career trajectory to rank jobs, improve match quality, 
              and auto-fill applications. Get personalized recommendations in seconds.
            </p>
            <div className="resume-benefits">
              <div className="benefit-item">
                <span className="benefit-icon"><Icon name="checkBadge" /></span>
                <span>AI-powered profile parsing</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon"><Icon name="checkBadge" /></span>
                <span>Instant job matching & ranking</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon"><Icon name="checkBadge" /></span>
                <span>One-click application auto-fill</span>
              </div>
            </div>
            <button type="button" className="btn-primary" onClick={handleResumeUpload}>
              Upload Resume & Unlock
            </button>
          </div>
          <div className="resume-panel">
            <div className="panel-header">
              <span className="status-badge"><Icon name="checkBadge" className="inline-icon" /> AI Parsing Complete</span>
            </div>
            <div className="panel-content">
              <h3>Top fit: IIT JEE Mathematics Teacher</h3>
              <p className="company-match">Allen Career Institute • 96% Match</p>
              <ul className="insights-list">
                <li>
                  <span className="insight-icon"><Icon name="target" /></span>
                  <span>5 high-fit teaching jobs unlocked</span>
                </li>
                <li>
                  <span className="insight-icon"><Icon name="chart" /></span>
                  <span>Profile completion: 42% to 94%</span>
                </li>
                <li>
                  <span className="insight-icon"><Icon name="bolt" /></span>
                  <span>One-click apply now available</span>
                </li>
              </ul>
            </div>
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
              View All Jobs <Icon name="arrowRight" className="inline-icon" />
            </button>
          </div>

          <div className="recruiter-grid">
            {recruiterJobs.map((job) => (
              <article key={job.role} className="recruiter-card">
                <div className="recruiter-top">
                  <div className={`company-badge ${job.tone}`}>{job.badge}</div>
                  <div className="recruiter-title-wrap">
                    <h3>
                      {job.role} <span className="verified-mark"><Icon name="checkBadge" /></span>
                      {job.urgent && <span className="urgent-badge">Urgent</span>}
                    </h3>
                    <p>{job.company}</p>
                  </div>
                  <button type="button" className="bookmark-btn" aria-label={`Save ${job.role}`}>
                    <Icon name="bookmark" />
                  </button>
                </div>

                <div className="recruiter-meta">
                  <span><Icon name="pin" className="inline-icon" /> {job.location}</span>
                  <span><Icon name="coins" className="inline-icon" /> {job.salary}</span>
                  <span><Icon name="clock" className="inline-icon" /> {job.posted}</span>
                </div>

                <button type="button" className="apply-quick-btn">
                  Quick Apply
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="priority-section animate-on-scroll">
        <div className="container">
          <div className="priority-card">
            <div className="priority-badge">TALLENTO.AI • JOB BOOST</div>
            <h2>Be a <span className="priority-highlight">Priority Applicant</span></h2>
            <p className="priority-description">
              Get faster profile visibility in recruiter searches, instant notifications for job matches, 
              and callbacks. Gain more recruiter engagement with a higher number of interviews.
            </p>
            <ul className="priority-benefits">
              <li>• Shown on top for recruiters searching similar profiles</li>
              <li>• Smart alerts when matching jobs are posted</li>
              <li>• Perfect for serious job seekers who don't want to miss out</li>
            </ul>
            <button type="button" className="priority-cta" onClick={() => window.location.href = 'https://tallento.ai/'}>
              Activate Priority Mode <Icon name="arrowRight" className="inline-icon" />
            </button>
            <p className="priority-footer">Limited launch pricing • 100% job-seeker focused</p>
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
              <div className="loop-icon"><Icon name="bolt" /></div>
              <h3>Easy application, higher output</h3>
              <p>One-click apply with auto-filled profile, resume highlights, and role-specific pitch snippets. Save hours on applications.</p>
              <div className="loop-features">
                <span className="feature-tag"><Icon name="checkBadge" className="inline-icon" /> Auto-fill applications</span>
                <span className="feature-tag"><Icon name="checkBadge" className="inline-icon" /> Resume highlights</span>
                <span className="feature-tag"><Icon name="checkBadge" className="inline-icon" /> Custom pitch snippets</span>
              </div>
            </article>
            <article className="loop-card">
              <div className="loop-icon"><Icon name="refresh" /></div>
              <h3>Engagement loop</h3>
              <p>Stay informed and never miss an opportunity with real-time updates.</p>
              <ul className="engagement-list">
                {engagementLoop.map((item) => (
                  <li key={item}>
                    <span className="list-icon"><Icon name="arrowRight" /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="loop-card">
              <div className="loop-icon"><Icon name="target" /></div>
              <h3>Retention engine</h3>
              <p>
                Continuous job recommendations and AI career guidance keep you active and growing beyond your first application.
              </p>
              <div className="loop-features">
                <span className="feature-tag"><Icon name="checkBadge" className="inline-icon" /> Weekly recommendations</span>
                <span className="feature-tag"><Icon name="checkBadge" className="inline-icon" /> Career insights</span>
                <span className="feature-tag"><Icon name="checkBadge" className="inline-icon" /> Skill development</span>
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
