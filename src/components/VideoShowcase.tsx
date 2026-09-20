import { useState } from "react";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import Video1 from "@/assets/videos/Granite_Video_1.mp4";
import Video2 from "@/assets/videos/Granite_Video_2.mp4";
import Video3 from "@/assets/videos/Granite_Video_3.MOV";

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: "Quarry Operations",
      description: "See our advanced quarrying process",
      videoUrl: Video1,
    },
    {
      id: 2,
      title: "Processing Facility",
      description: "State-of-the-art processing",
      videoUrl: Video2,
    },
    {
      id: 3,
      title: "Premium Granite",
      description: "Exceptional quality blocks",
      videoUrl: Video3,
    },
  ];

  return (
    <section id="videos" className="py-[80px] bg-surface-tile-1 relative overflow-hidden">
      <div className="container mx-auto px-6 relative max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-semibold text-display-md text-white mb-2">
            See Our Work In Action
          </h2>
          <p className="font-display font-normal text-[17px] text-white/70 max-w-2xl mx-auto">
            Watch our process from quarry to export-ready granite blocks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer bg-surface-black border border-white/10 hover:border-white/20 transition-all duration-300"
              onClick={() => setSelectedVideo(video.videoUrl)}
            >
              <video
                src={video.videoUrl}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                muted
                loop
                playsInline
                onMouseOver={(e) => e.currentTarget.play()}
                onMouseOut={(e) => e.currentTarget.pause()}
              />

              {/* Play button (Apple circular control style) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[44px] h-[44px] rounded-full bg-surface-chip-translucent flex items-center justify-center group-hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
                  <Play className="w-5 h-5 text-ink ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-display font-semibold text-[17px] mb-1">
                  {video.title}
                </h3>
                <p className="text-[14px] text-white/70">
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
