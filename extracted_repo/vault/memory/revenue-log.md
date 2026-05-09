# Revenue Log
> **System:** Billing & Finance System
> **Updated by:** Skill 04 (Verification & Billing)
> **Purpose:** Track every invoice, shown appointment, and commission earned

---

## REVENUE SUMMARY (Running Total)

| Metric | Value |
|--------|-------|
| Total Invoiced (All Time) | $0 |
| Total Collected (All Time) | $0 |
| Outstanding (Unpaid) | $0 |
| Total Shown Appointments | 0 |
| Total Closed Deals (Commission) | 0 |

*(Update this table after each new payment received)*

---

## INVOICE LOG

| Invoice # | Client | Date Sent | Shown Appts | Commission | Total | Status | Date Paid |
|-----------|--------|-----------|-------------|------------|-------|--------|-----------|
| — | — | — | — | — | — | — | — |

---

## HOW TO ADD AN INVOICE ENTRY

When Skill 04 generates an invoice, add a row:
```
| SR-[Initials]-001 | [Client Name] | [Date] | [N] × $75 = $X | [N deals × %] = $X | $Total | Sent | — |
```

When payment is received, update:
```
Status: Paid | Date Paid: [Date]
```

---

## STATUS DEFINITIONS

| Status | Meaning |
|--------|---------|
| Sent | Invoice delivered, awaiting payment |
| Paid | Payment received and confirmed |
| Overdue | >7 days past due — follow up |
| Disputed | Client questions a shown appointment |
| Void | Invoice cancelled |

---

## MONTHLY SUMMARY

*(Add a new section each month)*

### Month: [Month Year]
- Invoices Sent: [N]
- Total Invoiced: $[Amount]
- Total Collected: $[Amount]
- Shown Appointments: [N]
- Commission Deals: [N]
- Notes: [Any context]
