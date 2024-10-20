import React from "react";

function ResumeUploadInput({ handleResumeChange }) {
  return (
    <div>
      <label>Upload a PDF resume:</label>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleResumeChange}
        style={{ marginBottom: "10px" }}
      />
    </div>
  );
}

export default ResumeUploadInput;
