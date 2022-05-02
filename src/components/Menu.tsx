import TimedRouterLink from "../particles/TimedRouterLink";

import "./Menu.scss";

const Menu = () => {
  let otherLinkProps = {
    timeout: 450,
    onTimeoutStart: () =>
      document
        .querySelector("#root > .layout > .main")
        ?.classList.add("disappearing"),
    className: "link",
  };

  return (
    <div className={"menuWrapper"}>
      <div className={"menu"}>
        <div className={"links"}>
          <TimedRouterLink to={"/"} {...otherLinkProps}>
            Home
          </TimedRouterLink>
          <TimedRouterLink to={"/projects"} {...otherLinkProps}>
            Projects
          </TimedRouterLink>
          <TimedRouterLink to={"/social"} {...otherLinkProps}>
            Social
          </TimedRouterLink>
        </div>
      </div>
    </div>
  );
};

export default Menu;
