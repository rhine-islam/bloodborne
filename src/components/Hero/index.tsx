import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });
  return (
    <motion.section
      ref={targetRef}
      style={{ opacity: opacity }}
      className="relative mb-[4rem] h-screen  text-white before:pointer-events-none before:fixed before:inset-0 before:z-0  before:opacity-40 flex justify-center items-center"
    >
      <motion.div
        style={{ scale: scale }}
        className="absolute z-10 text-center hero-content text-neutral-content"
      >
        <div className="max-w-9xl">
          <h1 className="mb-5 font-extrabold text-transparent text-[250px] bg-clip-text bg-gradient-to-r from-red-500 to-pink-900 font-flesh ">
            Bloodborne
          </h1>
        </div>
      </motion.div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-screen max-w-none opacity-40 "
      >
        <source src="./assets/bg.mp4" type="video/mp4" />
      </video>
    </motion.section>
  );
};

export default Hero;
