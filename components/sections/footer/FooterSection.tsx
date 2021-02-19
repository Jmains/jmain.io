import { Github, Instagram, Linkedin, Twitter } from "@components/icons";
import Link from "next/link";
import { FC } from "react";
import s from "./FooterSection.module.css";

const FooterSection: FC = () => {
  return (
    <footer className="max-w-screen-xl mx-auto">
      <div className="mx-4 p-4 pb-5 pt-10 border-gray-200 border-l border-r grid grid-cols-1 lg:grid-cols-4">
        <div className="px-3 py-1 rounded-lg bg-gray-bg flex justify-center w-16 mx-auto shadow-md">
          <h4 className={s.gradientText}>JM.</h4>
        </div>

        <div className="flex justify-center space-x-2 font-light text-gray-500 text-sm mt-6">
          <span className="">projects</span>
          <span>&bull;</span>
          <span>skills </span>
          <span>&bull;</span>
          <span>about</span>
          <span>&bull;</span>
          <span>contact</span>
        </div>

        {/* <div className="flex justify-center mt-5 space-x-6">
        <Instagram className="h-7 w-7 fill-current text-gray-500" />
        <Linkedin className="h-7 w-7 fill-current text-gray-500" />
        <Twitter className="h-7 w-7 fill-current text-gray-500" />
      </div> */}

        <div className="flex justify-center">
          <Link href="https://github.com/Jmains/jmain.io">
            <button className="px-3 py-1 flex items-center bg-gray-300 text-gray-800 rounded-md mt-4 text-xs shadow-md focus:outline-none">
              <span>
                View on <span className="font-bold">Github</span>
              </span>
              <Github className="h-6 w-6 ml-1" />
            </button>
          </Link>
        </div>
        <span className="block text-xs text-gray-400 font-light text-center mt-7">
          &copy; Jackson Main 2021. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
