const steps = [
  {
    id: "blocked",
    title: "Blocked Storage State",
    subtitle: "Shows the current issue clearly when table/storage creation is blocked.",
    action: "Set up Evidence Store",
    search: "Add New Row"
  },
  {
    id: "setup",
    title: "Guided Evidence Store Setup",
    subtitle: "User chooses where to store scraped data, extracted claims, final output, and run metadata.",
    action: "Continue",
    search: "Evidence Store"
  },
  {
    id: "fallback",
    title: "Fallback Option Screen",
    subtitle: "If account/table limit is hit, show existing table, temporary run storage, or export output.",
    action: "Use Temporary Storage",
    search: "Evidence Store"
  },
  {
    id: "mapping",
    title: "Mapped Evidence Fields",
    subtitle: "Shows source URL, extracted claim, confidence, source reference, risk, memo output.",
    action: "Apply Mapping",
    search: "Evidence Store"
  },
  {
    id: "canvas",
    title: "Workflow Canvas With Evidence Store Node",
    subtitle: "Final clean canvas: Source nodes → LLM/Transform → Evidence Store → Decision Output.",
    action: "Run Workflow",
    search: "Evidence Store"
  },
  {
    id: "result",
    title: "Saved Evidence + Run Result View",
    subtitle: "Shows stored evidence, memo output, confidence, and run metadata after execution.",
    action: "Restart Flow",
    search: "Evidence Store"
  }
];

const nodeLayouts = {
  blocked: [
    node("url0", "URL Scraper: Scrape URL", "url_loader_0", "https://vectorshift.ai/", 220, 22, "success", "Runtime: 6.6394 seconds"),
    node("url1", "URL Scraper: Scrape URL", "url_loader_1", "https://www.ycombinator.com/companies/vectorshift", 244, 318, "success", "Runtime: 7.123s"),
    node("input", "Input", "input_0", "Analyst focus", 600, 26, "success", "Runtime: 0.000 seconds"),
    node("table", "Add New Row to Table", "table_row_0", "Source Store", 540, 190, "warning", "Limit blocked"),
    node("openai", "OpenAI", "openai_0", "Generate decision memo", 920, 146, "success", "Draft saved")
  ],
  setup: [
    node("url0", "URL Scraper: Scrape URL", "url_loader_0", "https://vectorshift.ai/", 220, 34, "success", "Runtime: 6.6394 seconds"),
    node("url1", "URL Scraper: Scrape URL", "url_loader_1", "https://www.ycombinator.com/companies/vectorshift", 220, 326, "success", "Runtime: 7.123s"),
    node("openai", "OpenAI: Extract Evidence", "openai_0", "Normalize source claims", 585, 188, "success", "Output ready"),
    node("store", "Guided Evidence Store", "evidence_store_0", "Setup required", 948, 188, "warning", "Needs configuration")
  ],
  fallback: [
    node("url0", "URL Scraper: Scrape URL", "url_loader_0", "https://vectorshift.ai/", 220, 34, "success", "Runtime: 6.6394 seconds"),
    node("url1", "URL Scraper: Scrape URL", "url_loader_1", "https://www.ycombinator.com/companies/vectorshift", 220, 326, "success", "Runtime: 7.123s"),
    node("openai", "OpenAI: Extract Evidence", "openai_0", "Normalize source claims", 585, 188, "success", "Output ready"),
    node("store", "Guided Evidence Store", "evidence_store_0", "Temporary run storage", 948, 188, "success", "Fallback ready")
  ],
  mapping: [
    node("url0", "URL Scraper: Scrape URL", "url_loader_0", "https://vectorshift.ai/", 220, 34, "success", "Runtime: 6.6394 seconds"),
    node("url1", "URL Scraper: Scrape URL", "url_loader_1", "https://www.ycombinator.com/companies/vectorshift", 220, 326, "success", "Runtime: 7.123s"),
    node("openai", "OpenAI: Extract Evidence", "openai_0", "Normalize source claims", 585, 188, "success", "Output ready"),
    node("store", "Guided Evidence Store", "evidence_store_0", "6 mapped fields", 948, 188, "success", "Mapped")
  ],
  canvas: [
    node("url0", "URL Scraper: Website", "url_loader_0", "https://vectorshift.ai/", 160, 46, "success", "Runtime: 6.6394 seconds"),
    node("url1", "URL Scraper: YC", "url_loader_1", "ycombinator.com/companies/vectorshift", 160, 274, "success", "Runtime: 7.123s"),
    node("url2", "URL Scraper: Funding", "url_loader_2", "finsmes.com/vectorshift-raises-3m", 160, 502, "success", "Runtime: 5.294s"),
    node("extract", "OpenAI: Normalize Evidence", "openai_0", "Claims, risks, source references", 530, 274, "success", "Output ready"),
    node("store", "Guided Evidence Store", "evidence_store_0", "Source data + claims + run metadata", 890, 274, "success", "Ready"),
    node("decision", "Decision Output", "output_0", "Memo, confidence, gaps, next actions", 1250, 274, "success", "Ready")
  ],
  result: [
    node("url0", "URL Scraper: Website", "url_loader_0", "https://vectorshift.ai/", 126, 46, "success", "Runtime: 6.6394 seconds"),
    node("url1", "URL Scraper: YC", "url_loader_1", "ycombinator.com/companies/vectorshift", 126, 274, "success", "Runtime: 7.123s"),
    node("url2", "URL Scraper: Funding", "url_loader_2", "finsmes.com/vectorshift-raises-3m", 126, 502, "success", "Runtime: 5.294s"),
    node("extract", "OpenAI: Normalize Evidence", "openai_0", "Claims, risks, source references", 468, 274, "success", "Runtime: 4.2s"),
    node("store", "Guided Evidence Store", "evidence_store_0", "3 sources, 9 claims, 1 memo saved", 802, 274, "success", "Saved"),
    node("decision", "Decision Output", "output_0", "Investment memo generated", 1138, 274, "success", "Complete")
  ]
};

