const fixData = {
  builder: {
    label: "Builder View Problems",
    headline: "Ranked Fixes for Builder View",
    subhead:
      "These are ranked by impact on users trying to create, run, debug, and save workflows inside VectorShift.",
    issues: [
      {
        rank: "P0",
        screen: "Screen-26",
        title: "Storage blocked by account limit",
        image: "./BuilderView/Workflow-Build/33-table-created-or-limit-from-node.png",
        problem:
          "While adding table storage to the workflow, the builder hits a project/account limit instead of helping the user complete the intended storage step.",
        matters:
          "This affects evaluators, PMs, analysts, and small teams who need one working end-to-end workflow. It blocks persistence, weakens trust in the builder, and makes the product feel quota-first instead of outcome-first.",
        solve:
          "Separate table/object creation limits from project-count limits, show the exact blocked resource, and offer a fallback path such as using an existing table, temporary run output, or a sample evaluation table."
      },
      {
        rank: "P0",
        screen: "Screen-28",
        title: "Duplicate / blocked nodes are hard to clean up",
        image: "./BuilderView/Workflow-Build/36-table-node-delete-second-attempt.png",
        problem:
          "After a blocked storage attempt, cleanup becomes harder than expected. Duplicate or failed nodes are not easy to remove confidently from the canvas.",
        matters:
          "This affects builders under time pressure. A failed experiment should be reversible; otherwise users hesitate to test new nodes and the canvas becomes messy quickly.",
        solve:
          "Make node deletion reliable from toolbar, keyboard, and context menu. Before deletion, show the selected node name and its connections, then give an undo state after deletion."
      },
      {
        rank: "P1",
        screen: "Screen-29",
        title: "Default node names reduce canvas readability",
        image: "./BuilderView/Task-4-Issues/01-builder-canvas-default-naming-guidance.png",
        problem:
          "Multiple similar nodes keep generic names, so the user must inspect each node to understand which source, transform, or output it represents.",
        matters:
          "This affects workflows with several sources or repeated logic. PMs and ops users need to explain the flow to teammates without opening every node.",
        solve:
          "Prompt users to rename nodes after creation, auto-suggest names from URLs or connected fields, and show a small warning when several nodes share the same generic name."
      },
      {
        rank: "P1",
        screen: "Screen-30",
        title: "Analytics lacks node-level diagnosis",
        image: "./BuilderView/Task-4-Issues/02-analytics-logs-and-node-latency-gap.png",
        problem:
          "Analytics and logs show activity, but do not make it easy to see which node caused latency, failure, high token usage, or bad output quality.",
        matters:
          "This affects anyone maintaining workflows after launch. Without node-level diagnosis, teams cannot connect product success metrics to workflow design decisions.",
        solve:
          "Add node-level runtime, token usage, failure reason, retries, and last-output preview. Let users click from analytics directly back to the exact node on the canvas."
      },
      {
        rank: "P2",
        screen: "Screen-31",
        title: "Limit messaging interrupts setup flow",
        image: "./BuilderView/Task-4-Issues/03-project-limit-single-project-friction.png",
        problem:
          "Usage-limit messaging appears during setup without clearly explaining what action is blocked and what the user can still do.",
        matters:
          "This affects trial users and candidates evaluating the product. A vague limit message creates confusion and makes the product feel broken even when only one capability is restricted.",
        solve:
          "Use action-specific limit copy, show remaining allowed actions, and provide a lightweight evaluation mode so users can complete one workflow without creating extra objects."
      }
    ]
  },
  userflow: {
    label: "User Flow Problems",
    headline: "Ranked Fixes for User Flow",
    subhead:
      "These are ranked by impact on the pre-builder and support journey: onboarding, documentation, help, and trust recovery.",
    issues: [
      {
        rank: "P0",
        screen: "Screen-6",
        title: "Tutorial opens Access Denied",
        image: "./images/Screen6.png",
        problem:
          "Clicking Watch a Tutorial from the support widget opens a tutorial URL that returns an AccessDenied XML error.",
        matters:
          "This affects new users at the exact moment they are asking for guided onboarding. It breaks trust and pushes users away from self-serve learning.",
        solve:
          "Fix the tutorial route permissions, add monitoring for broken support-widget links, and route users to a stable tutorial index if a specific tutorial asset is unavailable."
      },
      {
        rank: "P0",
        screen: "Screen-8",
        title: "Documentation link opens 404",
        image: "./images/Screen8.png",
        problem:
          "Open VectorShift Documentation sends the user to a docs page that shows 404 Page Not Found.",
        matters:
          "This affects builders who need fast answers while learning the platform. Documentation is a core trust surface for technical and semi-technical users.",
        solve:
          "Update the support-widget documentation URL, redirect old docs paths to the current docs home, and add a link checker to release QA."
      },
      {
        rank: "P1",
        screen: "Screen-13",
        title: "Transcript download opens blank page",
        image: "./images/Screen13.png",
        problem:
          "Downloading a support transcript opens a blank Intercom transcript page before the download flow completes.",
        matters:
          "This affects users trying to preserve evidence or share support context. A blank page makes the action feel failed even if a later retry works.",
        solve:
          "Keep transcript export inside the support widget, show a loading/downloading state, and only open a new page if a readable transcript is ready."
      },
      {
        rank: "P2",
        screen: "Screen-14",
        title: "Reload creates form resubmission warning",
        image: "./images/Screen14.png",
        problem:
          "Reloading the transcript page triggers a browser form resubmission warning, which does not explain what will happen next.",
        matters:
          "This affects users who retry after the blank transcript page. It introduces risk language into a low-risk support action.",
        solve:
          "Move transcript generation to an idempotent GET/download flow, avoid POST-backed reload states, and show a clear retry button when export fails."
      }
    ]
  }
};

