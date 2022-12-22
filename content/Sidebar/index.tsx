import Avatar from "~/components/Avatar";
import WeatherDescription from "~/components/WeatherDescription";

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:block w-1/4 md:w-1/3 xl:w-1/4 h-screen sticky top-0 pt-4">
        <Avatar />
        <WeatherDescription />
    </div>
  )
}

export default Sidebar;