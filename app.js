const nodes = [
  { id: 1, title: "Landing page", kind: "Public website", x: 120, y: 390 },
  { id: 2, title: "Request demo form", kind: "Public CTA side path", x: 455, y: 145 },
  { id: 3, title: "Login / signup", kind: "Authentication", x: 455, y: 430 },
  { id: 4, title: "Projects home", kind: "Central hub", x: 790, y: 430 },

  { id: 5, title: "Support widget home", kind: "Help", x: 1120, y: 90 },
  { id: 6, title: "Tutorial access denied", kind: "Problem", x: 1440, y: 65, problem: true },
  { id: 7, title: "Book demo Calendly", kind: "External page", x: 1440, y: 300 },
  { id: 8, title: "Docs 404", kind: "Problem", x: 1440, y: 535, problem: true },
  { id: 9, title: "Support message typed", kind: "Help", x: 1120, y: 420 },
  { id: 10, title: "Support auto reply", kind: "Help", x: 1440, y: 770 },
  { id: 11, title: "Chat options menu", kind: "Help", x: 1760, y: 720 },
  { id: 12, title: "Expanded chat window", kind: "Help", x: 2080, y: 520 },
  { id: 13, title: "Transcript blank page", kind: "Problem", x: 2080, y: 770, problem: true },
  { id: 14, title: "Transcript reload warning", kind: "Problem", x: 2400, y: 770, problem: true },

  { id: 15, title: "Usage limits expanded", kind: "Quota", x: 1120, y: 1100 },
  { id: 21, title: "At Limit empty state", kind: "Quota", x: 1440, y: 1100 },
  { id: 22, title: "Subscription plans", kind: "Settings", x: 1760, y: 1100 },
  { id: 23, title: "Return to projects", kind: "State persistence", x: 1990, y: 1100 },

  { id: 16, title: "New project dialog", kind: "Create project", x: 1120, y: 1450 },
  { id: 17, title: "Workflow selected", kind: "Create project", x: 1440, y: 1335 },
  { id: 18, title: "Workflow templates", kind: "Templates", x: 1760, y: 1335 },
  { id: 19, title: "Agent selected", kind: "Create project", x: 1440, y: 1575 },
  { id: 20, title: "Agent templates", kind: "Templates", x: 1760, y: 1575 },

  { id: 24, title: "Knowledge Bases", kind: "Sidebar module", x: 1120, y: 1900 },
  { id: 36, title: "New Knowledge Base", kind: "Create dialog", x: 1440, y: 1900 },
  { id: 25, title: "Skills", kind: "Sidebar module", x: 1120, y: 2140 },
  { id: 37, title: "New Skill", kind: "Create dialog", x: 1440, y: 2140 },
  { id: 26, title: "Tables", kind: "Sidebar module", x: 1120, y: 2380 },
  { id: 38, title: "New Table", kind: "Create dialog", x: 1440, y: 2380 },

  { id: 27, title: "Marketplace internal", kind: "Sidebar module", x: 1120, y: 2700 },
  { id: 31, title: "Marketplace public", kind: "Marketplace tab", x: 1440, y: 2700 },
  { id: 32, title: "Published marketplace", kind: "Marketplace view", x: 1760, y: 2700 },

  { id: 28, title: "Analytics dashboard", kind: "Sidebar module", x: 1120, y: 3020 },
  { id: 33, title: "Analytics traces", kind: "Analytics tab", x: 1440, y: 3020 },
  { id: 34, title: "Date range picker", kind: "Analytics control", x: 1760, y: 2940 },
  { id: 35, title: "Filter clicked", kind: "Analytics control", x: 1760, y: 3180 },

  { id: 29, title: "Portals", kind: "Sidebar module", x: 2360, y: 1900 },
  { id: 30, title: "Portal docs overview", kind: "Docs link", x: 2680, y: 1780 },
  { id: 39, title: "Configure portal", kind: "Create dialog", x: 2680, y: 2020 },

  { id: 40, title: "Quick create menu", kind: "Sidebar utility", x: 2360, y: 2380 },
  { id: 41, title: "Collapsed sidebar", kind: "Sidebar utility", x: 2680, y: 2380 },
];

