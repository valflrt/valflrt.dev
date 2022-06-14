import CopyLink from "../common/CopyLink";

const Main = () => {
  document.title = "Home – valflrt.dev";

  let elapsedDays = (Date.now() / 1000 - 1108087200) / 60 / 60 / 24;

  return (
    <>
      <h1>Heya ! I'm valflrt !</h1>
      <ul>
        <li>A coding enthusiast</li>
        <li>My real name is Valentin Fleurit</li>
        <li>
          I was born at{" "}
          <CopyLink
            className={"link"}
            textToCopy={"1108087200"}
            title={`Alive for ${(elapsedDays / 365).toFixed()} years and ${(
              elapsedDays % 365
            ).toFixed()} days`}
          >
            <code>1108087200</code>
          </CopyLink>{" "}
          (Unix Epoch)
        </li>
        <li>I'm French and proud to be (oui oui baguette)</li>
        <li>I like TypeScript</li>
      </ul>
    </>
  );
};

export default Main;
