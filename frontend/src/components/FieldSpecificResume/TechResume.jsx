import React from "react";

function TechResume() {
  const resumeData = {
    name: "John Doe",
    summary:
      "A highly skilled software engineer with a focus on full-stack development, specializing in React, Node.js, and cloud technologies.",
    experience: [
      {
        role: "Software Engineer",
        company: "Tech Solutions Inc.",
        details: [
          "Developed and maintained web applications using React, Node.js, and AWS.",
          "Improved application performance by 30% through code optimization.",
          "Collaborated with cross-functional teams to design new features.",
        ],
      },
    ],
    projects: [
      {
        title: "E-commerce Website",
        description: [
          "Built an e-commerce platform using MERN stack.",
          "Integrated secure payment gateways and improved user experience.",
          "Deployed application on AWS for scalability and performance.",
        ],
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "AWS", "Docker"],
    education: "BSc in Computer Science, XYZ University",
  };

  return (
    <div>
      {/* Name and Professional Summary */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold">{resumeData.name}</h3>
        <p className="text-lg italic text-gray-700">{resumeData.summary}</p>
      </div>

      {/* Experience Section */}
      <div className="mb-4">
        <h4 className="text-xl font-semibold">Experience</h4>
        {resumeData.experience.map((item, index) => (
          <div key={index} className="mt-2">
            <p className="font-bold">
              {item.role}, {item.company}
            </p>
            <ul className="list-disc list-inside text-gray-700">
              {item.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="mb-4">
        <h4 className="text-xl font-semibold">Projects</h4>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="mt-2">
            <p className="font-bold">{project.title}</p>
            <ul className="list-disc list-inside text-gray-700">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mb-4">
        <h4 className="text-xl font-semibold">Skills</h4>
        <ul className="list-disc list-inside text-gray-700">
          {resumeData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Education Section */}
      <div className="mb-4">
        <h4 className="text-xl font-semibold">Education</h4>
        <p className="text-gray-700">{resumeData.education}</p>
      </div>
    </div>
  );
}

export default TechResume;
