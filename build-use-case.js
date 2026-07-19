const buildSections = {
  teardown: {
    label: "Problem Teardown",
    title: "Private Market Deal Intelligence Workflow",
    body:
      "Build a workflow that gathers deal and company information from multiple sources, organizes it into the right criteria, transforms it for investment analysis, and produces decision-ready output with measurable workflow analytics.",
    flow: ["Collect", "Store", "Transform", "Analyze", "Decide"],
    sections: [
      {
        id: "define-problem",
        title: "1. Define Problem",
        body:
          "Private-market teams spend too much time gathering scattered deal information from PDFs, websites, notes, tables, and internal files before they can make an investment decision. The problem is not only search; it is turning scattered inputs into reusable, structured intelligence."
      },
      {
        id: "assumptions",
        title: "2. Assumptions",
        bullets: [
          "Primary users are private-market investment teams: PE, VC, growth equity, and corporate development analysts who review companies repeatedly.",
          "The assumed geography is US and India-focused deal review, with the workflow flexible enough to support other markets later.",
          "The input data includes company websites, pitch decks, financial PDFs, market notes, CRM/table records, analyst notes, and uploaded diligence files.",
          "The expected output reports include company snapshot, market summary, diligence checklist, risk memo, IC memo draft, competitor comparison, and open-questions list.",
          "The workflow is designed for early-to-mid diligence, where teams need a fast structured view before spending deeper analyst or partner time.",
          "The decision context is not fully automated investment approval. The product should help users reach a better human decision with traceable evidence."
        ]
      },
      {
        id: "users",
        title: "3. Users",
        personas: [
          {
            initials: "AS",
            name: "Aarav Shah",
            role: "Investment Associate",
            fields: [
              ["Profession", "PE / growth equity investment associate"],
              ["Occupation", "Screens companies, reads pitch decks, extracts diligence facts, and prepares first-pass investment analysis."],
              ["Experience", "3-5 years in investing, consulting, or investment banking; strong with Excel, memos, market maps, and diligence checklists."],
              ["Work Context", "Works under tight timelines across multiple live deals. Moves between PDFs, websites, CRM notes, and internal files to prepare partner-ready material."],
              ["Behavior", "Wants fast answers but does not fully trust AI unless sources are visible and claims are easy to verify."],
              ["Goal", "Create a reliable first-pass company and deal analysis faster, without missing important risks or open questions."],
              ["Pain Point", "Information is scattered, repetitive to summarize, and hard to convert into a clean memo structure quickly."]
            ]
          },
          {
            initials: "MR",
            name: "Maya Rao",
            role: "VP / Principal",
            fields: [
              ["Profession", "Senior investment team member"],
              ["Occupation", "Reviews analyst work, compares opportunities, challenges assumptions, and decides which deals deserve deeper diligence."],
              ["Experience", "6-10 years across investing and transaction work; strong pattern recognition across sectors, markets, and deal quality."],
              ["Work Context", "Receives analysis from multiple associates and needs to quickly identify what is sourced, what is missing, and what is decision-critical."],
              ["Behavior", "Skims outputs first, drills into source-backed evidence, and pushes back on generic summaries or unsupported recommendations."],
              ["Goal", "Reach a sharper investment view faster while improving consistency across deal reviews."],
              ["Pain Point", "Analyses vary by associate quality, and source trails are often weak when challenging a finding."]
            ]
          },
          {
            initials: "NK",
            name: "Neha Kapoor",
            role: "Portfolio Operations Lead",
            fields: [
              ["Profession", "Portfolio operations / value creation lead"],
              ["Occupation", "Tracks portfolio company updates, KPIs, risks, follow-ups, and operating initiatives after investment."],
              ["Experience", "7+ years in operations, consulting, portfolio management, or finance transformation."],
              ["Work Context", "Works across many portfolio companies where updates arrive as decks, emails, spreadsheets, meeting notes, and board reports."],
              ["Behavior", "Looks for trends, exceptions, and follow-up items; needs workflows that turn messy updates into structured monitoring."],
              ["Goal", "Maintain a clean view of portfolio health and surface risks before they become board-level surprises."],
              ["Pain Point", "Portfolio knowledge becomes scattered over time, making it difficult to reuse prior context or compare companies consistently."]
            ]
          },
          {
            initials: "DR",
            name: "Dev Raman",
            role: "Platform / Data Admin",
            fields: [
              ["Profession", "Investment platform, data, or operations admin"],
              ["Occupation", "Sets up data sources, knowledge bases, workflow templates, permissions, and analytics for the investment team."],
              ["Experience", "4-8 years working with internal tools, data operations, automation platforms, or investment operations."],
              ["Work Context", "Responsible for making workflows reusable and reliable across teams without creating extra infrastructure burden."],
              ["Behavior", "Tests templates, checks data quality, monitors workflow failures, and standardizes how teams use the platform."],
              ["Goal", "Create a scalable intelligence layer that investment users can trust and reuse without constant admin support."],
              ["Pain Point", "Custom workflows can become hard to maintain if data sources, schemas, permissions, and analytics are not clearly organized."]
            ]
          }
        ],
        finalized: {
          title: "Finalized User and Why",
          user: "Aarav Shah - Investment Associate",
          reason:
            "The Investment Associate should be the primary user for this problem statement because this role faces the problem most directly and most often. Associates are responsible for collecting scattered company information, structuring diligence notes, finding risks, preparing early analysis, and turning raw material into partner-ready output.",
          comparison: [
            ["VP / Principal", "Feels the pain while reviewing, but usually consumes analysis rather than building the first structured view."],
            ["Portfolio Operations Lead", "Has a similar knowledge-scatter problem, but the use case is more post-investment monitoring than deal intake."],
            ["Platform / Data Admin", "Owns setup and reliability, but is not the daily decision user who must produce deal analysis quickly."]
          ],
          conclusion:
            "Starting with the Investment Associate gives the product the clearest problem owner, highest-frequency pain point, and strongest path to adoption inside private-market teams."
        }
      },
      {
        id: "user-journey",
        title: "4. User Journey",
        journey: [
          {
            title: "New deal enters pipeline",
            action:
              "Aarav receives a new company to evaluate from CRM, partner referral, inbound deck, or market scan.",
            thinking:
              "He needs to understand quickly whether this company is worth deeper diligence.",
            pain:
              "The starting context is thin, scattered, and often missing a clear structure.",
            opportunity:
              "Create a standard intake flow that captures company basics, source links, and evaluation criteria from the beginning."
          },
          {
            title: "Collect source material",
            action:
              "He gathers pitch decks, financial PDFs, company website pages, market notes, analyst comments, and CRM/table data.",
            thinking:
              "The information is available, but it lives across too many places.",
            pain:
              "Manual collection creates context switching, duplicate work, and risk of missing important files.",
            opportunity:
              "Use connected sources, uploads, and tables to bring deal material into one knowledge layer."
          },
          {
            title: "Structure diligence criteria",
            action:
              "He organizes information into company profile, product, market, traction, financials, risks, competitors, and open questions.",
            thinking:
              "The same criteria repeat across deals, but each deal still starts from scratch.",
            pain:
              "Without structure, AI output becomes generic and hard to reuse for memos or partner review.",
            opportunity:
              "Store extracted knowledge under repeatable diligence fields so every output has a clean foundation."
          },
          {
            title: "Generate first-pass analysis",
            action:
              "He asks for a company snapshot, risk summary, competitor comparison, diligence checklist, or IC memo draft.",
            thinking:
              "The output saves time only if it is specific, sourced, and easy to challenge.",
            pain:
              "Generic summaries do not help investment decisions, and unsupported claims reduce trust.",
            opportunity:
              "Generate source-backed analysis with citations, confidence signals, and clear open questions."
          },
          {
            title: "Review and decide next step",
            action:
              "He reviews the analysis, checks sources, edits weak sections, and decides whether to recommend deeper diligence.",
            thinking:
              "He can move faster, but he still owns the quality of the recommendation.",
            pain:
              "The final decision feels fragile if gaps, assumptions, and source coverage are not visible.",
            opportunity:
              "Turn review into an informed decision dashboard showing evidence, gaps, risks, and recommended next actions."
          },
          {
            title: "Reuse knowledge later",
            action:
              "The team reuses the same structured knowledge for IC memos, portfolio monitoring, LP reporting, or future similar deals.",
            thinking:
              "The deal work should compound instead of disappearing after one memo.",
            pain:
              "Institutional knowledge is often lost inside old folders, decks, and one-off notes.",
            opportunity:
              "Make every deal review improve the firm knowledge base and future workflow quality."
          }
        ]
      },
      {
        id: "pain-points",
        title: "5. Pain Points",
        cards: [
          ["Thin starting context", "A new deal often begins with incomplete context, scattered inputs, and no consistent evaluation structure."],
          ["Scattered source material", "The user has to move between files, websites, notes, tables, CRM records, and prior deal knowledge."],
          ["Unstructured diligence criteria", "The same diligence fields repeat across deals, but each review still starts from messy, loosely organized information."],
          ["Weak traceability", "AI-generated analysis is hard to trust if the user cannot see which source supports each claim."],
          ["Fragile decision confidence", "The user still owns the recommendation, but gaps, assumptions, and source coverage are not always visible."],
          ["Low knowledge reuse", "Each deal creates useful knowledge, but that knowledge is difficult to reuse for future deals, monitoring, or reporting."]
        ]
      },
      {
        id: "prioritize-pain-points",
        title: "6. Prioritize Pain Points",
        rice: [
          {
            pain: "Scattered source material",
            reach: 9,
            impact: 9,
            confidence: 8,
            effort: 4,
            score: 162,
            priority: "P0",
            why: "Affects almost every deal review and blocks the user before analysis can begin."
          },
          {
            pain: "Weak traceability",
            reach: 8,
            impact: 10,
            confidence: 8,
            effort: 5,
            score: 128,
            priority: "P0",
            why: "Directly affects trust in AI output for investment decisions."
          },
          {
            pain: "Unstructured diligence criteria",
            reach: 8,
            impact: 8,
            confidence: 7,
            effort: 4,
            score: 112,
            priority: "P1",
            why: "Creates inconsistent outputs and reduces reuse across deals."
          },
          {
            pain: "Fragile decision confidence",
            reach: 7,
            impact: 9,
            confidence: 7,
            effort: 5,
            score: 88,
            priority: "P1",
            why: "Important for final recommendation quality, but depends on solving source and structure first."
          },
          {
            pain: "Low knowledge reuse",
            reach: 6,
            impact: 8,
            confidence: 7,
            effort: 6,
            score: 56,
            priority: "P2",
            why: "High strategic value, but the benefit compounds after intake and structure are solved."
          },
          {
            pain: "Thin starting context",
            reach: 6,
            impact: 6,
            confidence: 6,
            effort: 4,
            score: 54,
            priority: "P2",
            why: "Useful to improve, but less severe once source collection and structure are handled."
          }
        ]
      },
      {
        id: "solutions",
        title: "7. Solutions",
        solutionGroups: [
          {
            title: "OK Solutions",
            items: [
              ["Single-source company summary workflow", "User uploads one pitch deck or document; the workflow extracts company overview, product, traction, risks, and open questions."],
              ["Website research workflow", "User enters a company URL; the workflow pulls public context and creates a structured company snapshot."],
              ["Manual criteria table workflow", "User enters facts into a table; the workflow organizes them into diligence criteria and highlights missing fields."],
              ["Memo outline generator workflow", "User provides deal notes; the workflow generates an IC memo outline with sections the associate can edit."]
            ]
          },
          {
            title: "Best Solutions",
            items: [
              ["Multi-source deal intake workflow", "User adds files, URLs, and notes; the workflow extracts and stores information under company profile, market, traction, risks, and financials."],
              ["Knowledge-base creation workflow", "The workflow loads source material into a deal-specific knowledge base so later analysis can retrieve grounded answers."],
              ["Source-backed analysis workflow", "The workflow reads from the knowledge base and produces company snapshot, risk summary, competitor view, and open questions with source references."],
              ["Diligence gap workflow", "The workflow compares available information against required diligence criteria and returns missing data, weak evidence, and next questions."]
            ]
          },
          {
            title: "Moonshot Solutions",
            items: [
              ["End-to-end deal intelligence workflow", "A chained workflow that collects sources, stores them in a knowledge base, transforms them into diligence criteria, and generates decision-ready analysis."],
              ["Autonomous diligence analyst workflow", "An agent-style workflow that reviews sources, detects missing evidence, asks follow-up questions, and prepares a first-pass memo."],
              ["Cross-source evidence workflow", "The workflow validates each important claim across multiple files, URLs, and notes, then flags weak or unsupported findings."],
              ["Investment decision cockpit workflow", "The workflow creates a final output with source coverage, confidence score, risk flags, open questions, and next-best diligence actions."]
            ]
          }
        ]
      },
      {
        id: "prioritize-solution",
        title: "8. Prioritize Solution",
        timeEffort: [
          {
            solution: "Cross-source evidence workflow",
            time: "Low",
            effort: "Medium",
            decision: "✓ Build",
            why: "Best first build because it directly solves trust and traceability while staying feasible inside one VectorShift workflow."
          },
          {
            solution: "Investment decision cockpit workflow",
            time: "Medium",
            effort: "Medium",
            decision: "✕ Not now",
            why: "Useful output layer, but it should come after the core evidence workflow proves that claims can be checked and trusted."
          },
          {
            solution: "End-to-end deal intelligence workflow",
            time: "High",
            effort: "High",
            decision: "✕ Not now",
            why: "Most complete version of the use case, but better built in phases because intake, storage, retrieval, and analysis add complexity."
          },
          {
            solution: "Autonomous diligence analyst workflow",
            time: "Medium",
            effort: "High",
            decision: "✕ Not now",
            why: "Powerful but most risky to trust because autonomous analysis needs strong source ingestion, retrieval, and validation first."
          }
        ]
      },
      {
        id: "success-metrics",
        title: "9. Success Metrics",
        metricSections: [
          {
            title: "9.1 North Star Metric",
            items: [
              {
                metric: "Evidence-backed findings rate",
                threshold: ">= 80%",
                measures:
                  "Share of key findings in the final output that include clear source evidence.",
                success:
                  "The workflow is useful only if most outputs are traceable, not generic summaries."
              }
            ]
          },
          {
            title: "9.2 Success Metrics",
            items: [
              {
                metric: "Claim traceability",
                threshold: ">= 90%",
                measures:
                  "Important claims include a source name, uploaded file, URL, or extracted evidence reference.",
                success:
                  "Associates can verify the output quickly before using it in diligence or memo work."
              },
              {
                metric: "Diligence criteria coverage",
                threshold: ">= 6 of 8 fields",
                measures:
                  "Coverage across company profile, product, market, traction, financials, risks, competitors, and open questions.",
                success:
                  "The workflow produces a complete enough first-pass view for investment review."
              },
              {
                metric: "Time to first evidence report",
                threshold: "<= 5 minutes",
                measures:
                  "Time from adding source material to receiving a structured evidence report.",
                success:
                  "The workflow saves associate time versus manually reading and organizing sources."
              }
            ]
          },
          {
            title: "9.3 Analytical Metrics",
            items: [
              {
                metric: "Workflow completion rate",
                threshold: "100% across 3 test runs",
                measures:
                  "Whether the workflow completes without blocking node errors or broken output.",
                success:
                  "The prototype is stable enough to demonstrate and evaluate."
              },
              {
                metric: "Source retrieval hit rate",
                threshold: ">= 80%",
                measures:
                  "How often the workflow retrieves relevant source material for the user's requested evidence check.",
                success:
                  "The knowledge/source layer is retrieving useful evidence instead of returning empty or unrelated context."
              },
              {
                metric: "Average workflow runtime",
                threshold: "<= 2 minutes",
                measures:
                  "Average time taken for the workflow to process inputs and generate the evidence report.",
                success:
                  "The workflow is fast enough for an associate to use during active diligence without waiting too long."
              },
              {
                metric: "Manual correction rate",
                threshold: "<= 25%",
                measures:
                  "Share of generated findings that require meaningful user edits before being usable.",
                success:
                  "The output is close enough to usable that the workflow saves time instead of creating rework."
              }
            ]
          },
          {
            title: "9.4 Guardrail Metrics",
            items: [
              {
                metric: "Unsupported claim rate",
                threshold: "<= 10%",
                measures:
                  "Share of output claims that cannot be traced back to the provided sources.",
                success:
                  "The workflow avoids overconfident analysis and keeps user trust intact."
              },
              {
                metric: "Missing-information detection",
                threshold: ">= 5 useful gaps",
                measures:
                  "Number of concrete missing fields, weak evidence areas, or follow-up questions returned.",
                success:
                  "The workflow helps the associate know what still needs diligence before making a recommendation."
              }
            ]
          }
        ]
      },
      {
        id: "risks",
        title: "10. Risks, Tradeoffs, and Constraints",
        riskSections: [
          {
            title: "10.1 Risks",
            items: [
              ["Unsupported claims", "The workflow may generate a finding that sounds useful but is not supported by the provided sources."],
              ["Incomplete source coverage", "Important source material may be missing, causing the output to look more complete than it really is."],
              ["Overtrust in AI output", "Associates may accept the analysis too quickly if the output appears polished."],
              ["Data sensitivity", "Deal documents can contain confidential information, so source handling and permissions matter."]
            ]
          },
          {
            title: "10.2 Tradeoffs",
            items: [
              ["Speed vs verification", "A faster workflow is useful, but too much speed can reduce careful source checking."],
              ["Simple workflow vs complete workflow", "One workflow is easier to build and demo, but it cannot solve the full deal-intelligence lifecycle."],
              ["Structured criteria vs flexibility", "A fixed diligence structure improves output quality, but may not fit every sector or deal type."],
              ["Automation vs human judgment", "The workflow should support decisions, not replace investment judgment."]
            ]
          },
          {
            title: "10.3 Constraints",
            items: [
              ["Builder scope", "We are building one workflow, so the prototype must focus on evidence checking rather than full autonomous diligence."],
              ["Available sources", "The workflow can only validate claims against the files, URLs, or notes provided during testing."],
              ["Time limit", "The assessment timeline limits how much data, testing, and workflow polish can be completed."],
              ["Analytics depth", "Some metrics may need to be measured manually from prototype runs if platform analytics are limited."]
            ]
          },
          {
            title: "10.4 Mitigation / Decision",
            items: [
              ["Build narrow first", "Prioritize the cross-source evidence workflow because it is feasible and directly targets traceability."],
              ["Keep human review", "Position the output as evidence for the associate to review, not as an automatic investment recommendation."],
              ["Show gaps explicitly", "Include missing information and weak evidence areas in the output so the user knows what still needs diligence."],
              ["Measure with thresholds", "Use the success metrics section to decide whether the workflow is useful enough to expand."]
            ]
          }
        ]
      },
      {
        id: "conclusion",
        title: "11. Conclusion",
        body:
          "The teardown shows that the strongest first workflow is not a generic investment chatbot. The highest-value problem is helping associates verify deal claims across scattered sources and convert that evidence into a trusted diligence output. The selected workflow should focus on source-backed findings, missing-information detection, and clear evidence quality. This keeps the prototype feasible inside VectorShift while still proving a meaningful private-market use case."
      }
    ]
  },
  prototype: {
    label: "Working Prototype",
    title: "Cross-source Deal Intelligence Workflow",
    body:
      "The prototype direction is to prove a real private-market intelligence pipeline inside VectorShift: collect multiple sources, store the source data, reload it for analysis, transform it into diligence criteria, generate a decision memo, and save the final output with source references.",
    sections: [
      {
        id: "solution-workflows",
        title: "1. Planned Solution Workflow",
        status: "Target architecture",
        body:
          "The planned workflow focuses on the highest-priority problem from the teardown: scattered deal sources and weak traceability. The target graph is not just scrape and summarize. It needs a persistent storage layer before the decision step.",
        flowStages: [
          ["Collect", "Scrape URLs, upload files, and accept analyst input."],
          ["Store", "Save raw source text and metadata in VectorShift Table / Knowledge Base."],
          ["Load", "Read the saved source records back into the workflow."],
          ["Transform", "Map evidence into diligence fields: company, product, market, risks, gaps, and sources."],
          ["Decide", "Generate the investment-facing memo and recommendation."],
          ["Save Output", "Store the final memo/report with source references and run metrics."]
        ],
        bullets: [
          "Raw source data should not live only inside node traces.",
          "Table storage is best for structured fields such as source name, URL, category, evidence, confidence, and extracted facts.",
          "Knowledge Base storage is best for long documents, uploaded files, PDFs, web pages, and qualitative source text.",
          "The final output should be visible in an Output node and also saved in a reusable format for later review."
        ],
        images: [
          ["Data storage node available in builder", "./BuilderView/Workflow-Build/30-search-add-new-row-table-node.png"],
          ["Add New Row To Table node added", "./BuilderView/Workflow-Build/31-add-new-row-to-table-node-added.png"]
        ]
      },
      {
        id: "worked-analysis",
        title: "2. What Was Built",
        status: "Working partial flow",
        body:
          "The current VectorShift canvas successfully sets up the first working slice: analyst input plus three public source scrapers feeding an OpenAI decision node. This proves the collection and analysis path, but it does not yet prove persistent storage.",
        bullets: [
          "Input node captures the analyst focus.",
          "URL Scraper 1 loads the VectorShift website.",
          "URL Scraper 2 loads the YC company profile.",
          "URL Scraper 3 loads the FinSMEs funding article.",
          "OpenAI node converts the gathered source context into a structured decision memo."
        ],
        images: [
          ["Current working canvas", "./BuilderView/Workflow-Build/37-clean-workflow-state-after-storage-blocker.png"],
          ["Earlier successful decision output trace", "./BuilderView/Workflow-Build/17-decision-output-memo-and-token-metrics.png"]
        ]
      },
      {
        id: "results-analytics",
        title: "3. Storage Attempt and Blocker",
        status: "Stopped by platform limit",
        body:
          "To complete the intended pipeline, I attempted to add VectorShift's native Add New Row To Table node and create a table named VectorShift Source Store. VectorShift blocked table creation with a usage-limit message, so I stopped and removed the incomplete table node rather than leaving a broken workflow.",
        metrics: [
          ["Attempted storage node", "Add New Row To Table"],
          ["Target table", "VectorShift Source Store"],
          ["Blocked message", "Usage limit exceeded for User Project Count"],
          ["Result", "Storage layer not created"],
          ["Clean-up action", "Incomplete table node removed from canvas"]
        ],
        images: [
          ["Usage limit blocker", "./BuilderView/Workflow-Build/33-table-created-or-limit-from-node.png"],
          ["Clean canvas after blocker cleanup", "./BuilderView/Workflow-Build/37-clean-workflow-state-after-storage-blocker.png"]
        ]
      },
      {
        id: "success-measure",
        title: "4. Testing Status",
        status: "Partially tested",
        body:
          "The collection and analysis portion was tested through successful scraper and OpenAI runs. The storage portion could not be fully tested because the account could not create the required table. The prototype should not be marked complete until storage, reload, final output, and analytics evidence are tested end to end.",
        metrics: [
          ["Scraper nodes", "Configured and previously tested"],
          ["OpenAI decision node", "Configured and previously tested"],
          ["Table storage", "Blocked before test"],
          ["Stored data visibility", "Not available yet"],
          ["Final end-to-end run", "Pending after limit unlock"]
        ]
      },
      {
        id: "next-steps",
        title: "5. Next Build Steps",
        status: "Resume after limit unlock",
        body:
          "After VectorShift table creation is available, the workflow should be completed from the storage layer forward and tested node by node.",
        bullets: [
          "Create VectorShift Source Store table with fields for source name, source URL, source type, raw content, extracted facts, confidence, and run ID.",
          "Connect each scraper output into Add New Row To Table or a source-normalization step before storage.",
          "Add a Table read / aggregate node to load saved source records back into the decision prompt.",
          "Add a transform node or LLM prompt that converts saved records into diligence criteria.",
          "Add an Output node and, if available, a final table/document write step for the generated memo.",
          "Run three clean tests and capture table rows, final output, analytics logs, and run metrics."
        ]
      }
    ]
  }
};