const connectorLayouts = {
  blocked: [["url0", "openai"], ["url1", "openai"], ["input", "openai"], ["table", "openai"]],
  setup: [["url0", "openai"], ["url1", "openai"], ["openai", "store"]],
  fallback: [["url0", "openai"], ["url1", "openai"], ["openai", "store"]],
  mapping: [["url0", "openai"], ["url1", "openai"], ["openai", "store"]],
  canvas: [["url0", "extract"], ["url1", "extract"], ["url2", "extract"], ["extract", "store"], ["store", "decision"]],
  result: [["url0", "extract"], ["url1", "extract"], ["url2", "extract"], ["extract", "store"], ["store", "decision"]]
};

const requestedStep = Number(new URLSearchParams(window.location.search).get("step"));
let activeStep = Number.isInteger(requestedStep) && requestedStep >= 0 && requestedStep < steps.length ? requestedStep : 0;

function node(id, title, nodeId, value, x, y, state, status) {
  return { id, title, nodeId, value, x, y, state, status };
}

function renderSteps() {
  const list = document.querySelector("#stepList");
  list.innerHTML = steps
    .map((_, index) => `<button class="step-dot${index === activeStep ? " active" : ""}" type="button" data-step="${index}">${index + 1}</button>`)
    .join("");
  list.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      activeStep = Number(button.dataset.step);
      render();
    });
  });
}

function renderPalette() {
  const step = steps[activeStep];
  document.querySelector("#paletteSearch").value = step.search;
  const options = {
    blocked: [
      ["▦", "Add New Row to Table"],
      ["▣", "GSheets"],
      ["▣", "Smartsheet"]
    ],
    setup: [
      ["▦", "Guided Evidence Store"],
      ["▣", "Existing Table"],
      ["⬇", "Export Output"]
    ],
    fallback: [
      ["▦", "Temporary Run Store"],
      ["▣", "Existing Table"],
      ["↗", "Export Output"]
    ],
    mapping: [
      ["▤", "Field Mapper"],
      ["▦", "Evidence Store"],
      ["⊕", "Run Metadata"]
    ],
    canvas: [
      ["▦", "Guided Evidence Store"],
      ["◎", "Decision Output"],
      ["▤", "Trace Analytics"]
    ],
    result: [
      ["▦", "Saved Evidence"],
      ["◎", "Run Output"],
      ["▤", "Analytics"]
    ]
  };
  document.querySelector("#paletteResults").innerHTML = options[step.id]
    .map(([icon, label]) => `<article class="palette-card"><div><span>${icon}</span><strong>${label}</strong></div></article>`)
    .join("");
}

