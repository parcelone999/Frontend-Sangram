import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Scale, Repeat, Users, Landmark, AlertTriangle, FileWarning, Ban, GitBranch } from "lucide-react";

const LAND_IMG =
  "https://media.base44.com/images/public/6a2baa84f905ec83a60bff53/9b96f7104_3.jpg";
const LENS_RADIUS = 140;

// Positioned in parcels below the top third (no alerts in the top ~33%)
const alerts = [
  { id: "title", icon: AlertTriangle, title: "Title chain not clear", x: "48%", y: "48%", tone: "red", big: true },
  { id: "litigations", icon: Scale, title: "2 ongoing litigations", x: "16%", y: "46%", tone: "red", big: true },
  { id: "encumbrance", icon: FileWarning, title: "Encumbrance found", x: "14%", y: "60%", tone: "orange" },
  { id: "mortgage", icon: Landmark, title: "Ongoing mortgage", x: "84%", y: "52%", tone: "orange" },
  { id: "furrows", icon: GitBranch, title: "3 pending mutations", x: "82%", y: "64%", tone: "indigo" },
  { id: "owners", icon: Users, title: "More than 10 owners", x: "22%", y: "76%", tone: "indigo" },
  { id: "unregistered", icon: Ban, title: "Unregistered sale deed", x: "52%", y: "78%", tone: "red" },
  { id: "dispute", icon: Scale, title: "Boundary dispute", x: "80%", y: "80%", tone: "amber" },
];

const toneMap = {
  red: "bg-red-500/30 border-red-300/50 text-red-50",
  amber: "bg-amber-500/30 border-amber-300/50 text-amber-50",
  indigo: "bg-indigo-500/30 border-indigo-300/50 text-indigo-50",
  orange: "bg-orange-500/30 border-orange-300/50 text-orange-50",
};

export default function ParcelLensSection() {
  const sectionRef = useRef(null);
  const zoomBgRef = useRef(null);
  const zoomImgRef = useRef(null);
  const alertsRef = useRef(null);
  const lensRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const [entered, setEntered] = useState(false);
  const inView = useInView(sectionRef, { margin: "-80px" });

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches || "ontouchstart" in window);
  }, []);

  const updateLens = (x, y) => {
    const clip = `circle(${LENS_RADIUS}px at ${x}px ${y}px)`;
    if (zoomBgRef.current) {
      zoomBgRef.current.style.clipPath = clip;
      zoomBgRef.current.style.WebkitClipPath = clip;
    }
    if (zoomImgRef.current) {
      zoomImgRef.current.style.transformOrigin = `${x}px ${y}px`;
    }
    if (alertsRef.current) {
      alertsRef.current.style.clipPath = clip;
      alertsRef.current.style.WebkitClipPath = clip;
    }
    if (lensRef.current) {
      lensRef.current.style.transform = `translate(${x - LENS_RADIUS}px, ${y - LENS_RADIUS}px)`;
    }
  };

  const hideLens = () => {
    const clip = `circle(${LENS_RADIUS}px at -9999px -9999px)`;
    if (zoomBgRef.current) {
      zoomBgRef.current.style.clipPath = clip;
      zoomBgRef.current.style.WebkitClipPath = clip;
    }
    if (alertsRef.current) {
      alertsRef.current.style.clipPath = clip;
      alertsRef.current.style.WebkitClipPath = clip;
    }
  };

  const handleMouseMove = (e) => {
    if (isTouch || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    updateLens(e.clientX - rect.left, e.clientY - rect.top);
  };

  useEffect(() => {
    if (!isTouch || !inView || !sectionRef.current) return;
    let angle = -0.5;
    let raf;
    const animate = () => {
      angle += 0.007;
      const rect = sectionRef.current.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = rect.width * 0.26;
      const ry = rect.height * 0.2;
      updateLens(cx + Math.cos(angle) * rx, cy + Math.sin(angle) * ry);
      raf = requestAnimationFrame(animate);
    };
    setEntered(true);
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isTouch, inView]);

  const handleEnter = () => {
    if (isTouch) return;
    setEntered(true);
  };

  const handleLeave = () => {
    if (isTouch) return;
    setEntered(false);
    hideLens();
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative h-screen min-h-[600px] overflow-hidden cursor-none"
    >
      {/* Base background — land parcel */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={LAND_IMG} alt="Land parcel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* Zoomed background — only through lens */}
      <div
        ref={zoomBgRef}
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `circle(${LENS_RADIUS}px at -9999px -9999px)` }}
      >
        <img
          ref={zoomImgRef}
          src={LAND_IMG}
          alt=""
          className="w-full h-full object-cover"
          style={{ transform: "scale(1.6)", transformOrigin: "center" }}
        />
      </div>

      {/* Alerts overlay — only through lens */}
      <div
        ref={alertsRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: `circle(${LENS_RADIUS}px at -9999px -9999px)`,
          opacity: entered ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        {alerts.map((a) => (
          <div
            key={a.id}
            className={`absolute flex items-center gap-2 rounded-lg border backdrop-blur-md ${toneMap[a.tone]} ${
              a.big ? "px-4 py-2.5" : "px-3 py-1.5"
            }`}
            style={{ left: a.x, top: a.y, transform: "translate(-50%, -50%)" }}
          >
            <a.icon className={a.big ? "w-4 h-4 flex-shrink-0" : "w-3.5 h-3.5 flex-shrink-0"} />
            <span
              className={`font-medium whitespace-nowrap ${a.big ? "text-sm lg:text-base" : "text-[11px]"}`}
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
            >
              {a.title}
            </span>
          </div>
        ))}
      </div>

      {/* Lens border */}
      <div
        ref={lensRef}
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: LENS_RADIUS * 2,
          height: LENS_RADIUS * 2,
          opacity: entered ? 1 : 0,
          transition: "opacity 0.2s",
          transform: "translate(-9999px, -9999px)",
        }}
      >
        <div
          className="w-full h-full rounded-full border-[5px] border-white/70"
          style={{
            boxShadow:
              "0 0 0 1px rgba(0,0,0,0.15), inset 0 0 25px rgba(0,0,0,0.2), 0 12px 50px rgba(0,0,0,0.3)",
          }}
        />
        <div className="absolute top-[12%] left-[12%] w-[35%] h-[25%] rounded-full bg-white/15 blur-md" />
      </div>

      {/* Heading — top third only */}
      <div className="absolute top-0 left-0 right-0 z-10 pt-12 lg:pt-16 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight font-medium drop-shadow-lg">
            Each land has its story.
            <br />
            <span className="text-white/80 italic font-normal">Look closely.</span>
          </h2>
          <p className="text-xs lg:text-sm text-white/70 mt-5 font-medium">
            Hover around land parcels to see from Plotedd lens
          </p>
        </motion.div>
      </div>

      {/* Location coordinates */}
      <div className="absolute bottom-6 right-6 z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-black/55 backdrop-blur-sm rounded-xl px-5 py-3 text-left"
        >
          <p className="text-white text-xs font-bold uppercase tracking-wider mb-1">Location</p>
          <p className="text-white/70 text-[11px] font-mono">15°51'59.65"N 73°53'36.81"E</p>
        </motion.div>
      </div>
    </section>
  );
}
