import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import FlipAnimation from "../FlipAnimation";
import Image from "../Image";

const SlideupImage = ({
  duration,
  imageOne,
  imageTwo,
  leftToRight,
  bottomToTop,
}: any) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  if (duration === undefined || duration === null) {
    duration = 0.7;
  }
  if (leftToRight === undefined || leftToRight === null) {
    leftToRight = false;
  }
  if (bottomToTop === undefined || bottomToTop === null) {
    bottomToTop = false;
  }
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);
  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: duration }}
      >
        <FlipAnimation
          rightToLeft={false}
          leftToRight={leftToRight}
          topToBottom={false}
          bottomToTop={bottomToTop}
          componentFront={<Image image={imageOne} />}
          componentBack={
            <div>
              <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full space-y-4 text-5xl text-red-600 bg-black/40 backdrop-blur-sm">
                <h1 className="text-5xl text-red-600"> Bloodborne</h1>
                <p className="w-1/2 text-xs text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat soluta officia est quibusdam vel quidem illo non
                  architecto sunt et.
                </p>
              </div>
              <div className="relative z-0">
                <Image image={imageTwo} />
              </div>
            </div>
          }
        />
      </motion.div>
    </>
  );
};

export default SlideupImage;
