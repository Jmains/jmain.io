import { FC } from "react";
import Link from "next/link";
import s from "./FeaturedProject.module.css";
import { FtProjIcon, LgPinkOct } from "@components/icons";

const FeaturedProject: FC = () => {
  return (
    <section className="relative lg:px-16 lg:pt-20 py-12 px-4 sm:px-10 text-center lg:text-left">
      <div className="flex justify-center lg:justify-start">
        <div className="max-w-lg sm:mx-auto md:max-w-4xl lg:max-w-sm xl:max-w-2xl lg:mx-0">
          <div className="flex justify-center lg:hidden">
            <FtProjIcon />
          </div>
          <h2 className="lg:hidden text-purple-500 uppercase font-bold tracking-widest text-lg md:text-xl mt-4">
            Featured Project
          </h2>
          <Link href="#">
            <a className="lg:hidden text-lg md:text-xl">collabme.com</a>
          </Link>

          <div className="hidden lg:flex lg:items-end">
            <div>
              <h2 className="text-purple-500 uppercase font-bold tracking-widest text-lg md:text-xl mt-4">
                Featured Project
              </h2>
              <Link href="#">
                <a className="text-lg md:text-xl">collabme.com</a>
              </Link>
            </div>
            <FtProjIcon className="hidden lg:block ml-8" />
          </div>

          <div className="mt-6">
            <h5 className="text-gray-500 md:leading-7 font-semibold">Why?</h5>
            <p className="text-gray-500 md:leading-7 mt-2">
              It's difficult for small artists, musicians, comedians and painters to get
              recognition and promote their original works. This platform provides a way for
              individuals to showcase and promote their original works as well as connect with
              others in adjacent fields or specialties.{" "}
            </p>
          </div>

          <div className="mt-10">
            <h5 className="text-gray-500 md:leading-7 font-semibold">What?</h5>
            <p className="mt-2 md:leading-7 text-gray-500">
              An online platform to <em>develop</em>, <em>connect</em> and <em>discover</em>{" "}
              individuals from all avenues of entertainment, such as artists, musicians, audio
              engineers, comedians and painters.
            </p>
          </div>

          <button className={s.btnBg}>Learn more.</button>
        </div>
      </div>
      <img
        className="lg:h-fph lg:w-fpw w-72 xl:h-full xl:mr-32 mx-auto h-48 rounded-lg object-center object-cover shadow-lg mt-8 lg:mr-10 lg:mt-16 lg:absolute lg:right-0 lg:top-0"
        src="https://images.unsplash.com/photo-1560814322-23e126ad9e84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt=""
      />
      {/* <div className="absolute bottom-0 right-0  z-0 -mb-10">
        <LgPinkOct className="z-0" />
      </div> */}
    </section>
  );
};

export default FeaturedProject;
