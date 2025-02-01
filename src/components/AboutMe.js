import React from "react";
import user_info from "../data/user_info";
import { motion } from "motion/react";
function AboutMe() {
  const { description } = user_info?.main;
  return (
    <div className="flex w-screen">
      <div className=" w-screen h-auto dark:bg-darkBodyPrimary dark:text-white items-center justify-center self-center text-center">
        <h1 className="text-3xl dark:text-white text-center">About Me</h1>

        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
          }}
          className="dark:text-white text-justify px-44  text-xl mt-10 self-center"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}

export default AboutMe;
