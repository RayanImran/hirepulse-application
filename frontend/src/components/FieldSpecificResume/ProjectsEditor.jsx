import React from "react";

function ProjectsEditor({ projects, handleProjectsChange }) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">Projects:</label>
      {projects.map((project, index) => (
        <div key={index}>
          <p className="font-bold">{project.title}</p>
          <textarea
            value={project.description}
            onChange={(e) => handleProjectsChange(index, e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full mb-2"
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectsEditor;
