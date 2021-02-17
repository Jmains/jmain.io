import { Css, Eye, Github, Html, Javascript, Reactjs } from "@components/icons";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
interface Props {
  title: string;
  description: string;
  technologies: string[];
  img: string;
}

const ProjectCard: FC<{ project: Props }> = ({ project }) => {
  return (
    <div className="w-full bg-gradient-to-br from-white via-gray-100 to-white p-4 lg:mx-2 rounded-lg shadow-md relative ">
      {/* <img src={project.img} className="absolute z-0" alt="" /> */}

      <div className="block">
        <div className="p-4 md:px-24 lg:p-4 rounded-lg">
          <h4 className="text-gray-600 text-2xl font-semibold">{project.title} </h4>
          <div className="flex justify-center lg:justify-start items-center mt-3">
            <Image
              className="object-center object-cover rounded-full shadow-md "
              src="/headshot.JPG"
              height="40"
              width="40"
            />
            <div className="ml-3">
              <span className="text-sm font-medium text-gray-700 block">Jackson Main</span>
              <span className="text-gray-500 text-xs font-light block">Oct 21, 2020</span>
            </div>
          </div>

          <p className="text-gray-600 mt-3 leading-7 lg:text-sm">{project.description}</p>
        </div>
        <div className="rounded-lg shadow-lg p-3 mt-4 md:w-80 mx-auto">
          <img
            className="object-center object-cover rounded-lg mx-auto h-56 w-full md:w-80 lg:mx-0 shadow-lg "
            src={project.img}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center lg:justify-start space-x-5 mt-6">
        <Link href="/">
          <div className="shadow-md px-4 py-1 rounded-md">
            <Github className="h-6 w-6 mx-auto" />
            <span className="block font-bold text-xs">Github</span>
          </div>
        </Link>
        <Link href="/">
          <div className="shadow-md px-5 py-1 rounded-md">
            <Eye className="h-6 w-6 fill-current text-red-500" />
            <span className="block font-bold text-xs">Live</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
