import React, { useState } from "react";
import { ChevronLeft } from "react-feather";

import TimedRouterLink from "../particles/TimedRouterLink";
import useClickOutsideEffect from "../hooks/useClickOutsideEffect";

import { css } from "../utils";
import { TimedRouterLinkDefaultProps } from "../misc";

import "./Menu.scss";

const Menu = () => {
  let [isMenuHidden, setIsMenuHidden] = useState(true);
  let toggleRef = React.createRef<HTMLDivElement>();

  useClickOutsideEffect<HTMLDivElement>(
    () => !isMenuHidden && setIsMenuHidden(true),
    toggleRef
  );

  return (
    <div className={"menuWrapperWrapper"}>
      <div className={"menuWrapper"}>
        <div
          ref={toggleRef}
          className={css.j("toggle", isMenuHidden ? "rotated" : "")}
          onClick={() => setIsMenuHidden((s) => !s)}
        >
          <ChevronLeft />
        </div>
        <div className={css.j("menu", isMenuHidden ? "hidden" : "")}>
          <div className={"links"}>
            <TimedRouterLink
              to={"/"}
              className={(isFocused) =>
                css.j("link", "noUnderlining", isFocused ? "focused" : "")
              }
              {...TimedRouterLinkDefaultProps}
            >
              Main
            </TimedRouterLink>
            <TimedRouterLink
              to={"/projects"}
              className={(isFocused) =>
                css.j("link", "noUnderlining", isFocused ? "focused" : "")
              }
              {...TimedRouterLinkDefaultProps}
            >
              Projects
            </TimedRouterLink>
            <TimedRouterLink
              to={"/external-links"}
              className={(isFocused) =>
                css.j("link", "noUnderlining", isFocused ? "focused" : "")
              }
              {...TimedRouterLinkDefaultProps}
            >
              External Links
            </TimedRouterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
