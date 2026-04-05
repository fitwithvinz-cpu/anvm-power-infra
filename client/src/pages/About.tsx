import { CheckCircle } from "lucide-react";

export default function About() {
  const milestones = [
    { year: "2005", title: "Legacy Begins", description: "Shri Mangalagouri Electricals founded, building deep expertise in electrical contracting and power infrastructure" },
    { year: "2015", title: "Expansion", description: "Expanded operations across Karnataka and Maharashtra with major KPTCL and HESCOM projects" },
    { year: "2020", title: "Renewable Energy", description: "Ventured into wind and solar energy infrastructure, partnering with leading renewable energy companies" },
    { year: "2025", title: "ANVM Established", description: "ANVM Power Infra Pvt. Ltd. formally incorporated, building on 20 years of Mangalagouri legacy" },
  ];

  const values = [
    {
      title: "Excellence",
      description: "Delivering highest quality in every project with precision and attention to detail",
    },
    {
      title: "Safety",
      description: "Prioritizing safety standards and compliance in all operations",
    },
    {
      title: "Innovation",
      description: "Embracing modern technologies and sustainable solutions",
    },
    {
      title: "Reliability",
      description: "Building long-term partnerships through consistent performance",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-8 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-8">
            {/* Text Content */}
            <div className="flex-1">
              <h1 className="text-xl md:text-2xl font-bold mb-2 whitespace-nowrap">About ANVM Power Infra Pvt. Ltd.</h1>
              <p className="text-sm text-white/80 max-w-2xl">
                Established in 2025 with a vision for excellence in electrical and power infrastructure
              </p>
            </div>
            {/* Logo - right side, blended */}
            <div className="hidden md:flex flex-shrink-0 items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/anvm-logo-transparent_6c0a8415.png"
                alt="ANVM Power Infra"
                className="h-28 w-auto object-contain"
                style={{ filter: 'brightness(0.75) contrast(1.2)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-primary mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                ANVM Power Infra Pvt. Ltd. is a dynamic and forward-thinking company in the electrical and power infrastructure sector, formally established in 2025. The company is built on the strong foundation of Shri Mangalagouri Electricals, which was founded in 2005 and spent two decades building deep expertise in electrical contracting, power transmission, and infrastructure development across Karnataka and Maharashtra.
              </p>
              <p>
                Carrying forward the legacy of Shri Mangalagouri Electricals, ANVM Power Infra Pvt. Ltd. was formally incorporated in 2025 with a vision to deliver high-quality, reliable, and efficient power solutions across Karnataka and beyond. With over 20 years of combined experience behind it, the company brings unmatched technical expertise and a proven track record to every project it undertakes.
              </p>
              <p>
                Since then, the company has successfully executed numerous projects in collaboration with Karnataka Power Transmission Corporation Limited (KPTCL), Karnataka Electricity Board (KEB), and Hubli Electricity Supply Company Limited (HESCOM), along with various private and industrial clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-lg text-foreground/70">
                To consistently provide quality services to our valued clients whilst embracing professional standards and ethics. We are committed to delivering excellence in every project, ensuring safety, reliability, and innovation in all our operations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-lg text-foreground/70">
                To be the market leader and the preferred provider of electrical installation services in Karnataka, Maharashtra, Telangana, and Andhra Pradesh. We aspire to be recognized for our technical expertise, commitment to sustainability, and contribution to India's power infrastructure development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <CheckCircle className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8 mb-12 relative">
                {/* Timeline line */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-12 top-24 w-1 h-16 bg-gradient-to-b from-secondary to-transparent"></div>
                )}

                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {milestone.year}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl font-bold text-primary mb-2">{milestone.title}</h3>
                  <p className="text-foreground/70 text-lg">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Areas of Specialization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">Power Transmission & Substations</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>✓ 11kV to 220kV transmission lines</li>
                <li>✓ Substation construction and commissioning</li>
                <li>✓ VCB yards and metering systems</li>
                <li>✓ SCADA system installation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">Renewable Energy</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>✓ Wind energy projects</li>
                <li>✓ Solar energy infrastructure</li>
                <li>✓ Grid integration solutions</li>
                <li>✓ Transmission connectivity</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">Civil & Infrastructure Works</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>✓ Tower foundations</li>
                <li>✓ Underground cabling</li>
                <li>✓ Right of Way clearance</li>
                <li>✓ Substation civil works</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">Testing & Commissioning</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>✓ Equipment testing</li>
                <li>✓ System commissioning</li>
                <li>✓ Quality assurance</li>
                <li>✓ Compliance verification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
