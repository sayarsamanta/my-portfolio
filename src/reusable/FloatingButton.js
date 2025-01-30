import React from "react";
import { useTheme } from "../context/ThemeProvider";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";

function FloatingButton() {
  const { toggleTheme, darkMode } = useTheme();
  return (
    <div className="flex justify-center dark:bg-bodyPrimary bg-darkBodyPrimary h-14 w-14  bottom-20 fixed z-90 right-10 rounded-lg">
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
