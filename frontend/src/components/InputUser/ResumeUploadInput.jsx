import React from "react";

function ResumeUploadInput({ handleResumeChange }) {
  return (
    <div className="mb-6">
      <label className="block text-lg font-medium text-gray-700 mb-2">
        Upload a PDF resume:
      </label>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleResumeChange}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
}

export default ResumeUploadInput;
