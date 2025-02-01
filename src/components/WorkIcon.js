import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { MdSchool } from "react-icons/md";
function WorkIcon({ type }) {
  return (
    <div className="absolute left-[15px] top-5  sm:left-[15px] sm:top-[20px] md:top-[20px] md:left-[15px] lg:top-[20px] lg:left-[15px] xl:top-[30px] xl:left-[24px]">
      {type === "training" ? (
        <GrCertificate fill="#44485c" />
      ) : type === "school" ? (
        <MdSchool fill="#44485c" />
      ) : (
        <MdOutlineWork fill="#44485c" />
      )}
    </div>
  );
}

export default WorkIcon;
