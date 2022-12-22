import { getInfoData, Info } from "./weather";

export type ReturnData = {
  info: Info;
};

export const getData = async (): Promise<{ props: ReturnData }> => {
  const info = await getInfoData();
  return { props: { info } };
};
