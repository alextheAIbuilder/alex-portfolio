# Alex's 3D Portfolio Website

Build a stunning 3D portfolio website for Alex — a web designer & developer who builds modern websites for businesses.

## Tech Stack
- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Three.js + React Three Fiber + Drei for 3D elements
- Framer Motion for animations

## Design Direction
- Dark theme with gradient accents (deep purple → cyan)
- Floating 3D geometric shapes in hero (rotating torus, icosahedron, etc.)
- Smooth scroll animations
- Premium, modern, bold typography
- Mobile responsive (3D elements simplify on mobile)

## Sections

### 1. Hero
- Large text: "I Design & Build Websites That Convert"
- Subtitle: "Modern, fast, beautiful websites for businesses that want to stand out"
- 3D animated background with floating geometric shapes (low-poly style)
- CTA buttons: "View My Work" + "Let's Talk"
- Subtle particle effect or star field behind the 3D objects

### 2. About
- Brief intro: Alex is a web designer & developer specializing in modern business websites
- Skills: Next.js, React, Three.js, Tailwind CSS, TypeScript, Shopify, WordPress
- "I help businesses go from invisible to unforgettable online"
- Maybe a 3D rotating cube showing different skill icons on each face

### 3. Services
Cards with subtle 3D tilt effect on hover:
- **Custom Websites** — Built from scratch, fully unique
- **E-commerce** — Shopify & custom stores that sell
- **3D/Interactive Sites** — Immersive web experiences
- **Redesigns** — Transform your outdated site into something modern

### 4. Portfolio / Work
Grid of project cards with hover animations. Use 9 portfolio projects:
1. Saffron & Sage — Restaurant (saffron-sage-restaurant.vercel.app)
2. Prism AI — SaaS (prism-ai-saas.vercel.app)
3. Elena Reeves — Real Estate (elena-reeves-realestate.vercel.app)
4. APEX Performance — Gym (apex-gym-pearl.vercel.app)
5. Sterling & Associates — Law (sterling-law-two.vercel.app)
6. Bright Smile — Dental (bright-smile-dental-zeta.vercel.app)
7. Ember & Brew — Coffee (ember-brew-cafe.vercel.app)
8. MindShift Academy — Courses (mindshift-academy.vercel.app)
9. AURA Headphones — E-commerce (aura-headphones.vercel.app)

Each card: screenshot placeholder (use colored gradient), project name, niche tag, "View Live" link

### 5. Testimonials
3 fake but realistic testimonials from business owners (different niches)
With star ratings and subtle fade-in animation

### 6. Contact
- Heading: "Ready to Level Up Your Online Presence?"
- Contact form: Name, Email, Project Type (dropdown), Message
- Or reach out: alex@nexomateai.com
- Social links: GitHub (alextheAIbuilder)

### 7. Footer
- "© 2026 Alex. Built with ☕ and code."
- Quick links to sections
- NexomateAI branding subtle

## 3D Elements Guide
- Hero: 3 or 4 floating geometric shapes (torus, icosahedron, octahedron) slowly rotating
- Use OrbitControls disabled (camera moves slightly with mouse for parallax)
- Wireframe or glass material on shapes
- Gradient mesh or environment map for reflections
- Keep it performant — no heavy textures

## Color Palette
- Background: #0a0a0a
- Primary: #8b5cf6 (purple)
- Secondary: #06b6d4 (cyan)
- Accent: #f59e0b (amber for highlights)
- Text: #f5f5f5
- Muted: #737373

## Fonts
- Headings: bold, large, maybe Inter or Space Grotesk
- Body: Inter or system

## Important
- Must be fully responsive
- 3D should degrade gracefully on mobile (simpler or hidden)
- Page should load fast — lazy load Three.js
- Smooth scroll between sections
- Install all dependencies and verify build works

When completely finished, run: openclaw system event --text "Done: Alex 3D portfolio built" --mode now
