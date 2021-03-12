import { FC } from "react";
import Link from "next/link";
import s from "./FeaturedProjectSection.module.css";
import { ArrowLeft, ArrowRight, FtProjIcon, LgPinkOct } from "@components/icons";
import { FadeInElementWhenInViewPort } from "@utils/FadeInElementWhenInViewPort";
// bg-gradient-to-t from-gray-100 to-white

const FeaturedProjectSection: FC = () => {
  return (
    <section id="ftProjSection">
      <div className="grid grid-cols-1 mx-4 border-gray-200 border-l border-r justify-center pt-10 pb-20 md:pb-28 md:pt-24 md:grid-cols-2 lg:grid-cols-12">
        <div className="md:col-span-12">
          <FadeInElementWhenInViewPort>
            <div className="flex justify-center">
              <FtProjIcon className="h-20 w-20 lg:h-28 lg:w-28" />
            </div>

            <h2 className="text-purple-500 uppercase font-semibold tracking-widest text-xl md:text-3xl lg:text-3xl mt-4 lg:mt-0 text-center md:text-center md:p-4">
              Featured Project
            </h2>
            <div className="px-4 text-center md:text-center">
              <h3 className="text-xl font-semibold text-gray-700 mt-2 md:text-2xl">
                Kollabme
              </h3>
              <Link href="#">
                <a className="text-gray-700 md:text-xl">kollabme.app</a>
              </Link>
            </div>
          </FadeInElementWhenInViewPort>

          <FadeInElementWhenInViewPort>
            <div className="lg:grid lg:grid-cols-2 sm:px-12 md:px-24 lg:px-20 md:text-lg xl:text-xl ">
              <div className="mt-16 lg:pt-10 lg:pr-10 lg:border-r lg:border-gray-200">
                <h5 className="text-gray-600 md:leading-7 font-semibold border-l-4 -ml-1 border-purple-400 px-4">
                  What?
                </h5>
                <p className="text-gray-600 px-4 mt-2 md:leading-7 xl:leading-9 lg:h-36">
                  An online platform to <em className="text-purple-500">develop</em>,{" "}
                  <em className="text-purple-500">connect</em> and{" "}
                  <em className="text-purple-500">discover</em> individuals from all avenues of
                  entertainment, such as artists, musicians, audio engineers, comedians and
                  painters.
                </p>
              </div>
              <div className="mx-4 mt-16 md:mt-24 lg:mt-16 sm:mx-auto justify-center flex items-center sm:space-x-14 lg:space-x-0 lg:pl-20">
                <button
                  aria-label="previous featured project image"
                  className="shadow-md rounded-md px-1 hidden sm:block lg:hidden focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300 ease-in-out"
                >
                  <ArrowLeft className="h-8 w-8 text-gray-500" />
                </button>
                <img
                  className="mx-auto max-w-xs w-full max-w-72 sm:w-72 md:w-96 h-48 md:h-60 lg:h-56 lg:ml-20 rounded-lg object-center object-cover shadow-lg"
                  src="https://images.unsplash.com/photo-1543069190-9d380c458bc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
                <button
                  aria-label="next featured project image"
                  className="shadow-md rounded-md px-1 hidden sm:block lg:hidden focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300 ease-in-out"
                >
                  <ArrowRight className="h-8 w-8 text-gray-500 " />
                </button>
              </div>

              <div className="lg:mt-28 mt-20 lg:border-r lg:border-gray-200 lg:pr-10">
                <h5 className="text-gray-600 md:leading-7 font-semibold border-l-4 -ml-1 border-purple-400 px-4">
                  Why?
                </h5>
                <p className="text-gray-600 px-4 mt-2 md:leading-7 lg:h-36 xl:leading-9">
                  It's difficult for small artists, musicians, comedians and painters to get
                  recognition and promote their original works. This platform provides a way
                  for individuals to showcase and promote their original works as well as
                  connect with others in adjacent fields or specialties.{" "}
                </p>
              </div>
              <div className="mx-auto pl-20 hidden lg:block mt-28">
                <img
                  className="w-80 h-56 rounded-lg object-center object-cover shadow-lg"
                  src="https://images.unsplash.com/photo-1543069190-9d380c458bc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          </FadeInElementWhenInViewPort>

          <Link href="https://kollab-me.herokuapp.com/community">
            <a className={s.btnBg}>
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
