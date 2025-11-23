import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images - client can replace with actual granite photos
  const images = [
    { id: 1, title: "Premium Black Granite Block", category: "Black Granite" },
    { id: 2, title: "Red Granite Rough Block", category: "Red Granite" },
    { id: 3, title: "White Granite Block", category: "White Granite" },
    { id: 4, title: "Grey Granite Block", category: "Grey Granite" },
    { id: 5, title: "Multi-Color Granite", category: "Multi-Color" },
    { id: 6, title: "Export Quality Block", category: "Premium Grade" },
  ];

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our Premium <span className="text-accent">Products</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Explore our collection of premium granite rough blocks, sourced from the finest quarries in Tamil Nadu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-strong animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(`https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80&auto=format&fit=crop&id=${image.id}`)}
            >
              <img
                src={`https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80&auto=format&fit=crop&id=${image.id}`}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-granite-dark/90 via-granite-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="font-playfair font-semibold text-xl mb-1">
                    {image.title}
                  </h3>
                  <p className="font-inter text-sm text-primary-foreground/80">
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-primary-foreground hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
