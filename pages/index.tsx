import React, { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";

import {
  FeaturedProjectSection,
  ProjectsSection,
  HeroSection,
  SkillsSection,
  ContactSection,
} from "@components/sections";

export default function Home() {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

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
