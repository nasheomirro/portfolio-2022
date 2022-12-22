import { twMerge } from "tailwind-merge";
import { polyRef } from "~/utils";

type Props = {
  className?: string;
};

const Button = polyRef<"button", Props>(({ as, className, ...props }, ref) => {
  const Element = as || "button";
  return (
    <Element
      className={twMerge(
        "px-4 text-sm py-2 bg-primary-200 rounded transition-colors hover:bg-primary-100",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

export default Button;
