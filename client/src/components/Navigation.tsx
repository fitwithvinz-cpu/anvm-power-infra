import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

// Small animated transmission line SVG for the navbar
function NavTransmissionLine() {
  return (
    <div className="hidden lg:flex items-center flex-1 mx-4 overflow-hidden" style={{ maxWidth: 260, height: 56 }}>
      <svg
        viewBox="0 0 260 56"
        width="260"
        height="56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        {/* Tower 1 */}
        <g opacity="0.55">
          {/* Mast */}
          <line x1="40" y1="52" x2="40" y2="8" stroke="#1e3a8a" strokeWidth="2"/>
          {/* Cross arm top */}
          <line x1="28" y1="14" x2="52" y2="14" stroke="#1e3a8a" strokeWidth="1.5"/>
          {/* Cross arm mid */}
          <line x1="30" y1="24" x2="50" y2="24" stroke="#1e3a8a" strokeWidth="1.5"/>
          {/* Diagonal braces */}
          <line x1="36" y1="8" x2="28" y2="14" stroke="#1e3a8a" strokeWidth="1"/>
          <line x1="44" y1="8" x2="52" y2="14" stroke="#1e3a8a" strokeWidth="1"/>
          <line x1="34" y1="14" x2="30" y2="24" stroke="#1e3a8a" strokeWidth="1"/>
          <line x1="46" y1="14" x2="50" y2="24" stroke="#1e3a8a" strokeWidth="1"/>
          {/* Base spread */}
          <line x1="40" y1="52" x2="32" y2="52" stroke="#1e3a8a" strokeWidth="1.5"/>
          <line x1="40" y1="52" x2="48" y2="52" stroke="#1e3a8a" strokeWidth="1.5"/>
          {/* Insulators */}
          <circle cx="28" cy="14" r="2" fill="#16a34a" opacity="0.8"/>
          <circle cx="52" cy="14" r="2" fill="#16a34a" opacity="0.8"/>
          <circle cx="30" cy="24" r="1.5" fill="#16a34a" opacity="0.8"/>
          <circle cx="50" cy="24" r="1.5" fill="#16a34a" opacity="0.8"/>
        </g>

        {/* Tower 2 */}
        <g opacity="0.45">
          <line x1="220" y1="52" x2="220" y2="8" stroke="#1e3a8a" strokeWidth="2"/>
          <line x1="208" y1="14" x2="232" y2="14" stroke="#1e3a8a" strokeWidth="1.5"/>
          <line x1="210" y1="24" x2="230" y2="24" stroke="#1e3a8a" strokeWidth="1.5"/>
          <line x1="216" y1="8" x2="208" y2="14" stroke="#1e3a8a" strokeWidth="1"/>
          <line x1="224" y1="8" x2="232" y2="14" stroke="#1e3a8a" strokeWidth="1"/>
          <line x1="214" y1="14" x2="210" y2="24" stroke="#1e3a8a" strokeWidth="1"/>
          <line x1="226" y1="14" x2="230" y2="24" stroke="#1e3a8a" strokeWidth="1"/>
          <line x1="220" y1="52" x2="212" y2="52" stroke="#1e3a8a" strokeWidth="1.5"/>
          <line x1="220" y1="52" x2="228" y2="52" stroke="#1e3a8a" strokeWidth="1.5"/>
          <circle cx="208" cy="14" r="2" fill="#16a34a" opacity="0.8"/>
          <circle cx="232" cy="14" r="2" fill="#16a34a" opacity="0.8"/>
          <circle cx="210" cy="24" r="1.5" fill="#16a34a" opacity="0.8"/>
          <circle cx="230" cy="24" r="1.5" fill="#16a34a" opacity="0.8"/>
        </g>

        {/* Power lines — top pair */}
        <path d="M28 14 Q130 28 208 14" stroke="#374151" strokeWidth="0.8" fill="none" opacity="0.4"/>
        <path d="M52 14 Q130 28 232 14" stroke="#374151" strokeWidth="0.8" fill="none" opacity="0.4"/>

        {/* Power lines — mid pair */}
        <path d="M30 24 Q130 38 210 24" stroke="#374151" strokeWidth="0.8" fill="none" opacity="0.35"/>
        <path d="M50 24 Q130 38 230 24" stroke="#374151" strokeWidth="0.8" fill="none" opacity="0.35"/>

        {/* Animated electricity pulse — top line */}
        <circle r="3" fill="#16a34a" opacity="0.9">
          <animateMotion dur="2.2s" repeatCount="indefinite">
            <mpath xlinkHref="#topLine"/>
          </animateMotion>
        </circle>
        <path id="topLine" d="M28 14 Q130 28 208 14" fill="none"/>

        {/* Animated electricity pulse — mid line (offset timing) */}
        <circle r="2.5" fill="#22c55e" opacity="0.8">
          <animateMotion dur="2.8s" begin="0.7s" repeatCount="indefinite">
            <mpath xlinkHref="#midLine"/>
          </animateMotion>
        </circle>
        <path id="midLine" d="M30 24 Q130 38 210 24" fill="none"/>

        {/* Animated electricity pulse — reverse on bottom line */}
        <circle r="2" fill="#4ade80" opacity="0.7">
          <animateMotion dur="3.2s" begin="1.4s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
            <mpath xlinkHref="#topLine2"/>
          </animateMotion>
        </circle>
        <path id="topLine2" d="M28 14 Q130 28 208 14" fill="none"/>
      </svg>
    </div>
  );
}

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

      {/* Main navigation */}
      <div className="container mx-auto px-4 flex items-center justify-between" style={{ minHeight: 80 }}>
        {/* Logo — bigger and more prominent */}
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition-opacity flex-shrink-0"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/anvm-logo-transparent_6c0a8415.png"
            alt="ANVM Power Infra Pvt. Ltd."
            style={{ height: 88, width: "auto", objectFit: "contain" }}
          />
        </Link>

        {/* Animated transmission line in the white space */}
        <NavTransmissionLine />

        {/* Desktop Navigation */}
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
                  : {}
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
