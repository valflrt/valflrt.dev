export const TimedRouterLinkDefaultProps = {
  timeout: 450,
  onTimeoutStart: () =>
    document
      .querySelector("#root > .layout > .main")
      ?.classList.add("disappearing"),
};