function renderCanvas() {
  const step = steps[activeStep];
  const nodes = nodeLayouts[step.id];
  document.querySelector("#canvas").innerHTML = `
    ${renderConnectors(step.id, nodes)}
    ${nodes.map(renderNode).join("")}
    ${renderHotspot(step.id)}
  `;
  document.querySelectorAll("[data-hotspot]").forEach((button) => button.addEventListener("click", nextStep));
}

function renderConnectors(stepId, nodes) {
  const byId = Object.fromEntries(nodes.map((item) => [item.id, item]));
  return connectorLayouts[stepId]
    .map(([from, to]) => {
      const start = byId[from];
      const end = byId[to];
      const x1 = start.x + 280;
      const y1 = start.y + 86;
      const x2 = end.x;
      const y2 = end.y + 86;
      const dx = x2 - x1;
      const dy = y2 - y1;
      const length = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      return `<div class="connector success" style="left:${x1}px; top:${y1}px; width:${length}px; transform:rotate(${angle}deg)"></div>`;
    })
    .join("");
}

function renderNode(item) {
  return `
    <article class="node ${item.state}" style="left:${item.x}px; top:${item.y}px">
      <div class="node-port left"></div>
      <div class="node-port right"></div>
      <header class="node-header">
        <strong>${item.title}</strong>
        <span>↗ ↻ ⚙ ×</span>
      </header>
      <div class="node-body">
        <div class="node-id">${item.nodeId}</div>
        <div class="field">
          <label>${item.title.includes("URL") ? "URL" : item.title.includes("Input") ? "Type" : "Prompt"}</label>
          <div class="input-like ${item.value.length > 36 ? "multi" : ""}">${item.value}</div>
        </div>
        <span class="node-status ${item.state === "warning" ? "error" : "success"}">${item.status}</span>
      </div>
    </article>
  `;
}

function renderHotspot(stepId) {
  const positions = {
    blocked: "left:574px; top:352px",
    setup: "left:980px; top:420px",
    fallback: "left:986px; top:420px",
    mapping: "left:984px; top:420px",
    canvas: "left:1280px; top:498px",
    result: "left:1158px; top:498px"
  };
  const labels = {
    blocked: "Click failed table node",
    setup: "Configure Evidence Store",
    fallback: "Choose fallback",
    mapping: "Apply mapped fields",
    canvas: "Run workflow",
    result: "Open saved output"
  };
  return `<button type="button" class="hotspot" data-hotspot style="${positions[stepId]}">${labels[stepId]}</button>`;
}

function renderTrace() {
  const step = steps[activeStep];
  const rows =
    step.id === "result"
      ? [
          ["WORKFLOW RUN", "New Workflow", "7.157s", "✓"],
          ["NODE RUN", "Guided Evidence Store", "0.384s", "✓"],
          ["NODE RUN", "Decision Output", "1.994s", "✓"],
          ["NODE RUN", "OpenAI: Normalize Evidence", "4.2s", "✓"]
        ]
      : step.id === "blocked"
        ? [
            ["WORKFLOW RUN", "New Workflow", "7.157s", "✓"],
            ["NODE RUN", "URL Scraper: Scrape URL", "5.295s", "✓"],
            ["NODE RUN", "Add New Row to Table", "0.000s", "!"],
            ["NODE RUN", "OpenAI", "1.994s", "✓"]
          ]
        : [
            ["WORKFLOW RUN", "New Workflow", "Ready", "✓"],
            ["NODE RUN", "URL Scraper: Scrape URL", "5.295s", "✓"],
            ["NODE RUN", "OpenAI: Extract Evidence", "Ready", "✓"],
            ["NODE RUN", "Guided Evidence Store", "Pending", "✓"]
          ];

  document.querySelector("#tracePanel").innerHTML = `
    <div class="trace-title"><span>Trace View</span><a href="#">View trace ↗</a><span>⌄</span></div>
    ${rows
      .map(
        (row) => `
          <div class="trace-row">
            <span>›</span>
            <span>${row[0]}</span>
            <strong>${row[1]}</strong>
            <em>${row[2]}</em>
            <b>${row[3]}</b>
          </div>
        `
      )
      .join("")}
  `;
}

