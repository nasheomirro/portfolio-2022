export const fetchCurrentTimeData = async (): Promise<string | null> => {
  try {
    const currentTimeRes = await fetch(
      "http://worldtimeapi.org/api/timezone/Asia/Manila"
    );
    const curretnTimeData = await currentTimeRes.json();
    return curretnTimeData.datetime as string;
  } catch {
    return null;
  }
};
