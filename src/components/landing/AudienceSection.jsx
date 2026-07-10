import React from "react";
import { motion } from "framer-motion";
import { Scale, Building2, Handshake, Banknote, TrendingUp } from "lucide-react";

const personas = [
  { label: "Lawyers", icon: Scale },
  { label: "Developers", icon: Building2 },
  { label: "Brokers", icon: Handshake },
  { label: "Lenders", icon: Banknote },
  { label: "Land Investors", icon: TrendingUp },
];

export default function AudienceSection() {
  return (
    <section id="audience" className="py-14 lg:py-20 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10 lg:mb-14"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Who It's For</span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground mt-4 leading-[1.15] tracking-tight font-medium">
            Who can save up to 5–6 hours per case
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
          {personas.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col items-center gap-3 px-6 py-7 lg:px-8 lg:py-8 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default min-w-[130px]"
            >
              <div className="w-12 h-12 rounded-xl bg-muted/50 border border-border group-hover:bg-primary/10 group-hover:border-primary/20 flex items-center justify-center transition-all duration-300">
                <p.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {p.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
