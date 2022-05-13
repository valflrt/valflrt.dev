const Projects = () => {
  document.title = "Projects – valflrt.dev";

  return (
    <div className={"main"}>
      <h1>Some of my Projects</h1>
      <ul>
        <li>
          <a className={"link"} href={"https://gh.valflrt.dev/lejardinier"}>
            Le Jardinier (discord bot)
          </a>
        </li>
        <li>
          <a className={"link"} href={"https://gh.valflrt.dev/react-template"}>
            A React template
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
