import { Play, Video } from "lucide-react";

const VideoShowcase = () => {
  const videos = [
    {
      id: 1,
      title: "Quarry Operations",
      description: "See our advanced quarrying process",
      thumbnail: "https://images.unsplash.com/photo-1621950516490-2e3fc6be9a13?w=800&q=80&auto=format&fit=crop",
      videoUrl: "#",
    },
    {
      id: 2,
      title: "Processing Facility",
      description: "State-of-the-art processing",
      thumbnail: "https://images.unsplash.com/photo-1590394315085-a3f6f801ce89?w=800&q=80&auto=format&fit=crop",
      videoUrl: "#",
    },
    {
      id: 3,
      title: "Quality Showcase",
      description: "Export-ready granite blocks",
      thumbnail: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80&auto=format&fit=crop",
      videoUrl: "#",
    },
  ];

  return (
    <section id="videos" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-electric-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/20 mb-6">
            <Video className="w-4 h-4 text-electric-blue" />
            <span className="text-sm font-medium text-electric-blue">Video Gallery</span>
          </div>
          <h2 className="font-display font-bold text-display-md text-foreground mb-6">
            See Our Work <span className="text-electric-blue">In Action</span>
          </h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our process from quarry to export-ready granite blocks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-card border border-border hover:border-electric-blue/50 transition-all duration-500 hover:shadow-strong animate-scale-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent group-hover:from-charcoal/90 group-hover:via-charcoal/50 transition-all duration-300"></div>
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-electric-blue flex items-center justify-center group-hover:scale-110 group-hover:shadow-neon transition-all duration-300">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display font-semibold text-xl mb-1">
                  {video.title}
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
