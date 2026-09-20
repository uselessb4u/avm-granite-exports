import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { ZoomIn } from "lucide-react";

import Granite1 from "@/assets/photos/Granite1.jpg";
import Granite2 from "@/assets/photos/Granite2.jpg";
import Granite3 from "@/assets/photos/Granite3.jpg";
import Granite4 from "@/assets/photos/Granite4.jpg";
import Granite5 from "@/assets/photos/Granite5.jpg";
import Granite6 from "@/assets/photos/Granite6.jpg";
import Granite7 from "@/assets/photos/Granite7.jpg";
import Granite8 from "@/assets/photos/Granite8.jpg";
import Granite9 from "@/assets/photos/Granite9.jpg";
import Granite10 from "@/assets/photos/Granite10.jpg";
import Granite11 from "@/assets/photos/Granite11.jpg";
import Granite12 from "@/assets/photos/Granite12.jpg";
import Granite13 from "@/assets/photos/Granite13.jpeg";
import Granite14 from "@/assets/photos/Granite14.jpeg";
import Granite15 from "@/assets/photos/Granite15.jpeg";
import Granite16 from "@/assets/photos/Granite16.jpeg";
import Granite17 from "@/assets/photos/Granite17.jpeg";
import Granite18 from "@/assets/photos/Granite18.jpeg";
import Granite19 from "@/assets/photos/Granite19.jpeg";
import Granite20 from "@/assets/photos/Granite20.jpeg";
import Granite21 from "@/assets/photos/Granite21.jpeg";
import Granite22 from "@/assets/photos/Granite22.jpeg";
import Granite23 from "@/assets/photos/Granite23.jpeg";
import Granite24 from "@/assets/photos/Granite24.jpeg";
import Granite25 from "@/assets/photos/Granite25.jpeg";
import Granite26 from "@/assets/photos/Granite26.jpeg";
import Granite27 from "@/assets/photos/Granite27.jpeg";
import Granite28 from "@/assets/photos/Granite28.jpeg";
import Granite29 from "@/assets/photos/Granite29.jpeg";
import Granite30 from "@/assets/photos/Granite30.jpeg";
import Granite31 from "@/assets/photos/Granite31.JPG";
import Granite32 from "@/assets/photos/Granite32.JPG";
import Granite33 from "@/assets/photos/Granite33.JPG";
import Granite34 from "@/assets/photos/Granite34.jpg";

/*
 * react-photo-album requires width & height for each photo so it can
 * calculate the justified row layout. Since we don't know the exact
 * dimensions at build time, we use reasonable default aspect ratios.
 * The library uses these for layout math only — images still render
 * responsively via object-fit.
 */
const photos = [
  { src: Granite1, width: 1600, height: 1200 },
  { src: Granite2, width: 1600, height: 1200 },
  { src: Granite3, width: 1600, height: 1200 },
  { src: Granite4, width: 1200, height: 1600 },
  { src: Granite5, width: 1600, height: 1200 },
  { src: Granite6, width: 1600, height: 1200 },
  { src: Granite7, width: 1600, height: 1200 },
  { src: Granite8, width: 1200, height: 1600 },
  { src: Granite9, width: 1600, height: 1200 },
  { src: Granite10, width: 1600, height: 1200 },
  { src: Granite11, width: 1600, height: 1200 },
  { src: Granite12, width: 1600, height: 1200 },
  { src: Granite13, width: 1200, height: 1600 },
  { src: Granite14, width: 1200, height: 1600 },
  { src: Granite15, width: 1200, height: 1600 },
  { src: Granite16, width: 1200, height: 1600 },
  { src: Granite17, width: 1200, height: 1600 },
  { src: Granite18, width: 1200, height: 1600 },
  { src: Granite19, width: 1200, height: 1600 },
  { src: Granite20, width: 1200, height: 1600 },
  { src: Granite21, width: 1200, height: 1600 },
  { src: Granite22, width: 1200, height: 1600 },
  { src: Granite23, width: 1200, height: 1600 },
  { src: Granite24, width: 1200, height: 1600 },
  { src: Granite25, width: 1200, height: 1600 },
  { src: Granite26, width: 1200, height: 1600 },
  { src: Granite27, width: 1200, height: 1600 },
  { src: Granite28, width: 1200, height: 1600 },
  { src: Granite29, width: 1200, height: 1600 },
  { src: Granite30, width: 1200, height: 1600 },
  { src: Granite31, width: 1600, height: 1200 },
  { src: Granite32, width: 1600, height: 1200 },
  { src: Granite33, width: 1600, height: 1200 },
  { src: Granite34, width: 1600, height: 1200 },
];

const slides = photos.map(({ src }) => ({ src }));

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="py-[80px] bg-canvas-parchment relative overflow-hidden">
      <div className="container mx-auto px-6 relative max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-semibold text-display-md text-ink mb-2">
            Our Premium Collection
          </h2>
          <p className="font-display font-normal text-[17px] text-ink/70 max-w-2xl mx-auto">
            Explore our finest granite rough blocks, sourced from Tamil Nadu's premium quarries. Click any image to view in full screen.
          </p>
        </div>

        {/* Photo Album Grid */}
        <div className="gallery-wrapper">
          <RowsPhotoAlbum
            photos={photos}
            targetRowHeight={280}
            rowConstraints={{ maxPhotos: 5 }}
            spacing={8}
            onClick={({ index: i }) => setIndex(i)}
            componentsProps={{
              button: {
                style: {
                  borderRadius: "0px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                },
              },
              image: {
                loading: "lazy",
                style: {
                  borderRadius: "0px",
                  transition: "transform 0.5s ease",
                },
              },
            }}
          />
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom, Counter, Thumbnails]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        thumbnails={{
          position: "bottom",
          width: 80,
          height: 60,
          gap: 6,
          borderRadius: 0,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
        animation={{ fade: 300 }}
      />
    </section>
  );
};

export default Gallery;
