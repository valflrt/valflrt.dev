import React, { useState } from "react";
import { X } from "react-feather";

import useWindowEvent from "../hooks/useWindowEvent";
import useClickOutsideEffect from "../hooks/useClickOutsideEffect";

import PageSwitchLink from "../common/PageSwitchLink";

import { css } from "../utils";

import "./Menu.scss";

const Menu = () => {
  let [isMenuVisible, setIsMenuVisible] = useState(false);
  let menuToggleRef = React.createRef<HTMLButtonElement>();
  let buttonsRef = React.createRef<HTMLDivElement>();

  useClickOutsideEffect<HTMLDivElement | HTMLButtonElement>(
    () => isMenuVisible && setIsMenuVisible(false),
    [menuToggleRef, buttonsRef]
  );

  useWindowEvent(
    "keyup",
    (e) => e.key === "Escape" && isMenuVisible && setIsMenuVisible(false)
  );

  let links = [
    {
      name: "Main",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "External Links",
      link: "/external-links",
    },
  ];

  return (
    <div className={"menuWrapperWrapper"}>
      <div className={"menuWrapper"}>
        <div className="buttons" ref={buttonsRef}>
          <button
            ref={menuToggleRef}
            className={css.j("button", isMenuVisible ? "rotated" : "")}
            onClick={() => setIsMenuVisible((os) => !os)}
            title={
              isMenuVisible
                ? "Close the menu panel"
                : "Is there something here ?"
            }
          >
            <X />
          </button>
        </div>
        <div className={css.j("menu", isMenuVisible ? "visible" : "")}>
          <div className={"links"}>
            {links.map((l, i) => (
              <PageSwitchLink
                to={l.link}
                key={i}
                className={(isFocused) =>
                  css.j("link", isFocused ? "focused" : "")
                }
                tabIndex={!isMenuVisible ? -1 : undefined}
              >
                {l.name}
              </PageSwitchLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
