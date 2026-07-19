# Ranked Builder View Issues

## P0: Node placement and naming are not guided enough
Screenshot: `01-builder-canvas-default-naming-guidance.png`

Issue: New nodes can land close together and default names like `input_0`, `url_loader_0`, and `openai_0` make the canvas hard to explain later.

Why it matters: PMs, analysts, and operators need workflows that are understandable by teammates, not only by the builder.

Fix: Add automatic lane placement, collision avoidance, and a required friendly-name prompt when a node is first added.

## P1: Analytics has run-level logs, but node-level analytics is not fully surfaced
Screenshot: `02-analytics-logs-and-node-latency-gap.png`

Issue: The dashboard shows successful workflow traces, cost, tokens, and latency, but the average node latency panel can still show no data / not deployed.

Why it matters: Teams need node-level visibility to debug slow scrapers, expensive LLM calls, and reliability bottlenecks.

Fix: Show node-level metrics for draft/test runs too, or clearly label which metrics require deployment.

## P2: Project limit creates setup friction during builder exploration
Screenshot: `03-project-limit-single-project-friction.png`

Issue: The free/workspace limit blocks a new build when one project already exists.

Why it matters: Candidates, evaluators, and early users often need to compare multiple prototype attempts.

Fix: Allow multiple draft/sandbox projects with limited runs, or provide a temporary evaluation workspace.
