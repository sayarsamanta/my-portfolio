import React from "react";
import SkillsList from "../components/SkillsList";
import { useMenuToggle } from "../context/MenuToggle";
function Skills() {
  const { menu } = useMenuToggle();
  return (
    <div
      className="justify-center items-center dark:bg-darkBodyPrimary"
      style={{ paddingTop: "20px" }}
    >
      <SkillsList />
    </div>
  );
}

export default Skills;
