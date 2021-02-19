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
      <HeroSection />

      {/* <div className=" h-0.5 bg-gray-200 rounded-full mx-auto w-4/5 flex"></div> */}
      <div className="bg-gradient-to-t from-gray-50 to-white">
        <FeaturedProjectSection />
      </div>
      <div className="bg-gray-50">
        <ProjectsSection />
      </div>
      <div className="bg-white">
        <div className="grid grid-cols-1 mx-4 border-gray-200 border-l-2 border-r-2 md:grid-cols-2 lg:grid-cols-4">
          {/* <SkillsSection /> */}
        </div>
      </div>

      {/* <Contact/> */}
      {/* <div className=" h-0.5 bg-gray-200 rounded-full mx-auto w-4/5 flex "></div> */}
      {/* <AboutSection /> */}
    </div>
  );
}
