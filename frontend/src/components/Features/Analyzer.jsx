import React, { useState } from "react";
import JobDescriptionInput from "../InputUser/JobDescriptionInput";
import ResumeUploadInput from "../InputUser/ResumeUploadInput";

export default function Analyzer() {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState(null);

  // Handlers for inputs
  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Resume Analyzer
      </h2>

      {/* Job Description Input */}
      <JobDescriptionInput
        jobDescription={jobDescription}
        handleJobDescriptionChange={handleJobDescriptionChange}
      />

      {/* Resume Upload Input */}
      <ResumeUploadInput handleResumeChange={handleResumeChange} />

      {/* Display Submitted Data (for demonstration purposes) */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-700">Submitted Data:</h3>
        <p className="text-gray-600">
          <strong>Job Description:</strong> {jobDescription}
        </p>
        <p className="text-gray-600">
          <strong>Resume:</strong> {resume ? resume.name : "No file uploaded"}
        </p>
      </div>
    </div>
  );
}
