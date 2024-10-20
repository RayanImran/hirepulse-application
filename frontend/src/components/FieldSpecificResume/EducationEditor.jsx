import React from "react";

function EducationEditor({ education, handleEducationChange }) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">Education:</label>
      <input
        type="text"
        value={education}
        onChange={handleEducationChange}
        className="border border-gray-300 px-4 py-2 rounded-md w-full"
      />
    </div>
  );
}

export default EducationEditor;
