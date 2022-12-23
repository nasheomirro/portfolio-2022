import { useEffect, useRef, useState } from "react";
import { useTimeStore } from "~/stores/current-time";
import { addTime, formatDate } from "./utils";

const PhilippineTime: React.FC = () => {
  const fetchedTime = useTimeStore((state) => state.current);
  const timeRef = useRef(new Date(fetchedTime));

  const [time, setTime] = useState(formatDate(timeRef.current));

  useEffect(() => {
    const time = timeRef.current;
    const min = 1000 * 60;
    let ms = (60 - time.getSeconds()) * 1000 - time.getMilliseconds();
    ms = ms > 0 ? ms : min;

    const tick = (ms: number) => setTime(addTime(time, ms));

    let interval = setInterval(() => {
      tick(ms);
      clearInterval(interval);
      interval = setInterval(() => tick(min), min);
    }, ms);

    return () => {
      clearInterval(interval);
    };
  }, [timeRef, setTime]);

  return (
    <span className="text-lg font-thin text-highlight-yellow">{time}</span>
  );
};

export default PhilippineTime;
