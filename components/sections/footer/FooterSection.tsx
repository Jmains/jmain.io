import { Github } from "@components/icons";
import Link from "next/link";
import { FC } from "react";

const FooterSection: FC = () => {
  return (
    <footer className="p-4 pb-8 pt-10">
      <div className="flex justify-center space-x-1 font-light text-gray-500 text-lg ">
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
          <button className="px-3 py-1 flex items-center bg-gray-300 text-gray-800 rounded-md mt-3 text-sm focus:outline-none">
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
