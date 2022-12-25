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
  current: WeatherType | null;
  setCurrent: Action<WeatherType>;
};

const createWeatherStore = (weather: WeatherType | null) =>
  createStore<WeatherState>()((set) => ({
    current: weather,
    setCurrent: (payload) => {
      set({ current: payload });
    },
  }));

export const weatherContext = createContext<StoreApi<WeatherState>>({} as any);
export const useWeatherStore: ContextHook<WeatherState> = (
  selector,
  equalityFn?
) => {
  const store = useContext(weatherContext);
  return useStore(store, selector, equalityFn);
};

export const WeatherProvider: React.FC<
  PropsWithChildren<{ value: WeatherType | null }>
> = ({ value, children }) => {
  const store = useRef(createWeatherStore(value)).current;
  return (
    <weatherContext.Provider value={store}>{children}</weatherContext.Provider>
  );
};

/**
 * HOC for getting the current weather object, a Fallback component must be provided if when
 * weather was not passed in.
 */
export const withWeatherProps = (
  Component: React.FC<{ weather: WeatherType }>,
  Fallback: React.FC
) => {
  const _Component: React.FC = () => {
    const weather = useWeatherStore((state) => state.current);
    if (weather === null) {
      return <Fallback />;
    }
    return <Component weather={weather} />;
  };
  return _Component;
};
