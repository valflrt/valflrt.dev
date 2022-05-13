import CopyLink from "../particles/CopyLink";

const Social = () => {
  document.title = "Social – valflrt.dev";

  return (
    <div className={"main"}>
      <h1>Social Links</h1>
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

export default Social;
