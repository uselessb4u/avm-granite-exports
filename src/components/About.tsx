import { Award, Globe, Users, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Globe, label: "Global Reach", value: "Worldwide" },
    { icon: Award, label: "Experience", value: "25+ Years" },
    { icon: TrendingUp, label: "Quality", value: "Premium" },
    { icon: Users, label: "Focus", value: "B2B" },
  ];

  return (
    <section id="about" className="py-[80px] bg-canvas relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-semibold text-display-md text-ink mb-2">
            About AVM EXPORTS
          </h2>
          <p className="font-display font-normal text-xl md:text-2xl text-ink/70">
            Established Excellence Since 2018.
          </p>
        </div>

        {/* Main content card */}
        <div className="bg-canvas rounded-lg p-8 md:p-12 border border-hairline mb-8">
          <div className="max-w-3xl space-y-6">
            <h3 className="font-display font-semibold text-2xl text-ink">
              India's hub for high-quality granite
            </h3>
            <p className="text-[17px] text-ink leading-relaxed">
              <span className="font-semibold">AVM EXPORTS</span> stands as one of India's fastest-growing and most trusted exporters of premium granite rough blocks. Backed by <span className="font-semibold">25 years of hands-on industry expertise</span>, we deliver deep knowledge, superior craftsmanship, and world-class service to international buyers.
            </p>
            <p className="text-[17px] text-ink leading-relaxed">
              Headquartered in Tamil Nadu, we're committed to delivering unmatched quality, consistency, and value. Every block is sourced with precision, processed with care, and shipped with reliability.
            </p>
          </div>
        </div>

        {/* Grid layout for remaining cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Leadership card */}
          <div className="bg-canvas rounded-lg p-8 md:p-12 border border-hairline">
            <Award className="w-10 h-10 mb-6 text-primary" />
            <h3 className="font-display font-semibold text-2xl text-ink mb-4">
              Visionary Leadership
            </h3>
            <p className="text-[17px] text-ink leading-relaxed">
              Guided by <span className="font-semibold">Mr. A. Asai Thambi</span>, Managing Partner, we've built a reputation for integrity, excellence, and customer-first service across global markets.
            </p>
          </div>

          {/* Mission card */}
          <div className="bg-canvas rounded-lg p-8 md:p-12 border border-hairline">
            <h3 className="font-display font-semibold text-2xl text-ink mb-4">
              More Than Granite—We Deliver Trust
            </h3>
            <p className="text-[17px] text-ink leading-relaxed">
              At AVM EXPORTS, we don't just export granite—we deliver trust, durability, and long-term partnerships. As we expand our global presence, we remain dedicated to offering exceptional products that elevate every project.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-canvas rounded-lg border border-hairline"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-ink" />
              <div className="text-3xl font-display font-semibold text-ink mb-1">
                {stat.value}
              </div>
              <div className="text-[14px] text-ink-muted-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
