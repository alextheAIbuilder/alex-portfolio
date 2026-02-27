"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    title: "Custom Websites",
    description:
      "Built from scratch, fully unique. No templates, no compromises — just pixel-perfect sites tailored to your brand.",
    icon: "🌐",
    gradient: "from-primary to-purple-400",
    price: "Starting from $1,500",
  },
  {
    title: "E-commerce",
    description:
      "Shopify & custom stores that sell. Optimized checkout flows, product pages that convert, and seamless payment integrations.",
    icon: "🛒",
    gradient: "from-secondary to-cyan-300",
    price: "Starting from $2,000",
  },
  {
    title: "3D/Interactive Sites",
    description:
      "Immersive web experiences that captivate. Three.js animations, scroll-based interactions, and cutting-edge visuals.",
    icon: "✨",
    gradient: "from-accent to-yellow-300",
    price: "Starting from $3,000",
  },
  {
    title: "Redesigns",
    description:
      "Transform your outdated site into something modern. Fresh design, better UX, improved performance, and higher conversions.",
    icon: "🔄",
    gradient: "from-pink-500 to-rose-400",
    price: "Starting from $1,000",
  },
];

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      className={className}
    >
      {children}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-medium mb-4 tracking-widest uppercase text-sm">
            What I Do
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Services That{" "}
            <span className="gradient-text">Deliver Results</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <TiltCard>
                <div className="group relative overflow-hidden rounded-2xl h-full gradient-border">
                  {/* Glass card */}
                  <div className="relative glass glass-hover rounded-2xl p-8 h-full transition-all duration-300">
                    {/* Gradient glow on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.07] rounded-2xl transition-opacity duration-500`}
                    />
                    <div className="relative">
                      <span className="text-4xl mb-4 block">
                        {service.icon}
                      </span>
                      <h3 className="font-heading text-xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <p className="text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">
                        {service.price}
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
