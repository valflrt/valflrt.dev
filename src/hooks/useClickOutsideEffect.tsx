import React from "react";

import { useWindowEvent } from "./useWindowEvent";

let useClickOutsideEffect = <refElementType extends HTMLElement>(
  callback: (event: MouseEvent) => any,
  ref: React.RefObject<refElementType>
) => {
  let handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) callback(e);
  };

  useWindowEvent("click", handleClickOutside);
};

export default useClickOutsideEffect;
