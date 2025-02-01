import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "../context/ThemeProvider";
import user_info from "../data/user_info";
function Footer() {
  const { darkMode } = useTheme();
  const {
    socials: { linkedin, github, instagram },
  } = user_info;
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="flex pt-10 dark:bg-darkBodyPrimary justify-between px-10">
      <div className="dark:bg-darkBodyPrimary text-xs dark:text-white p-5 flex">
        © {year} React & Tailwind CSS Portfolio.
      </div>
      <ul className="footer-icons flex justify-center items-center">
        <li className="social-icons m-2">
          <a
            href={github}
            //style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub fill={!darkMode ? "white" : "black"} />
          </a>
        </li>
        {/* <li className="social-icons m-2">
          <a
            href="https://x.com/sayarsamanta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter fill={!darkMode ? "white" : "black"} />
          </a>
        </li> */}
        <li className="social-icons m-2">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn fill={!darkMode ? "white" : "black"} />
          </a>
        </li>
        <li className="social-icons m-2">
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <AiFillInstagram fill={!darkMode ? "white" : "black"} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
