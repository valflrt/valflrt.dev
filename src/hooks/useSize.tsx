import { useState } from "react";

import useWindowEvent from "./useWindowEvent";

export interface Size {
  width: number;
  height: number;
  outerWidth: number;
  outerHeight: number;
}

let useSize = () => {
  let [size, setSize] = useState<Size>();

  let handleResize = () =>
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight,
    });

  useWindowEvent("resize", handleResize);

  return size;
};

export default useSize;
