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
      <div className="py-3 border-gray-200 bg-gray-bg shadow-lg">
        <h2 className={s.gradientText}>Skills</h2>
      </div>

      <div className="grid grid-cols-1 mx-4 border-gray-200 border-l border-r md:grid-cols-1 lg:grid-cols-3 pt-10 pb-16 lg:pt- lg:pb-20">
        <div className="mt-10 md:pt-6">
          <h3 className="text-gray-700 tracking-wide px-4 text-center lg:text-lg">
            Languages
          </h3>
          <div className="grid grid-cols-3 px-4 md:grid-cols-3 grid-flow-row mt-10 gap-y-16 border-gray-200 lg:border-r">
            <Typescript className="h-10 w-10 mx-auto" />
            <Javascript className="h-10 w-10 rounded-md mx-auto" />
            <Java className="h-10 w-10 mx-auto" />
            <Nodejs className="h-14 w-14 pt-3 mx-auto" />
            <Html className="h-10 w-10 mx-auto" />
            <Css className="h-10 w-10 mx-auto" />
          </div>
        </div>

        <div className="mt-10 lg:mt-0 border-gray-100 border-t-2 sm:border-none pt-10">
          <h3 className="text-gray-700 tracking-wide px-4 text-center pt-10 lg:text-lg">
            Frameworks & Libraries
          </h3>
          <div className="grid grid-cols-3 px-4 md:grid-cols-3 grid-flow-row mt-10 gap-y-14 border-gray-200 lg:border-r">
            <Reactjs className="h-10 w-10 mx-auto" />
            <Nextjs className="h-12 w-12 mx-auto" />
            <Graphql className="h-10 w-10 mx-auto" />
            <Express className="h-14 w-14 mx-auto" />
            <Tailwind className="h-10 w-10 mx-auto" />
            <Apollo className="h-14 w-14 mx-auto" />
          </div>
        </div>
        <div className="mt-10 lg:mt-0 border-gray-100 border-t-2 sm:border-none pt-10">
          <h3 className="text-gray-700 tracking-wide px-4 text-center pt-10 lg:text-lg">
            Tools & Databases
          </h3>
          <div className="grid grid-cols-3 px-4 md:grid-cols-3 grid-flow-row mt-10 lg:mt-5 gap-y-6">
            <MongoDb className="h-20 w-20 mx-auto" />
            <Webpack className="h-12 w-12 mx-auto mt-4" />
            <Github className="h-9 w-9 mx-auto mt-5" />
            <Postgres className="h-10 w-10 mx-auto mt-6" />
            <AndroidStudio className="h-24 w-24 mx-auto" />
            <Git className="h-16 w-16 mx-auto mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
