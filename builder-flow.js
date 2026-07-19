const builderNodes = [
  { id: 1, title: "Projects list", kind: "Project hub", x: 95, y: 350, image: "./BuilderView/Task-1-Explore/01-projects-list.png" },
  { id: 2, title: "Create project modal", kind: "Project creation", x: 430, y: 210, image: "./BuilderView/Workflow-Build/02-create-project-modal.png" },
  { id: 3, title: "Workflow selected", kind: "Project setup", x: 430, y: 485, image: "./BuilderView/Workflow-Build/03-project-name-workflow-selected.png" },
  { id: 4, title: "Template step", kind: "Template choice", x: 765, y: 485, image: "./BuilderView/Workflow-Build/04-template-step.png" },
  { id: 5, title: "Blank workflow canvas", kind: "Builder canvas", x: 1100, y: 485, image: "./BuilderView/Workflow-Build/05-blank-workflow-canvas-loaded.png" },

  { id: 6, title: "Knowledge Bases", kind: "Module exploration", x: 430, y: 860, image: "./BuilderView/Task-1-Explore/02-knowledge-bases.png" },
  { id: 7, title: "Skills", kind: "Module exploration", x: 765, y: 860, image: "./BuilderView/Task-1-Explore/03-skills.png" },
  { id: 8, title: "Tables", kind: "Module exploration", x: 1100, y: 860, image: "./BuilderView/Task-1-Explore/04-tables.png" },
  { id: 9, title: "Marketplace", kind: "Module exploration", x: 1435, y: 860, image: "./BuilderView/Task-1-Explore/05-marketplace.png" },
  { id: 10, title: "Analytics", kind: "Module exploration", x: 1770, y: 860, image: "./BuilderView/Task-1-Explore/06-analytics.png" },

  { id: 11, title: "Source URL configured", kind: "Source node", x: 1435, y: 220, image: "./BuilderView/Workflow-Build/06-source-1-vectorshift-url-configured.png" },
  { id: 12, title: "Source run trace", kind: "Run success", x: 1770, y: 220, image: "./BuilderView/Workflow-Build/07-source-1-success-run-trace.png" },
  { id: 13, title: "Two source nodes", kind: "Multi-source scrape", x: 2105, y: 220, image: "./BuilderView/Workflow-Build/08-two-source-nodes-configured.png" },
  { id: 14, title: "Three source nodes", kind: "Multi-source scrape", x: 2440, y: 220, image: "./BuilderView/Workflow-Build/10-three-source-nodes-configured.png" },

  { id: 15, title: "OpenAI decision node", kind: "Analysis node", x: 1770, y: 560, image: "./BuilderView/Workflow-Build/12-openai-decision-node-configured.png" },
  { id: 16, title: "Sources connected to OpenAI", kind: "Connected canvas", x: 2105, y: 560, image: "./BuilderView/Workflow-Build/13-connected-source-stack-to-openai.png" },
  { id: 17, title: "Final input filled", kind: "Run setup", x: 2440, y: 560, image: "./BuilderView/Workflow-Build/14-final-run-input-filled.png" },
  { id: 18, title: "Final success trace", kind: "Run success", x: 2775, y: 560, image: "./BuilderView/Workflow-Build/15-final-workflow-success-run-trace.png" },
  { id: 19, title: "LLM run detail", kind: "Run inspection", x: 3110, y: 420, image: "./BuilderView/Workflow-Build/16-llm-run-detail-summary.png" },
  { id: 20, title: "Decision memo output", kind: "Output evidence", x: 3110, y: 700, image: "./BuilderView/Workflow-Build/17-decision-output-memo-and-token-metrics.png" },

  { id: 21, title: "Clean saved workflow", kind: "Saved state", x: 2775, y: 1040, image: "./BuilderView/Workflow-Build/18-workflow-saved-final-state.png" },
  { id: 22, title: "No-overlap canvas", kind: "Layout evidence", x: 3110, y: 1040, image: "./BuilderView/Workflow-Build/20-clean-connected-canvas-no-overlap.png" },

  { id: 23, title: "Search table node", kind: "Storage attempt", x: 430, y: 1370, image: "./BuilderView/Workflow-Build/30-search-add-new-row-table-node.png" },
  { id: 24, title: "Add row node added", kind: "Storage node", x: 765, y: 1370, image: "./BuilderView/Workflow-Build/31-add-new-row-to-table-node-added.png" },
  { id: 25, title: "New table attempt", kind: "Storage setup", x: 1100, y: 1370, image: "./BuilderView/Workflow-Build/32-in-node-new-table-attempt.png" },
  { id: 26, title: "Storage blocked by limit", kind: "Problem", x: 1435, y: 1370, image: "./BuilderView/Workflow-Build/33-table-created-or-limit-from-node.png", problem: true },
  { id: 27, title: "Cleaned blocked node", kind: "Recovery", x: 1770, y: 1370, image: "./BuilderView/Workflow-Build/35-clean-working-workflow-after-storage-blocker-cleanup.png" },
  { id: 28, title: "Delete friction", kind: "Problem", x: 2105, y: 1370, image: "./BuilderView/Workflow-Build/36-table-node-delete-second-attempt.png", problem: true },

  { id: 29, title: "Default naming guidance", kind: "Problem", x: 430, y: 1880, image: "./BuilderView/Task-4-Issues/01-builder-canvas-default-naming-guidance.png", problem: true },
  { id: 30, title: "Analytics latency gap", kind: "Problem", x: 765, y: 1880, image: "./BuilderView/Task-4-Issues/02-analytics-logs-and-node-latency-gap.png", problem: true },
  { id: 31, title: "Project limit friction", kind: "Problem", x: 1100, y: 1880, image: "./BuilderView/Task-4-Issues/03-project-limit-single-project-friction.png", problem: true },
  { id: 32, title: "Analytics dashboard evidence", kind: "Metrics", x: 1770, y: 1880, image: "./BuilderView/Analytics-Evidence/01-analytics-dashboard-run-metrics.png" },
  { id: 33, title: "Workflow logs evidence", kind: "Logs", x: 2105, y: 1880, image: "./BuilderView/Analytics-Evidence/02-workflow-logs.png" },
];

