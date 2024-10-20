import React, { useState } from "react";
import axios from "axios";
import JobDescriptionInput from "./InputUser/JobDescriptionInput.jsx";
import ResumeUploadInput from "./InputUser/ResumeUploadInput.jsx";

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
      <JobDescriptionInput
        jobDescription={jobDescription}
        handleJobDescriptionChange={handleJobDescriptionChange}
      />
      <ResumeUploadInput handleResumeChange={handleResumeChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ColdEmailForm;
