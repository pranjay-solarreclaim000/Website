# OS State Transition Map

| Current State | Event | Next State | Target Agent |
| :--- | :--- | :--- | :--- |
| IDLE | EVENT_START_PROJECT | RESEARCH | Research Agent |
| RESEARCH | EVENT_RESEARCH_COMPLETE | PLANNING | Plan Agent |
| PLANNING | EVENT_PLAN_APPROVED | IMPLEMENTATION | Implementer Agent |
| IMPLEMENTATION | EVENT_IMPL_COMPLETE | QUALITY_REVIEW | Quality Agent |
| QUALITY_REVIEW | EVENT_GATE_PASSED | IDLE | OS Kernel |
| QUALITY_REVIEW | EVENT_GATE_FAILED | IMPLEMENTATION | Implementer Agent |
