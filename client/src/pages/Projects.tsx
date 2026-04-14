import { MapPin, Images } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const projects = [
  {
    category: "Power Transmission",
    title: "110kV Ranibennur Substation Project",
    location: "Ranibennur, Karnataka",
    year: "2022",
    description: "Complete design and construction of 110kV substation with VCB yard and metering systems",
    highlights: ["110kV Substation", "VCB Yard", "SCADA Integration"],
  },
  {
    category: "Transmission Lines",
    title: "33kV Multi-Circuit Transmission Line",
    location: "Tadas, Karnataka",
    year: "2021",
    description: "Installation of 33kV transmission line with multiple circuits across challenging terrain",
    highlights: ["33kV Line", "Multi-Circuit", "Tower Installation"],
  },
  {
    category: "Renewable Energy",
    title: "Wind Farm Electrical Infrastructure",
    location: "Sandur, Karnataka",
    year: "2023",
    description: "Complete electrical infrastructure for wind energy project with grid integration",
    highlights: ["Wind Energy", "Grid Connection", "33kV Metering"],
  },
  {
    category: "Underground Cabling",
    title: "Underground Cable Project",
    location: "Hubli, Karnataka",
    year: "2020",
    description: "First-of-its-kind underground cabling project in the region with modern infrastructure",
    highlights: ["UG Cables", "Cable Trenching", "Modern Infrastructure"],
  },
  {
    category: "Substation Works",
    title: "USS Substation Construction",
    location: "Multiple Locations",
    year: "2022",
    description: "Unit Substation construction and commissioning across multiple industrial facilities",
    highlights: ["USS Construction", "Industrial", "Commissioning"],
  },
  {
    category: "Renewable Energy",
    title: "Solar Energy Integration",
    location: "Kavitha Solar Projects",
    year: "2023",
    description: "Solar energy infrastructure development with transmission connectivity",
    highlights: ["Solar Energy", "33kV Metering", "VCB Yards"],
  },
  {
    category: "Power Transmission",
    title: "220kV Line Licensing Project",
    location: "Karnataka",
    year: "2021",
    description: "220kV transmission line licensing and associated infrastructure works",
    highlights: ["220kV Line", "Licensing", "Infrastructure"],
  },
  {
    category: "Transmission Lines",
    title: "33kV Transmission Line - Jagalure",
    location: "Jagalure, Karnataka",
    year: "2022",
    description: "33kV transmission line construction with metering systems and line infrastructure",
    highlights: ["33kV Line", "Metering", "Line Infrastructure"],
  },
  {
    category: "Industrial",
    title: "NR Corn Projects",
    location: "Karnataka",
    year: "2021",
    description: "Electrical infrastructure for industrial facility with specialized power requirements",
    highlights: ["Industrial", "Power Supply", "Infrastructure"],
  },
  {
    category: "Transmission Lines",
    title: "Ganesha 33kV Line & Metering Works",
    location: "Karnataka",
    year: "2022",
    description: "33kV transmission line with comprehensive metering and protection systems",
    highlights: ["33kV Line", "Metering", "Protection Systems"],
  },
  {
    category: "Transmission Lines",
    title: "Sujalar 33kV Line Project",
    location: "Maharashtra",
    year: "2023",
    description: "33kV transmission line construction in Maharashtra with modern standards",
    highlights: ["33kV Line", "Maharashtra", "Modern Standards"],
  },
  {
    category: "Renewable Energy",
    title: "Wind World India Project",
    location: "Karnataka & Maharashtra",
    year: "2023",
    description: "Large-scale wind energy project with complete electrical infrastructure",
    highlights: ["Wind Energy", "Large Scale", "Multi-State"],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = ["All", ...uniqueCategories];
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* Page Header — tall, natural, photo-backed */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/tower-construction-india_aae703b8.jpg"
            alt="Project construction"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,15,35,0.92) 0%, rgba(5,15,35,0.75) 50%, rgba(5,15,35,0.50) 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,15,35,0.6))' }} />
        </div>
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ background: 'rgba(22,163,74,0.2)', border: '1px solid rgba(22,163,74,0.4)', color: '#4ade80' }}>
              Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Our Projects</h1>
            <p className="text-lg text-white/70 max-w-xl">A portfolio of successfully completed power infrastructure projects across Karnataka and India</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20" style={{ background: 'linear-gradient(160deg, #f0f7f4 0%, #e8f5e9 50%, #e3f2fd 100%)' }}>
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="px-5 py-2 rounded-full font-semibold transition-all hover:shadow-md text-sm"
                style={{
                  backgroundColor: activeCategory === category ? "#16a34a" : "#f0fdf4",
                  color: activeCategory === category ? "#ffffff" : "#0f172a",
                  border: `2px solid ${activeCategory === category ? "#16a34a" : "#d1fae5"}`,
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 80}>
              <div
                className="bg-white border border-[#d1fae5] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full"
              >
                {/* Colored top bar */}
                <div className="h-2 bg-gradient-to-r from-[#16a34a] to-[#0ea5e9]" />

                {/* Project Header */}
                <div className="p-6 border-b border-[#d1fae5]">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block bg-[#16a34a] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>

                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-[#16a34a] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MapPin size={14} />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-[#f0fdf4] text-[#15803d] border border-[#d1fae5] px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#16a34a] to-[#15803d]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Images size={36} className="text-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">See Our Work in Photos</h2>
          </div>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Browse our project gallery featuring real photographs from our completed works across India
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-white text-[#16a34a] hover:bg-white/90 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
          >
            <Images size={20} />
            View Photo Gallery
          </Link>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 bg-[#f0fdf4]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-12 text-center">Project Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "20+", label: "Years of Experience" },
              { number: "3", label: "Major Corporations" },
              { number: "5", label: "States Covered" },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-[#d1fae5] text-center shadow-sm">
                <div className="text-4xl font-bold text-[#16a34a] mb-2">{stat.number}</div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Clients */}
      <section className="py-20" style={{ background: 'linear-gradient(160deg, #f0f7f4 0%, #e8f5e9 50%, #e3f2fd 100%)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-12 text-center">Key Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Karnataka Power Transmission Corporation Limited (KPTCL)",
              "Hubli Electricity Supply Company Limited (HESCOM)",
              "Wind World India Ltd",
              "JSW Renewables",
              "CleanMax Renewables",
              "Suzlon",
              "Hero Future Energies",
            ].map((client, index) => (
              <div
                key={index}
                className="bg-[#f0fdf4] border border-[#d1fae5] p-6 rounded-xl text-center hover:shadow-md transition-shadow"
              >
                <p className="font-semibold text-[#0f172a]">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          RENEWABLE ENERGY ANIMATION — Wind + Solar
      ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #e8f5e9 0%, #bbdefb 60%, #90caf9 100%)', height: '220px' }}>
        {/* Sun */}
        <div className="absolute" style={{ top: '18px', right: '12%', width: '54px', height: '54px' }}>
          <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <circle cx="27" cy="27" r="14" fill="#FDD835" opacity="0.95" />
            {[0,45,90,135,180,225,270,315].map((deg, i) => (
              <line key={i} x1="27" y1="27"
                x2={27 + 22 * Math.cos(deg * Math.PI / 180)}
                y2={27 + 22 * Math.sin(deg * Math.PI / 180)}
                stroke="#FDD835" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
            ))}
          </svg>
        </div>

        {/* Solar Panels */}
        <div className="absolute" style={{ bottom: '52px', right: '6%' }}>
          <svg viewBox="0 0 160 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '160px', height: '70px' }}>
            {/* Panel 1 */}
            <g transform="rotate(-12, 40, 35)">
              <rect x="5" y="20" width="60" height="36" rx="3" fill="#1565C0" stroke="#0D47A1" strokeWidth="1.5" />
              <line x1="5" y1="32" x2="65" y2="32" stroke="#90CAF9" strokeWidth="0.8" />
              <line x1="5" y1="44" x2="65" y2="44" stroke="#90CAF9" strokeWidth="0.8" />
              <line x1="25" y1="20" x2="25" y2="56" stroke="#90CAF9" strokeWidth="0.8" />
              <line x1="45" y1="20" x2="45" y2="56" stroke="#90CAF9" strokeWidth="0.8" />
              {/* Shine animation */}
              <rect x="5" y="20" width="60" height="36" rx="3" fill="url(#shine1)" opacity="0.3">
                <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
              </rect>
            </g>
            {/* Panel 2 */}
            <g transform="rotate(-12, 115, 35)">
              <rect x="82" y="20" width="60" height="36" rx="3" fill="#1565C0" stroke="#0D47A1" strokeWidth="1.5" />
              <line x1="82" y1="32" x2="142" y2="32" stroke="#90CAF9" strokeWidth="0.8" />
              <line x1="82" y1="44" x2="142" y2="44" stroke="#90CAF9" strokeWidth="0.8" />
              <line x1="102" y1="20" x2="102" y2="56" stroke="#90CAF9" strokeWidth="0.8" />
              <line x1="122" y1="20" x2="122" y2="56" stroke="#90CAF9" strokeWidth="0.8" />
              <rect x="82" y="20" width="60" height="36" rx="3" fill="url(#shine2)" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
              </rect>
            </g>
            {/* Ground stands */}
            <line x1="20" y1="54" x2="20" y2="68" stroke="#555" strokeWidth="2" />
            <line x1="50" y1="54" x2="50" y2="68" stroke="#555" strokeWidth="2" />
            <line x1="97" y1="54" x2="97" y2="68" stroke="#555" strokeWidth="2" />
            <line x1="127" y1="54" x2="127" y2="68" stroke="#555" strokeWidth="2" />
            <defs>
              <linearGradient id="shine1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="shine2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="100%" stopColor="white" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Wind Turbines — small, inline SVG */}
        {[
          { x: '8%',  h: 110, speed: 5,   opacity: 0.9 },
          { x: '20%', h: 90,  speed: 7,   opacity: 0.75 },
          { x: '33%', h: 120, speed: 4.5, opacity: 0.95 },
          { x: '46%', h: 80,  speed: 6,   opacity: 0.65 },
          { x: '57%', h: 100, speed: 5.5, opacity: 0.85 },
        ].map((t, i) => {
          const bladeLen = t.h * 0.58;
          const hubY = 220 - t.h - 10;
          const baseY = 210;
          return (
            <div key={i} className="absolute" style={{ left: t.x, bottom: 0, width: '60px', height: '220px', pointerEvents: 'none' }}>
              <svg viewBox="0 0 60 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                {/* Tower */}
                <polygon
                  points={`28,${baseY} 32,${baseY} 31,${hubY} 29,${hubY}`}
                  fill="#546E7A" opacity={t.opacity}
                />
                {/* Rotating blades */}
                <g transform={`translate(30, ${hubY})`}>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`0 0 0`}
                    to={`360 0 0`}
                    dur={`${t.speed}s`}
                    repeatCount="indefinite"
                    additive="sum"
                  />
                  <ellipse cx="0" cy={-bladeLen / 2} rx={t.h * 0.025} ry={bladeLen / 2} fill="#78909C" opacity={t.opacity} transform={`rotate(0)`} />
                  <ellipse cx="0" cy={-bladeLen / 2} rx={t.h * 0.025} ry={bladeLen / 2} fill="#78909C" opacity={t.opacity} transform={`rotate(120)`} />
                  <ellipse cx="0" cy={-bladeLen / 2} rx={t.h * 0.025} ry={bladeLen / 2} fill="#78909C" opacity={t.opacity} transform={`rotate(240)`} />
                  <circle cx="0" cy="0" r={t.h * 0.025} fill="#455A64" opacity={t.opacity} />
                </g>
              </svg>
            </div>
          );
        })}

        {/* Ground line */}
        <div className="absolute bottom-0 left-0 right-0 h-10" style={{ background: 'linear-gradient(180deg, transparent, #4caf5044)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-3 rounded-t-full" style={{ background: '#388e3c', opacity: 0.5 }} />
      </section>
    </div>
  );
}
