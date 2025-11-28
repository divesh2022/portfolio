// Dynamic skills
const skills = [
  "FastAPI & Modular Router Design",
  "SQL Server Triggers & Auditability",
  "AI/ML Integration (Gemini, TTS, Speech)",
  "UML & Graphviz Diagramming",
  "Secure Admin APIs",
  "Linux OS Deployment (EduNix)",
  "Medical Triage Workflow Modeling"
];

const skillsList = document.getElementById("skills-list");
skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

// Dynamic projects
const projects = [
  {
    title: "EduNix OS",
    description: "Lightweight Linux OS for college labs with GUI, CD deployment, and onboarding docs."
  },
  {
    title: "Medical Triage Chatbot",
    description: "Escalation-aware chatbot with override logic and severity scoring."
  },
  {
    title: "PPDT Story Generator",
    description: "Multimodal AI tool for emotional inference and visual overlays."
  }
];

const projectContainer = document.getElementById("project-container");
projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
  projectContainer.appendChild(div);
});

// Dynamic releases
const releases = [
  {
    version: "v1.0.0",
    date: "2025-11-28",
    notes: [
      "Initial deployment of EduNix OS with GUI and onboarding docs.",
      "Added Medical Triage Chatbot prototype with escalation logic.",
      "Implemented PPDT Story Generator with multimodal AI overlays."
    ]
  },
  {
    version: "v1.1.0",
    date: "2025-12-15",
    notes: [
      "Enhanced SQL Server triggers for auditability.",
      "Integrated Gemini AI for speech-to-text workflows.",
      "Improved dashboard UX and secure admin APIs."
    ]
  }
];

const releaseContainer = document.getElementById("release-container");
releases.forEach(release => {
  const div = document.createElement("div");
  div.className = "release";
  div.innerHTML = `
    <h3>${release.version} – ${release.date}</h3>
    <ul>${release.notes.map(note => `<li>${note}</li>`).join("")}</ul>
  `;
  releaseContainer.appendChild(div);
});
