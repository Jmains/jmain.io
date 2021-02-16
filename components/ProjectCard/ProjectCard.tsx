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
    <div className="w-full bg-gradient-to-b from-pink-200 via-gray-200 to-gray-50 p-4 lg:mx-2 rounded-lg shadow-md relative hover:scale-105 hover:-translate-y-3 transform transition duration-300 ease-in-out">
      {/* <img src={project.img} className="absolute z-0" alt="" /> */}

      <div className="block ">
        <div className=" p-4 rounded-lg">
          <h4 className="text-gray-700 text-lg font-semibold">{project.title}</h4>
          <p className="text-gray-900 mt-3 leading-7 lg:text-sm">{project.description}</p>
        </div>
        <img
          className="h-48 w-54 object-center object-cover rounded-lg mx-auto shadow-md mt-8"
          src={project.img}
          alt=""
        />
      </div>

      <div className="flex mt-5 justify-around rounded-md px-5 py-3 overflow-hidden text-gray-500">
        <Reactjs className="h-6 w-6 " />
        <Javascript className="h-6 w-6" />
        <Html className="h-6 w-6" />
        <Css className="h-6 w-6" />

        {/* {project.technologies.map((tech) => {
          return <span className="mx-2">{tech}</span>;
        })} */}
      </div>
    </div>
  );
};

export default ProjectCard;
