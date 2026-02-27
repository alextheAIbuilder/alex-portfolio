# Alex Portfolio V2 — MAKE IT IMPRESSIVE

The current site is garbage. Plain text, no images, no real 3D. Rebuild it to be ACTUALLY impressive.

## What "impressive" means:
- Real screenshot images of the portfolio sites (use og:image or screenshot APIs)
- Working 3D hero that degrades gracefully (gradient fallback if WebGL fails)
- Smooth scroll-triggered animations that feel premium
- Glass morphism cards with blur effects
- Animated gradient borders on hover
- A site that makes someone say "I want this person to build MY website"

## Critical Fixes Needed:

### 1. Portfolio Section — USE REAL IMAGES
For each project, use the actual live screenshot. Use this pattern for thumbnails:
`https://image.thum.io/get/width/600/crop/400/https://SITE_URL`

Projects with REAL URLs:
1. Saffron & Sage → saffron-sage-restaurant.vercel.app
2. Prism AI → prism-ai-saas.vercel.app  
3. Elena Reeves → elena-reeves-realestate.vercel.app
4. APEX Performance → apex-gym-pearl.vercel.app
5. Sterling & Associates → sterling-law-two.vercel.app
6. Bright Smile → bright-smile-dental-zeta.vercel.app
7. Ember & Brew → ember-brew-cafe.vercel.app
8. MindShift Academy → mindshift-academy.vercel.app
9. AURA Headphones → aura-headphones.vercel.app

Each portfolio card should:
- Show the REAL screenshot image (use next/image with unoptimized or img tag)
- Have a glass overlay on hover with "View Live →" button
- Have the project name and niche tag
- Scale slightly on hover with shadow

### 2. Hero — Make it WOW
- Keep the 3D Canvas but wrapped in error boundary (already done)
- Add animated gradient text that shimmers
- Add a subtle grid/dot pattern background behind everything
- The CTA buttons should have animated gradient borders
- Add floating badge: "50+ Websites Built" with a subtle pulse animation

### 3. About Section
- Add a professional headshot placeholder (use a gradient avatar circle with initials "A")
- Add animated counter for stats (count up when scrolled into view)
- Skills should be pill badges with icons, not just text

### 4. Services Section  
- Each card needs an icon (use emoji or SVG)
- Cards should have glassmorphism effect (bg-white/5 backdrop-blur)
- Animated gradient border on hover
- Price range hint: "Starting from $XXX"

### 5. Testimonials
- Add quotation mark SVG icon
- Star rating with actual star icons (★)
- Cards should feel like real testimonial cards

### 6. Contact Section
- Make the form inputs feel premium (glass effect, focus glow)
- Add a "Book a Free Call" CTA alongside the form
- Show response time: "Usually responds within 2 hours"

### 7. Overall Polish
- Add a custom cursor effect (subtle glow that follows mouse) — CSS only
- Smooth page transitions
- Add a "Back to top" floating button
- Navbar should have glassmorphism when scrolled
- Add subtle noise texture overlay on the background for depth
- Page loading animation (brief fade-in)

### 8. SEO & Meta
- Proper Open Graph tags
- Favicon
- Meta description optimized for "web designer" keywords

## Tech (keep same stack):
- Next.js 14, TypeScript, Tailwind, Three.js/R3F, Framer Motion
- Use `next/image` for all images with proper alt tags
- Lazy load everything below the fold

## DO NOT:
- Use placeholder colored boxes for portfolio items
- Leave any section looking "template-y" or generic
- Forget mobile responsiveness
- Skip the real screenshot images — this is the MOST important thing

When completely finished, run: openclaw system event --text "Done: Alex portfolio V2 rebuilt — actually impressive this time" --mode now
