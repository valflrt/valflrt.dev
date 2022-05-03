import React from "react";
import { Toaster } from "react-hot-toast";

import useIsMobile from "../hooks/useIsMobile";

import Menu from "../components/Menu";

import { css } from "../utils";

import "./Layout.scss";

const Layout: React.FC = ({ children }) => (
  <div className={css.j("layout", useIsMobile() ? "mobile" : "desktop")}>
    <Toaster position={"top-right"} toastOptions={{ className: "toast" }} />
    {children}
    <Menu />
  </div>
);

export default Layout;
