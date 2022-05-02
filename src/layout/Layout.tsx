import React from "react";
import { Toaster } from "react-hot-toast";

import Menu from "../components/Menu";

import { css, isMobile } from "../utils";

import "./Layout.scss";

const Layout: React.FC = ({ children }) => (
  <div className={css.j("layout", isMobile() ? "mobile" : "desktop")}>
    <Toaster position={"top-right"} toastOptions={{ className: "toast" }} />
    {children}
    <Menu />
  </div>
);

export default Layout;
