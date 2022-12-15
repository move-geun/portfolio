import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const NowPage = atom({
  key: "NowPage",
  default: "intro",
  effects_UNSTABLE: [persistAtom],
});
