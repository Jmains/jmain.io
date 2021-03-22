import React from "react";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

import {
  FeaturedProjectSection,
  ProjectsSection,
  HeroSection,
  SkillsSection,
  ContactSection,
} from "@components/sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      {/* <AboutSection /> */}
    </>
  );
}
