import { Github } from "@components/icons";
import Link from "next/link";
import { FC } from "react";
import s from "./FooterSection.module.css";

const FooterSection: FC = () => {
  return (
    <footer className="p-4 pb-10 pt-10">
      <div className="px-3 py-1 rounded-lg bg-gray-bg flex justify-center w-16 mx-auto shadow-md">
        <h4 className={s.gradientText}>JM.</h4>
      </div>

      <div className="flex justify-center space-x-2 font-light text-gray-500 text-sm mt-5">
        <span className="">projects</span>
        <span>&bull;</span>
        <span>skills </span>
        <span>&bull;</span>
        <span>about</span>
        <span>&bull;</span>
        <span>contact</span>
      </div>
      <div className="flex justify-center">
        <Link href="https://github.com/Jmains/jmain.io">
          <button className="px-3 py-1 flex items-center bg-gray-300 text-gray-800 rounded-md mt-5 text-xs focus:outline-none">
            <span>
              View on <span className="font-bold">Github</span>
            </span>
            <Github className="h-6 w-6 ml-1" />
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default FooterSection;
