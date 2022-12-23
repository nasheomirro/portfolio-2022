import { WeatherType } from ".";

export const fetchWeatherData = async () => {
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=12.8797&lon=121.7740&units=metric&appid=${process.env.WEATHER_API_KEY}`
  );
  
  const weatherData = await weatherRes.json();
  const weather: WeatherType = {
    description: weatherData.weather[0].description,
    icon: weatherData.weather[0].icon,
    measurements: {
      humidity: weatherData.main.humidity,
      pressure: weatherData.main.pressure,
      temp: weatherData.main.temp,
    },
  };

  return weather;
};
