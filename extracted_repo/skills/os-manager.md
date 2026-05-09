# Skill: OS Manager (The Kernel)

## 🎯 Purpose
The OS Manager acts as the central nervous system of the SolarReclaim OS. Its primary responsibility is to manage state transitions, ensure operational continuity, and orchestrate the handoff between specialized agents to prevent context rot and operational drift.

## ⚙️ Operational Workflow

### 1. State Retrieval
The agent must first establish the current operational baseline:
- Read `C:\Users\pranj\SolarReclaim\vault\memory\universal-state.json` to retrieve the `current_state`.

### 2. Transition Analysis
Determine the next action based on the triggering event:
- Read `C:\Users\pranj\SolarReclaim\vault\business-context\os-transition-map.md`.
- Match the current `current_state` and the triggering `Event` to find the defined transition.

### 3. State Synchronization (`os-sync` Protocol)
Before proceeding to the next agent, the state must be updated to ensure a persistent audit trail:
- Update `C:\Users\pranj\SolarReclaim\vault\memory\universal-state.json`:
    - Update `current_state` to the new state.
    - Update `last_event` to the event that triggered the transition.
    - Append the transition details to the `session_graph` array.

### 4. Agent Dispatch & Handoff
Identify the `Target Agent` and the specific skill they must invoke. Construct a **Handoff Package** containing:
- **Current State Summary**: A concise snapshot of where the system stands.
- **Specific Goal**: The exact objective the next agent must achieve.
- **Vault References**: Absolute paths to all relevant files in `C:\Users\pranj\SolarReclaim\vault\`.

## 📋 Handoff Command Format
When transitioning control, the agent MUST use the following standardized block:

```markdown
### 🔀 OS HANDOFF
- **From:** [Agent A]
- **To:** [Agent B]
- **Event:** [EVENT_NAME]
- **Next State:** [State Name]
- **Goal:** [Clear objective for Agent B]
- **Context:** [Critical files/findings]
```

## 🛠️ Reference Paths
- **State Store:** `C:\Users\pranj\SolarReclaim\vault\memory\universal-state.json`
- **Transition Map:** `C:\Users\pranj\SolarReclaim\vault\business-context\os-transition-map.md`
- **Business Context:** `C:\Users\pranj\SolarReclaim\vault\business-context\`
- **Memory Vault:** `C:\Users\pranj\SolarReclaim\vault\memory\`
