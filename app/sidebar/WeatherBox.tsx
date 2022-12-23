import Image from "next/image";
import React from "react";
import { useWeatherStore, WeatherType } from "~/stores/weather";
import PhilippineTime from "./PhilippineTime";

const Details: React.FC = () => {
  const weather = useWeatherStore((state) => state.current);
  return (
    <div className="py-4 px-2">
      <span className="text-lg text-primary-100 font-bold mb-2 inline-block">
        what it&apos;s like in my place
      </span>
      <ul>
        <li className="flex justify-between">
          <PhilippineTime />
        </li>
        <li className="mb-2">
          <span className="flex gap-2 items-center font-bold text-highlight-yellow">
            {weather.description}
            <span className="aspect-square relative inline-block w-6">
              <Image
                fill
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                alt="weather-icon"
              />
            </span>
          </span>
        </li>
        <li className="flex justify-between">
          temp:{" "}
          <span className="text-highlight-yellow font-bold">
            {weather.measurements.temp}°C
          </span>
        </li>
        <li className="flex justify-between">
          humidity:{" "}
          <span className="text-highlight-yellow font-bold">
            {weather.measurements.humidity}%
          </span>
        </li>
        <li className="flex justify-between">
          pressure:{" "}
          <span className="text-highlight-yellow font-bold">
            {weather.measurements.pressure}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Details;
