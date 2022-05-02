import CopyLink from "../particles/CopyLink";

const Main = () => (
  <div className={"main"}>
    <h1>Heya ! I'm valflrt !</h1>
    <ul>
      <li>A coding and self-deprecation enthusiast</li>
      <li>
        I was born at{" "}
        <CopyLink className={"link"} textToCopy={"1108087200"}>
          <code>1108087200</code>
        </CopyLink>{" "}
        (Unix Epoch)
      </li>
      <li>I'm French and proud to be (oui oui baguette)</li>
      <li>I like TypeScript and NodeJS</li>
    </ul>
  </div>
);

export default Main;
