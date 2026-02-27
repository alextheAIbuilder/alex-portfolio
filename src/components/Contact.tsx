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

  const inputClasses =
    "w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary/50 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300";

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form — takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl" />
              <form
                onSubmit={handleSubmit}
                className="relative glass rounded-3xl p-8 md:p-10 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-foreground/80"
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
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-foreground/80"
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
                      className={inputClasses}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium mb-2 text-foreground/80"
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
                    className={`${inputClasses} appearance-none`}
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
                    className="block text-sm font-medium mb-2 text-foreground/80"
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
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-border rounded-xl bg-primary/20 hover:bg-primary/30 text-white py-4 font-medium transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/10"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Book a call card */}
            <div className="glass rounded-3xl p-8 text-center flex-1 flex flex-col justify-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-heading text-xl font-bold mb-2">
                Book a Free Call
              </h3>
              <p className="text-muted text-sm mb-6">
                Prefer to talk? Let&apos;s hop on a quick call to discuss your
                project.
              </p>
              <a
                href="mailto:alex@nexomateai.com?subject=Book%20a%20Free%20Call"
                className="gradient-border rounded-full bg-white/5 hover:bg-white/10 text-foreground px-6 py-3 font-medium transition-all hover:scale-105 inline-block text-sm"
              >
                Schedule a Call →
              </a>
            </div>

            {/* Quick info */}
            <div className="glass rounded-3xl p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">⚡</span>
                  <div>
                    <p className="text-sm font-medium">Fast Response</p>
                    <p className="text-xs text-muted">
                      Usually responds within 2 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📧</span>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a
                      href="mailto:alex@nexomateai.com"
                      className="text-xs text-secondary hover:underline"
                    >
                      alex@nexomateai.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🌍</span>
                  <div>
                    <p className="text-sm font-medium">Available Worldwide</p>
                    <p className="text-xs text-muted">Remote-first workflow</p>
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
