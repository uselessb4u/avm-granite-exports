import { Award, Globe, Users, TrendingUp, Sparkles } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Globe, label: "Global Reach", value: "Worldwide", color: "text-electric-blue" },
    { icon: Award, label: "Experience", value: "25+ Years", color: "text-amber" },
    { icon: TrendingUp, label: "Quality", value: "Premium", color: "text-electric-blue" },
    { icon: Users, label: "Focus", value: "B2B", color: "text-amber" },
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-electric-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/20 mb-6">
              <Sparkles className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-medium text-electric-blue">Our Story</span>
            </div>
            <h2 className="font-display font-bold text-display-md text-foreground mb-6">
              About <span className="text-electric-blue">AVM EXPORTS</span>
            </h2>
            <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
          </div>

          {/* Content grid - Asymmetric bento layout */}
          <div className="grid lg:grid-cols-12 gap-6 mb-16">
            {/* Main content - larger card */}
            <div className="lg:col-span-7 bg-card rounded-3xl p-8 md:p-12 border border-border hover:border-electric-blue/30 transition-all duration-500 shadow-elegant hover:shadow-strong group">
              <div className="space-y-6">
                <h3 className="font-display font-semibold text-2xl text-foreground group-hover:text-electric-blue transition-colors">
                  Established Excellence Since 2018
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">AVM EXPORTS</span> stands as one of India's fastest-growing and most trusted exporters of premium granite rough blocks. Backed by <span className="font-semibold text-electric-blue">25 years of hands-on industry expertise</span>, we deliver deep knowledge, superior craftsmanship, and world-class service to international buyers.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Headquartered in <span className="font-semibold text-foreground">Tamil Nadu—India's hub for high-quality granite</span>—we're committed to delivering unmatched quality, consistency, and value. Every block is sourced with precision, processed with care, and shipped with reliability.
                </p>
              </div>
            </div>

            {/* Leadership card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-electric-blue to-electric-dark rounded-3xl p-8 md:p-12 text-primary-foreground relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMSAxLjc5LTQgMy45OTgtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMC0yMGMwLTIuMjEgMS43OS00IDMuOTk4LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bS0yMCAwYzAtMi4yMSAxLjc5LTQgMy45OTgtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyMGMwLTIuMjEgMS43OS00IDMuOTk4LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative z-10 space-y-6">
                <Award className="w-12 h-12 mb-4" />
                <h3 className="font-display font-semibold text-2xl">
                  Visionary Leadership
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Guided by <span className="font-semibold">Mr. A. Asai Thambi</span>, Managing Partner, we've built a reputation for integrity, excellence, and customer-first service across global markets.
                </p>
              </div>
            </div>
          </div>

          {/* Mission card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border mb-16 relative overflow-hidden group hover:border-amber/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl group-hover:bg-amber/10 transition-all duration-500"></div>
            <div className="relative z-10 max-w-4xl">
              <h3 className="font-display font-semibold text-2xl text-foreground mb-4 group-hover:text-amber transition-colors">
                More Than Granite—We Deliver Trust
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At AVM EXPORTS, we don't just export granite—we deliver <span className="font-semibold text-amber">trust, durability, and long-term partnerships</span>. As we expand our global presence, we remain dedicated to offering exceptional products that elevate every project.
              </p>
            </div>
          </div>

          {/* Stats bento grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card rounded-2xl border border-border hover:border-electric-blue/30 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-electric-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div className="text-3xl font-display font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
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
