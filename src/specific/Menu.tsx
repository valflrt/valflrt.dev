import React, { useState } from "react";
import { ChevronLeft } from "react-feather";

import useClickOutsideEffect from "../hooks/useClickOutsideEffect";

import PageSwitchLink from "./PageSwitchLink";

import { css } from "../utils";

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
