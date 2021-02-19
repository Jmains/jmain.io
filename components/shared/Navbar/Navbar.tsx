import { useState, useEffect, FC } from "react";
import throttle from "lodash.throttle";
import cn from "classnames";
import s from "./Navbar.module.css";
import { Email } from "@components/icons";
import Link from "next/link";
// import { AcademicCap } from "@components/icons";
// import { useUIDispatch } from "@components/ui/context";

const Navbar: FC = () => {
  // const uiDispatch = useUIDispatch();
  const [hasScrolled, setHasScrolled] = useState(false);

  // Detect whether user has scrolled down
  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 15;
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
        " sticky top-0 z-40 transition-all duration-300 ease-in-out xl:bg-gray-bg",
        {
          "shadow-md bg-white": hasScrolled,
        }
      )}
    >
      {/* Maybe add some navbar scrolling effects later */}
      <div className="w-full mx-auto">
        <div className="flex items-center justify-between bg-gray-bg h-14 lg:w-4/6 xl:w-11/12 lg:rounded-tr-xl pl-4 pr-2 md:px-6 lg:pl-8 lg:pr-5">
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
          {/* <div className="-mr-2 flex md:hidden"> */}
          {/* Mobile menu button */}
          {/* <button className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open menu</span> */}

          {/* Heroicon name: menu */}

          {/* Menu open: "hidden", Menu closed: "block" */}

          {/* <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg> */}

          {/* Heroicon name: x */}

          {/* Menu open: "block", Menu closed: "hidden" */}

          {/* <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg> */}
          {/* </button>
          </div> */}
          <div className="text-gray-400 text-sm xl:px-6">
            <button className="md:mr-8 mr-1 tracking-wide px-2 py-1 hover:text-gray-100 transition duration-300 ease-in-out focus:outline-none">
              projects.
            </button>
            <button className="md:mr-8 mr-1 tracking-wide px-2 py-1 hover:text-gray-100 transition duration-300 ease-in-out focus:outline-none">
              skills.
            </button>
            <button className="md:mr-3 tracking-wide px-2 py-1 hover:text-gray-100 transition duration-300 ease-in-out focus:outline-none">
              about.
            </button>
          </div>

          <span
            className={
              hasScrolled
                ? " absolute right-0 mr-24 text-sm text-gray-400 hidden hover:text-red-300 transition duration-300 ease-in-out cursor-pointer lg:block"
                : "hidden"
            }
          >
            Let's Talk.
          </span>
          <button
            className={
              hasScrolled
                ? " absolute right-0 mr-12 focus:outline-none text-red-400 fill-current hidden lg:block"
                : "hidden"
            }
          >
            <Email className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Mobile menu, toggle classNamees based on menu state.

  Open: "block", closed: "hidden" */}

      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"  */}
          <a
            href="#"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Study Sessions
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Calendar
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Reports
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">Tom Cook</div>
              <div className="text-sm font-medium leading-none text-gray-400">
                tom@example.com
              </div>
            </div>
            <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              {/* Heroicon name: bell  */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Your Profile
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Settings
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
