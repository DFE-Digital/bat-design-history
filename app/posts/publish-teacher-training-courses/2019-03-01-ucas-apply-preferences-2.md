---
title: "UCAS Apply preferences: Letters and alerts"
description: Only the GT12 letter and email alert preferences are needed.
date: 2019-03-01
screenshots:
  items:
    - Organisation
    - UCAS Apply preferences
    - "Onboarding: Apply preferences preface"
    - Pick a letter
    - Email alerts
---

{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}
{{ govukWarningText({
  html: "[This design has been updated to include contacts](/publish-teacher-training-courses/ucas-contacts)" | markdown("inline"),
  iconFallbackText: "Warning"
}) }}

Following the [initial design](/publish-teacher-training-courses/ucas-apply-preferences), UCAS confirmed that only the GT12 letter and the application email alert preferences were still used.

This design creates forms for editing those two preferences and puts a link to editing them on the organisation page.

## GT12 Letter

Only provide options for the two commonly used letters:

- Applicants must confirm their place (GT12B)
- Applicants don’t need to respond (GT12)

The last two combined account for [5% of providers](/publish-teacher-training-courses/ucas-apply-preferences#gt12).

In the UCAS supporting documentation they provider a summary of what each letter contains (the actual letter is a lot longer but the majority of that text is unchanged between the letter types). This design brings that summary alongside the choice to make the decision easier.

### Still to design

We need to capture and show the GT12 correspondent email/url field. This gets inserted into any GT12 letter template when applicants need to contact the provider to confirm something.

We don’t have this contact data for providers yet so we can’t see if providers more commonly use an email or a link.

## Email alerts

Bring the alert preference and the email the alerts are sent to together. When a provider says they want alerts there’s an email field to complete.

For this to propagate to UCAS it needs to be sent through as the email for the UTT Output correspondent in the API.

*[API]: Application Programming Interface
*[UCAS]: Universities and Colleges Admissions Service
*[UTT]: UCAS Teacher Training
