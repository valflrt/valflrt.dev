import { Link } from "react-router-dom";

import styles from "./Main.module.scss";

const Main = () => (
  <div className={styles.card}>
    <h1>Heya ! I'm valflrt !</h1>
    <p>
      I'm a coding and self-deprecation enthusiast ! I'm french and proud to be
      (oui oui baguette) and was born at{" "}
      <code title="This is a Unix Epoch" className={"questionCursor"}>
        1108087200
      </code>
      . I like TypeScript and NodeJS.
    </p>
    <div className={styles.links}>
      <a href="https://gh.valflrt.dev">github</a>
      <span className={styles.separator} />
      <Link to={"/nothing"}>404</Link>
    </div>
  </div>
);

export default Main;
