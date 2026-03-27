import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const submitContact = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("Message sent! We will get back to you soon.");
      setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
    },
    onError: (err) => {
      toast.error("Failed to send message. Please try again or email us directly.");
      console.error(err);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      company: formData.company || undefined,
      subject: formData.subject,
      message: formData.message,
    });
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90">
            Get in touch with our team for your electrical infrastructure needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
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
                    <a href="tel:+918971162228" className="text-foreground/70 hover:text-secondary transition-colors">
                      +91 8971162228
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
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-border rounded-lg p-8">
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
                    disabled={submitContact.isPending}
                    className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    {submitContact.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">Our Location</h2>
          <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border border-border flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-primary mx-auto mb-4" />
              <p className="text-foreground/70 font-semibold">Hubli, Karnataka, India</p>
              <p className="text-foreground/60 text-sm mt-2">
                SF-09, Shriya Riddhi Siddhi Commercial Complex, R N Shetty Road, Hubli-580030
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
