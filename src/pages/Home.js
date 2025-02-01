import React, { useEffect } from "react";
// import homeLight from "../assets/homeLight.svg";
// import homeDark from "../assets/homeDark.svg";
import home from "../assets/home.svg";
import { useTheme } from "../context/ThemeProvider";
import { motion } from "motion/react";
import "../pages/index.css";
import Type from "../components/Type";
import DownloadButton from "../common/DownloadButton";
import { useMenuToggle } from "../context/MenuToggle";
import AboutMe from "../components/AboutMe";
function Home() {
  const { darkMode } = useTheme();
  const { menu } = useMenuToggle();

  useEffect(() => {
    const call = callTest();
    call();
  }, []);

  const callTest = () => {
    let a = 10;
    return function () {
      function xy() {
        console.log(a);
      }
      xy();
    };
  };

  return (
    <div className="dark:bg-darkBodyPrimary">
      <div
        className="w-full h-full lg:flex md:flex sm:flex    self-center place-items-center"
        style={{ paddingTop: menu ? "30%" : "2%" }}
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
          className="text-left ml-20 xl:mt-35 lg:mt-35  md:py-10 sm:py-10 lg:self-start md:self-start sm:self-start align-top   md:mt-5"
        >
          <h1 className="px-5 hidden md:block lg:block xl:block sm:block lg:text-4xl md:text-lg md:px-5 sm:text-xl dark:text-white sm:text-start">
            {"Hi I am Sayar"}
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
