# Skill: Lead Scrubbing SOP
**Version:** 1.0
**Owner:** Operational Engine
**Objective:** Transform raw CRM exports into a high-probability target list for reactivation, ensuring maximum efficiency for outreach efforts.

## 🎯 High-Probability Target Criteria
Leads must meet the following criteria to be marked as `Targeted` in the memory vault:

### 1. Geography & Demographics
- **State:** Must be located in Texas (TX) or Florida (FL).
- **Ownership:** Must be confirmed as a homeowner (not renting).

### 2. Installer Alignment (Partner Quality)
Only scrub leads for installers that meet our ICP:
- **Google Rating:** $\ge$ 4.2 stars.
- **Scale:** 8–20 installs per month.
- **Lead Status:** Leads must be "dead" or "unclosed" in the installer's CRM.

## 🛠️ Scrubbing Process: Step-by-Step

### Step 1: Initial Export Review
- Import raw CRM export (CSV/XLSX).
- Remove all leads with missing primary contact information (No phone and no email).
- Remove leads already marked as "Closed" or "Opted Out" by the installer.

### Step 2: Data Cleaning (Deduplication & Validation)
- **Remove Duplicates:** Filter by email or phone number to remove duplicate entries.
- **Format Standardization:** 
    - Normalize phone numbers to E.164 format.
    - Normalize names (Proper Case).
- **Invalid Contact Removal:** Remove entries with obviously fake emails (e.g., `test@test.com`) or invalid phone formats.

### Step 3: Intent & Probability Filtering
- Apply geography filters (TX/FL).
- Filter for homeowner status.
- Flag leads who have had previous interest (e.g., "Requested Quote" in the last 12-24 months) as "High Priority".

## 📝 Formatting & Memory Vault Transfer

Once scrubbed, leads must be transferred to `vault/memory/leads.md` using the following markdown table format:

| Lead ID | Name | Contact | Status | Last Touch | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| L-001 | John Doe | 555-0123 | Targeted | 2025-12-01 | High Priority; Homeowner TX |

### Transfer Guidelines:
- **Lead ID:** Generate a unique ID (e.g., `L-XXX`).
- **Status:** Set to `Targeted` upon successful scrubbing.
- **Last Touch:** Record the date of the last interaction from the CRM export.
- **Notes:** Include specific triggers (e.g., "TX Homeowner", "High Intent").
