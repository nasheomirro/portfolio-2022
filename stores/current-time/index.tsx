import React, { createContext, useContext, useRef } from "react";
import { createStore, StoreApi, useStore } from "zustand";
import { Action, ContextHook } from "~/utils";

type TimeState = {
  current: string;
  setCurrent: Action<string>;
};

const createTimeStore = (time: string) =>
  createStore<TimeState>()((set) => ({
    current: time,
    setCurrent: (payload) => set({ current: payload }),
  }));

export const timeStoreContext = createContext<StoreApi<TimeState> | null>(null);
export const useTimeStore: ContextHook<TimeState> = (selector, equalityFn?) => {
  const store = useContext(timeStoreContext);
  if (!store) throw new Error("Missing TimeStore.Provider parent");
  return useStore(store, selector, equalityFn);
};
export const TimeProvider: React.FC<
  React.PropsWithChildren<{ value: string | null }>
> = ({ children, value }) => {
  const store = useRef(value === null ? null : createTimeStore(value)).current;
  return (
    <timeStoreContext.Provider value={store}>
      {children}
    </timeStoreContext.Provider>
  );
};
