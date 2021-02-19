import { Android, Css, Eye, Github, Html, Javascript, Reactjs } from "@components/icons";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
interface Props {
  title: string;
  description: string;
  technologies: string[];
  img: string;
}

// bg-gradient-to-br from-white via-gray-100 to-white shadow-md
const ProjectCard: FC<{ project: Props }> = ({ project }) => {
  return (
    <div className="xl:h-card lg:h-card relative md:border-r md:border-gray-200 my-5">
      {/* <img src={project.img} className="absolute z-0" alt="" /> */}

      <div className="">
        <div className="p-4 rounded-lg my-4 md:h-64 lg:h-56 xl:h-48">
          <div className="flex justify-between items-center">
            <h4 className="text-gray-600 text-2xl font-semibold">{project.title} </h4>
            <Android className="h-7 w-7" />
          </div>
          {/* <div className="flex justify-center lg:justify-start items-center mt-3">
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
          </div> */}
          <h5 className="text-gray-600 md:leading-7 font-semibold border-l-4 -ml-5 border-projectBlue px-4 my-2">
            What?
          </h5>
          <p className="text-gray-500  leading-7 lg:text-sm">{project.description}</p>
        </div>
        <div className="rounded-lg p-4 max-w-4xl mx-auto my-4">
          <img
            className="object-center object-cover rounded-lg mx-auto h-56 w-96 sm:w-96 shadow-lg"
            src={project.img}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center space-x-10 mt-6">
        <Link href="/">
          <div className="shadow-md px-4 py-1 text-gray-500 rounded-md">
            <Github className="h-6 w-6 mx-auto fill-current" />
            <span className="block font-bold text-xs mt-1">Github</span>
          </div>
        </Link>
        <Link href="/">
          <div className="shadow-md px-5 py-1 rounded-md">
            <Eye className="h-6 w-6 fill-current text-red-500" />
            <span className="block font-bold text-xs text-gray-500 mt-1">Live</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
