import { FC, useEffect, useRef, useState } from "react";
import s from "./ProjectsSection.module.css";
import Link from "next/link";
import { Android, Eye, Github } from "@components/icons";
import { FadeInElementWhenInViewPort } from "@utils/FadeInElementWhenInViewPort";

const ProjectsSection: FC = () => {
  return (
    <section id="projectsSection">
      <h2 className={s.gradientText}>Projects</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 grid-flow-row justify-center md:border-none mx-4 pb-20 md:pt-10 md:pb-32 lg:pt-10 lg:pb-48">
        {/* Card 1 */}
        {/* <FadeInElementWhenInViewPort> */}
        <div className="lg:px-6 lg:col-span-11 lg:row-span-1 relative mt-20">
          <div className="md:flex block">
            <div className="px-4 lg:px-0 md:w-1/2 my-4">
              <h6 className="text-primaryLight font-semibold md:pl-5 lg:pl-7 xl:text-lg">
                March, 2020
              </h6>
              <div className="flex justify-between mt-3">
                <h4 className="text-gray-200 text-xl xl:text-2xl font-semibold border-l-4 -ml-5 lg:-ml-1 md:pl-9 lg:pl-6 border-primaryLight px-4">
                  Contact Manager
                </h4>
                <Android className="h-6 w-6" />
              </div>

              <p className="text-gray-400 mt-5 md:pl-5 lg:pl-7 lg:text-lg xl:leading-9">
                An android app that mimics the functionality of a contact manager in either
                Android or iOS phones. Users can view their list of contacts sorted in
                alphabetical order, view their location, and also add, edit, and remove a
                contact from the contact list.
              </p>

              <div className="block md:hidden rounded-lg mt-9 mx-auto ">
                <img
                  className="object-center object-cover rounded-lg w-full h-56 sm:h-80 shadow-xl"
                  src={projectsData[0].img}
                  alt=""
                />
              </div>
              {/* Start Technologies used section */}
              <div className="flex items-center mt-10 space-x-3 md:pl-4 lg:ml-7 lg:p-0">
                <div className="px-3 py-1 rounded-full bg-darkGray shadow-md">
                  <span className="block text-purple-300 font-semibold text-sm">#Java</span>
                </div>

                <div className="px-3 py-1 rounded-full bg-darkGray shadow-md">
                  <span className="block text-purple-300 font-semibold text-sm">
                    #Android Studio
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-darkGray shadow-md">
                  <span className="block text-purple-300 font-semibold text-sm">#Sqlite</span>
                </div>
              </div>
              {/* End Technologies used section */}
              {/* Start Project Links */}
              <div className="flex justify-center md:justify-start p-4 space-x-10 mt-8">
                <Link href="/">
                  <div className="shadow-md px-4 py-1 text-gray-400 rounded-md">
                    <Github className="h-6 w-6 mx-auto fill-current" />
                    <span className="block font-bold text-xs mt-1">Github</span>
                  </div>
                </Link>
                <Link href="/">
                  <div className="shadow-md px-5 py-1 rounded-md">
                    <Eye className="h-6 w-6 fill-current text-red-500" />
                    <span className="block font-bold text-xs text-gray-400 mt-1">Live</span>
                  </div>
                </Link>
              </div>
              {/* End Project Links */}
            </div>

            <div className="hidden md:block rounded-lg p-7 mx-auto">
              <img
                className="object-center object-cover rounded-lg mx-auto h-56 w-96 lg:h-64 shadow-xl"
                src={projectsData[0].img}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* </FadeInElementWhenInViewPort> */}
        {/* End Card 1 */}

        {/* Card 2 */}
        {/* <FadeInElementWhenInViewPort> */}
        <div className="lg:pr-6 lg:col-span-11 relative mt-20 lg:mt-28">
          <div>
            <div className="md:flex block">
              <div className="hidden md:block rounded-lg pt-6 xl:pr-10 mx-auto">
                <img
                  className="object-center object-cover rounded-lg mx-auto h-56 w-96 lg:h-64 shadow-xl"
                  src={projectsData[1].img}
                  alt=""
                />
              </div>
              <div className="px-4 lg:px-0  md:w-1/2 my-4">
                <h6 className="text-primaryLight font-semibold md:pl-5 lg:pl-7 xl:text-lg">
                  May, 2019
                </h6>
                <div className="flex justify-between mt-3">
                  <h4 className="text-gray-200 text-xl xl:text-2xl font-semibold border-l-4 -ml-5 lg:-ml-1 md:pl-9 lg:pl-6 border-primaryLight px-4">
                    Favorite Movie Collection
                  </h4>
                  <Android className="h-6 w-6" />
                </div>

                <p className="text-gray-400 mt-5 md:pl-5 lg:pl-7 lg:text-lg xl:leading-9">
                  A web app to store your own personal favorite movie collection. User's can
                  rate of 5 and write a short description about why they liked the movie.
                  Movies can be created, updated, and deleted.
                </p>

                <div className="block md:hidden rounded-lg mt-9 mx-auto">
                  <img
                    className="object-center object-cover rounded-lg w-full h-56 sm:h-80 shadow-xl"
                    src={projectsData[1].img}
                    alt=""
                  />
                </div>

                <div className="flex items-center mt-10 space-x-3 md:pl-4 lg:ml-7 lg:p-0">
                  <div className="px-3 py-1 rounded-full bg-darkGray shadow-md">
                    <span className="block text-purple-300 font-semibold text-sm">
                      #Angular
                    </span>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-darkGray shadow-md">
                    <span className="block text-purple-300 font-semibold text-sm">
                      #TypeScript
                    </span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-darkGray shadow-md">
                    <span className="block text-purple-300 font-semibold text-sm">
                      #Firebase
                    </span>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start p-4 space-x-10 mt-8">
                  <Link href="/">
                    <div className="shadow-md px-4 py-1 text-gray-400 rounded-md">
                      <Github className="h-6 w-6 mx-auto fill-current" />
                      <span className="block font-bold text-xs mt-1">Github</span>
                    </div>
                  </Link>
                  <Link href="/">
                    <div className="shadow-md px-5 py-1 rounded-md">
                      <Eye className="h-6 w-6 fill-current text-red-500" />
                      <span className="block font-bold text-xs text-gray-400 mt-1">Live</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </FadeInElementWhenInViewPort> */}
        {/* End Card 2 */}

        {/* Card 3 */}
        {/* <FadeInElementWhenInViewPort> */}
        <div className="lg:px-6 lg:col-span-11 relative mt-20 lg:mt-32">
          <div>
            <div className="md:flex block">
              <div className="px-4 lg:px-0 md:w-1/2 my-4">
                <h6 className="text-primaryLight font-semibold md:pl-5 lg:pl-7 xl:text-lg">
                  April, 2021
                </h6>
                <div className="flex justify-between mt-3">
                  <h4 className="text-gray-200 text-xl xl:text-2xl font-semibold border-l-4 -ml-5 lg:-ml-1 md:pl-9 lg:pl-6 border-primaryLight px-4">
                    SpaceX Redesign
                  </h4>
                  <Android className="h-6 w-6" />
                </div>

                <p className="text-gray-400 mt-5 md:pl-5 lg:pl-7 lg:text-lg xl:leading-9">
                  A web app to store your own personal favorite movie collection. User's can
                  rate of 5 and write a short description about why they liked the movie.
                  Movies can be created, updated, and deleted.
                </p>

                <div className="block md:hidden rounded-lg mt-9 mx-auto">
                  <img
                    className="object-center object-cover rounded-lg w-full h-56 sm:h-80 shadow-xl"
                    src={projectsData[2].img}
                    alt=""
                  />
                </div>

                <div className="flex items-center mt-10 space-x-3 md:pl-4 lg:ml-7 lg:p-0">
                  <div className="px-3 py-1 rounded-full bg-darkGray shadow-md">
                    <span className="block text-purple-300 font-semibold text-sm">
                      #TypeScript
                    </span>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-darkGray shadow-md">
                    <span className="block text-purple-300 font-semibold text-sm">
                      #NextJS
                    </span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-darkGray shadow-md">
                    <span className="block text-purple-300 font-semibold text-sm">
                      #TailwindCSS
                    </span>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start p-4 space-x-10 mt-8">
                  <Link href="/">
                    <div className="shadow-md px-4 py-1 text-gray-400 rounded-md">
                      <Github className="h-6 w-6 mx-auto fill-current" />
                      <span className="block font-bold text-xs mt-1">Github</span>
                    </div>
                  </Link>
                  <Link href="/">
                    <div className="shadow-md px-5 py-1 rounded-md">
                      <Eye className="h-6 w-6 fill-current text-red-500" />
                      <span className="block font-bold text-xs text-gray-400 mt-1">Live</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block rounded-lg p-7 max-w-4xl mx-auto">
                <img
                  className="object-center object-cover rounded-lg mx-auto h-56 w-96 lg:h-64 shadow-xl"
                  src={projectsData[2].img}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* </FadeInElementWhenInViewPort> */}
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
