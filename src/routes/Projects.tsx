import { ArrowRight } from "react-feather";

import Link from "../common/Link";

let projects = [
  {
    name: "Fencryption",
    description: "A simple cli program to encrypt/decrypt a file/directory",
    link: "https://github.com/valflrt/Fencryption",
  },
  {
    name: "Le Jardinier",
    description:
      "Simple utility discord bot made using typescript and discord.js",
    link: "https://github.com/valflrt/lejardinier",
  },
  {
    name: "react-template",
    description:
      "A simple react typescript template with webpack. Routing and css-modules implemented.",
    link: "https://github.com/valflrt/react-template",
  },
  {
    name: "This website (valflrt.dev)",
    description: "My website, made from my react-template.",
    link: "https://github.com/valflrt/valflrt.dev",
  },
];

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
          to={"https://github.com/valflrt?tab=repositories"}
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
