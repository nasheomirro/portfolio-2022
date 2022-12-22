import { useEffect } from "react";
import { useInfoStore } from "~/store/weather";
import { getData, ReturnData } from "~/store/getData";

import Header from "~/content/Header";
import Sidebar from "~/content/Sidebar";
import Description from "~/content/Description";

export default function Home({ info }: ReturnData) {
  const hydrateInfoStore = useInfoStore((state) => state.setCurrent);

  useEffect(() => {
    hydrateInfoStore(info);
  }, [hydrateInfoStore, info]);

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
  return getData();
}
