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
  let menuToggleRef = React.createRef<HTMLDivElement>();

  useClickOutsideEffect<HTMLDivElement>(
    () => isMenuVisible && setIsMenuVisible(false),
    [menuToggleRef]
  );

  return (
    <div className={"menuWrapperWrapper"}>
      <div className={"menuWrapper"}>
        <div className="buttons">
          <div
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
          </div>
          <div
            className="button"
            onClick={() => switchTheme()}
            title={
              theme === "light"
                ? "Too much light ? Try this !"
                : "You can't see anything ? Click here !"
            }
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </div>
        </div>
        <div className={css.j("menu", isMenuVisible ? "visible" : "")}>
          <div className={"links"}>
            <PageSwitchLink to={"/"}>Main</PageSwitchLink>
            <PageSwitchLink to={"/projects"}>Projects</PageSwitchLink>
            <PageSwitchLink to={"/external-links"}>
              External Links
            </PageSwitchLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