const links = [
  [1, 2], [1, 3], [3, 4],
  [4, 5], [5, 6], [5, 7], [5, 8], [5, 9], [9, 10], [10, 11], [11, 12], [11, 13], [13, 14],
  [4, 15], [15, 21], [15, 22], [22, 23],
  [4, 16], [16, 17], [17, 18], [16, 19], [19, 20],
  [4, 24], [24, 36], [24, 25], [25, 37], [25, 26], [26, 38], [26, 27],
  [27, 31], [31, 32], [27, 28],
  [28, 33], [33, 34], [33, 35], [28, 29],
  [29, 30], [29, 39], [29, 40], [40, 41], [40, 16],
];

const groups = [
  { id: "entry", text: "Entry and authentication", summary: "Screens 1-4", x: 70, y: 120, w: 970, h: 600 },
  { id: "support", text: "Support branch", summary: "Screens 5-14", x: 1080, y: 35, w: 1570, h: 980 },
  { id: "usage", text: "Usage and project creation", summary: "Screens 15-23", x: 1080, y: 1045, w: 1160, h: 760 },
  { id: "modules", text: "Product modules", summary: "Screens 24-26, 36-38", x: 1080, y: 1845, w: 950, h: 770 },
  { id: "market", text: "Marketplace and analytics", summary: "Screens 27-28, 31-35", x: 1080, y: 2625, w: 950, h: 790 },
  { id: "portals", text: "Portals and utilities", summary: "Screens 29-30, 39-41", x: 2315, y: 1745, w: 700, h: 870 },
];

const groupScreenIds = {
  entry: [1, 2, 3, 4],
  support: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  usage: [15, 16, 17, 18, 19, 20, 21, 22, 23],
  modules: [24, 25, 26, 36, 37, 38],
  market: [27, 28, 31, 32, 33, 34, 35],
  portals: [29, 30, 39, 40, 41],
};

const issueNotes = {
  6: "Watch a Tutorial opens /tutorials and returns an AccessDenied XML error instead of a usable tutorial page.",
  8: "Open VectorShift Documentation opens a docs URL that shows a 404 Page Not Found.",
  13: "Download transcript opens a blank Intercom transcript page before the download flow works.",
  14: "Reloading the transcript page triggers a browser form resubmission warning, creating an unclear user experience.",
};

const screenPurpose = {
  1: "Public landing page that introduces the product and sends users toward demo or login.",
  2: "Demo request form for visitors who want to contact the company before signing in.",
  3: "Authentication screen where users sign in or create access using email, Google, or GitHub.",
  4: "Project hub where users start new work and access the main product modules.",
  5: "Support widget entry point for documentation, demo booking, tutorials, or direct support.",
  6: "Problem screen reached from the tutorial option.",
  7: "External Calendly page used to schedule a VectorShift demo.",
  8: "Problem screen reached from the documentation option.",
  9: "Support chat compose state where the user writes a support request.",
  10: "Support chat confirmation showing that the team will reply by chat or email.",
  11: "Support chat options menu for expanding the chat window or downloading the transcript.",
  12: "Expanded support chat view for reading and continuing the conversation.",
  13: "Problem screen reached during transcript download.",
  14: "Problem screen reached when the transcript page is reloaded.",
  15: "Usage limit panel for checking account quota and plan restrictions.",
  16: "Project creation dialog where users choose the type of project to build.",
  17: "Workflow creation path selected from the project dialog.",
  18: "Workflow template gallery for starting from predefined workflow examples.",
  19: "Agent creation path selected from the project dialog.",
  20: "Agent template gallery for starting from predefined agent examples.",
  21: "Empty or limit state that communicates the current account restriction.",
  22: "Subscription plan screen used to compare or upgrade account options.",
  23: "Return state showing the user back in the project hub after settings or limits.",
  24: "Knowledge Bases module for managing reusable information sources.",
  25: "Skills module for managing reusable abilities or capabilities.",
  26: "Tables module for managing structured data.",
  27: "Internal marketplace area for discovering reusable assets or templates.",
  28: "Analytics dashboard for monitoring project usage and performance.",
  29: "Portals module for creating or managing user-facing portals.",
  30: "Portal documentation screen opened from the portal area.",
  31: "Public marketplace tab for viewing shared marketplace content.",
  32: "Published marketplace view showing public marketplace output.",
  33: "Analytics traces view for inspecting detailed execution activity.",
  34: "Date range picker used to filter analytics results.",
  35: "Filter interaction for narrowing analytics data.",
  36: "Create dialog for starting a new knowledge base.",
  37: "Create dialog for starting a new skill.",
  38: "Create dialog for starting a new table.",
  39: "Configure portal dialog for setting up a portal.",
  40: "Quick create menu for launching creation actions from the sidebar.",
  41: "Collapsed sidebar state showing compact navigation behavior.",
};

