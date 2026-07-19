const solutionSections = [
  {
    id: "problem-screens",
    title: "1. Problematic Screens",
    subtitle: "Five Builder View problem screens collected during workflow creation, storage setup, analytics review, and limit handling.",
    type: "problemScreens",
    screens: [
      {
        evidence: "Evidence 01",
        screen: "Screen-26",
        title: "Storage blocked by account limit",
        image: "./BuilderView/Workflow-Build/33-table-created-or-limit-from-node.png",
        note:
          "While adding table storage, the builder hits an account/project limit instead of helping the user complete the persistence step."
      },
      {
        evidence: "Evidence 02",
        screen: "Screen-28",
        title: "Duplicate / blocked nodes are hard to clean up",
        image: "./BuilderView/Workflow-Build/36-table-node-delete-second-attempt.png",
        note:
          "After a blocked storage attempt, duplicate or failed nodes are hard to remove confidently from the workflow canvas."
      },
      {
        evidence: "Evidence 03",
        screen: "Screen-29",
        title: "Default node names reduce canvas readability",
        image: "./BuilderView/Task-4-Issues/01-builder-canvas-default-naming-guidance.png",
        note:
          "Similar nodes keep generic names, so a multi-source workflow becomes difficult to explain without opening each node."
      },
      {
        evidence: "Evidence 04",
        screen: "Screen-30",
        title: "Analytics diagnosis gap",
        image: "./BuilderView/Task-4-Issues/02-analytics-logs-and-node-latency-gap.png",
        note:
          "Analytics exists, but node-level runtime, token usage, failure reason, and output quality are not easy to connect back to the canvas."
      },
      {
        evidence: "Evidence 05",
        screen: "Screen-31",
        title: "Limit messaging interrupts setup flow",
        image: "./BuilderView/Task-4-Issues/03-project-limit-single-project-friction.png",
        note:
          "Usage-limit messaging appears during setup without clearly explaining the blocked action or the fallback path."
      }
    ]
  },
  {
    id: "rice-problem",
    title: "2. RICE Prioritization",
    subtitle: "Rank all five Builder View problems first. Priority is assigned only after RICE, not before.",
    type: "riceProblem",
    rows: [
      {
        evidence: "Evidence 01",
        problem: "Storage blocked by account limit",
        reach: 8,
        impact: 9,
        confidence: 8,
        effort: 4,
        score: 144,
        priority: "P0",
        why: "The selected workflow depends on persistent source/output storage. If storage is blocked, the workflow cannot become reusable deal intelligence."
      },
      {
        evidence: "Evidence 02",
        problem: "Duplicate / blocked nodes are hard to clean up",
        reach: 7,
        impact: 8,
        confidence: 8,
        effort: 4,
        score: 112,
        priority: "P0",
        why: "Failed node experiments should be reversible. If cleanup is painful, builders stop iterating and the canvas becomes fragile."
      },
      {
        evidence: "Evidence 03",
        problem: "Default node names reduce canvas readability",
        reach: 7,
        impact: 6,
        confidence: 8,
        effort: 4,
        score: 84,
        priority: "P1",
        why: "Generic naming hurts collaboration and review, especially when a workflow has repeated source, transform, and output nodes."
      },
      {
        evidence: "Evidence 04",
        problem: "Analytics diagnosis gap",
        reach: 6,
        impact: 8,
        confidence: 7,
        effort: 4,
        score: 84,
        priority: "P1",
        why: "Teams need node-level diagnosis to connect workflow health with product success metrics and know what to fix after a run."
      },
      {
        evidence: "Evidence 05",
        problem: "Limit messaging interrupts setup flow",
        reach: 6,
        impact: 7,
        confidence: 8,
        effort: 4,
        score: 84,
        priority: "P1",
        why: "Limit copy affects trial users and candidates. It should preserve momentum by explaining what is blocked and what still works."
      }
    ]
  },
  {
    id: "finalized-problem",
    title: "3. Finalized Problem",
    subtitle: "The selected problem this package solves.",
    type: "finalProblem",
    image: "./BuilderView/Workflow-Build/33-table-created-or-limit-from-node.png",
    statement:
      "Builders cannot complete a reusable source-backed decision workflow when storage setup is blocked by account limits and the product does not provide a clear fallback path.",
    bullets: []
  },
  {
    id: "solutions",
    title: "4. Solutions",
    subtitle: "Ideas are grouped exactly like the workflow teardown: OK, Best, and Moonshot options side by side.",
    type: "solutionGroups",
    solutionGroups: [
      {
        title: "OK Solutions",
        items: [
          ["Clear limit copy", "Explain the exact resource that is blocked and what the user can still do."],
          ["Use existing table option", "Let users attach an existing table when new table creation is restricted."],
          ["Run-output fallback", "Save the final output in the run result when table persistence is not available."],
          ["Cleanup helper", "Suggest removing failed storage nodes and highlight the selected node before deletion."]
        ]
      },
      {
        title: "Best Solutions",
        items: [
          ["Evaluation-safe source store", "Provide one temporary source table per project so trial users can finish an end-to-end workflow."],
          ["Storage setup wizard", "Guide table selection, schema, mapped fields, and fallback behavior before adding the node."],
          ["Node recovery state", "When a storage node fails, show the reason, affected connection, retry option, and cleanup action."],
          ["Evidence output bundle", "Save normalized facts, source references, final memo, and run metadata together."]
        ]
      },
      {
        title: "Moonshot Solutions",
        items: [
          ["Guided evidence store", "A built-in persistence layer that captures source data, claims, confidence, gaps, and final outputs without manual table setup."],
          ["Autonomous recovery agent", "When a node is blocked, the agent proposes safe alternatives, repairs connections, and preserves the run state."],
          ["Decision cockpit", "One view links stored evidence, source coverage, confidence, risks, gaps, and next diligence actions."],
          ["Reusable deal knowledge layer", "Every run compounds into a searchable, source-backed deal memory that future workflows and agents can reuse."]
        ]
      }
    ]
  },
  {
    id: "rice-moonshot",
    title: "5. Prioritize Moonshot",
    subtitle: "Use RICE again to choose the moonshot idea worth taking forward first.",
    type: "riceMoonshot",
    rows: [
      {
        idea: "Guided evidence store",
        reach: 8,
        impact: 10,
        confidence: 8,
        effort: 5,
        score: 128,
        decision: "✓ Build",
        why: "Directly solves the P0 storage blocker while preserving the larger goal: source-backed, reusable deal intelligence."
      },
      {
        idea: "Reusable deal knowledge layer",
        reach: 7,
        impact: 9,
        confidence: 7,
        effort: 6,
        score: 74,
        decision: "✕ Not now",
        why: "High strategic value, but it depends on a reliable evidence store first."
      },
      {
        idea: "Decision cockpit",
        reach: 7,
        impact: 9,
        confidence: 6,
        effort: 7,
        score: 54,
        decision: "✕ Not now",
        why: "Useful for trust, but the cockpit needs dependable stored evidence and run metadata underneath it."
      },
      {
        idea: "Autonomous recovery agent",
        reach: 6,
        impact: 8,
        confidence: 5,
        effort: 9,
        score: 27,
        decision: "✕ Not now",
        why: "Powerful but too broad for the first package because automatic repair needs mature guardrails and permission handling."
      }
    ]
  },
  {
    id: "finalized-idea",
    title: "6. Finalized Idea",
    subtitle: "The idea to take forward into PRD, prototype, and success metrics next.",
    type: "finalIdea",
    idea: "Guided Evidence Store",
    statement:
      "Build a guided storage layer for the Builder View that lets users persist source data, extracted claims, final outputs, and run metadata even when full table creation is restricted.",
    why: []
  },
  {
    id: "solution-design",
    title: "7. Solution Design",
    subtitle: "Connected screen flow showing how the proposed Guided Evidence Store appears inside the Builder View.",
    type: "solutionDesign",
    link: "./evidence-store-prototype.html",
    screens: [
      ["01", "Blocked Storage State", "./evidence-store-design-01.png", "User clicks the failed table/storage node."],
      ["02", "Guided Evidence Store Setup", "./evidence-store-design-02.png", "Setup modal asks what should persist."],
      ["03", "Fallback Option Screen", "./evidence-store-design-03.png", "User chooses temporary run storage or another fallback."],
      ["04", "Mapped Evidence Fields", "./evidence-store-design-04.png", "Fields are mapped from source and LLM nodes."],
      ["05", "Workflow Canvas With Evidence Store Node", "./evidence-store-design-05.png", "Clean canvas shows Evidence Store in the workflow."],
      ["06", "Saved Evidence + Run Result View", "./evidence-store-design-06.png", "Output shows stored evidence, memo, confidence, and metadata."]
    ]
  },
  {
    id: "success-metrics",
    title: "8. Success Metrics",
    subtitle: "Metrics that prove Guided Evidence Store improves workflow completion, trust, and repeat usage.",
    type: "metricGroups",
    groups: [
      {
        title: "8.1 North Star Metric",
        items: [
          ["Evidence-backed workflow completion rate", "Share of workflows that successfully collect sources, store evidence, run analysis, and save a final output in one run.", "Target: 70%+ for users who add storage."]
        ]
      },
      {
        title: "8.2 Success Criteria / Metrics",
        items: [
          ["Storage recovery rate", "Blocked storage sessions that continue using fallback storage.", "Target: 60%+"],
          ["Evidence save success", "Runs where source data, extracted claims, memo output, and run metadata are saved.", "Target: 90%+"],
          ["Time to working workflow", "Median time from storage blocker to successful saved run.", "Target: under 5 minutes"],
          ["Output trust signal usage", "Runs where user views source references, confidence, or gaps before exporting/sharing.", "Target: 50%+"]
        ]
      },
      {
        title: "8.3 Growth Metrics",
        items: [
          ["Workflow reuse", "Users rerun or duplicate a workflow with saved evidence.", "Target: 30%+"],
          ["Activation lift", "Trial users who complete one end-to-end workflow after hitting a limit.", "Target: +20%"],
          ["Template conversion", "Users who turn the evidence workflow into a reusable project template.", "Target: 15%+"],
          ["Team sharing", "Saved evidence outputs shared with another teammate or stakeholder.", "Target: 25%+"]
        ]
      }
    ]
  },
  {
    id: "risks-tradeoffs",
    title: "9. Risk, Tradeoffs and Constraints",
    subtitle: "What can go wrong, what we intentionally trade off, and what limits the first version.",
    type: "riskGroups",
    groups: [
      {
        title: "9.1 Risk",
        items: [
          ["False confidence", "Users may trust saved claims too much if confidence is not clearly explained."],
          ["Sensitive data handling", "Deal data may contain confidential company, investor, or diligence information."],
          ["Fallback confusion", "Temporary storage could be misunderstood as permanent storage."]
        ]
      },
      {
        title: "9.2 Tradeoffs",
        items: [
          ["Speed over full database design", "The first version prioritizes finishing the workflow over building a perfect schema."],
          ["Guided setup over flexibility", "Structured defaults reduce confusion but may feel limiting to advanced builders."],
          ["Temporary storage over hard block", "Fallback storage keeps users moving but may not satisfy every enterprise retention need."]
        ]
      },
      {
        title: "9.3 Constraints",
        items: [
          ["Account limits", "Evaluation accounts may not be allowed to create unlimited projects, tables, or persistent objects."],
          ["Permission model", "The design must respect workspace roles and existing data-access controls."],
          ["Source reliability", "Scraped content and LLM extraction quality vary by source format, access, and page structure."]
        ]
      }
    ]
  },
  {
    id: "conclusion",
    title: "10. Conclusion",
    subtitle: "Final product sense summary for the solution package.",
    type: "conclusion",
    text:
      "Guided Evidence Store turns a hard builder stop into a guided recovery path. It helps users complete the full collect, store, analyze, and decide workflow even when table creation is restricted. The feature is narrow enough to prototype, but strategically important because it makes VectorShift feel like a reusable intelligence layer instead of a one-time workflow canvas. The next step is to validate whether users can complete a saved, source-backed run faster and with more trust."
  }
];

