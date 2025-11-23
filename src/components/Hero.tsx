import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-granite-dark via-granite-medium to-granite-dark">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCAzLjk5OC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTIwYzAtMi4yMSAxLjc5LTQgMy45OTgtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptLTIwIDBjMC0yLjIxIDEuNzktNCAzLjk5OC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDIwYzAtMi4yMSAxLjc5LTQgMy45OTgtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-block">
            <span className="text-accent font-inter font-semibold tracking-wider text-sm uppercase border border-accent/30 px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm">
              Est. 2018 • 25 Years of Expertise
            </span>
          </div>
          
          <h1 className="font-playfair font-bold text-5xl md:text-7xl text-primary-foreground leading-tight">
            Premium Granite Rough Blocks
            <span className="block text-accent mt-2">Crafted for the World</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto font-inter font-light leading-relaxed">
            India's fastest-growing exporter of premium granite rough blocks. 
            Delivering unmatched quality, consistency, and trust to international buyers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("gallery")}
              className="bg-accent hover:bg-accent/90 text-primary-foreground font-inter font-semibold text-lg px-8 py-6 shadow-strong group"
            >
              View Our Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-inter font-semibold text-lg px-8 py-6"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
