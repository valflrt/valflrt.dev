import React, { useState } from "react";
import { Plus } from "react-feather";

import useClickOutsideEffect from "../hooks/useClickOutsideEffect";

import PageSwitchLink from "./PageSwitchLink";

import { css } from "../utils";

import "./Menu.scss";

const Menu = () => {
  let [isMenuVisible, setIsMenuVisible] = useState(false);
  let toggleRef = React.createRef<HTMLDivElement>();

  useClickOutsideEffect<HTMLDivElement>(
    () => isMenuVisible && setIsMenuVisible(false),
    toggleRef
  );

  return (
    <div className={"menuWrapperWrapper"}>
      <div className={"menuWrapper"}>
        <div
          ref={toggleRef}
          className={css.j("toggle", isMenuVisible ? "rotated" : "")}
          onClick={() => setIsMenuVisible((s) => !s)}
        >
          <Plus />
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
