"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New Project Inquiry: ${formData.projectType}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:alex@nexomateai.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-medium mb-4 tracking-widest uppercase text-sm">
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Ready to Level Up Your{" "}
            <span className="gradient-text">Online Presence?</span>
          </h2>
          <p className="text-muted text-lg">
            Let&apos;s talk about your project and make it happen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl" />
            <form
              onSubmit={handleSubmit}
              className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  required
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                >
                  <option value="" className="bg-background">
                    Select a project type
                  </option>
                  <option value="Custom Website" className="bg-background">
                    Custom Website
                  </option>
                  <option value="E-commerce" className="bg-background">
                    E-commerce
                  </option>
                  <option
                    value="3D/Interactive Site"
                    className="bg-background"
                  >
                    3D / Interactive Site
                  </option>
                  <option value="Redesign" className="bg-background">
                    Redesign
                  </option>
                  <option value="Other" className="bg-background">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-white py-4 rounded-xl font-medium transition-all hover:scale-[1.01]"
              >
                Send Message
              </button>

              <p className="text-center text-muted text-sm">
                Or reach out directly:{" "}
                <a
                  href="mailto:alex@nexomateai.com"
                  className="text-secondary hover:underline"
                >
                  alex@nexomateai.com
                </a>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
