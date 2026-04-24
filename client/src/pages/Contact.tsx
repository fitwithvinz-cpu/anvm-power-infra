import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formPayload = new FormData();
      formPayload.append("access_key", "1947d24d-656e-4ab5-b8f5-b3b243fc17af");
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone || "");
      formPayload.append("company", formData.company || "");
      formPayload.append("subject", formData.subject);
      formPayload.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent! We will get back to you soon.");
        setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again or email us directly.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Page Header — tall, natural, photo-backed */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663363203606/BP3KNNhhLb9JXyhfdCGiaL/lineman-tower_2d800022.jpg"
            alt="Contact us"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,15,35,0.92) 0%, rgba(5,15,35,0.75) 50%, rgba(5,15,35,0.50) 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,15,35,0.6))' }} />
        </div>
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ background: 'rgba(22,163,74,0.2)', border: '1px solid rgba(22,163,74,0.4)', color: '#4ade80' }}>
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Contact Us</h1>
            <p className="text-lg text-white/70 max-w-xl">Reach out to our team for project inquiries, partnerships, and business opportunities across India</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" style={{ background: 'linear-gradient(160deg, #f0f7f4 0%, #e8f5e9 50%, #e3f2fd 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <AnimatedSection className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>

              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Address</h3>
                    <p className="text-foreground/70">
                      SF-09, Shriya Riddhi Siddhi Commercial Complex,<br />
                      R N Shetty Road, Akshay Park,<br />
                      Hubli-580030, Karnataka
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Phone</h3>
                    <a href="tel:+918951193777" className="text-foreground/70 hover:text-secondary transition-colors">
                      +91 8951193777
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Email</h3>
                    <a href="mailto:anvmpowerinfrapvtltd@gmail.com" className="text-foreground/70 hover:text-secondary transition-colors break-all">
                      anvmpowerinfrapvtltd@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Business Hours</h3>
                    <p className="text-foreground/70">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-2" delay={200}>
              <div className="bg-white/90 border border-green-100 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="Power Transmission">Power Transmission Inquiry</option>
                      <option value="Renewable Energy">Renewable Energy Project</option>
                      <option value="Substation">Substation Construction</option>
                      <option value="General">General Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #e3f2fd 50%, #f0f7f4 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-primary mb-3">Our Location</h2>
            <p className="text-foreground/70 text-lg">
              SF-09, Shriya Riddhi Siddhi Commercial Complex, R N Shetty Road, Hubli-580030, Karnataka
            </p>
          </div>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.457782509!2d75.13798!3d15.35184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5c5c5c5c5c5c5%3A0x0!2sANVM%20Power%20Infra%20Hubli!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
