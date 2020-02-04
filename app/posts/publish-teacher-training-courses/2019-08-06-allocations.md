---
title: Show allocation policy on a course
description: Indicate the current policy on course detail pages.
date: 2019-08-06
---
{% set html %}
  <h4 class="govuk-heading-s govuk-!-margin-bottom-1"><a href="https://docs.google.com/document/d/1926pN2UTaknKAC4bYUGyCSiPe5lBXJZ33ld7LXmftYw/edit">Original context</a></h4>
  <p class="govuk-body-s">Document. Please ask for access permissions</p>
  <p>The ask is for us to look at how we can bring in the request allocations process into Find in the simplest and quickest way possible. </p>
  <p><a href="https://trello.com/c/CNOPjJNc/1861-allocations-in-find-design-research">Trello ticket</a></p>
{% endset %}

{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}
{{ govukInsetText({
  html: html
}) }}

Show the allocation policy for a course on the basic details tab.

For the 2020 to 2021 cycle only PE fee-funded courses require allocated places.

We don’t have data on whether a request for allocations has been made or not, so for PE we need to caveat the link to request allocations.

The link to request allocations will point to a Google form, responses will be shared with the allocations team.

The link text, ‘request allocations’ might need to refer to ‘permission to recruit’. We’ve opted for allocations for now because this gives the impression of asking for a number of places, versus permission which is either true or false.

Guidance on GOV.UK:
[Requesting initial teacher training places: 2020 to 2021](https://www.gov.uk/government/publications/requesting-initial-teacher-training-places-2020-to-2021)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Allocations for a course" },
    { text: "Allocations for a fee-funded PE course" }
  ]
}) }}
