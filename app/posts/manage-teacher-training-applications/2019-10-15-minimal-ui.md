---
title: An interface for minimal service provision
description: Looking towards rolling out the pilot.
date: 2019-10-15
screenshots:
  items:
    - Applications
    - Application
    - Respond to application
    - Reject application
    - Confirm rejection
    - Make an offer
    - Confirm offer
    - Application (success message)
    - Candidate accepted offer (email)
    - Candidate rejected offer (email)
---

Based on research findings from testing earlier versions of the prototype, and having determined the need for a minimal service for managing applications even at the very start of the pilot with SCITTs, we created an updated and stripped-down version of the interface.

## Application statuses

We updated the statuses to reflect those we are able to capture during the initial roll out:

* New (unchanged)
* Rejected (unchanged)
* Offer made (unchanged)
* Offer accepted (added)
* Offer declined (added)

The ‘interviewing’ status was removed as this takes place off-service. As the initial service won’t involve a large number of applications, we removed the filters added in the previous round of testing as well as the search functionality.

## Reviewing an application

Given the development work needed to give providers a downloadable PDF for each application, we decided to display the candidate’s entire application instead, and offering CSV as a means of exporting this data.

Initially we discussed using the same layout and format as that shown to candidates on the Apply for teacher training service. However, whereas a candidate will want to review all the information they entered to ensure it is correct, providers have differing requirements, so the ordering and clustering of information needs to reflect their priorities.

We grouped ‘personal details’ and ‘contact details’, and moved ‘language skills’ to appear after ‘other qualifications’. Qualifications are shown before work history and school experience, where extra detail is hidden behind disclosure links. References are shown last. This ordering reflects our hypothesis about what information providers consider to be most relevant, especially when doing an initial sift.

## Responding to an application

Previously labelled ‘Change status’, now that each status has an effect on an application (rather than simply indicating its place within a decision process), we changed the label to ‘Respond to application’.

Rather than conditionally reveal actions under each option, we added a follow on step where additional details about a decision can be recorded. A confirmation page with text reminding the provider that a decision is legally binding completes the ‘respond to an application‘ journey.

## Rejecting an application

On rejecting a candidate, a provider is asked to provide a reason. We wanted to test two things:

1. Is providing a free text box sufficient for this purpose?
2. When we are able to capture more granular reasons for rejection, are providers happy with the reasons provided and how they are grouped together?

We also wanted to test provider’s understanding of what information is sent to the candidate, versus what information is sent to DfE or maintained for internal recording purposes.

### Making an offer

Within the current UCAS system, there are two types of offer:

* A **conditional offer** allows providers to stipulate certain academic conditions that need to be met before they will be accepted onto a course.

* An **unconditional offer** also allows providers to set conditions, but these must be non-academic ones (i.e. pass DBS and health checks, pay course fees, etc.).

Unconditional offers are the product of a UCAS process forked from the undergraduate admissions system that bears little relation to teacher training. As candidates need to complete DBS and occupational health checks before enrolling onto a course, providers will make unconditional offers once they have fulfilled these conditions, much later in the process.

Providers also like to make informal recommendations to candidates, such as the completion of a SKE. As these can be undertaken at the same time as the course, they are not a precondition of offer.

With this in mind, we consolidated the two offer types into one, allowing providers to make (non-binding) recommendations and (binding) academic conditions, alongside the standard conditions in a single offer.
