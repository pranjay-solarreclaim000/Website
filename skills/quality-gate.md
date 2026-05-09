# Quality Gate Skill

## 🎯 Purpose
To ensure every task meets the Definition of Done (DoD) and passes automated/manual verification before being marked as complete. This prevents regressions and ensures operational stability.

## 🛠️ Execution Process

### 1. Requirements Analysis
- Read the `current_task` details.
- Read the `DoD` requirements from `C:\Users\pranj\SolarReclaim\vault\business-context\dod.md`.
- Identify the specific success criteria for the task.

### 2. Verification Execution
Execute "Automated Test Gates" based on the project context:
- **Code Changes:** Run `npm test`, `pytest`, or relevant linting/test suites.
- **Configuration:** Run verification scripts or manual checks against the expected state.
- **Infrastructure:** Verify deployments via health checks or logs.
- **Manual Verification:** Perform a "sanity check" on the updated files.

### 3. State Logging
Create a **Verification Log** entry in `C:\Users\pranj\SolarReclaim\vault\memory\os-state.md` using the following format:
- **Task ID:** [ID]
- **Test Command Run:** `[command]`
- **Output/Result:** [PASS/FAIL]
- **Evidence:** [Link to file or log path]

### 4. Event Triggering
Trigger the corresponding event via `os-manager`:
- If all criteria passed $\rightarrow$ `EVENT_GATE_PASSED`
- If any criteria failed $\rightarrow$ `EVENT_GATE_FAILED`

## 📋 Gate Report Format
When reporting the result of the quality gate, use the following standardized block:

### 🛡️ QUALITY GATE REPORT
- **Task:** [Task ID/Name]
- **Verification Status:** [PASS/FAIL]
- **Tests Executed:** [List of commands]
- **Evidence:** [Paths to logs/screenshots]
- **Verdict:** [Proceed / Return to Implementation]
