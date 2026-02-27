"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

function getScreenshotUrl(siteUrl: string) {
  const domain = siteUrl.replace("https://", "");
  return `https://image.thum.io/get/width/600/crop/400/https://${domain}`;
}

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
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Real websites, real results. Click any project to see it live.
          </p>
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
              <div className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.02]">
                {/* Screenshot image */}
                <div className="aspect-[3/2] relative overflow-hidden">
                  {/* Gradient fallback behind image */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`}
                  />
                  <Image
                    src={getScreenshotUrl(project.url)}
                    alt={`${project.name} — ${project.niche} website`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <span className="bg-white text-background px-6 py-2.5 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      View Live →
                    </span>
                  </div>
                </div>
                {/* Card footer */}
                <div className="p-4 bg-white/5 backdrop-blur-sm flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold">{project.name}</h3>
                    <span className="text-xs text-muted uppercase tracking-wider">
                      {project.niche}
                    </span>
                  </div>
                  <span className="text-muted group-hover:text-primary transition-colors text-lg">
                    ↗
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
