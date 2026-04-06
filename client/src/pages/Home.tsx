import { Link } from "wouter";
import { ArrowRight, Zap, Wind, Hammer, Shield, CheckCircle, Star, TrendingUp, Users, Award, Globe } from "lucide-react";
import { useScrollAnimation, useCounterAnimation } from "@/hooks/useScrollAnimation";
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

function CounterCard({ target, suffix, label, icon: Icon }: { target: number; suffix: string; label: string; icon: React.ElementType }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const count = useCounterAnimation(target, 2000, isVisible);

  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-2xl transition-all duration-500 hover:scale-105"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
        style={{ background: "rgba(22, 163, 74, 0.3)" }}>
        <Icon size={24} className="text-green-400" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-1">
        {count}{suffix}
      </div>
      <p className="text-white/70 text-sm font-medium">{label}</p>
    </div>
  );
}

export default function Home() {
  const services = [
    {
      icon: Zap,
      title: "Power Transmission",
      description: "High-voltage transmission lines from 33kV to 220kV with precision engineering and safety compliance",
      features: ["EHV & HV Lines", "Tower Erection", "Conductor Stringing"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/hero-power-transmission-fxmPpQAERVJbTMB3qp5bTg.webp",
    },
    {
      icon: Wind,
      title: "Renewable Energy",
      description: "Wind and solar energy infrastructure with complete integration and grid connectivity solutions",
      features: ["Wind Farm Setup", "Solar Integration", "Grid Connectivity"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/hero-renewable-energy-nAJU8iVuGG6WKFNTvFLUef.webp",
    },
    {
      icon: Hammer,
      title: "Substation Works",
      description: "Complete substation design, construction, and commissioning services for all voltage levels",
      features: ["Design & Build", "Commissioning", "Testing & Maintenance"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/project-substation-1-Ub6rnRr2EAkqHfBmqoNMt4.webp",
    },
    {
      icon: Shield,
      title: "Civil Works",
      description: "Foundation, tower, and infrastructure construction with strict safety and quality compliance",
      features: ["Tower Foundations", "Civil Infrastructure", "Quality Assurance"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/project-civil-works-1-NeVqxJyqYGqjqLhVYBBWkE.webp",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "20+ Years Legacy",
      description: "Built on the foundation of Shri Mangalagouri Electricals (est. 2005), with two decades of proven excellence",
    },
    {
      icon: CheckCircle,
      title: "Certified Excellence",
      description: "ISO certified processes with strict quality control and safety standards on every project",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "50+ skilled engineers and technicians with deep domain expertise in power infrastructure",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "50+ successfully completed projects across Karnataka for KPTCL, KEB, and HESCOM",
    },
    {
      icon: Globe,
      title: "Renewable Focus",
      description: "Committed to India's clean energy future with wind and solar infrastructure expertise",
    },
    {
      icon: Star,
      title: "Client Trust",
      description: "Long-term partnerships with major power utilities built on reliability and quality delivery",
    },
  ];

  const clients = [
    { name: "KPTCL", full: "Karnataka Power Transmission Corporation Ltd." },
    { name: "KEB", full: "Karnataka Electricity Board" },
    { name: "HESCOM", full: "Hubli Electricity Supply Company" },
    { name: "BESCOM", full: "Bangalore Electricity Supply Company" },
    { name: "MESCOM", full: "Mangalore Electricity Supply Company" },
    { name: "GESCOM", full: "Gulbarga Electricity Supply Company" },
  ];

  const testimonials = [
    {
      text: "ANVM Power Infra delivered our 110kV transmission line project on time and within budget. Their team's technical expertise and safety standards are exceptional.",
      author: "Project Manager",
      company: "KPTCL",
      rating: 5,
    },
    {
      text: "We have been working with ANVM for our substation construction projects. Their quality of work and commitment to deadlines is commendable.",
      author: "Senior Engineer",
      company: "HESCOM",
      rating: 5,
    },
    {
      text: "The renewable energy integration project was completed flawlessly. ANVM's team demonstrated deep knowledge and professional execution throughout.",
      author: "Technical Director",
      company: "KEB",
      rating: 5,
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Sky gradient background — natural dawn/dusk feel like Suzlon */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(180deg, #0a1628 0%, #0d2137 25%, #1a3a5c 50%, #2d5a3d 75%, #1a3d25 100%)",
          }}
        />

        {/* Subtle atmospheric glow */}
        <div className="absolute inset-0 z-0" style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(22,163,74,0.12) 0%, transparent 70%)"
        }} />

        {/* Wind farm scene — full width, horizon-placed turbines */}
        <div className="absolute inset-0 z-[1] overflow-hidden">
          <WindmillScene color="rgba(255,255,255,0.85)" horizonPct={82} />
        </div>

        {/* Ground strip at horizon */}
        <div className="absolute z-[2] w-full" style={{
          bottom: "18%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(22,163,74,0.3), rgba(22,163,74,0.5), rgba(22,163,74,0.3), transparent)"
        }} />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-20">
          {/* Large logo in hero */}
          <div
            className="mb-8"
            style={{ animation: "fadeInDown 0.8s ease 0s both" }}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/anvm-logo-transparent_6c0a8415.png"
              alt="ANVM Power Infra Pvt. Ltd."
              className="h-28 md:h-36 w-auto object-contain"
              style={{ filter: "brightness(1.4) drop-shadow(0 0 24px rgba(22,163,74,0.8))" }}
            />
          </div>
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: "rgba(22, 163, 74, 0.2)",
                border: "1px solid rgba(22, 163, 74, 0.4)",
                color: "#4ade80",
                animation: "fadeInDown 0.8s ease 0.2s both",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Established 2025 — Built on 20 Years of Excellence
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ animation: "fadeInDown 0.8s ease 0.4s both" }}
            >
              Powering India's
              <span className="block" style={{ background: "linear-gradient(135deg, #4ade80, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Green Future
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-white/80 mb-10 font-light leading-relaxed"
              style={{ animation: "fadeInDown 0.8s ease 0.6s both" }}
            >
              From power transmission to renewable energy — delivering world-class electrical infrastructure solutions across Karnataka
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: "fadeInDown 0.8s ease 0.8s both" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-1 active:scale-95"
                style={{ background: "linear-gradient(135deg, #16a34a, #15803d)" }}
              >
                Get Started Today
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:bg-white/20 active:scale-95"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)" }}
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" style={{ animation: "scrollLine 2s ease-in-out infinite" }}></div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #0f2d1a 50%, #1e3a8a 100%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CounterCard target={20} suffix="+" label="Years of Legacy" icon={Award} />
            <CounterCard target={50} suffix="+" label="Projects Completed" icon={TrendingUp} />
            <CounterCard target={50} suffix="+" label="Team Members" icon={Users} />
            <CounterCard target={3} suffix="" label="Major Corporations" icon={Globe} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24" style={{ background: "linear-gradient(160deg, #f0f7f4 0%, #e8f5e9 50%, #e3f2fd 100%)" }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ background: "rgba(22, 163, 74, 0.1)", color: "#16a34a", border: "1px solid rgba(22, 163, 74, 0.2)" }}>
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive electrical infrastructure solutions tailored to your needs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={index} delay={index * 100}>
                  <div
                    className="group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full"
                    style={{ background: "white", border: "1px solid rgba(22, 163, 74, 0.15)" }}
                  >
                    {/* Image */}
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, #16a34a, #0f172a)" }}>
                        <Icon size={20} className="text-white" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                            <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-1"
              style={{ background: "linear-gradient(135deg, #0f172a, #16a34a)" }}
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #0f172a 0%, #0f2d1a 50%, #1e3a8a 100%)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{ background: "rgba(22, 163, 74, 0.2)", color: "#4ade80", border: "1px solid rgba(22, 163, 74, 0.3)" }}>
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Building Tomorrow's Power Infrastructure
              </h2>
              <p className="text-lg text-white/75 mb-5 leading-relaxed">
                Established in 2025 and built on the 20-year legacy of <strong className="text-green-400">Shri Mangalagouri Electricals</strong> (founded 2005), ANVM Power Infra Pvt. Ltd. is at the forefront of electrical infrastructure development in India.
              </p>
              <p className="text-lg text-white/75 mb-8 leading-relaxed">
                With deep expertise in power transmission, renewable energy, and substation construction, we deliver solutions that power the nation. Our team works with leading corporations including KPTCL, KEB, and HESCOM.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Power Transmission", "Renewable Energy", "Substation Works", "Civil Infrastructure"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{ background: "rgba(22, 163, 74, 0.15)", color: "#4ade80", border: "1px solid rgba(22, 163, 74, 0.25)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-semibold text-green-400 hover:text-green-300 transition-colors group"
              >
                Learn More About Us
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div
                  className="h-96 rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/hero-renewable-energy-nAJU8iVuGG6WKFNTvFLUef.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.6), transparent)" }} />
                </div>
                {/* Floating badge */}
                <div
                  className="absolute -bottom-6 -left-6 p-5 rounded-2xl shadow-xl"
                  style={{ background: "linear-gradient(135deg, #16a34a, #15803d)" }}
                >
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-white/90 text-sm font-medium">Years of Excellence</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24" style={{ background: "linear-gradient(160deg, #f0f7f4 0%, #e8f5e9 50%, #e3f2fd 100%)" }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ background: "rgba(22, 163, 74, 0.1)", color: "#16a34a", border: "1px solid rgba(22, 163, 74, 0.2)" }}>
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Reliable Services Backed by Trusted Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring two decades of expertise and a commitment to excellence on every project
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={index} delay={index * 80}>
                  <div
                    className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    style={{ background: "white", border: "1px solid rgba(22, 163, 74, 0.15)" }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                      style={{ background: "linear-gradient(135deg, rgba(22, 163, 74, 0.15), rgba(15, 23, 42, 0.1))" }}>
                      <Icon size={24} className="text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner with Background */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/project-substation-1-Ub6rnRr2EAkqHfBmqoNMt4.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(15, 23, 42, 0.85)" }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Power Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Contact our team today to discuss your electrical infrastructure needs and get a free consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-1"
                style={{ background: "linear-gradient(135deg, #16a34a, #15803d)" }}
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:+918951193777"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-semibold text-white transition-all hover:bg-white/20"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)" }}
              >
                📞 Call Us Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20" style={{ background: "linear-gradient(160deg, #f0f7f4 0%, #e8f5e9 50%, #e3f2fd 100%)" }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Trusted Clients</h2>
            <p className="text-gray-600">Partnering with Karnataka's leading power utilities</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, index) => (
              <AnimatedSection key={index} delay={index * 60}>
                <div
                  className="group p-4 rounded-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{ background: "white", border: "1px solid rgba(22, 163, 74, 0.15)" }}
                >
                  <div className="text-2xl font-bold text-primary mb-1 group-hover:text-green-600 transition-colors">
                    {client.name}
                  </div>
                  <div className="text-xs text-gray-500 leading-tight">{client.full}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #0f172a 0%, #0f2d1a 50%, #1e3a8a 100%)" }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ background: "rgba(22, 163, 74, 0.2)", color: "#4ade80", border: "1px solid rgba(22, 163, 74, 0.3)" }}>
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div
                  className="p-6 rounded-2xl h-full flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed flex-1 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-green-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0%, 100% { opacity: 0.5; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>
    </div>
  );
}
