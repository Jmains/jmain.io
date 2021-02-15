import ProjectCard from "@components/ProjectCard";
import { FC } from "react";

const Projects: FC = () => {
  return (
    <section className="bg-gray-100 bg-gradient-to-b px-4 md:px-10 lg:px-16 pt-16 pb-10 text-center lg:text-left">
      <h2 className="text-pink-400 tracking-wide text-4xl font-bold">Projects.</h2>
      <div className="mt-10 lg:hidden">
        {projectsData.map((project) => {
          return (
            <div className="mt-8">
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
      <div className="mt-10 hidden lg:flex">
        {projectsData.map((project, i) => {
          return <ProjectCard key={i} project={project} />;
        })}
      </div>
    </section>
  );
};

const projectsData = [
  {
    title: "Pokedex App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci tellus elit, duis consectetur aliquam proin metus. A nulla nibh ornare diam",
    technologies: ["Next.js", "javascript", "html", "css", "apollo", "mongoDB"],
    img:
      "https://images.unsplash.com/photo-1560814322-23e126ad9e84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Pokedex App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci tellus elit, duis consectetur aliquam proin metus. A nulla nibh ornare diam",
    technologies: ["Next.js", "javascript", "html", "css", "apollo", "mongoDB"],
    img:
      "https://images.unsplash.com/photo-1560814322-23e126ad9e84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Pokedex App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci tellus elit, duis consectetur aliquam proin metus. A nulla nibh ornare diam",
    technologies: ["Next.js", "javascript", "html", "css", "apollo", "mongoDB"],
    img:
      "https://images.unsplash.com/photo-1560814322-23e126ad9e84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
];

export default Projects;
