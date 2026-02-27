"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with Alex completely transformed our online presence. Our conversions went up 40% in the first month.",
    author: "Sarah Mitchell",
    role: "Founder of Bloom Studios",
  },
  {
    quote:
      "The website Alex built for us isn't just beautiful — it's the best sales tool we've ever had. Absolutely worth every penny.",
    author: "Marcus Chen",
    role: "CEO, Prism Technologies",
  },
  {
    quote:
      "Alex delivered beyond what we imagined. Professional, fast, and the final result speaks for itself.",
    author: "Elena Reeves",
    role: "Real Estate Broker",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hr-line mb-12"
        />

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs text-muted tracking-widest uppercase mb-20 block"
        >
          Testimonials
        </motion.span>

        <div className="space-y-24 md:space-y-32">
          {testimonials.map((testimonial) => (
            <motion.blockquote
              key={testimonial.author}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pl-8 md:pl-12 border-l-2 border-accent/30"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium leading-snug">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 md:mt-8">
                <cite className="not-italic">
                  <span className="text-foreground font-medium">
                    {testimonial.author}
                  </span>
                  <span className="text-muted text-sm ml-2">
                    — {testimonial.role}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
