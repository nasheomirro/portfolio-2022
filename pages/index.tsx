import Header from "~/content/Header";
import Sidebar from "~/content/Sidebar";
import Description from "~/content/Description";

export default function Home() {
  return (
    <div className="sm:max-w-xl md:max-w-screen-lg mx-auto px-4 min-h-screen w-screen flex mt-40">
      <Sidebar />
      <div className="md:w-3/4 md:pl-6">
        <Header />
        <Description />
        <div className="h-screen" />
      </div>
    </div>
  );
}
