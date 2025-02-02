import "../components/NavBarStyle.css";
import React from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import profilePic from "../assets/profilePic.png";
import { motion } from "motion/react";
import { Link } from "react-router";
import { useTheme } from "../context/ThemeProvider";
import useWindowDimensions from "../hook/useWindowDimensions";
import { useMenuToggle } from "../context/MenuToggle";
function NavBar() {
  const { darkMode } = useTheme();
  const { width } = useWindowDimensions();
  const { menu, setMenu } = useMenuToggle();
  const handleToggle = () => {
    setMenu(!menu);
  };
  return (
    <div
      className={
        "flex self-end py-7 px-10 text-lg text-black dark:bg-darkBodyPrimary"
      }
    >
      <div className="flex font-semibold">
        <ul className="hidden self-end items-center m-auto text-center lg:flex md:flex dark:text-white">
          <Link to={"/"} className="pl-2 dark:text-white">
            <img
              src={profilePic}
              className="h-12 w-11 rounded-full hidden lg:block md:block"
              alt="profilePic"
            ></img>
          </Link>
          <Link to={"/experience"} className="navbar-items">
            Experience
          </Link>
          <Link to={"/projects"} className="navbar-items">
            Projects
          </Link>
          <Link to={"/resume"} className="navbar-items">
            Resume
          </Link>
          <Link to={"/skills"} className="navbar-items">
            Skills
          </Link>
        </ul>
      </div>

      <nav className="block md:hidden lg:hidden">
        <span
          onClick={() => {
            handleToggle();
          }}
          className="h-10 w-10 absolute"
        >
          {!menu ? (
            <IoIosMenu fill={darkMode ? "black" : "white"} />
          ) : (
            <IoMdClose fill={darkMode ? "black" : "white"} />
          )}
          {menu && (
            <motion.div
              key={menu}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              style={{ width: width - 90 }}
              className={
                "flex absolute  h-36 mt-4 z-10 top-15 rounded-lg justify-center overflow-hidden  text-black dark:bg-darkBodyPrimary dark:text-white"
              }
            >
              <ul>
                <li>
                  <Link to={"/experience"} className="navbar-collapse">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link className="navbar-collapse" to={"/projects"}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to={"/resume"} className="navbar-collapse">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link to={"/skills"} className="navbar-collapse">
                    Skills
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </span>
      </nav>
    </div>
  );
}

export default NavBar;
