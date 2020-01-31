---
title: Accessibility audit report from DAC
description: The Digital Accessibility Centre audited our candidate, provider and support pages.
date: 2019-12-18
---

An accessibility audit of the candidate, provider and support pages was carried out by the Digital Accessibility Centre (DAC) on 9 December 2019. The service was assessed against the [Web Content Accessibility Guidelines WCAG 2.1](https://www.w3.org/TR/WCAG21/).

> The standard of accessibility presented throughout the service was very high.

[Full report (PDF)](https://drive.google.com/file/d/1-cFyRAfUMLNVQRvGb0Bfrnv39CjbVkLj/view?usp=sharing)

Screenshots of the service they used:
* [Candidate](/apply-for-teacher-training/apply-launch)
* [Provider](/manage-teacher-training-applications/as-launched-26-nov-2019)

During November 2019 we also performed our own internal audit of candidate pages: [Internal audit (spreadsheet)](https://docs.google.com/spreadsheets/d/1MEEEyubJkbY0Ksg8oX_rjZZ2lLnwYrPH2p3ky1Qqwyg/)

## Key failings and their fixes

All WCAG A and AA failings were fixed between 20 December and 17 January.

We have a [Trello ticket for adding automated accessibility testing using aXe](https://trello.com/c/qqNEqL11/834-spike-set-up-axe-or-other-accessibility-testing-tools) which would have prevented many of these issues, and will avoid future regressions.

### Duplicate IDs (WCAG A)

Page 13: When choosing a location for a course, the hint text for each option (which contains the address when present) all had the same ID.

This was [fixed upstream in the govuk_design_system_formbuilder](https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training/pull/1055), and our duplicate IDs were removed when we updated the dependency. ([Trello](https://trello.com/c/LqbMmzbb/692-dac-page-13-fix-duplicate-ids-on-course-site-page))

Automated accessibility testing would highlight this issue.

### Unlabelled form fields (WCAG A)

Page 15: When a training provider gives multiple conditions for an offer, the fields for those conditions don’t have associated labels.

This was [fixed by removing custom IDs from there form fields](https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training/pull/1015). The generated ID then matched the for attribute of the label, meaning that labels were correctly associated. ([Trello](https://trello.com/c/BWbCBEVj/693-dac-page-15-add-form-labels-to-provider-offer-page-conditions))

Automated accessibility testing would highlight this issue.

### Low colour contrast (WCAG AA)

Page 17: The colour contrast of the declined (2.78:1) and offer (3.16:1) statuses shown to providers had insufficient contrast (should be 4.5:1).

This was [fixed by changing our tag styles to use different colours](https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training/pull/1011). ([Trello](https://trello.com/c/VjHpGzot/694-dac-page-17-fix-colour-contrast-of-declined-and-offer-status-on-applications-page))

Many government services create tag styles using white text on the darker colours of the GOV.UK design system palette. Our new design meets contrast ratios by using tints of those colours, for example heavy red text on a light red background. So that other government services can benefit, and so we can stay inline with the design system, we've begun the process of [contributing these designs back upstream to GOV.UK Frontend](https://github.com/alphagov/govuk-frontend/pull/1711).

Automated accessibility testing can usually highlight this type of issue, unless there are background images.

### Error suggestion (WCAG AA)

Page 20: When a candidate’s application was rejected without a reason a vague error message was shown.

> The ‘can’t be blank’ error message presented on the ‘Reject application’ page when validation errors occur is not descriptive of what the error is and how to fix it.

This was [fixed by changing the error message](https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training/pull/1012) to "Enter feedback for the candidate". ([Trello](https://trello.com/c/7JcO0QxH/695-dac-page-20-add-error-text-for-blank-application-reject-reason))

Automated accessibility testing would not have found this issue.

### Reflow (WCAG AA)

Page 23: On mobile devices links in the support page header were hidden and were not accessible.

This has been fixed by showing a menu link which toggles hiding and showing of the links. It was [probably fixed when the header component was refactored](https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training/pull/982).

### Non-descriptive form elements (WCAG AA)

Page 27: A button to manage which candidates are used for reporting did not have an adequate description.

> The ‘Hide in reporting’ and ‘Show in reporting’ buttons are not descriptive enough for all users, particularly screen reader users, to determine their function or purpose.

This was [fixed by expanding the description of the button](https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training/pull/1025). ([Trello](https://trello.com/c/LIxkhgmi/696-dac-page-27-add-context-to-show-hide-in-reporting-button-in-support-application-page))

Automated accessibility testing would not have found this issue.

### Status message (WCAG AA)

Page 29: When a success message was shown following an action the message was not focused, meaning screenreader users would not be aware of it.

This was fixed [by making it focusable](https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training/pull/963) and [by adding an aria alert role to the element](https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training/pull/969). We also prefixed the title with "Success: ". ([Trello](https://trello.com/c/83AycElp/683-dac-fix-success-message-focus))

The fix brings our success alert inline with the error summary component provided by the design system.

Automated accessibility testing would not have found this issue.

## WCAG AAA issues

We fixed the following issues:

* [Page 33: Add hidden content to "Change" links on Work History review (and other) page(s)](https://trello.com/c/XsqlA0hu/698-dac-page-33-add-hidden-content-to-change-links-on-work-history-review-and-other-pages)
* [Page 41: Change headings on provider offer page so they are in a hierarchical order](https://trello.com/c/n0wiBbfB/699-dac-page-41-change-headings-on-provider-offer-page-so-they-are-in-a-hierarchical-order)

And we're still tracking these:

* [Page 31: Consider changing the links for teacher training in Wales, Scotland, Northern Ireland on candidate landing page](https://trello.com/c/BC5ZqfXT/697-dac-page-31-consider-changing-the-links-for-teacher-training-in-wales-scotland-northern-ireland-on-candidate-landing-page)

## Usability issues

DAC highlighted a number of usability issues that although they were not WCAG failings, they made using the service more difficult. We fixed the following:

* [Page 50: Add (optional) to standard conditions in provider applications offer page](https://trello.com/c/hW5m9EFg/702-dac-page-50-add-optional-to-standard-conditions-in-provider-applications-offer-page)
* [Page 51: Change all pages to only ask for one thing per page](https://trello.com/c/QJVmXusT/703-dac-page-51-change-all-pages-to-only-ask-for-one-thing-per-page)
* [Page 56: Add error to the page title when rejecting an application without passing validation](https://trello.com/c/RK2v971U/704-dac-page-56-add-error-to-the-page-title-when-rejecting-an-application-without-passing-validation)
* [Page 59: Add custom title to "Respond to application" provider page](https://trello.com/c/ARnK0YPP/706-dac-page-59-add-custom-title-to-respond-to-application-provider-page)
* [Page 60: Add custom title to "Confirm offer" provider page](https://trello.com/c/Q7H4sXsR/707-dac-page-60-add-custom-title-to-confirm-offer-provider-page)
* [Page 61: Add type="number" to "Graduation year" field in candidate degrees page](https://trello.com/c/QKnJCS65/708-dac-page-61-add-typenumber-to-graduation-year-field-in-candidate-degrees-page)
* [Page 65: Add row headers to applications table in support](https://trello.com/c/8XjODzUS/709-dac-page-65-add-row-headers-to-applications-table-in-support)

We're still tracking:

* [Page 48: Consider adding (optional) to "County" field in contact details page](https://trello.com/c/eh1oT3xn/701-dac-page-48-consider-adding-optional-to-county-field-in-contact-details-page)

## DfE Signin issues

Some issues were found with our single sign-on provider, DfE Signin.

* The show and hide descriptions for the password field are not descriptive enough (WCAG AA)

They are being tracked separately on [Trello](https://trello.com/c/VBcOaa8Y/710-dac-dfe-signin-issues-pages-25-54-63).
