import Avatar from "./Avatar";
import PhilippineTime from "./PhilippineTime";
import Details from "./WeatherBox";

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:block w-1/4 md:w-1/3 xl:w-1/4 h-screen sticky top-0 pt-4">
      <Avatar />
      <Details />
    </div>
  );
};

export default Sidebar;
