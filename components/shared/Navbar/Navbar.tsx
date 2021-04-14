import { useState, useEffect, FC, useRef, MutableRefObject } from "react";
import throttle from "lodash.throttle";
import cn from "classnames";
import s from "./Navbar.module.css";
import Link from "next/link";
import { scrollToElement } from "@utils/scrollToElement";

const getSectionDimension = (element: HTMLElement) => {
  const { height, top } = element.getBoundingClientRect();
  const offsetTop = window.pageYOffset + top;
  const offsetBottom = offsetTop + height;
  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const Navbar: FC = () => {
  const navRef = useRef() as MutableRefObject<HTMLElement>;

  const [hasScrolled, setHasScrolled] = useState(false);
  const [sectionIsVisibleName, setSectionIsVisibleName] = useState("");

  // Handle navbar on scroll effect
  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 10;
      const { scrollTop } = document.documentElement;

      const scrolled = scrollTop > offset;
      setHasScrolled(scrolled);
    }, 300);

    handleScroll();
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Highlight navbar items when in relative section
  useEffect(() => {
    const projectsSection = document.getElementById("projectsSection");
    const skillsSection = document.getElementById("skillsSection");
    const contactSection = document.getElementById("contactSection");

    const sections = [
      { section: projectsSection, name: "projectsSection" },
      { section: skillsSection, name: "skillsSection" },
      { section: contactSection, name: "contactSection" },
    ];

    const handleSectionScroll = throttle(() => {
      if (navRef.current) {
        // const { height: navbarHeight } = getSectionDimension(navRef.current);
        // const scrollPosition = window.scrollY + navbarHeight;
        const scrollPosition = window.scrollY;

        const selected = sections.find(({ section }) => {
          if (section) {
            const { offsetTop, offsetBottom } = getSectionDimension(section);
            return scrollPosition > offsetTop && scrollPosition < offsetBottom;
          }
        });

        selected && selected.name !== sectionIsVisibleName
          ? setSectionIsVisibleName(selected?.name)
          : setSectionIsVisibleName("");
      }
    }, 200);

    handleSectionScroll();
    document.addEventListener("scroll", handleSectionScroll);

    return () => {
      document.removeEventListener("scroll", handleSectionScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn(
        "sticky bg-primaryBgDark top-0 z-40 transition-all duration-300 ease-in-out",
        {
          "shadow-md": hasScrolled,
        }
      )}
    >
      {/* Maybe add some navbar scrolling effects later */}

      <div className="">
        <div className="flex items-center lg:rounded-tr-md pl-6 pr-2 md:pl-6 lg:px-6 justify-between max-w-screen-xl mx-auto relative">
          {/* Navbar Logo */}
          <div className="flex items-center">
            <div className="md:block">
              <div className="sm:ml-6 flex items-baseline space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"  */}
                {/* <Link href="/"> */}
                <button
                  aria-label="scroll to top of page"
                  onClick={() => {
                    scrollToElement("heroSection");
                  }}
                  className={s.gradientText}
                >
                  JM.
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
          {/* End Navbar Logo */}

          <div className="text-gray-400 text-sm lg:text-base lg:mr-2">
            <button
              aria-label="scroll to projects section"
              onClick={() => {
                scrollToElement("projectsSection");
              }}
              className={cn(
                "md:mr-8 mr-1 tracking-wide px-2 py-1 hover:text-white transition duration-300 ease-in-out focus:outline-none focus:text-white",
                {
                  "text-white": sectionIsVisibleName == "projectsSection",
                }
              )}
            >
              projects
            </button>
            <button
              aria-label="scroll to skills section"
              onClick={() => {
                scrollToElement("skillsSection");
              }}
              className={cn(
                "md:mr-8 mr-1 tracking-wide px-2 py-1 hover:text-white transition duration-300 ease-in-out focus:outline-none focus:text-white",
                {
                  "text-white": sectionIsVisibleName == "skillsSection",
                }
              )}
            >
              skills
            </button>
            <button
              aria-label="scroll to contact section"
              onClick={() => {
                scrollToElement("contactSection");
              }}
              className={cn(
                "mr-1 xl:mr-8 tracking-wide px-2 py-1 hover:text-white transition duration-300 ease-in-out focus:outline-none focus:text-white",
                {
                  "text-white": sectionIsVisibleName == "contactSection",
                }
              )}
            >
              contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
