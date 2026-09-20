import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

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
    <section id="contact" className="py-[80px] bg-canvas relative overflow-hidden border-t border-hairline">
      <div className="container mx-auto px-6 relative max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-semibold text-display-md text-ink mb-2">
            Let's Start a Conversation
          </h2>
          <p className="font-display font-normal text-[17px] text-ink/70 max-w-2xl mx-auto">
            Ready to partner with India's leading granite exporter? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 bg-canvas rounded-lg border border-hairline transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-canvas-parchment flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-ink" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-ink mb-1">{info.label}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-primary hover:underline text-[17px]">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-ink text-[17px]">{info.value}</p>
                    )}
                    {info.subtext && (
                      <p className="text-[14px] text-ink-muted-80 mt-1">{info.subtext}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6 bg-canvas-parchment p-8 md:p-10 rounded-lg border border-hairline">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-full border-hairline focus:border-primary-focus bg-canvas px-6"
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
                    className="h-12 rounded-full border-hairline focus:border-primary-focus bg-canvas px-6"
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
                    className="h-12 rounded-full border-hairline focus:border-primary-focus bg-canvas px-6"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12 rounded-full border-hairline focus:border-primary-focus bg-canvas px-6"
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
                  className="rounded-[24px] border-hairline focus:border-primary-focus bg-canvas px-6 py-4 resize-none"
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="h-12 px-8 bg-primary hover:bg-primary-focus text-white font-normal text-[17px] rounded-full transition-transform active:scale-95 shadow-none border-0"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
