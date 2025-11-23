import { Play } from "lucide-react";

const VideoShowcase = () => {
  // Placeholder video - client can replace with actual videos
  const videos = [
    {
      id: 1,
      title: "Quarry Operations",
      thumbnail: "https://images.unsplash.com/photo-1621950516490-2e3fc6be9a13?w=800&q=80&auto=format&fit=crop",
      videoUrl: "#", // Replace with actual video URL
    },
    {
      id: 2,
      title: "Processing Facility",
      thumbnail: "https://images.unsplash.com/photo-1590394315085-a3f6f801ce89?w=800&q=80&auto=format&fit=crop",
      videoUrl: "#", // Replace with actual video URL
    },
    {
      id: 3,
      title: "Export Quality Showcase",
      thumbnail: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80&auto=format&fit=crop",
      videoUrl: "#", // Replace with actual video URL
    },
  ];

  return (
    <section id="videos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
            See Our Work <span className="text-accent">In Action</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Watch our process from quarry to export-ready granite blocks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-strong animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-granite-dark/60 group-hover:bg-granite-dark/40 transition-colors duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl text-primary-foreground">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground font-inter">
            * Video gallery can be updated with your actual quarry and processing videos
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
