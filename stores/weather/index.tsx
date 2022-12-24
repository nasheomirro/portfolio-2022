import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
} from "react";
import { useStore } from "zustand";
import createStore, { StoreApi } from "zustand/vanilla";
import { Action, ContextHook } from "~/utils";

export type WeatherType = {
  description: string;
  icon: string;
  measurements: {
    temp: number;
    humidity: number;
    pressure: number;
  };
};

type WeatherState = {
  current: WeatherType;
  setCurrent: Action<WeatherType>;
};

const createWeatherStore = (weather: WeatherType) =>
  createStore<WeatherState>()((set) => ({
    current: weather,
    setCurrent: (payload) => {
      set({ current: payload });
    },
  }));

export const weatherContext = createContext<StoreApi<WeatherState> | null>(
  null
);

export const useWeatherStore: ContextHook<WeatherState> = (
  selector,
  equalityFn?
) => {
  const store = useContext(weatherContext);
  if (!store) throw new Error("Missing TimeStore.Provider parent");
  return useStore(store, selector, equalityFn);
};

export const WeatherProvider: React.FC<
  PropsWithChildren<{ value: WeatherType | null }>
> = ({ value, children }) => {
  const store = useRef(value && createWeatherStore(value)).current;
  return (
    <weatherContext.Provider value={store}>{children}</weatherContext.Provider>
  );
};
