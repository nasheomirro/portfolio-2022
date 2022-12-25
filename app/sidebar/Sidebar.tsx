import { twMerge } from "tailwind-merge";
import useScrolledToTop from "~/hooks/useScrolledToTop";
import Avatar from "./Avatar";
import Details from "./Details";

const Sidebar: React.FC = () => {
  const isAtTop = useScrolledToTop();

  return (
    <div className="hidden md:block w-1/4 md:w-1/3 xl:w-1/4 h-screen sticky top-0 pt-4">
      <Avatar />
      <div
        className={twMerge(
          "transition-all ease-in-out bg-background-100 rounded-lg mt-4 p-4 border-4 border-background-200",
          isAtTop ? "-translate-x-10 opacity-0" : "opacity-100 translate-x-0"
        )}
      >
        <Details />
      </div>
    </div>
  );
};

export default Sidebar;
