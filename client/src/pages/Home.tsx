import { Link } from "wouter";
import { ArrowRight, Zap, Wind, Hammer, Shield, CheckCircle, Star, TrendingUp, Users, Award, Globe, Phone, ChevronRight } from "lucide-react";
import { useScrollAnimation, useCounterAnimation } from "@/hooks/useScrollAnimation";
import WindmillScene from "@/components/WindmillScene";
import SingleWindmill from "@/components/SingleWindmill";

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

function CounterCard({ target, suffix, label, icon: Icon }: { target: number; suffix: string; label: string; icon: React.ElementType }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const count = useCounterAnimation(target, 2000, isVisible);

  return (
    <div
      ref={ref}
      className="text-center p-8 rounded-2xl transition-all duration-500 hover:scale-105"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
        style={{ background: "linear-gradient(135deg, rgba(22,163,74,0.4), rgba(22,163,74,0.15))" }}>
        <Icon size={26} className="text-green-400" />
      </div>
      <div className="text-5xl font-bold text-white mb-2 tracking-tight">
        {count}{suffix}
      </div>
      <p className="text-white/60 text-sm font-medium uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function Home() {
  const services = [
    {
      icon: Zap,
      title: "Power Transmission",
      subtitle: "33kV to 220kV",
      description: "High-voltage transmission lines engineered for reliability, safety, and long-term performance across Karnataka.",
      features: ["EHV & HV Transmission Lines", "Tower Erection & Stringing", "Line Testing & Commissioning"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/power-transmission-towers_6353e402.jpg",
      color: "#f59e0b",
    },
    {
      icon: Wind,
      title: "Renewable Energy",
      subtitle: "Wind & Solar",
      description: "Complete wind farm and solar energy infrastructure with grid integration and connectivity solutions.",
      features: ["Wind Farm Development", "Solar Panel Installation", "Grid Connectivity & Integration"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/wind-turbines-golden_6aaa089a.jpg",
      color: "#22c55e",
    },
    {
      icon: Hammer,
      title: "Substation Works",
      subtitle: "Design to Commissioning",
      description: "End-to-end substation design, construction, and commissioning for all voltage levels.",
      features: ["Substation Design & Build", "Equipment Installation", "Testing & Commissioning"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/substation-construction_fd3756a6.jpg",
      color: "#3b82f6",
    },
    {
      icon: Shield,
      title: "Civil Works",
      subtitle: "Foundation & Infrastructure",
      description: "Tower foundations, civil infrastructure, and construction with strict safety and quality compliance.",
      features: ["Tower Foundation Work", "Civil Infrastructure", "Quality & Safety Compliance"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/substation-india_ca7f052e.jpg",
      color: "#8b5cf6",
    },
  ];

  const whyChooseUs = [
    { icon: Award, title: "20+ Years Legacy", description: "Built on the foundation of Shri Mangalagouri Electricals (est. 2005), with two decades of proven excellence in power infrastructure." },
    { icon: CheckCircle, title: "Certified Excellence", description: "ISO certified processes with strict quality control and safety standards on every project we undertake." },
    { icon: Users, title: "Expert Team", description: "50+ skilled engineers and technicians with deep domain expertise in power and renewable energy infrastructure." },
    { icon: TrendingUp, title: "Proven Track Record", description: "50+ successfully completed projects across Karnataka for KPTCL, HESCOM, BESCOM, and other major utilities." },
    { icon: Globe, title: "Renewable Focus", description: "Committed to India's clean energy future with specialised wind and solar infrastructure expertise." },
    { icon: Star, title: "Client Trust", description: "Long-term partnerships with Karnataka's major power utilities built on reliability, quality, and timely delivery." },
  ];

  const clients = [
    { name: "KPTCL", full: "Karnataka Power Transmission Corporation Ltd." },
    { name: "HESCOM", full: "Hubli Electricity Supply Company" },
    { name: "BESCOM", full: "Bangalore Electricity Supply Company" },
    { name: "MESCOM", full: "Mangalore Electricity Supply Company" },
    { name: "GESCOM", full: "Gulbarga Electricity Supply Company" },
  ];

  const testimonials = [
    { text: "ANVM Power Infra delivered our 110kV transmission line project on time and within budget. Their team's technical expertise and safety standards are exceptional.", author: "Project Manager", company: "KPTCL", rating: 5 },
    { text: "We have been working with ANVM for our substation construction projects. Their quality of work and commitment to deadlines is commendable.", author: "Senior Engineer", company: "HESCOM", rating: 5 },
    { text: "The substation commissioning work was handled with great precision and professionalism. ANVM's team exceeded our expectations on every front.", author: "Technical Director", company: "BESCOM", rating: 5 },
  ];

  return (
    <div className="w-full overflow-hidden">

      {/* ═══════════════════════════════════════════════════
          HERO — Full-screen wind farm with natural sky
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

        {/* Real wind farm photo background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/wind-farm-sunset_69e78ea2.jpg"
            alt="Wind farm at sunset"
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layer overlay for text readability while keeping photo natural */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, rgba(5,15,35,0.88) 0%, rgba(5,15,35,0.70) 40%, rgba(5,15,35,0.40) 100%)"
          }} />
          {/* Bottom fade to blend into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-40" style={{
            background: "linear-gradient(to bottom, transparent, rgba(5,15,35,0.95))"
          }} />



        </div>

        {/* Hero Content — two-column: text left, logo+turbine right */}
        <div className="container relative z-10 py-32 md:py-40 flex items-center gap-8">

          {/* LEFT: Text content */}
          <div className="flex-1 min-w-0">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
              style={{
                background: "rgba(22, 163, 74, 0.18)",
                border: "1px solid rgba(22, 163, 74, 0.45)",
                color: "#4ade80",
                animation: "fadeInDown 0.8s ease 0s both",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Established 2025 — Built on 20 Years of Excellence
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6"
              style={{ animation: "fadeInDown 0.8s ease 0.15s both" }}
            >
              Powering India's
              <span className="block mt-1" style={{
                background: "linear-gradient(90deg, #4ade80 0%, #34d399 50%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Green Future
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-white/75 mb-10 max-w-xl leading-relaxed"
              style={{ animation: "fadeInDown 0.8s ease 0.3s both" }}
            >
              From high-voltage power transmission to wind farms and solar energy — ANVM Power Infra delivers world-class electrical infrastructure across Karnataka.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 mb-10"
              style={{ animation: "fadeInDown 0.8s ease 0.45s both" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{ background: "linear-gradient(135deg, #16a34a, #15803d)", boxShadow: "0 4px 24px rgba(22,163,74,0.4)" }}
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:bg-white/20"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", backdropFilter: "blur(8px)" }}
              >
                View Our Projects
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Quick service pills */}
            <div
              className="flex flex-wrap gap-3"
              style={{ animation: "fadeInDown 0.8s ease 0.6s both" }}
            >
              {["Power Transmission", "Wind Energy", "Solar Energy", "Substation Works", "Civil Works"].map((s) => (
                <span key={s} className="px-4 py-1.5 rounded-full text-xs font-medium text-white/80"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Large logo + 1 rotating turbine */}
          <div
            className="hidden lg:flex flex-row items-center justify-center flex-shrink-0 gap-4"
            style={{ width: "380px", animation: "fadeInDown 1s ease 0.4s both" }}
          >
            {/* Single rotating turbine SVG */}
            <div className="flex-shrink-0">
              <svg width="160" height="340" viewBox="0 0 160 340" xmlns="http://www.w3.org/2000/svg">
                {/* Tower — slim tapered pole */}
                <polygon points="78,80 82,80 88,340 72,340" fill="rgba(220,232,242,0.85)" />
                {/* Nacelle */}
                <rect x="70" y="72" width="20" height="10" rx="3" fill="rgba(210,225,238,0.90)" />
                {/* Rotating rotor group — centred at hub (80, 78) */}
                <g transform="translate(80,78)">
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 0 0"
                    to="360 0 0"
                    dur="14s"
                    repeatCount="indefinite"
                    additive="sum"
                  />
                  {/* 3 blades */}
                  {([0, 120, 240] as number[]).map((deg) => (
                    <g key={deg} transform={`rotate(${deg})`}>
                      <path
                        d="M -5 0 C -9 -14, -10 -44, -3.5 -72 C -0.5 -44, 2.5 -14, 5 0 Z"
                        fill="rgba(220,232,242,0.90)"
                      />
                    </g>
                  ))}
                  {/* Hub */}
                  <circle r="6" fill="rgba(200,218,235,0.92)" />
                  <circle r="2.5" fill="rgba(160,185,210,0.88)" />
                </g>
              </svg>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 text-xs" style={{ animation: "fadeIn 1s ease 1.2s both" }}>
          <span>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" style={{ animation: "pulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STATS COUNTER STRIP — dark background
      ═══════════════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(135deg, #0f172a, #1e3a8a)" }} className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CounterCard target={20} suffix="+" label="Years of Experience" icon={Award} />
            <CounterCard target={50} suffix="+" label="Projects Completed" icon={TrendingUp} />
            <CounterCard target={50} suffix="+" label="Team Members" icon={Users} />
            <CounterCard target={6} suffix="+" label="Major Corporations" icon={Globe} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICES — Full-width cards with real photos
      ═══════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "#f8fafc" }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "rgba(22,163,74,0.1)", color: "#16a34a", border: "1px solid rgba(22,163,74,0.2)" }}>
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0f172a" }}>
              Our Core Services
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748b" }}>
              Comprehensive electrical infrastructure solutions — from high-voltage transmission to renewable energy and civil works
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <div
                  className="group rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)", background: "white" }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                    {/* Service icon badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: service.color, boxShadow: `0 4px 16px ${service.color}60` }}>
                      <service.icon size={22} className="text-white" />
                    </div>
                    {/* Subtitle on image */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">{service.subtitle}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#0f172a" }}>{service.title}</h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748b" }}>{service.description}</p>

                    {/* Feature list */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm font-medium" style={{ color: "#374151" }}>
                          <CheckCircle size={15} style={{ color: service.color, flexShrink: 0 }} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link href="/services"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-3"
                      style={{ color: service.color }}>
                      Learn More <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #0f172a, #1e3a5f)" }}>
              View All Services
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          RENEWABLE ENERGY SHOWCASE — Full-width split
      ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "#f0f7f4" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left: Solar farm image */}
          <div className="relative h-72 lg:h-auto">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/solar-farm-aerial_4fddd583.jpg"
              alt="Solar farm aerial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, #f0f7f4)" }} />
          </div>

          {/* Right: Content */}
          <AnimatedSection className="flex flex-col justify-center px-8 md:px-16 py-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 w-fit"
              style={{ background: "rgba(22,163,74,0.12)", color: "#15803d", border: "1px solid rgba(22,163,74,0.25)" }}>
              Renewable Energy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: "#0f172a" }}>
              Building India's Clean Energy Infrastructure
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: "#475569" }}>
              ANVM Power Infra is at the forefront of India's renewable energy revolution. We design, build, and commission wind farms and solar energy installations that power communities and industries with clean, sustainable electricity.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Wind Farm Setup", icon: Wind },
                { label: "Solar Integration", icon: Zap },
                { label: "Grid Connectivity", icon: Globe },
                { label: "O&M Support", icon: CheckCircle },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ background: "white", border: "1px solid #d1fae5", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <Icon size={18} style={{ color: "#16a34a", flexShrink: 0 }} />
                  <span className="text-sm font-medium" style={{ color: "#374151" }}>{label}</span>
                </div>
              ))}
            </div>
            <Link href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white w-fit transition-all duration-300 hover:-translate-y-1"
              style={{ background: "linear-gradient(135deg, #16a34a, #15803d)", boxShadow: "0 4px 20px rgba(22,163,74,0.35)" }}>
              Explore Renewable Services
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT STRIP — Company story with photo
      ═══════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                style={{ background: "rgba(22,163,74,0.1)", color: "#16a34a", border: "1px solid rgba(22,163,74,0.2)" }}>
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#0f172a" }}>
                Building Tomorrow's Power Infrastructure
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#475569" }}>
                Established in 2025 and built on the 20-year legacy of <strong style={{ color: "#0f172a" }}>Shri Mangalagouri Electricals</strong> (founded 2005), ANVM Power Infra Pvt. Ltd. is at the forefront of electrical infrastructure development in Karnataka.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: "#64748b" }}>
                With deep expertise in power transmission, renewable energy, and substation construction, we deliver solutions that power the nation. Our team works with leading corporations including KPTCL, HESCOM, and BESCOM.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Power Transmission", "Renewable Energy", "Substation Works", "Civil Infrastructure"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-lg text-sm font-medium"
                    style={{ background: "#f1f5f9", color: "#334155" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg, #0f172a, #1e3a5f)" }}>
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            {/* Right: Photo grid */}
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden h-48">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/power-transmission-towers_6353e402.jpg"
                    alt="Power transmission" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden h-48 mt-8">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/wind-turbines-golden_6aaa089a.jpg"
                    alt="Wind turbines" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden h-48">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/substation-construction_fd3756a6.jpg"
                    alt="Substation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden h-48 mt-8">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/solar-farm-aerial_4fddd583.jpg"
                    alt="Solar farm" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHY CHOOSE US — Dark section
      ═══════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "#f8fafc" }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "rgba(22,163,74,0.1)", color: "#15803d", border: "1px solid rgba(22,163,74,0.2)" }}>
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0f172a" }}>
              Reliable Services Backed by<br />Trusted Professionals
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748b" }}>
              We bring two decades of expertise and an unwavering commitment to excellence on every project
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 80}>
                <div
                  className="p-7 rounded-2xl transition-all duration-400 hover:-translate-y-1 hover:border-green-500/30"
                  style={{
                    background: "white",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "linear-gradient(135deg, rgba(22,163,74,0.3), rgba(22,163,74,0.1))" }}>
                    <item.icon size={22} className="text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "#0f172a" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA BANNER — Full-width with transmission photo
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/power-transmission-towers_6353e402.jpg"
            alt="Power infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(5,15,35,0.92), rgba(22,163,74,0.75))" }} />
        </div>
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Power Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Contact our team today to discuss your electrical infrastructure needs and get a free consultation
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ background: "linear-gradient(135deg, #16a34a, #15803d)", boxShadow: "0 4px 24px rgba(22,163,74,0.5)" }}>
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+918951193777"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:bg-white/25"
                style={{ background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.4)", backdropFilter: "blur(8px)" }}>
                <Phone size={18} />
                +91 8951193777
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CLIENTS — Light section
      ═══════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: "#f8fafc" }}>
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "rgba(22,163,74,0.1)", color: "#16a34a", border: "1px solid rgba(22,163,74,0.2)" }}>
              Our Trusted Clients
            </span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0f172a" }}>
              Partnering with Karnataka's Leading Power Utilities
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, i) => (
              <AnimatedSection key={client.name} delay={i * 60}>
                <div
                  className="flex flex-col items-center justify-center p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
                  style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                >
                  <div className="text-2xl font-black mb-2" style={{ color: "#0f172a" }}>{client.name}</div>
                  <p className="text-xs leading-tight" style={{ color: "#94a3b8" }}>{client.full}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS — Dark section
      ═══════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "#f8fafc" }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "rgba(22,163,74,0.1)", color: "#15803d", border: "1px solid rgba(22,163,74,0.2)" }}>
              Testimonials
            </span>
            <h2 className="text-4xl font-bold" style={{ color: "#0f172a" }}>What Our Clients Say</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div
                  className="p-8 rounded-2xl h-full flex flex-col"
                  style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                >
                  <div className="flex gap-1 mb-5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="leading-relaxed mb-6 flex-1 italic" style={{ color: "#475569" }}>"{t.text}"</p>
                  <div className="border-t pt-5" style={{ borderColor: "#e2e8f0" }}>
                    <p className="font-semibold" style={{ color: "#0f172a" }}>{t.author}</p>
                    <p className="text-sm text-green-400">{t.company}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
