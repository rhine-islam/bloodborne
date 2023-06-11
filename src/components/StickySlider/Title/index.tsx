import classNames from "classnames";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useStore } from "../Store";

type Props = {
  children: React.ReactNode;
  id: string;
  image1: string;
  image2: string;
};

export const FeatureTitle = ({ children, id, image1, image2 }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const documentRef = useRef(document);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
    // NOTE: The only reason we pass in the document here, is because
    // of security restrictions set by the browser when using an iFrame.
    // In an iFrame (so eg in the preview on frontend.fyi),
    // margin won't take effect unless you specify the root manually.
    // By default it will be the window element, which is what we want in this case.
    // If you specify your own root, you can usually only pass in an Element, and
    // not the document (since document/window is the default). However, in order
    // to fix the issue in the iframe, we need to pass in the document here and thus
    // tell TypeScript that we know what we're doing. If you're implementing
    // this in your own website, you can just pass in the root property as well as the documentRef.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    root: documentRef,
  });
  const setInViewFeature = useStore((state) => state.setInViewFeature);
  const setContainerImage = useStore((state) => state.setContainerImage);
  const setFullImage = useStore((state) => state.setFullImage);
  const inViewFeature = useStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) {
      setInViewFeature(id);
      setContainerImage(image1);
      setFullImage(image2);
    }
    if (!isInView && inViewFeature === id) {
      setInViewFeature(null);
      setContainerImage(null);
      setFullImage(null);
    }
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <p
      ref={ref}
      className={classNames(
        "feature-title py-16 font-flesh text-5xl transition-colors",
        isInView ? "text-red-600" : "text-gray-300"
      )}
    >
      {children}
    </p>
  );
};
