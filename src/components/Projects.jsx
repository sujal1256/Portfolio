import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

function Projects({darkMode}) {
  return (
    <div id="projects" className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>

      <div className="flex justify-center gap-4 flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} darkMode={darkMode}/>
        ))}
      </div>
    </div>
  );
}

export default Projects;
