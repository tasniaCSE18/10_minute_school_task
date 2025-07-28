# IELTS Course Landing Page

A modern, responsive IELTS course landing page built with Next.js, TypeScript, and TailwindCSS. Features server-side rendering with Incremental Static Regeneration (ISR) and beautiful animations.

##  Features

### Core Features
-  **Dynamic Course Title** - Product title from API
-  **HTML Description** - Rich text content with proper rendering
-  **Instructor Profiles** - Dynamic from API sections[type=instructor]
-  **YouTube Video Player** - Trailer with automatic URL extraction
-  **Pricing Display** - Default ৳1000 with discount styling
-  **CTA Button** - Dynamic text from API

### Technical Features
-  **TypeScript** - Complete type safety throughout
-  **ISR (Incremental Static Regeneration)** - Optimal performance with fresh data
-  **SEO Optimization** - Meta tags and structured data
-  **Localization Support** - English/Bengali API parameter
-  **Responsive Design** - Mobile-first approach with TailwindCSS

### Advanced Features
-  **Dynamic Section Rendering** - API-driven content sections
-  **Component Reusability** - Modular, maintainable code
-  **Custom Animations** - Smooth transitions and micro-interactions
-  **Error Handling** - Graceful fallbacks and loading states

## Tech Stack

- **Framework**: Next.js 15.4.4
- **Language**: TypeScript
- **Styling**: TailwindCSS 3.4.17
- **Deployment**: Docker-ready
- **Data Fetching**: ISR with 1-hour revalidation

##  Installation

```bash
# Clone the repository
git clone <repository-url>
cd 10ms-task

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

##  Docker Deployment

```bash
# Build Docker image
docker build -t ielts-course-landing .

# Run container
docker run -p 3000:3000 ielts-course-landing
```

## API Integration

- **Endpoint**: `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course`
- **Headers**: `X-TENMS-SOURCE-PLATFORM: web`
- **Localization**: `?lang=en` or `?lang=bn`

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   └── YouTubePlayer.tsx
│   └── sections/           # Page sections
│       ├── HeroSection.tsx
│       ├── InstructorsSection.tsx
│       ├── PointersSection.tsx
│       ├── FeaturesSection.tsx
│       └── AboutSection.tsx
├── pages/
│   ├── _app.tsx
│   └── index.tsx           # Main page with ISR
├── types/
│   └── api.ts              # TypeScript interfaces
├── utils/
│   └── api-client.ts       # API integration
└── styles/
    └── globals.css         # Custom animations & styles
```

## Design Features

- **Modern Gradient Backgrounds** - Beautiful color transitions
- **Interactive Animations** - Hover effects and micro-interactions
- **Glass Morphism Effects** - Modern UI design patterns
- **Staggered Animations** - Progressive loading effects
- **Custom Icons** - SVG-based iconography
- **Responsive Grid Layouts** - Mobile-optimized design

## Performance

- **Static Generation**: Pre-rendered pages for optimal loading
- **ISR**: Content updates every hour automatically
- **Code Splitting**: Automatic optimization by Next.js
- **Image Optimization**: Next.js Image component
- **CSS Optimization**: TailwindCSS purging


##  Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```



