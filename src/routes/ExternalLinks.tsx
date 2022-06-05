import Link from "../common/Link";
import CopyLink from "../common/CopyLink";

import { css } from "../utils";

const ExternalLinks = () => {
  document.title = "External Links – valflrt.dev";

  return (
    <>
      <h1>External Links</h1>
      <ul>
        <li>
          <Link
            className={css.j("link", "underlined")}
            to={"https://gh.valflrt.dev"}
            target={"_blank"}
          >
            Github account
          </Link>
        </li>
        <li>
          <CopyLink
            className={css.j("link", "underlined")}
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
