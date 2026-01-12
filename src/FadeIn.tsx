import { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import { useInView } from "./useInView";
import "./styles.css";

type Direction = "left" | "right" | "up" | "down" | "fade" | "zoom";

type FadeInProps<T extends ElementType> = {
  as?: T;
  direction?: Direction;
  className?: string;
  immediate?: boolean;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

const FadeIn = <T extends ElementType = "div">({
  as,
  direction = "up",
  className = "",
  immediate = false,
  children,
  ...rest
}: FadeInProps<T>) => {
  const { ref, isVisible } = useInView();
  const Component = as || "div";

  const animationClass = immediate
    ? `fade-in-${direction}`
    : isVisible
    ? `fade-in-${direction}`
    : "opacity-0";

  return (
    <Component
      ref={ref as React.Ref<any>}
      className={`${animationClass} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default FadeIn;
