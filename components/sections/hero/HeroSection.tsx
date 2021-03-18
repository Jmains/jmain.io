import {
  ArrowDown,
  OctagonClear,
  OctagonCyan,
  OctagonPink,
  ThreeOctagon,
  ThreeBlackOct,
  ThreeWhiteOct,
  Github,
  Twitter,
  Instagram,
} from "@components/icons";
import React, { FC, useEffect, useState } from "react";
import s from "./HeroSection.module.css";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { motion } from "framer-motion";

const HeroSection: FC = () => {
  const [offset, setOffSet] = useState(-1);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowHeight = (window.innerHeight + 50) * -1;
      setOffSet(windowHeight);
    }
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, y: -70 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: "easeOut",
      },
      y: 0,
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -70 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: "easeOut",
      },
      y: 0,
    },
  };

  const subTitleVariants = {
    hidden: { opacity: 0, y: -70 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: "easeOut",
      },
      y: 0,
    },
  };

  const headlineVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.8,
        ease: "easeIn",
      },
    },
  };

  const callToActionBtnVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
        ease: "easeIn",
      },
    },
  };

  const arrowDownVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
      },
      y: 0,
    },
  };

  return (
    <section id="heroSection">
      <div className="grid grid-cols-1 lg:grid-cols-12 max-w-screen-xl lg:mr-4">
        <div className="rounded-br-sm rounded-bl-sm lg:rounded-bl-none lg:col-span-7 col-span-1 h-heroBg lg:h-heroSectionHeight max-h-heroBg relative">
          <Link href="https://github.com/Jmains">
            <button>
              <Github className="h-7 w-7 lg:hidden fill-current text-gray-300 absolute top-0 right-0 mt-5 mr-4 md:mr-10 shadow-md cursor-pointer" />
            </button>
          </Link>

          <div className="sm:px-32 px-4 pt-24 text-center lg:text-left lg:absolute lg:px-14 lg:py-0 lg:top-auto lg:mt-20">
            {/* Profile Pic small screen */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={imageVariants}
              className="lg:hidden"
            >
              <img
                className=" h-24 w-24 rounded-full object-cover object-center mx-auto shadow-md lg:hidden"
                src="/headshot.JPG"
                alt="picture of me"
              />
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={titleVariants}
              className={s.gradientText}
            >
              Jackson Main
            </motion.h1>

            <div className="flex mt-3 items-center text-gray-400 justify-center lg:justify-start">
              {/* Profile Pic large screen */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={subTitleVariants}
                className="lg:block hidden"
              >
                <img
                  className="h-12 w-12 rounded-full object-cover object-center shadow-md"
                  src="/headshot.JPG"
                  alt="picture of me"
                />
              </motion.div>
              {/* <img
              className="rounded-full h-10 w-10 object-cover object-center shadow-md hidden lg:block"
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
              alt=""
            /> */}
              <motion.h4
                initial="hidden"
                animate="show"
                variants={subTitleVariants}
                className="lg:ml-3 text-sm md:text-base lg:text-lg lg:text-gray-400"
              >
                Full Stack Developer | Aspiring UX/UI Designer
              </motion.h4>
            </div>
            <motion.h2
              initial="hidden"
              animate="show"
              variants={headlineVariants}
              className="sm:text-lg md:text-xl lg:text-2xl px-1 text-gray-300 tracking-wide mt-10 max-w-2xl"
            >
              Striving to provide the most memorable and meaningful user experiences on the
              web.
            </motion.h2>
            <div className="lg:flex lg:items-center">
              <motion.button
                initial="hidden"
                animate="show"
                variants={callToActionBtnVariants}
                className={s.callToAction}
              >
                Let's see my work!
              </motion.button>
              <motion.div
                initial="hidden"
                animate="show"
                variants={arrowDownVariants}
                className="flex justify-center mt-20 animate-bounce lg:ml-20"
              >
                <ArrowDown className="h-10 w-10 fill-current text-gray-50" />
              </motion.div>
            </div>
          </div>

          {/* {offset < -1 && (
            <div className="absolute right-0 bottom-0 -mr-20 transform transition-all duration-300 ease-in-out hidden lg:block">
              <motion.div
                initial={{ opacity: 1, y: offset }}
                animate={{ opacity: 0, y: 0 }}
                transition={{ delay: 6, duration: 12, repeat: Infinity, repeatType: "loop" }}
              >
                <OctagonClear />
                <OctagonCyan />
                <OctagonPink />
              </motion.div>
            </div>
          )} */}

          {/* {offset < -1 && (
            <div className="absolute right-0 bottom-0 lg:block hidden">
              <motion.div
                initial={{ opacity: 1, y: offset }}
                animate={{ opacity: 0, y: 0 }}
                transition={{ delay: 4, duration: 12, repeat: Infinity, repeatType: "mirror" }}
              >
                <ThreeWhiteOct />
              </motion.div>
            </div>
          )} */}

          {/* {offset < -1 && (
            <div className="absolute right-0 bottom-0 -mr-20 lg:block hidden">
              <motion.div
                initial={{ opacity: 1, y: offset }}
                animate={{ opacity: 0, y: 0 }}
                transition={{
                  delay: 8,
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <ThreeBlackOct />
              </motion.div>
            </div>
          )} */}

          {/* {offset < -1 && (
            <div className="absolute right-0 bottom-0 -mr-20 lg:block hidden">
              <motion.div
                initial={{ opacity: 1, y: offset }}
                animate={{ opacity: 0, y: 0 }}
                transition={{
                  delay: 2,
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <ThreeBlackOct />
              </motion.div>
            </div>
          )} */}
          {/* {offset < -1 && (
            <div className="absolute right-0 bottom-0 -ml-20 hidden lg:block">
              <motion.div
                initial={{ opacity: 1, y: offset }}
                animate={{ opacity: 0, y: 0 }}
                transition={{ delay: 0, duration: 12, repeat: Infinity, repeatType: "loop" }}
              >
                <OctagonClear />
                <OctagonCyan />
                <OctagonPink />
              </motion.div>
            </div>
          )} */}

          {/* {offset < -1 && (
            <div className="absolute right-0 bottom-0 -mr-40 hidden lg:block">
              <motion.div
                initial={{ opacity: 1, y: offset }}
                animate={{ opacity: 0, y: 0 }}
                transition={{ delay: 0, duration: 12, repeat: Infinity, repeatType: "loop" }}
              >
                <OctagonClear />
                <OctagonCyan />
                <OctagonPink />
              </motion.div>
            </div>
          )} */}
          {/* 
          {offset < -1 && (
            <div className="absolute right-0 bottom-0 -mr-40 lg:block hidden">
              <motion.div
                initial={{ opacity: 1, y: offset }}
                animate={{ opacity: 0, y: 0 }}
                transition={{ delay: 4, duration: 12, repeat: Infinity, repeatType: "mirror" }}
              >
                <ThreeWhiteOct />
              </motion.div>
            </div>
          )} */}

          {/* small screen octagon on left side */}
          <div className="absolute left-0 opacity-70 bottom-0 -ml-2 lg:hidden">
            <ThreeOctagon className="h-44" />
          </div>
          {/* small screen octagon on right side */}
          <div className="absolute right-0 opacity-70 bottom-0 -mr-2 mt-56 lg:hidden">
            <ThreeOctagon className="h-44" />
          </div>
          {/* pl-16 pb-5 */}
          {/* <div className="absolute bottom-0 right-0 hidden lg:block -mr-80 xl:-mr-96 xl:px-6 pb-16">
            <div className="flex space-x-16 ">
              <Github className="h-7 w-7 fill-current text-gray-500" />
              <Instagram className="h-7 w-7" />
              <Twitter className="h-7 w-7 fill-current text-blue-400" />
            </div>
          </div> */}
        </div>
        <div className="col-span-5 ml-10 mr-5 mt-10 hidden lg:block">
          <img className=" " src="/heroillustration.svg" alt="illustration" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
