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
    <>
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

        <span
          onClick={() => {
            handleToggle();
          }}
          className="block sm:block lg:hidden xl:hidden md:hidden h-10 w-10 absolute"
        >
          <IoIosMenu fill={darkMode ? "black" : "white"} />
        </span>
      </div>
      <nav className="block md:hidden lg:hidden">
        {menu && (
          <motion.div
            key={menu}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={{ width: width }}
            className={
              "flex flex-col shadow-lg absolute h-56 top-0 z-10 justify-start bg-gray-100 dark:bg-darkBodySecondary dark:text-white rounded-b-xl"
            }
          >
            <div className="h-10 w-10 ">
              <span
                onClick={() => {
                  handleToggle();
                }}
              >
                <IoMdClose
                  size={20}
                  fill={darkMode ? "black" : "white"}
                  className="m-7"
                />
              </span>
            </div>
            <div className="w-full mt-7">
              <ul className=" text-black dark:text-white">
                <li>
                  <Link
                    onClick={() => {
                      handleToggle();
                    }}
                    to={"/"}
                    className="navbar-collapse font-bold text-lg"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      handleToggle();
                    }}
                    to={"/experience"}
                    className="navbar-collapse font-bold text-lg"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      handleToggle();
                    }}
                    className="navbar-collapse font-bold text-lg"
                    to={"/projects"}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      handleToggle();
                    }}
                    to={"/resume"}
                    className="navbar-collapse font-bold text-lg"
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/skills"}
                    onClick={() => {
                      handleToggle();
                    }}
                    className="navbar-collapse font-bold text-lg"
                  >
                    Skills
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
