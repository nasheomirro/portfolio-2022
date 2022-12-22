import Image from "next/image";
import { AvatarState, useAvatar } from "~/store/avatar";

import IdleImg from "~/public/blink.gif";
import QuestionImg from "~/public/question.jpeg";
import LookImg from "~/public/look.jpeg";

const stateToPath: { [key in AvatarState]: any } = {
  idle: IdleImg,
  question: QuestionImg,
  look: LookImg,
};

const Avatar = () => {
  const { state, change } = useAvatar();
  return (
    <Image
      onMouseEnter={() => change("look")}
      onMouseLeave={() => change("idle")}
      src={stateToPath[state]}
      alt="pixel art of me"
      className="w-full rounded-lg overflow-hidden"
    />
  );
};

export default Avatar;
