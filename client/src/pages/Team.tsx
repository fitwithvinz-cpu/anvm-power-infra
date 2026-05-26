import { Calendar, Award, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SolarScene from "@/components/SolarScene";

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
      photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/b-mahendra_d9651951.png",
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
      {/* Page Header — tall, natural, photo-backed */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/team-engineers_a3e45cd7.jpg"
            alt="Our team of engineers"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,15,35,0.92) 0%, rgba(5,15,35,0.75) 50%, rgba(5,15,35,0.50) 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,15,35,0.6))' }} />
        </div>
        <div className="absolute inset-0 z-[1] overflow-hidden">
          <SolarScene />
        </div>
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ background: 'rgba(22,163,74,0.2)', border: '1px solid rgba(22,163,74,0.4)', color: '#4ade80' }}>
              Leadership
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Our Team</h1>
            <p className="text-lg text-white/70 max-w-xl">Meet the experienced leadership driving ANVM Power Infra Pvt. Ltd. forward with vision and expertise</p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20" style={{ background: 'linear-gradient(160deg, #f0f7f4 0%, #e8f5e9 50%, #e3f2fd 100%)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Leadership Team</h2>
          <div className="flex flex-col gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <AnimatedSection key={index} delay={index * 150}>
              <div
                className="bg-white/90 border border-green-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col md:flex-row"
              >
                {/* Photo Section - only show if photo exists */}
                {founder.photo && (
                  <div className="md:w-72 flex-shrink-0 bg-gradient-to-b from-primary/10 to-secondary/10 flex items-center justify-center p-6">
                    <div className="w-56 h-64 rounded-xl overflow-hidden shadow-md border-4 border-white">
                      <img
                        src={founder.photo}
                        alt={founder.name}
                        className="w-full h-full object-cover object-center"
                        style={{ objectPosition: "center 10%" }}
                      />
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="flex-1 p-8">
                  <h3 className="text-3xl font-bold text-primary mb-1">{founder.name}</h3>
                  <p className="text-lg text-secondary font-semibold mb-4">{founder.role}</p>

                  {/* Bio */}
                  <p className="text-foreground/70 mb-6 leading-relaxed text-sm">{founder.bio}</p>

                  {/* Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                    <div className="flex items-start gap-2">
                      <Calendar size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-foreground/50">Date of Birth</p>
                        <p className="font-semibold text-foreground text-sm">{founder.birthDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-foreground/50">Qualifications</p>
                        {founder.qualifications.map((qual, idx) => (
                          <p key={idx} className="font-semibold text-foreground text-sm">{qual}</p>
                        ))}
                      </div>
                    </div>
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
              </AnimatedSection>
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
              <AnimatedSection key={index} delay={index * 80}>
              <div className="bg-white p-8 rounded-2xl border border-border text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl font-bold text-secondary mb-2">{team.count}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{team.role}</h3>
                <p className="text-foreground/70">{team.description}</p>
              </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20" style={{ background: 'linear-gradient(160deg, #f0f7f4 0%, #e8f5e9 50%, #e3f2fd 100%)' }}>
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
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #e3f2fd 50%, #f0f7f4 100%)' }}>
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
