import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import SlideupImage from "../SlideupImage";

const wideImage = [
  "https://images3.alphacoders.com/641/641193.jpg",
  "https://images7.alphacoders.com/130/1305260.jpeg",
  "https://images5.alphacoders.com/516/516663.jpg",
  "https://images5.alphacoders.com/559/559809.jpg",
  "https://images4.alphacoders.com/641/641191.jpg",
  "https://images3.alphacoders.com/574/574387.jpg",
  "https://images.alphacoders.com/534/534920.jpg",
  "https://images5.alphacoders.com/534/534917.jpg",
  "https://images6.alphacoders.com/526/526238.jpg",
  "https://images2.alphacoders.com/532/532523.jpg",
  "https://images3.alphacoders.com/873/873979.jpg",
  "https://images5.alphacoders.com/588/588375.jpg",
  "https://images2.alphacoders.com/559/559807.jpg",
  "https://images7.alphacoders.com/543/543892.jpg",
];
const posterImage = [
  "https://wallpaperaccess.com/full/2099177.jpg",
  "https://i.pinimg.com/736x/9e/9b/86/9e9b8654ca86f94efc49cdb09d5c221f.jpg",
  "https://w0.peakpx.com/wallpaper/421/285/HD-wallpaper-bloodborne-blood-bloodborne-borne-souls.jpg",
  "https://i.redd.it/41mjbp8j0ms61.jpg",
  "https://w0.peakpx.com/wallpaper/336/427/HD-wallpaper-bloodborne-horror-souls.jpg",
  "https://e0.pxfuel.com/wallpapers/220/39/desktop-wallpaper-dark-souls-bloodborne-darksouls-thumbnail.jpg",
  "https://mfiles.alphacoders.com/257/257961.jpg",
  "https://i.pinimg.com/originals/14/38/da/1438da42518f516bf93dc3b8a1944442.jpg",
  "https://wallpapers.com/images/hd/blue-bloodborne-hunter-concept-ylnn5pd9qqys1wml.jpg",
  "https://storage.ko-fi.com/cdn/useruploads/display/8d8ebb2f-456a-4262-9953-4821d692e7b7_fy8tfhixoaatuod.jpg",
  "https://image.lexica.art/full_jpg/357e8364-53de-4c93-95c4-a799430df215",
];
const Gallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section ref={targetRef} style={{ opacity: opacity }}>
      <div className="flex flex-col items-center p-4 space-y-4">
        <div className="flex space-x-4">
          <SlideupImage
            imageOne={posterImage[0]}
            imageTwo={posterImage[0]}
            leftToRight={true}
            width="sm"
          />
          <SlideupImage
            imageOne={wideImage[0]}
            imageTwo={wideImage[0]}
            bottomToTop={true}
            width="xl"
          />
          <SlideupImage
            imageOne={posterImage[1]}
            imageTwo={posterImage[1]}
            leftToRight={true}
            width="sm"
          />
        </div>
        <div className="flex space-x-4">
          <SlideupImage
            imageOne={wideImage[1]}
            imageTwo={wideImage[1]}
            bottomToTop={true}
            width="xl"
          />
          <SlideupImage
            imageOne={posterImage[2]}
            imageTwo={posterImage[2]}
            leftToRight={true}
            width="sm"
          />
          <SlideupImage
            imageOne={posterImage[3]}
            imageTwo={posterImage[3]}
            leftToRight={true}
            width="sm"
          />
        </div>
        <div className="flex space-x-4">
          <SlideupImage
            imageOne={wideImage[4]}
            imageTwo={wideImage[4]}
            bottomToTop={true}
            width="md"
          />
          <SlideupImage
            imageOne={wideImage[5]}
            imageTwo={wideImage[5]}
            bottomToTop={true}
            width="md"
          />
          <SlideupImage
            imageOne={wideImage[6]}
            imageTwo={wideImage[6]}
            bottomToTop={true}
            width="md"
          />
        </div>
        <div className="flex space-x-4">
          <SlideupImage
            imageOne={wideImage[7]}
            imageTwo={wideImage[7]}
            bottomToTop={true}
            width="4xl"
          />
        </div>
        <div className="flex space-x-4">
          <SlideupImage
            imageOne={wideImage[8]}
            imageTwo={wideImage[8]}
            bottomToTop={true}
            width="2xl"
          />
          <div className="space-y-4">
            <SlideupImage
              imageOne={posterImage[3]}
              imageTwo={posterImage[3]}
              leftToRight={true}
            />
            <SlideupImage
              imageOne={posterImage[4]}
              imageTwo={posterImage[4]}
              leftToRight={true}
            />
          </div>
          <div className="space-y-4">
            <SlideupImage
              imageOne={posterImage[5]}
              imageTwo={posterImage[5]}
              leftToRight={true}
            />
            <SlideupImage
              imageOne={posterImage[6]}
              imageTwo={posterImage[6]}
              leftToRight={true}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;
