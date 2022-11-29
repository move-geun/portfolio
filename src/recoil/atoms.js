import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const BackgroundColor = atom({
  key: "BackgroundColor",
  default: "black",
  effects_UNSTABLE: [persistAtom],
});
