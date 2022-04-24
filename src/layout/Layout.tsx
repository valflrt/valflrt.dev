import { FC } from "react";

import styles from "./Layout.module.scss";

const Layout: FC = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

export default Layout;
