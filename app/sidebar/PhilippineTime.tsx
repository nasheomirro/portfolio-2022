import { useEffect, useRef, useState } from "react";
import { withFetchedTimeProps } from "~/stores/fetched-time";
import { addTime, formatDate } from "./utils";

const PhilippineTime: React.FC<{ fetchedTime: string }> = ({ fetchedTime }) => {
  const timeRef = useRef(new Date(fetchedTime));
  const [time, setTime] = useState(formatDate(timeRef.current));

  useEffect(() => {
    const time = timeRef.current;
    const min = 1000 * 60;
    let ms = (60 - time.getSeconds()) * 1000 - time.getMilliseconds();
    ms = ms > 0 ? ms : min;

    const tick = (ms: number) => setTime(addTime(time, ms));

    // coded this way for idempotence
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

export default withFetchedTimeProps(PhilippineTime, () => null);
