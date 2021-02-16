import { Css, Html, Javascript, Reactjs } from "@components/icons";
import { FC } from "react";

interface Props {
  title: string;
  description: string;
  technologies: string[];
  img: string;
}

const ProjectCard: FC<{ project: Props }> = ({ project }) => {
  return (
    <div className="w-full bg-gradient-to-br from-white via-gray-200 to-gray-200 p-4 lg:mx-2 rounded-lg shadow-md relative ">
      {/* <img src={project.img} className="absolute z-0" alt="" /> */}

      <div className="block ">
        <div className=" p-4 rounded-lg">
          <h4 className="text-gray-700 text-lg font-semibold">{project.title}</h4>
          <p className="text-gray-900 mt-3 leading-7 lg:text-sm">{project.description}</p>
        </div>
        <div className="rounded-lg shadow-lg p-3 mt-4">
          <img
            className="object-center object-cover rounded-lg mx-auto h-56 w-full lg:mx-0 shadow-lg "
            src={project.img}
            alt=""
          />
        </div>
      </div>

      <div className="flex mt-5 justify-around space-x-5 rounded-md px-5 py-3 overflow-hidden text-gray-500">
        <Reactjs className="h-12 px-2 py-1 rounded-lg w-12 shadow-md bg-gray-200" />
        <Javascript className="h-12 px-2 py-1 rounded-lg w-12 shadow-md" />
        <Html className="h-12 px-2 py-1 rounded-lg w-12 shadow-md" />
        <Css className="h-12 px-2 py-1 rounded-lg w-12 shadow-md" />

        {/* {project.technologies.map((tech) => {
          return <span className="mx-2">{tech}</span>;
        })} */}
      </div>
    </div>
  );
};

export default ProjectCard;
