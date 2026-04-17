import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Large Brand Logo Banner — above footer, Suzlon-style with flash glow */}
      <div className="relative overflow-hidden bg-[#0a1628] py-10 flex flex-col items-center justify-center">
        {/* Animated sweep flash overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.06) 50%, transparent 65%)",
            animation: "anvm-flash-sweep 3.5s ease-in-out infinite",
          }}
        />

        {/* Full ANVM Logo — large, centered, with glow */}
        <div className="relative flex flex-col items-center justify-center">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/anvm-logo-transparent_6c0a8415.png"
            alt="ANVM Power Infra Pvt. Ltd."
            style={{
              width: "clamp(260px, 45vw, 640px)",
              filter:
                "drop-shadow(0 0 18px rgba(59,130,246,0.8)) drop-shadow(0 0 40px rgba(59,130,246,0.5)) drop-shadow(0 0 80px rgba(59,130,246,0.3))",
              animation: "anvm-logo-pulse 2.8s ease-in-out infinite",
            }}
          />
        </div>

        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

        <style>{`
          @keyframes anvm-logo-pulse {
            0%, 100% {
              filter:
                drop-shadow(0 0 18px rgba(59,130,246,0.8))
                drop-shadow(0 0 40px rgba(59,130,246,0.5))
                drop-shadow(0 0 80px rgba(59,130,246,0.3));
            }
            50% {
              filter:
                drop-shadow(0 0 28px rgba(59,130,246,1))
                drop-shadow(0 0 60px rgba(59,130,246,0.8))
                drop-shadow(0 0 120px rgba(59,130,246,0.5))
                drop-shadow(0 0 200px rgba(59,130,246,0.3));
            }
          }
          @keyframes anvm-flash-sweep {
            0% { transform: translateX(-100%); }
            60%, 100% { transform: translateX(200%); }
          }
        `}</style>
      </div>

      <footer className="bg-[#0f172a] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-sans">ANVM Power Infra Pvt. Ltd.</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Delivering excellence in electrical and power infrastructure solutions across India.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-secondary transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-secondary transition-colors">Services</Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-secondary transition-colors">Projects</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-secondary transition-colors cursor-pointer">Power Transmission</li>
                <li className="hover:text-secondary transition-colors cursor-pointer">Substations</li>
                <li className="hover:text-secondary transition-colors cursor-pointer">Renewable Energy</li>
                <li className="hover:text-secondary transition-colors cursor-pointer">Civil Works</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <p>SF-09, Shriya Riddhi Siddhi Commercial Complex, Hubli-580030</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  <a href="tel:+918951193777" className="hover:text-secondary transition-colors">
                    +91 8951193777
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <a href="mailto:anvmpowerinfrapvtltd@gmail.com" className="hover:text-secondary transition-colors break-all">
                    anvmpowerinfrapvtltd@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
              <p>&copy; {currentYear} ANVM Power Infra Pvt. Ltd. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
