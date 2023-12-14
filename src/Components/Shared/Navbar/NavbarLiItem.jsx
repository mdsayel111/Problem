/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-scroll";

const NavbarLiItem = ({ theme, setTheme }) => {
  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", theme);
  }, [theme]);

  const handleTheme = (e) => {
    setTheme(theme === "light" ? "dark" : "light");
    e.target.blur();
  };

  return (
    <>
      <li className="items-center justify-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="hover:text-[var(--hover-color)] hover:bg-transparent font-semibold "
        >
          Home
        </Link>
      </li>
      <li className="items-center justify-center">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="hover:text-[var(--hover-color)] hover:bg-transparent font-semibold "
        >
          About
        </Link>
      </li>
      <li className="items-center justify-center">
        <Link
          to="skill"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="hover:text-[var(--hover-color)] hover:bg-transparent font-semibold "
        >
          Skill
        </Link>
      </li>
      <li className="items-center justify-center">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="hover:text-[var(--hover-color)] hover:bg-transparent font-semibold "
        >
          Project
        </Link>
      </li>
      <li className="items-center justify-center">
        <Link
          to="resume"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="hover:text-[var(--hover-color)] hover:bg-transparent font-semibold "
        >
          Resume
        </Link>
      </li>
      <li className="items-center justify-center">
        <Link
          to="contact-me"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="hover:text-[var(--hover-color)] hover:bg-transparent font-semibold "
        >
          Contact
        </Link>
      </li>
      <li className="items-center justify-center">
        <input
          onChange={handleTheme}
          type="checkbox"
          className="toggle rounded-2xl"
          checked={theme === "dark" ? true : false}
        />
      </li>
    </>
  );
};

export default NavbarLiItem;
