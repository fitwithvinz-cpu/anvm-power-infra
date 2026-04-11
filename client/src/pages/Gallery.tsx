import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import WindmillScene from "@/components/WindmillScene";

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

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL";

const photos = [
  { url: `${CDN}/project-photo-01_1f9b80fb.jpg`, caption: "Power Transmission Infrastructure" },
  { url: `${CDN}/project-photo-02_f7db99ef.jpg`, caption: "Substation Construction Works" },
  { url: `${CDN}/project-photo-03_c054c72e.jpg`, caption: "Electrical Line Installation" },
  { url: `${CDN}/project-photo-04_ed704ea5.jpg`, caption: "Tower Erection Works" },
  { url: `${CDN}/project-photo-06_77b5c7dd.jpg`, caption: "33kV Line Project" },
  { url: `${CDN}/project-photo-07_1dcbe847.jpg`, caption: "Substation Commissioning" },
  { url: `${CDN}/project-photo-08_3b686b1c.jpg`, caption: "Electrical Infrastructure Works" },
  { url: `${CDN}/project-photo-09_05ec3ad5.jpg`, caption: "Power Line Construction" },
  { url: `${CDN}/project-photo-10_6fdd2896.jpg`, caption: "Renewable Energy Project" },
  { url: `${CDN}/project-photo-11_8d3801ef.jpg`, caption: "Civil and Electrical Works" },
  { url: `${CDN}/project-photo-13_6c135574.jpg`, caption: "VCB Yard Installation" },
  { url: `${CDN}/project-photo-14_fdac6a93.jpg`, caption: "Metering System Works" },
  { url: `${CDN}/project-photo-15_95dbd21b.jpg`, caption: "Underground Cable Project" },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : 0));
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : 0));

  return (
    <div className="w-full">
      {/* Page Header — tall, natural, photo-backed */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/wind-farm-sunset_b7e2a1c3.jpg"
            alt="Wind farm gallery"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,15,35,0.92) 0%, rgba(5,15,35,0.75) 50%, rgba(5,15,35,0.50) 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,15,35,0.6))' }} />
        </div>
        <div className="absolute inset-0 z-[1] overflow-hidden">
          <WindmillScene color="rgba(255,255,255,0.4)" horizonPct={88} />
        </div>
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ background: 'rgba(22,163,74,0.2)', border: '1px solid rgba(22,163,74,0.4)', color: '#4ade80' }}>
              Visual Showcase
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Project Gallery</h1>
            <p className="text-lg text-white/70 max-w-xl">A visual showcase of our completed power infrastructure and renewable energy projects across India</p>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16" style={{ background: 'linear-gradient(160deg, #f0f7f4 0%, #e8f5e9 50%, #e3f2fd 100%)' }}>
        <div className="container mx-auto px-4">
          <div
            style={{
              columnCount: 3,
              columnGap: "1rem",
            }}
            className="sm:columns-2 md:columns-3"
          >
            {photos.map((photo, index) => (
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
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
                {/* Zoom icon */}
                <div className="absolute top-3 right-3 bg-white/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={16} className="text-[#0f172a]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] w-full mx-16 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[lightboxIndex].url}
              alt={photos[lightboxIndex].caption}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-lg font-medium">{photos[lightboxIndex].caption}</p>
              <p className="text-white/40 text-sm mt-1">
                {lightboxIndex + 1} / {photos.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 text-white/80 hover:text-[#22c55e] transition-colors z-10 bg-black/30 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
}
