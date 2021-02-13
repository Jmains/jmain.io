import { FC } from "react";

interface Props {
  title: string;
  description: string;
  technologies: string[];
  img: string;
}

const ProjectCard: FC<{ project: Props }> = ({ project }) => {
  return (
    <div className="w-full">
      <h4 className="text-gray-800 text-lg font-semibold">{project.title}</h4>
      <p className="text-gray-700 mt-3 leading-7">{project.description}</p>
      <img
        className="h-48 w-54 object-center object-cover rounded-lg mx-auto shadow-md mt-8"
        src={project.img}
        alt=""
      />
      <div className="flex mt-5 bg-gray-100 rounded-md px-5 py-3 overflow-hidden text-gray-600">
        {project.technologies.map((tech) => {
          return <span className="mx-2">{tech}</span>;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
