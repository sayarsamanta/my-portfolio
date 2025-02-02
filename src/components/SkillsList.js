import React from "react";
import {
  FaReact,
  FaHtml5,
  FaJava,
  FaGithub,
  FaSlack,
  FaBitbucket,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TfiAndroid } from "react-icons/tfi";
import { VscCode } from "react-icons/vsc";
import {
  SiRedux,
  SiTailwindcss,
  SiJira,
  SiAndroidstudio,
  SiMacos,
  SiJest,
  SiXcode,
  SiFirebase,
  SiPostman,
} from "react-icons/si";
import Title from "../reusable/Title";
import user_info from "../data/user_info";
import { useTheme } from "../context/ThemeProvider";
function SkillsList() {
  const {
    skills: { title },
    tools: { title: toolsTitle },
  } = user_info;
  const { darkMode } = useTheme();
  return (
    <div className="dark:bg-darkBodyPrimary">
      <Title name={title} />
      <div className="flex flex-wrap justify-center pt-5 mb-10">
        <div
          className="flex shadow-xl items-center justify-center w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30
         dark:bg-darkBodyPrimary m-6 rounded-md border-[1px] transition-all duration-500 hover:scale-90"
        >
          <FaReact size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div
          className="flex shadow-xl items-center justify-center w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30
         dark:bg-darkBodyPrimary m-6 rounded-md border-[1px] transition-all duration-500 hover:scale-90"
        >
          <SiRedux size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl dark:bg-darkBodyPrimary items-center justify-center transition-all hover:scale-90 duration-500 w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30 m-6 rounded-md border-[1px]">
          <SiTailwindcss size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl dark:bg-darkBodyPrimary items-center justify-center transition-all hover:scale-90 duration-500 w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30  m-6 rounded-md border-[1px]">
          <FaHtml5 size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl dark:bg-darkBodyPrimary items-center justify-center transition-all hover:scale-90 duration-500 w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30  m-6 rounded-md border-[1px]">
          <FaJava size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl dark:bg-darkBodyPrimary items-center justify-center transition-all hover:scale-90 duration-500 w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30 m-6 rounded-md border-[1px]">
          <FaBootstrap size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl dark:bg-darkBodyPrimary items-center justify-center transition-all hover:scale-90 duration-500 w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30  m-6 rounded-md border-[1px]">
          <FaNodeJs size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl dark:bg-darkBodyPrimary items-center justify-center transition-all hover:scale-90 duration-500 w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30  m-6 rounded-md border-[1px]">
          <TfiAndroid size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl dark:bg-darkBodyPrimary items-center justify-center transition-all hover:scale-90 duration-500 w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30 m-6 rounded-md border-[1px]">
          <SiMacos size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl dark:bg-darkBodyPrimary items-center justify-center transition-all hover:scale-90 duration-500 w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30  m-6 rounded-md border-[1px]">
          <IoLogoJavascript size={30} fill={!darkMode ? "white" : "black"} />
        </div>
      </div>
      <Title name={toolsTitle} />
      <div className="flex flex-wrap justify-center pt-5">
        <div className="flex shadow-xl transition-all duration-500 items-center hover:scale-90 justify-center  w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30 dark:bg-darkBodyPrimary m-6 rounded-md border-[1px]">
          <FaGithub size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl transition-all hover:scale-90 duration-500 dark:bg-darkBodyPrimary items-center justify-center w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30  m-6 rounded-md border-[1px]">
          <FaSlack size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl transition-all hover:scale-90 duration-500 dark:bg-darkBodyPrimary items-center justify-center w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30  m-6 rounded-md border-[1px]">
          <FaBitbucket size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl transition-all hover:scale-90 duration-500 dark:bg-darkBodyPrimary items-center justify-center w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30  m-6 rounded-md border-[1px]">
          <SiJira size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl transition-all hover:scale-90 duration-500 dark:bg-darkBodyPrimary items-center justify-center w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30  m-6 rounded-md border-[1px]">
          <SiAndroidstudio size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl transition-all hover:scale-90 duration-500 dark:bg-darkBodyPrimary items-center justify-center w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30  m-6 rounded-md border-[1px]">
          <SiJest size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl transition-all hover:scale-90 duration-500 dark:bg-darkBodyPrimary items-center justify-center w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30  m-6 rounded-md border-[1px]">
          <SiFirebase size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl transition-all hover:scale-90 duration-500 dark:bg-darkBodyPrimary items-center justify-center w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30  m-6 rounded-md border-[1px]">
          <SiPostman size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl transition-all hover:scale-90 duration-500 dark:bg-darkBodyPrimary items-center justify-center w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30  m-6 rounded-md border-[1px]">
          <SiXcode size={30} fill={!darkMode ? "white" : "black"} />
        </div>
        <div className="flex shadow-xl transition-all hover:scale-90 duration-500 dark:bg-darkBodyPrimary items-center justify-center w-20 h-20 md:w-40 md:h-20 lg:w-40 lg:h-20 sm:w-40 sm:h-20 xl:w-55 xl:h-30  m-6 rounded-md border-[1px]">
          <VscCode size={30} fill={!darkMode ? "white" : "black"} />
        </div>
      </div>
    </div>
  );
}

export default SkillsList;
