import create from "zustand";
import { Action } from "~/utils";

export type Weather = {
  name: string;
  id: string;
  main: string;
  description: string;
  icon: string;
  measurements: {
    temp: number;
    humidity: number;
    pressure: number;
  };
};

type WeatherStore = {
  current: Weather | null;
  setCurrent: Action<Weather>;
};

export const useWeatherStore = create<WeatherStore>()((set) => ({
  current: null,
  setCurrent: (payload) => {
    set({ current: payload });
  },
}));
