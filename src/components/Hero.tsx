import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-electric-blue/20 via-charcoal to-charcoal"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber/10 via-transparent to-transparent"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-6xl mx-auto text-center space-y-10 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-electric-blue/30 text-primary-foreground">
            <Sparkles className="w-4 h-4 text-electric-blue" />
            <span className="text-sm font-medium">Est. 2018 • 25 Years of Excellence</span>
          </div>
          
          {/* Main heading */}
          <h1 className="font-display font-bold text-display-xl text-primary-foreground leading-none tracking-tight">
            Premium Granite
            <br />
            <span className="bg-gradient-to-r from-electric-blue via-electric-blue to-amber bg-clip-text text-transparent">
              Rough Blocks
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/70 max-w-3xl mx-auto font-light leading-relaxed">
            India's fastest-growing exporter of world-class granite.
            <br />
            Delivering unmatched quality, consistency, and trust globally.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("gallery")}
              className="bg-electric-blue hover:bg-electric-dark text-primary-foreground font-semibold text-lg px-10 py-7 shadow-neon group hover:shadow-glow transition-all duration-300 rounded-full"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary-foreground/20 bg-background/5 backdrop-blur-sm text-primary-foreground hover:bg-background/10 hover:border-electric-blue font-semibold text-lg px-10 py-7 rounded-full"
            >
              Contact Us
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-16 text-primary-foreground/80">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-2">100+</div>
              <div className="text-sm text-primary-foreground/60">Global Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-2">25+</div>
              <div className="text-sm text-primary-foreground/60">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-2">A+</div>
              <div className="text-sm text-primary-foreground/60">Premium Quality</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
