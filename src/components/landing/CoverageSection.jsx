import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Landmark, MapPin } from "lucide-react";

const stats = [
  {
    icon: FileText,
    value: 27.7,
    suffix: " Cr+",
    label: "Case records",
    desc: "across tribunal, district, high courts & Supreme Court",
  },
  {
    icon: Landmark,
    value: 600,
    suffix: "+",
    label: "Courts",
    desc: "covered nationwide",
  },
  {
    icon: MapPin,
    value: 300,
    suffix: "+",
    label: "Talukas",
    desc: "across Maharashtra",
  },
];

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const steps = 40;
    const inc = value / steps;
    let c = 0;
    const t = setInterval(() => {
      c += inc;
      if (c >= value) {
        c = value;
        clearInterval(t);
      }
      setCount(c);
    }, 30);
    return () => clearInterval(t);
  }, [inView, value]);

  if (!inView) {
    return (
      <span ref={ref} className="font-display text-4xl lg:text-5xl text-foreground tracking-tight">
        0<span className="text-primary">{suffix}</span>
      </span>
    );
  }

  return (
    <span ref={ref} className="font-display text-4xl lg:text-5xl text-foreground tracking-tight">
      {value < 100 ? count.toFixed(1) : Math.floor(count)}
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

export default function CoverageSection() {
  return (
    <section id="coverage" className="py-14 lg:py-20 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Data Coverage</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-4 leading-[1.1] tracking-tight font-medium">
            Comprehensive, verified, current
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-sm text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto mb-6">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <AnimatedNumber value={s.value} suffix={s.suffix} />
              <h3 className="font-display text-lg text-foreground mt-4 mb-2 font-medium">{s.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
