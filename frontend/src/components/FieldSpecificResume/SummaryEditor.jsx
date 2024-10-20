import React from "react";

function SummaryEditor({ summary, handleSummaryChange }) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">Professional Summary:</label>
      <textarea
        value={summary}
        onChange={handleSummaryChange}
        className="border border-gray-300 px-4 py-2 rounded-md w-full"
      />
    </div>
  );
}

export default SummaryEditor;
