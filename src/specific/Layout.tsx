import React from "react";
import { Toaster } from "react-hot-toast";

import useIsMobile from "../hooks/useIsMobile";
import useIsTactile from "../hooks/useIsTactile";

import Menu from "./Menu";

import { css } from "../utils";

import "./Layout.scss";

const Layout: React.FC = ({ children }) => (
  <div
    className={css.j(
      "layout",
      useIsMobile() ? "mobile" : "desktop",
      useIsTactile() ? "tactile" : ""
    )}
  >
    <Toaster position={"top-right"} toastOptions={{ className: "toast" }} />
    {children}
    <Menu />
  </div>
);

export default Layout;
