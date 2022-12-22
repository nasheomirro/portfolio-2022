import create from "zustand";
import { Action } from "~/utils";

export type AvatarState = "idle" | "question" | "look";

export type AvatorStore = {
  state: AvatarState;
  change: Action<AvatarState>;
};

export const useAvatar = create<AvatorStore>()((set) => ({
  state: "idle",
  change: (payload) => {
    set({ state: payload });
  },
}));
