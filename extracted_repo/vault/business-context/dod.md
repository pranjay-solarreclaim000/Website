# Definition of Done (DoD) Framework

This document establishes the baseline requirements for any task or feature within the SolarReclaim OS to be considered "Done". The goal is to ensure consistent quality, reliability, and state synchronization across the modular architecture.

## 🌍 Global DoD Standards

Every task, regardless of scope, must satisfy these four pillars before being marked as completed:

### 1. Code Quality & Architecture
- [ ] **Linting & Formatting:** All code passes project linting rules and adheres to the established style guide.
- [ ] **Pattern Adherence:** Implementation follows the modular intelligence architecture (Foundation $\rightarrow$ Memory $\rightarrow$ Skills).
- [ ] **Bug-Free:** No obvious regressions or bugs introduced. Logic has been sanity-checked.
- [ ] **Cleanliness:** No commented-out code, debug logs, or "todo" comments left in the final version.

### 2. Verification & Testing
- [ ] **Execution:** The feature/fix has been executed and verified in the local environment.
- [ ] **Test Coverage:** Relevant tests (unit, integration, or manual smoke tests) have been written and executed successfully.
- [ ] **Edge Cases:** Critical edge cases (e.g., null values, timeout, unexpected input) have been considered and handled.

### 3. Persistence & Version Control
- [ ] **Git Commit:** Changes are committed to the repository.
- [ ] **Commit Messages:** Commit messages follow the conventional commits format (e.g., `feat(scope): description` or `fix(scope): description`).
- [ ] **Atomic Changes:** Commits are focused and atomic; one logical change per commit.

### 4. State Synchronization
- [ ] **Universal State Update:** If the task modifies business context or operational logic, `os-sync` (or the equivalent state update mechanism) has been called to synchronize the universal state.
- [ ] **Memory Update:** Any new persistent data or preferences have been logged in the appropriate `/vault/memory` files.

---

## 🛠️ Task-Specific DoD Templates

The Global DoD is the baseline. Depending on the type of task, additional criteria must be added.

### Example A: New Skill Implementation (`/skills/*.md`)
*In addition to Global DoD:*
- [ ] **SOP Clarity:** The skill is written as a clear, step-by-step SOP that a human or agent can follow without ambiguity.
- [ ] **Foundation Import:** The skill explicitly references or imports the necessary brand/ICP data from `/vault/business-context`.
- [ ] **Founder Approval Loop:** If the skill involves client communication, the "Human Checkpoint" rule is explicitly integrated into the workflow.

### Example B: Infrastructure/Config Change
*In addition to Global DoD:*
- [ ] **Backup:** A backup of the previous configuration exists if the change is high-risk.
- [ ] **Env Var Check:** All required environment variables are documented and set in the local `.env` or settings.
- [ ] **Performance Impact:** No significant degradation in CLI response time or resource usage.

### Example C: Documentation Update
*In addition to Global DoD:*
- [ ] **Cross-Linking:** All new documentation is cross-linked to relevant parent/child files.
- [ ] **Readability:** Text is formatted for high readability using Markdown headers, lists, and bold text.
