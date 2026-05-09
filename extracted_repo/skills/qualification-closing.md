# Qualification and Closing SOP

## 🎯 Objective
Convert a reactivated lead into a confirmed appointment for the solar installer by verifying ICP fit and coordinating a firm date/time.

## 📋 Qualification Script
The goal is to verify the lead meets the ICP requirements defined in `vault/business-context/core-strategy.md` without creating high pressure.

### 1. Opening & Context
"Hi [Lead Name], this is [Your Name] calling on behalf of [Installer Name]. We're reaching out because you had spoken with them previously about solar, and they asked us to check back in to see if you were still interested in reducing your electric bill."

### 2. Homeowner Verification (Critical)
"Just to make sure we're looking at the right options for you, are you the primary homeowner for the property?"
- **If Yes:** Proceed to Geography.
- **If No:** "I see. Is the homeowner available, or is there a better way to coordinate this?" (If unreachable, mark as 'Unqualified' in `vault/memory/leads.md`).

### 3. Geography Verification
"And just to confirm, the property is still located in [Texas/Florida]?"
- **If Yes:** Proceed to Scheduling.
- **If No:** "Unfortunately, [Installer Name] only services [TX/FL] at this time. I'll make a note of that for them." (Mark as 'Unqualified').

### 4. Interest & Value Prop
"Great. The reason we're calling now is that [Installer Name] has some updated incentives/equipment that could significantly drop your monthly costs. Would you be open to a quick 15-minute consultation to see if your roof still qualifies?"

---

## 📅 Scheduling Protocol
Once qualified, move immediately to secure a firm appointment.

1. **Offer Two Options:** Never ask "When are you free?" Instead, offer two specific windows.
   - *Example:* "Would tomorrow at 4:00 PM work, or would Wednesday morning around 10:00 AM be better for you?"
2. **Confirm Calendar Sync:**
   - Check the installer's available slots (via shared calendar/CRM).
   - Once the lead picks a time, lock it in immediately.
3. **Confirmation Message:** Send a confirmation SMS immediately after the call.
   - *Template:* "Hi [Lead Name], confirmed! [Installer Name] will see you on [Date] at [Time]. We'll send a reminder 24 hours before. See you then!"
4. **Memory Update:** Update `vault/memory/appointments.md` with:
   - Appt ID, Lead ID, Installer, Date/Time, Status: `Scheduled`.

---

## 📩 Hand-off Template
Notify the installer immediately via their preferred channel (Email/Slack/CRM).

**Subject:** 📅 NEW CONFIRMED APPOINTMENT: [Lead Name] - [Date/Time]

**Body:**
Hi [Installer Name],

I have successfully reactivated and qualified a lead from your database.

**Lead Details:**
- **Name:** [Lead Name]
- **Address:** [Property Address]
- **Phone:** [Phone Number]
- **Status:** Verified Homeowner in [TX/FL]

**Appointment Details:**
- **Date:** [Date]
- **Time:** [Time]
- **Confirmation:** Lead has confirmed via [Call/SMS].

Please add this to your calendar. I will monitor the "Show Verification" loop to confirm when the appointment is completed.

Best,
[Your Name]
SolarReclaim Revenue Recovery
