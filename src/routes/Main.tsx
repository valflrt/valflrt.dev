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
      <span>discord: valflrt#8436</span>
      <span className={styles.separator} />
      <a href="https://gh.valflrt.dev/lejardinier">
        Le Jardinier (discord bot)
      </a>
      <span className={styles.separator} />
      <a href="https://gh.valflrt.dev/react-template">My React template</a>
    </div>
  </div>
);

export default Main;
