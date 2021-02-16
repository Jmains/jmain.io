import { FC } from "react";

interface Props {
  title: string;
  description: string;
  technologies: string[];
  img: string;
}

const ProjectCard: FC<{ project: Props }> = ({ project }) => {
  return (
    <div className="w-full bg-white p-4 lg:mx-2 rounded-lg shadow-md">
      <div className="block ">
        <div className=" bg-white p-4 rounded-lg">
          <h4 className="text-gray-800 text-lg font-semibold">{project.title}</h4>
          <p className="text-gray-700 mt-3 leading-7 lg:text-sm">{project.description}</p>
        </div>
        <img
          className="h-48 w-54 object-center object-cover rounded-lg mx-auto shadow-md mt-8"
          src={project.img}
          alt=""
        />
      </div>

      <div className="flex mt-5 bg-white rounded-md px-5 py-3 overflow-hidden text-gray-600">
        {project.technologies.map((tech) => {
          return <span className="mx-2">{tech}</span>;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
