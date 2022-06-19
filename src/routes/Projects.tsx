import { ArrowRight } from "react-feather";

import projects from "../assets/projects";
import Link from "../common/Link";

import "./Projects.scss";

const Projects = () => {
  document.title = "Projects – valflrt.dev";

  return (
    <div className={"main projects"}>
      <h1>Some of my Projects</h1>
      <div className="list">
        {projects.map((p, i) => (
          <Link className={"link item"} to={p.link} target={"_blank"} key={i}>
            <div className="card">
              <div className="underlined">{p.name}</div>
              <div className="description">{p.description}</div>
            </div>
          </Link>
        ))}
        <Link
          to={"https://gh.valflrt.dev?tab=repositories"}
          target={"_blank"}
          className={"link item"}
        >
          <div className={"more underlined"}>
            See more on github
            <ArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
