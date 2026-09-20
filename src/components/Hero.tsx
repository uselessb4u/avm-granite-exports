import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-surface-tile-1 text-white py-[80px] flex items-center justify-center min-h-[90vh]">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        {/* Main heading */}
        <h1 className="font-display font-semibold text-display-xl tracking-tight mb-4">
          Premium Granite.
          <br />
          Unmatched Quality.
        </h1>

        {/* Subheading */}
        <p className="font-display font-normal text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-snug">
          India's fastest-growing exporter of world-class rough blocks. Delivering consistency and trust globally.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            onClick={() => scrollToSection("gallery")}
            className="bg-primary hover:bg-primary-focus text-white font-normal text-[17px] px-6 py-6 rounded-full transition-transform active:scale-95 shadow-none border-0"
          >
            Explore Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="bg-transparent hover:bg-transparent border border-white/20 text-white hover:text-white font-normal text-[17px] px-6 py-6 rounded-full transition-transform active:scale-95"
          >
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto pt-8 border-t border-white/10 text-white">
          <div>
            <div className="text-4xl font-display font-semibold mb-1">100+</div>
            <div className="text-[17px] text-white/60">Global Clients</div>
          </div>
          <div>
            <div className="text-4xl font-display font-semibold mb-1">25+</div>
            <div className="text-[17px] text-white/60">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-display font-semibold mb-1">A+</div>
            <div className="text-[17px] text-white/60">Premium Quality</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
