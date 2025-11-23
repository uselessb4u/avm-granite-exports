import { useState } from "react";
import { Play, Video, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import Video1 from "@/assets/videos/Granite_Video_1.mp4";
import Video2 from "@/assets/videos/Granite_Video_2.mp4";

// Using a placeholder for the 3rd video since we only have 2, or we can just show 2.
// Let's show 2 for now to be accurate to the assets provided.

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: "Quarry Operations",
      description: "See our advanced quarrying process",
      thumbnail: "https://images.unsplash.com/photo-1621950516490-2e3fc6be9a13?w=800&q=80&auto=format&fit=crop", // Keeping unsplash thumbnail for now as we don't have video thumbnails
      videoUrl: Video1,
    },
    {
      id: 2,
      title: "Processing Facility",
      description: "State-of-the-art processing",
      thumbnail: "https://images.unsplash.com/photo-1590394315085-a3f6f801ce89?w=800&q=80&auto=format&fit=crop",
      videoUrl: Video2,
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-card border border-border hover:border-electric-blue/50 transition-all duration-500 hover:shadow-strong animate-scale-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedVideo(video.videoUrl)}
            >
              {/* Use video tag as thumbnail if possible, or fallback to image */}
              <video
                src={video.videoUrl}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                muted
                loop
                playsInline
                onMouseOver={(e) => e.currentTarget.play()}
                onMouseOut={(e) => e.currentTarget.pause()}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent group-hover:from-charcoal/90 group-hover:via-charcoal/50 transition-all duration-300 pointer-events-none"></div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-electric-blue flex items-center justify-center group-hover:scale-110 group-hover:shadow-neon transition-all duration-300">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
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

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-6xl p-0 bg-black border-0 overflow-hidden">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-50 text-white/70 hover:text-white transition-colors bg-black/50 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedVideo && (
              <video
                src={selectedVideo}
                className="w-full h-auto max-h-[80vh]"
                controls
                autoPlay
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default VideoShowcase;
