import CopyLink from "../particles/CopyLink";

import { css } from "../utils";

const Main = () => {
  document.title = "Home – valflrt.dev";

  let divide = (x: number, y: number) => [Math.floor(x / y), x % y];

  let getElapsedTime = () => {
    let minutesQ = divide(Date.now() / 1000 - 1108087200, 60);
    let hoursQ = divide(minutesQ[0], 60);
    let daysQ = divide(hoursQ[0], 24);
    let yearsQ = divide(daysQ[0], 365);

    return `${yearsQ[0].toFixed()} years, ${yearsQ[1].toFixed()} days and ${daysQ[1].toFixed()} hours`;
  };

  return (
    <div className={"main"}>
      <h1>Heya ! I'm valflrt !</h1>
      <ul>
        <li>A coding and self-deprecation enthusiast</li>
        <li>My real name is Valentin Fleurit</li>
        <li>
          I was born at{" "}
          <CopyLink
            className={css.j("link", "noUnderlining")}
            textToCopy={"1108087200"}
          >
            <code>1108087200</code>
          </CopyLink>{" "}
          (Unix Epoch)
        </li>
        <li>I've been alive for {getElapsedTime()}</li>
        <li>I'm French and proud to be (oui oui baguette)</li>
        <li>I like TypeScript</li>
      </ul>
    </div>
  );
};

export default Main;
