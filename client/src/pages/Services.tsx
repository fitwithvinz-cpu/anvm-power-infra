import { Zap, Wind, Hammer, Cable, Wrench, CheckCircle } from "lucide-react";

export default function Services() {
  const mainServices = [
    {
      icon: Zap,
      title: "Power Transmission Lines",
      description: "Complete design, construction, and commissioning of overhead transmission lines from 33kV to 220kV.",
      features: [
        "Single and double circuit transmission lines",
        "Tower and pole structure installation",
        "Conductor and insulator assembly",
        "Metering and protection systems",
        "Testing and commissioning",
      ],
    },
    {
      icon: Hammer,
      title: "Substation Construction",
      description: "Full-scale substation development from planning to operational commissioning.",
      features: [
        "Civil foundation and infrastructure",
        "Equipment installation and testing",
        "VCB yard construction",
        "Control room development",
        "SCADA system integration",
      ],
    },
    {
      icon: Wind,
      title: "Renewable Energy Integration",
      description: "Specialized services for wind and solar energy project infrastructure.",
      features: [
        "Wind farm electrical infrastructure",
        "Solar array integration",
        "Grid connection solutions",
        "Transmission line connectivity",
        "Metering and monitoring systems",
      ],
    },
    {
      icon: Cable,
      title: "Underground Cabling Systems",
      description: "Underground cable installation and management for urban and industrial applications.",
      features: [
        "Cable trenching and ducting",
        "Cable installation and testing",
        "Joint and termination works",
        "Cable protection systems",
        "Maintenance and repair services",
      ],
    },
    {
      icon: Wrench,
      title: "Equipment & Transformer Services",
      description: "Supply, installation, and commissioning of electrical equipment and transformers.",
      features: [
        "Transformer installation (11kV to 220kV)",
        "Capacity range: 250KVA to 100MVA",
        "Equipment testing and certification",
        "Maintenance and repair",
        "Spare parts management",
      ],
    },
    {
      icon: Hammer,
      title: "Civil & Infrastructure Works",
      description: "Comprehensive civil works supporting electrical infrastructure projects.",
      features: [
        "Tower and pole foundation",
        "Substation civil infrastructure",
        "Access road construction",
        "Right of Way clearance",
        "Environmental compliance",
      ],
    },
  ];

  const additionalServices = [
    "SCADA System Installation & Configuration",
    "Testing & Quality Assurance",
    "Project Management & Supervision",
    "Maintenance & Operations Support",
    "Emergency Repair Services",
    "Safety & Compliance Audits",
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section
        className="text-white relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a1628 0%, #0f2d1a 40%, #0d2137 70%, #061020 100%)',
          borderBottom: '3px solid #16a34a',
        }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #16a34a 0%, transparent 50%), radial-gradient(circle at 80% 50%, #1e40af 0%, transparent 50%)' }} />
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-8 rounded-full" style={{ background: 'linear-gradient(to bottom, #16a34a, #22d3ee)' }} />
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap">Our Services</h1>
              </div>
              <p className="text-sm text-white/70 ml-3 max-w-xl">Comprehensive electrical infrastructure solutions across Karnataka and beyond</p>
            </div>
            <div className="hidden md:flex flex-shrink-0 items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/anvm-logo-transparent_6c0a8415.png"
                alt="ANVM Power Infra"
                className="h-44 w-auto object-contain"
                style={{ filter: 'brightness(1.3) drop-shadow(0 0 16px rgba(22,163,74,0.7))' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Intro */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-3">What We Offer</h2>
          <p className="text-foreground/70 max-w-3xl text-base leading-relaxed">
            ANVM Power Infra Pvt. Ltd. delivers end-to-end electrical infrastructure services — from high-voltage transmission lines and substation construction to renewable energy integration and underground cabling. Every project is executed with precision, safety, and compliance at the forefront.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16" style={{ background: 'linear-gradient(160deg, #f0f7f4 0%, #e8f5e9 50%, #e3f2fd 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white/90 border border-green-100 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-5 border-b border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary leading-tight">{service.title}</h3>
                        <p className="text-sm text-foreground/60 mt-0.5 leading-snug">{service.description}</p>
                      </div>
                    </div>
                  </div>
                  {/* Card Body */}
                  <div className="px-6 py-5">
                    <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">Key Features</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80 leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #e3f2fd 50%, #f0f7f4 100%)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-2">Additional Services</h2>
          <p className="text-foreground/60 text-sm mb-8 max-w-2xl">Beyond our core offerings, we provide a range of supporting services to ensure complete project success.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white px-5 py-4 rounded-lg border border-border flex items-center gap-3 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-secondary/20 rounded-md flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={18} className="text-secondary" />
                </div>
                <p className="text-sm font-semibold text-foreground">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16" style={{ background: 'linear-gradient(160deg, #f0f7f4 0%, #e8f5e9 50%, #e3f2fd 100%)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-2">Our Service Process</h2>
          <p className="text-foreground/60 text-sm mb-10 max-w-2xl">A structured, transparent approach from initial assessment to final commissioning.</p>
          <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Assessment", desc: "Detailed project evaluation and planning" },
                { step: "02", title: "Design", desc: "Engineering design and specifications" },
                { step: "03", title: "Execution", desc: "Professional installation and construction" },
                { step: "04", title: "Commissioning", desc: "Testing and operational handover" },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg border border-border">
                    <div className="text-3xl font-bold text-primary mb-2">{item.step}</div>
                    <h3 className="font-bold text-primary text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-foreground/70 leading-snug">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-4 h-4 bg-secondary rounded-full border-4 border-white"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #e3f2fd 50%, #f0f7f4 100%)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-2">Why Choose ANVM Power Infra Pvt. Ltd.?</h2>
          <p className="text-foreground/60 text-sm mb-10 max-w-2xl">We combine technical expertise with a commitment to quality, safety, and timely delivery.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {[
              { title: "20+ Years Experience", desc: "Proven track record in electrical infrastructure since 2005" },
              { title: "Expert Team", desc: "Qualified engineers and experienced technicians on every project" },
              { title: "Quality Assurance", desc: "Rigorous testing and strict compliance with industry standards" },
              { title: "Safety First", desc: "Comprehensive safety protocols and continuous training" },
              { title: "On-Time Delivery", desc: "Consistent project completion on schedule and within budget" },
              { title: "24/7 Support", desc: "Dedicated maintenance and emergency response services" },
            ].map((item, index) => (
              <div key={index} className="bg-white px-6 py-5 rounded-lg border border-border flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle size={20} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-foreground/70 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
