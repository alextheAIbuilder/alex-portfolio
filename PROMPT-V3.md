# Alex Portfolio V3 — $100,000 Website

Delete everything in src/ and rebuild from scratch. This needs to look like an Awwwards-winning portfolio — the kind of site agencies charge $100K for.

## Reference Sites (study these vibes):
- https://dennissnellenberg.com (smooth scroll, large typography, project reveals)
- https://www.aristidebenoist.com (minimal, elegant, project-focused)
- https://www.franshalsmuseum.nl (bold, modern, animated)

## MANDATORY Design Principles:
1. **Giant typography** — Hero text should be 8-12vw, bold, commanding
2. **Real project images** — Use `https://image.thum.io/get/width/800/crop/500/https://SITE_URL` for screenshots
3. **Smooth reveal animations** — Elements should fade/slide in as you scroll (use framer-motion whileInView)
4. **Generous whitespace** — Let the content breathe. Sections should have py-32 or more
5. **Subtle grain/noise texture** — Add CSS noise overlay for depth
6. **Cursor effects** — Custom cursor or hover effects on interactive elements
7. **Color restraint** — Mostly monochrome (#0a0a0a bg, #f5f5f5 text) with ONE accent color (#8b5cf6 purple) used sparingly
8. **Horizontal rules** — Use thin lines to separate sections elegantly
9. **Staggered animations** — When multiple items appear, stagger them 0.1s apart
10. **Hover reveals** — Portfolio items show image on hover with smooth transition

## Sections (in order):

### 1. HERO (full viewport)
```
[Nav: Alex.                    About  Work  Contact]

                    Alex.
          Web Designer & Developer
     
     I craft digital experiences that
     make businesses unforgettable.

          [View Work ↓]      [Get in Touch]

                   Scroll ↓
```
- Name "Alex." should be HUGE (12vw+)  
- Subtitle fades in with delay
- Animated line drawing or gradient blob in background (CSS only, no Three.js)
- Use CSS animated gradient orbs (blur-3xl, animate-pulse, absolute positioned)

### 2. ABOUT (split layout)
Left: Large text
Right: Stats + skills
```
I'm a web designer and developer who believes      50+ Projects
every business deserves a website that               3+ Years  
actually works. Not just looks pretty —             100% Satisfaction
but converts visitors into customers.

[Next.js] [React] [Three.js] [Tailwind] [TypeScript] [Shopify]
```
- Skills as minimal pill badges
- Stats with large numbers that count up on scroll

### 3. SELECTED WORK (the star of the show)
This is the MOST important section. Each project gets a FULL-WIDTH row:

```
01  ─────────────────────────────────────────
    Saffron & Sage                    Restaurant
    [REAL SCREENSHOT IMAGE - FULL WIDTH]
    
02  ─────────────────────────────────────────
    Prism AI                          SaaS Platform
    [REAL SCREENSHOT IMAGE - FULL WIDTH]
```

- Project number + thin horizontal line
- Project name (large) + category tag (right aligned)
- REAL screenshot below (full width, rounded corners, subtle shadow)
- On hover: slight scale + shadow increase
- Link to live site on click
- Use ALL 9 projects:
  1. Saffron & Sage (Restaurant) → saffron-sage-restaurant.vercel.app
  2. Prism AI (SaaS) → prism-ai-saas.vercel.app
  3. Elena Reeves (Real Estate) → elena-reeves-realestate.vercel.app
  4. APEX Performance (Gym) → apex-gym-pearl.vercel.app
  5. Sterling & Associates (Law) → sterling-law-two.vercel.app
  6. Bright Smile (Dental) → bright-smile-dental-zeta.vercel.app
  7. Ember & Brew (Coffee) → ember-brew-cafe.vercel.app
  8. MindShift Academy (Courses) → mindshift-academy.vercel.app
  9. AURA Headphones (E-commerce) → aura-headphones.vercel.app

### 4. SERVICES (minimal cards)
```
What I Do
─────────────────────────────────────────

Custom Websites          E-commerce Stores
From $2,500              From $3,500
→                        →

3D/Interactive           Website Redesigns  
From $5,000              From $1,500
→                        →
```
- Simple grid, no flashy cards
- Just title + starting price + arrow
- Hover: text slides or color change

### 5. TESTIMONIALS (editorial style)
```
"Working with Alex completely transformed our
 online presence. Our conversions went up 40%
 in the first month."
 
 — Sarah Mitchell, Founder of Bloom Studios
```
- Large quote text (2xl-3xl)
- One testimonial at a time, simple and elegant
- Thin border left or quotation marks

### 6. CONTACT (simple and bold)
```
Let's work together.
─────────────────────────────────────────

alex@nexomateai.com
github.com/alextheAIbuilder

[Send me a message →]
```
- Email should be a large clickable link
- Simple mailto link or minimal form
- No busy contact form — keep it clean

### 7. FOOTER
```
─────────────────────────────────────────
© 2026 Alex.                     Back to top ↑
```

## Technical Requirements:
- Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- NO Three.js / React Three Fiber (causes too many issues)
- Use CSS for all visual effects (gradients, blurs, animations)
- `next/image` with unoptimized={true} for external thum.io images
- Mobile responsive — stack layouts on mobile
- Fast loading — no heavy libraries
- Smooth scroll behavior

## CSS Effects to Include:
- Noise texture overlay (use CSS pseudo-element with SVG filter)
- Animated gradient orbs in hero (CSS blur + animate)
- Smooth hover transitions (0.3s ease)
- Text reveal animations (clip-path or translateY with opacity)
- Staggered list animations

## Typography:
- Headings: Space Grotesk or Inter, bold
- Hero name: 12vw+ on desktop, 15vw on mobile
- Body: Inter, regular weight, text-lg
- Keep it simple — max 2 fonts

## DO NOT:
- Use Three.js or any 3D library
- Use placeholder colored boxes instead of real images
- Make it look like a template
- Add too many colors — monochrome + one accent
- Use generic stock-photo-looking layouts
- Over-animate — subtle > flashy

When completely finished, run: openclaw system event --text "Done: Alex portfolio V3 — $100K website built" --mode now
