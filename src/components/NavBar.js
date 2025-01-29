import "../components/NavBarStyle.css";
import React, { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import profilePic from "../assets/profilePic.png";
import { motion } from "motion/react";
import info from "../data/user_info";
import { Link } from "react-router";
function NavBar() {
  const { name } = info?.main;
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-between self-center py-7 px-10 text-lg"
    >
      <div className="flex self-center relative">
        <img
          src={profilePic}
          className="h-10 w-10 rounded-full hidden lg:block md:block"
        ></img>
        <Link to={"/"} className="pl-2 self-center">
          {name}
        </Link>
      </div>
      <ul className="hidden self-center lg:flex md:flex">
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
      <nav className="block md:hidden lg:hidden justify-center self-center">
        <span
          onClick={() => {
            handleToggle();
          }}
          className="h-10 w-10"
        >
          {showMenu ? <IoIosMenu /> : <IoMdClose />}

          <motion.div
            key={showMenu}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className={
              showMenu
                ? "hidden"
                : "absolute h-36 w-screen mt-4 right-0 -(bottom-10) z-10 column shadow-lg rounded-lg justify-center overflow-hidden "
            }
            style={{ backgroundColor: "#faebd7" }}
          >
            <ul>
              <Link to={"/experience"} className="navbar-collapse">
                Experience
              </Link>
              <Link to={"/projects"} className="navbar-collapse">
                Projects
              </Link>
              <Link to={"/resume"} className="navbar-collapse">
                Resume
              </Link>
              <Link to={"/skills"} className="navbar-collapse">
                Skills
              </Link>
            </ul>
          </motion.div>
        </span>
      </nav>
    </motion.div>
  );
}

export default NavBar;
