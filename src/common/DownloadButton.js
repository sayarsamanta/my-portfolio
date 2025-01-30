import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

function DownloadButton({ variant = "small" }) {
  return (
    <button
      className={
        variant === "large"
          ? "hidden lg:flex md:flex sm:flex m-10 p-4 border-[1px] h-10 sm:h-7 justify-center items-center bg-slate-100 rounded-md self-center shadow-md"
          : variant === "default"
          ? "flex p-4 border-[1px] h-10 sm:h-7 items-center bg-slate-100 rounded-md self-center shadow-md"
          : "flex bg-slate-100 rounded-md xl:hidden lg:hidden md:hidden sm:hidden  p-4 border-[1px] h-10 justify-center items-center self-center shadow-md"
      }
      onClick={() => {
        window.open(
          "https://drive.google.com/file/d/1HU42TIxv8Hyf9xq2dI8Ux4E60WlyUEXD/view?usp=share_link"
        );
      }}
    >
      <IoCloudDownloadOutline fill="#4b5563" />
      <span className="text-sm ml-2 text-gray-600">DOWNLOAD CV</span>
    </button>
  );
}

export default DownloadButton;
