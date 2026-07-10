import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Enter the property",
    desc: "Survey number, sub-registrar office, or owner name — that's all we need to start.",
  },
  {
    num: "2",
    title: "We query every registry at once",
    desc: "Sub-registrar, encumbrance, revenue and court records — fetched in parallel, no manual lookups.",
  },
  {
    num: "3",
    title: "Get one clean report",
    desc: "A structured, exportable title report, ready for your due-diligence file.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-14 lg:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">How It Works</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-4 leading-[1.1] tracking-tight font-medium">
            From property details to a finished report, in three steps.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-px bg-primary/20" />

          <div className="space-y-6 lg:space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={`relative flex items-center gap-6 lg:gap-8 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                    <span className="font-display text-sm font-semibold text-primary">{step.num}</span>
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 lg:max-w-md">
                  <div className="px-6 py-5 lg:px-7 lg:py-6 rounded-2xl bg-secondary border border-border/60 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                    <h3 className="font-display text-lg lg:text-xl text-foreground mb-2 font-medium leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
