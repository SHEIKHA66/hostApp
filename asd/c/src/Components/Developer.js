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
