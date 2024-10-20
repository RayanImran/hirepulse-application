import React from "react";

function ExperienceEditor({ experience, handleExperienceChange }) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">Experience:</label>
      {experience.map((item, index) => (
        <div key={index}>
          <p className="font-bold">
            {item.role}, {item.company}
          </p>
          <textarea
            value={item.details}
            onChange={(e) => handleExperienceChange(index, e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full mb-2"
          />
        </div>
      ))}
    </div>
  );
}

export default ExperienceEditor;