let activeType = "builder";
let activeIndex = 0;

function issueButtonMarkup(issue, index) {
  return `
    <button class="fix-issue-button${index === activeIndex ? " active" : ""}" type="button" data-issue-index="${index}">
      <span>${issue.rank}</span>
      <strong>${issue.screen}</strong>
      <small>${issue.title}</small>
    </button>
  `;
}

function renderIssueList() {
  const list = document.querySelector("#fixIssueList");
  list.innerHTML = fixData[activeType].issues.map(issueButtonMarkup).join("");
  list.querySelectorAll("[data-issue-index]").forEach((button) => {
    button.addEventListener("click", () => {
      activeIndex = Number(button.dataset.issueIndex);
      renderAll();
    });
  });
}

function renderFixStage() {
  const data = fixData[activeType];
  const issue = data.issues[activeIndex];
  document.querySelector("#fixStage").innerHTML = `
    <article class="fix-page">
      <div class="fix-header">
        <p>${data.label}</p>
        <h1>${data.headline}</h1>
        <span>${data.subhead}</span>
      </div>

      <section class="fix-hero">
        <figure class="fix-screen">
          <img src="${issue.image}" alt="${issue.screen}: ${issue.title}" />
          <figcaption>
            <span>${issue.rank}</span>
            <strong>${issue.screen}</strong>
            <small>${issue.title}</small>
          </figcaption>
        </figure>

        <div class="fix-detail">
          <section>
            <p>Problem</p>
            <h2>${issue.problem}</h2>
          </section>
          <section>
            <p>Why It Matters</p>
            <h2>${issue.matters}</h2>
          </section>
          <section>
            <p>What We Can Do</p>
            <h2>${issue.solve}</h2>
          </section>
        </div>
      </section>
    </article>
  `;
}

function renderTypeTabs() {
  document.querySelectorAll("[data-fix-type]").forEach((button) => {
    button.classList.toggle("active", button.dataset.fixType === activeType);
  });
}

function renderAll() {
  renderTypeTabs();
  renderIssueList();
  renderFixStage();
}

document.querySelectorAll("[data-fix-type]").forEach((button) => {
  button.addEventListener("click", () => {
    activeType = button.dataset.fixType;
    activeIndex = 0;
    renderAll();
  });
});

renderAll();