let sectionObserver;

function teardownMarkup(data) {
  return `
    <article class="build-view">
      <div class="teardown-stack">
        ${data.sections.map((section) => sectionMarkup(section)).join("")}
      </div>
    </article>
  `;
}

function sectionMarkup(section) {
  if (section.personas) {
    return `
      <section class="teardown-section persona-section" id="${section.id}">
        <h3>${section.title}</h3>
        <div class="persona-grid">
          ${section.personas.map((persona) => personaMarkup(persona)).join("")}
        </div>
        ${section.finalized ? finalizedUserMarkup(section.finalized) : ""}
      </section>
    `;
  }

  if (section.cards) {
    return `
      <section class="teardown-section" id="${section.id}">
        <h3>${section.title}</h3>
        <div class="teardown-grid">
          ${section.cards.map(([title, text]) => `<div><strong>${title}</strong><p>${text}</p></div>`).join("")}
        </div>
      </section>
    `;
  }

  if (section.solutionGroups) {
    return `
      <section class="teardown-section solution-section" id="${section.id}">
        <h3>${section.title}</h3>
        <div class="solution-columns">
          ${section.solutionGroups.map((group) => solutionGroupMarkup(group)).join("")}
        </div>
      </section>
    `;
  }

  if (section.ranked) {
    return `
      <section class="teardown-section" id="${section.id}">
        <h3>${section.title}</h3>
        <div class="rank-list">
          ${section.ranked
            .map(([priority, title, text]) => `<div><span>${priority}</span><strong>${title}</strong><p>${text}</p></div>`)
            .join("")}
        </div>
      </section>
    `;
  }

  if (section.timeEffort) {
    return `
      <section class="teardown-section time-effort-section" id="${section.id}">
        <h3>${section.title}</h3>
        ${timeEffortTableMarkup(section.timeEffort)}
      </section>
    `;
  }

  if (section.rice) {
    return `
      <section class="teardown-section rice-section" id="${section.id}">
        <h3>${section.title}</h3>
        ${riceTableMarkup(section.rice)}
      </section>
    `;
  }

  if (section.metricSections) {
    return `
      <section class="teardown-section success-metrics-section" id="${section.id}">
        <h3>${section.title}</h3>
        <p class="section-note">Success is measured for the selected build: Cross-source evidence workflow.</p>
        <div class="metric-section-stack">
          ${section.metricSections.map((metricSection) => metricSectionMarkup(metricSection)).join("")}
        </div>
      </section>
    `;
  }

  if (section.steps) {
    return `
      <section class="teardown-section" id="${section.id}">
        <h3>${section.title}</h3>
        <ol class="journey-steps">
          ${section.steps.map((item) => `<li>${item}</li>`).join("")}
        </ol>
      </section>
    `;
  }

  if (section.journey) {
    return `
      <section class="teardown-section journey-section" id="${section.id}">
        <h3>${section.title}</h3>
        ${journeyTableMarkup(section.journey)}
      </section>
    `;
  }

  if (section.bullets) {
    return `
      <section class="teardown-section" id="${section.id}">
        <h3>${section.title}</h3>
        <ul class="teardown-bullets">
          ${section.bullets.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    `;
  }

  if (section.riskSections) {
    return `
      <section class="teardown-section risk-section" id="${section.id}">
        <h3>${section.title}</h3>
        <div class="risk-section-stack">
          ${section.riskSections.map((riskSection) => riskSectionMarkup(riskSection)).join("")}
        </div>
      </section>
    `;
  }

  return `
    <section class="teardown-section" id="${section.id}">
      <h3>${section.title}</h3>
      <p>${section.body}</p>
    </section>
  `;
}

