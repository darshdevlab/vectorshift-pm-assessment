const competitorSections = {
  direct: {
    label: "Direct Competitors",
    title: "Private-market AI platforms competing closest to VectorShift",
    summary:
      "These companies compete near VectorShift's newer private-market intelligence positioning: diligence, deal memory, sourced answers, and investment-team workflows.",
    competitors: [
      {
        name: "Hebbia",
        category: "Document intelligence for finance and legal teams",
        better:
          "Enterprise-grade document analysis, citations, high-stakes diligence workflows, and strong trust with finance and legal buyers.",
        threat:
          "Can own the diligence analyst workflow before VectorShift becomes the system of record for deal knowledge.",
        beat:
          "Win by pairing document intelligence with configurable workflows, reusable knowledge bases, tables, agents, and analytics instead of staying only in Q&A."
      },
      {
        name: "Rogo",
        category: "AI analyst for finance teams",
        better:
          "Wall Street positioning, finance-native analyst workflows, institution-specific search, and enterprise adoption signals.",
        threat:
          "May become the default AI assistant for investment professionals if VectorShift looks too much like a generic builder.",
        beat:
          "Go deeper on private-market firm operations: deal memory, IC memo reuse, portfolio monitoring, LP reporting, and workflow automation."
      },
      {
        name: "Mosaic",
        category: "AI workflows for deal modeling",
        better:
          "Investment banking and PE modeling workflows such as LBOs, DCFs, CIM summaries, and pitchbook support.",
        threat:
          "Can win users who define deal work mainly as model and memo production.",
        beat:
          "Own the wider operating layer around modeling: source collection, evidence storage, diligence gaps, decision memos, and post-investment monitoring."
      },
      {
        name: "Termina",
        category: "Quantitative diligence and market scans",
        better:
          "Fast company screening, growth analysis, financial scans, and structured diligence signals.",
        threat:
          "Can win early-stage screening and quantitative analysis workflows.",
        beat:
          "Connect qualitative and quantitative evidence into one repeatable workflow with traceable sources and final decision outputs."
      }
    ]
  },
  tools: {
    label: "Tool-Wise Competitors",
    title: "Workflow builders competing with VectorShift's builder layer",
    summary:
      "These tools compete when the buyer thinks the problem is automation, integrations, LLM workflows, or agent building rather than private-market intelligence.",
    competitors: [
      {
        name: "n8n",
        category: "Workflow automation",
        better:
          "Large integration ecosystem, technical-user flexibility, visible execution steps, and strong automation control.",
        threat:
          "Technical teams may choose n8n when they care more about integration breadth than vertical private-market workflows.",
        beat:
          "Offer finance-ready templates, sourced outputs, evidence storage, and cleaner paths for non-technical PMs, analysts, and ops builders."
      },
      {
        name: "Langflow",
        category: "Open-source AI workflow builder",
        better:
          "Flexible RAG and agent prototyping, broad model/vector database options, and strong developer experimentation.",
        threat:
          "Can attract AI builders who want complete control over their LLM stack.",
        beat:
          "Differentiate with enterprise data handling, deployment, analytics, permissions, and private-market workflow packaging."
      },
      {
        name: "Flowise",
        category: "Visual LLM app builder",
        better:
          "Quick no-code/low-code LLM app prototyping with familiar visual building blocks.",
        threat:
          "Can be easier for teams that only need a simple chatbot, retrieval app, or internal assistant.",
        beat:
          "Win with stronger governance, reusable knowledge bases, richer analytics, and templates that map to investment-team outcomes."
      },
      {
        name: "Zapier / Make",
        category: "Mainstream automation",
        better:
          "Huge app ecosystems, user familiarity, and simple trigger-action automations.",
        threat:
          "Business users may default to existing automation tools before trying a specialized AI builder.",
        beat:
          "Stay less generic: sell intelligence workflows that understand documents, firm knowledge, evidence, and investment decisions."
      }
    ]
  },
  industry: {
    label: "Industry Competitors",
    title: "Private-market systems competing for the same workflow budget",
    summary:
      "These platforms may not look like VectorShift, but they already live inside private-market teams and compete for attention, budget, and workflow ownership.",
    competitors: [
      {
        name: "Affinity",
        category: "Private-capital CRM and relationship intelligence",
        better:
          "Relationship data, sourcing pipeline, CRM adoption, and private-capital network intelligence.",
        threat:
          "Can remain the place teams start deal work and manage relationship context.",
        beat:
          "Become the intelligence layer on top of CRM data: diligence synthesis, memo support, portfolio follow-ups, and sourced answers."
      },
      {
        name: "Intapp DealCloud",
        category: "Deal management platform",
        better:
          "Deep deal management workflows, relationship data, firm process adoption, and regulated-market familiarity.",
        threat:
          "Can own the system-of-record role for deals, activities, contacts, and pipeline.",
        beat:
          "Offer faster AI-native workflow creation and connect deal data with knowledge bases, agents, and decision outputs."
      },
      {
        name: "AlphaSense",
        category: "Market intelligence and research",
        better:
          "External research content, company intelligence, expert transcripts, search quality, and analyst discovery workflows.",
        threat:
          "Can own the external research layer that investment teams already trust.",
        beat:
          "Blend external signals with internal firm knowledge, deal files, portfolio data, and workflow execution."
      },
      {
        name: "Internal tools / Excel / SharePoint",
        category: "Existing firm workflow stack",
        better:
          "Already adopted, flexible, familiar, and deeply embedded in team habits.",
        threat:
          "Teams may keep patching scattered workflows instead of adopting a new platform.",
        beat:
          "Reduce scattered knowledge with repeatable, source-backed workflows that make evidence, outputs, and run history easier to reuse."
      }
    ]
  }
};

let activeCompetitorSection = "direct";

function competitorRowMarkup(item, index) {
  return `
    <tr>
      <td>
        <span class="competitor-rank">${String(index + 1).padStart(2, "0")}</span>
        <strong>${item.name}</strong>
        <small>${item.category}</small>
      </td>
      <td>${item.better}</td>
      <td>${item.threat}</td>
      <td>${item.beat}</td>
    </tr>
  `;
}

function renderCompetitorStage() {
  const section = competitorSections[activeCompetitorSection];
  document.querySelector("#competitorStage").innerHTML = `
    <article class="competitor-page">
      <section class="competitor-table-wrap" aria-label="${section.label} comparison">
        <table class="competitor-table">
          <thead>
            <tr>
              <th>Competitor</th>
              <th>Where They Are Better</th>
              <th>Why It Matters</th>
              <th>How VectorShift Can Beat Them</th>
            </tr>
          </thead>
          <tbody>
            ${section.competitors.map(competitorRowMarkup).join("")}
          </tbody>
        </table>
      </section>
    </article>
  `;
}

function renderCompetitorTabs() {
  document.querySelectorAll("[data-competitor-section]").forEach((button) => {
    button.classList.toggle("active", button.dataset.competitorSection === activeCompetitorSection);
  });
}

function renderCompetitorPage() {
  renderCompetitorTabs();
  renderCompetitorStage();
}

document.querySelectorAll("[data-competitor-section]").forEach((button) => {
  button.addEventListener("click", () => {
    activeCompetitorSection = button.dataset.competitorSection;
    renderCompetitorPage();
  });
});

renderCompetitorPage();
