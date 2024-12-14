/*
// Create the entire page dynamically using JavaScript

// Set up the main document structure
document.body.style.fontFamily = "Arial, sans-serif";
document.title = "About the Developers";

// Create the page header
const header = document.createElement("h1");

header.textContent = "About the Developers";
document.body.appendChild(header);

// Team data
const team = [
  {
    name: "Anafal humaid Al-saidi-66j20876 ",
    role: "Front-End Developer and Server-Side Developer",
    contribution:
      "Developed the UI/UX design and implemented responsive layouts using CSS frameworks and Developed  and managed the back-end logic using Node.js and Express..",
  },
  {
    name: "sheika Al-shihhi 66S1928",
    role: "Database Designer and Server-Side Developer",
    contribution:
      "Designed and optimized the relational database schema for efficient data storage and retrieval and Developed  and managed the back-end logic using Node.js and Express..",
  },
];

// References data
const references = [
  { name: "W3Schools", url: "https://www.w3schools.com" },
  { name: "Bootstrap Documentation", url: "https://getbootstrap.com" },
  { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
];

// Function to render team section
function renderTeamSection() {
  const teamDiv = document.createElement("div");
  team.forEach((member) => {
    const memberDiv = document.createElement("div");
    memberDiv.style.marginBottom = "20px";
    memberDiv.innerHTML = `
            <h3>${member.name}</h3>
            <p><strong>Role:</strong> ${member.role}</p>
            <p><strong>Contribution:</strong> ${member.contribution}</p>
        `;
    teamDiv.appendChild(memberDiv);
  });
  document.body.appendChild(teamDiv);
}

// Function to render references section
function renderReferencesSection() {
  const referencesDiv = document.createElement("div");
  const refHeader = document.createElement("h2");
  refHeader.textContent = "References";
  referencesDiv.appendChild(refHeader);

  const refList = document.createElement("ul");
  references.forEach((ref) => {
    const refItem = document.createElement("li");
    const refLink = document.createElement("a");
    refLink.href = ref.url;
    refLink.target = "_blank";
    refLink.textContent = ref.name;
    refLink.style.color = "blue";
    refLink.style.textDecoration = "none";
    refLink.onmouseover = () => (refLink.style.textDecoration = "underline");
    refLink.onmouseout = () => (refLink.style.textDecoration = "none");
    refItem.appendChild(refLink);
    refList.appendChild(refItem);
  });
  referencesDiv.appendChild(refList);
  referencesDiv.style.marginTop = "30px";
  document.body.appendChild(referencesDiv);
}

// Render the content
renderTeamSection();
renderReferencesSection();

*/
import React, { useEffect } from "react";

const DevelopersPage = () => {
  useEffect(() => {
    // Set up the dynamic content
    document.title = "About the Developers";

    // Dynamically generate the content using JavaScript
    const team = [
      {
        name: "Anafal Humaid Al-Saidi - 66J20876",
        role: "Front-End Developer and Server-Side Developer and Database Designer",
        contribution:
          "created the UI/UX design, used CSS frameworks to create responsive layouts, and used Node.js and Express to handle the back-end functionality.Node.js and Express were used to manage the back-end functionality, and the relational database structure was designed and optimized for effective data storage and retrieval.",
      },
      {
        name: "Sheika Maziyoud Mohammed  Al-Shihhi - 66S1928",
        role: "Database Designer and Server-Side Developer and Front-End Developer",
        contribution:
          "employed CSS frameworks to make responsive layouts, Node.js and Express to manage the back-end functions, and developed the UI/UX design.For efficient data storage and retrieval, a relational database structure was created and optimized, and the back-end functionality was managed using Node.js and Express.",
      },
    ];

    const references = [
      { name: "W3Schools", url: "https://www.w3schools.com" },
      { name: "Bootstrap Documentation", url: "https://getbootstrap.com" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
    ];

    // Render team section
    const teamSection = document.getElementById("team-section");
    teamSection.innerHTML = ""; // Clear any existing content
    team.forEach((member) => {
      const memberDiv = document.createElement("div");
      memberDiv.style.marginBottom = "20px";
      memberDiv.style.padding = "15px";
      memberDiv.style.border = "1px solid #ccc";
      memberDiv.style.borderRadius = "8px";
      memberDiv.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

      memberDiv.innerHTML = `
        <h3>${member.name}</h3>
        <p><strong>Role:</strong> ${member.role}</p>
        <p><strong>Contribution:</strong> ${member.contribution}</p>
      `;
      teamSection.appendChild(memberDiv);
    });

    // Render references section
    const referencesSection = document.getElementById("references-section");
    referencesSection.innerHTML = ""; // Clear any existing content
    const refHeader = document.createElement("h2");
    refHeader.textContent = "References";
    referencesSection.appendChild(refHeader);

    const refList = document.createElement("ul");
    references.forEach((ref) => {
      const refItem = document.createElement("li");
      const refLink = document.createElement("a");
      refLink.href = ref.url;
      refLink.target = "_blank";
      refLink.textContent = ref.name;
      refLink.style.color = "blue";
      refLink.style.textDecoration = "none";

      // Hover effects for links
      refLink.onmouseover = () => (refLink.style.textDecoration = "underline");
      refLink.onmouseout = () => (refLink.style.textDecoration = "none");

      refItem.appendChild(refLink);
      refList.appendChild(refItem);
    });

    referencesSection.appendChild(refList);
  }, []); // Run effect only once

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        About the Developers
      </h1>
      <div id="team-section"></div>
      <div id="references-section" style={{ marginTop: "30px" }}></div>
    </div>
  );
};

export default DevelopersPage;
