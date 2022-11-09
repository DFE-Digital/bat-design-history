---
title: UCAS settings and contacts
description: Problems sharing contact information, and how we get around them.
date: 2019-03-08
screenshots:
  items:
    - text: UCAS Apply settings
    - text: UTT Correspondent
    - text: web-link correspondent
    - text: Finance contact
    - text: Fraud contact
    - text: UCAS administrator
    - text: Postal address
    - text: Pick a letter for successful applicants
    - text: Email alerts for new applications
    - text: UCAS Apply preferences with contacts section
      caption: "Old design: UCAS Apply preferences with contacts section"
    - text: Contacts captured during onboarding
      caption: "Old design: UCAS Apply preferences with contacts section"
---

An [update to the UCAS settings design](/publish-teacher-training-courses/ucas-apply-preferences-2) to include UCAS contacts.

## Contacts

UCAS keeps contact details for the following purposes:

- fraud
- finance
- web-link details (downtime, changes, etc)
- correspondent for UCAS monthly bulletins, etc
- new application alerts
- recipient of GT12 letter responses from successful applicants

From what we know, UCAS haven’t collected permission to share these contacts with us. This means that because of GDPR they can’t give us any contact details containing personally identifiable information.

The interface for seeing and editing these contact details is going away in UCAS. Department for Education (DfE) is becoming responsible for them.

We need to:

- capture these details for new providers
- allow existing providers to set new contacts
- indicate to providers that they can request existing information from UCAS
- request permission to share details with UCAS
- share details with UCAS via the API

We don’t know if UCAS is willing to request permission from providers to share existing contacts with DfE.

We confirmed with UCAS that:

- providers can only have one contact for each type
- the majority of the time the same person is the named contact for all contacts
- UTT correspondent and fraud correspondent require name and telephone numbers

[Google diagram](https://docs.google.com/drawings/d/1VByaLgK24Kt4ZFgYmdHGlxfRtI10KX24VHApCEsSHK4) showing possible workflow.

### Design notes

We wanted to capture UTT Correspondent as UCAS Correspondent for clarity, but UCAS pointed out they have a separate contact used elsewhere in their systems called UCAS Correspondent.

The application alerts contact is captured when users asks to receive alerts.

The GT12 reply to contact is captured when users edit their letter template.

*[API]: Application Programming Interface
*[UCAS]: Universities and Colleges Admissions Service
