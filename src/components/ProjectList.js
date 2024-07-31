import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
const projectsFn=projects.map((project)=>{
  return (
    <div key={project.id}>
      <ProjectItem name={project.name} about={project.about} technologies={project.technologies}/>
    </div>
  )
})
  // console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */projectsFn}</div>
    </div>
  );
}

export default ProjectList;
