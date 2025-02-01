import React from "react";

function Title({ name }) {
  return (
    <div
      className="text-gray-700 dark:text-white
    text-lg lg:text-2xl  xl:text-2xl sm:text-lg md:text-lg"
    >
      {name + " "}{" "}
      {name?.includes("Skill") ? " 🧑‍💻" : name?.includes("Works") ? "📽️" : " 🔨"}
    </div>
  );
}

export default Title;
