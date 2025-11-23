import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
              Get in <span className="text-accent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Ready to partner with India's leading granite exporter? Contact us today for quotes and inquiries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="font-playfair font-semibold text-2xl text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">Tamil Nadu, India</p>
                      <p className="text-sm text-muted-foreground">India's Granite Hub</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground mb-1">Email</h4>
                      <a href="mailto:info@avmexports.com" className="text-accent hover:underline">
                        info@avmexports.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground mb-1">Phone</h4>
                      <a href="tel:+91XXXXXXXXXX" className="text-accent hover:underline">
                        +91 XXXX XXXXXX
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <h4 className="font-playfair font-semibold text-xl text-foreground mb-3">
                  Leadership
                </h4>
                <p className="text-muted-foreground font-inter">
                  <span className="font-semibold text-foreground">Mr. A. Asai Thambi</span>
                  <br />
                  Managing Partner
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border shadow-elegant">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="font-inter"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="font-inter"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="font-inter"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="font-inter"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="font-inter"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-primary-foreground font-inter font-semibold text-lg py-6 group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
