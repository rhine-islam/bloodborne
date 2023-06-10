import { ReactNode, useState } from "react";
import styles from "./styles.module.css";

interface Props {
  rightToLeft: boolean;
  leftToRight: boolean;
  topToBottom: boolean;
  bottomToTop: boolean;
  componentFront: ReactNode;
  componentBack: ReactNode | any;
}

const FlipAnimation = ({
  rightToLeft,
  leftToRight,
  topToBottom,
  bottomToTop,
  componentFront,
  componentBack,
}: Props) => {
  const [open, setopen] = useState(false);
  return (
    <div className="">
      <div
        className={`transition-all   ${
          open
            ? `${styles.backdrop} fixed inset-0 z-20 outline-none justify-center items-center flex  overflow-hidden `
            : ` fixed inset-0 z-0 outline-none justify-center items-center flex  overflow-hidden  ${styles.backdropClear} `
        }`}
      />
      <div
        className={`cursor-pointer group perspective relative   ${
          open ? " z-20 " : " z-10"
        }`}
      >
        <div
          className={`h-full w-full duration-[1500ms] preserve-3d shadow-lg shadow-black/60 rounded-2xl  ${
            open
              ? rightToLeft === true &&
                leftToRight === false &&
                topToBottom === false &&
                bottomToTop === false
                ? "rightToLeft"
                : rightToLeft === false &&
                  leftToRight === true &&
                  topToBottom === false &&
                  bottomToTop === false
                ? "leftToRight"
                : rightToLeft === false &&
                  leftToRight === false &&
                  topToBottom === true &&
                  bottomToTop === false
                ? "topToBottom"
                : rightToLeft === false &&
                  leftToRight === false &&
                  topToBottom === false &&
                  bottomToTop === true
                ? "bottomToTop"
                : null
              : null
          } `}
        >
          <div
            className={`absolute h-full w-full backface-hidden `}
            onClick={() => setopen(true)}
          >
            {componentFront}
          </div>
          <div
            className={`relative h-full w-full overflow-hidden backface-hidden rounded-2xl ${
              (leftToRight && "leftToRight") ||
              (rightToLeft && "rightToLeft") ||
              (topToBottom && "topToBottom") ||
              (bottomToTop && "bottomToTop")
            }  `}
            onClick={() => setopen(false)}
          >
            {componentBack}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipAnimation;
