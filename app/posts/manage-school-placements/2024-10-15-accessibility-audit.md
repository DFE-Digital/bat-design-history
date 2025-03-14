---
title: Accessibility audit and remediation
description: What we've done to ensure the accessibility of our service
date: 2024-10-15
tags:
  - accessibility
eleventyComputed:
  eleventyNavigation:
    key: school-placements-accessibility-audit
---

*[ARIA]: Accessible Rich Internet Applications
*[CSS]: Cascading Style Sheets
*[HTML]: Hypertext Markup Language
*[WCAG]: Web Content Accessibility Guidelines

We recently commissioned [Zoonou](https://zoonou.com) to conduct an accessibility audit of our [Manage school placements](/manage-school-placements/) and [Claim funding for mentor training](/claim-funding-for-mentors/) services. They are both served from [a single shared codebase](https://github.com/DFE-Digital/itt-mentor-services), so it made sense to audit the two together.

The initial audit, performed on 28 August 2024, assessed the services against [WCAG 2.2 Level AA standards](https://www.w3.org/TR/WCAG22/). After completing remediation work, a verification audit was conducted on 14 October 2024 to confirm the successful resolution of the identified issues.

- [Initial audit report (PDF, 514 KB)](initial-audit-report.pdf)
- [Follow-up discussion and actions (PDF, 98 KB)](follow-up-conversation.pdf)
- [Verification audit report (PDF, 438 KB)](verification-audit-report.pdf)

## Audit findings

The initial audit revealed **19 accessibility issues** across both services. These issues ranged from incorrect heading structure and missing ARIA landmarks to inconsistencies in styling and labelling.

Key problem areas and the solutions implemented include:

- **Heading structure:** The initial audit found inconsistencies in heading structure, including the frequent absence of `<h1>` tags. This was corrected to ensure proper heading hierarchy for improved navigation, especially for users of assistive technologies.
- **ARIA landmarks:** While the initial audit highlighted some missing ARIA landmarks, after review and discussion with Zoonou (documented in the follow-up discussion), it was agreed that the impact on users was low, and no immediate action was required. This [issue is being tracked](https://github.com/alphagov/govuk-frontend/issues/1604) by the GOV.UK Design System team, and our implementation currently follows their guidance.
- **Form labels:** ‘Search’ input fields lacked labels, making them difficult to identify for users relying on screen readers. Descriptive labels have now been added to all relevant form fields.
- **Styling over semantics:** On the "Check your answers" page (School Placements), headings were styled using custom CSS rather than semantic HTML. This was rectified by replacing custom styling with proper semantic markup (`<h1>`, `<h2>`, etc.), ensuring correct interpretation by screen readers.
- **Duplicate links:** Identical "Change" links on the "Check your answers" page created confusion. These links now have unique and descriptive text to differentiate them for users of assistive technologies.
- **Android Talkback usability:** A reported issue where content on the "Check your answers" page became inaccessible during the "Add a mentor" user journey using Android Talkback was investigated. Zoonou was unable to reproduce this behaviour in the verification audit and it is now considered a non-issue.

## Verification of fixes

The verification audit confirmed the successful resolution of all 19 initially identified accessibility issues.

Of these, 14 were verified as fixed, directly addressing the problems highlighted in the initial report.

The remaining 5 issues were closed following our feedback and clarification, as detailed in the attached follow-up discussion document. These primarily related to instances where our implementation followed the [GOV.UK Design System](https://design-system.service.gov.uk), even where the system itself has known accessibility limitations.

## Next steps

Our accessibility statements will be updated to reflect the outcome of this accessibility assessment and remediation work.

We are committed to maintaining accessibility best practices and will continue to monitor and improve our services to ensure they meet WCAG 2.2 Level AA standards.