const builderLinksData = [
  [1, 2], [2, 3], [3, 4], [4, 5],
  [1, 6], [6, 7], [7, 8], [8, 9], [9, 10],
  [5, 11], [11, 12], [12, 13], [13, 14],
  [14, 15], [15, 16], [16, 17], [17, 18], [18, 19], [18, 20],
  [18, 21], [21, 22],
  [5, 23], [23, 24], [24, 25], [25, 26], [26, 27], [27, 28],
  [22, 29], [22, 30], [22, 31], [18, 32], [32, 33],
];

const builderGroups = [
  { id: "create", text: "Project creation", summary: "Screens 1-5", x: 55, y: 155, w: 1300, h: 580 },
  { id: "modules", text: "Module exploration", summary: "Screens 6-10", x: 390, y: 805, w: 1700, h: 365 },
  { id: "source", text: "Source collection", summary: "Screens 11-14", x: 1395, y: 155, w: 1310, h: 365 },
  { id: "analysis", text: "Decision run", summary: "Screens 15-22, 32-33", x: 1730, y: 500, w: 1645, h: 630 },
  { id: "storage", text: "Storage attempt", summary: "Screens 23-28", x: 390, y: 1310, w: 1975, h: 365 },
  { id: "issues", text: "Builder issue evidence", summary: "Screens 29-31", x: 390, y: 1820, w: 980, h: 365 },
];

const builderGroupScreenIds = {
  create: [1, 2, 3, 4, 5],
  modules: [6, 7, 8, 9, 10],
  source: [11, 12, 13, 14],
  analysis: [15, 16, 17, 18, 19, 20, 21, 22, 32, 33],
  storage: [23, 24, 25, 26, 27, 28],
  issues: [29, 30, 31],
};

