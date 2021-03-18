import { useState, useEffect, FC } from "react";
import throttle from "lodash.throttle";
import cn from "classnames";
import s from "./Navbar.module.css";
import Link from "next/link";

const Navbar: FC = () => {
  // const uiDispatch = useUIDispatch();
  const [hasScrolled, setHasScrolled] = useState(false);

  // Detect whether user has scrolled down
  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 10;
      const { scrollTop } = document.documentElement;

      const scrolled = scrollTop > offset;
      setHasScrolled(scrolled);
    }, 200);

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "sticky bg-primaryBgDark top-0 z-40 transition-all duration-300 ease-in-out",
        {
          "shadow-lg": hasScrolled,
        }
      )}
    >
      {/* Maybe add some navbar scrolling effects later */}

      <div className="">
        <div className="flex items-center lg:rounded-tr-md pl-4 pr-2 md:pl-6 lg:px-6 justify-between max-w-screen-xl mx-auto relative">
          {/* Navbar Logo */}
          <div className="flex items-center">
            <div className="md:block">
              <div className="sm:ml-6 flex items-baseline space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"  */}
                <Link href="/">
                  <a className={s.gradientText}>JM.</a>
                </Link>
              </div>
            </div>
          </div>
          {/* End Navbar Logo */}

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Profile dropdown  */}
              <div className="ml-3 relative">
                {/* Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95" */}

                {/* TODO: remove hidden attribute at the end */}
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    projects.
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    skills.
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    about.
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-400 text-sm lg:mr-2">
            <button
              onClick={() => {
                alert("Still thinking of what to do with this button");
              }}
              className={cn(
                "md:mr-8 mr-1 tracking-wide px-2 py-1 hover:text-gray-100 transition duration-300 ease-in-out focus:outline-none"
              )}
            >
              projects
            </button>
            <button
              onClick={() => {
                alert("Still thinking of what to do with this button");
              }}
              className={cn(
                "md:mr-8 mr-1 tracking-wide px-2 py-1 hover:text-gray-100 transition duration-300 ease-in-out focus:outline-none"
              )}
            >
              skills
            </button>
            <button
              onClick={() => {
                alert("Still thinking of what to do with this button");
              }}
              className={cn(
                "mr-1 xl:mr-8 tracking-wide px-2 py-1 hover:text-gray-100 transition duration-300 ease-in-out focus:outline-none"
              )}
            >
              about
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
