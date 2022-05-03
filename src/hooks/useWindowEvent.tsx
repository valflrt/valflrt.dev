import { useEffect } from "react";

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
