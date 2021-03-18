import { FC } from "react";
import Link from "next/link";
import s from "./FeaturedProjectSection.module.css";
import { ArrowLeft, ArrowRight, FtProjIcon, LgPinkOct } from "@components/icons";
import { FadeInElementWhenInViewPort } from "@utils/FadeInElementWhenInViewPort";
// bg-gradient-to-t from-gray-100 to-white

const FeaturedProjectSection: FC = () => {
  return (
    <section id="ftProjSection">
      <div className="mx-4 md:mx-auto pt-10 pb-28 md:pt-12 sm:pb-40 md:pb-48 grid grid-cols-1 border-l border-r border-gray-200 md:border-none">
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
            <Link href="#">
              <a className="text-gray-600 md:text-xl">kollabme.app</a>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-20 xl:text-lg">
          <span className="block text-gray-800 font-semibold border-l-4 -ml-1 border-primaryDark md:border-none pl-4 md:-ml-6 md:pl-8">
            What?
          </span>

          <p className="text-gray-600 px-4 mt-2 md:leading-7 xl:leading-9 max-w-2xl mx-auto">
            An online platform to <em className="text-primaryDark">develop</em>,{" "}
            <em className="text-primaryDark">connect</em> and{" "}
            <em className="text-primaryDark">discover</em> individuals from all avenues of
            entertainment, such as artists, musicians, audio engineers, comedians and painters.
          </p>
        </div>

        <div className="mx-4 mt-16 md:mt-24 lg:mt-16 sm:mx-auto justify-center flex items-center sm:space-x-14">
          <button
            aria-label="previous featured project image"
            className="shadow-md rounded-md px-1 hidden sm:block focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300 ease-in-out"
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
            className="shadow-md rounded-md px-1 ml-8 hidden sm:block focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300 ease-in-out"
          >
            <ArrowRight className="h-8 w-8 text-gray-500 " />
          </button>
        </div>

        <div className="lg:mt-28 mt-20 mx-auto xl:text-lg">
          <span className="block text-gray-800 font-semibold border-l-4 -ml-1 border-primaryDark md:border-none px-4 md:-ml-6 md:pl-8">
            Why?
          </span>

          <p className="text-gray-600 px-4 mt-2 md:leading-7 xl:leading-9 max-w-2xl  mx-auto">
            It's difficult for small artists, musicians, comedians and painters to get
            recognition and promote their original works. This platform provides a way for
            individuals to showcase and promote their original works as well as connect with
            others in adjacent fields or specialties.{" "}
          </p>
        </div>
        <div className="pb-10">
          <Link href="https://kollab-me.herokuapp.com/community">
            <a className="px-3 py-2 flex bg-primaryDark justify-center items-center mt-24 w-36 space-x-1 mx-auto lg:mt-36 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-200 ease-in-out cursor-pointer">
              <span className="text-sm md:text-base text-gray-50 font-semibold tracking-wide">
                Learn more
              </span>
              <div>
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </a>
          </Link>
        </div>
      </div>

      {/* <div className="absolute top-0 right-0 mt-96 ">
        <LgPinkOct className="z-0 h-16 w-16" />
      </div> */}
    </section>
  );
};

export default FeaturedProjectSection;
