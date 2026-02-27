"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Saffron & Sage",
    niche: "Restaurant",
    url: "https://saffron-sage-restaurant.vercel.app",
    gradient: "from-amber-600 to-orange-500",
  },
  {
    name: "Prism AI",
    niche: "SaaS",
    url: "https://prism-ai-saas.vercel.app",
    gradient: "from-violet-600 to-indigo-500",
  },
  {
    name: "Elena Reeves",
    niche: "Real Estate",
    url: "https://elena-reeves-realestate.vercel.app",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    name: "APEX Performance",
    niche: "Gym & Fitness",
    url: "https://apex-gym-pearl.vercel.app",
    gradient: "from-red-600 to-rose-500",
  },
  {
    name: "Sterling & Associates",
    niche: "Law Firm",
    url: "https://sterling-law-two.vercel.app",
    gradient: "from-slate-600 to-zinc-500",
  },
  {
    name: "Bright Smile",
    niche: "Dental",
    url: "https://bright-smile-dental-zeta.vercel.app",
    gradient: "from-sky-500 to-cyan-400",
  },
  {
    name: "Ember & Brew",
    niche: "Coffee Shop",
    url: "https://ember-brew-cafe.vercel.app",
    gradient: "from-amber-800 to-yellow-700",
  },
  {
    name: "MindShift Academy",
    niche: "Online Courses",
    url: "https://mindshift-academy.vercel.app",
    gradient: "from-purple-600 to-fuchsia-500",
  },
  {
    name: "AURA Headphones",
    niche: "E-commerce",
    url: "https://aura-headphones.vercel.app",
    gradient: "from-gray-800 to-gray-600",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-medium mb-4 tracking-widest uppercase text-sm">
            My Work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Recent <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-primary/30 transition-all">
                <div
                  className={`aspect-[16/10] bg-gradient-to-br ${project.gradient} relative`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading text-2xl font-bold text-white/80 group-hover:text-white transition-colors text-center px-4">
                      {project.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 flex items-center justify-center">
                    <span className="bg-white text-background px-6 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Live ↗
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white/5">
                  <h3 className="font-heading font-bold">{project.name}</h3>
                  <span className="text-sm text-muted">{project.niche}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
