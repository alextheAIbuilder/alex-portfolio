"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-12 pb-8 pt-4">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hr-line mb-8"
        />

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Alex.
          </span>

          <a
            href="#"
            className="text-sm text-muted hover:text-foreground transition-colors duration-300 link-hover flex items-center gap-2"
          >
            Back to top
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
