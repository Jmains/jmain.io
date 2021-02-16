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
    <section className="p-4 lg:px-16 text-center lg:text-left">
      <h2 className="text-black text-4xl font-bold pt-10 tracking-wide">Skills.</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:text-left">
        <div className="mt-10">
          <h3 className="text-gray-500 tracking-wide">Languages</h3>
          <div className="grid grid-cols-3 md:grid-cols-3 grid-flow-row mt-6 gap-y-16">
            <Typescript className="h-10 w-10 mx-auto" />
            <Javascript className="h-10 w-10 mx-auto rounded-md" />
            <Java className="h-10 w-10 mx-auto" />
            <Nodejs className="h-14 w-14 mx-auto pt-3" />
            <Html className="h-10 w-10 mx-auto" />
            <Css className="h-10 w-10 mx-auto" />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-gray-500 tracking-wide">Frameworks & Libraries</h3>
          <div className="grid grid-cols-3 md:grid-cols-3 grid-flow-row mt-5 gap-y-6">
            <Reactjs className="h-10 w-10 mx-auto" />
            <Nextjs className="h-10 w-10 mx-auto" />
            <Graphql className="h-10 w-10 mx-auto" />
            <Express className="h-14 w-14 mx-auto" />
            <Tailwind className="h-10 w-10 mx-auto" />
            <Apollo className="h-14 w-14 mx-auto" />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-gray-500 tracking-wide">Tools & Databases</h3>
          <div className="grid grid-cols-3 md:grid-cols-3 grid-flow-row mt-5">
            {/* <Reactjs className="h-10 w-10 mx-auto" />
            <Nextjs className="h-10 w-10 mx-auto" />
            <Graphql className="h-10 w-10 mx-auto" />
            <Tailwind className="h-10 w-10 mx-auto" />
            <Apollo className="h-10 w-10 mx-auto" />
            <Express className="h-10 w-10 mx-auto" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
