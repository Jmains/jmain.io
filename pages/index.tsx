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
      <AboutSection />
      <FeaturedProjectSection />
      <ProjectsSection />
      <SkillsSection />

      {/* <Contact/> */}
      <div className=" h-0.5 bg-gray-200 rounded-full mx-auto w-80 md:w-full md:max-w-4xl flex "></div>
      <FooterSection />
    </div>
  );
}
