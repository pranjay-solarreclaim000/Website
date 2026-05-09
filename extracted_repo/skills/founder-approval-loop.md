# Founder Approval Loop SOP

## Overview
This skill implements the "Human Checkpoint" rule to ensure no client-facing communication is sent without explicit founder approval. This prevents brand misalignment, factual errors, and ensures a high-touch personalized approach.

## 🚦 The Human Checkpoint Rule
**CRITICAL:** No client-facing communication (Emails, SMS, DMs) is to be sent without explicit founder approval.
**Workflow:** `Claude Drafts` $\rightarrow$ `Founder Reviews/Edits` $\rightarrow$ `Founder Approves` $\rightarrow$ `Send`.

## 📝 Draft Presentation Format
When submitting drafts for approval, use the following format to provide full context:

`[Lead Name/ID] | [Channel: SMS/Email/DM] | [Draft Content] | [Context/Reasoning]`

**Example:**
`John Doe (Lead-101) | SMS | "Hi John, noticed you were looking at solar for your home in Austin last year. We have a new incentive for TX homeowners that might interest you. Available for a 2-min chat?" | Reactivation sequence Day 1 - targeting high-intent dead leads.`

## ✅ Founder's Approval Checklist
Before approving a draft, the founder should verify:
- **Brand Voice Alignment:** Does it sound like the brand? (Professional yet approachable, not "salesy").
- **Factual Accuracy:** Are the incentives, locations, and offers correct?
- **Personalization:** Does it feel tailored to the lead's specific situation or geography?
- **Call to Action (CTA):** Is the request clear, low-friction, and direct?
- **Compliance:** Does it adhere to TCPA/communication regulations?

## 🛣️ Action Paths

### 🟢 Approve
**Action:** Founder marks the draft as `Approved`.
**Process:**
1. Update the status of the lead in `vault/memory/leads.md` to `Sent`.
2. Trigger the delivery of the message via the designated channel.
3. Log the timestamp of the sent message.

### 🟡 Edit
**Action:** Founder provides feedback or modifies the draft.
**Process:**
1. Return the draft to the `Drafting` stage.
2. Claude incorporates the feedback and regenerates the draft.
3. Re-submit using the Draft Presentation Format for a second review.

### 🔴 Reject
**Action:** Founder rejects the approach or the lead.
**Process:**
1. **Pivot:** If the strategy is wrong, Claude updates the outreach sequencing logic.
2. **Archive:** If the lead is no longer viable, update `vault/memory/leads.md` status to `Archived` and document the reason.
