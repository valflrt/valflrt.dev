import Link from "../common/Link";

import { css } from "../utils";

const Projects = () => {
  document.title = "Projects – valflrt.dev";

  return (
    <>
      <h1>Some of my Projects</h1>
      <ul>
        <li>
          <Link
            className={css.j("link", "underlined")}
            to={"https://gh.valflrt.dev/lejardinier"}
          >
            Le Jardinier (discord bot)
          </Link>
        </li>
        <li>
          <Link
            className={css.j("link", "underlined")}
            to={"https://gh.valflrt.dev/react-template"}
          >
            A React template
          </Link>
        </li>
        <li>
          <Link
            className={css.j("link", "underlined")}
            to={"https://gh.valflrt.dev/encrypt-directory"}
          >
            A directory encrypting tool
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Projects;
