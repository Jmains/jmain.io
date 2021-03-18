import { Github, Instagram, Twitter } from "@components/icons";
import {
  FeaturedProjectSection,
  ProjectsSection,
  HeroSection,
  SkillsSection,
  AboutSection,
} from "@components/sections";
import {
  TopWaveSolid,
  TopWaveClear,
  BottomWaveSolid,
  BottomWaveClear,
} from "@components/waves";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="bg-primaryBgDark ">
        <div className="max-w-screen-xl mx-auto">
          <HeroSection />
        </div>
      </div>

      {/* bg-gradient-to-t from-gray-100 to-white */}
      <div className="bg-transparent relative">
        <div className="absolute top-0 mx-auto">
          <TopWaveSolid className="w-screen max-h-40 -mt-1" />
        </div>
        <div className="absolute top-0 mx-auto">
          <TopWaveClear className="w-screen max-h-40" />
        </div>

        <div className="absolute bottom-0 mx-auto -mb-1">
          <BottomWaveSolid className="w-screen" />
        </div>
        <div className="absolute bottom-0 mx-auto -mb-2">
          <BottomWaveClear className="w-screen" />
        </div>
        <div className="max-w-screen-xl mx-auto">
          <FeaturedProjectSection />
        </div>
      </div>

      {/* bg-gradient-to-b from-gray-100 to-white */}
      <div className="bg-primaryBgDark w-full relative">
        <img
          className="top-0 right-0 absolute md:w-48 md:mt-10 xl:w-4/12 md:mr-16 xl:mr-32 max-h-full mt-20 hidden md:block"
          src="/projectillustration.svg"
          alt="project illustration"
        />
        <div className="max-w-screen-xl mx-auto">
          <ProjectsSection />
        </div>
      </div>
      <div className="bg-white w-full relative">
        <img
          className="top-0 right-0 absolute md:w-64 md:mt-10 xl:w-3/12 md:mr-24 xl:mr-64 max-h-full mt-20 hidden md:block"
          src="/Lightbulb.svg"
          alt="lightbulb illustration"
        />
        <div className="max-w-screen-xl mx-auto">
          <SkillsSection />
        </div>
      </div>

      {/* <Contact/> */}
      {/* <div className=" h-0.5 bg-gray-200 rounded-full mx-auto w-4/5 flex "></div> */}
      {/* <AboutSection /> */}
    </div>
  );
}