const builderIssueNotes = {
  26: "Storage setup hits an account/project limit while trying to create or connect the target table, blocking the intended save path.",
  28: "Duplicate or blocked storage nodes are hard to cleanly remove, which slows users who are iterating under time pressure.",
  29: "Default node names make the canvas harder to inspect once several similar source/storage nodes exist.",
  30: "Analytics and logs do not clearly expose node-level latency and failure diagnosis for non-technical builders.",
  31: "Usage/project limit messaging interrupts table and workflow setup, even when the user is only trying to complete an evaluation project.",
};

const builderScreenPurpose = {
  1: "Start from Projects, where workflows and agents are created and managed.",
  2: "Open the project creation modal and choose what kind of artifact to build.",
  3: "Name the project and select Workflow as the build path.",
  4: "Review template options before choosing to start from a blank workflow canvas.",
  5: "Enter the blank builder canvas where nodes can be added, connected, configured, run, and saved.",
  6: "Explore Knowledge Bases as the place for large documents, URLs, and synced source material.",
  7: "Explore Skills as reusable instructions or capabilities that can be attached to agents.",
  8: "Explore Tables as structured storage that workflows and agents can read from or write to.",
  9: "Explore Marketplace as a template discovery path for avoiding blank-canvas friction.",
  10: "Explore Analytics as the place to check workflow activity, usage, traces, and performance signals.",
  11: "Configure the first URL scraper source for VectorShift website data.",
  12: "Run the first source node and inspect that scraped source data is available.",
  13: "Add a second source node to expand evidence beyond the company website.",
  14: "Add a third source node so the workflow can combine company, YC, and funding source context.",
  15: "Configure the OpenAI node as the decision/memo layer over scraped source context.",
  16: "Connect all source outputs into the decision node to create a cross-source analysis path.",
  17: "Fill the analyst input before the final workflow run.",
  18: "Run the workflow successfully and confirm the connected source-to-decision path works.",
  19: "Inspect the LLM run detail for runtime and execution context.",
  20: "Review the generated decision memo and token/usage evidence.",
  21: "Save the working workflow state after the successful run.",
  22: "Confirm the final canvas is readable and nodes are not overlapping.",
  23: "Search for table storage nodes to add persistence after the working decision path.",
  24: "Add an Add New Row To Table node as the intended structured storage path.",
  25: "Attempt to create or connect the required table from inside the node.",
  26: "Problem screen where storage setup is blocked by account/project usage limits.",
  27: "Recover by cleaning the blocked storage path so the working workflow remains stable.",
  28: "Problem evidence showing node deletion/cleanup friction.",
  29: "Issue evidence for default naming guidance on the builder canvas.",
  30: "Issue evidence for analytics/logging gaps around latency and diagnosis.",
  31: "Issue evidence for project limit friction.",
  32: "Analytics dashboard evidence used to connect the build to success metrics.",
  33: "Workflow logs evidence used to support debugging and performance measurement.",
};

const builderTourOrder = builderNodes.map((node) => node.id);
const builderPrimaryLinks = new Set(["1-2", "2-3", "3-4", "4-5", "5-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-20", "18-21", "21-22"]);

const builderViewport = document.getElementById("builderViewport");
const builderCanvas = document.getElementById("builderCanvas");
const builderLinksLayer = document.getElementById("builderLinks");
const builderNodesLayer = document.getElementById("builderNodes");
const builderGroupNav = document.getElementById("builderGroupNav");
const builderIssueNav = document.getElementById("builderIssueNav");
const builderIssueDetail = document.getElementById("builderIssueDetail");
const builderDetailEyebrow = document.getElementById("builderDetailEyebrow");
const builderDetailTitle = document.getElementById("builderDetailTitle");
const builderDetailText = document.getElementById("builderDetailText");
const builderTakeTour = document.getElementById("builderTakeTour");
const builderTourCard = document.getElementById("builderTourCard");
const builderTourStep = document.getElementById("builderTourStep");
const builderTourTitle = document.getElementById("builderTourTitle");
const builderTourPurpose = document.getElementById("builderTourPurpose");
const builderTourProblem = document.getElementById("builderTourProblem");
const builderPrevTour = document.getElementById("builderPrevTour");
const builderNextTour = document.getElementById("builderNextTour");
const builderCloseTour = document.getElementById("builderCloseTour");

