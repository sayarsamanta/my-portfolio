import React from "react";

function Title({ name }) {
  return (
    <div
      className="text-black font-semibold dark:text-white
    text-lg lg:text-2xl  xl:text-xl sm:text-lg md:text-lg"
    >
      {name + " "}{" "}
      {name?.includes("Skill")
        ? " 🧑‍💻"
        : name?.includes("Works")
        ? "📽️"
        : name.includes("About")
        ? ""
        : " 🔨"}
    </div>
  );
}

export default Title;
