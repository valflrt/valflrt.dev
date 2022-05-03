import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import TimedRouterLink from "../particles/TimedRouterLink";

import { css } from "../utils";

import "./Menu.scss";

const Menu = () => {
  let location = useLocation();

  let otherLinkProps = {
    timeout: 450,
    onTimeoutStart: () =>
      document
        .querySelector("#root > .layout > .main")
        ?.classList.add("disappearing"),
  };

  return (
    <div className={"menuWrapper"}>
      <div className={"menu"}>
        <div className={"links"}>
          <TimedRouterLink
            to={"/"}
            className={css.j(
              "link",
              "noUnderlining",
              location.pathname === "/" ? "focused" : ""
            )}
            {...otherLinkProps}
          >
            Main
          </TimedRouterLink>
          <TimedRouterLink
            to={"/projects"}
            className={css.j(
              "link",
              "noUnderlining",
              location.pathname === "/projects" ? "focused" : ""
            )}
            {...otherLinkProps}
          >
            Projects
          </TimedRouterLink>
          <TimedRouterLink
            to={"/social"}
            className={css.j(
              "link",
              "noUnderlining",
              location.pathname === "/social" ? "focused" : ""
            )}
            {...otherLinkProps}
          >
            Social
          </TimedRouterLink>
        </div>
      </div>
    </div>
  );
};

export default Menu;
