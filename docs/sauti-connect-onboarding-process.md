# SAUTI CONNECT CLIENT ONBOARDING PROCESS

**PRODUCT:** Sauti Connect
**DOCUMENT OWNER:** Sauti Connect Product Manager
**PURPOSE:** To define both manual and automated processes for onboarding new Sauti Connect clients—from initial enquiry and visual demonstration to technical capacity estimation, service activation, and customer training.
**APPLICABLE TEAMS:** Business/Sales, Customer Service, Technical Team, Finance, MNO/Telecommunications Partners.

---

## CORE DIRECTIVES

1. **Onboarding First, No Login/Register:**
   The user journey for Sauti Connect is centered entirely on **Onboarding**, lead qualification, visual demonstration, and capacity estimation. Generic "Login" or "Register" buttons/actions are replaced with clear onboarding entry points ("Start Sauti Connect", "Start Onboarding", "Schedule a Demo", "Request a Quote").

2. **Strict Exclusion of Prices:**
   No pricing, monetary values, or currency amounts are to be displayed during website onboarding or in customer auto-estimations. The website functions as a technical capacity estimator and lead qualification system. Formal commercial quotations and pricing proposals are provided strictly by the Sauti Connect sales and technical teams following thorough assessment.

---

## PART I: MANUAL CLIENT ONBOARDING PROCESS

This section describes the end-to-end operational workflow followed by ANTERA internal teams when processing a new client.

### 1. RECEIVE NEW CLIENT REQUEST
- **Objective:** Identify and capture new prospective Sauti Connect customers regardless of the channel through which they initially contact ICTPACK Solutions / ANTERA.
- **Output:** Lead recorded in CRM for team follow-up.

### 2. FORMALIZE CLIENT INTERACTION & REQUIREMENTS
- **Objective:** Move the enquiry into a formal business engagement. Establish an official email communication channel with the client. Understand business communication requirements, agent count, and technical specifications before preparing a tailored solution proposal.
- **Output:** Assessed client requirements, KYC compliance documentation, and formal proposal prepared.

### 3. CLIENT PAYMENT & COMMERCIAL AGREEMENT
- **Objective:** Confirm client agreement and financial commitment before commencing technical provisioning according to agreed terms.
- **Output:** Financial and contractual confirmation completed.

### 4. SERVICE PROVISIONING
- **Objective:** Coordinate internal technical/business teams, finance, and telecommunications partners (MNOs) to provision all Sauti Connect infrastructure components.
  - SIP Trunk Procurement with MNO (Vodacom, TTCL, Airtel, YAS).
  - Software License Allocation.
  - Cloud Hosting Environment Preparation & Storage Setup.
- **Output:** MNO SIP Trunk provisioned, PBX license activated, and secure cloud hosting initialized.

### 5. CONFIGURATION AND SERVICE ACTIVATION
- **Objective:** Execute full technical deployment of Sauti Connect, including extension mapping, IVR tree configuration, call queue setup, and end-to-end quality assurance testing prior to handover.
- **Output:** Sauti Connect service fully deployed, tested, and ready for production use.

### 6. CLIENT TRAINING AND HANDOVER
- **Objective:** Conduct structured administrator and agent training sessions, followed by formal service handover.
- **Output:** Sauti Connect client successfully trained and onboarded.

---

## PART II: AUTOMATIC WEBSITE ONBOARDING PROCESS

This section details the digital onboarding workflow integrated on the website.

```
1. Need a Call Centre Solution?
            ↓
2. Start Sauti Connect (Key Benefits)
            ↓
3. Demo in Action (Interactive Feature Preview)
            ↓
4. Select Journey: Schedule Demo OR Request a Quote
            ↓
5. Customer Information / KYC Form
   (Name → Organization → Email → Phone → Industry)
            ↓
6. Solution Capacity Estimation
   (Agents/Users → Hosting Package Tier → Preferred SIP/MNO Carrier)
            ↓
7. Estimation Summary & Commercial Disclaimer
            ↓
8. Submit Request → API / CRM Lead Creation
            ↓
9. Instant Confirmation & Team Follow-Up
```

### STEP 1: NEED A CALL CENTRE SOLUTION?
- **Headline:** Need a Call Centre Solution for Your Business?
- **Supporting Message:** Connect your business with a professional cloud-based communication solution that combines hosted PBX, SIP Trunking, and business calling features without expensive on-premise hardware.
- **Primary CTA:** `Start Sauti Connect` / `Start Onboarding`

