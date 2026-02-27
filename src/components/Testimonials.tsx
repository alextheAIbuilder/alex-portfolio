"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner, The Bloom Room",
    niche: "Florist",
    text: "Alex completely transformed our online presence. Our new website is stunning and has doubled our online orders in just two months. The attention to detail and the smooth user experience is exactly what we needed.",
    rating: 5,
  },
  {
    name: "James Carter",
    role: "CEO, TechNova Solutions",
    niche: "SaaS",
    text: "Working with Alex was a game-changer. They delivered a modern, fast website that perfectly represents our brand. Our conversion rate jumped 40% after the redesign. Highly recommend!",
    rating: 5,
  },
  {
    name: "Maria Gonzalez",
    role: "Founder, Vitality Fitness",
    niche: "Gym",
    text: "I was blown away by how quickly Alex understood our vision. The website is beautiful, loads incredibly fast, and our member sign-ups have increased significantly. Best investment we've made.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-accent" : "text-white/10"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-medium mb-4 tracking-widest uppercase text-sm">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            What <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/20 transition-all"
            >
              <StarRating rating={t.rating} />
              <p className="text-muted leading-relaxed mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <div className="font-heading font-bold">{t.name}</div>
                <div className="text-sm text-muted">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
