import { FC, useEffect, useRef, useState } from "react";
import s from "./ProjectsSection.module.css";
import Link from "next/link";
import { Android, Eye, Github, Globe } from "@components/icons";
import { FadeInElementWhenInViewPort } from "@utils/FadeInElementWhenInViewPort";
import lozad from "lozad";

const ProjectsSection: FC = () => {
  useEffect(() => {
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();
  });

  return (
    <div className="bg-primaryBgDark w-full relative">
      <img
        className="top-0 right-0 absolute md:w-48 md:mt-10 xl:w-4/12 md:mr-16 xl:mr-32 max-h-full mt-20 hidden md:block"
        src="/projectillustration.svg"
        alt="project illustration"
      />
      <div className="max-w-screen-xl mx-auto">
        <section id="projectsSection">
          <div className="grid grid-cols-1 lg:grid-cols-12 grid-flow-row border-l border-r border-gray-800 md:border-none justify-center mx-4 pb-20 md:pt-10 md:pb-32 lg:pt-10 lg:pb-48">
            <h2 className={s.gradientText}>Projects</h2>
            {/* Card 1 */}
            <div className="lg:px-10 lg:col-span-12 lg:row-span-1 relative mt-20">
              <FadeInElementWhenInViewPort fadeInDirection="translate-x-24 md:translate-x-48 lg:translate-x-80">
                <div className="md:flex block">
                  <div className="px-4 lg:px-0 md:w-1/2 my-4 md:pl-10">
                    <span className="block text-primaryLight font-semibold xl:text-lg">
                      Currently Working On
                    </span>
                    <div className="flex justify-between mt-3">
                      <h4 className="text-gray-200 text-xl xl:text-2xl font-semibold border-l-4 -ml-5 md:-ml-0 border-primaryLight md:border-none px-4 md:px-0">
                        Study Addicts
                      </h4>
                      <Globe className="h-6 w-6 text-blue-400" />
                    </div>

                    <p className="text-gray-400 mt-5 lg:text-lg xl:leading-9">
                      A web app for college students to host and join study sessions created by
                      the students. For each session created the student must enter the class
                      number, professor, building, room number, date and time frame.
                    </p>

                    <div className="block md:hidden rounded-lg mt-9 mx-auto ">
                      <img
                        className="object-center object-cover rounded-lg w-full h-56 sm:h-80 shadow-xl lozad"
                        src={projectsData[0].img}
                        alt=""
                      />
                    </div>
                    {/* Start Technologies used section */}
                    <div className="flex flex-wrap mt-8 -ml-3 lg:p-0">
                      <a
                        target="_blank"
                        rel="noopener"
                        className={s.tag}
                        href="https://nextjs.org/"
                      >
                        #NextJS
                      </a>
                      <a
                        target="_blank"
                        rel="noopener"
                        className={s.tag}
                        href="https://www.typescriptlang.org/"
                      >
                        #TypeScript
                      </a>
                      <a
                        target="_blank"
                        rel="noopener"
                        className={s.tag}
                        href="https://www.postgresql.org/"
                      >
                        #PostgreSQL
                      </a>
                      <a
                        target="_blank"
                        rel="noopener"
                        className={s.tag}
                        href="https://tailwindcss.com/"
                      >
                        #TailwindCSS
                      </a>
                      <a
                        target="_blank"
                        rel="noopener"
                        className={s.tag}
                        href="https://firebase.google.com/"
                      >
                        #Firebase
                      </a>
                      <a
                        target="_blank"
                        rel="noopener"
                        className={s.tag}
                        href="https://nodejs.org/en/"
                      >
                        #NodeJS
                      </a>
                    </div>
                    {/* End Technologies used section */}
                    {/* Start Project Links */}
                    <div className="flex justify-center md:justify-start space-x-10 mt-14 md:mt-8">
                      <Link href="https://github.com/Jmains/study-addicts-nextjs">
                        <a
                          target="_blank"
                          rel="noopener"
                          className="shadow-md px-4 py-1 text-gray-200 rounded-md bg-darkGray hover:bg-opacity-50 transition duration-200 ease-out"
                        >
                          <Github className="h-6 w-6 mx-auto fill-current" />
                          <span className="block font-bold text-xs mt-1">Github</span>
                        </a>
                      </Link>
                      {/* <Link href="/">
                        <div className="shadow-md px-5 py-1 rounded-md">
                          <Eye className="h-6 w-6 fill-current text-red-500" />
                          <span className="block font-bold text-xs text-gray-400 mt-1">
                            Live
                          </span>
                        </div>
                      </Link> */}
                    </div>
                    {/* End Project Links */}
                  </div>

                  <div className="hidden md:block rounded-lg p-7 mx-auto">
                    <img
                      className="object-center object-cover rounded-lg mx-auto h-56 md:h-64 w-96 shadow-xl lozad"
                      src={projectsData[0].img}
                      alt=""
                    />
                  </div>
                </div>
              </FadeInElementWhenInViewPort>
            </div>

            {/* End Card 1 */}

            {/* Card 2 */}

            <div className="lg:pl-6 lg:col-span-12 relative mt-20 lg:mt-28">
              <FadeInElementWhenInViewPort fadeInDirection="translate-x-24 md:translate-x-48 lg:translate-x-80">
                <div>
                  <div className="md:flex block">
                    <div className="hidden md:block rounded-lg pl-10 pt-6 lg:pl-6 xl:pr-10">
                      <img
                        className="object-center object-cover rounded-lg h-56 md:h-64 w-96 lg:h-64 shadow-xl lozad"
                        src={projectsData[1].img}
                        alt=""
                      />
                    </div>
                    <div className="px-4 md:pl-12 md:pr-4 lg:pr-0 md:w-1/2 my-4">
                      <span className="block text-primaryLight font-semibold xl:text-lg">
                        March, 2020
                      </span>
                      <div className="flex justify-between mt-3">
                        <h4 className="text-gray-200 text-xl xl:text-2xl font-semibold border-l-4 -ml-5 md:ml-0 border-primaryLight md:border-none px-4 md:px-0">
                          Contact Manager
                        </h4>
                        <Android className="h-6 w-6" />
                      </div>

                      <p className="text-gray-400 mt-5 lg:text-lg xl:leading-9">
                        An android app that mimics the functionality of a contact manager in
                        either Android or iOS phones. Users can view their list of contacts
                        sorted in alphabetical order, view their location, and also add, edit,
                        and remove a contact from the contact list.
                      </p>

                      <div className="block md:hidden rounded-lg mt-9 mx-auto md:pl-10">
                        <img
                          className="object-center object-cover rounded-lg w-full h-56 sm:h-80 shadow-xl lozad"
                          src={projectsData[1].img}
                          alt=""
                        />
                      </div>

                      <div className="flex flex-wrap mt-8 -ml-3 lg:p-0">
                        <a
                          target="_blank"
                          rel="noopener"
                          className={s.tag}
                          href="https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html"
                        >
                          #Java
                        </a>
                        <a
                          target="_blank"
                          rel="noopener"
                          className={s.tag}
                          href="https://developer.android.com/studio"
                        >
                          #Android Studio
                        </a>
                        <a
                          target="_blank"
                          rel="noopener"
                          className={s.tag}
                          href="https://www.sqlite.org/index.html"
                        >
                          #SQLite
                        </a>
                      </div>
                      <div className="flex justify-center md:justify-start space-x-10 mt-14 md:mt-8">
                        <Link href="https://github.com/Jmains/ContactManager">
                          <a
                            target="_blank"
                            rel="noopener"
                            className="shadow-md px-4 py-1 text-gray-100 bg-darkGray hover:bg-opacity-50 rounded-md transition duration-200 ease-out"
                          >
                            <Github className="h-6 w-6 mx-auto fill-current" />
                            <span className="block font-bold text-xs mt-1">Github</span>
                          </a>
                        </Link>
                        {/* <Link href="/">
                          <div className="shadow-md px-5 py-1 rounded-md">
                            <Eye className="h-6 w-6 fill-current text-red-500" />
                            <span className="block font-bold text-xs text-gray-400 mt-1">
                              Live
                            </span>
                          </div>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInElementWhenInViewPort>
            </div>
            {/* End Card 2 */}

            {/* Card 3 */}

            <div className="lg:pl-10 lg:col-span-12 lg:row-span-1 relative mt-20 lg:mt-32">
              <FadeInElementWhenInViewPort fadeInDirection="translate-x-24 md:translate-x-48 lg:translate-x-80">
                <div className="md:flex block">
                  <div className="px-4 lg:px-0 md:w-1/2 my-4 md:pl-10">
                    <span className="block text-primaryLight font-semibold xl:text-lg">
                      May, 2019 (First Project)
                    </span>
                    <div className="flex justify-between mt-3">
                      <h4 className="text-gray-200 text-xl xl:text-2xl font-semibold border-l-4 -ml-5 md:-ml-0 border-primaryLight md:border-none px-4 md:px-0">
                        Favorite Movie Collection
                      </h4>
                      <Globe className="h-6 w-6 text-blue-400" />
                    </div>

                    <p className="text-gray-400 mt-5 lg:text-lg xl:leading-9">
                      A web app for users to keep a personal collection of their favorite
                      movies. Users must enter the title, year, a personal description of why
                      they like the movie, and a personal rating (out of 5) for the movie.
                      Users can update or remove a movie from their collection at any time.
                    </p>

                    <div className="block md:hidden rounded-lg mt-9 mx-auto ">
                      <img
                        className="object-center object-cover rounded-lg w-full h-56 sm:h-80 shadow-xl lozad"
                        src={projectsData[0].img}
                        alt=""
                      />
                    </div>
                    {/* Start Technologies used section */}
                    <div className="flex flex-wrap -ml-3 mt-8 sp lg:p-0">
                      <a
                        target="_blank"
                        rel="noopener"
                        className={s.tag}
                        href="https://www.typescriptlang.org/"
                      >
                        #TypeScript
                      </a>
                      <a
                        target="_blank"
                        rel="noopener"
                        className={s.tag}
                        href="https://angular.io/"
                      >
                        #Angular
                      </a>
                      <a
                        target="_blank"
                        rel="noopener"
                        className={s.tag}
                        href="https://firebase.google.com/"
                      >
                        #Firebase
                      </a>
                      <a
                        target="_blank"
                        rel="noopener"
                        className={s.tag}
                        href="https://getbootstrap.com/"
                      >
                        #Bootstrap
                      </a>
                    </div>
                    {/* End Technologies used section */}
                    {/* Start Project Links */}
                    <div className="flex justify-center md:justify-start space-x-10 mt-14 md:mt-8">
                      <Link href="https://github.com/Jmains/personal-favorite-movie-app">
                        <a
                          target="_blank"
                          rel="noopener"
                          className="shadow-md px-4 py-1 text-gray-100 bg-darkGray rounded-md hover:bg-opacity-50 transition duration-200 ease-out"
                        >
                          <Github className="h-6 w-6 mx-auto fill-current" />
                          <span className="block font-bold text-xs mt-1">Github</span>
                        </a>
                      </Link>
                      {/* <Link href="/">
                        <div className="shadow-md px-5 py-1 rounded-md">
                          <Eye className="h-6 w-6 fill-current text-red-500" />
                          <span className="block font-bold text-xs text-gray-400 mt-1">
                            Live
                          </span>
                        </div>
                      </Link> */}
                    </div>
                    {/* End Project Links */}
                  </div>

                  <div className="hidden md:block rounded-lg p-7 mx-auto">
                    <img
                      className="object-center object-cover rounded-lg mx-auto h-56 md:h-64 w-96 lg:h-64 shadow-xl lozad"
                      src={projectsData[0].img}
                      alt=""
                    />
                  </div>
                </div>
              </FadeInElementWhenInViewPort>
            </div>

            {/* End Card 3 */}
          </div>
        </section>
      </div>
    </div>
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
