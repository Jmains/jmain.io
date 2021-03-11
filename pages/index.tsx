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
      <div className="max-w-screen-xl mx-auto">
        <HeroSection />
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
