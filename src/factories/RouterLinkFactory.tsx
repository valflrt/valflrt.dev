import React from "react";
import RouterLink, { RouterLinkProps } from "../common/RouterLink";

const RouterLinkFactory = <T extends Omit<RouterLinkProps, "to">>(
  customProps: T
) => {
  let CustomRouterLink: React.FC<RouterLinkProps> = (props) => {
    return <RouterLink {...customProps} {...props} />;
  };
  return CustomRouterLink;
};

export default RouterLinkFactory;
