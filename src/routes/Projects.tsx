import projects from "../assets/projects";
import Link from "../common/Link";

import { css } from "../utils";

import "./Projects.scss";

const Projects = () => {
  document.title = "Projects – valflrt.dev";

  return (
    <>
      <h1>Some of my Projects</h1>
      <div className="projects">
        {projects.map((p, i) => (
          <Link className={css.j("link")} to={p.link} target={"_blank"} key={i}>
            <div className="projectCard">
              <div className="underlined">{p.name}</div>
              <div className="description">{p.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Projects;
