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
      {/* <div className="py-3 border-gray-200 bg-primaryBgDark shadow-lg">
        <h2 className={s.gradientText}>Skills</h2>
      </div> */}

      <div className="grid grid-cols-1 mx-4 border-gray-200 border-l border-r md:grid-cols-1 lg:grid-cols-1 pt-10 pb-16 lg:pb-32 lg:pt-16">
        <div className="mt-10 lg:mt-0 md:pt-6 lg:pt-20">
          <h3 className="text-gray-800 tracking-wide px-4 text-center lg:text-lg xl:text-2xl">
            Languages
          </h3>
          <div className="grid grid-cols-3 px-4 md:grid-cols-3 grid-flow-row mt-10 lg:mt-20 gap-y-16 lg:gap-y-24 border-gray-200 lg:border-r">
            <Typescript className="h-10 w-10 mx-auto" />
            <Javascript className="h-10 w-10 rounded-md mx-auto" />
            <Java className="h-10 w-10 mx-auto" />
            <Nodejs className="h-14 w-14 pt-3 mx-auto" />
            <Html className="h-10 w-10 mx-auto" />
            <Css className="h-10 w-10 mx-auto" />
          </div>
        </div>

        <div className="mt-10 lg:mt-0 border-gray-100 border-t-2 sm:border-none pt-10">
          <h3 className="text-gray-700 tracking-wide px-4 text-center pt-10 lg:text-lg xl:text-2xl">
            Frameworks & Libraries
          </h3>
          <div className="grid grid-cols-3 px-4 md:grid-cols-3 grid-flow-row mt-10 lg:mt-20 gap-y-14 lg:gap-y-24 border-gray-200 lg:border-r">
            <Reactjs className="h-10 w-10 mx-auto" />
            <Nextjs className="h-12 w-12 mx-auto" />
            <Graphql className="h-10 w-10 mx-auto" />
            <Express className="h-14 w-14 mx-auto" />
            <Tailwind className="h-10 w-10 mx-auto" />
            <Apollo className="h-14 w-14 mx-auto" />
          </div>
        </div>
        <div className="mt-10 lg:mt-0 border-gray-100 border-t-2 sm:border-none pt-10">
          <h3 className="text-gray-700 tracking-wide px-4 text-center pt-10 lg:text-lg xl:text-2xl">
            Tools & Databases
          </h3>
          <div className="grid grid-cols-3 px-4 md:grid-cols-3 grid-flow-row mt-10 lg:mt-20 gap-y-6 lg:gap-y-16">
            <MongoDb className="h-20 w-20 mx-auto" />
            <Webpack className="h-12 w-12 mx-auto mt-4" />
            <Git className="h-16 w-16 mx-auto mt-8" />
            <Postgres className="h-10 w-10 mx-auto mt-6" />
            <AndroidStudio className="h-24 w-24 mx-auto" />
            <Github className="h-9 w-9 mx-auto mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
