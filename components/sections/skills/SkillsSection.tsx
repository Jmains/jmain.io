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
  Android,
} from "@components/icons";
import { FC } from "react";
import styles from "./SkillsSection.module.css";
import { TopWaveSolid, TopWaveClear } from "@components/waves";
interface Props {}

const SkillsSection: FC<Props> = () => {
  return (
    <div className=" bg-gradient-to-bl from-white to-gray-200 w-full relative">
      <div className="absolute top-0 mx-auto">
        <TopWaveSolid className="w-screen max-h-40 -mt-1" />
      </div>
      <div className="absolute top-0 mx-auto">
        <TopWaveClear className="w-screen max-h-40" />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <section id="skillsSection">
          <div className="grid grid-cols-1 mx-4 md:grid-cols-1 lg:grid-cols-1 border-l border-r border-gray-300 md:border-none pt-16 pb-20 lg:pb-32 lg:pt-32">
            <h2 className={styles.gradientText}>Skills</h2>

            <div className="mt-16 px-4 sm:px-11">
              <h3 className="text-gray-900 tracking-wide md:text-left text-lg lg:text-2xl font-medium">
                Languages
              </h3>
              <div className="grid grid-cols-3 pl-2 sm:pl-0 lg:w-8/12 xl:w-9/12 grid-flow-row mt-10 lg:mt-20 gap-x-12 gap-y-16 lg:gap-y-24 pb-16">
                <div>
                  <Typescript className="h-10 w-10 sm:h-12 sm:w-12 shadow-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    TypeScript
                  </span>
                </div>

                <div>
                  <Javascript className="h-10 w-10 sm:h-12 sm:w-12 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    JavaScript
                  </span>
                </div>

                <div>
                  <Java className="h-10 w-10 sm:h-14 sm:w-14 p-1 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    Java
                  </span>
                </div>
                <div>
                  <Nodejs className="h-12 w-12 p-1 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    NodeJS
                  </span>
                </div>

                <div>
                  <Html className="h-12 w-12 sm:h-14 sm:w-14 p-1 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    Html
                  </span>
                </div>

                <div>
                  <Css className="h-12 w-12 sm:h-14 sm:w-14 p-1 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    CSS
                  </span>
                </div>
              </div>
            </div>

            <div className=" lg:mt-0 pt-10 px-4 sm:px-11">
              <h3 className="text-gray-800 tracking-wide md:text-left mt-8 text-lg lg:text-2xl font-medium">
                Frameworks & Libraries
              </h3>
              <div className="grid grid-cols-3 pl-2 sm:pl-0 lg:w-8/12 xl:w-9/12 grid-flow-row mt-10 lg:mt-20 gap-x-12 gap-y-14 lg:gap-y-24 pb-16">
                <div>
                  <Reactjs className="h-12 w-12 sm:h-14 sm:w-14 p-1 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    ReactJS
                  </span>
                </div>
                <div>
                  <Nextjs className="h-12 w-12 sm:h-16 sm:w-16 p-1 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    NextJS
                  </span>
                </div>
                <div>
                  <Graphql className="h-12 w-12 sm:w-14 sm:h-14 p-1 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    GraphQL
                  </span>
                </div>
                <div>
                  <Express className="h-12 w-12 sm:w-16 sm:h-16 p-1 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    ExpressJS
                  </span>
                </div>
                <div>
                  <Tailwind className="h-12 w-12 sm:w-14 sm:h-14 p-1 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    TailwindCSS
                  </span>
                </div>
                <div>
                  <Apollo className="h-12 w-12 sm:w-16 sm:h-16 p-1 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    Apollo
                  </span>
                </div>
              </div>
            </div>
            <div className=" lg:mt-0 pt-10 px-4 sm:px-11">
              <h3 className="text-gray-800 tracking-wide md:text-left mt-10 text-lg lg:text-2xl font-medium">
                Tools & Databases
              </h3>
              <div className="grid grid-cols-3 pl-2 sm:pl-0 w-full lg:w-8/12 xl:w-9/12 grid-flow-row mt-10 lg:mt-20 gap-y-14 lg:gap-y-24 gap-x-12">
                <div>
                  <MongoDb className="h-12 w-12 sm:w-14 sm:h-14 shadow-md p-1 rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    MongoDB
                  </span>
                </div>
                <div>
                  <Webpack className="h-12 w-12 sm:w-14 sm:h-14 p-1 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    Webpack
                  </span>
                </div>

                <div>
                  <Git className="h-12 w-12 sm:w-14 sm:h-14 p-1 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    Git
                  </span>
                </div>
                <div>
                  <Postgres className="h-12 w-12 sm:h-14 sm:w-14 p-1 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    Postgres
                  </span>
                </div>
                <div>
                  <Android className="h-12 w-12 sm:w-14 sm:h-14 p-1 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    Android Studio
                  </span>
                </div>
                <div>
                  <Github className="h-12 w-12 sm:h-14 sm:w-14 p-1 shadow-md rounded-md" />
                  <span className="block mt-1 font-medium text-gray-600 text-sm lg:text-base">
                    Github
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsSection;
