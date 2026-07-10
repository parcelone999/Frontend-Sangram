import React from "react";
import { motion } from "framer-motion";

const features = [
  { num: "01", title: "Consolidated by default", desc: "One report instead of a dozen browser tabs and portal logins.", color: "green" },
  { num: "02", title: "Zero manual CAPTCHAs", desc: "We handle the scraping and the friction so your team doesn't have to.", color: "orange" },
  { num: "03", title: "Minutes, not hours", desc: "What used to take an associate an afternoon now takes minutes.", color: "green" },
  { num: "04", title: "Audit-ready exports", desc: "Clean, structured reports you can drop straight into a case file.", color: "orange" },
  { num: "05", title: "Built-in confidentiality", desc: "Your searches and client data stay private to your firm.", color: "green" },
  { num: "06", title: "Coverage that keeps growing", desc: "New districts and registries added continuously.", color: "orange" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-14 lg:py-20 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Why Law Firms Switch</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-4 leading-[1.1] tracking-tight font-medium">
            Built for the way title due diligence actually works.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-7 lg:p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-display text-sm font-semibold text-white mb-5 ${
                  f.color === "green" ? "bg-primary" : "bg-[#C57E56]"
                }`}
              >
                {f.num}
              </div>
              <h3 className="font-display text-lg lg:text-xl text-foreground mb-2.5 leading-snug font-medium">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
