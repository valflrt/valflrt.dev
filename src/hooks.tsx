import { useEffect, useState } from "react";

export let useWindowEvent = <E extends keyof WindowEventMap>(
  event: E,
  listener: (this: Window, ev: WindowEventMap[E]) => any,
  options?: boolean | AddEventListenerOptions
): void => {
  useEffect(() => {
    window.addEventListener(event, listener, options);

    return () => window.removeEventListener(event, listener);
  });
};

export interface Size {
  width: number;
  height: number;
  outerWidth: number;
  outerHeight: number;
}

export let useResize = () => {
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

export let useIsMobile = () => {
  let [isMobile, setIsMobile] = useState(false);
  let size = useResize();

  useEffect(() => {
    setIsMobile(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < window.innerHeight + 100
    );
    console.log(isMobile);
  }, [size]);

  return isMobile;
};
