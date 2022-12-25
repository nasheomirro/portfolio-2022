import Image from "next/image";

import styles from "./doggo.module.css";
import doggoHead from "~/public/doggo/doggo_head.png";
import doggoFeet from "~/public/doggo/doggo_feet.gif";
import doggoPaws from "~/public/doggo/doggo_paws.png";
import { twMerge } from "tailwind-merge";

const LongDoggo: React.FC = () => {
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
        <div className={twMerge(styles.doggoBody, "h-full w-full")} />
        <Image src={doggoFeet} alt="doggo's feet" />
      </div>
    </>
  );
};

export default LongDoggo;
