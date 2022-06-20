import React, { useState } from "react";
import { Moon, Sun, X } from "react-feather";

import useTheme from "../hooks/useTheme";
import useClickOutsideEffect from "../hooks/useClickOutsideEffect";

import PageSwitchLink from "./PageSwitchLink";

import { css } from "../utils";

import "./Menu.scss";

const Menu = () => {
  let [theme, switchTheme] = useTheme();

  let [isMenuVisible, setIsMenuVisible] = useState(false);
  let menuToggleRef = React.createRef<HTMLButtonElement>();
  let buttonsRef = React.createRef<HTMLDivElement>();

  useClickOutsideEffect<HTMLDivElement | HTMLButtonElement>(
    () => isMenuVisible && setIsMenuVisible(false),
    [menuToggleRef, buttonsRef]
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
                ? "Close this small panel below"
                : "Is there something here ?"
            }
          >
            <X />
          </button>
          <button
            className="button"
            onClick={() => switchTheme()}
            title={
              theme === "light"
                ? "Too much light ? Try this !"
                : "You can't see anything ? Click here !"
            }
          >
            {theme === "light" ? <Moon /> : <Sun />}
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
