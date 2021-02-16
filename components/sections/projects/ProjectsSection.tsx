import ProjectCard from "@components/ProjectCard";
import { FC } from "react";

const ProjectsSection: FC = () => {
  return (
    <section className="bg-gray-bg bg-gradient-to-b p-4 md:px-10 lg:px-16 pt-10 pb-10 text-center shadow-md lg:text-left">
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
    title: "Contact Manager Android",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci tellus elit, duis consectetur aliquam proin metus. A nulla nibh ornare diam",
    technologies: ["Next.js", "javascript", "html", "css", "apollo", "mongoDB"],
    img:
      "https://images.unsplash.com/photo-1554731617-8eafa9975365?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
  },
  {
    title: "Favorite Movie App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci tellus elit, duis consectetur aliquam proin metus. A nulla nibh ornare diam",
    technologies: ["Next.js", "javascript", "html", "css", "apollo", "mongoDB"],
    img:
      "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=978&q=80",
  },
  {
    title: "SpaceX Clone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci tellus elit, duis consectetur aliquam proin metus. A nulla nibh ornare diam",
    technologies: ["Next.js", "javascript", "html", "css", "apollo", "mongoDB"],
    img:
      "https://images.unsplash.com/photo-1518365050014-70fe7232897f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  },
];

export default ProjectsSection;
