const aboutSections = {
  snapshot: {
    label: "Company + Product Snapshot",
    companyName: "VectorShift",
    positioning: "The AI operating system for private market investors.",
    aboutBullets: [
      "VectorShift started as an intelligent workflow builder and is now focusing on teams, individuals, and companies working in private markets by providing a horizontal intelligence layer.",
      "VectorShift helps private-market teams build intelligent AI workflows, agents, and custom knowledge bases, while also giving them analytics and marketplace templates to move faster.",
      "Many companies struggle to build and maintain useful knowledge bases because their data is scattered across tools and documents. VectorShift reduces this burden by providing custom nodes, knowledge-base infrastructure, and workflows without teams needing to manage the underlying setup."
    ],
    product:
      "The product combines knowledge bases, workflow builders, agents, structured tables, templates, and analytics so teams can turn private firm data into repeatable AI-powered processes.",
    features: [
      ["Knowledge Bases", "Upload files, URLs, and synced sources so workflows can answer with firm data."],
      ["AI Workflows", "Build repeatable processes with LLMs, integrations, logic, and deployment paths."],
      ["Agents", "Create assistants that use tools, instructions, and knowledge to complete tasks."],
      ["Tables", "Use structured data that workflows and agents can read from and write to."],
      ["Marketplace", "Start from pre-built templates instead of building every workflow from scratch."],
      ["Analytics", "Track usage and performance across deployed workflows."]
    ],
    source:
      "Sources: VectorShift website, Y Combinator profile, LinkedIn, FinSMEs."
  },
  product: {
    label: "Product",
    kicker: "",
    title: "Product",
    body:
      "VectorShift combines knowledge bases, workflow builders, agents, structured tables, templates, and analytics so teams can turn private firm data into repeatable AI-powered processes.",
    features: [
      ["Knowledge Bases", "Upload files, URLs, and synced sources so workflows can answer with firm data."],
      ["AI Workflows", "Build repeatable processes with LLMs, integrations, logic, and deployment paths."],
      ["Agents", "Create assistants that use tools, instructions, and knowledge to complete tasks."],
      ["Tables", "Use structured data that workflows and agents can read from and write to."],
      ["Marketplace", "Start from pre-built templates instead of building every workflow from scratch."],
      ["Analytics", "Track usage and performance across deployed workflows."]
    ]
  },
  positioning: {
    label: "Users",
    kicker: "",
    title: "Users",
    body:
      "The strongest current positioning is not just no-code automation. It is a firm-wide intelligence layer for investment teams where answers are sourced, permissioned, and tied to real deal work.",
    whoFor:
      "VectorShift is primarily for private-market investment teams, especially PE, VC, and growth equity teams handling diligence, deal knowledge, and portfolio workflows.",
    map: [
      ["Primary buyer", "Investment firms and private-market teams"],
      ["Primary user", "Associates, investors, operating teams, portfolio teams"],
      ["Core promise", "Find, reason, and act on firm knowledge faster"],
      ["Differentiator", "Private-market workflows + sourced outputs"]
    ],
    source:
      "Sources: VectorShift website, YC profile, LinkedIn company page."
  },
  evolution: {
    label: "Product Evolution",
    kicker: "",
    title: "Workflow automation foundation, vertical private-market wedge",
    body:
      "The early story centered on building LLM apps, search engines, assistants, chatbots, and automations using no-code and SDK interfaces. The current website is more vertical: private-market intelligence that compounds across every deal.",
    timeline: [
      ["2023", "YC S23: no-code AI workflow automation platform"],
      ["Feb 2024", "$3M seed announced for modular LLM application development"],
      ["2024-2025", "Enterprise search, knowledge bases, assistants, workflows"],
      ["Current", "Private-market intelligence for VDRs, IC memos, monitoring, LP reporting"]
    ],
    source:
      "Sources: YC, FinSMEs, The SaaS News, VectorShift website."
  },
  usecases: {
    label: "Use Cases",
    kicker: "",
    title: "Use Cases",
    body:
      "The most compelling use cases are workflows where private-market teams need to process documents, preserve institutional memory, and make answers traceable to source material.",
    usecases: [
      ["VDR / Data room analysis", "Extract diligence facts, gaps, risks, and inconsistencies."],
      ["IC memo support", "Turn diligence findings into structured investment committee material."],
      ["Portfolio monitoring", "Track thesis, risks, KPIs, and follow-ups after investment."],
      ["LP reporting", "Summarize portfolio updates and evidence for investor communication."],
      ["Enterprise search", "Search firm knowledge across files and connected sources."],
      ["Workflow agents", "Run repeatable internal processes with tools and knowledge bases."]
    ],
    source:
      "Sources: VectorShift website, Product page, YC jobs/company profile."
  }
};

