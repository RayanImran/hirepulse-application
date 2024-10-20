import React, { useState } from "react";
import ColdEmailForm from "../components/ColdEmailForm";
import Results from "../components/Results";

function Home() {
  const [responseData, setResponseData] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📧 Cold Mail Generator</h1>
      <ColdEmailForm setResponseData={setResponseData} />
      <Results responseData={responseData} />
    </div>
  );
}

export default Home;
