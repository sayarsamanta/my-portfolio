import React from "react";
import home from "../assets/home.svg";
import { useTheme } from "../context/ThemeProvider";
import { motion } from "motion/react";
import "../pages/index.css";
import Type from "../components/Type";
import DownloadButton from "../common/DownloadButton";
import { useMenuToggle } from "../context/MenuToggle";
import AboutMe from "../components/AboutMe";
import user_info from "../data/user_info";
function Home() {
  const { darkMode } = useTheme();
  const { menu } = useMenuToggle();
  const {
    main: { name },
  } = user_info;

  return (
    <div className="dark:bg-darkBodyPrimary">
      <div
        className="lg:flex md:flex sm:flex  self-center place-items-center px-10 md:px-20 lg:px-30 xl:px-40 "
        style={{ paddingTop: "2%" }}
      >
        <div className=" flex flex-col items-center">
          <h1 className="dark:text-white text-lg pb-5 xl:hidden lg:hidden md:hidden sm:hidden">
            {`Hi I am ${name}`}
          </h1>

          <DownloadButton />
        </div>
        <img
          src={darkMode ? home : home}
          className="self-start md:self-start xl:self-start lg:self-start md:h-[420px] md:w-[420px] lg:h-[520px] lg:w-[620px] sm:w-[320px] sm:h-[280px]"
          alt="homeImage"
        ></img>
        <motion.div
          animate={{ x: "1%" }}
          //transition={transition}
          className="text-left ml-10 xl:mt-35 lg:mt-35  md:py-10 sm:py-10 lg:self-start md:self-start sm:self-start align-top   md:mt-5"
        >
          <h1 className="px-5 hidden md:block lg:block xl:block sm:block xl:text-4xl lg:text-3xl md:text-lg md:px-5 sm:text-xl dark:text-white sm:text-start">
            {`Hi I am ${name}`}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <div className="ml-5 pt-2 sm:mt-2 text-xs hidden md:block lg:block xl:block sm:block">
            <Type />
          </div>
          <DownloadButton variant={"large"} />
        </motion.div>
      </div>
      <AboutMe />
    </div>
  );
}

export default Home;
