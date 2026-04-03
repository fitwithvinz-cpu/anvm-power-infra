import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL";

const photos = [
  { url: `${CDN}/project-photo-01_1f9b80fb.jpg`, caption: "Power Transmission Infrastructure", tag: "Transmission" },
  { url: `${CDN}/project-photo-02_f7db99ef.jpg`, caption: "Substation Construction Works", tag: "Substation" },
  { url: `${CDN}/project-photo-03_c054c72e.jpg`, caption: "Electrical Line Installation", tag: "Transmission" },
  { url: `${CDN}/project-photo-04_ed704ea5.jpg`, caption: "Tower Erection Works", tag: "Civil Works" },
  { url: `${CDN}/project-photo-05_07bc1300.jpg`, caption: "High Voltage Transmission Line", tag: "Transmission" },
  { url: `${CDN}/project-photo-06_77b5c7dd.jpg`, caption: "33kV Line Project", tag: "Transmission" },
  { url: `${CDN}/project-photo-07_1dcbe847.jpg`, caption: "Substation Commissioning", tag: "Substation" },
  { url: `${CDN}/project-photo-08_3b686b1c.jpg`, caption: "Electrical Infrastructure Works", tag: "Civil Works" },
  { url: `${CDN}/project-photo-09_05ec3ad5.jpg`, caption: "Power Line Construction", tag: "Transmission" },
  { url: `${CDN}/project-photo-10_6fdd2896.jpg`, caption: "Renewable Energy Project", tag: "Renewable" },
  { url: `${CDN}/project-photo-11_8d3801ef.jpg`, caption: "Civil and Electrical Works", tag: "Civil Works" },
  { url: `${CDN}/project-photo-12_19276d75.jpg`, caption: "Transmission Line Erection", tag: "Transmission" },
  { url: `${CDN}/project-photo-13_6c135574.jpg`, caption: "VCB Yard Installation", tag: "Substation" },
  { url: `${CDN}/project-photo-14_fdac6a93.jpg`, caption: "Metering System Works", tag: "Substation" },
  { url: `${CDN}/project-photo-15_95dbd21b.jpg`, caption: "Underground Cable Project", tag: "Civil Works" },
  { url: `${CDN}/project-photo-16_aea7bccf.jpg`, caption: "Wind Farm Infrastructure", tag: "Renewable" },
];

const tags = ["All", "Transmission", "Substation", "Civil Works", "Renewable"];

export default function Gallery() {
  const [activeTag, setActiveTag] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeTag === "All" ? photos : photos.filter((p) => p.tag === activeTag);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : 0));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : 0));

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#0f172a] to-[#1e3a5f] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Project Gallery</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A visual showcase of our work across power transmission, substations, renewable energy, and civil infrastructure
          </p>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="py-10 bg-[#f0fdf4] border-b border-[#d1fae5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className="px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-md"
                style={{
                  backgroundColor: activeTag === tag ? "#16a34a" : "#ffffff",
                  color: activeTag === tag ? "#ffffff" : "#0f172a",
                  border: `2px solid ${activeTag === tag ? "#16a34a" : "#d1fae5"}`,
                }}
              >
                {tag}
                <span className="ml-2 text-xs opacity-70">
                  ({tag === "All" ? photos.length : photos.filter((p) => p.tag === tag).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Masonry grid using CSS columns */}
          <div
            className="gap-4"
            style={{
              columnCount: 3,
              columnGap: "1rem",
            }}
          >
            {filtered.map((photo, index) => (
              <div
                key={photo.url}
                className="relative overflow-hidden rounded-xl cursor-pointer group mb-4 break-inside-avoid"
                onClick={() => openLightbox(index)}
                style={{ display: "inline-block", width: "100%" }}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ display: "block" }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="inline-block bg-[#16a34a] text-white text-xs font-semibold px-2 py-1 rounded-full mb-2 w-fit">
                    {photo.tag}
                  </span>
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
                {/* Zoom icon */}
                <div className="absolute top-3 right-3 bg-white/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={16} className="text-[#0f172a]" />
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-xl">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Responsive masonry for mobile */}
      <style>{`
        @media (max-width: 640px) {
          .masonry-grid { column-count: 1 !important; }
        }
        @media (min-width: 641px) and (max-width: 1023px) {
          .masonry-grid { column-count: 2 !important; }
        }
      `}</style>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-[#22c55e] transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={36} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 text-white/80 hover:text-[#22c55e] transition-colors z-10 bg-black/30 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] w-full mx-16 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].url}
              alt={filtered[lightboxIndex].caption}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="inline-block bg-[#16a34a] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                {filtered[lightboxIndex].tag}
              </span>
              <p className="text-white text-lg font-medium">{filtered[lightboxIndex].caption}</p>
              <p className="text-white/40 text-sm mt-1">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 text-white/80 hover:text-[#22c55e] transition-colors z-10 bg-black/30 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
}
