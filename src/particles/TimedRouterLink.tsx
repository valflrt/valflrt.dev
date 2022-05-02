import React from "react";
import { LinkProps, useNavigate } from "react-router-dom";

// Used to create a link that has a timeout before redirect
const TimedRouterLink: React.FC<
  Omit<LinkProps, "onClick"> & {
    timeout?: number;
    onTimeoutStart?: (ref: React.RefObject<HTMLSpanElement>) => any;
  }
> = (props) => {
  let { to, timeout, onTimeoutStart, ...filteredProps } = props;
  let navigate = useNavigate();

  let ref = React.createRef<HTMLSpanElement>();

  let handleClick = () => {
    if (onTimeoutStart) onTimeoutStart(ref);
    setTimeout(() => navigate(to), timeout ?? 1e3); // default is 1s
  };

  return <span onClick={handleClick} ref={ref} {...filteredProps} />;
};

export default TimedRouterLink;
