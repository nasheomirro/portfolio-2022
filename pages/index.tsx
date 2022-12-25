import Sidebar from "~/app/sidebar";
import Main from "~/app/main";
import { fetchWeatherData } from "~/stores/weather/data";
import { WeatherProvider, WeatherType } from "~/stores/weather";
import { fetchCurrentTimeData } from "~/stores/fetched-time/data";
import { TimeProvider } from "~/stores/fetched-time";

type Props = {
  weather: WeatherType | null;
  time: string | null;
};

export default function Home({ weather, time }: Props) {
  return (
    <WeatherProvider value={weather}>
      <TimeProvider value={time}>
        <div className="max-w-lg sm:max-w-xl md:max-w-screen-lg mx-auto px-6 min-h-screen flex mt-40">
          <Sidebar />
          <Main />
        </div>
      </TimeProvider>
    </WeatherProvider>
  );
}

export async function getServerSideProps() {
  // fetch both
  const fetchWeather = fetchWeatherData();
  const fetchTime = fetchCurrentTimeData();

  const payload: Props = {
    time: null,
    weather: null,
  };

  // then wait for each, do nothing if error
  try {
    const weather = await fetchWeather;
    payload.weather = weather;
  } catch {}
  try {
    const time = await fetchTime;
    payload.time = time;
  } catch {}

  return { props: payload };
}
