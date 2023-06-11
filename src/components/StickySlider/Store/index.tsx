import { create } from "zustand";

type StoreProps = {
  inViewFeature: string | null;
  setInViewFeature: (feature: string | null) => void;
  fullscreenFeature: string | null;
  setFullscreenFeature: (feature: string | null) => void;
  lastFullscreenFeature: string | null;
  setLastFullscreenFeature: (feature: string | null) => void;

  containerImage: string | null;
  setContainerImage: (feature: string | null) => void;

  fullImage: string | null;
  setFullImage: (feature: string | null) => void;
};

export const useStore = create<StoreProps>((set) => ({
  inViewFeature: null,
  setInViewFeature: (feature: string | null) => set({ inViewFeature: feature }),
  fullscreenFeature: null,
  setFullscreenFeature: (feature: string | null) => {
    set({ fullscreenFeature: feature });
    if (feature !== null) {
      set({ lastFullscreenFeature: feature });
    }
  },
  lastFullscreenFeature: null,
  setLastFullscreenFeature: (feature: string | null) =>
    set({ lastFullscreenFeature: feature }),

  containerImage: null,
  setContainerImage: (feature: string | null) =>
    set({ containerImage: feature }),

  fullImage: null,
  setFullImage: (feature: string | null) => set({ fullImage: feature }),
}));
