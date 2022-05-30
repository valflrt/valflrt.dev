import CopyLink from "../common/CopyLink";

import { css } from "../utils";

const ExternalLinks = () => {
  document.title = "External Links – valflrt.dev";

  return (
    <>
      <h1>External Links</h1>
      <ul>
        <li>
          <a
            className={css.j("link", "underline")}
            href={"https://gh.valflrt.dev"}
          >
            Github account
          </a>
        </li>
        <li>
          <CopyLink
            className={css.j("link", "underline")}
            textToCopy={"valflrt#8436"}
          >
            Discord: valflrt#8436
          </CopyLink>
        </li>
      </ul>
    </>
  );
};

export default ExternalLinks;
