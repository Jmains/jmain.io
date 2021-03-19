import { Github, Instagram, Linkedin, Twitter } from "@components/icons";
import Link from "next/link";
import { FC } from "react";
import s from "./FooterSection.module.css";

const FooterSection: FC = () => {
  return (
    <footer id="footerSection" className="max-w-screen-xl mx-auto">
      <div className="mx-4 px-4 pb-8 pt-10 border-gray-800 border-l border-r md:border-none">
        <div className="">
          <Link href="/">
            <a className={s.gradientText} href="">
              JM.
            </a>
          </Link>

          <p className="md:text-xl text-gray-200 font-medium mt-7 text-lg lg:text-xl max-w-md">
            Jackson Main
          </p>
        </div>

        <div className="flex items-end flex-wrap space-x-3 space-y-2">
          <p className=" text-gray-300 font-medium text-sm lg:text-base ">
            jacksonmain9@gmail.com
          </p>
          <div className="pl-5">
            <button className="px-2 py-1 bg-primaryDark rounded-md text-sm text-white">
              Contact
            </button>
          </div>
        </div>
        {/* End First Col */}

        <div className="grid grid-cols-2 gap-x-32 md:text-left lg:grid-cols-2 mt-6 grid-flow-row gap-y-3 text-gray-400 text-sm lg:text-base ">
          <span className="block ">Projects</span>
          <span className="block ">About</span>
          <span className="block ">Twitter</span>
          <span className="block ">Skills</span>
          <span className="block">Instagram</span>
          <span className="block">Github</span>
          <span className="block ">Contact</span>
          <span className="block ">Facebook</span>
        </div>

        <div className="mt-12">
          <Link href="https://github.com/Jmains/jmain.io">
            <button className="px-3 py-1 flex items-center bg-gray-300 text-gray-800 rounded-md mt-4 text-xs shadow-md focus:outline-none">
              <span>
                View on <span className="font-bold">Github</span>
              </span>
              <Github className="h-6 w-6 ml-1" />
            </button>
          </Link>
        </div>

        <span className="block text-xs text-gray-500 font-light text-left mt-5">
          &copy; Jackson Main 2021. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
