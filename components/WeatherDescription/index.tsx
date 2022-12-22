import Image from "next/image";
import { useWeatherStore } from "~/store/weather";

const WeatherDescription: React.FC = () => {
  const weather = useWeatherStore((state) => state.current);
  if (!weather) return null;

  return (
    <div className="py-4 px-2">
      <ul className="">
        <li className="mb-2">
          What it looks like in my place: 
          <span className="flex gap-2 items-center font-bold">
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
        <li>temp: {weather.measurements.temp}</li>
        <li>humidity: {weather.measurements.humidity}</li>
        <li>pressure: {weather.measurements.pressure}</li>
      </ul>
    </div>
  );
};

export default WeatherDescription;
