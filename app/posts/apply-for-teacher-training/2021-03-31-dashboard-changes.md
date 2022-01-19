---
title: Dashboard changes
description: How we changed what candidates see after they have submitted their application
date: 2021-03-31
screenshots:
  items:
    - text: Initial view, showing confirmation banner
      src: confirmation-banner.png
    - text: Having interviews scheduled
      src: interviews.png
    - text: Being unsuccessful, and getting feedback from providers
      src: received-feedback.png
    - text: Receiving two different offers
      src: received-two-offers.png
    - text: Accepting an offer
      src: offer-accepted.png
    - text: Deferring an offer
      src: offer-deferred.png
    - text: Having a confirmed offer (after conditions met)
      src: offer-confirmed.png
    - text: Applying again (showing the status of previous applications)
      src: applying-again.png
related:
  items:
    - text: Application dashboard states
      href: /apply-for-teacher-training/application-dashboard-states/
      description: Previous post about dashboard states
---

{% from "../../../node_modules/govuk-frontend/govuk/components/table/macro.njk" import govukTable with context %}

The ‘dashboard’ is the name we use internally for the page a candidate sees after they have submitted their application.

It lists the applications a candidate has made and the stage they are at in the application process. They can complete tasks there too, such as accepting an offer, or withdrawing an application.

We do not use the term ‘dashboard’ externally.

### Why change the dashboard?

Research from 2020 told us that candidates didn’t realise that their application was something they could (or needed to) return to. To them, applying for teacher training was a one off form submitted into the ether. This has been called the ‘Elephant Problem’.

The objective of our work has been to:

* Help candidates realise that they can return to the dashboard, and that it’s the ‘home’ of their applications.
* Make sure the dashboard gives the right information at the right stage. For example, pointing to teacher training advisers for help with interviews, or getting candidates who have been unsuccessful to apply again.

## What’s changed

We made changes to:

* The flow for how candidates get to the dashboard after submitting an application
* The layout of the dashboard
* The content presented on the dashboard

### Post-submission flow

To familiarise candidates with the dashboard, we wanted to take them to it immediately after they submitted their application.

Previously they were taken to confirmation page. This page was only seen once. We felt the candidate might leave the service at this point and not see their dashboard. Our hypothesis was that candidates would realise they could return to their application if they saw the dashboard immediately after submitting their application.

We now take candidates straight to the dashboard, via an optional feedback survey. A green confirmation banner gives reassurance that the application was submitted, and lets candidates know that they can expect an email update when anything changes.

### Layout

The page now shows up to three separate sections:

1. Your current applications
2. Information about updating your contact information (moved from the right)
3. Your previous applications (if there were any)

Current applications are still shown each in a separate summary box, however the course name and provider name are now both shown in the header, rather than on separate rows.

Actions candidates can take, such as withdrawing from a course or responding to an offer, are shown on a separate line at the bottom. This allows us to add extra context.

A link to view the full details of an application is shown at the top right.

For previous applications, these are shown in a table, with only the minimum of detail (course name, provider name and outcome), with a link to view the full details.

### Dashboard at different stages

Part of the dashboard work has been to define the different states an application could be in after it’s been submitted. There are many. Below is a summary of the stages and the candidate behaviour we would ideally like to drive.

We added each state to the prototype to make it easier to iterate the design and content.

{{ govukTable({
  caption: "Applications to a single course",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: false,
  head: [{
    text: "Application status"
  }, {
    text: "Candidate next steps"
  }],
  rows: [
    [{
      text: "Awaiting decision from provider"
    }, {
      text: "Wait for a decision"
    }],
    [{
      text: "Interview scheduled in future"
    }, {
      text: "Attend interview / contact teacher training adviser to help prepare."
    }],
    [{
      text: "After interview, still awaiting decision"
    }, {
      text: "Wait for decision"
    }],
    [{
      text: "Received an offer with conditions"
    }, {
      text: "Respond to offer"
    }],
    [{
      text: "Received an offer for a different course"
    }, {
      text: "Respond to offer"
    }],
    [{
      text: "Received an offer from a course from a different provider"
    }, {
      text: "Respond to offer"
    }],
    [{
      text: "Unsuccessful - provider has given feedback"
    }, {
      text: "Apply again"
    }],
    [{
      text: "Unsuccessful - course was full"
    }, {
      text: "Apply again"
    }],
    [{
      text: "Unsuccessful - provider did not respond in time"
    }, {
      text: "Apply again"
    }],
    [{
      text: "Candidate withdrew application"
    }, {
      text: "Apply again"
    }],
    [{
      text: "Offer withdrawn by provider"
    }, {
      text: "Apply again"
    }],
    [{
      text: "Accepted (pending conditions)"
    }, {
      text: "Meet conditions"
    }],
    [{
      text: "Declined"
    }, {
      text: "Apply again"
    }],
    [{
      text: "Deferred"
    }, {
      text: "Meet conditions before deferral start date"
    }],
    [{
      text: "Candidate did not respond to offer in time"
    }, {
      text: "Apply again"
    }],
    [{
      text: "Candidate did not meet offer conditions"
    }, {
      text: "Apply again"
    }],
    [{
      text: "Candidate recruited"
    }, {
      text: "No nudges given"
    }]
  ]
}) }}

{{ govukTable({
  caption: "Applications for multiple courses",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: false,
  head: [{
    text: "Application status"
  }, {
    text: "Candidate next steps"
  }],
  rows: [
    [{
      text: "Awaiting decisions from all providers"
    }, {
      text: "Wait for a decision"
    }],
    [{
      text: "Interviewing"
    }, {
      text: "Attend interview / contact teacher training adviser to help prepare."
    }],
    [{
      text: "One offer received, still awaiting one more provider decision"
    }, {
      text: "Wait for all decisions to be made"
    }],
    [{
      text: "Two rejections received, still awaiting third provider decision"
    }, {
      text: "Wait for all decisions to be made"
    }],
    [{
      text: "Received one offer"
    }, {
      text: "Respond to offer"
    }],
    [{
      text: "Received two offers"
    }, {
      text: "Respond to offer"
    }],
    [{
      text: "Ended without success"
    }, {
      text: "Apply again"
    }],
    [{
      text: "Accepted offer, pending conditions"
    }, {
      text: "Meet conditions"
    }],
    [{
      text: "Offer deferred"
    }, {
      text: "Meet conditions before deferral start date"
    }],
    [{
      text: "Recruited"
    }, {
      text: "No nudges given"
    }]
  ]
}) }}
