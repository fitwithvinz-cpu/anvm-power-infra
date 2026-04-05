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

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition-opacity"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/anvm-logo-transparent_6c0a8415.png"
            alt="ANVM Power Infra Pvt. Ltd."
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 relative ${
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

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
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
