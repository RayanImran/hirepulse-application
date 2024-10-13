import React, { useState } from "react";
import axios from "axios";
import Plot from "react-plotly.js";

function App() {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState(null);
  const [responseData, setResponseData] = useState(null);

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
    <div style={{ padding: "20px" }}>
      <h1>📧 Cold Mail Generator</h1>
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

      {responseData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Extracted Job Description:</h2>
          <textarea
            value={responseData.job_description}
            readOnly
            rows={10}
            style={{ width: "100%" }}
          />

          <h2>Uploaded Resume Content:</h2>
          <textarea
            value={responseData.resume_content}
            readOnly
            rows={10}
            style={{ width: "100%" }}
          />

          <h2>Generated Cold Email:</h2>
          <pre style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
            {responseData.email}
          </pre>

          <h2>ATS Score:</h2>
          <p>{responseData.ats_score}%</p>

          <Plot
            data={[
              {
                type: "indicator",
                mode: "gauge+number",
                value: responseData.ats_score,
                gauge: {
                  axis: { range: [0, 100] },
                  bar: { color: "darkblue" },
                  steps: [
                    { range: [0, 50], color: "red" },
                    { range: [50, 75], color: "yellow" },
                    { range: [75, 100], color: "green" },
                  ],
                },
              },
            ]}
            layout={{ width: 400, height: 300 }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
