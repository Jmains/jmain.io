import { Github, Instagram, Twitter } from "@components/icons";
import {
  FeaturedProjectSection,
  ProjectsSection,
  HeroSection,
  SkillsSection,
  AboutSection,
} from "@components/sections";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 mx-auto max-w-screen-xl">
        <div className="bg-gray-bg lg:col-span-8 col-span-1 h-heroBg lg:h-screen mx-auto max-h-heroBg relative">
          <HeroSection />
        </div>
        <div className="lg:flex hidden col-span-4 mt-96 pt-96 space-x-16 lg:pl-6 xl:pl-20 mx-auto">
          <Twitter className="h-8 w-8 fill-current text-blue-500" />
          <Instagram className="h-8 w-8" />
          <Github className="h-8 w-8 fill-current text-gray-500" />
        </div>
      </div>
      {/* <div className=" h-0.5 bg-gray-200 rounded-full mx-auto w-4/5 flex"></div> */}
      <div className="bg-gradient-to-t from-gray-100 to-white">
        <div className="max-w-screen-xl mx-auto">
          <FeaturedProjectSection />
        </div>
      </div>

      {/* bg-gradient-to-b from-gray-50 to-white */}
      <div className="bg-gradient-to-b from-gray-100 to-white w-full">
        <div className="max-w-screen-xl mx-auto">
          <ProjectsSection />
        </div>
      </div>
      <div className="bg-white w-full">
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
