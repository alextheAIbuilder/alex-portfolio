"use client";

import { motion } from "framer-motion";


import Scene3DWrapper from "./Scene3DWrapper";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Scene3DWrapper />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-secondary font-medium mb-4 tracking-widest uppercase text-sm"
        >
          Web Designer & Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          I Design & Build{" "}
          <span className="gradient-text">Websites That Convert</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Modern, fast, beautiful websites for businesses that want to stand out
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#work"
            className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-white/20 hover:border-white/40 text-foreground px-8 py-4 rounded-full font-medium transition-all hover:scale-105 hover:bg-white/5"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
