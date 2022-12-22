import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Info, useInfoStore } from "~/store/weather";
import { addElapsedTime, formatDate } from "./utils";

const InfoBoxInner: React.FC<{ info: Info }> = ({ info }) => {
  const timeRef = useRef<{ user: Date; fetched: Date; fixed: boolean }>({
    user: new Date(),
    fetched: new Date(info.fetchedTime),
    fixed: false,
  });
  const [time, setTime] = useState(formatDate(timeRef.current.fetched));
  useEffect(() => {
    const { fetched, user, fixed } = timeRef.current;
    const exactTimeToFull =
      (60 - fetched.getSeconds()) * 1000 - fetched.getMilliseconds();

    const interval = setInterval(
      () => {
        setTime(addElapsedTime(user, fetched));
        timeRef.current.fixed = true;
      },
      !fixed ? exactTimeToFull : 1000 * 60
    );

    () => clearInterval(interval);
  }, [timeRef, setTime]);

  return (
    <div className="py-4 px-2">
      <ul className="">
        <li>{time}</li>
        <li className="mb-2">
          What it looks like in my place:
          <span className="flex gap-2 items-center font-bold text-highlight-yellow">
            {info.weatherDescription}
            <span className="aspect-square relative inline-block w-6">
              <Image
                fill
                src={`http://openweathermap.org/img/w/${info.weatherIcon}.png`}
                alt="weather-icon"
              />
            </span>
          </span>
        </li>
        <li className="flex justify-between">
          temp:{" "}
          <span className="text-highlight-yellow font-bold">
            {info.measurements.temp}°C
          </span>
        </li>
        <li className="flex justify-between">
          humidity:{" "}
          <span className="text-highlight-yellow font-bold">
            {info.measurements.humidity}%
          </span>
        </li>
        <li className="flex justify-between">
          pressure:{" "}
          <span className="text-highlight-yellow font-bold">
            {info.measurements.pressure}
          </span>
        </li>
      </ul>
    </div>
  );
};

const InfoBox: React.FC = () => {
  const info = useInfoStore((state) => state.current);
  if (!info) return null;

  return <InfoBoxInner info={info} />;
};

export default InfoBox;
