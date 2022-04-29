import CopyLink from "../components/CopyLink";
import styles from "./Main.module.scss";

const Main = () => (
  <div className={styles.card}>
    <h1>Heya ! I'm valflrt !</h1>
    <ul>
      <li>A coding and self-deprecation enthusiast</li>
      <li>
        I was born at <code>1108087200</code> (Unix Epoch)
      </li>
      <li>I'm French and proud to be (oui oui baguette)</li>
      <li>I like to use TypeScript and NodeJS</li>
    </ul>
    <div className={styles.links}>
      <a className={"link"} href="https://gh.valflrt.dev">
        github
      </a>
      <span className={styles.separator} />
      <CopyLink className={"link"} textToCopy="valflrt#8436">
        discord: valflrt#8436
      </CopyLink>
      <span className={styles.separator} />
      <a className={"link"} href="https://gh.valflrt.dev/lejardinier">
        Le Jardinier (discord bot)
      </a>
      <span className={styles.separator} />
      <a className={"link"} href="https://gh.valflrt.dev/react-template">
        My React template
      </a>
    </div>
  </div>
);

export default Main;
