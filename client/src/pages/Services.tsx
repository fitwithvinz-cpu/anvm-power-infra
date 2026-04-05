import { Zap, Wind, Hammer, Cable, Wrench, CheckCircle } from "lucide-react";

export default function Services() {
  const mainServices = [
    {
      icon: Zap,
      title: "Power Transmission Lines",
      description: "Complete design, construction, and commissioning of overhead transmission lines from 33kV to 220kV",
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
      description: "Full-scale substation development from planning to operational commissioning",
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
      description: "Specialized services for wind and solar energy project infrastructure",
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
      description: "Underground cable installation and management for urban and industrial applications",
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
      description: "Supply, installation, and commissioning of electrical equipment and transformers",
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
      description: "Comprehensive civil works supporting electrical infrastructure projects",
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
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white rounded-xl px-4 py-2 shadow-md">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/anvm-logo-final-approved_a1010889.webp"
                alt="ANVM Power Infra"
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Services</h1>
          <p className="text-lg text-white/85 max-w-3xl">
            Comprehensive electrical infrastructure solutions for power transmission and renewable energy
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={32} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                        <p className="text-foreground/70">{service.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="font-semibold text-primary mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{feature}</span>
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
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-border flex items-center gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={24} className="text-secondary" />
                </div>
                <p className="font-semibold text-foreground">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Service Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Assessment", desc: "Detailed project evaluation and planning" },
                { step: "02", title: "Design", desc: "Engineering design and specifications" },
                { step: "03", title: "Execution", desc: "Professional installation and construction" },
                { step: "04", title: "Commissioning", desc: "Testing and operational handover" },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg border border-border text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{item.step}</div>
                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.desc}</p>
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
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Why Choose ANVM Power Infra Pvt. Ltd.?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "20+ Years Experience", desc: "Proven track record in electrical infrastructure" },
              { title: "Expert Team", desc: "Qualified engineers and experienced technicians" },
              { title: "Quality Assurance", desc: "Rigorous testing and compliance standards" },
              { title: "Safety First", desc: "Comprehensive safety protocols and training" },
              { title: "On-Time Delivery", desc: "Consistent project completion on schedule" },
              { title: "24/7 Support", desc: "Dedicated maintenance and emergency services" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
