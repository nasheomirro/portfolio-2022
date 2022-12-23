import Description from "./Description";
import Header from "./Header";

const Main: React.FC = () => {
  return (
    <div className="md:w-2/3 md:pl-6 xl:w-3/4 xl:pl-8">
      <Header />
      <Description />
    </div>
  );
};

export default Main;
