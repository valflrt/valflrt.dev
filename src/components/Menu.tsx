import React, { MouseEvent, useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import { ArrowLeft } from "react-feather";

import useIsMobile from "../hooks/useIsMobile";
import TimedRouterLink from "../particles/TimedRouterLink";

import { css } from "../utils";

import "./Menu.scss";
import useClickOutsideEffect from "../hooks/useClickOutsideEffect";

const Menu = () => {
  let isMobile = useIsMobile();
  let [isMenuHidden, setIsMenuHidden] = useState(true);
  let toggleRef = React.createRef<HTMLDivElement>();

  let otherLinkProps = {
    timeout: 450,
    onTimeoutStart: () =>
      document
        .querySelector("#root > .layout > .main")
        ?.classList.add("disappearing"),
  };

  useEffect(() => {
    console.log(toggleRef);
  }, [toggleRef]);

  useClickOutsideEffect<HTMLDivElement>(
    () => !isMenuHidden && setIsMenuHidden(true),
    toggleRef
  );

  return (
    <div className={"menuWrapper"}>
      <div
        ref={toggleRef}
        className={css.j("toggle", isMenuHidden ? "rotated" : "")}
        onClick={() => setIsMenuHidden((s) => !s)}
      >
        <ArrowLeft size={!isMobile ? 20 : 28} />
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
