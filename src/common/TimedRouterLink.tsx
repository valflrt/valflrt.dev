import React from "react";
import { LinkProps, useMatch, useNavigate } from "react-router-dom";

import BaseLink from "./BaseLink";

export type TimedRouterLinkProps = Omit<
  LinkProps,
  "onClick" | "to" | "className"
> & {
  to: string;
  timeout?: number;
  onTimeoutStart?: () => any;
  onTimeoutEnd?: () => any;
  className?: (isFocused: boolean) => string;
};

// Used to create a link that has a timeout before redirect
const TimedRouterLink: React.FC<TimedRouterLinkProps> = (props) => {
  let {
    to,
    timeout,
    onTimeoutStart,
    onTimeoutEnd,
    className,
    ...filteredProps
  } = props;

  let navigate = useNavigate();
  let isFocused = !!useMatch({ path: to, end: true });

  let toAwait = (r: () => void) => {
    if (onTimeoutStart) onTimeoutStart();
    setTimeout(r, timeout ?? 1e3); // waits for custom timeout if specified or for 1s
  };

  let handleClick = () => {
    if (isFocused) return;
    if (onTimeoutEnd) onTimeoutEnd();
    navigate(to);
  };

  return (
    <BaseLink
      toDo={handleClick}
      toAwait={toAwait}
      className={className ? className(isFocused) : undefined}
      {...filteredProps}
    />
  );
};

export default TimedRouterLink;
