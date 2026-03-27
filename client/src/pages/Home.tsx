import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Zap, Wind, Hammer, Shield } from "lucide-react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const services = [
    {
      icon: Zap,
      title: "Power Transmission",
      description: "High-voltage transmission lines from 33kV to 220kV with precision engineering",
    },
    {
      icon: Wind,
      title: "Renewable Energy",
      description: "Wind and solar energy infrastructure with complete integration solutions",
    },
    {
      icon: Hammer,
      title: "Substation Works",
      description: "Complete substation design, construction, and commissioning services",
    },
    {
      icon: Shield,
      title: "Civil Works",
      description: "Foundation, tower, and infrastructure construction with safety compliance",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/hero-power-transmission-fxmPpQAERVJbTMB3qp5bTg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Powering India's Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Two decades of excellence in electrical infrastructure, power transmission, and renewable energy solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Get Started
                  <ArrowRight size={20} />
              </Link>
              <Link href="/projects" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all border border-white/30">
                  View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
              <p className="text-foreground/70">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">100+</div>
              <p className="text-foreground/70">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">3</div>
              <p className="text-foreground/70">Major Corporations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-foreground/70">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Core Services</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive electrical infrastructure solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-border rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Building Tomorrow's Power Infrastructure
              </h2>
              <p className="text-lg text-foreground/70 mb-4">
                Since 2005, ANVM Power Infra Pvt. Ltd. has been at the forefront of electrical infrastructure development in India. With deep expertise in power transmission, renewable energy, and substation construction, we deliver solutions that power the nation.
              </p>
              <p className="text-lg text-foreground/70 mb-8">
                Our team of experienced engineers and technicians work with leading corporations including KPTCL, KEB, and HESCOM to deliver projects with precision, safety, and excellence.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors">
                  Learn More About Us
                  <ArrowRight size={20} />
              </Link>
            </div>
            <div
              className="h-96 rounded-lg overflow-hidden shadow-xl"
              style={{
                backgroundImage:
                  "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/hero-renewable-energy-nAJU8iVuGG6WKFNTvFLUef.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Power Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your electrical infrastructure needs
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Get in Touch
              <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
