"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Gradient orbs */}
      <div className="gradient-orb gradient-orb-1 animate-float" />
      <div className="gradient-orb gradient-orb-2 animate-float-delayed" />
      <div
        className="gradient-orb animate-pulse-slow"
        style={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.08,
        }}
      />

      <div className="relative z-10 text-center max-w-[1400px] w-full">
        {/* Name */}
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-bold text-hero-mobile md:text-hero leading-[0.9] tracking-tighter"
        >
          Alex.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 md:mt-6 text-lg md:text-xl text-muted font-heading tracking-wide uppercase"
        >
          Web Designer & Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 text-xl md:text-2xl lg:text-3xl text-foreground/80 max-w-2xl mx-auto leading-relaxed"
        >
          I craft digital experiences that
          <br className="hidden md:block" /> make businesses unforgettable.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#work"
            className="group flex items-center gap-2 px-8 py-3.5 bg-foreground text-background rounded-full font-medium text-sm hover:bg-accent hover:text-foreground transition-all duration-300"
          >
            View Work
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-border rounded-full text-sm text-muted hover:text-foreground hover:border-foreground transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted tracking-widest uppercase">
          Scroll
        </span>
        <motion.span
          className="text-muted text-sm animate-scroll-hint"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
