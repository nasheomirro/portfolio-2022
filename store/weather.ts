import create from "zustand";
import { Action } from "~/utils";

export type Info = {
  fetchedTime: string;
  weatherDescription: string;
  weatherIcon: string;
  measurements: {
    temp: number;
    humidity: number;
    pressure: number;
  };
};

type InfoStore = {
  current: Info | null;
  setCurrent: Action<Info>;
};

export const useInfoStore = create<InfoStore>()((set, get) => ({
  current: null,
  setCurrent: (payload) => {
    set({ current: payload });
  },
}));

export const getInfoData = async () => {
  const currentTimeRes = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Manila"
  );
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=12.8797&lon=121.7740&units=metric&appid=${process.env.WEATHER_API_KEY}`
  );

  const weatherData = await weatherRes.json();
  const curretnTimeData = await currentTimeRes.json();

  const info: Info = {
    fetchedTime: curretnTimeData.datetime,
    weatherDescription: weatherData.weather[0].description,
    weatherIcon: weatherData.weather[0].icon,
    measurements: {
      humidity: weatherData.main.humidity,
      pressure: weatherData.main.pressure,
      temp: weatherData.main.temp,
    },
  };

  return info;
};
