import { useState } from "react";

import useWindowEvent from "./useWindowEvent";

let useIsTactile = () => {
  let condition = () => "ontouchstart" in window || navigator.maxTouchPoints;

  let [isTactile, setIsTactile] = useState(condition());

  useWindowEvent("resize", () => setIsTactile(condition()));

  return isTactile;
};

export default useIsTactile;
