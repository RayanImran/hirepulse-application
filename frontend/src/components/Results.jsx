import React from "react";
import Plot from "react-plotly.js";

function Results({ responseData }) {
  if (!responseData) return null;

  return (
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
  );
}

export default Results;