function snapshotMarkup(data) {
  return `
    <article class="snapshot-view">
      <div class="company-lockup">
        <img src="./images/vectorshift-logo.png" alt="VectorShift logo" />
        <div>
          <h2>${data.companyName}</h2>
        </div>
      </div>

      <section class="positioning-line">
        <span>Positioning</span>
        <strong>${data.positioning}</strong>
      </section>

      <section class="company-about">
        <h3>About Company</h3>
        <ul>
          ${data.aboutBullets.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    </article>
  `;
}

function productMarkup(data) {
  return `
    <article class="product-view">
      <div class="about-copy">
        <h2>${data.title}</h2>
        <p>${data.body}</p>
      </div>
      <section class="product-features" aria-label="Major product features">
        <h3>Major Features</h3>
        <div class="feature-grid">
          ${data.features
            .map(([title, text]) => `<div><strong>${title}</strong><p>${text}</p></div>`)
            .join("")}
        </div>
      </section>
    </article>
  `;
}

function statMarkup(items) {
  return `<div class="visual-grid stat-grid">${items
    .map(([label, value]) => `<div><strong>${value}</strong><span>${label}</span></div>`)
    .join("")}</div>`;
}

function mapMarkup(items) {
  return `<section class="position-section"><h3>Who it is for</h3><p class="who-for-answer">${aboutSections.positioning.whoFor}</p><div class="position-map">${items
    .map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`)
    .join("")}</div></section>`;
}

function timelineMarkup(items) {
  return `<ol class="timeline">${items
    .map(([date, text]) => `<li><span>${date}</span><p>${text}</p></li>`)
    .join("")}</ol>`;
}

function usecaseMarkup(items) {
  return `<div class="usecase-grid">${items
    .map(([title, text]) => `<div><strong>${title}</strong><p>${text}</p></div>`)
    .join("")}</div>`;
}

function renderSection(key) {
  const data = aboutSections[key];
  if (key === "snapshot") {
    document.querySelector("#aboutStage").innerHTML = snapshotMarkup(data);
    document.querySelectorAll(".about-tab").forEach((button) => {
      button.classList.toggle("active", button.dataset.section === key);
    });
    return;
  }
  if (key === "product") {
    document.querySelector("#aboutStage").innerHTML = productMarkup(data);
    document.querySelectorAll(".about-tab").forEach((button) => {
      button.classList.toggle("active", button.dataset.section === key);
    });
    return;
  }

  let visual = "";
  if (data.stats) visual = statMarkup(data.stats);
  if (data.map) visual = mapMarkup(data.map);
  if (data.timeline) visual = timelineMarkup(data.timeline);
  if (data.usecases) visual = usecaseMarkup(data.usecases);

  document.querySelector("#aboutStage").innerHTML = `
    <article class="about-panel bare-panel">
      <div class="about-copy">
        ${data.kicker ? `<p class="eyebrow">${data.kicker}</p>` : ""}
        <h2>${data.title}</h2>
        <p>${data.body}</p>
        ${data.chips ? `<div class="about-chips">${data.chips.map((chip) => `<span>${chip}</span>`).join("")}</div>` : ""}
      </div>
      ${visual}
    </article>
  `;

  document.querySelectorAll(".about-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.section === key);
  });
}

document.querySelectorAll(".about-tab").forEach((button) => {
  button.addEventListener("click", () => renderSection(button.dataset.section));
});

renderSection("snapshot");
