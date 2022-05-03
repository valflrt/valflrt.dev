import { useState } from "react";

import { useWindowEvent } from "./useWindowEvent";

let useIsMobile = () => {
  let condition = () =>
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.innerWidth < window.innerHeight + 100;

  let [isMobile, setIsMobile] = useState(condition());

  useWindowEvent("resize", () => {
    setIsMobile(condition());
  });

  return isMobile;
};

export default useIsMobile;