const builderState = { scale: 0.42, x: 44, y: 34, dragging: false, sx: 0, sy: 0, ox: 0, oy: 0 };
let builderTourIndex = 0;
const builderById = new Map(builderNodes.map((node) => [node.id, node]));

function builderNodePort(from, to, side) {
  const width = 225;
  const height = 188;
  if (Math.abs(to.y - from.y) > Math.abs(to.x - from.x) && Math.abs(to.x - from.x) < 90) {
    return side === "start"
      ? { x: from.x + width / 2, y: to.y > from.y ? from.y + height : from.y }
      : { x: to.x + width / 2, y: to.y > from.y ? to.y : to.y + height };
  }
  return side === "start"
    ? { x: to.x >= from.x ? from.x + width : from.x, y: from.y + height / 2 }
    : { x: to.x >= from.x ? to.x : to.x + width, y: to.y + height / 2 };
}

function builderRightAnglePath(start, end) {
  const midX = start.x + (end.x - start.x) / 2;
  return `M ${start.x} ${start.y} H ${midX} V ${end.y} H ${end.x}`;
}

function drawBuilderLinks() {
  builderLinksLayer.innerHTML = `
    <defs>
      <marker id="builder-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#4f66f2"></path>
      </marker>
      <marker id="builder-arrow-muted" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#c9d4e4"></path>
      </marker>
      <marker id="builder-arrow-problem" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#d93434"></path>
      </marker>
    </defs>
  `;

  builderLinksData.forEach(([from, to]) => {
    const fromNode = builderById.get(from);
    const toNode = builderById.get(to);
    const a = builderNodePort(fromNode, toNode, "start");
    const b = builderNodePort(fromNode, toNode, "end");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", builderRightAnglePath(a, b));
    const isPrimary = builderPrimaryLinks.has(`${from}-${to}`);
    path.setAttribute("class", `flow-link${toNode.problem ? " problem" : isPrimary ? " primary" : ""}`);
    path.setAttribute("marker-end", toNode.problem ? "url(#builder-arrow-problem)" : isPrimary ? "url(#builder-arrow)" : "url(#builder-arrow-muted)");
    builderLinksLayer.appendChild(path);
  });
}

function renderBuilderNodes() {
  builderGroups.forEach((group) => {
    const box = document.createElement("div");
    box.className = "group-box";
    box.style.left = `${group.x}px`;
    box.style.top = `${group.y}px`;
    box.style.width = `${group.w}px`;
    box.style.height = `${group.h}px`;
    box.innerHTML = `<span class="group-title">${group.text}</span>`;
    builderNodesLayer.appendChild(box);
  });

  builderNodes.forEach((node) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `node${node.problem ? " problem" : ""}`;
    card.style.left = `${node.x}px`;
    card.style.top = `${node.y}px`;
    card.dataset.id = node.id;
    card.innerHTML = `
      <img src="${node.image}" alt="Builder screen ${node.id}">
      <div class="node-content">
        <span class="screen-id">Screen-${node.id}</span>
        <p class="node-title">${node.title}</p>
        <p class="node-kind">${node.kind}</p>
      </div>
    `;
    card.addEventListener("click", (event) => {
      event.stopPropagation();
      focusBuilderNode(node.id, true);
    });
    builderNodesLayer.appendChild(card);
  });
}

function renderBuilderGroupNav() {
  builderGroups.forEach((group) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "group-nav-button";
    button.dataset.groupId = group.id;
    button.innerHTML = `<span>${group.text}</span><small>${group.summary}</small>`;
    button.addEventListener("click", () => focusBuilderGroup(group.id));
    builderGroupNav.appendChild(button);
  });
}

