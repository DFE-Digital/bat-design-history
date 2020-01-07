---
title: Amending and withdrawing
description: Amending applications and withdrawing course choices.
tags: apply-for-teacher-training
---
First spike to support two features of the application process:

* Amending an application
* Withdrawing a course choice

Changes made as part of this work included:

* Changing the name of the logged in landing page that becomes available after submitting an application to ‘Application dashboard’. This page now uses the summary card pattern we are using elsewhere in the service.
* When editing an application, we show three different states for sections:
  * Unedited (a section that can be amended, but with no edits)
  * Edited (a section that has been edited)
  * Submitted (a section that can’t be amended – references)
* Prior to editing an application, we provide an interstitial page that outlines the restrictions; limited to submitting one set of changes, can’t edit referees, etc. and the period of time in which changes can be made.
* We also updated the language on some pages to include warnings about time remaining and checking changes before resubmitting.
* For withdrawing an application, we ask users to confirm this action before proceeding. For MVP, this page asks them to submit a support request. A later iteration would allow them to confirm with a button press. When a course choice has been withdrawn, we update it’s status on the dashboard page.

## Days and deadlines

The business logic dictates that a candidate has 5 working days after submitting their application during which they can submit changes. This period will typically be 7 days, but longer if there are bank holidays. To avoid adding complexity, we decided to always show the date an application needs to be resubmitted alongside the number of calendar days remaining (calculated by counting back from that date).

## Screenshots

{% from "gallery/macro.njk" import appGallery with context %}
{{ appGallery({
  items: [{
    id: "dashboard-submitted",
    text: "Dashboard post submission (within amendment period)"
  }, {
    id: "dashboard-amending",
    text: "Dashboard post submission (within amendment period and with pending changes)"
  }, {
    id: "edit-application",
    text: "Editing your application"
  }, {
    id: "application-amending",
    text: "Edit your application (with three states)"
  }, {
    id: "review-amending",
    text: "Review your application (with warning text)"
  }, {
    id: "confirmation-amended",
    text: "Confirmation page (with updated title)"
  }, {
    id: "dashboard-amended",
    text: "Dashboard post amendment (with option to withdraw course choices)"
  }, {
    id: "withdraw-choice",
    text: "Withdrawing a course choice"
  }, {
    id: "dashboard-withdrawn",
    text: "Dashboard post amendment (with a course choice withdrawn)"
  }]
}) }}
