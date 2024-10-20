import React from "react";

function JobDescriptionInput({ jobDescription, handleJobDescriptionChange }) {
  return (
    <div>
      <label>Enter the Job Description:</label>
      <textarea
        value={jobDescription}
        onChange={handleJobDescriptionChange}
        rows={10}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
    </div>
  );
}

export default JobDescriptionInput;
