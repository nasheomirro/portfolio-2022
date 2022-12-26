import { useEffect, useState } from "react";

const useScrolledToTop = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY < 100) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    // call for when the user is somewhere else on refresh
    listener();

    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [setIsAtTop]);

  return isAtTop;
};

export default useScrolledToTop;
