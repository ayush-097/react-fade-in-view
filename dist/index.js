"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  FadeIn: () => FadeIn_default
});
module.exports = __toCommonJS(src_exports);

// src/useInView.ts
var import_react = require("react");
var useInView = (options) => {
  const ref = (0, import_react.useRef)(null);
  const [isVisible, setIsVisible] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
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
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FadeIn
});
