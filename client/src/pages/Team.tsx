import { Award, Briefcase, Calendar } from "lucide-react";

export default function Team() {
  const founders = [
    {
      name: "B. Mahendra",
      role: "Founder & Managing Director",
      birthDate: "January 23, 1986",
      qualifications: ["ITI Certification", "Diploma in Electrical Engineering"],
      experience: "20+ years in electrical contracting and power infrastructure",
      expertise: [
        "Power transmission infrastructure",
        "KPTCL project execution",
        "Renewable energy projects",
        "Wind energy infrastructure",
        "Substation construction",
        "Project management",
      ],
      bio: "B. Mahendra is a seasoned electrical contractor with over two decades of hands-on experience in the power and energy sector. Since beginning his professional journey in 2003, he has built a strong reputation for delivering reliable and high-quality electrical solutions across a wide range of projects. His work spans power transmission, renewable energy initiatives, and has demonstrated deep expertise through numerous successful projects with KPTCL.",
      photo: "[Placeholder for founder photo - to be provided]",
    },
    {
      name: "M. Rajalaxmi",
      role: "Co-founder",
      birthDate: "March 9, 1986",
      qualifications: ["Bachelor of Arts (BA)", "Bachelor of Laws (LL.B)"],
      experience: "Legal and business governance expertise",
      expertise: [
        "Legal compliance",
        "Business governance",
        "Strategic planning",
        "Organizational management",
        "Regulatory compliance",
        "Ethical practices",
      ],
      bio: "M. Rajalaxmi is a dedicated professional and co-founder, bringing strong legal knowledge and organizational insight to the company. With her academic background in law, she plays an important role in ensuring compliance, managing legal aspects, and supporting the strategic growth of the organization. Her attention to detail and commitment to ethical practices contribute significantly to the company's strong operational framework.",
      photo: "[Placeholder for co-founder photo - to be provided]",
    },
  ];

  const teamRoles = [
    { role: "Site Managers", count: "4+", description: "Experienced project site managers" },
    { role: "Engineers", count: "8+", description: "Qualified electrical and civil engineers" },
    { role: "Technicians", count: "15+", description: "Skilled technical professionals" },
    { role: "Support Staff", count: "20+", description: "Administrative and operational support" },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-white/90">
            Meet the experienced professionals behind ANVM Power Infra Pvt. Ltd.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all">
                {/* Photo Placeholder */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-b border-border">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">{founder.name.charAt(0)}</span>
                    </div>
                    <p className="text-foreground/60 text-sm">{founder.photo}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-primary mb-2">{founder.name}</h3>
                  <p className="text-xl text-secondary font-semibold mb-4">{founder.role}</p>

                  {/* Bio */}
                  <p className="text-foreground/70 mb-6 leading-relaxed">{founder.bio}</p>

                  {/* Details */}
                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    <div className="flex items-start gap-3">
                      <Calendar size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-foreground/60">Date of Birth</p>
                        <p className="font-semibold text-foreground">{founder.birthDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-foreground/60">Qualifications</p>
                        <div className="space-y-1">
                          {founder.qualifications.map((qual, idx) => (
                            <p key={idx} className="font-semibold text-foreground">
                              {qual}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-foreground/60">Experience</p>
                        <p className="font-semibold text-foreground">{founder.experience}</p>
                      </div>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h4 className="font-bold text-primary mb-4">Areas of Expertise:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {founder.expertise.map((exp, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-secondary font-bold">•</span>
                          <span className="text-foreground/70 text-sm">{exp}</span>
                        </div>
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
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Team Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamRoles.map((team, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-secondary mb-2">{team.count}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{team.role}</h3>
                <p className="text-foreground/70">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">What We Value</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Technical Excellence",
                description: "Continuous learning and mastery of electrical engineering principles",
              },
              {
                title: "Safety Culture",
                description: "Unwavering commitment to workplace safety and regulatory compliance",
              },
              {
                title: "Team Collaboration",
                description: "Working together towards shared goals with mutual respect and support",
              },
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Join Our Team</h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            We are always looking for talented and dedicated professionals to join our growing team. If you are passionate about electrical infrastructure and power solutions, we would love to hear from you.
          </p>
          <a
            href="mailto:anvmpowerinfrapvtltd@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-secondary px-8 py-4 rounded-lg font-semibold transition-all"
          >
            Send Your Resume
          </a>
        </div>
      </section>
    </div>
  );
}
