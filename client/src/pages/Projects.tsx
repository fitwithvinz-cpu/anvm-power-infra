import { MapPin, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL";

const galleryPhotos = [
  { url: `${CDN}/project-photo-01_1f9b80fb.jpg`, caption: "Power Transmission Infrastructure" },
  { url: `${CDN}/project-photo-02_f7db99ef.jpg`, caption: "Substation Construction Works" },
  { url: `${CDN}/project-photo-03_c054c72e.jpg`, caption: "Electrical Line Installation" },
  { url: `${CDN}/project-photo-04_ed704ea5.jpg`, caption: "Tower Erection Works" },
  { url: `${CDN}/project-photo-05_07bc1300.jpg`, caption: "High Voltage Transmission Line" },
  { url: `${CDN}/project-photo-06_77b5c7dd.jpg`, caption: "33kV Line Project" },
  { url: `${CDN}/project-photo-07_1dcbe847.jpg`, caption: "Substation Commissioning" },
  { url: `${CDN}/project-photo-08_3b686b1c.jpg`, caption: "Electrical Infrastructure Works" },
  { url: `${CDN}/project-photo-09_05ec3ad5.jpg`, caption: "Power Line Construction" },
  { url: `${CDN}/project-photo-10_6fdd2896.jpg`, caption: "Renewable Energy Project" },
  { url: `${CDN}/project-photo-11_8d3801ef.jpg`, caption: "Civil and Electrical Works" },
  { url: `${CDN}/project-photo-12_19276d75.jpg`, caption: "Transmission Line Erection" },
  { url: `${CDN}/project-photo-13_6c135574.jpg`, caption: "VCB Yard Installation" },
  { url: `${CDN}/project-photo-14_fdac6a93.jpg`, caption: "Metering System Works" },
  { url: `${CDN}/project-photo-15_95dbd21b.jpg`, caption: "Underground Cable Project" },
  { url: `${CDN}/project-photo-16_aea7bccf.jpg`, caption: "Wind Farm Infrastructure" },
];

const projects = [
  {
    category: "Power Transmission",
    title: "110kV Ranibennur Substation Project",
    location: "Ranibennur, Karnataka",
    year: "2022",
    description: "Complete design and construction of 110kV substation with VCB yard and metering systems",
    highlights: ["110kV Substation", "VCB Yard", "SCADA Integration"],
    photo: `${CDN}/project-photo-01_1f9b80fb.jpg`,
  },
  {
    category: "Transmission Lines",
    title: "33kV Multi-Circuit Transmission Line",
    location: "Tadas, Karnataka",
    year: "2021",
    description: "Installation of 33kV transmission line with multiple circuits across challenging terrain",
    highlights: ["33kV Line", "Multi-Circuit", "Tower Installation"],
    photo: `${CDN}/project-photo-05_07bc1300.jpg`,
  },
  {
    category: "Renewable Energy",
    title: "Wind Farm Electrical Infrastructure",
    location: "Sandur, Karnataka",
    year: "2023",
    description: "Complete electrical infrastructure for wind energy project with grid integration",
    highlights: ["Wind Energy", "Grid Connection", "33kV Metering"],
    photo: `${CDN}/project-photo-16_aea7bccf.jpg`,
  },
  {
    category: "Underground Cabling",
    title: "Underground Cable Project",
    location: "Hubli, Karnataka",
    year: "2020",
    description: "First-of-its-kind underground cabling project in the region with modern infrastructure",
    highlights: ["UG Cables", "Cable Trenching", "Modern Infrastructure"],
    photo: `${CDN}/project-photo-15_95dbd21b.jpg`,
  },
  {
    category: "Substation Works",
    title: "USS Substation Construction",
    location: "Multiple Locations",
    year: "2022",
    description: "Unit Substation construction and commissioning across multiple industrial facilities",
    highlights: ["USS Construction", "Industrial", "Commissioning"],
    photo: `${CDN}/project-photo-02_f7db99ef.jpg`,
  },
  {
    category: "Renewable Energy",
    title: "Solar Energy Integration",
    location: "Kavitha Solar Projects",
    year: "2023",
    description: "Solar energy infrastructure development with transmission connectivity",
    highlights: ["Solar Energy", "33kV Metering", "VCB Yards"],
    photo: `${CDN}/project-photo-10_6fdd2896.jpg`,
  },
  {
    category: "Power Transmission",
    title: "220kV Line Licensing Project",
    location: "Karnataka",
    year: "2021",
    description: "220kV transmission line licensing and associated infrastructure works",
    highlights: ["220kV Line", "Licensing", "Infrastructure"],
    photo: `${CDN}/project-photo-04_ed704ea5.jpg`,
  },
  {
    category: "Transmission Lines",
    title: "33kV Transmission Line - Jagalure",
    location: "Jagalure, Karnataka",
    year: "2022",
    description: "33kV transmission line construction with metering systems and line infrastructure",
    highlights: ["33kV Line", "Metering", "Line Infrastructure"],
    photo: `${CDN}/project-photo-06_77b5c7dd.jpg`,
  },
  {
    category: "Industrial",
    title: "NR Corn Projects",
    location: "Karnataka",
    year: "2021",
    description: "Electrical infrastructure for industrial facility with specialized power requirements",
    highlights: ["Industrial", "Power Supply", "Infrastructure"],
    photo: `${CDN}/project-photo-11_8d3801ef.jpg`,
  },
  {
    category: "Transmission Lines",
    title: "Ganesha 33kV Line & Metering Works",
    location: "Karnataka",
    year: "2022",
    description: "33kV transmission line with comprehensive metering and protection systems",
    highlights: ["33kV Line", "Metering", "Protection Systems"],
    photo: `${CDN}/project-photo-08_3b686b1c.jpg`,
  },
  {
    category: "Transmission Lines",
    title: "Sujalar 33kV Line Project",
    location: "Maharashtra",
    year: "2023",
    description: "33kV transmission line construction in Maharashtra with modern standards",
    highlights: ["33kV Line", "Maharashtra", "Modern Standards"],
    photo: `${CDN}/project-photo-09_05ec3ad5.jpg`,
  },
  {
    category: "Renewable Energy",
    title: "Wind World India Project",
    location: "Karnataka & Maharashtra",
    year: "2023",
    description: "Large-scale wind energy project with complete electrical infrastructure",
    highlights: ["Wind Energy", "Large Scale", "Multi-State"],
    photo: `${CDN}/project-photo-12_19276d75.jpg`,
  },
];

export default function Projects() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = ["All", ...uniqueCategories];

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + galleryPhotos.length) % galleryPhotos.length : 0));
  const nextPhoto = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % galleryPhotos.length : 0));

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#0f172a] to-[#1e3a5f] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-white/90">
            Showcase of completed electrical infrastructure and power transmission projects
          </p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-[#f0fdf4]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">Project Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real photographs from our completed projects across Karnataka and Maharashtra
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {galleryPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0f172a]/0 group-hover:bg-[#0f172a]/50 transition-all duration-300 flex items-end">
                  <p className="text-white text-xs font-medium p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 text-white hover:text-green-400 transition-colors"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
          >
            <ChevronLeft size={48} />
          </button>
          <div className="max-w-4xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryPhotos[lightboxIndex].url}
              alt={galleryPhotos[lightboxIndex].caption}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg font-medium">
              {galleryPhotos[lightboxIndex].caption}
            </p>
            <p className="text-white/50 text-center text-sm mt-1">
              {lightboxIndex + 1} / {galleryPhotos.length}
            </p>
          </div>
          <button
            className="absolute right-4 text-white hover:text-green-400 transition-colors"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">Browse our portfolio by category</p>
          </div>

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
              <div
                key={index}
                className="bg-white border border-[#d1fae5] rounded-xl overflow-hidden hover:shadow-xl transition-all group"
              >
                {/* Project Photo */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.photo}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Project Header */}
                <div className="p-5 border-b border-[#d1fae5]">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block bg-[#16a34a] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar size={14} />
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-[#16a34a] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MapPin size={14} />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
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
            ))}
          </div>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-12 text-center">Key Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Karnataka Power Transmission Corporation Limited (KPTCL)",
              "Karnataka Electricity Board (KEB)",
              "Hubli Electricity Supply Company Limited (HESCOM)",
              "Wind World India Ltd",
              "JSW Renewables",
              "Clinmax Renewables",
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
