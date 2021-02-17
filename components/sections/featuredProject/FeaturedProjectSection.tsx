import { FC } from "react";
import Link from "next/link";
import s from "./FeaturedProjectSection.module.css";
import { FtProjIcon, LgPinkOct } from "@components/icons";

const FeaturedProjectSection: FC = () => {
  return (
    <section className="relative bg-gradient-to-t from-gray-100 to-white lg:px-16 lg:pt-20 py-10 px-4 sm:px-10 text-center lg:text-left">
      <div className="flex justify-center lg:justify-start">
        <div className="max-w-lg sm:mx-auto md:w-2/3 lg:max-w-sm xl:max-w-2xl lg:mx-0">
          <div className="flex justify-center ">
            <FtProjIcon />
          </div>
          <h2 className="lg:hidden text-purple-400 uppercase font-bold tracking-widest text-lg md:text-xl mt-4">
            Featured Project
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mt-2">Kollab</h3>
          <Link href="#">
            <a className="lg:hidden text-lg text-gray-700 md:text-xl">kollab.com</a>
          </Link>

          <div className="hidden lg:flex lg:items-end">
            <div>
              <h2 className="text-purple-400 uppercase font-bold tracking-widest text-lg md:text-xl mt-4">
                Featured Project
              </h2>
              <Link href="#">
                <a className="text-lg md:text-xl">kollab.com</a>
              </Link>
            </div>
            {/* <FtProjIcon className="hidden lg:block ml-8" /> */}
          </div>

          <div className="mt-6">
            <h5 className="text-gray-600 md:leading-7 font-semibold">Why?</h5>
            <p className="text-gray-600 md:leading-7 mt-2">
              It's difficult for small artists, musicians, comedians and painters to get
              recognition and promote their original works. This platform provides a way for
              individuals to showcase and promote their original works as well as connect with
              others in adjacent fields or specialties.{" "}
            </p>
          </div>

          <div className="mt-10">
            <h5 className="text-gray-600 md:leading-7 font-semibold">What?</h5>
            <p className="mt-2 md:leading-7 text-gray-600">
              An online platform to <em>develop</em>, <em>connect</em> and <em>discover</em>{" "}
              individuals from all avenues of entertainment, such as artists, musicians, audio
              engineers, comedians and painters.
            </p>
          </div>
        </div>
      </div>
      <img
        className="w-72 mx-auto h-48 rounded-lg object-center object-cover shadow-lg mt-8 sm:w-96 sm:h-64 lg:h-fph lg:w-fpw lg:mr-12 lg:mt-16 lg:absolute lg:right-0 lg:top-0 xl:h-full xl:w-2/5 xl:mr-10"
        src="https://images.unsplash.com/photo-1543069190-9d380c458bc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        alt=""
      />
      <button className={s.btnBg}>Learn more.</button>
      {/* <div className="absolute bottom-0 right-0  z-0 -mb-10">
        <LgPinkOct className="z-0" />
      </div> */}
    </section>
  );
};

export default FeaturedProjectSection;
