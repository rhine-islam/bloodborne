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
      className="relative mb-[4rem] h-screen  text-white before:pointer-events-none before:fixed before:inset-0 before:z-0  before:opacity-40"
    >
      <motion.div
        className="min-h-screen hero"
        style={{
          backgroundImage: `url(https://www.gamebyte.com/wp-content/uploads/2023/05/cff8c01e-7159attpsol.jpg)`,
          position,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <motion.div
          style={{ scale: scale }}
          className="text-center hero-content text-neutral-content"
        >
          <div className="max-w-5xl">
            <h1 className="mb-5 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-500 to-pink-800 font-flesh">
              Bloodborne
            </h1>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
