import Image from "next/image";

import styles from "./doggo.module.css";
import doggoHead from "~/public/doggo/doggo_head.png";
import doggoFeet from "~/public/doggo/doggo_feet.gif";
import doggoPaws from "~/public/doggo/doggo_paws.png";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const LongDoggo: React.FC = () => {
  const [doggoHeight, setDoggoHeight] = useState("100%");
  
  const onClick = () => {
    setDoggoHeight((height) => {
      let parsed = parseInt(height);
      parsed = parsed >= 300 ? 100 : parsed + 10;
      return `${parsed}%`;
    });
  };
  return (
    <>
      <div className="absolute right-6 top-0 w-1/6 md:w-24">
        <Image
          className="absolute bottom-full"
          src={doggoHead}
          alt="doggo's head"
        />
        <Image className="" src={doggoPaws} alt="doggo's paws" />
      </div>
      <div className="absolute h-full right-6 top-0 w-1/6 md:w-24 z-[-1]">
        <div
          style={{ height: doggoHeight }}
          className={twMerge(
            styles.doggoBody,
            "w-full transition-all cursor-pointer"
          )}
          onClick={onClick}
        />
        <Image
          src={doggoFeet}
          alt="doggo's feet"
          className="cursor-pointer"
          onClick={onClick}
        />
      </div>
    </>
  );
};

export default LongDoggo;
