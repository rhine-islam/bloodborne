import { useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";
import { useHidePageOverflow } from "../../utils/toggle-page-overflow";
import { useEscapePress } from "../../utils/use-escape-press";
import { CharacterCard } from "./Card";
import { FeatureTitle } from "./Title";
import { FullScreenImage } from "./Visual";
import { useStore } from "./Store";

const features = [
  {
    title: "Gehrman, the First Hunter",
    id: "gehrman",
    card: CharacterCard,
    visual: FullScreenImage,
    image1: "./assets/characters/Gehrman1.webp",
    image2: "./assets/characters/Gehrman2.png",
  },
  {
    title: "Iosefka",
    id: "iosefka",
    card: CharacterCard,
    visual: FullScreenImage,
    image1: "./assets/characters/Iosefka1.jpg",
    image2: "./assets/characters/Iosefka2.jpg",
  },
  {
    title: "Eileen the Crow",
    id: "eileen",
    card: CharacterCard,
    visual: FullScreenImage,
    image1: "./assets/characters/Eileen1.jpg",
    image2: "./assets/characters/Eileen2.jpg",
  },
  {
    title: "Alfred",
    id: "alfred",
    card: CharacterCard,
    visual: FullScreenImage,
    image1: "./assets/characters/Alfred1.webp",
    image2: "./assets/characters/Alfred2.jpg",
  },
  {
    title: "Annalise, Queen of the Vilebloods",
    id: "annalise",
    card: CharacterCard,
    visual: FullScreenImage,
    image1: "./assets/characters/Annalise1.webp",
    image2: "./assets/characters/Annalise2.jpg",
  },
  {
    title: "Provost Willem",
    id: "provost",
    card: CharacterCard,
    visual: FullScreenImage,
    image1: "./assets/characters/Provost1.webp",
    image2: "./assets/characters/Provost2.webp",
  },
  {
    title: "Plain Doll",
    id: "plain-doll",
    card: CharacterCard,
    visual: FullScreenImage,
    image1: "./assets/characters/plain-doll1.webp",
    image2: "./assets/characters/plain-doll2.jpg",
  },
  {
    title: "Patches the Spider",
    id: "patches",
    card: CharacterCard,
    visual: FullScreenImage,
    image1: "./assets/characters/Patches1.webp",
    image2: "./assets/characters/Patches2.jpg",
  },
  {
    title: "Retired Hunter Djura",
    id: "djura",
    card: CharacterCard,
    visual: FullScreenImage,
    image1: "./assets/characters/Djura1.webp",
    image2: "./assets/characters/Djura2.jpg",
  },
  {
    title: "Valtyr",
    id: "valtyr",
    card: CharacterCard,
    visual: FullScreenImage,
    image1: "./assets/characters/Valtyr1.jpeg",
    image2: "./assets/characters/Valtyr2.jpg",
  },
  {
    title: "Arianna, Woman of the Night",
    id: "arianna",
    card: CharacterCard,
    visual: FullScreenImage,
    image1: "./assets/characters/Arianna1.webp",
    image2: "./assets/characters/Arianna2.jpg",
  },
  {
    title: "Adella the Nun",
    id: "adella",
    card: CharacterCard,
    visual: FullScreenImage,
    image1: "./assets/characters/Adella1.webp",
    image2: "./assets/characters/Adella2.jpg",
  },
  {
    title: "Lady Maria",
    id: "maria",
    card: CharacterCard,
    visual: FullScreenImage,
    image1: "./assets/characters/Maria1.webp",
    image2: "./assets/characters/Maria2.jpg",
  },
];
const StickySlider = () => {
  const [scope, animate] = useAnimate();
  const fullscreenFeature = useStore((state) => state.fullscreenFeature);
  const lastFullscreenFeature = useStore(
    (state) => state.lastFullscreenFeature
  );
  const setFullscreenFeature = useStore((state) => state.setFullscreenFeature);

  const onEscapePress = () => {
    if (fullscreenFeature) setFullscreenFeature(null);
  };

  useEscapePress(onEscapePress);
  useHidePageOverflow(!!fullscreenFeature);

  useEffect(() => {
    if (fullscreenFeature) {
      animate([
        [
          ".feature-title",
          { opacity: 0, x: "-200px" },
          { duration: 0.05, delay: stagger(0.02) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 1, scale: 1, pointerEvents: "auto" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 0, scale: 0 }, { at: "<" }],
        [".active-card .show-me-btn", { opacity: 0 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 1, y: "0px" },
          { at: "<", duration: 0.3 },
        ],
      ]);
    } else {
      animate([
        [
          ".feature-title",
          { opacity: 1, x: "0px" },
          { duration: 0.2, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 0, scale: 0.75, pointerEvents: "none" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 1, scale: 1 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 0, y: "300px" },
          { at: "<", duration: 0.3 },
        ],
        [".active-card .show-me-btn", { opacity: 1 }],
      ]);
    }
  }, [animate, fullscreenFeature, lastFullscreenFeature]);

  return (
    <section className="relative max-w-6xl px-4 mx-auto">
      <div ref={scope}>
        {features.map((feature) => (
          <feature.visual id={feature.id} key={feature.id} />
        ))}
        <button
          onClick={() => setFullscreenFeature(null)}
          className="back-to-site-btn fixed bottom-6 left-1/2 z-10 font-flesh -translate-x-1/2 translate-y-[300%] rounded-full bg-black px-4 py-2 text-white opacity-0 shadow-lg"
        >
          Back to site
        </button>
        <div className="flex items-start w-full gap-20">
          <div className="w-full py-[50vh]">
            <ul>
              {features.map((feature) => (
                <li key={feature.id}>
                  <FeatureTitle
                    id={feature.id}
                    image1={feature.image1}
                    image2={feature.image2}
                  >
                    {feature.title}
                  </FeatureTitle>
                </li>
              ))}
            </ul>
          </div>
          <div className="sticky top-0 flex items-center w-full h-screen ">
            {!fullscreenFeature && (
              <div className="relative w-full bg-white/5 aspect-square rounded-2xl default-background-card">
                {features.map((feature) => (
                  <feature.card id={feature.id} key={feature.id} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickySlider;
