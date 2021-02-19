import { FC } from "react";
import s from "./ProjectsSection.module.css";
import Link from "next/link";
import { Android, Eye, Github } from "@components/icons";

const ProjectsSection: FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="py-3 border-l border-r border-gray-200 bg-gray-bg shadow-lg">
        <h2 className={s.gradientText}>Projects.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center mx-4 border-gray-200 border-l border-r lg:grid-cols-3 pb-10">
        {/* Card 1 */}
        <div className="xl:h-card lg:h-card relative md:border-r md:border-gray-200 my-8">
          {/* <img src={project.img} className="absolute z-0" alt="" /> */}

          <div className="">
            <div className="p-4 rounded-lg my-4 md:h-64 lg:h-56 xl:h-48">
              <h6 className="text-projectBlue font-semibold text-lg">2019</h6>
              <div className="flex justify-between items-center mt-3">
                <h4 className="text-gray-600 text-2xl font-semibold">Contact Manager</h4>
                <Android className="h-7 w-7" />
              </div>

              <p className="text-gray-500  leading-7 border-l-4 -ml-5 border-projectBlue px-4 lg:text-sm mt-5">
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
        <div className="xl:h-card lg:h-card relative md:border-r md:border-gray-200 my-8">
          {/* <img src={project.img} className="absolute z-0" alt="" /> */}

          <div className="">
            <div className="p-4 rounded-lg my-4 md:h-64 lg:h-56 xl:h-48">
              <h6 className="text-projectBlue font-semibold text-lg">2018</h6>
              <div className="flex justify-between items-center mt-3">
                <h4 className="text-gray-600 text-2xl font-semibold">Favorite Movie App </h4>
                <Android className="h-7 w-7" />
              </div>

              <p className="text-gray-500  leading-7 border-l-4 -ml-5 border-projectBlue px-4 mt-5 lg:text-sm">
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
        <div className="xl:h-card lg:h-card relative md:border-r md:border-gray-200 my-8">
          {/* <img src={project.img} className="absolute z-0" alt="" /> */}

          <div className="">
            <div className="p-4 rounded-lg my-4 md:h-64 lg:h-56 xl:h-48">
              <h6 className="text-projectBlue font-semibold text-lg">2020</h6>
              <div className="flex justify-between items-center mt-3">
                <h4 className="text-gray-600 text-2xl font-semibold">SpaceX Redesign </h4>
                <Android className="h-7 w-7" />
              </div>

              <p className="text-gray-500 leading-7 border-l-4 -ml-5 border-projectBlue px-4 mt-5 lg:text-sm">
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