### STEP 2: START SAUTI CONNECT
- **Headline / Subtitle:** One solution. One bill. One support team.
- **Value Overview:** Sauti Connect provides the tools to manage professional communications through cloud telephony, hosted PBX, and SIP connectivity.
- **Displayed Key Benefits:**
  - Professional business number
  - Cloud-hosted PBX
  - Call management, forwarding, queues, and routing
  - IVR and WhatsApp integrations
  - Analytics, reporting, and real-time monitoring
  - Local technical and customer support
  - Zero requirement for traditional PBX hardware
- **CTA:** `See Sauti Connect in Action`

### STEP 3: DEMO IN ACTION
- **Objective:** Provide a visual interactive preview of Sauti Connect capabilities before asking for submission details.
- **Interactive Demonstrations:**
  - Incoming Call Flow
  - Agent / Extension Answering
  - Call Queue Transfer & Smart Routing
  - Live Analytics & Monitoring Dashboard
  - Multi-device Extensions (Mobile & Desktop)
- **Journey Selection CTAs:**
  - **Option A:** `Schedule a Demo`
  - **Option B:** `Request a Quote`

### STEP 4: SCHEDULE DEMO OR REQUEST A QUOTE
- **Option 1 (Schedule Demo):** Captures preferred date, time, and communication channel (Phone Call, Microsoft Teams, Google Meet, Physical Meeting).
- **Option 2 (Request Quote):** Directly advances to customer KYC and configuration estimation.

### STEP 5: CUSTOMER INFORMATION / KYC FORM
Captures foundational customer details with real-time field validation:
- **Client Full Name:** Required (2 - 100 characters).
- **Company / Organization Name:** Required (2 - 150 characters).
- **Business Email Address:** Required (RFC email format validation).
- **Phone Number:** Required (+255 Tanzania default, international formats accepted).
- **Industry Selection:** Required (Manufacturing, Healthcare, Betting, SME, Tourism & Hospitality, Other [with custom input]).

### STEP 6: SOLUTION CAPACITY AUTO-ESTIMATION
Recommends system capacity based on user scale without presenting monetary figures:
1. **Number of Users / Agents:** Scalable range (16 to 8,192 agents).
2. **Recommended Hosting Package:** Automatically determined based on agent count:
   - *Starter Tier:* 16 – 40 agents
   - *Business Tier:* 41 – 192 agents
   - *Enterprise Tier:* 193 – 896 agents
   - *Hyperscale Tier:* 897+ agents
3. **Preferred SIP Trunk / MNO Selection:** Vodacom, TTCL, Airtel, YAS.

#### Estimation Summary (Displayed to Client)
- **Users/Agents:** e.g., 25 Agents
- **Recommended Hosting:** Business Package
- **Selected SIP Trunk:** Vodacom
- **Mandatory Disclaimer:**
  *"Please Note: This is an initial technical estimate based on your selected parameters. Final configuration, technical requirements, and commercial terms will be confirmed by the Sauti Connect team following detailed assessment."*

### STEP 7: SUBMISSION & CRM INTEGRATION
- **CTA Label:** `Book My Demo` (for demo journey) or `Request My Quote` / `Submit Onboarding Request` (for quotation journey).
- **Payload Sent to API (`/api/sauti-connect/onboard`):**
  - Customer Information (Full Name, Company Name, Email, Phone, Industry)
  - Journey Choice (Demo vs. Quotation)
  - Demo Preferences (Preferred Date, Time, Channel - if applicable)
  - Technical Configuration (Agent Count, Recommended Hosting Tier, Selected MNO)
  - Additional Notes / Comments
  - Duplicate check against email, phone, and organization.

### STEP 8: SUCCESS & ERROR HANDLING
- **Success State:** Displays confirmation screen thanking the customer and outlining expected follow-up steps within 24 business hours.
- **Error Handling:** Inline field highlights for missing/invalid input; graceful fallback messages for submission network errors with retry option.

---

## PART III: ACCEPTANCE CRITERIA CHECKLIST

| Requirement | Status |
| :--- | :--- |
| Visitor can launch the Sauti Connect onboarding flow from website | Compliant |
| No 'Login' or 'Register' terminology used in client onboarding journey | Compliant |
| Zero prices or commercial amounts shown during web auto-estimation | Compliant |
| Interactive visual preview / product demonstration displayed | Compliant |
| Visitor can choose between 'Schedule a Demo' and 'Request a Quote' | Compliant |
| KYC Form captures and validates Name, Organization, Email, Phone, Industry | Compliant |
| Capacity estimator automatically calculates recommended Hosting Tier | Compliant |
| MNO SIP carrier selection supported (Vodacom, TTCL, Airtel, YAS) | Compliant |
| Technical summary displayed with mandatory assessment disclaimer | Compliant |
| Automated submission logs lead to CRM / Supabase with duplicate check | Compliant |
| Clear success confirmation and error handling displayed | Compliant |
