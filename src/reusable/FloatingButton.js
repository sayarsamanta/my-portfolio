import React from "react";
import { useTheme } from "../context/ThemeProvider";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";

function FloatingButton() {
  const { toggleTheme, darkMode } = useTheme();
  return (
    <div className="flex justify-center dark:bg-bodyPrimary bg-darkBodyPrimary h-10 w-10 top-5 fixed z-90 right-10 rounded-lg">
      <button
        className="self-center"
        onClick={() => {
          toggleTheme();
        }}
      >
        {!darkMode && <MdDarkMode fill="black" />}
        {darkMode && <MdOutlineWbSunny fill="white" />}
      </button>
    </div>
  );
}

export default FloatingButton;
