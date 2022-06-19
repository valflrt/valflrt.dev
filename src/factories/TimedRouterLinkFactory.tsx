import React from "react";

import TimedRouterLink, {
  TimedRouterLinkProps,
} from "../common/TimedRouterLink";

const TimedRouterLinkFactory = <T extends Omit<TimedRouterLinkProps, "to">>(
  customProps: T
) => {
  let CustomTimedRouterLink: React.FC<TimedRouterLinkProps> = (props) => {
    return <TimedRouterLink {...customProps} {...props} />;
  };
  return CustomTimedRouterLink;
};

export default TimedRouterLinkFactory;
