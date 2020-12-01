---
title: User research 25 April 2018
date: 2018-04-25
---

Testing with users in the [middle of the digital inclusion scale](https://www.gov.uk/government/publications/government-digital-inclusion-strategy/government-digital-inclusion-strategy#annex-2-digital-inclusion-scale-for-individuals).

* [Research summary](https://dfedigital.atlassian.net/wiki/spaces/BaT/pages/301596673/15th+Round+-+26th+April)
* [Discussion guide](https://docs.google.com/document/d/12-FAWM0O5FxnodMo2B_1t4y88iOWSPqTZALVfhNC1Tc/edit)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Index",
    img: { src: "index.png" }
  }, {
    text: "Search by provider",
    img: { src: "search-by-provider.png" },
    caption: "Trial improved training provider copy.

### Result

Users had a better understanding of how to use this field.

The private beta data highlighted a new problem with this autocomplete: If we don’t have course data for the provider a user searches for, the user sees a confusing error. (In this case the provider was the well known ‘Goldsmiths’)

By using school in the label we risk users searching for schools that are not ‘lead-schools’ – we haven’t seen this as a problem in research yet."
  }, {
    text: "Financial support",
    img: { src: "financial-support.png" },
    caption: "Trial financial support content that is specific to business studies, [removing content about bursaries and scholarships](/find-teacher-training/private-beta/user-research-apr-12#financial-support), and moving details of support for other subjects to the bottom.

### Result

Users understood the salary options and were not confused by expanding pop-ups or overwhelmed with content.

Being clear about the options available to users for their specific subject is important.

Fact-check highlighted missing student finance options."
  }, {
    text: "Search results",
    img: { src: "search-results.png" },
    caption: "When launching private beta we will not have every business studies course. Trial a banner to indicate this and to point to where users can continue their search.

### Result

Users did not see this banner, when they reached this page they went straight to search results. When the banner was pointed out they misinterpreted its meaning.

We iterated this design to create a [full-page disclaimer](/find-teacher-training/private-beta/private-beta-launch#disclaimer) in the search flow.

* * *

In the private beta all courses are for business studies. Having the subject as the search result title [made it difficult to differentiate between results](/find-teacher-training/private-beta/user-research-apr-12#search-results).

In this round we updated the title to include both subject and course provider.

### Result

Users were able to scan and find results more easily.

Work is still needed to standardise course titles in the data."
  }, {
    text: "No search results",
    img: { src: "no-search-results.png" },
    caption: "With private beta data and a limited number of courses we found users often filtered themselves into a no results view ([BATSA-217](https://dfedigital.atlassian.net/secure/RapidBoard.jspa?rapidView=2&projectKey=BATSA&modal=detail&selectedIssue=BATSA-217)).

As a user without any nearby courses I need to see the next closest ones so that I can still apply to the most appropriate courses.

As a user with no nearby courses with financial support I need to see my alternatives so that I can still apply to the most appropriate courses.

In this round we trialled a ‘suggested searches’ view. We wanted to indicate to users that their search was too constrained and that more results were available.

### Result

Users saw and interacted with these links, but this didn’t prevent an initial misconception about the number of courses available to them. The design helps users find more courses but more work is needed to avoid this situation altogether."
  }, {
    text: "Course details",
    img: { src: "full-course-details.png" }
  }, {
    text: "Study type filter",
    img: { src: "study-type-filter.png" }
  }, {
    text: "Qualifications filter",
    img: { src: "study-type-filter.png" }
  }]
}) }}
