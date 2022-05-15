import CopyLink from "../particles/CopyLink";

const ExternalLinks = () => {
  document.title = "External Links – valflrt.dev";

  return (
    <div className={"main"}>
      <h1>External Links</h1>
      <ul>
        <li>
          <a className={"link"} href={"https://gh.valflrt.dev"}>
            Github account
          </a>
        </li>
        <li>
          <CopyLink className={"link"} textToCopy={"valflrt#8436"}>
            Discord: valflrt#8436
          </CopyLink>
        </li>
      </ul>
    </div>
  );
};

export default ExternalLinks;
