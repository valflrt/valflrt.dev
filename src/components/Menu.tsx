import { useState } from "react";
import { useMatch } from "react-router-dom";
import { ArrowLeft } from "react-feather";

import TimedRouterLink from "../particles/TimedRouterLink";

import { css } from "../utils";

import "./Menu.scss";

const Menu = () => {
  let [isMenuHidden, setIsMenuHidden] = useState(false);

  let otherLinkProps = {
    timeout: 450,
    onTimeoutStart: () =>
      document
        .querySelector("#root > .layout > .main")
        ?.classList.add("disappearing"),
  };

  return (
    <div className={"menuWrapper"}>
      <div
        onClick={() => setIsMenuHidden((v) => !v)}
        className={css.j("toggle", isMenuHidden ? "rotated" : "")}
      >
        <ArrowLeft size={20} />
      </div>
      <div className={css.j("menu", isMenuHidden ? "hidden" : "")}>
        <div className={"links"}>
          <TimedRouterLink
            to={"/"}
            className={css.j(
              "link",
              "noUnderlining",
              useMatch({ path: "/", end: true }) ? "focused" : ""
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
              useMatch({ path: "/projects", end: true }) ? "focused" : ""
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
              useMatch({ path: "/social", end: true }) ? "focused" : ""
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
