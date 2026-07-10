import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BG_IMG = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=3000&q=70";

export default function CTAFooter() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={BG_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
      </div>

      <div className="relative z-10">
        <div className="max-w-2xl mx-auto px-6 text-center pt-20 lg:pt-28 pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.1] tracking-tight font-medium mb-4">
              Ready to run your{" "}
              <span className="text-accent italic font-normal">first case?</span>
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-md mx-auto">
              Start your analysis in minutes. No setup, no waiting.
            </p>
            <a
              href="https://plotwise.co.in/signup"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 hover:shadow-xl hover:shadow-primary/20"
            >
              Run your first case
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>

        <div className="border-t border-border/40">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                    <span className="font-display text-base text-white leading-none font-semibold">P</span>
                  </div>
                  <span className="font-display text-xl text-foreground font-medium">Plotedd</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                  Structured property due diligence for Maharashtra. Land records, transaction history, and litigation signals in one place.
                </p>
              </div>

              <div className="lg:col-span-3 lg:col-start-7">
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">Product</h4>
                <ul className="space-y-2.5">
                  {["Property Search", "Land Records", "Litigation Status", "Ownership Timeline"].map((item) => (
                    <li key={item}>
                      <a
                        href="https://plotwise.co.in/signup"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3">
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">Contact</h4>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="https://calendly.com/plotwise/demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Schedule a Demo
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://plotwise.co.in/signup"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Plotedd. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
