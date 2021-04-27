import { FC, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, FtProjIcon } from "@components/icons";
import s from "./FeaturedProjectSection.module.css";
import lozad from "lozad";

import {
  TopWaveSolid,
  TopWaveClear,
  BottomWaveSolid,
  BottomWaveClear,
} from "@components/waves";

const FeaturedProjectSection: FC = () => {
  useEffect(() => {
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();
  }, []);

  return (
    <div className="relative bg-white">
      <div className="absolute top-0 mx-auto">
        <TopWaveSolid className="w-screen max-h-40 -mt-1" />
      </div>
      <div className="absolute top-0 mx-auto">
        <TopWaveClear className="w-screen max-h-40" />
      </div>

      <div className="absolute bottom-0 mx-auto -mb-1">
        <BottomWaveSolid className="w-screen" />
      </div>
      <div className="absolute bottom-0 mx-auto -mb-2">
        <BottomWaveClear className="w-screen" />
      </div>

      <div className="max-w-screen-xl mx-auto">
        <section id="ftProjSection">
          <div className="mx-4 pt-10 pb-28 md:pt-24 sm:pb-40 md:pb-48 lg:pb-28 xl:pb-56 lg:pt-32 xl:pt-32 grid grid-cols-12 border-l border-r border-gray-200 md:border-none">
            <div className="hidden md:block col-span-8 lg:col-span-7 mt-28 md:mt-48 lg:mt-36 -ml-16 md:-ml-36 lg:-ml-44">
              <img src="/ftProjMockup.svg" className="lozad" alt="Featured Project Mockup" />
            </div>

            <div className="col-span-12 md:col-span-4 lg:col-span-5 lg:pr-10 md:-ml-36">
              <div className="md:mt-24 mt-14 px-4 lg:px-0">
                <div className="flex items-center justify-center lg:justify-start lg:-ml-8">
                  <FtProjIcon className="h-20 w-20 lg:h-24 lg:w-24 lg:mt-6 ml-6 mt-5" />
                </div>
                <h2 className="text-primaryDark uppercase font-bold tracking-widest text-2xl sm:text-3xl lg:text-4xl mt-4 lg:mt-6 text-center lg:text-left">
                  Featured Project
                </h2>

                <div className="text-center md:text-center lg:text-left mt-5">
                  <h3 className="text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl">
                    KollabMe
                  </h3>
                  <div className="lg:mt-2">
                    <Link href="https://kollabme.app/community">
                      <a className="text-gray-600 md:text-xl focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-md py-1 hover:underline">
                        kollabme.app
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mx-auto md:mx-0 mt-16 md:mt-10 lg:text-lg">
                <span className="block text-gray-800 font-semibold px-3 lg:px-0 relative">
                  What?
                  <div className="md:hidden h-6 border-l-4 border-primaryDark absolute top-0 left-0 -ml-1"></div>
                </span>

                <p className="text-gray-600 px-4 lg:px-0 mt-2 md:leading-7 xl:leading-9 max-w-2xl">
                  An online platform to <em className="font-bold">develop</em>,{" "}
                  <em className="font-bold">connect</em> and{" "}
                  <em className="font-bold">discover</em> individuals from all avenues of
                  entertainment, such as artists, musicians, audio engineers, comedians and
                  painters.
                </p>
              </div>

              <div className="md:hidden mt-12 w-full relative">
                <img
                  className="object-center object-cover"
                  src="/smFtProjMockup.svg"
                  alt="featured project mockup"
                />
              </div>

              <div className="-mt-10 sm:-mt-28 md:mt-16 lg:mt-16 mx-auto lg:text-lg">
                <span className="block text-gray-800 font-semibold px-3 lg:px-0 relative">
                  Why?
                  <div className="md:hidden h-6 border-l-4 border-primaryDark absolute top-0 left-0 -ml-1"></div>
                </span>

                <p className="text-gray-600 px-4 lg:px-0 mt-2 md:leading-7 xl:leading-9 max-w-2xl">
                  It's difficult for amateur artists, musicians, comedians and painters to
                  recieve recognition and promote their original creations. This platform
                  provides a way for those individuals to{" "}
                  <em className="font-bold">showcase</em> and promote their craft as well as{" "}
                  <em className="font-bold">follow</em> and{" "}
                  <em className="font-bold">collaborate</em> with others in adjacent fields.{" "}
                </p>
              </div>

              <div className="mt-10 px-4 lg:px-0">
                <span className="font-semibold text-gray-800">Technologies:</span>
                <div className="flex flex-wrap mt-2 -ml-3">
                  <a
                    target="_blank"
                    rel="noopener"
                    className={s.tag}
                    href="https://reactjs.org/"
                  >
                    #React
                  </a>
                  <a
                    target="_blank"
                    rel="noopener"
                    className={s.tag}
                    href="https://www.javascript.com/"
                  >
                    #JavaScript
                  </a>
                  <a
                    target="_blank"
                    rel="noopener"
                    className={s.tag}
                    href="https://graphql.org/"
                  >
                    #GraphQL
                  </a>
                  <a
                    target="_blank"
                    rel="noopener"
                    className={s.tag}
                    href="https://nodejs.org/en/"
                  >
                    #NodeJS
                  </a>
                  <a target="_blank" rel="noopener" className={s.tag} href="https://redis.io/">
                    #Redis
                  </a>
                  <a
                    target="_blank"
                    rel="noopener"
                    className={s.tag}
                    href="https://aws.amazon.com/"
                  >
                    #AWS
                  </a>
                  <a
                    target="_blank"
                    rel="noopener"
                    className={s.tag}
                    href="https://webpack.js.org/"
                  >
                    #Webpack
                  </a>
                  <a
                    rel="noopener"
                    target="_blank"
                    className={s.tag}
                    href="https://www.apollographql.com/docs/react/"
                  >
                    #Apollo
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
                    href="https://expressjs.com/"
                  >
                    #ExpressJS
                  </a>
                  <a
                    target="_blank"
                    rel="noopener"
                    className={s.tag}
                    href="https://www.heroku.com/"
                  >
                    #Heroku
                  </a>
                  <a
                    target="_blank"
                    rel="noopener"
                    className={s.tag}
                    href="https://www.mongodb.com/"
                  >
                    #MongoDB
                  </a>
                </div>
              </div>

              <div className="pb-10 px-4 lg:px-0">
                <Link href="https://kollabme.app/community">
                  <a
                    rel="noopener"
                    target="_blank"
                    className="py-2 flex text-white font-semibold tracking-wide text-sm bg-primaryDark justify-center items-center mt-24 md:mt-16 w-32 space-x-1 mx-auto md:mx-0 lg:mt-20 rounded-lg shadow-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200 ease-in-out cursor-pointer"
                  >
                    Check it out <ArrowRight className="ml-1 h-5 w-5" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="absolute top-0 right-0 mt-96 ">
        <LgPinkOct className="z-0 h-16 w-16" />
      </div> */}
        </section>
      </div>
    </div>
  );
};

export default FeaturedProjectSection;
