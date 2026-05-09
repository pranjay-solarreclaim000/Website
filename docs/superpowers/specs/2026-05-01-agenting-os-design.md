# Design Spec: Claude Code Agenting OS

## Date: 2026-05-01
## Status: Proposed
## Version: 1.0

### 1. Overview
The Agenting OS is a meta-layer for Claude Code designed to transform it from a session-based assistant into a persistent, autonomous business entity. It implements a state-machine architecture to coordinate specialized agents, manage global state across sessions (Model-Agnostic Persistence), and provide a visual "Control Plane" for the founder.

### 2. Conceptual Model: The State Machine
The OS operates as a kernel that manages agent lifecycles using an Event-Driven model.

- **The OS Kernel (`skills/os-manager.md`):** A meta-skill that handles transitions. Logic: `(Current State + Event) -> (Next State + Target Agent)`.
- **Explicit Handoffs:** Agents do not simply stop; they trigger an event via the `os-manager` to transition to the next agent with a compressed context package.
- **Quality Gates (`skills/quality-gate.md`):** A mandatory verification step using "Automated Test Gates" (Run tests $\rightarrow$ Log results $\rightarrow$ Proceed/Fail).

### 3. State Management: Unified Memory Layer
To prevent progress loss during session suspensions, the OS utilizes a model-agnostic persistence layer.

- **Unified Memory (`vault/memory/universal-state.json`):** A structured JSON store containing the global "World State," active context, and a session-graph of completed milestones.
- **Cold Boot Protocol:** Every new session starts by "rehydrating" the current agent's state from the Unified Memory, ensuring zero-loss continuity across different models or sessions.
- **Session Graph:** A chronological record of state transitions stored in `vault/memory/os-state.md`.

### 4. Visual Control Plane (The Dashboard)
A browser-based interface (`/os-dashboard`) that serves as the "IDE for Agents."

- **Live Workflow Topology:** A node-edge graph visualizing the execution path.
  - **Nodes:** Milestones (Grey: Pending, Blue: Active, Green: Complete, Red: Failed).
  - **Edges:** Transition paths that light up as agents progress.
  - **Trace View:** Deep-dive into completed nodes to see agent logs and tool usage.
- **The Agent Matrix:** A real-time grid showing active agents, their bound tasks, and their current "heartbeat" status.
- **The Skill & Plugin Registry:** A directory of all available skills in `/skills` and MCP plugins with a one-click "Request Agent Use" trigger.
- **State Sync Monitor:** A visual indicator showing the health and sync status of the Unified Memory.

### 5. Component Mapping
| Component | Implementation Path | Type |
| :--- | :--- | :--- |
| OS Kernel | `skills/os-manager.md` | Skill (Meta) |
| Quality Controller | `skills/quality-gate.md` | Skill (Meta) |
| World State | `vault/memory/universal-state.json` | JSON Store |
| Session Log | `vault/memory/os-state.md` | Markdown Log |
| Control Plane | `/os-dashboard` (local web server) | UI Application |
| DoD Definitions | `vault/business-context/dod.md` | Foundation |

### 6. Success Criteria
- **Zero-Loss Recovery:** A new session can resume a task within 30 seconds of a "Cold Boot."
- **Visual Steering:** The founder can redirect an agent to a different skill via the Dashboard without manual prompting.
- **Verified Output:** No task is marked "Complete" without a passing Automated Test Gate log.
