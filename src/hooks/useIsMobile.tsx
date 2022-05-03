import { useState } from "react";

import { useWindowEvent } from "./useWindowEvent";

let useIsMobile = () => {
  let [isMobile, setIsMobile] = useState(false);

  useWindowEvent("resize", () => {
    setIsMobile(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < window.innerHeight + 100
    );
  });

  return isMobile;
};

export default useIsMobile;
