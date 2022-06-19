import Link from "../common/Link";
import CopyLink from "../common/CopyLink";

import { css } from "../utils";
import { AtSign, GitHub } from "react-feather";

import "./ExternalLinks.scss";

const ExternalLinks = () => {
  document.title = "External Links – valflrt.dev";

  return (
    <>
      <h1>External Links</h1>
      <div className="links">
        <Link
          className={css.j("link", "underlined")}
          to={"https://gh.valflrt.dev"}
          target={"_blank"}
        >
          <GitHub /> Github account
        </Link>
        <CopyLink
          className={css.j("link", "underlined")}
          textToCopy={"valflrt#8436"}
        >
          Discord: valflrt#8436
        </CopyLink>
        <CopyLink
          className={css.j("link", "underlined")}
          textToCopy={"val@valflrt.dev"}
        >
          <AtSign /> Email: val@valflrt.dev
        </CopyLink>
      </div>
    </>
  );
};

export default ExternalLinks;
