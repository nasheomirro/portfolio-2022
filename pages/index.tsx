import Sidebar from "~/app/sidebar";
import Main from "~/app/main";
import { fetchWeatherData } from "~/stores/weather/data";
import { WeatherProvider, WeatherType } from "~/stores/weather";
import { fetchCurrentTimeData } from "~/stores/fetched-time/data";
import { TimeProvider } from "~/stores/fetched-time";
import { fetchBlogPostData } from "~/stores/blog-posts/data";
import { BlogPostProvider, Posts } from "~/stores/blog-posts";

type Props = {
  posts: Posts | null;
  weather: WeatherType | null;
  time: string | null;
};

export default function Home({ weather, time, posts }: Props) {
  return (
    <WeatherProvider value={weather}>
      <TimeProvider value={time}>
        <BlogPostProvider value={posts}>
          <div className="max-w-lg sm:max-w-xl md:max-w-screen-lg mx-auto px-6 min-h-screen flex mt-40">
            <Sidebar />
            <Main />
          </div>
        </BlogPostProvider>
      </TimeProvider>
    </WeatherProvider>
  );
}

export async function getServerSideProps() {
  // fetch both
  const fetchWeather = fetchWeatherData();
  const fetchTime = fetchCurrentTimeData();
  const fetchPosts = fetchBlogPostData();

  const payload: Props = {
    posts: await fetchPosts,
    time: await fetchTime,
    weather: await fetchWeather,
  };

  return { props: payload };
}
