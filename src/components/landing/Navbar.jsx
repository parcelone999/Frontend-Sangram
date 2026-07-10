import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
{ label: "How It Works", href: "#how-it-works" },
{ label: "Features", href: "#features" },
{ label: "Coverage", href: "#coverage" },
{ label: "Who It's For", href: "#audience" }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ?
      "bg-background/80 backdrop-blur-xl border-b border-border/60" :
      "bg-transparent"}`
      }>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[68px]">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/15 transition-transform group-hover:scale-105">
            <span className="font-display text-base text-white leading-none font-semibold">P</span>
          </div>
          <span className="font-display text-foreground tracking-tight font-medium text-3xl">Plotedd</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className="px-4 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04] rounded-lg transition-all duration-200">
            
              {l.label}
            </a>
          )}
        </div>

        <div className="hidden md:block">
          <a
            href="https://plotwise.co.in/signup"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/15">Run your first case


          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground hover:bg-foreground/[0.06] rounded-lg transition-colors">
          
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/60 overflow-hidden">
          
            <div className="px-6 py-4 space-y-1">
              {links.map((l) =>
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04] rounded-lg transition-colors">
              
                  {l.label}
                </a>
            )}
              <a
              href="https://plotwise.co.in/signup"
              onClick={() => setOpen(false)}
              className="block mt-2 px-4 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg text-center">
              
                Run your first case
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}
