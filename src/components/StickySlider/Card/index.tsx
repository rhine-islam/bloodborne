import classNames from "classnames";

import { motion } from "framer-motion";
import { useStore } from "../Store";

type CardProps = {
  gradient: string;
  children: React.ReactNode;
} & IDProps;

type IDProps = {
  id: string;
};

const Card = ({ gradient, children, id }: CardProps) => {
  const inViewFeature = useStore((state) => state.inViewFeature);
  const setFullscreenFeature = useStore((state) => state.setFullscreenFeature);

  return (
    <div
      className={classNames(
        "absolute inset-0 h-full w-full rounded-2xl transition-opacity",
        inViewFeature === id
          ? "active-card opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <div
        className={classNames(
          "gradient absolute inset-0 origin-bottom-left rounded-2xl bg-gradient-to-br",
          gradient
        )}
      />
      {children}
      <button
        onClick={() => setFullscreenFeature(id)}
        className="absolute px-4 py-2 text-white bg-black shadow-lg show-me-btn bottom-6 right-6 rounded-xl"
      >
        Show me
      </button>
    </div>
  );
};

export const CharacterCard = ({ id }: IDProps) => {
  const containerImage = useStore((state) => state.containerImage);
  const inViewFeature = useStore((state) => state.inViewFeature);
  const setFullscreenFeature = useStore((state) => state.setFullscreenFeature);
  return (
    <>
      {containerImage !== null || containerImage !== undefined ? (
        <img
          src={String(containerImage)}
          className={classNames(
            "w-[510px] h-[510px] rounded-2xl shadow-lg border-2 border-zinc-700 object-cover object-top absolute inset-0 transition-opacity duration-1000",
            inViewFeature === id
              ? "active-card opacity-100 cursor-pointer"
              : "pointer-events-none opacity-0"
          )}
          onClick={() => setFullscreenFeature(id)}
        />
      ) : (
        <Card id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
          <span />
        </Card>
      )}
    </>
  );
};
