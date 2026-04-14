import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Team" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(255, 255, 255, 0.98)"
          : "rgba(255, 255, 255, 1)",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0, 0, 0, 0.12)"
          : "0 1px 3px rgba(0, 0, 0, 0.08)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      {/* Top bar with contact info */}
      <div
        className="hidden md:block py-1.5 text-xs"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)" }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6 text-white/80">
            <span>📧 anvmpowerinfrapvtltd@gmail.com</span>
            <span>📍 Hubli, Karnataka</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Phone size={12} />
            <span>+91 89511 93777</span>
          </div>
        </div>
      </div>

      {/* Main navigation — full width transmission line as background */}
      <div className="relative" style={{ minHeight: 100 }}>

        {/* Full-width transmission line SVG — absolute behind everything */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{ zIndex: 0, overflow: "hidden" }}
        >
          <svg
            width="100%"
            height="100"
            viewBox="0 0 1400 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            {/* ── LEFT TOWER (near logo, x≈155) ── */}
            <g opacity="0.6">
              {/* Mast */}
              <line x1="155" y1="100" x2="155" y2="12" stroke="#1e3a8a" strokeWidth="2.5"/>
              {/* Cross arm top */}
              <line x1="135" y1="20" x2="175" y2="20" stroke="#1e3a8a" strokeWidth="2"/>
              {/* Cross arm mid */}
              <line x1="138" y1="36" x2="172" y2="36" stroke="#1e3a8a" strokeWidth="2"/>
              {/* Diagonal braces top */}
              <line x1="149" y1="12" x2="135" y2="20" stroke="#1e3a8a" strokeWidth="1.2"/>
              <line x1="161" y1="12" x2="175" y2="20" stroke="#1e3a8a" strokeWidth="1.2"/>
              {/* Diagonal braces mid */}
              <line x1="147" y1="20" x2="138" y2="36" stroke="#1e3a8a" strokeWidth="1.2"/>
              <line x1="163" y1="20" x2="172" y2="36" stroke="#1e3a8a" strokeWidth="1.2"/>
              {/* Base spread */}
              <line x1="155" y1="100" x2="140" y2="100" stroke="#1e3a8a" strokeWidth="2"/>
              <line x1="155" y1="100" x2="170" y2="100" stroke="#1e3a8a" strokeWidth="2"/>
              {/* Insulators */}
              <circle cx="135" cy="20" r="3" fill="#16a34a" opacity="0.9"/>
              <circle cx="175" cy="20" r="3" fill="#16a34a" opacity="0.9"/>
              <circle cx="138" cy="36" r="2.5" fill="#16a34a" opacity="0.9"/>
              <circle cx="172" cy="36" r="2.5" fill="#16a34a" opacity="0.9"/>
            </g>

            {/* ── RIGHT TOWER (near Get in Touch, x≈1245) ── */}
            <g opacity="0.5">
              <line x1="1245" y1="100" x2="1245" y2="12" stroke="#1e3a8a" strokeWidth="2.5"/>
              <line x1="1225" y1="20" x2="1265" y2="20" stroke="#1e3a8a" strokeWidth="2"/>
              <line x1="1228" y1="36" x2="1262" y2="36" stroke="#1e3a8a" strokeWidth="2"/>
              <line x1="1239" y1="12" x2="1225" y2="20" stroke="#1e3a8a" strokeWidth="1.2"/>
              <line x1="1251" y1="12" x2="1265" y2="20" stroke="#1e3a8a" strokeWidth="1.2"/>
              <line x1="1237" y1="20" x2="1228" y2="36" stroke="#1e3a8a" strokeWidth="1.2"/>
              <line x1="1253" y1="20" x2="1262" y2="36" stroke="#1e3a8a" strokeWidth="1.2"/>
              <line x1="1245" y1="100" x2="1230" y2="100" stroke="#1e3a8a" strokeWidth="2"/>
              <line x1="1245" y1="100" x2="1260" y2="100" stroke="#1e3a8a" strokeWidth="2"/>
              <circle cx="1225" cy="20" r="3" fill="#16a34a" opacity="0.9"/>
              <circle cx="1265" cy="20" r="3" fill="#16a34a" opacity="0.9"/>
              <circle cx="1228" cy="36" r="2.5" fill="#16a34a" opacity="0.9"/>
              <circle cx="1262" cy="36" r="2.5" fill="#16a34a" opacity="0.9"/>
            </g>

            {/* ── POWER LINES — top pair (y≈20) ── */}
            <path d="M135 20 Q700 42 1225 20" stroke="#374151" strokeWidth="1" fill="none" opacity="0.35"/>
            <path d="M175 20 Q700 42 1265 20" stroke="#374151" strokeWidth="1" fill="none" opacity="0.35"/>
            {/* ── POWER LINES — mid pair (y≈36) ── */}
            <path d="M138 36 Q700 58 1228 36" stroke="#374151" strokeWidth="1" fill="none" opacity="0.3"/>
            <path d="M172 36 Q700 58 1262 36" stroke="#374151" strokeWidth="1" fill="none" opacity="0.3"/>

            {/* ── ANIMATED PULSES ── */}
            {/* Pulse 1 — top line, left to right */}
            <circle r="4" fill="#16a34a" opacity="0.9">
              <animateMotion dur="3s" repeatCount="indefinite">
                <mpath xlinkHref="#fullTopLine"/>
              </animateMotion>
            </circle>
            <path id="fullTopLine" d="M135 20 Q700 42 1225 20" fill="none"/>

            {/* Pulse 2 — mid line, left to right, offset */}
            <circle r="3.5" fill="#22c55e" opacity="0.8">
              <animateMotion dur="3.8s" begin="0.8s" repeatCount="indefinite">
                <mpath xlinkHref="#fullMidLine"/>
              </animateMotion>
            </circle>
            <path id="fullMidLine" d="M138 36 Q700 58 1228 36" fill="none"/>

            {/* Pulse 3 — top line, right to left */}
            <circle r="3" fill="#4ade80" opacity="0.75">
              <animateMotion dur="4.2s" begin="1.6s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath xlinkHref="#fullTopLine2"/>
              </animateMotion>
            </circle>
            <path id="fullTopLine2" d="M135 20 Q700 42 1225 20" fill="none"/>

            {/* Pulse 4 — mid line, right to left, offset */}
            <circle r="2.5" fill="#86efac" opacity="0.7">
              <animateMotion dur="3.5s" begin="2.4s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath xlinkHref="#fullMidLine2"/>
              </animateMotion>
            </circle>
            <path id="fullMidLine2" d="M138 36 Q700 58 1228 36" fill="none"/>
          </svg>
        </div>

        {/* Nav content — above the SVG */}
        <div className="container mx-auto px-4 flex items-center justify-between relative" style={{ zIndex: 1, minHeight: 100 }}>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity flex-shrink-0"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/anvm-logo-transparent_6c0a8415.png"
              alt="ANVM Power Infra Pvt. Ltd."
              style={{ height: 120, width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Navigation — centered */}
          <div className="hidden md:flex items-center gap-1 flex-shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 relative ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-gray-700 hover:text-primary"
                }`}
                style={
                  isActive(link.href)
                    ? { background: "linear-gradient(135deg, #0f172a, #16a34a)" }
                    : { background: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)" }
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0 ml-3">
            <a
              href="tel:+918951193777"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)", padding: "6px 10px", borderRadius: "8px" }}
            >
              <Phone size={16} />
              Call Now
            </a>
            <Link
              href="/contact"
              className="text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg active:scale-95"
              style={{ background: "linear-gradient(135deg, #16a34a, #0f172a)" }}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="md:hidden border-t border-gray-100"
          style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(10px)" }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                style={
                  isActive(link.href)
                    ? { background: "linear-gradient(135deg, #0f172a, #16a34a)" }
                    : {}
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100 mt-2">
              <Link
                href="/contact"
                className="block text-center text-white px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #16a34a, #0f172a)" }}
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