const tourOrder = nodes.map((node) => node.id);

const labels = [];

const primaryLinks = new Set(["1-3", "3-4", "4-5"]);

const viewport = document.getElementById("viewport");
const canvas = document.getElementById("canvas");
const linksLayer = document.getElementById("links");
const nodesLayer = document.getElementById("nodes");
const groupNav = document.getElementById("groupNav");
const issueNav = document.getElementById("issueNav");
const issueDetail = document.getElementById("issueDetail");
const detailEyebrow = document.getElementById("detailEyebrow");
const detailTitle = document.getElementById("detailTitle");
const detailText = document.getElementById("detailText");
const takeTour = document.getElementById("takeTour");
const tourCard = document.getElementById("tourCard");
const tourStep = document.getElementById("tourStep");
const tourTitle = document.getElementById("tourTitle");
const tourPurpose = document.getElementById("tourPurpose");
const tourProblem = document.getElementById("tourProblem");
const prevTour = document.getElementById("prevTour");
const nextTour = document.getElementById("nextTour");
const closeTour = document.getElementById("closeTour");

const state = { scale: 0.45, x: 42, y: 32, dragging: false, sx: 0, sy: 0, ox: 0, oy: 0 };
let tourIndex = 0;
const byId = new Map(nodes.map((node) => [node.id, node]));

function nodeCenter(node) {
  return { x: node.x + 105, y: node.y + 86 };
}

function nodePort(from, to, side) {
  const width = 210;
  const height = 178;
  if (Math.abs(to.y - from.y) > Math.abs(to.x - from.x) && Math.abs(to.x - from.x) < 90) {
    return side === "start"
      ? { x: from.x + width / 2, y: to.y > from.y ? from.y + height : from.y }
      : { x: to.x + width / 2, y: to.y > from.y ? to.y : to.y + height };
  }
  return side === "start"
    ? { x: to.x >= from.x ? from.x + width : from.x, y: from.y + height / 2 }
    : { x: to.x >= from.x ? to.x : to.x + width, y: to.y + height / 2 };
}

function rightAnglePath(start, end) {
  const midX = start.x + (end.x - start.x) / 2;
  return `M ${start.x} ${start.y} H ${midX} V ${end.y} H ${end.x}`;
}

function drawLinks() {
  linksLayer.innerHTML = `
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#4f66f2"></path>
      </marker>
      <marker id="arrow-muted" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#c9d4e4"></path>
      </marker>
      <marker id="arrow-problem" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#d93434"></path>
      </marker>
    </defs>
  `;

  links.forEach(([from, to]) => {
    const fromNode = byId.get(from);
    const toNode = byId.get(to);
    const a = nodePort(fromNode, toNode, "start");
    const b = nodePort(fromNode, toNode, "end");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", rightAnglePath(a, b));
    const isPrimary = primaryLinks.has(`${from}-${to}`);
    path.setAttribute("class", `flow-link${toNode.problem ? " problem" : isPrimary ? " primary" : ""}`);
    path.setAttribute("marker-end", toNode.problem ? "url(#arrow-problem)" : isPrimary ? "url(#arrow)" : "url(#arrow-muted)");
    linksLayer.appendChild(path);
  });
}

