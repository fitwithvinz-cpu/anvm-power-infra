import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import TransmissionScene from "@/components/TransmissionScene";

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

export default function About() {
  const milestones = [
    { year: "2005", title: "Legacy Begins", description: "Shri Mangalagouri Electricals founded, building deep expertise in electrical contracting and power infrastructure", color: "#16a34a" },
    { year: "2015", title: "Expansion", description: "Expanded operations across Karnataka and Maharashtra with major KPTCL and HESCOM projects", color: "#1e3a8a" },
    { year: "2020", title: "Renewable Energy", description: "Ventured into wind and solar energy infrastructure, partnering with leading renewable energy companies", color: "#16a34a" },
    { year: "2025", title: "ANVM Established", description: "ANVM Power Infra Pvt. Ltd. formally incorporated, building on 20 years of Mangalagouri legacy", color: "#1e3a8a" },
  ];

  const values = [
    {
      title: "Excellence",
      description: "Delivering highest quality in every project with precision and attention to detail",
      icon: "🏆",
    },
    {
      title: "Safety",
      description: "Prioritizing safety standards and compliance in all operations",
      icon: "🛡️",
    },
    {
      title: "Innovation",
      description: "Embracing modern technologies and sustainable solutions",
      icon: "💡",
    },
    {
      title: "Reliability",
      description: "Building long-term partnerships through consistent performance",
      icon: "🤝",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header — tall, natural, photo-backed */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: '420px' }}>
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/team-engineers_a3e45cd7.jpg"
            alt="Our team"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,15,35,0.90) 0%, rgba(5,15,35,0.75) 50%, rgba(5,15,35,0.55) 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,15,35,0.6))' }} />
        </div>
        {/* Transmission tower animation */}
        <div className="absolute inset-0 z-[1] overflow-hidden">
          <TransmissionScene />
        </div>
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ background: 'rgba(22,163,74,0.2)', border: '1px solid rgba(22,163,74,0.4)', color: '#4ade80' }}>
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">About ANVM<br />Power Infra Pvt. Ltd.</h1>
            <p className="text-lg text-white/70 max-w-xl">Established in 2025 with a vision for excellence in electrical and power infrastructure — built on 20 years of legacy</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24" style={{ background: 'linear-gradient(160deg, #f0f7f4 0%, #e8f5e9 50%, #e3f2fd 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{ background: "rgba(22, 163, 74, 0.1)", color: "#16a34a", border: "1px solid rgba(22, 163, 74, 0.2)" }}>
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-primary mb-8">Two Decades of Excellence</h2>
              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>
                  ANVM Power Infra Pvt. Ltd. is a dynamic and forward-thinking company in the electrical and power infrastructure sector, formally established in 2025. The company is built on the strong foundation of <strong className="text-primary">Shri Mangalagouri Electricals</strong>, which was founded in 2005.
                </p>
                <p>
                  Carrying forward this legacy, ANVM Power Infra Pvt. Ltd. was formally incorporated in 2025 with a vision to deliver high-quality, reliable, and efficient power solutions across Karnataka and beyond.
                </p>
                <p>
                  The company has successfully executed numerous projects in collaboration with <strong className="text-green-700">KPTCL, HESCOM, and CleanMax Renewables</strong>, along with various private and industrial clients.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2005", label: "Founded (Legacy)", color: "#16a34a" },
                  { value: "20+", label: "Years Experience", color: "#1e3a8a" },
                  { value: "50+", label: "Projects Done", color: "#16a34a" },
                  { value: "3+", label: "Major Clients", color: "#1e3a8a" },
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-2xl text-center transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ background: "white", border: `2px solid ${stat.color}20` }}>
                    <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0f2d1a 50%, #1e3a8a 100%)' }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Mission & Vision</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={100}>
              <div className="p-8 rounded-2xl h-full"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(22, 163, 74, 0.3)", backdropFilter: "blur(10px)" }}>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/75 text-lg leading-relaxed">
                  To consistently provide quality services to our valued clients whilst embracing professional standards and ethics. We are committed to delivering excellence in every project, ensuring safety, reliability, and innovation in all our operations.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="p-8 rounded-2xl h-full"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(30, 58, 138, 0.5)", backdropFilter: "blur(10px)" }}>
                <div className="text-4xl mb-4">🔭</div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/75 text-lg leading-relaxed">
                  To be the market leader and the preferred provider of electrical installation services in Karnataka, Maharashtra, Telangana, and Andhra Pradesh. We aspire to be recognized for our technical expertise, commitment to sustainability, and contribution to India's power infrastructure development.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24" style={{ background: 'linear-gradient(160deg, #f0f7f4 0%, #e8f5e9 50%, #e3f2fd 100%)' }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group bg-white p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center h-full"
                  style={{ borderColor: "rgba(22, 163, 74, 0.15)" }}>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CheckCircle className="w-8 h-8 text-green-500 mb-3 mx-auto" />
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0f2d1a 50%, #1e3a8a 100%)' }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-white/70 text-lg">From humble beginnings to industry leadership</p>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="flex gap-8 mb-12 relative">
                  {index !== milestones.length - 1 && (
                    <div className="absolute left-12 top-24 w-0.5 h-16 opacity-30"
                      style={{ background: "linear-gradient(to bottom, #16a34a, transparent)" }}></div>
                  )}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}99)` }}>
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-4 p-6 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-white/70 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-24" style={{ background: 'linear-gradient(160deg, #f0f7f4 0%, #e8f5e9 50%, #e3f2fd 100%)' }}>
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Areas of Specialization</h2>
            <p className="text-gray-600 text-lg">Comprehensive expertise across all power infrastructure domains</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Power Transmission & Substations",
                items: ["11kV to 220kV transmission lines", "Substation construction and commissioning", "VCB yards and metering systems", "SCADA system installation"],
                gradient: "linear-gradient(135deg, rgba(15,23,42,0.05), rgba(22,163,74,0.08))",
              },
              {
                title: "Renewable Energy",
                items: ["Wind energy projects", "Solar energy infrastructure", "Grid integration solutions", "Transmission connectivity"],
                gradient: "linear-gradient(135deg, rgba(22,163,74,0.08), rgba(30,58,138,0.05))",
              },
              {
                title: "Civil & Infrastructure Works",
                items: ["Tower foundations", "Underground cabling", "Right of Way clearance", "Substation civil works"],
                gradient: "linear-gradient(135deg, rgba(30,58,138,0.05), rgba(22,163,74,0.08))",
              },
              {
                title: "Testing & Commissioning",
                items: ["Equipment testing", "System commissioning", "Quality assurance", "Compliance verification"],
                gradient: "linear-gradient(135deg, rgba(22,163,74,0.05), rgba(15,23,42,0.08))",
              },
            ].map((area, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
                  style={{ background: area.gradient, borderColor: "rgba(22, 163, 74, 0.2)" }}>
                  <h3 className="text-xl font-bold text-primary mb-5">{area.title}</h3>
                  <ul className="space-y-3">
                    {area.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
