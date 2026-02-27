"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Websites",
    price: "From $2,500",
    description: "Bespoke designs built for performance and conversion.",
  },
  {
    title: "E-commerce Stores",
    price: "From $3,500",
    description: "Shopify & custom stores that drive revenue.",
  },
  {
    title: "3D / Interactive",
    price: "From $5,000",
    description: "Immersive experiences with cutting-edge technology.",
  },
  {
    title: "Website Redesigns",
    price: "From $1,500",
    description: "Transform your existing site into something remarkable.",
  },
];

export default function Services() {
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
          className="text-xs text-muted tracking-widest uppercase mb-16 block"
        >
          What I Do
        </motion.span>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-display font-bold mb-16"
        >
          Services
        </motion.h2>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="service-card group flex items-start justify-between gap-4 px-0 md:px-6 first:md:pl-0"
            >
              <div className="flex-1">
                <h3 className="service-title font-heading text-xl md:text-2xl font-semibold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted text-sm mt-2">{service.description}</p>
                <p className="text-accent text-sm font-medium mt-3">
                  {service.price}
                </p>
              </div>
              <span className="arrow text-muted text-xl mt-1">→</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
