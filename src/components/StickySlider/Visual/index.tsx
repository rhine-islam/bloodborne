import classNames from "classnames";

import { motion } from "framer-motion";
import { useStore } from "../Store";

type Props = {
  id: string;
};

type VisualProps = {
  children: React.ReactNode;
} & Props;

const Visual = ({ children, id }: VisualProps) => {
  return (
    <div
      className={classNames(
        "pointer-events-none fixed inset-0 flex items-center justify-center opacity-0 ",
        `visual-${id}`
      )}
    >
      <div className="max-w-6xl px-4">{children}</div>
    </div>
  );
};

export const FullScreenImage = ({ id }: Props) => {
  const fullscreenFeature = useStore((store) => store.fullscreenFeature);
  const fullImage = useStore((store) => store.fullImage);
  const isFullscreen = fullscreenFeature === id;

  return fullImage !== null || fullImage !== undefined ? (
    <Visual id={id}>
      <img
        src={String(fullImage)}
        className={classNames(
          "w-full h-full rounded-2xl shadow-lg border-2 border-zinc-700 object-cover object-top  transition-opacity duration-1000"
        )}
      />
    </Visual>
  ) : (
    <Visual id={id}>
      <span />
    </Visual>
  );
};
