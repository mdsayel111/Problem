/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import "./Navbar.css";
import NavbarLiItem from "./NavbarLiItem";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="navbar p-4 lg:p-0 sticky top-0 z-50 bg-[var(--bg2-cl)]">
      <div className="navbar-start flex flex-row-reverse lg:flex-row justify-between w-full lg:w-[50%] lg:justify-start">
        <div className="drawer drawer-end w-auto lg:hidden z-50 ">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button">
              <IoMdMenu />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 bg-theme min-h-full w-[70%] text-base-content">
              {/* Sidebar content here */}
              <NavbarLiItem theme={theme} setTheme={setTheme} />
            </ul>
          </div>
        </div>

        <a className="text-center font-semibold cursor-pointer text-[var(--text-color)]">
          Sayel.Dev <br />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1">
          <NavbarLiItem theme={theme} setTheme={setTheme} />
        </ul>
      </div>
      <div className="hidden lg:flex navbar-end">
        <Link
          to="contact-me"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="btn text-white bg-[#323232] hover:bg-[var(--hover-color)]"
        >
          Let's talk
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
