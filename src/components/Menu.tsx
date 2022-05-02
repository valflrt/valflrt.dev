import TimedRouterLink from "../particles/TimedRouterLink";

import "./Menu.scss";

const Menu = () => {
  let timeout = 450;
  let onTimeoutStart = () =>
    document.querySelector(".main")?.classList.add("disappearing");

  return (
    <div className={"menu"}>
      <TimedRouterLink
        to="/"
        timeout={timeout}
        onTimeoutStart={onTimeoutStart}
        className={"link"}
      >
        Home
      </TimedRouterLink>
      <TimedRouterLink
        to="/projects"
        timeout={timeout}
        onTimeoutStart={onTimeoutStart}
        className={"link"}
      >
        Projects
      </TimedRouterLink>
      <TimedRouterLink
        to="/social"
        timeout={timeout}
        onTimeoutStart={onTimeoutStart}
        className={"link"}
      >
        Social
      </TimedRouterLink>
    </div>
  );
};

export default Menu;
