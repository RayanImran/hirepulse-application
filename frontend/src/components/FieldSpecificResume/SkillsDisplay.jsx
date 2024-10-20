import React from "react";

function SkillsDisplay({ skills }) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">Skills:</label>
      <input
        type="text"
        value={skills.join(", ")}
        readOnly
        className="border border-gray-300 px-4 py-2 rounded-md w-full"
      />
    </div>
  );
}

export default SkillsDisplay;