function personaMarkup(persona) {
  return `
    <article class="persona-card">
      <div class="persona-photo">
        <span>${persona.initials}</span>
      </div>
      <div class="persona-content">
        <h4>${persona.name}</h4>
        <p>${persona.role}</p>
        <dl>
          ${persona.fields.map(([label, text]) => `<div><dt>${label}:</dt><dd>${text}</dd></div>`).join("")}
        </dl>
      </div>
    </article>
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

function finalizedUserMarkup(data) {
  return `
    <aside class="finalized-user">
      <span>${data.title}</span>
      <h4>${data.user}</h4>
      <p>${data.reason}</p>
      <div class="finalized-comparison">
        ${data.comparison.map(([label, text]) => `<div><strong>${label}</strong><p>${text}</p></div>`).join("")}
      </div>
      <p class="finalized-conclusion">${data.conclusion}</p>
    </aside>
  `;
}

function journeyTableMarkup(items) {
  return `
    <div class="journey-table-wrap">
      <table class="journey-table">
        <thead>
          <tr>
            <th>Step</th>
            <th>Action</th>
            <th>Thinking</th>
            <th>Pain Point</th>
            <th>Opportunity</th>
          </tr>
        </thead>
        <tbody>
          ${items
            .map(
              (item, index) => `
                <tr>
                  <td><span>${String(index + 1).padStart(2, "0")}</span><strong>${item.title}</strong></td>
                  <td>${item.action}</td>
                  <td>${item.thinking}</td>
                  <td>${item.pain}</td>
                  <td>${item.opportunity}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function riceTableMarkup(items) {
  return `
    <div class="rice-table-wrap">
      <table class="rice-table">
        <thead>
          <tr>
            <th>Pain Point</th>
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
          ${items
            .map(
              (item) => `
                <tr>
                  <td><strong>${item.pain}</strong></td>
                  <td>${item.reach}</td>
                  <td>${item.impact}</td>
                  <td>${item.confidence}</td>
                  <td>${item.effort}</td>
                  <td><span>${item.score}</span></td>
                  <td><em>${item.priority}</em></td>
                  <td>${item.why}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function timeEffortTableMarkup(items) {
  return `
    <div class="time-effort-wrap">
      <table class="time-effort-table">
        <thead>
          <tr>
            <th>Moonshot Solution</th>
            <th>Time</th>
            <th>Effort</th>
            <th>Decision</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          ${items
            .map(
              (item) => `
                <tr>
                  <td><strong>${item.solution}</strong></td>
                  <td><span>${item.time}</span></td>
                  <td><span>${item.effort}</span></td>
                  <td><em class="${item.decision.includes("✓") ? "will-build" : "not-build"}">${item.decision}</em></td>
                  <td>${item.why}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function metricSectionMarkup(section) {
  return `
    <article class="metric-section-block">
      <h4>${section.title}</h4>
      ${successMetricsTableMarkup(section.items)}
    </article>
  `;
}

function riskSectionMarkup(section) {
  return `
    <article class="risk-section-block">
      <h4>${section.title}</h4>
      <div class="risk-grid">
        ${section.items.map(([title, text]) => `<div><strong>${title}</strong><p>${text}</p></div>`).join("")}
      </div>
    </article>
  `;
}

function successMetricsTableMarkup(items) {
  return `
    <div class="success-table-wrap">
      <table class="success-table">
        <thead>
          <tr>
            <th>Metric</th>
            <th>Threshold</th>
            <th>What It Measures</th>
            <th>Success Meaning</th>
          </tr>
        </thead>
        <tbody>
          ${items
            .map(
              (item) => `
                <tr>
                  <td><strong>${item.metric}</strong></td>
                  <td><span>${item.threshold}</span></td>
                  <td>${item.measures}</td>
                  <td>${item.success}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function prototypeMarkup(data) {
  return `
    <article class="build-view">
      <div class="evidence-stack">
        ${data.sections.map((section) => prototypeSectionMarkup(section)).join("")}
      </div>
    </article>
  `;
}

function prototypeSectionMarkup(section) {
  return `
    <section class="teardown-section evidence-section" id="${section.id}">
      <div class="evidence-heading">
        <h3>${section.title}</h3>
        <span>${section.status}</span>
      </div>
      <p>${section.body}</p>
      ${section.flowStages ? workflowStagesMarkup(section.flowStages) : ""}
      ${section.bullets ? `<ul class="teardown-bullets">${section.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
      ${section.metrics ? metricsMiniTableMarkup(section.metrics) : ""}
      ${section.issues ? issueTableMarkup(section.issues) : ""}
      ${section.images ? evidenceImagesMarkup(section.images) : ""}
    </section>
  `;
}

function workflowStagesMarkup(stages) {
  return `
    <div class="workflow-stage-strip">
      ${stages
        .map(
          ([label, text]) => `
            <article>
              <strong>${label}</strong>
              <p>${text}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function metricsMiniTableMarkup(items) {
  return `
    <div class="metric-mini-wrap">
      <table class="metric-mini-table">
        <tbody>
          ${items.map(([label, value]) => `<tr><th>${label}</th><td>${value}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function issueTableMarkup(items) {
  return `
    <div class="issue-table-wrap">
      <table class="issue-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Issue</th>
            <th>Where</th>
            <th>Why It Matters</th>
            <th>Fix</th>
          </tr>
        </thead>
        <tbody>
          ${items
            .map(
              (item) => `
                <tr>
                  <td><span>${item.rank}</span></td>
                  <td><strong>${item.issue}</strong></td>
                  <td>${item.screen}</td>
                  <td>${item.impact}</td>
                  <td>${item.fix}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function evidenceImagesMarkup(images) {
  return `
    <div class="evidence-image-grid">
      ${images
        .map(([label, src]) => `<figure><img src="${src}" alt="${label}" /><figcaption>${label}</figcaption></figure>`)
        .join("")}
    </div>
  `;
}

function updateSubsectionNav(key, activeTargetId) {
  const tree = document.querySelector("#sectionTree");
  const groups = [
    {
      key: "teardown",
      index: "01",
      label: "Problem Teardown",
      items: buildSections.teardown.sections.map(({ id, title }) => [id, title])
    },
    {
      key: "prototype",
      index: "02",
      label: "Working Prototype",
      items: buildSections.prototype.sections.map(({ id, title }) => [id, title])
    }
  ];

  tree.innerHTML = groups
    .map(
      (group) => `
        <div class="section-tree-group ${group.key === key ? "active" : ""}">
          <button class="about-tab compact-tab ${group.key === key ? "active" : ""}" type="button" data-section="${group.key}">
            <span>${group.index}</span>
            ${group.label}
          </button>
          <div class="subsection-nav">
            ${group.items
              .map(
                ([id, title], index) => {
                  const isActive =
                    group.key === key && (activeTargetId ? id === activeTargetId : index === 0);
                  return `<button class="subsection-link ${isActive ? "active" : ""}" type="button" data-section="${group.key}" data-target="${id}">${title}</button>`;
                }
              )
              .join("")}
          </div>
        </div>
      `
    )
    .join("");

  tree.querySelectorAll(".about-tab").forEach((button) => {
    button.addEventListener("click", () => renderBuildSection(button.dataset.section));
  });

  tree.querySelectorAll(".subsection-link").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.section !== currentSection) {
        renderBuildSection(button.dataset.section, button.dataset.target);
        return;
      }

      scrollToSubsection(button.dataset.target);
    });
  });
}

function scrollToSubsection(targetId) {
  const target = document.getElementById(targetId);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function syncSubsectionOnScroll() {
  if (sectionObserver) sectionObserver.disconnect();

  const navButtons = [...document.querySelectorAll(".subsection-link")];
  const targets = navButtons
    .map((button) => document.getElementById(button.dataset.target))
    .filter(Boolean);

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      navButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.target === visible.target.id);
      });
    },
    { root: null, rootMargin: "-18% 0px -66% 0px", threshold: [0, 0.2, 0.55] }
  );

  targets.forEach((target) => sectionObserver.observe(target));
}

function renderBuildSection(key, targetId) {
  currentSection = key;
  const data = buildSections[key];
  document.querySelector("#buildStage").innerHTML =
    key === "teardown" ? teardownMarkup(data) : prototypeMarkup(data);
  updateSubsectionNav(key, targetId);
  syncSubsectionOnScroll();

  if (targetId) requestAnimationFrame(() => scrollToSubsection(targetId));
}

let currentSection = "teardown";
renderBuildSection("teardown");
