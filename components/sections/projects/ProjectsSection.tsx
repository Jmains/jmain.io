import { FC } from "react";
import s from "./ProjectsSection.module.css";
import Link from "next/link";
import { Android, Eye, Github } from "@components/icons";

const ProjectsSection: FC = () => {
  return (
    <section id="projectsSection" className="pb-20">
      <div className="py-3 bg-gray-bg border-t border-gray-200 shadow-lg">
        <h2 className={s.gradientText}>Projects</h2>
      </div>
      <div className="grid grid-cols-1  justify-center mx-4 border-gray-200 border-l border-r lg:grid-cols-3 lg:pt-10 lg:pb-16 md:pt-10 md:pb-28">
        {/* Card 1 */}
        <div className="lg:px-6 lg:h-card relative md:border-r md:border-gray-200 my-16">
          {/* <img src={project.img} className="absolute z-0" alt="" /> */}

          <div>
            <div className="px-4 rounded-lg my-4 md:h-64 lg:h-56 xl:h-48">
              <h6 className="text-purple-400 font-semibold">March, 2020</h6>
              <div className="flex justify-between mt-3">
                <h4 className="text-gray-600 text-xl font-semibold border-l-4 -ml-5 lg:-ml-10 lg:pl-8 border-purple-400 px-4">
                  Contact Manager
                </h4>
                <Android className="h-6 w-6" />
              </div>

              <p className="text-gray-600 mt-5">
                An android app that mimics the functionality of a contact manager in either
                Android or iOS phones. Users can view their list of contacts sorted in
                alphabetical order, view their location, and also add, edit, and remove a
                contact from the contact list.
              </p>
            </div>
            <div className="rounded-lg p-4 max-w-4xl mx-auto my-4">
              <img
                className="object-center object-cover rounded-lg mx-auto h-56 w-96 sm:w-96 shadow-lg"
                src={projectsData[0].img}
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center p-4 space-x-3">
            <div className="px-3 py-1 rounded-full bg-purple-200 shadow-md">
              <span className="block text-purple-700 font-semibold text-sm">#Java</span>
            </div>

            <div className="px-3 py-1 rounded-full bg-purple-200 shadow-md">
              <span className="block text-purple-700 font-semibold text-sm">
                #Android Studio
              </span>
            </div>
            <div className="px-3 py-1 rounded-full bg-purple-200 shadow-md">
              <span className="block text-purple-700 font-semibold text-sm">#Sqlite</span>
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
        {/* End Card 1 */}

        {/* Card 2 */}
        <div className="lg:px-6 lg:h-card relative md:border-r md:border-gray-200 my-8">
          {/* <img src={project.img} className="absolute z-0" alt="" /> */}

          <div className="">
            <div className="px-4 rounded-lg my-4 md:h-64 lg:h-56 xl:h-48">
              <h6 className="text-purple-400 font-semibold">2018</h6>
              <div className="flex justify-between mt-3">
                <h4 className="text-gray-600 text-xl font-semibold border-l-4 -ml-5 lg:-ml-10 lg:pl-8 border-purple-400 px-4">
                  Favorite Movie App{" "}
                </h4>
                <Android className="h-6 w-6" />
              </div>

              <p className="text-gray-600 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci tellus elit, duis
                consectetur aliquam proin metus. A nulla nibh ornare diam
              </p>
            </div>
            <div className="rounded-lg p-4 max-w-4xl mx-auto my-4">
              <img
                className="object-center object-cover rounded-lg mx-auto h-56 w-96 sm:w-96 shadow-lg"
                src={projectsData[1].img}
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center p-4 space-x-3">
            <div className="px-3 py-1 rounded-full bg-purple-200 shadow-md">
              <span className="block text-purple-700 font-semibold text-sm">#AngularJS</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-purple-200 shadow-md">
              <span className="block text-purple-700 font-semibold text-sm">#TypeScript</span>
            </div>

            <div className="px-3 py-1 rounded-full bg-purple-200 shadow-md">
              <span className="block text-purple-700 font-semibold text-sm">#Firebase</span>
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
        {/* End Card 2 */}

        {/* Card 3 */}
        <div className="lg:px-6 lg:h-card relative md:border-r lg:border-r-0 md:border-gray-200 my-8">
          {/* <img src={project.img} className="absolute z-0" alt="" /> */}

          <div>
            <div className="px-4 rounded-lg my-4 md:h-64 lg:h-56 xl:h-48">
              <h6 className="text-purple-400 font-semibold">2020</h6>
              <div className="flex justify-between mt-3">
                <h4 className="text-gray-600 text-xl font-semibold border-l-4 -ml-5 lg:-ml-10 lg:pl-8 border-purple-400 px-4">
                  SpaceX Redesign{" "}
                </h4>
                <Android className="h-6 w-6" />
              </div>

              <p className="text-gray-600 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci tellus elit, duis
                consectetur aliquam proin metus. A nulla nibh ornare diam
              </p>
            </div>
            <div className="rounded-lg p-4 max-w-4xl mx-auto my-4">
              <img
                className="object-center object-cover rounded-lg mx-auto h-56 w-96 sm:w-96 shadow-lg"
                src={projectsData[2].img}
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center p-4 space-x-3">
            <div className="px-3 py-2 md:py-1 rounded-full bg-purple-200 shadow-md">
              <span className="block text-purple-700 font-semibold text-sm">#TypeScript</span>
            </div>

            <div className="px-3 py-2 md:py-1 rounded-full bg-purple-200 shadow-md">
              <span className="block text-purple-700 font-semibold text-sm">#NextJS</span>
            </div>
            <div className="px-3 py-2 md:py-1 rounded-full bg-purple-200 shadow-md">
              <span className="block text-purple-700 font-semibold text-sm">#TailwindCSS</span>
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
        {/* End Card 3 */}
      </div>
    </section>
  );
};

const projectsData = [
  {
    title: "Contact Manager",
    description:
      "An android app that mimics the functionality of a contact manager in either Android or iOS phones. Users can view their list of contacts sorted in alphabetical order, view their location, and also add, edit, and remove a contact from the contact list.",
    technologies: ["Next.js", "javascript", "html", "css", "apollo", "mongoDB"],
    img:
      "https://images.unsplash.com/photo-1554731617-8eafa9975365?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
  },
  {
    title: "Favorite Movie App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci tellus elit, duis consectetur aliquam proin metus. A nulla nibh ornare diam",
    technologies: ["Next.js", "javascript", "html", "css", "apollo", "mongoDB"],
    img:
      "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=978&q=80",
  },
  {
    title: "SpaceX Clone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci tellus elit, duis consectetur aliquam proin metus. A nulla nibh ornare diam",
    technologies: ["Next.js", "javascript", "html", "css", "apollo", "mongoDB"],
    img:
      "https://images.unsplash.com/photo-1518365050014-70fe7232897f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  },
];

export default ProjectsSection;
