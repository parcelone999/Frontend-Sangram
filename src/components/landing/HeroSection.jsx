import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, History, Scale, FolderOpen } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=3000&q=70";

const tabs = [
{
  id: "records",
  label: "Land Records",
  icon: FileText,
  fields: [
  { label: "Village", value: "Baner" },
  { label: "Survey No.", value: "1/2" },
  { label: "Area", value: "2.3 Acres" },
  { label: "Owner", value: "S. Patil" },
  { label: "Mutation", value: "2023-08-14" },
  { label: "Type", value: "Agricultural" }]

},
{
  id: "timeline",
  label: "Ownership Timeline",
  icon: History,
  fields: [
  { label: "Transaction 1", value: "1992 — Inheritance" },
  { label: "Transaction 2", value: "2008 — Sale Deed" },
  { label: "Transaction 3", value: "2015 — Gift Deed" },
  { label: "Transaction 4", value: "2023 — Mutation Entry" }]

},
{
  id: "litigation",
  label: "Litigation",
  icon: Scale,
  fields: [
  { label: "Cases Found", value: "2" },
  { label: "Court", value: "District Court, Pune" },
  { label: "Case Type", value: "Civil Suit" },
  { label: "Status", value: "Pending" },
  { label: "Year", value: "2019" },
  { label: "Case No.", value: "CS/421/19" }]

},
{
  id: "case",
  label: "Case Details",
  icon: FolderOpen,
  fields: [
  { label: "Summary", value: "Title dispute on northern boundary" },
  { label: "Parties", value: "Patil vs. Deshmukh" },
  { label: "Property Ref", value: "Survey 1/2, Baner" },
  { label: "Filing Date", value: "2019-03-11" }]

}];


export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 backdrop-blur-sm border border-border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Maharashtra Property Due Diligence

              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] text-foreground mb-5 tracking-tight font-medium">
              Get researched data for title search{" "}
              <span className="text-accent italic font-normal"> in 90 mins</span>
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-md mb-8">
              From a single survey number to a complete ownership timeline, litigation signals, and transaction chain — all in one place.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://plotwise.co.in/signup"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 hover:shadow-xl hover:shadow-primary/20">Try for free



              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-foreground hover:text-muted-foreground border border-border hover:border-foreground/20 rounded-xl transition-all duration-200">
                
                See how it works
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block">
            
            <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl overflow-hidden shadow-2xl shadow-black/5">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-border" />
                  <div className="w-3 h-3 rounded-full bg-border" />
                  <div className="w-3 h-3 rounded-full bg-border" />
                </div>
                <div className="flex-1 ml-3 px-3 py-1 rounded-md bg-muted/50 border border-border">
                  <span className="text-[10px] font-mono text-muted-foreground">plotwise.co.in / property-search</span>
                </div>
              </div>

              <div className="flex border-b border-border overflow-x-auto">
                {tabs.map((tab, i) =>
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 px-4 py-3 text-xs font-medium transition-all relative whitespace-nowrap ${
                  activeTab === i ?
                  "text-foreground bg-muted/30" :
                  "text-muted-foreground hover:text-foreground hover:bg-muted/15"}`
                  }>
                  
                    <tab.icon className="w-3.5 h-3.5" />
                    {tab.label}
                    {activeTab === i &&
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />

                  }
                  </button>
                )}
              </div>

              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="p-5">
                
                <div className="grid grid-cols-2 gap-3">
                  {current.fields.map((f) =>
                  <div
                    key={f.label}
                    className="px-3 py-2.5 rounded-lg bg-muted/30 border border-border/60">
                    
                      <div className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground mb-1">
                        {f.label}
                      </div>
                      <div className="text-xs text-foreground font-medium">{f.value}</div>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between px-3 py-2.5 rounded-lg bg-primary/[0.08] border border-primary/15">
                  <span className="text-[11px] font-medium text-primary">Report ready</span>
                  <span className="text-[10px] font-mono text-muted-foreground">~3 min</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block">
        
        <div className="w-5 h-9 rounded-full border border-foreground/15 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-foreground/30" />
          
        </div>
      </motion.div>
    </section>);

}
