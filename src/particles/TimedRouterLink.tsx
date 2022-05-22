import React from "react";
import { LinkProps, useMatch, useNavigate } from "react-router-dom";

import BaseLink from "./BaseLink";

// Used to create a link that has a timeout before redirect
const TimedRouterLink: React.FC<
  Omit<LinkProps, "onClick" | "to" | "className"> & {
    to: string;
    timeout?: number;
    onTimeoutStart?: (ref: React.RefObject<HTMLSpanElement>) => any;
    className?: (isFocused: boolean) => string;
  }
> = (props) => {
  let { to, timeout, onTimeoutStart, className, ...filteredProps } = props;
  let navigate = useNavigate();
  let isFocused = !!useMatch({ path: to, end: true });

  let ref = React.createRef<HTMLSpanElement>();

  let toAwait = (r: () => void) => {
    if (onTimeoutStart) onTimeoutStart(ref);
    setTimeout(r, timeout ?? 1e3);
  };

  let handleClick = () => {
    if (isFocused) return;
    navigate(to);
  };

  return (
    <BaseLink
      toDo={handleClick}
      toAwait={toAwait}
      ref={ref}
      className={className ? className(isFocused) : undefined}
      {...filteredProps}
    />
  );
};

export default TimedRouterLink;