function renderBuilderIssueNav() {
  builderNodes.filter((node) => node.problem).forEach((node) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "issue-nav-button";
    button.dataset.issueId = node.id;
    button.innerHTML = `<span>Screen-${node.id}</span><small>${node.title}</small>`;
    button.addEventListener("click", () => focusBuilderIssue(node.id));
    builderIssueNav.appendChild(button);
  });
}

function applyBuilderTransform() {
  builderCanvas.style.transform = `translate(${builderState.x}px, ${builderState.y}px) scale(${builderState.scale})`;
}

function setActiveBuilderGroup(id) {
  document.querySelectorAll(".group-nav-button.active").forEach((button) => button.classList.remove("active"));
  const button = document.querySelector(`.group-nav-button[data-group-id="${id}"]`);
  if (button) button.classList.add("active");
}

function setActiveBuilderIssue(id) {
  document.querySelectorAll(".issue-nav-button.active").forEach((button) => button.classList.remove("active"));
  const button = document.querySelector(`.issue-nav-button[data-issue-id="${id}"]`);
  if (button) button.classList.add("active");
  const item = builderById.get(id);
  builderIssueDetail.innerHTML = `<strong>Screen-${item.id}: ${item.title}</strong><p>${builderIssueNotes[id]}</p>`;
}

function setSelectedBuilderNode(id) {
  document.querySelectorAll(".node.selected").forEach((node) => node.classList.remove("selected"));
  const card = document.querySelector(`.node[data-id="${id}"]`);
  if (card) card.classList.add("selected");
  const item = builderById.get(id);
  builderDetailEyebrow.textContent = "About Screen";
  builderDetailTitle.textContent = `Screen-${item.id}: ${item.title}`;
  builderDetailText.textContent = item.problem
    ? `${item.kind}. ${builderIssueNotes[item.id]}`
    : `${item.kind}. ${builderScreenPurpose[item.id]}`;
  const parentGroup = Object.entries(builderGroupScreenIds).find(([, ids]) => ids.includes(id));
  if (parentGroup) setActiveBuilderGroup(parentGroup[0]);
  if (item.problem) setActiveBuilderIssue(id);
}

function focusBuilderNode(id, zoomIn = false) {
  const item = builderById.get(id);
  const rect = builderViewport.getBoundingClientRect();
  const targetScale = zoomIn ? 1.05 : builderState.scale;
  builderState.scale = targetScale;
  builderState.x = rect.width / 2 - (item.x + 112) * builderState.scale;
  builderState.y = rect.height / 2 - (item.y + 94) * builderState.scale;
  setSelectedBuilderNode(id);
  applyBuilderTransform();
}

function focusBuilderIssue(id) {
  focusBuilderNode(id, true);
  setActiveBuilderIssue(id);
}

function focusBuilderGroup(id) {
  const group = builderGroups.find((item) => item.id === id);
  const rect = builderViewport.getBoundingClientRect();
  const padding = 72;
  builderState.scale = Math.min((rect.width - padding * 2) / group.w, (rect.height - padding * 2) / group.h, 0.88);
  builderState.scale = Math.max(builderState.scale, 0.3);
  builderState.x = rect.width / 2 - (group.x + group.w / 2) * builderState.scale;
  builderState.y = rect.height / 2 - (group.y + group.h / 2) * builderState.scale;
  setActiveBuilderGroup(id);
  builderDetailEyebrow.textContent = "About Group";
  builderDetailTitle.textContent = group.text;
  builderDetailText.textContent = `${group.summary}. This section is centered on the canvas. Click any screen to see what it proves.`;
  applyBuilderTransform();
}

