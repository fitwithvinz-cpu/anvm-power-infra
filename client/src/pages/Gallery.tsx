import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL";

const photos = [
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
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#0f172a] to-[#1e3a5f] text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-8">
            {/* Text Content */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 whitespace-nowrap">Project Gallery</h1>
              <p className="text-lg text-white/85 max-w-2xl">
                Real photographs from our completed projects across power transmission, substations, renewable energy, and civil infrastructure
              </p>
            </div>
            {/* Logo - right side, blended */}
            <div className="hidden md:flex flex-shrink-0 items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/anvm-logo-transparent_6c0a8415.png"
                alt="ANVM Power Infra"
                className="h-56 w-auto object-contain"
                style={{ filter: 'brightness(0.75) contrast(1.2)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16 bg-[#f8fafc]">
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
