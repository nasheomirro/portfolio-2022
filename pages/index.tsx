import Header from "~/content/Header";
import Sidebar from "~/content/Sidebar";
import Description from "~/content/Description";
import { useWeatherStore, Weather } from "~/store/weather";
import { useEffect } from "react";

export default function Home({ weather }: { weather: Weather }) {
  const hydrateWeather = useWeatherStore((state) => state.setCurrent);

  useEffect(() => {
    hydrateWeather(weather);
  }, [hydrateWeather, weather]);

  return (
    <div className="max-w-lg sm:max-w-xl md:max-w-screen-lg mx-auto px-6 min-h-screen flex mt-40">
      <Sidebar />
      <div className="md:w-2/3 md:pl-6 xl:w-3/4 xl:pl-8">
        <Header />
        <Description />
        <div className="h-screen" />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // fetch philippine weather
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=12.8797&lon=121.7740&appid=${process.env.WEATHER_API_KEY}`
  );
  const weatherData = await res.json();
  const weather: Weather = {
    name: weatherData.name,
    ...weatherData.weather[0],
    measurements: {
      humidity: weatherData.main.humidity,
      pressure: weatherData.main.pressure,
      temp: weatherData.main.temp,
    },
  };
  return { props: { weather } };
}
