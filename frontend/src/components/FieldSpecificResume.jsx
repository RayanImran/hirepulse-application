import React, { useState } from "react";

function FieldSpecificResume() {
  const [selectedField, setSelectedField] = useState("");
  const [generatedResume, setGeneratedResume] = useState("");

  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);
  };

  const handleGenerateResume = () => {
    // For demo purposes, hardcode resume templates
    const templates = {
      tech: "Tech Resume: Focus on projects, programming languages, and frameworks.",
      healthcare:
        "Healthcare Resume: Focus on certifications, patient care experience, and relevant training.",
      finance:
        "Finance Resume: Focus on financial analysis, risk management, and quantitative skills.",
    };

    // Generate resume based on selected field
    setGeneratedResume(
      templates[selectedField] || "Please select a job field."
    );
  };

  return (
    <div>
      <h2>Field-Specific Resume Optimization</h2>
      <div>
        <label htmlFor="job-field">Select Job Field:</label>
        <select
          id="job-field"
          value={selectedField}
          onChange={handleFieldChange}
        >
          <option value="">--Select a Field--</option>
          <option value="tech">Tech</option>
          <option value="healthcare">Healthcare</option>
          <option value="finance">Finance</option>
          {/* Add more fields as needed */}
        </select>
        <button
          onClick={handleGenerateResume}
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
        >
          Generate Resume
        </button>
      </div>

      {generatedResume && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3>Generated Resume:</h3>
          <p>{generatedResume}</p>
        </div>
      )}
    </div>
  );
}

export default FieldSpecificResume;
