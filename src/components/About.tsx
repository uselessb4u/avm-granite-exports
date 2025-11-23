import { Award, Globe, Users, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Globe, label: "Global Reach", value: "Worldwide" },
    { icon: Award, label: "Years in Industry", value: "25+" },
    { icon: TrendingUp, label: "Quality Standard", value: "Premium" },
    { icon: Users, label: "Customer Focus", value: "B2B" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
              About <span className="text-accent">AVM EXPORTS</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                <span className="font-semibold text-foreground">AVM EXPORTS</span>, established in 2018, stands today as one of India's fastest-growing and most trusted exporters of premium granite rough blocks. Backed by an impressive <span className="font-semibold text-accent">25 years of hands-on industry expertise</span>, we bring together deep knowledge, superior craftsmanship, and world-class service to meet the evolving needs of international buyers.
              </p>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Headquartered in <span className="font-semibold text-foreground">Tamil Nadu, India's hub for high-quality granite</span>, AVM EXPORTS is committed to delivering unmatched quality, consistency, and value. Our products are sourced with precision, processed with care, and shipped with a focus on reliability—ensuring that our customers receive only the finest granite blocks.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Guided by the strong leadership of <span className="font-semibold text-foreground">Mr. A. Asai Thambi</span>, our Managing Partner, we have built a reputation for integrity, excellence, and customer-first service. His visionary approach continues to drive our growth across global markets.
              </p>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                At AVM EXPORTS, we don't just export granite — we deliver <span className="font-semibold text-accent">trust, durability, and long-term partnerships</span>. As we expand our global presence, we remain dedicated to offering exceptional products that elevate every project they become a part of.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-elegant group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-playfair font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-inter">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
