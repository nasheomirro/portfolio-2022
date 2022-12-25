import React, { createContext, useContext, useRef } from "react";
import { createStore, StoreApi, useStore } from "zustand";
import { Action, ContextHook } from "~/utils";

type TimeState = {
  current: string | null;
  setCurrent: Action<string>;
};

const createTimeStore = (time: string | null) => {
  return createStore<TimeState>()((set) => ({
    current: time,
    setCurrent: (payload) => set({ current: payload }),
  }));
};

// let the default be {}, it will be replaced anyways.
export const timeStoreContext = createContext<StoreApi<TimeState>>(
  {} as StoreApi<TimeState>
);

export const useTimeStore: ContextHook<TimeState> = (selector, equalityFn?) => {
  const store = useContext(timeStoreContext);
  return useStore(store, selector, equalityFn);
};

export const TimeProvider: React.FC<
  React.PropsWithChildren<{ value: string | null }>
> = ({ children, value }) => {
  const store = useRef(createTimeStore(value)).current;
  return (
    <timeStoreContext.Provider value={store}>
      {children}
    </timeStoreContext.Provider>
  );
};

/**
 * HOC for getting the current weather object, a Fallback component must be provided if when
 * weather was not passed in.
 */
export const withFetchedTimeProps = (
  Component: React.FC<{ fetchedTime: string }>,
  Fallback: React.FC
) => {
  const _Component: React.FC = () => {
    const time = useTimeStore((state) => state.current);
    if (time === null) {
      return <Fallback />;
    }
    return <Component fetchedTime={time} />;
  };
  return _Component;
};
