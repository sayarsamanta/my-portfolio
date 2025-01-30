import React from "react";
// import homeLight from "../assets/homeLight.svg";
// import homeDark from "../assets/homeDark.svg";
import home from "../assets/home.svg";
import { useTheme } from "../context/ThemeProvider";
import { motion } from "motion/react";
import info from "../data/user_info";
import "../pages/index.css";
import Type from "../components/Type";
import DownloadButton from "../common/DownloadButton";
import { useMenuToggle } from "../context/MenuToggle";
function Home() {
  const { darkMode } = useTheme();
  const { menu } = useMenuToggle();
  const { shortDes } = info?.main;
  return (
    <div
      className="w-full h-full sm:h-screen lg:flex md:flex sm:flex   dark:bg-darkBodyPrimary self-start"
      style={{ paddingTop: menu ? "30%" : 0 }}
    >
      <div className=" flex flex-col items-center">
        <h1 className="dark:text-white text-lg pb-5 xl:hidden lg:hidden md:hidden sm:hidden">
          {`Hi I am Sayar`}
        </h1>
        <DownloadButton />
      </div>
      <img
        src={!darkMode ? home : home}
        className="self-start md:self-start xl:self-start lg:self-start md:h-[420px] md:w-[420px] lg:h-[520px] lg:w-[620px] sm:w-[320px] sm:h-[280px]"
        alt="homeImage"
      ></img>
      <motion.div
        animate={{ x: "1%" }}
        //transition={transition}
        className="text-left lg:py-40  md:py-10 sm:py-10 lg:self-start md:self-start sm:self-start align-top  lg:-mt-24 md:mt-5"
      >
        <h1 className="px-5 lg:text-4xl md:text-lg md:px-5 sm:text-xl dark:text-white sm:text-start">
          {"Hi I am Sayar"}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
        <p className="px-5 lg:self-start lg:text-xl md:px-5 md:text-xl sm:text-xs sm:w-4/5 dark:text-white pt-2">
          {shortDes}
        </p>
        <div className="ml-5 pt-2 sm:mt-2 text-xs">
          <Type />
        </div>

        {/* <motion.button
          className="hidden lg:flex md:flex sm:flex m-10 p-4 border-[1px] h-10 sm:h-7 justify-center items-center bg-slate-100 rounded-md self-center shadow-md"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1HU42TIxv8Hyf9xq2dI8Ux4E60WlyUEXD/view?usp=share_link"
            );
          }}
        >
          <IoCloudDownloadOutline fill="#4b5563" />
          <span className="text-xs ml-2 text-gray-600">DOWNLOAD CV</span>
        </motion.button> */}
        <DownloadButton variant={"large"} />
      </motion.div>
    </div>
  );
}

export default Home;
