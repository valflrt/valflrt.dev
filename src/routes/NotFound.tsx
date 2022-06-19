import PageSwitchLink from "../specific/PageSwitchLink";

import "./NotFound.scss";

const NotFound = () => {
  document.title = "404 – valflrt.dev";

  return (
    <>
      <h1 className={"fortyHundredAndFour"}>404</h1>
      <p>There's nothing here !</p>
      <PageSwitchLink to={"/"} className={() => "link underlined"}>
        Back home
      </PageSwitchLink>
    </>
  );
};

export default NotFound;
