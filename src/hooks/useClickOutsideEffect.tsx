import React from "react";

import { useWindowEvent } from "./useWindowEvent";

let useClickOutsideEffect = <refElementType extends HTMLElement>(
  callback: (event: MouseEvent) => any,
  ref: React.RefObject<refElementType>,
  excludeRefs: React.RefObject<HTMLElement>[] = []
) => {
  let handleClickOutside = (e: MouseEvent) => {
    e.preventDefault();

    if (
      ref.current &&
      !ref.current.contains(e.target as Node) &&
      !excludeRefs
        .map((ref) => ref.current?.isSameNode(e.target as Node))
        .some((v) => !!v)
    )
      callback(e);
  };

  useWindowEvent("click", handleClickOutside);
};

export default useClickOutsideEffect;
