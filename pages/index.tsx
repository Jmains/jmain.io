import React, { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Head from "next/head";

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
    <div>
      <Head>
        <title>Jackson Main</title>
        <meta name="description" content="Jackson Main's portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="Jackson Main" key="ogsitename" />
        <meta property="og:title" content="Jackson Main" key="ogtitle" />
        <meta property="og:url" content="/headshot.JPG" key="ogurl" />
        <meta
          property="og:description"
          content="Jackson Main's portfolio website"
          key="ogdesc"
        />
        <meta name="twitter:title" content="Jackson Main" />
        <meta name="twitter:site" content="@jacksonmain9" key="twsitehandle" />
        <meta name="twitter:description" content="Jackson Main's portfolio website" />
        <meta name="twitter:image" content="/headshot.JPG" />
        <meta name="twitter:card" content="Jackson Main's Portfolio Website" key="twcard" />
        <meta name="twitter:creator" content="@jacksonmain9" key="twhandle" />
      </Head>
      <HeroSection />
      <FeaturedProjectSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      {/* <AboutSection /> */}
    </div>
  );
}
