---
title: What we launched – 2 October 2018
description: Our live public beta launch.
date: 2018-10-02
---
On 2 October 2018 we launched the public beta of Find posgraduate teacher training to users. This included a new start page on GOV.UK and links to it from UCAS and Get into Teaching.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "GOV.UK start page",
    img: { src: "govuk-start-page.png" },
    caption: "[Go to GOV.UK start page](https://www.gov.uk/find-postgraduate-teacher-training-courses)

This is published as a guidance page using Whitehall, rather than a standard service page such as [Check your state pension age](https://www.gov.uk/state-pension-age). This was because the service wasn’t ‘mainstream’, while it also gave DfE greater control over the content.

It introduces some problems, and we’re beginning the process of [switching to a standard start page](https://trello.com/c/QDFcFsSd/425-apply-for-a-mainstream-govuk-start-page). Namely:

* the incorrect page template has misleading elements; page type, breadcrumbs, irrelevant related links, prominence on ‘Applies to England’ rather than ‘Start now’
* we can’t easily track journeys from GOV.UK to our service, we have no visbility of referrers to the start page
* the published date is irrelevant

A standard start page would also give us:

* a shorter and cleaner URL
* more prominence on GOV.UK in taxonomy and search
* proper downtime messaging if we need it"
  }, {
    text: "Find by location",
    img: { src: "find-by-location.png" }
  }, {
    text: "Find by location (provider selected)",
    img: { src: "find-by-location-provided-selected.png" }
  }, {
    text: "Find by subject",
    img: { src: "find-by-subject.png" }
  }, {
    text: "Search results",
    img: { src: "search-results.png" }
  }, {
    text: "Further education search results",
    img: { src: "further-education-results.png" }
  }, {
    text: "Study type filter",
    img: { src: "study-type-filter.png" }
  }, {
    text: "Qualification filter",
    img: { src: "qualification-filter.png" }
  }, {
    text: "Salary filter",
    img: { src: "salary-filter.png" }
  }, {
    text: "No results",
    img: { src: "no-results.png" }
  }, {
    text: "Full course page",
    img: { src: "full-course-page.png" }
  }, {
    text: "Full course page with salary",
    img: { src: "full-course-page-with-salary.png" }
  }, {
    text: "Full course page (PGDE)",
    img: { src: "full-course-page-pgde.png" }
  }, {
    text: "Course not enriched",
    img: { src: "course-not-enriched.png" }
  }]
}) }}
