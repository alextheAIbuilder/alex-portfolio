"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "Saffron & Sage",
    category: "Restaurant",
    url: "https://saffron-sage-restaurant.vercel.app",
  },
  {
    name: "Prism AI",
    category: "SaaS Platform",
    url: "https://prism-ai-saas.vercel.app",
  },
  {
    name: "Elena Reeves",
    category: "Real Estate",
    url: "https://elena-reeves-realestate.vercel.app",
  },
  {
    name: "APEX Performance",
    category: "Gym & Fitness",
    url: "https://apex-gym-pearl.vercel.app",
  },
  {
    name: "Sterling & Associates",
    category: "Law Firm",
    url: "https://sterling-law-two.vercel.app",
  },
  {
    name: "Bright Smile",
    category: "Dental Clinic",
    url: "https://bright-smile-dental-zeta.vercel.app",
  },
  {
    name: "Ember & Brew",
    category: "Coffee Shop",
    url: "https://ember-brew-cafe.vercel.app",
  },
  {
    name: "MindShift Academy",
    category: "Online Courses",
    url: "https://mindshift-academy.vercel.app",
  },
  {
    name: "AURA Headphones",
    category: "E-commerce",
    url: "https://aura-headphones.vercel.app",
  },
];

function getThumbUrl(siteUrl: string) {
  return `https://image.thum.io/get/width/1200/crop/750/${siteUrl}`;
}

export default function Portfolio() {
  return (
    <section id="work" className="relative py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hr-line mb-12"
        />

        <div className="flex items-baseline justify-between mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs text-muted tracking-widest uppercase"
          >
            Selected Work
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xs text-muted tracking-widest"
          >
            {projects.length} Projects
          </motion.span>
        </div>

        {/* Project list */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-item block group"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Project header */}
              <div className="flex items-baseline justify-between mb-6">
                <div className="flex items-baseline gap-6">
                  <span className="text-sm text-muted font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold group-hover:text-accent transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>
                <span className="hidden sm:block text-sm text-muted tracking-wide">
                  {project.category}
                </span>
              </div>

              {/* Thin line */}
              <div className="hr-line mb-6" />

              {/* Category on mobile */}
              <span className="sm:hidden text-xs text-muted tracking-wide uppercase mb-4 block">
                {project.category}
              </span>

              {/* Screenshot */}
              <div className="project-image-wrapper relative w-full aspect-[16/10] bg-muted-dark overflow-hidden rounded-lg">
                <Image
                  src={getThumbUrl(project.url)}
                  alt={`${project.name} — ${project.category}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 1400px"
                  unoptimized
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-sm font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                    View Project →
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