function showBuilderTourStep(index) {
  builderTourIndex = Math.min(builderTourOrder.length - 1, Math.max(0, index));
  const id = builderTourOrder[builderTourIndex];
  const item = builderById.get(id);
  focusBuilderNode(id, true);
  builderTourCard.hidden = false;
  builderTourCard.classList.toggle("problem", Boolean(item.problem));
  builderTourStep.textContent = `Step ${builderTourIndex + 1} of ${builderTourOrder.length}`;
  builderTourTitle.textContent = `Screen-${item.id}: ${item.title}`;
  builderTourPurpose.textContent = builderScreenPurpose[id] || `${item.title} supports the ${item.kind.toLowerCase()} part of the builder journey.`;
  builderTourProblem.textContent = item.problem ? builderIssueNotes[id] : "";
  builderPrevTour.disabled = builderTourIndex === 0;
  builderNextTour.textContent = builderTourIndex === builderTourOrder.length - 1 ? "Done" : "Next";
}

function closeBuilderTourCard() {
  builderTourCard.hidden = true;
}

function zoomBuilderAt(multiplier, clientX, clientY) {
  const rect = builderViewport.getBoundingClientRect();
  const before = {
    x: (clientX - rect.left - builderState.x) / builderState.scale,
    y: (clientY - rect.top - builderState.y) / builderState.scale,
  };
  builderState.scale = Math.min(1.5, Math.max(0.22, builderState.scale * multiplier));
  builderState.x = clientX - rect.left - before.x * builderState.scale;
  builderState.y = clientY - rect.top - before.y * builderState.scale;
  applyBuilderTransform();
}

function fitBuilderView() {
  const rect = builderViewport.getBoundingClientRect();
  builderState.scale = Math.min(rect.width / 3500, rect.height / 2200, 0.68);
  builderState.x = 42;
  builderState.y = 36;
  applyBuilderTransform();
}

builderViewport.addEventListener("wheel", (event) => {
  event.preventDefault();
  if (event.shiftKey) {
    builderState.x -= event.deltaY;
    applyBuilderTransform();
    return;
  }
  zoomBuilderAt(event.deltaY < 0 ? 1.08 : 0.92, event.clientX, event.clientY);
}, { passive: false });

builderViewport.addEventListener("pointerdown", (event) => {
  builderState.dragging = true;
  builderState.sx = event.clientX;
  builderState.sy = event.clientY;
  builderState.ox = builderState.x;
  builderState.oy = builderState.y;
  builderViewport.classList.add("dragging");
});

window.addEventListener("pointermove", (event) => {
  if (!builderState.dragging) return;
  builderState.x = builderState.ox + event.clientX - builderState.sx;
  builderState.y = builderState.oy + event.clientY - builderState.sy;
  applyBuilderTransform();
});

window.addEventListener("pointerup", () => {
  builderState.dragging = false;
  builderViewport.classList.remove("dragging");
});

document.getElementById("builderZoomIn").addEventListener("click", () => zoomBuilderAt(1.12, window.innerWidth / 2, window.innerHeight / 2));
document.getElementById("builderZoomOut").addEventListener("click", () => zoomBuilderAt(0.88, window.innerWidth / 2, window.innerHeight / 2));
document.getElementById("builderFitView").addEventListener("click", fitBuilderView);
document.getElementById("builderResetView").addEventListener("click", () => {
  builderState.scale = 0.42;
  builderState.x = 44;
  builderState.y = 34;
  applyBuilderTransform();
});
builderTakeTour.addEventListener("click", () => showBuilderTourStep(0));
builderPrevTour.addEventListener("click", () => showBuilderTourStep(builderTourIndex - 1));
builderNextTour.addEventListener("click", () => {
  if (builderTourIndex === builderTourOrder.length - 1) {
    closeBuilderTourCard();
    return;
  }
  showBuilderTourStep(builderTourIndex + 1);
});
builderCloseTour.addEventListener("click", closeBuilderTourCard);

drawBuilderLinks();
renderBuilderNodes();
renderBuilderGroupNav();
renderBuilderIssueNav();
fitBuilderView();
setSelectedBuilderNode(1);
setActiveBuilderGroup("create");
