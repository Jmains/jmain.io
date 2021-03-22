import { FC } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FtProjIcon } from "@components/icons";
import { FadeInElementWhenInViewPort } from "@utils/FadeInElementWhenInViewPort";
import {
  TopWaveSolid,
  TopWaveClear,
  BottomWaveSolid,
  BottomWaveClear,
} from "@components/waves";

const FeaturedProjectSection: FC = () => {
  return (
    <div className="relative">
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
          <div className="mx-4 md:mx-auto pt-10 pb-28 md:pt-12 sm:pb-40 md:pb-48 xl:pb-72 xl:pt-24 grid grid-cols-1 border-l border-r border-gray-200 md:border-none">
            <div className="md:mt-32 mt-14">
              <div className="flex justify-center">
                <FtProjIcon className="h-20 w-20 lg:h-28 lg:w-28" />
              </div>
              <h2 className="text-primaryDark uppercase font-bold tracking-widest text-2xl md:text-3xl lg:text-4xl mt-4 lg:mt-6 text-center">
                Featured Project
              </h2>

              <div className="text-center mt-5 lg:mt-8">
                <h3 className="text-xl font-semibold text-gray-900 md:text-2xl lg:text-4xl">
                  KollabMe
                </h3>
                <div className="mt-2">
                  <Link href="https://kollab-me.herokuapp.com/community">
                    <a className="text-gray-600 md:text-xl focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-md px-2 py-1 hover:underline">
                      kollabme.app
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <FadeInElementWhenInViewPort fadeInDirection="translate-y-24">
              <div className="mx-auto mt-20 lg:text-lg">
                <span className="block text-gray-800 font-semibold border-l-4 -ml-1 border-primaryDark md:border-none pl-4 md:-ml-6 md:pl-8">
                  What?
                </span>

                <p className="text-gray-600 px-4 mt-2 md:leading-7 xl:leading-9 max-w-2xl mx-auto">
                  An online platform to <em className="text-primaryDark">develop</em>,{" "}
                  <em className="text-primaryDark">connect</em> and{" "}
                  <em className="text-primaryDark">discover</em> individuals from all avenues
                  of entertainment, such as artists, musicians, audio engineers, comedians and
                  painters.
                </p>
              </div>

              <div className="mx-4 mt-16 md:mt-24 lg:mt-16 sm:mx-auto justify-center flex items-center sm:space-x-14">
                <button
                  aria-label="previous featured project image"
                  className="shadow-md rounded-md px-1 hidden sm:block focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out"
                >
                  <ArrowLeft className="h-8 w-8 text-gray-500" />
                </button>
                <img
                  className="mx-auto max-w-xs w-full max-w-72 sm:w-72 md:w-96 h-48 md:h-60 lg:h-56  rounded-lg object-center object-cover shadow-lg"
                  src="https://images.unsplash.com/photo-1543069190-9d380c458bc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
                <button
                  aria-label="next featured project image"
                  className="shadow-md rounded-md px-1 ml-8 hidden sm:block focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out"
                >
                  <ArrowRight className="h-8 w-8 text-gray-500 " />
                </button>
              </div>

              <div className="lg:mt-28 mt-20 mx-auto lg:text-lg">
                <span className="block text-gray-800 font-semibold border-l-4 -ml-1 border-primaryDark md:border-none px-4 md:-ml-6 md:pl-8">
                  Why?
                </span>

                <p className="text-gray-600 px-4 mt-2 md:leading-7 xl:leading-9 max-w-2xl  mx-auto">
                  It's difficult for amateur artists, musicians, comedians and painters to get
                  recognition and promote their original works. This platform provides a way
                  for individuals to showcase and promote their craft as well as connect with
                  others in adjacent fields.{" "}
                </p>
              </div>
              <div className="pb-10">
                <Link href="https://kollab-me.herokuapp.com/community">
                  <a className="py-2 flex text-white font-semibold tracking-wide text-sm bg-primaryDark justify-center items-center mt-24 w-32  space-x-1 mx-auto lg:mt-36 rounded-lg shadow-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200 ease-in-out cursor-pointer">
                    Learn more
                    <ArrowRight className="h-5 w-5 text-white" />
                  </a>
                </Link>
              </div>
            </FadeInElementWhenInViewPort>
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