function renderConfig() {
  const step = steps[activeStep];
  const content = {
    blocked: {
      title: "Configuration",
      node: "Add New Row to Table",
      inputs: [
        ["Table", "Source Store"],
        ["Status", "Usage limit exceeded for User Project Count"],
        ["Fallback", "Not configured"]
      ],
      output: "Node cannot write evidence rows until the user chooses a fallback."
    },
    setup: {
      title: "Evidence Store",
      node: "Guided setup",
      inputs: [
        ["Store source data", "Yes"],
        ["Store extracted claims", "Yes"],
        ["Store final output", "Yes"],
        ["Store run metadata", "Yes"]
      ],
      output: "Setup ready. Next step: choose fallback behavior for restricted accounts."
    },
    fallback: {
      title: "Evidence Store",
      node: "Fallback",
      inputs: [
        ["Primary store", "Project table"],
        ["Fallback", "Temporary run storage"],
        ["Export", "CSV + JSON enabled"]
      ],
      output: "Workflow can continue even when new table creation is restricted."
    },
    mapping: {
      title: "Evidence Store",
      node: "Field mapping",
      inputs: [
        ["source_url", "URL Scraper"],
        ["claim_text", "OpenAI output"],
        ["confidence_score", "OpenAI score"],
        ["final_memo", "Decision Output"]
      ],
      output: "Six fields mapped and ready to save after workflow run."
    },
    canvas: {
      title: "Configuration",
      node: "Run Workflow",
      inputs: [
        ["Analyst focus", "Private-market investment memo"],
        ["Sources", "Website, YC, funding article"],
        ["Evidence Store", "Ready"]
      ],
      output: "Run will scrape, normalize, store evidence, and create decision output."
    },
    result: {
      title: "Outputs",
      node: "Saved evidence",
      inputs: [
        ["Sources", "3"],
        ["Claims", "9"],
        ["Confidence", "82%"],
        ["Runtime", "7.157s"]
      ],
      output: "Evidence, memo, confidence, gaps, and run metadata saved."
    }
  }[step.id];

  document.querySelector("#configPanel").innerHTML = `
    <div class="config-head"><strong>${content.title}</strong><button type="button">×</button></div>
    <div class="config-action"><button type="button">Edit Information</button><button type="button">Run Workflow</button></div>
    <div class="config-tabs"><button class="active" type="button">Standard</button><button type="button">Chatbot</button><button type="button">Voice</button></div>
    <div class="config-body">
      <section class="config-section">
        <h3>Inputs</h3>
        <p>${content.node}</p>
        ${content.inputs.map(([label, value]) => `<p>${label}</p><div class="config-input">${value}</div>`).join("")}
      </section>
      <section class="config-section">
        <h3>Outputs</h3>
        <textarea class="config-textarea" readonly>${content.output}</textarea>
      </section>
    </div>
    <div class="config-footer"><button type="button" data-next>▷ ${step.id === "result" ? "Run Again" : "Run"}</button></div>
  `;

  document.querySelector("#configPanel [data-next]").addEventListener("click", nextStep);
}

