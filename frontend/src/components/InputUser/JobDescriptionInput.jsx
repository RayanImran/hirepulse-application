import React from "react";

function JobDescriptionInput({ jobDescription, handleJobDescriptionChange }) {
  return (
    <div className="mb-6">
      <label className="block text-lg font-medium text-gray-700 mb-2">
        Enter the Job Description:
      </label>
      <textarea
        value={jobDescription}
        onChange={handleJobDescriptionChange}
        rows={10}
        className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none"
        placeholder="Paste the job description here..."
      />
    </div>
  );
}

export default JobDescriptionInput;