let activeSection = solutionSections[0].id;

function renderSolutionNav() {
  const nav = document.querySelector("#solutionNav");
  nav.innerHTML = solutionSections
    .map(
      (section, index) => `
        <button class="about-tab compact-tab${section.id === activeSection ? " active" : ""}" type="button" data-section-id="${section.id}">
          <span>${String(index + 1).padStart(2, "0")}</span>
          ${section.title.replace(/^\d+\.\s*/, "")}
        </button>
      `
    )
    .join("");

  nav.querySelectorAll("[data-section-id]").forEach((button) => {
    button.addEventListener("click", () => {
      activeSection = button.dataset.sectionId;
      renderSolutionNav();
      scrollToSolutionSection(activeSection);
    });
  });
}

function problemScreensMarkup(section) {
  return `
    <div class="evidence-image-grid solution-evidence-grid">
      ${section.screens
        .map(
          (screen) => `
            <figure>
              <img src="${screen.image}" alt="${screen.title}" />
              <figcaption><strong>${screen.evidence} · ${screen.screen}: ${screen.title}</strong><span>${screen.note}</span></figcaption>
            </figure>
          `
        )
        .join("")}
    </div>
  `;
}

function riceProblemMarkup(rows) {
  return `
    <div class="rice-table-wrap">
      <table class="rice-table package-rice-table problem-rice-table">
        <thead>
          <tr>
            <th>Evidence</th>
            <th>Problem</th>
            <th>Reach</th>
            <th>Impact</th>
            <th>Confidence</th>
            <th>Effort</th>
            <th>RICE</th>
            <th>Priority</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td><strong>${row.evidence}</strong></td>
                  <td><strong>${row.problem}</strong></td>
                  <td>${row.reach}</td>
                  <td>${row.impact}</td>
                  <td>${row.confidence}</td>
                  <td>${row.effort}</td>
                  <td><span>${row.score}</span></td>
                  <td><em>${row.priority}</em></td>
                  <td>${row.why}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function finalProblemMarkup(section) {
  return `
    <div class="final-problem-layout">
      <figure>
        <img src="${section.image}" alt="Finalized problem screen" />
        <figcaption>Finalized Problem Screen</figcaption>
      </figure>
      <article>
        <p>Problem Statement</p>
        <h2>${section.statement}</h2>
        ${section.bullets.length ? `<ul>${section.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
      </article>
    </div>
  `;
}

function solutionGroupMarkup(group) {
  return `
    <article class="solution-group">
      <h4>${group.title}</h4>
      <ol>
        ${group.items
          .map(([title, text]) => `<li><strong>${title}</strong><span>${text}</span></li>`)
          .join("")}
      </ol>
    </article>
  `;
}

function solutionGroupsMarkup(groups) {
  return `
    <div class="solution-columns">
      ${groups.map((group) => solutionGroupMarkup(group)).join("")}
    </div>
  `;
}

function riceMoonshotMarkup(rows) {
  return `
    <div class="rice-table-wrap">
      <table class="rice-table package-rice-table moonshot-rice-table">
        <thead>
          <tr>
            <th>Moonshot Idea</th>
            <th>Reach</th>
            <th>Impact</th>
            <th>Confidence</th>
            <th>Effort</th>
            <th>RICE</th>
            <th>Decision</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td><strong>${row.idea}</strong></td>
                  <td>${row.reach}</td>
                  <td>${row.impact}</td>
                  <td>${row.confidence}</td>
                  <td>${row.effort}</td>
                  <td><span>${row.score}</span></td>
                  <td><em class="${row.decision.includes("✓") ? "will-build" : ""}">${row.decision}</em></td>
                  <td>${row.why}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function finalIdeaMarkup(section) {
  return `
    <article class="final-idea-panel">
      <p>Finalized Idea</p>
      <h2>${section.idea}</h2>
      <strong>${section.statement}</strong>
      ${section.why.length ? `<div>${section.why.map((item) => `<span>${item}</span>`).join("")}</div>` : ""}
    </article>
  `;
}

function solutionDesignMarkup(section) {
  return `
    <div class="solution-design-map">
      ${section.screens
        .map(
          ([number, title, image, text], index) => `
            <a class="design-flow-screen step-${index + 1}" href="${section.link}?step=${index}" target="_blank" rel="noreferrer">
              <figure>
                <img src="${image}" alt="${title}" />
                <figcaption>
                  <span>${number}</span>
                  <strong>${title}</strong>
                  <small>${text}</small>
                </figcaption>
              </figure>
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function metricGroupsMarkup(section) {
  return `
    <div class="metric-group-grid">
      ${section.groups
        .map(
          (group) => `
            <article class="metric-group-card">
              <h4>${group.title}</h4>
              <div>
                ${group.items
                  .map(
                    ([name, description, target]) => `
                      <section>
                        <strong>${name}</strong>
                        <p>${description}</p>
                        <span>${target}</span>
                      </section>
                    `
                  )
                  .join("")}
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function riskGroupsMarkup(section) {
  return `
    <div class="risk-group-grid">
      ${section.groups
        .map(
          (group) => `
            <article class="risk-group-card">
              <h4>${group.title}</h4>
              <ul>
                ${group.items.map(([name, text]) => `<li><strong>${name}</strong><span>${text}</span></li>`).join("")}
              </ul>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function conclusionMarkup(section) {
  return `
    <article class="solution-conclusion">
      <p>${section.text}</p>
    </article>
  `;
}

function sectionBodyMarkup(section) {
  if (section.type === "problemScreens") return problemScreensMarkup(section);
  if (section.type === "riceProblem") return riceProblemMarkup(section.rows);
  if (section.type === "finalProblem") return finalProblemMarkup(section);
  if (section.type === "solutionGroups") return solutionGroupsMarkup(section.solutionGroups);
  if (section.type === "riceMoonshot") return riceMoonshotMarkup(section.rows);
  if (section.type === "finalIdea") return finalIdeaMarkup(section);
  if (section.type === "solutionDesign") return solutionDesignMarkup(section);
  if (section.type === "metricGroups") return metricGroupsMarkup(section);
  if (section.type === "riskGroups") return riskGroupsMarkup(section);
  if (section.type === "conclusion") return conclusionMarkup(section);
  return "";
}

function renderSolutionStage() {
  document.querySelector("#solutionStage").innerHTML = `
    <article class="build-view solution-package-view">
      <div class="teardown-stack solution-package-stack">
        ${solutionSections.map(solutionSectionMarkup).join("")}
      </div>
    </article>
  `;
}

function solutionSectionMarkup(section) {
  return `
    <section class="teardown-section solution-package-section" id="${section.id}">
      ${
        section.type === "solutionDesign"
          ? `<div class="solution-design-title"><h3>${section.title}</h3><a href="${section.link}" target="_blank" rel="noreferrer">Explore Design</a></div>`
          : `<h3>${section.title}</h3>`
      }
      <p class="section-note">${section.subtitle}</p>
      ${sectionBodyMarkup(section)}
    </section>
  `;
}

function scrollToSolutionSection(targetId) {
  const target = document.getElementById(targetId);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setActiveFromScroll() {
  const sections = solutionSections
    .map((section) => document.getElementById(section.id))
    .filter(Boolean);
  const current = sections
    .map((section) => ({ id: section.id, top: Math.abs(section.getBoundingClientRect().top) }))
    .sort((a, b) => a.top - b.top)[0];
  if (current && current.id !== activeSection) {
    activeSection = current.id;
    renderSolutionNav();
  }
}

function renderAll() {
  renderSolutionNav();
  renderSolutionStage();
  window.addEventListener("scroll", setActiveFromScroll, { passive: true });
}

renderAll();
