import { ArrowDown, ThreeOctagon, Github } from "@components/icons";
import React, { FC } from "react";
import styles from "./HeroSection.module.css";
import Link from "next/link";
import { scrollToElement } from "@utils/scrollToElement";

const HeroSection: FC = () => {
  return (
    <div className="bg-primaryBgDark ">
      <div className="max-w-screen-xl mx-auto">
        <section id="heroSection">
          <div className="grid grid-cols-1 lg:grid-cols-12 max-w-screen-xl lg:mr-4">
            <div className="rounded-br-sm rounded-bl-sm lg:rounded-bl-none lg:col-span-7 col-span-1 h-heroBg lg:h-heroSectionHeight max-h-heroBg relative">
              <Link href="https://github.com/Jmains">
                <button aria-label="open my github page">
                  <Github className="h-7 w-7 lg:hidden fill-current text-gray-300 absolute top-0 right-0 mt-5 mr-4 md:mr-10 shadow-md cursor-pointer" />
                </button>
              </Link>

              <div className="sm:px-32 px-4 pt-24 text-center lg:text-left lg:absolute lg:px-14 lg:py-0 lg:top-auto lg:mt-20">
                {/* Profile Pic small screen */}
                <div className="lg:hidden">
                  <img
                    className={styles.smScreenProfileImg}
                    src="/headshot.JPG"
                    alt="picture of me"
                  />
                </div>

                <h1 className={styles.gradientText}>Jackson Main</h1>

                <div className="flex mt-3 items-center text-gray-400 justify-center lg:justify-start">
                  {/* Profile Pic large screen */}
                  <div className="lg:block hidden">
                    <img
                      className={styles.subheadingImg}
                      src="/headshot.JPG"
                      alt="picture of me"
                    />
                  </div>

                  <span className={styles.subheading}>
                    Software Engineer | Aspiring UX/UI Designer
                  </span>
                </div>
                <h2 className={styles.headline}>
                  Striving to provide the most memorable and meaningful user experiences on the
                  web.
                </h2>
                <div className="lg:flex lg:items-center">
                  <button
                    aria-label="scroll to my featured project section"
                    className={styles.callToAction}
                    onClick={() => {
                      scrollToElement("ftProjSection");
                    }}
                  >
                    Let's see my work!
                  </button>
                  <div className="flex justify-center mt-20 animate-bounce lg:ml-20 lg:hidden">
                    <ArrowDown
                      onClick={() => {
                        scrollToElement("ftProjSection");
                      }}
                      className={styles.arrowDown}
                    />
                  </div>
                </div>
              </div>

              {/* small screen octagon on left side */}
              <div className="absolute left-0 opacity-70 bottom-0 -ml-2 lg:hidden">
                <ThreeOctagon className="h-44" />
              </div>
              {/* small screen octagon on right side */}
              <div className="absolute right-0 opacity-70 bottom-0 -mr-2 mt-56 lg:hidden">
                <ThreeOctagon className="h-44" />
              </div>
            </div>
            <div className="col-span-5 ml-10 mr-5 mt-10 hidden lg:block">
              <img className=" " src="/heroIllustration.svg" alt="illustration" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
