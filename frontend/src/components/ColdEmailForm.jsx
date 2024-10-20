import React, { useState } from "react";
import axios from "axios";

function ColdEmailForm({ setResponseData }) {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState(null);

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!jobDescription || !resume) {
      alert("Please provide both job description and resume.");
      return;
    }
    const formData = new FormData();
    formData.append("job_description", jobDescription);
    formData.append("resume", resume);

    try {
      const response = await axios.post("/api/process/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResponseData(response.data);
    } catch (error) {
      console.error(error);
      alert("An error occurred during processing.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Enter the Job Description:</label>
        <textarea
          value={jobDescription}
          onChange={handleJobDescriptionChange}
          rows={10}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>Upload a PDF resume:</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleResumeChange}
          style={{ marginBottom: "10px" }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ColdEmailForm;
