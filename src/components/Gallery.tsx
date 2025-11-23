import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { id: 1, title: "Premium Black Granite", category: "Black Granite", span: "lg:col-span-2 lg:row-span-2" },
    { id: 2, title: "Red Granite Block", category: "Red Granite", span: "lg:col-span-1" },
    { id: 3, title: "White Granite", category: "White Granite", span: "lg:col-span-1" },
    { id: 4, title: "Grey Granite", category: "Grey Granite", span: "lg:col-span-1" },
    { id: 5, title: "Multi-Color", category: "Multi-Color", span: "lg:col-span-1" },
    { id: 6, title: "Export Quality", category: "Premium Grade", span: "lg:col-span-2" },
  ];

  return (
    <section id="gallery" className="py-32 bg-neutral-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber/10 border border-amber/20 mb-6">
            <ZoomIn className="w-4 h-4 text-amber" />
            <span className="text-sm font-medium text-amber">Product Gallery</span>
          </div>
          <h2 className="font-display font-bold text-display-md text-foreground mb-6">
            Our Premium <span className="text-amber">Collection</span>
          </h2>
          <div className="w-20 h-1 bg-amber mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our finest granite rough blocks, sourced from Tamil Nadu's premium quarries
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-card border border-border hover:border-amber/50 transition-all duration-500 hover:shadow-strong animate-scale-in ${image.span}`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                aspectRatio: image.span.includes('span-2') ? '16/9' : '1/1'
              }}
              onClick={() => setSelectedImage(`https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80&auto=format&fit=crop&id=${image.id}`)}
            >
              <img
                src={`https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80&auto=format&fit=crop&id=${image.id}`}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-medium text-amber mb-2">{image.category}</span>
                <h3 className="font-display font-semibold text-xl md:text-2xl mb-2">
                  {image.title}
                </h3>
                <div className="w-12 h-1 bg-electric-blue"></div>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <ZoomIn className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl p-0 bg-transparent border-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-primary-foreground hover:text-electric-blue transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
