import TimedRouterLink from "../particles/TimedRouterLink";

import "./NotFound.scss";

const NotFound = () => {
  document.title = "404 – valflrt.dev";

  return (
    <div className={"main"}>
      <h1 className={"fortyHundredAndFour"}>404</h1>
      <p>There's nothing here !</p>
      <TimedRouterLink
        className={"link"}
        to={"/"}
        timeout={450}
        onTimeoutStart={() =>
          document
            .querySelector("#root > .layout > .main")
            ?.classList.add("disappearing")
        }
      >
        Back home
      </TimedRouterLink>
    </div>
  );
};

export default NotFound;
