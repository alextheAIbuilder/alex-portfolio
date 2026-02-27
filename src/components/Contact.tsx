"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-44 px-6 md:px-12">
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
          className="text-xs text-muted tracking-widest uppercase mb-16 block"
        >
          Contact
        </motion.span>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-display font-bold"
        >
          Let&apos;s work
          <br />
          together.
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16 space-y-6"
        >
          <a
            href="mailto:alex@nexomateai.com"
            className="block text-2xl md:text-4xl lg:text-5xl font-heading font-medium hover:text-accent transition-colors duration-300 link-hover"
          >
            alex@nexomateai.com
          </a>

          <a
            href="https://github.com/alextheAIbuilder"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg md:text-xl text-muted hover:text-foreground transition-colors duration-300 link-hover"
          >
            github.com/alextheAIbuilder
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <a
            href="mailto:alex@nexomateai.com"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-border rounded-full text-foreground hover:border-accent hover:text-accent transition-all duration-300"
          >
            <span className="text-sm font-medium tracking-wide">
              Send me a message
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
