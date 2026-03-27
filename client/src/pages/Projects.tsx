import { MapPin, Zap, Calendar } from "lucide-react";

export default function Projects() {
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

  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = ["All", ...uniqueCategories];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-white/90">
            Showcase of completed electrical infrastructure and power transmission projects
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-lg font-semibold transition-all hover:shadow-lg"
                style={{
                  backgroundColor: category === "All" ? "#1a3a52" : "#f8fafc",
                  color: category === "All" ? "#ffffff" : "#1a3a52",
                  border: `2px solid ${category === "All" ? "#d97706" : "#e2e8f0"}`,
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all group"
              >
                {/* Project Header */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b border-border">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="text-sm text-foreground/60 flex items-center gap-1">
                      <Calendar size={16} />
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <MapPin size={16} />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-foreground/70 mb-6">{project.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-sm mb-3">Project Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Project Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "20+", label: "Years of Experience" },
              { number: "3", label: "Major Corporations" },
              { number: "5", label: "States Covered" },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-border text-center">
                <div className="text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                <p className="text-foreground/70 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Key Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              "Karnataka Power Transmission Corporation Limited (KPTCL)",
              "Karnataka Electricity Board (KEB)",
              "Hubli Electricity Supply Company Limited (HESCOM)",
              "Wind World India Ltd",
              "JSW Renewables",
              "Clinmax Renewables",
            ].map((client, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
                <p className="font-semibold text-foreground">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
