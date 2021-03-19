import {
  ArrowDown,
  Graphql,
  Nextjs,
  Reactjs,
  Tailwind,
  Apollo,
  Express,
  Typescript,
  Javascript,
  Java,
  Nodejs,
  Html,
  Css,
  MongoDb,
  Webpack,
  Github,
  Git,
  Postgres,
  AndroidStudio,
} from "@components/icons";
import { FC } from "react";
import s from "./SkillsSection.module.css";
interface Props {}

const SkillsSection: FC<Props> = () => {
  return (
    <section id="skillsSection">
      <div className="grid grid-cols-1 mx-4 md:grid-cols-1 lg:grid-cols-1 border-l border-r border-gray-200 md:border-none pt-10 pb-16 lg:pb-32 lg:pt-16">
        <h2 className={s.gradientText}>Skills</h2>
        <div className="mt-16 px-4 sm:px-11">
          <h3 className="text-gray-800 tracking-wide md:text-left sm:text-lg lg:text-2xl font-medium">
            Languages
          </h3>
          <div className="grid grid-cols-3 pl-2 sm:pl-0 md:w-1/2 lg:w-8/12 xl:w-9/12 grid-flow-row mt-10 lg:mt-20 gap-x-12 gap-y-16 lg:gap-y-24 pb-16">
            <Typescript className="h-10 w-10" />
            <Javascript className="h-10 w-10 rounded-md" />
            <Java className="h-10 w-10" />
            <Nodejs className="h-14 w-14 pt-3" />
            <Html className="h-10 w-10" />
            <Css className="h-10 w-10" />
          </div>
        </div>

        <div className=" lg:mt-0 pt-10 px-4 sm:px-11">
          <h3 className="text-gray-800 tracking-wide md:text-left mt-10 sm:text-lg lg:text-2xl font-medium">
            Frameworks & Libraries
          </h3>
          <div className="grid grid-cols-3 pl-2 sm:pl-0 md:w-1/2 lg:w-8/12 xl:w-9/12 grid-flow-row mt-10 lg:mt-20 gap-x-12 gap-y-14 lg:gap-y-24 pb-16">
            <Reactjs className="h-10 w-10" />
            <Nextjs className="h-12 w-12" />
            <Graphql className="h-10 w-10" />
            <Express className="h-14 w-14" />
            <Tailwind className="h-10 w-10" />
            <Apollo className="h-14 w-14" />
          </div>
        </div>
        <div className=" lg:mt-0 pt-10 px-4 sm:px-11">
          <h3 className="text-gray-800 tracking-wide md:text-left mt-10 sm:text-lg lg:text-2xl font-medium">
            Tools & Databases
          </h3>
          <div className="grid grid-cols-3 pl-2 sm:pl-0 w-full md:w-1/2 lg:w-8/12 xl:w-9/12 grid-flow-row mt-10 lg:mt-20 gap-y-6 gap-x-12">
            <MongoDb className="h-20 w-20" />
            <Webpack className="h-12 w-12 ml-3 mt-4" />
            <Git className="h-16 w-16 mt-8" />
            <Postgres className="h-10 w-10 mt-6" />
            <AndroidStudio className="h-24 w-24 -ml-3" />
            <Github className="h-9 w-9 mt-6 ml-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