function renderOverlay() {
  const step = steps[activeStep];
  const overlay = document.querySelector("#overlayLayer");
  if (step.id === "blocked") {
    overlay.innerHTML = `
      <div class="modal-backdrop"></div>
      <section class="vs-modal">
        <header><h2>Upgrade to continue</h2><button type="button">×</button></header>
        <div class="modal-copy">
          <p>Usage limit exceeded for User Project Count. Please upgrade or add additional usage credits to continue.</p>
          <p>Instead of stopping the user here, VectorShift can offer Guided Evidence Store fallback options.</p>
        </div>
        <footer class="modal-actions">
          <button type="button">Not yet</button>
          <button class="primary" type="button" data-next>Set up Evidence Store</button>
        </footer>
      </section>
    `;
  } else if (step.id === "setup") {
    overlay.innerHTML = `
      <div class="modal-backdrop"></div>
      <section class="vs-modal wide">
        <header><h2>Guided Evidence Store setup</h2><button type="button">×</button></header>
        <div class="modal-copy"><p>Choose what this workflow should persist after each run.</p></div>
        <div class="setup-grid">
          <article class="setup-card active"><strong>Scraped source data</strong><span>Save URL content, file text, and source metadata.</span></article>
          <article class="setup-card active"><strong>Extracted claims</strong><span>Store structured facts, source references, confidence, and risk tags.</span></article>
          <article class="setup-card active"><strong>Final memo output</strong><span>Save recommendation, gaps, and next diligence actions.</span></article>
          <article class="setup-card active"><strong>Run metadata</strong><span>Keep runtime, token usage, model, workflow version, and source count.</span></article>
        </div>
        <footer class="modal-actions"><button type="button">Cancel</button><button class="primary" type="button" data-next>Continue</button></footer>
      </section>
    `;
  } else if (step.id === "fallback") {
    overlay.innerHTML = `
      <div class="modal-backdrop"></div>
      <section class="vs-modal wide">
        <header><h2>Choose fallback storage</h2><button type="button">×</button></header>
        <div class="modal-copy"><p>Table creation is restricted. Pick a fallback so the workflow can still complete.</p></div>
        <div class="setup-grid">
          <article class="setup-card"><strong>Use existing table</strong><span>Attach a table that already exists in this workspace.</span></article>
          <article class="setup-card active"><strong>Temporary run storage</strong><span>Persist evidence inside the run until the user exports or upgrades.</span></article>
          <article class="setup-card"><strong>Export output</strong><span>Generate CSV/JSON output after each run.</span></article>
          <article class="setup-card"><strong>Ask admin</strong><span>Request permission to create reusable table objects.</span></article>
        </div>
        <footer class="modal-actions"><button type="button">Back</button><button class="primary" type="button" data-next>Use Temporary Storage</button></footer>
      </section>
    `;
  } else if (step.id === "mapping") {
    overlay.innerHTML = `
      <div class="modal-backdrop"></div>
      <section class="vs-modal wide">
        <header><h2>Map evidence fields</h2><button type="button">×</button></header>
        <div class="modal-copy"><p>VectorShift auto-suggests fields from connected source and LLM nodes.</p></div>
        <table class="mapping-table">
          <thead><tr><th>Evidence Field</th><th>Source</th><th>Stored As</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td><strong>Source URL</strong></td><td>URL Scraper nodes</td><td>source_url</td><td>Mapped</td></tr>
            <tr><td><strong>Extracted claim</strong></td><td>OpenAI output</td><td>claim_text</td><td>Mapped</td></tr>
            <tr><td><strong>Confidence</strong></td><td>OpenAI score</td><td>confidence_score</td><td>Mapped</td></tr>
            <tr><td><strong>Source reference</strong></td><td>Source citation block</td><td>source_reference</td><td>Mapped</td></tr>
            <tr><td><strong>Risk</strong></td><td>Risk extraction output</td><td>risk_tag</td><td>Mapped</td></tr>
            <tr><td><strong>Memo output</strong></td><td>Decision Output node</td><td>final_memo</td><td>Mapped</td></tr>
          </tbody>
        </table>
        <footer class="modal-actions"><button type="button">Back</button><button class="primary" type="button" data-next>Apply Mapping</button></footer>
      </section>
    `;
  } else if (step.id === "canvas") {
    overlay.innerHTML = "";
  } else {
    overlay.innerHTML = `
      <section class="result-card">
        <header><p>Run Complete</p><h2>Evidence and memo saved</h2></header>
        <div class="metric-row">
          <div><b>3</b><span>Sources</span></div>
          <div><b>9</b><span>Claims</span></div>
          <div><b>82%</b><span>Confidence</span></div>
        </div>
        <p>VectorShift is positioned as a private-market intelligence layer. Evidence, source references, confidence, gaps, and run metadata are saved for reuse.</p>
        <footer class="modal-actions"><button class="primary" type="button" data-next>Restart Flow</button></footer>
      </section>
    `;
  }

  overlay.querySelectorAll("[data-next]").forEach((button) => button.addEventListener("click", nextStep));
}

function nextStep() {
  activeStep = activeStep === steps.length - 1 ? 0 : activeStep + 1;
  window.history.replaceState(null, "", `?step=${activeStep}`);
  render();
}

function render() {
  const step = steps[activeStep];
  document.querySelector("#flowTitle").textContent = step.title;
  document.querySelector("#flowSubtitle").textContent = step.subtitle;
  document.querySelector("#nextAction").textContent = step.action;
  renderSteps();
  renderPalette();
  renderCanvas();
  renderTrace();
  renderConfig();
  renderOverlay();
}

document.querySelector("#nextAction").addEventListener("click", nextStep);
document.querySelector("[data-run-button]").addEventListener("click", () => {
  activeStep = 5;
  render();
});

render();
