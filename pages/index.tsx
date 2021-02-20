import {
  FeaturedProjectSection,
  ProjectsSection,
  HeroSection,
  SkillsSection,
  FooterSection,
  AboutSection,
} from "@components/sections";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <HeroSection />
      </div>
      {/* <div className=" h-0.5 bg-gray-200 rounded-full mx-auto w-4/5 flex"></div> */}
      <div className="bg-gradient-to-t from-gray-50 to-white">
        <FeaturedProjectSection />
      </div>
      {/* bg-gradient-to-b from-gray-50 to-white */}
      <div className="bg-gradient-to-b from-gray-50 to-white w-full">
        <ProjectsSection />
      </div>
      <div className="bg-white w-full">
        <SkillsSection />
      </div>

      {/* <Contact/> */}
      {/* <div className=" h-0.5 bg-gray-200 rounded-full mx-auto w-4/5 flex "></div> */}
      {/* <AboutSection /> */}
    </div>
  );
}
