import { FeaturedProject, Projects, HeroSection } from "@components/sections";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedProject />
      <Projects />
      {/* <Skills/>
      <About/>
      <Contact/> */}
    </div>
  );
}
