"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "Three.js",
  "Tailwind CSS",
  "TypeScript",
  "Shopify",
  "WordPress",
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary font-medium mb-4 tracking-widest uppercase text-sm">
              About Me
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              I help businesses go from{" "}
              <span className="gradient-text">invisible to unforgettable</span>{" "}
              online
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              I&apos;m Alex — a web designer & developer specializing in modern
              business websites. I craft digital experiences that don&apos;t
              just look beautiful, but actually drive results. Whether
              you&apos;re a startup or an established brand, I build websites
              that turn visitors into customers.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              From custom-coded sites to immersive 3D web experiences, I bring
              a unique blend of design sensibility and technical expertise to
              every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="font-heading text-xl font-bold mb-6">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-heading text-3xl font-bold gradient-text">
                      50+
                    </div>
                    <div className="text-muted text-sm mt-1">Projects</div>
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-bold gradient-text">
                      3+
                    </div>
                    <div className="text-muted text-sm mt-1">
                      Years Exp.
                    </div>
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-bold gradient-text">
                      100%
                    </div>
                    <div className="text-muted text-sm mt-1">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
