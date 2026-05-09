# Skill: Outreach Sequencing SOP

## 🎯 Objective
Convert dead leads into scheduled appointments using a multi-channel, low-pressure sequence that respects the brand voice and ensures founder oversight before any one-to-one communication is sent.

## 🔄 Multi-Channel Cadence
The sequence is designed to be persistent but not intrusive. If a lead responds at any point, the sequence stops and moves to the `qualification-closing.md` flow.

| Touchpoint | Timing | Channel | Goal |
| :--- | :--- | :--- | :--- |
| **Touch 1** | Day 1 | SMS | Low-friction "pattern interrupt" to gauge interest. |
| **Touch 2** | Day 3 | Phone Call | Humanize the outreach; leave a brief, result-oriented VM. |
| **Touch 3** | Day 5 | Email | Provide a professional "last call" for the recovery offer. |

## ✍️ Drafting Instructions
All drafts must strictly adhere to the brand voice defined in `vault/business-context/core-strategy.md`.

### Brand Voice Guidelines:
- **Professional:** No slang, correct grammar, polished delivery.
- **Result-Oriented:** Focus on the outcome (revenue recovery, missed opportunities) rather than the process.
- **Low-Pressure:** Avoid "hard sell" tactics or urgency triggers (e.g., "Act now or lose out!"). Use curiosity and helpfulness instead.
- **High-Integrity:** Be honest about the goal—reactivating a previous interest in solar to see if it's still relevant.

### Messaging Principles:
- **SMS:** Short, punchy, and conversational. Ask a simple yes/no question.
- **VM/Call:** Friendly, direct, and brief. Mention the specific installer they previously dealt with.
- **Email:** Subject lines should be boring and professional (e.g., "Solar follow-up - [Installer Name]"). Body should be concise and focused on a single call to action.

## 🛠️ Execution & Resistance Handling

### 1. The Approval Loop
Before moving to the approval stage, drafts must be formatted for the `founder-approval-loop`. Use the following structure:

**Format:**
`[Lead Name/ID] | [Channel] | [Draft Content] | [Context/Reasoning]`

**Example:**
`Lead #102 (John Doe) | SMS | "Hi John, this is [Name] calling on behalf of [Installer]. Just noticed your solar inquiry from last year was never finalized. Still looking to lower your bill, or did you already get it sorted?" | First touch in sequence for a TX lead.`

### 2. Handling Resistance (The Lookup Protocol)
When a lead expresses resistance, an objection, or a "brush-off" during the outreach process, the operator must NOT improvise.

- **Protocol:** Immediately reference the **Objection Handling Matrix** located in `1-system/4-product-pillar/rd.md`.
- **Action:** Identify the objection category (Brush-off, Logic-based, or Hard-No), apply the corresponding **Surgical Rebuttal**, and use the **Pivot Logic** to redirect the lead back into the NEPQ flow (Problem $\rightarrow$ Solution).

### 3. The "3-Strike" Rule
To protect brand reputation and avoid being flagged as spam, the following limit applies to all lead interactions:

- **Limit:** A maximum of **3 rebuttal attempts** per lead.
- **Threshold:** If the lead continues to resist or remains unresponsive after the 3rd attempt to neutralize the objection, the lead must be marked as **"Unresponsive/Rejected"**.
- **Outcome:** The lead is archived immediately. No further outreach is permitted for that specific lead record.

### 4. Protocol for Approval Stage
1. **Draft Generation:** Agent generates the draft based on the cadence and brand voice.
2. **Validation:** Agent verifies the lead is in `vault/memory/leads.md` and is eligible for the current touchpoint.
3. **Submission:** Agent moves the formatted draft into the `founder-approval-loop` (as defined in `skills/founder-approval-loop.md`).
4. **Wait State:** No message is sent until the Founder provides an `Approve` or `Edit` response.
5. **Execution:** Once approved, the message is sent, and the `Last Touch` date is updated in `vault/memory/leads.md`.
