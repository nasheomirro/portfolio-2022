import Image from "next/image";
import React from "react";
import { WeatherType, withWeatherProps } from "~/stores/weather";
import PhilippineTime from "./PhilippineTime";
import DetailsFallback from "./DetailsFallback";

const Details: React.FC<{ weather: WeatherType }> = ({ weather }) => {
  return (
    <div>
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

export default withWeatherProps(Details, DetailsFallback);
