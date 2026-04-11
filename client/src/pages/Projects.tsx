import { Calendar, MapPin, Images } from "lucide-react";
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
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Calendar size={14} />
                      {project.year}
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
              "Suzlon Energy Ltd",
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
    </div>
  );
}
