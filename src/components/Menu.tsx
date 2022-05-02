import TimedRouterLink from "../particles/TimedRouterLink";

import "./Menu.scss";

const Menu = () => {
  let otherLinkProps = {
    timeout: 450,
    onTimeoutStart: () =>
      document.querySelector(".main")?.classList.add("disappearing"),
    className: "link",
  };

  return (
    <div className={"menu"}>
      <TimedRouterLink to="/" {...otherLinkProps}>
        Home
      </TimedRouterLink>
      <TimedRouterLink to="/projects" {...otherLinkProps}>
        Projects
      </TimedRouterLink>
      <TimedRouterLink to="/social" {...otherLinkProps}>
        Social
      </TimedRouterLink>
    </div>
  );
};

export default Menu;
