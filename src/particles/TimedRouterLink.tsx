import React from "react";
import { LinkProps, useMatch, useNavigate } from "react-router-dom";

// Used to create a link that has a timeout before redirect
const TimedRouterLink: React.FC<
  Omit<Omit<LinkProps, "onClick">, "to"> & {
    to: string;
    timeout?: number;
    onTimeoutStart?: (ref: React.RefObject<HTMLSpanElement>) => any;
  }
> = (props) => {
  let { to, timeout, onTimeoutStart, ...filteredProps } = props;
  let navigate = useNavigate();
  let isSamePath = useMatch({ path: to, end: true });

  let ref = React.createRef<HTMLSpanElement>();

  let handleClick: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    e.preventDefault();
    if (isSamePath) return;
    if (onTimeoutStart) onTimeoutStart(ref);
    setTimeout(() => navigate(to), timeout ?? 1e3); // default is 1s
  };

  return <span onClick={handleClick} ref={ref} {...filteredProps} />;
};

export default TimedRouterLink;
