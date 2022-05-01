import { Link } from "react-router-dom";

import "./Menu.scss";

const Menu = () => (
  <div className={"menu"}>
    <Link className={"link"} to="/">
      Home
    </Link>
    <Link className={"link"} to="/projects">
      Projects
    </Link>
    <Link className={"link"} to="/social">
      Social
    </Link>
  </div>
);

export default Menu;