function renderNodes() {
  groups.forEach((group) => {
    const box = document.createElement("div");
    box.className = "group-box";
    box.style.left = `${group.x}px`;
    box.style.top = `${group.y}px`;
    box.style.width = `${group.w}px`;
    box.style.height = `${group.h}px`;
    box.innerHTML = `<span class="group-title">${group.text}</span>`;
    nodesLayer.appendChild(box);
  });

  labels.forEach((label) => {
    const div = document.createElement("div");
    div.className = "section-label";
    div.style.left = `${label.x}px`;
    div.style.top = `${label.y}px`;
    div.textContent = label.text;
    nodesLayer.appendChild(div);
  });

  nodes.forEach((node) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `node${node.problem ? " problem" : ""}`;
    card.style.left = `${node.x}px`;
    card.style.top = `${node.y}px`;
    card.dataset.id = node.id;
    card.innerHTML = `
      <img src="./images/Screen${node.id}.png" alt="Screen ${node.id}">
      <div class="node-content">
        <span class="screen-id">Screen-${node.id}</span>
        <p class="node-title">${node.title}</p>
        <p class="node-kind">${node.kind}</p>
      </div>
    `;
    card.addEventListener("click", (event) => {
      event.stopPropagation();
      focusNode(node.id, true);
    });
    nodesLayer.appendChild(card);
  });
}

function renderGroupNav() {
  groups.forEach((group) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "group-nav-button";
    button.dataset.groupId = group.id;
    button.innerHTML = `
      <span>${group.text}</span>
      <small>${group.summary}</small>
    `;
    button.addEventListener("click", () => focusGroup(group.id));
    groupNav.appendChild(button);
  });
}

function renderIssueNav() {
  nodes.filter((node) => node.problem).forEach((node) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "issue-nav-button";
    button.dataset.issueId = node.id;
    button.innerHTML = `
      <span>Screen-${node.id}</span>
      <small>${node.title}</small>
    `;
    button.addEventListener("click", () => focusIssue(node.id));
    issueNav.appendChild(button);
  });
}

function applyTransform() {
  canvas.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
}

function setSelected(id) {
  document.querySelectorAll(".node.selected").forEach((node) => node.classList.remove("selected"));
  const card = document.querySelector(`.node[data-id="${id}"]`);
  if (card) card.classList.add("selected");
  const item = byId.get(id);
  detailEyebrow.textContent = "About Screen";
  detailTitle.textContent = `Screen-${item.id}: ${item.title}`;
  detailText.textContent = item.problem
    ? `${item.kind}. ${issueNotes[item.id]}`
    : `${item.kind}. Blue connectors show the main path, grey connectors show branches, and red dashed connectors show error or problem paths.`;
  const parentGroup = Object.entries(groupScreenIds).find(([, ids]) => ids.includes(id));
  if (parentGroup) setActiveGroup(parentGroup[0]);
  if (item.problem) setActiveIssue(id);
}

function setActiveGroup(id) {
  document.querySelectorAll(".group-nav-button.active").forEach((button) => button.classList.remove("active"));
  const button = document.querySelector(`.group-nav-button[data-group-id="${id}"]`);
  if (button) button.classList.add("active");
}

function setActiveIssue(id) {
  document.querySelectorAll(".issue-nav-button.active").forEach((button) => button.classList.remove("active"));
  const button = document.querySelector(`.issue-nav-button[data-issue-id="${id}"]`);
  if (button) button.classList.add("active");
  const item = byId.get(id);
  issueDetail.innerHTML = `
    <strong>Screen-${item.id}: ${item.title}</strong>
    <p>${issueNotes[id]}</p>
  `;
}

function focusNode(id, zoomIn = false) {
  const item = byId.get(id);
  const rect = viewport.getBoundingClientRect();
  const targetScale = zoomIn ? 1.08 : state.scale;
  state.scale = targetScale;
  state.x = rect.width / 2 - (item.x + 105) * state.scale;
  state.y = rect.height / 2 - (item.y + 86) * state.scale;
  setSelected(id);
  applyTransform();
}

function focusIssue(id) {
  focusNode(id, true);
  setActiveIssue(id);
}

