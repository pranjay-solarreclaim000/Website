# Verification & Billing SOP

## Overview
This SOP defines the process for verifying appointment attendance and triggering the corresponding billing events. Our model is pure performance: we only bill for "Shown" appointments and closed deals.

## 🔍 The "Show Verification" Loop
To ensure billing integrity and maintain high trust with installers, no appointment is marked as "Shown" without a multi-source verification loop.

### Verification Process
1. **CRM Check:** Check the installer's CRM for a status update (e.g., "Completed", "Presented").
2. **Installer Confirmation:** Send a brief confirmation request to the installer.
   - *Draft:* "Hey [Name], just checking if [Lead Name] showed up for their appointment at [Time]. Did this happen?"
3. **Lead Confirmation (If needed):** If the installer is unresponsive or the CRM is unclear, reach out to the lead to confirm the appointment took place.
   - *Draft:* "Hi [Lead Name], we're just updating our records. Did you have a chance to meet with [Installer Name] for your solar consultation?"

**Verification Success Criteria:** At least two of the three sources must confirm the appointment occurred.

## 💸 Invoicing Trigger
Once the "Show Verification" Loop is completed and the appointment is confirmed as "Shown":

1. **Status Update:** Update the appointment status to `Shown` in `vault/memory/appointments.md`.
2. **Trigger Invoice:** Generate an invoice for the **$75 Show Fee**.
3. **Billing Record:** Record the transaction in `vault/memory/billing.md` using the following format:
   - `Invoice ID` | `Appt ID` | `$75` | `Pending` | `[Current Date]`

## 📈 Commission Calculation
When a deal is marked as "Closed" by the installer:

1. **Contract Value Retrieval:** Obtain the final total contract value of the solar installation.
2. **Commission Rate:** Apply the agreed percentage (3% to 5%) based on the client contract.
3. **Calculation:** 
   - `Commission = Total Contract Value * (Percentage / 100)`
   - *Example:* $18,000 contract @ 5% = $900.
4. **Invoice Generation:** Trigger a separate invoice for the Closed Deal Commission.
5. **Billing Record:** Update `vault/memory/billing.md` with the specific commission amount.

## 📝 Billing Log Maintenance
Every transaction must be meticulously logged in `vault/memory/billing.md`.

### Update Protocol:
- **New Invoice:** Add a new row upon triggering the invoice.
- **Payment Received:** Change status from `Pending` to `Paid` upon confirmation of funds.
- **Audit Trail:** Never delete a billing row; use a "Void" status if an invoice was issued in error.
