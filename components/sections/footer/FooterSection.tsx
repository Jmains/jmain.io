import { Github, Instagram, Linkedin, Twitter } from "@components/icons";
import { scrollToElement } from "@utils/scrollToElement";
import Link from "next/link";
import { FC } from "react";
import s from "./FooterSection.module.css";

const FooterSection: FC = () => {
  return (
    <div className="bg-primaryBgDark">
      <footer id="footerSection" className="max-w-screen-xl mx-auto">
        <div className="mx-4 px-4 sm:px-10 pt-16 pb-10 border-gray-800 border-l border-r md:border-none">
          <div className="">
            <Link href="/">
              <a className={s.gradientText}>JM.</a>
            </Link>

            <p className="md:text-xl text-gray-200 font-medium mt-7 text-lg lg:text-xl max-w-md">
              Jackson Main
            </p>
          </div>

          <div className="flex items-end flex-wrap space-x-3 space-y-2">
            <a
              href="mailto:jacksonmain9@gmail.com"
              className=" text-purple-300 font-medium text-sm lg:text-base underline focus:outline-none focus:ring-1 focus:ring-purple-400"
            >
              jacksonmain9@gmail.com
            </a>
            <div className="pl-5">
              <button
                aria-label="scroll to contact section"
                onClick={() => {
                  scrollToElement("contactSection");
                }}
                className="px-2 py-1 bg-primaryDark rounded-md text-sm text-white hover:bg-opacity-70 focus:outline-none focus:ring-2 transition duration-200 ease-out focus:ring-purple-400"
              >
                Contact
              </button>
            </div>
          </div>
          {/* End First Col */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-32 md:text-left lg:grid-cols-2 mt-6 grid-flow-row gap-y-4 text-gray-400 text-sm lg:text-base ">
            <div className="">
              <span className="text-white">Resources</span>
              <div className="space-y-2 mt-3">
                <button
                  aria-label="scroll to projects section"
                  onClick={() => {
                    scrollToElement("projectsSection");
                  }}
                  className="block hover:text-white hover:underline cursor-pointer focus:outline-none focus:ring-1 focus:ring-purple-400"
                >
                  Projects
                </button>
                <button
                  aria-label="scroll to skills section"
                  onClick={() => {
                    scrollToElement("skillsSection");
                  }}
                  className="block hover:text-white hover:underline cursor-pointer focus:outline-none focus:ring-1 focus:ring-purple-400"
                >
                  Skills
                </button>
                <button
                  aria-label="scroll to contact section"
                  onClick={() => {
                    scrollToElement("contactSection");
                  }}
                  className="block hover:text-white hover:underline cursor-pointer focus:outline-none focus:ring-1 focus:ring-purple-400"
                >
                  Contact
                </button>
                <button
                  aria-label="scroll to about section"
                  className="block hover:text-white hover:underline cursor-pointer focus:outline-none focus:ring-1 focus:ring-purple-400"
                >
                  About (In Progress)
                </button>
              </div>
            </div>

            <div className="">
              <span className="text-white">Socials</span>
              <div className="space-y-2 mt-3">
                <a
                  href="https://www.instagram.com/jermain_18/"
                  target="_blank"
                  rel="noopener"
                  className="block w-24 hover:text-white hover:underline focus:outline-none focus:ring-1 focus:ring-purple-400"
                >
                  Instagram
                </a>
                <a
                  href="https://twitter.com/jacksonmain9"
                  className="block w-24 hover:text-white hover:underline focus:outline-none focus:ring-1 focus:ring-purple-400"
                >
                  Twitter
                </a>
                <a
                  href="https://github.com/Jmains"
                  className="block w-24 hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  Github
                </a>
                <a
                  href="https://www.facebook.com/jackson.main9"
                  className="block w-24 hover:text-white hover:underline focus:outline-none focus:ring-1 focus:ring-purple-400"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link href="https://github.com/Jmains/jmain.io">
              <a
                target="_blank"
                rel="noopener"
                className="px-3 w-36 py-1 flex items-center bg-gray-300 text-gray-800 rounded-md mt-4 text-xs shadow-md hover:bg-opacity-70 transition duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <span>
                  View on <span className="font-bold">Github</span>
                </span>
                <Github className="h-6 w-6 ml-1" />
              </a>
            </Link>
          </div>

          <span className="block text-xs text-gray-500 font-light text-left mt-5">
            &copy; Jackson Main 2021. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