function focusGroup(id) {
  const group = groups.find((item) => item.id === id);
  const rect = viewport.getBoundingClientRect();
  const padding = 72;
  state.scale = Math.min((rect.width - padding * 2) / group.w, (rect.height - padding * 2) / group.h, 0.88);
  state.scale = Math.max(state.scale, 0.32);
  state.x = rect.width / 2 - (group.x + group.w / 2) * state.scale;
  state.y = rect.height / 2 - (group.y + group.h / 2) * state.scale;
  setActiveGroup(id);
  detailEyebrow.textContent = "About Group";
  detailTitle.textContent = group.text;
  detailText.textContent = `${group.summary}. This grouped section is centered on the canvas. Click any screen card to see that screen detail.`;
  applyTransform();
}

function showTourStep(index) {
  tourIndex = Math.min(tourOrder.length - 1, Math.max(0, index));
  const id = tourOrder[tourIndex];
  const item = byId.get(id);
  focusNode(id, true);
  tourCard.hidden = false;
  tourCard.classList.toggle("problem", Boolean(item.problem));
  tourStep.textContent = `Step ${tourIndex + 1} of ${tourOrder.length}`;
  tourTitle.textContent = `Screen-${item.id}: ${item.title}`;
  tourPurpose.textContent = screenPurpose[id] || `${item.title} supports the ${item.kind.toLowerCase()} part of the journey.`;
  tourProblem.textContent = item.problem ? issueNotes[id] : "";
  prevTour.disabled = tourIndex === 0;
  nextTour.textContent = tourIndex === tourOrder.length - 1 ? "Done" : "Next";
}

function startTour() {
  showTourStep(0);
}

function closeTourCard() {
  tourCard.hidden = true;
}

function zoomAt(multiplier, clientX, clientY) {
  const rect = viewport.getBoundingClientRect();
  const before = {
    x: (clientX - rect.left - state.x) / state.scale,
    y: (clientY - rect.top - state.y) / state.scale,
  };
  state.scale = Math.min(1.55, Math.max(0.22, state.scale * multiplier));
  state.x = clientX - rect.left - before.x * state.scale;
  state.y = clientY - rect.top - before.y * state.scale;
  applyTransform();
}

function fitView() {
  const rect = viewport.getBoundingClientRect();
  state.scale = Math.min(rect.width / 3300, rect.height / 3280, 0.72);
  state.x = 42;
  state.y = 38;
  applyTransform();
}

viewport.addEventListener("wheel", (event) => {
  event.preventDefault();
  if (event.shiftKey) {
    state.x -= event.deltaY;
    applyTransform();
    return;
  }
  zoomAt(event.deltaY < 0 ? 1.08 : 0.92, event.clientX, event.clientY);
}, { passive: false });

viewport.addEventListener("pointerdown", (event) => {
  state.dragging = true;
  state.sx = event.clientX;
  state.sy = event.clientY;
  state.ox = state.x;
  state.oy = state.y;
  viewport.classList.add("dragging");
});

window.addEventListener("pointermove", (event) => {
  if (!state.dragging) return;
  state.x = state.ox + event.clientX - state.sx;
  state.y = state.oy + event.clientY - state.sy;
  applyTransform();
});

window.addEventListener("pointerup", () => {
  state.dragging = false;
  viewport.classList.remove("dragging");
});

document.getElementById("zoomIn").addEventListener("click", () => zoomAt(1.12, window.innerWidth / 2, window.innerHeight / 2));
document.getElementById("zoomOut").addEventListener("click", () => zoomAt(0.88, window.innerWidth / 2, window.innerHeight / 2));
document.getElementById("fitView").addEventListener("click", fitView);
document.getElementById("resetView").addEventListener("click", () => {
  state.scale = 0.45;
  state.x = 42;
  state.y = 32;
  applyTransform();
});
takeTour.addEventListener("click", startTour);
prevTour.addEventListener("click", () => showTourStep(tourIndex - 1));
nextTour.addEventListener("click", () => {
  if (tourIndex === tourOrder.length - 1) {
    closeTourCard();
    return;
  }
  showTourStep(tourIndex + 1);
});
closeTour.addEventListener("click", closeTourCard);

drawLinks();
renderNodes();
renderGroupNav();
renderIssueNav();
applyTransform();
setSelected(1);
setActiveGroup("entry");
