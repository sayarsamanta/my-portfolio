import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeProvider";
function ProjectCard({ item }) {
  const { darkMode } = useTheme();
  const { title, description, technologies, image, github } = item;

  return (
    <div className="block w-[330px] h-[500px] m-10 rounded-lg dark:bg-darkBodyPrimary shadow-lg justify-center p-4">
      <img alt="projectcard" className="h-[200px] my-5" src={image}></img>
      <h3 className="text-sm font-semibold dark:text-white">{title}</h3>
      <p className="text-sm/6 dark:text-white">{description}</p>
      <span className="text-xs underline dark:text-white">{technologies}</span>
      <div
        className="flex justify-center mt-5"
        onClick={() => {
          window.open(github);
        }}
      >
        {github ? (
          <AiFillGithub
            className="cursor-pointer"
            size={15}
            fill={!darkMode ? "white" : "black"}
          />
        ) : (
          <FaExternalLinkAlt
            className="cursor-pointer"
            size={15}
            fill={!darkMode ? "white" : "black"}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
