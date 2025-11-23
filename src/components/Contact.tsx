import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

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

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Tamil Nadu, India",
      subtext: "India's Granite Hub",
    },
    {
      icon: Mail,
      label: "Email",
      value: "avmexports1@gmail.com",
      link: "mailto:avmexports1@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXX XXXXXX",
      link: "tel:+91XXXXXXXXXX",
    },
  ];

  return (
    <section id="contact" className="py-32 bg-neutral-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-electric-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber/10 border border-amber/20 mb-6">
              <MessageSquare className="w-4 h-4 text-amber" />
              <span className="text-sm font-medium text-amber">Get In Touch</span>
            </div>
            <h2 className="font-display font-bold text-display-md text-foreground mb-6">
              Let's Start a <span className="text-amber">Conversation</span>
            </h2>
            <div className="w-20 h-1 bg-amber mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to partner with India's leading granite exporter? We're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Information Cards */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-2xl border border-border hover:border-electric-blue/30 transition-all duration-300 hover:shadow-elegant group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-blue/20 transition-colors">
                      <info.icon className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{info.label}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-electric-blue hover:underline">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                      {info.subtext && (
                        <p className="text-sm text-muted-foreground mt-1">{info.subtext}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Leadership Card */}
              <div className="p-6 bg-gradient-to-br from-electric-blue to-electric-dark rounded-2xl text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMSAxLjc5LTQgMy45OTgtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMC0yMGMwLTIuMjEgMS43OS00IDMuOTk4LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bS0yMCAwYzAtMi4yMSAxLjc5LTQgMy45OTgtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyMGMwLTIuMjEgMS43OS00IDMuOTk4LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
                <div className="relative z-10">
                  <h4 className="font-display font-semibold text-lg mb-2">
                    Leadership
                  </h4>
                  <p className="text-primary-foreground/90">
                    <span className="font-semibold">Mr. A. Asai Thambi</span>
                    <br />
                    Managing Partner
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 md:p-10 rounded-3xl border border-border shadow-elegant">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-border focus:border-electric-blue"
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
                      className="h-12 rounded-xl border-border focus:border-electric-blue"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12 rounded-xl border-border focus:border-electric-blue"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-12 rounded-xl border-border focus:border-electric-blue"
                    />
                  </div>
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="rounded-xl border-border focus:border-electric-blue resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 bg-electric-blue hover:bg-electric-dark text-primary-foreground font-semibold text-lg rounded-full shadow-neon hover:shadow-glow transition-all duration-300 group"
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
