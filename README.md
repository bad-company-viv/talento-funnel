# Tallento.ai - Job Seeker Funnel

A modern React + Vite conversion funnel landing page for Tallento.ai - an AI-powered teaching & IT recruitment platform focused on job seekers.

## Tech Stack

- ⚡ Vite - Next generation frontend tooling
- ⚛️ React 18 - Modern React with JSX
- 🎨 CSS3 - Custom styling with animations
- 📱 Responsive Design

## Job Seeker Funnel Flow

### 1. Immediate Value (Hero)
- Browse jobs without signup
- See salary ranges and demand metrics
- Preview AI match scores
- Teaching & IT roles highlighted

### 2. How It Works (Features)
- AI Match Scores - See fit before applying
- Salary Insights - Know your worth
- One-Click Apply - Auto-filled applications
- Career Guidance - Personalized recommendations

### 3. Three Simple Steps
- Upload Resume → AI parses profile
- AI Finds Matches → Personalized recommendations
- One-Click Apply → Instant applications

### 4. Opportunity Banner (CTA)
- Browse thousands of jobs
- Instant match scores
- No signup required to explore

### 5. Social Proof (Stats)
- 50k+ active job seekers
- 94% match accuracy
- 3 days average to interview
- Real testimonials

### 6. No Resume Section
- Start exploring without resume
- Filter by role, experience, industry
- Upload later to unlock AI features

### 7. Job Recommendations
- Teaching roles (K-12, High School)
- IT roles (Developer, Engineer)
- Match percentages displayed
- Salary ranges visible

## Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── index.html              # Entry HTML (Vite serves from root)
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.jsx           # App entry point
│   ├── App.jsx            # Main app component
│   ├── App.css
│   ├── index.css
│   └── components/
│       ├── Hero.jsx              # Hero with job preview
│       ├── CareerPath.jsx        # How it works features
│       ├── ThreeSteps.jsx        # Resume → Match → Apply
│       ├── OpportunityBanner.jsx # CTA with floating cards
│       ├── Stats.jsx             # Social proof & testimonials
│       ├── NoProblem.jsx         # Browse without resume
│       └── Recommendations.jsx   # Job listings
└── package.json
```

## Design Principles

- **Value Before Signup** - Show jobs and match scores before registration
- **Micro-Commitments** - Small actions: browse → click → check match → upload resume
- **Critical Conversion** - Resume upload unlocks AI features
- **Engagement Loop** - Alerts, notifications, continuous recommendations
- **Immediate Value** - Match scores, salary data, demand metrics upfront
- **Teaching & IT Focus** - Dual vertical approach for education and technology roles

## Key Features

- 🎯 AI-powered job matching
- 💰 Transparent salary insights
- ⚡ One-click applications
- 📈 Career guidance and analytics
- 🏫 Teaching roles (K-12, High School, College)
- 💻 IT roles (Developer, Engineer, Data Science)
- 🔥 Demand indicators
- ✨ No spam, privacy-focused

## Why Vite?

- ⚡ Lightning fast HMR (Hot Module Replacement)
- 📦 Optimized build with Rollup
- 🔧 Simple configuration
- 🚀 Modern ESM-based dev server
- 💪 Better performance than webpack

## License

MIT

