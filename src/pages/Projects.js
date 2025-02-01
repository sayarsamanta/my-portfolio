import React from "react";
import user_info from "../data/user_info";
import Title from "../reusable/Title";
import ProjectCard from "../components/ProjectCard";
function Projects() {
  const {
    projects: { title, card: card },
  } = user_info;
  return (
    <div className="h-full dark:bg-darkBodyPrimary">
      <Title name={title} />
      <div className="flex flex-wrap justify-center">
        {card.map((item) => {
          return <ProjectCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
