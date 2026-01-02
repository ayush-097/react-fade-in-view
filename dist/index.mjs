// src/useInView.ts
import { useEffect, useRef, useState } from "react";
var useInView = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (!ref.current)
      return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);
  return { ref, isVisible };
};

// src/FadeIn.tsx
import { jsx } from "react/jsx-runtime";
var FadeIn = ({
  as,
  direction = "up",
  className = "",
  immediate = false,
  children,
  ...rest
}) => {
  const { ref, isVisible } = useInView();
  const Component = as || "div";
  const animationClass = immediate ? `fade-in-${direction}` : isVisible ? `fade-in-${direction}` : "opacity-0";
  return /* @__PURE__ */ jsx(
    Component,
    {
      ref,
      className: `${animationClass} ${className}`,
      ...rest,
      children
    }
  );
};
var FadeIn_default = FadeIn;
export {
  FadeIn_default as FadeIn
};
