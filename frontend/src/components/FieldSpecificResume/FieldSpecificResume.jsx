import React, { useState } from "react";
import TechResume from "./TechResume.jsx";
import html2pdf from "html2pdf.js";

function FieldSpecificResumePage() {
  const [selectedField, setSelectedField] = useState("");

  const renderResumeTemplate = () => {
    switch (selectedField) {
      case "tech":
        return <TechResume />;
      // Other fields can be added here
      default:
        return (
          <p className="text-gray-500">
            Please select a job field to get started.
          </p>
        );
    }
  };

  // Function to convert the resume section to PDF
  const handleDownloadPDF = () => {
    const resumeElement = document.getElementById("resume-template"); // Target the resume section by ID
    const options = {
      margin: 1,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(resumeElement).set(options).save();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Field-Specific Resume Optimization
        </h2>

        <div className="mb-6">
          <label
            htmlFor="job-field"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Select Job Field:
          </label>
          <select
            id="job-field"
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">--Select a Field--</option>
            <option value="tech">Tech</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
          </select>
        </div>

        <div
          id="resume-template"
          className="bg-gray-50 p-6 rounded-md shadow-md mt-6"
        >
          {/* Render the resume with improved layout */}
          <div className="resume-template mt-4">{renderResumeTemplate()}</div>
        </div>

        {/* Convert to PDF Button */}
        {selectedField && (
          <div className="mt-6 text-center">
            <button
              onClick={handleDownloadPDF}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md shadow-lg font-semibold"
            >
              Download as PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FieldSpecificResumePage;
