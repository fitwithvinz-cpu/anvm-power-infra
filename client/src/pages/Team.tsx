import { Award, Briefcase, Users } from "lucide-react";

const founders = [
  {
    name: "B. Mahendra",
    role: "Founder & Managing Director",
    bio: "B. Mahendra, an experienced electrical engineer with 20+ years in the power infrastructure sector, founded ANVM Power Infra Pvt. Ltd. with a vision to deliver world-class electrical solutions. His technical expertise and strategic leadership have been instrumental in establishing the company as a trusted partner for major power utilities and renewable energy projects across Karnataka.",
    experience: "20+ Years",
    expertise: ["Power Transmission", "Substation Design", "Project Management", "Renewable Energy"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/mahendra-anvm-power-infra-founder.webp"
  },
  {
    name: "Anand Kumar Nagpal",
    role: "Board of Director",
    bio: "Mr. Anand Kumar Nagpal, a B.Com graduate, serves as a Board of Director at ANVM Power Infra Pvt. Ltd. He contributes to the company's growth with his leadership, business management, and operational expertise in the power infrastructure and renewable energy sector.",
    experience: "15+ Years",
    expertise: ["Business Strategy", "Operations", "Financial Management", "Infrastructure"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/anand-kumar-nagpal-anvm.webp"
  }
];

const teamRoles = [
  { count: "50+", role: "Engineers", description: "Qualified electrical and civil engineers" },
  { count: "11", role: "Major Clients", description: "Leading power utilities and companies" },
  { count: "20+", role: "Years", description: "Industry experience and expertise" },
  { count: "150+", role: "Projects", description: "Successfully completed projects" }
];

export default function Team() {
  return (
    <div className="w-full">
      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-b from-background via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Leadership Team</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Meet the visionary leaders driving ANVM Power Infra's mission to power India's green future
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative h-96 overflow-hidden bg-gradient-to-b from-primary/10 to-secondary/10">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-primary mb-1">{founder.name}</h3>
                  <p className="text-lg text-secondary font-semibold mb-4">{founder.role}</p>

                  {/* Bio */}
                  <p className="text-foreground/70 mb-6 leading-relaxed text-sm">{founder.bio}</p>

                  {/* Details */}
                  <div className="grid grid-cols-1 gap-4 mb-6 pb-6 border-b border-border">
                    <div className="flex items-start gap-2">
                      <Briefcase size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-foreground/50">Experience</p>
                        <p className="font-semibold text-foreground text-sm">{founder.experience}</p>
                      </div>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wide">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((exp, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/20"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #e3f2fd 50%, #f0f7f4 100%)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Team Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamRoles.map((team, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-border text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl font-bold text-secondary mb-2">{team.count}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{team.role}</h3>
                <p className="text-foreground/70">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose ANVM?</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our team brings decades of combined experience in power infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl border border-border hover:shadow-lg transition-all">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Expert Team</h3>
              <p className="text-foreground/70">
                50+ qualified engineers with specialized expertise in power transmission, renewable energy, and infrastructure development.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-border hover:shadow-lg transition-all">
              <Award className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Proven Track Record</h3>
              <p className="text-foreground/70">
                150+ successfully completed projects for 11 major clients including KPTCL, HESCOM, BESCOM, and other leading utilities.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-border hover:shadow-lg transition-all">
              <Briefcase className="w-12 h-12 text-tertiary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">20+ Years Experience</h3>
              <p className="text-foreground/70">
                Two decades of excellence in electrical infrastructure, power transmission, and renewable energy solutions across Karnataka.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
