import Image from "next/image";
import { useState } from "react";
import { AvatarState, useAvatarStore } from "~/stores/avatar";

import IdleImg from "~/public/blink.gif";
import QuestionImg from "~/public/question.jpeg";
import LookImg from "~/public/look.jpeg";

const stateToPath: { [key in AvatarState]: any } = {
  idle: IdleImg,
  question: QuestionImg,
  look: LookImg,
};

const Avatar = () => {
  const { state, change } = useAvatarStore();
  const [lookingTimeout, setLookingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  
  const onMouseHover = () => {
    setLookingTimeout(setTimeout(() => change("look"), 500));
  };
  const onMouseLeave = () => {
    if (lookingTimeout) clearTimeout(lookingTimeout);
    change("idle");
  };

  return (
    <Image
      onMouseEnter={onMouseHover}
      onMouseLeave={onMouseLeave}
      src={stateToPath[state]}
      alt="pixel art of me"
      className="w-full rounded-lg overflow-hidden"
    />
  );
};

export default Avatar;
