import { twMerge } from "tailwind-merge";
import useScrolledToTop from "~/hooks/useScrolledToTop";
import Contact from "./Contact";
import Description from "./Description";
import Header from "./Header";
import Posts from "./Posts";
import Projects from "./Projects";

const Main: React.FC = () => {
  const isAtTop = useScrolledToTop();

  return (
    <div className="md:w-2/3 md:pl-6 xl:w-3/4 xl:pl-8">
      <Header />
      <main
        className={twMerge(
          "transition-all",
          isAtTop
            ? "-translate-x-5 opacity-0"
            : "delay-100 opacity-100 translate-x-0"
        )}
      >
        <Description />
        <Posts />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Main;
