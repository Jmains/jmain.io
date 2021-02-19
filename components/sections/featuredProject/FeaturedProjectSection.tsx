import { FC } from "react";
import Link from "next/link";
import s from "./FeaturedProjectSection.module.css";
import { FtProjIcon, LgPinkOct } from "@components/icons";
// bg-gradient-to-t from-gray-100 to-white

const FeaturedProjectSection: FC = () => {
  return (
    <section className="justify-center py-10 grid grid-cols-1 mx-4 border-gray-200 border-l border-r md:grid-cols-2 lg:grid-cols-12 max-w-screen-xl mx-auto">
      <div className="lg:col-span-8 xl:col-span-8 col md:border-r">
        <div className="flex justify-center">
          <FtProjIcon />
        </div>

        <h2 className="text-purple-400 uppercase font-bold tracking-widest text-2xl md:text-xl mt-4 text-center">
          Featured Project
        </h2>
        <div className="px-4 text-center">
          <h3 className="text-2xl font-semibold text-gray-700 mt-2">Kollab</h3>
          <Link href="#">
            <a className=" text-lg text-gray-700 md:text-xl">kollab.com</a>
          </Link>
        </div>
        <div className="mt-6">
          <h5 className="text-gray-600 md:leading-7 font-semibold border-l-4 -ml-1 border-purple-400 px-4">
            Why?
          </h5>
          <p className="text-gray-600 md:leading-7 mt-2 px-4">
            It's difficult for small artists, musicians, comedians and painters to get
            recognition and promote their original works. This platform provides a way for
            individuals to showcase and promote their original works as well as connect with
            others in adjacent fields or specialties.{" "}
          </p>
        </div>

        <div className="mt-10">
          <h5 className="text-gray-600 md:leading-7 font-semibold border-l-4 -ml-1 border-purple-400 px-4">
            What?
          </h5>
          <p className="mt-2 md:leading-7 text-gray-600 px-4">
            An online platform to <em>develop</em>, <em>connect</em> and <em>discover</em>{" "}
            individuals from all avenues of entertainment, such as artists, musicians, audio
            engineers, comedians and painters.
          </p>
        </div>
        <div className="justify-center hidden md:flex">
          <button className={s.btnBg}>Learn more.</button>
        </div>
      </div>
      {/* Right Column */}
      <div className="my-auto lg:col-span-4 xl:col-span-4">
        <img
          className="w-72 mx-auto h-48 rounded-lg object-center object-cover shadow-lg mt-8"
          src="https://images.unsplash.com/photo-1543069190-9d380c458bc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt=""
        />

        <img
          className="w-72 mx-auto h-48 rounded-lg object-center object-cover shadow-lg mt-8 md:mt-24 hidden md:block"
          src="https://images.unsplash.com/photo-1543069190-9d380c458bc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt=""
        />
      </div>

      <div className="flex justify-center md:hidden">
        <button className={s.btnBg}>Learn more.</button>
      </div>

      {/* <div className="absolute top-0 right-0 mt-96 ">
        <LgPinkOct className="z-0 h-16 w-16" />
      </div> */}
    </section>
  );
};

export default FeaturedProjectSection;
