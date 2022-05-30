import React from "react";
import { LinkProps } from "react-router-dom";

import TimedRouterLink, {
  TimedRouterLinkProps,
} from "../common/TimedRouterLink";

let customProps = {
  timeout: 450,
  onTimeoutStart: () =>
    document
      .querySelector("#root > .layout > .main")
      ?.classList.add("disappearing"),
  onTimeoutEnd: () =>
    document
      .querySelector("#root > .layout > .main")
      ?.classList.remove("disappearing"),
};

const TimedRouterLinkFactory = <T extends Omit<TimedRouterLinkProps, "to">>(
  customProps: T
) => {
  let CustomTimedRouterLink: React.FC<TimedRouterLinkProps> = (props) => {
    return <TimedRouterLink {...customProps} {...props} />;
  };
  return CustomTimedRouterLink;
};

export default TimedRouterLinkFactory;

/* const CustomTimedRouterLink: React.FC<
  Omit<TimedRouterLinkProps, "timeout" & "onTimeoutStart" & "onTimeoutEnd">
> = (props) => {
  return <TimedRouterLink {...customProps} {...props} />;
}; */
