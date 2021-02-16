import { FeaturedProjectSection, ProjectsSection, HeroSection } from "@components/sections";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedProjectSection />
      <ProjectsSection />
      {/* <SkillsSection/>
      <About/>
      <Contact/> */}
    </div>
  );
}
