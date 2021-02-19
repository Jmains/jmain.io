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
} from "@components/icons";
import { FC } from "react";
interface Props {}

const SkillsSection: FC<Props> = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="py-3 border-l border-r border-gray-200 bg-gray-bg shadow-lg">
        <h2 className="px-4 tracking-wide text-purple-300 text-center text-3xl font-semibold uppercase">
          Skills.
        </h2>
      </div>

      <div className="grid grid-cols-1 mx-4 border-gray-200 border-l border-r md:grid-cols-2 lg:grid-cols-3 pb-16">
        <div className="mt-10">
          <h3 className="text-gray-700 tracking-wide px-4 text-center">Languages</h3>
          <div className="grid grid-cols-3 px-4 md:grid-cols-3 grid-flow-row mt-10 gap-y-16 border-gray-200 md:border-r">
            <Typescript className="h-10 w-10 mx-auto" />
            <Javascript className="h-10 w-10 rounded-md mx-auto" />
            <Java className="h-10 w-10 mx-auto" />
            <Nodejs className="h-14 w-14 pt-3 mx-auto" />
            <Html className="h-10 w-10 mx-auto" />
            <Css className="h-10 w-10 mx-auto" />
          </div>
        </div>

        <div className="mt-10 lg:mt-0 border-gray-100 border-t-2 sm:border-none">
          <h3 className="text-gray-700 tracking-wide px-4 text-center pt-10">
            Frameworks & Libraries
          </h3>
          <div className="grid grid-cols-3 px-4 md:grid-cols-3 grid-flow-row mt-10 gap-y-14 border-gray-200 md:border-r">
            <Reactjs className="h-10 w-10 mx-auto" />
            <Nextjs className="h-12 w-12 mx-auto" />
            <Graphql className="h-10 w-10 mx-auto" />
            <Express className="h-14 w-14 mx-auto" />
            <Tailwind className="h-10 w-10 mx-auto" />
            <Apollo className="h-14 w-14 mx-auto" />
          </div>
        </div>
        <div className="mt-10 lg:mt-0 border-gray-100 border-t-2 sm:border-none">
          <h3 className="text-gray-700 tracking-wide px-4 text-center pt-10">
            Frameworks & Libraries
          </h3>
          <div className="grid grid-cols-3 px-4 md:grid-cols-3 grid-flow-row mt-10 gap-y-14">
            <Reactjs className="h-10 w-10 mx-auto" />
            <Nextjs className="h-12 w-12 mx-auto" />
            <Graphql className="h-10 w-10 mx-auto" />
            <Express className="h-14 w-14 mx-auto" />
            <Tailwind className="h-10 w-10 mx-auto" />
            <Apollo className="h-14 w-14 mx-auto" />
          </div>
        </div>

        {/* <div className="mt-10">
          <h3 className="text-gray-700 tracking-wide px-4">Tools & Databases</h3>
          <div className="grid grid-cols-3 md:grid-cols-3 grid-flow-row mt-5">
            <Reactjs className="h-10 w-10 " />
            <Nextjs className="h-10 w-10 " />
            <Graphql className="h-10 w-10 " />
            <Tailwind className="h-10 w-10 " />
            <Apollo className="h-10 w-10 " />
            <Express className="h-10 w-10 " />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;