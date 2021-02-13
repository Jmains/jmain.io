import {
  ArrowDown,
  OctagonClear,
  OctagonPink,
  ThreeOctagon,
  ThreeBlackOct,
  ThreeWhiteOct,
} from "@components/icons";
import { FC } from "react";
import s from "./HeroSection.module.css";

const HeroSection: FC = () => {
  return (
    <section>
      <div className={s.container}>
        <div className="lg:px-20 px-4 sm:px-32 pt-24 text-center lg:text-left">
          <img
            className="rounded-full h-24 w-24 object-cover mx-auto object-center shadow-md lg:hidden"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
            alt=""
          />
          <h1 className={s.gradientText}>Jackson Main</h1>
          <div className="flex mt-3 items-center text-gray-400 justify-center lg:justify-start">
            <img
              className="rounded-full h-10 w-10 object-cover object-center shadow-md hidden lg:block"
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
              alt=""
            />
            <h4 className="ml-3 md:text-base text-sm">
              Full Stack Developer | Wanna be UX/UI Designer
            </h4>
          </div>
          <h2 className="md:text-2xl sm:text-lg text-gray-300 tracking-wide mt-10">
            Striving to provide the most memorable and meaningful user experiences on the web.
          </h2>
          <button className="mt-12 text-semibold text-gray-300 bg-gray-700 bg-opacity-50 px-4 py-2 rounded-lg">
            Let's get to know me!
          </button>
          <div className="flex justify-center mt-20">
            <ArrowDown className="h-10 w-10 fill-current text-gray-50" />
          </div>
        </div>
        <div className="absolute right-0 top-0 -mr-20">
          <ThreeOctagon />
        </div>
        <div className="absolute left-0 bottom-0 -mr-20 lg:hidden">
          <ThreeOctagon />
        </div>
        <div className="absolute right-0 top-52 lg:block hidden">
          <ThreeWhiteOct />
        </div>
        <div className="absolute right-0 bottom-48 -mr-20 lg:block hidden">
          <ThreeBlackOct />
        </div>

        <div className="absolute right-0 bottom-0 mt-56">
          <ThreeOctagon />
        </div>
        {/* <div className="absolute right-0 top-0 mt-64">
          <OctagonWhite />
        </div>
        <div className="absolute right-0 top-0 mt-80">
          <OctagonWhite />
        </div>
        <div className="absolute right-0 top-0 mt-96">
          <OctagonWhite />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
