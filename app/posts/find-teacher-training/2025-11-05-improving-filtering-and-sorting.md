---
title: Improving how candidates can filter and sort courses
description: Designing and testing ways candidates can filter courses and see results.
date: 2025-11-05
tags:
  - find
  - filters
  - filterable find
related:
  items:
    - text: Filterable Find postgraduate training courses (Find) concept
      description: October 2022
      href: /find-teacher-training/filterable-find-concept/
---

## Context

Research in January 2025 on [improving the ability to browse and search for courses](/find-teacher-training/improving-the-ability-to-browse-and-search-for-courses-round-1-user-research/) revealed some usability issues with the filters on [Find teacher training courses](https://find-teacher-training-courses.service.gov.uk/) (Find).

### 1. Seeing the ability to filter on mobile

In our research, candidates on mobile phones did not notice the ‘Show filters’ button until it was pointed out.

<img alt="Screenshot of the live site on a mobile with a grey button to open a panel that displays ways to filter courses." src="live-site-filters-button.png" class="govuk-!-width-one-half">

In March 2025, the design ops team at DfE explored [applying filters consistently in DfE](https://dfedigital.blog.gov.uk/2025/03/03/applying-filters-consistently-in-dfe/), where they found several instances of users missing the “Show filters” button when using a mobile device.

They thought users may miss this grey secondary action button for a few reasons, including:

- it looks inactive
- the colour of the button is too similar to the background colour of the filters
- the button is too far away from the results it relates to (the button was previously at the top of the page)

There were also usability issues with navigating the filters on mobile, such as the panel overlaying page content and not being clear on how to close the filter panel once it is open.

<img alt="Screenshot of the live site on a mobile with the filter panel open, displaying the ways to filter courses." src="live-site-filters-panel.png" class="govuk-!-width-one-half">

### 2. Seeing what filters have been selected

In our research, there was an expectation for applied filter labels to be present, so that they could see what they had selected.

Previous design work was done in 2022 on [exploring selected filter tags](/find-teacher-training/exploring-selected-filter-tags/).

![screenshot of a prototype with designs from October 2022 exploring how the team might incorporate selected fitler tags into the find teacher training courses website.](find-with-selected-filter-tags.png)

Implementing selected filter tags was found to be challenging at that time, because several filters were checked by default. This would mean there would be 5 selected filter tags on initial page load, which could cause confusion.

Since then, we have iterated on the filters so that by default, none are selected.

The outcome of that work was:

> “If we decide to take this further, we should do some usability testing to check that candidates understand the selected filter tags.”

As we understand it, no further exploration has been done in the team.

## User needs

When starting this piece of work, we prioritised user needs to focus on.

I need to be able to:

- access filters
- apply filters
- see results once I have applied my filters
- see what filters are selected
- remove filters

## What we did

### Mobile-first approach

We decided to prioritise designing and testing on mobile devices. Data has shown more than half of users view the service on a mobile device, and this is also where most of the existing usability issues are.

### Researching existing filters

<!-- markdownlint-disable MD051 -->
Currently, the [GOV.UK Design System](https://design-system.service.gov.uk/) does not have a filter component, so we [researched filters across government](/find-teacher-training/researching-filters-across-government/) to decide on the best solution to test.
<!-- markdownlint-enable MD051 -->

We decided to use [the GOV.UK search](https://www.gov.uk/search/all?keywords=) as our main reference, as work was done last December to [make it quicker and easier to search on GOV.UK](https://insidegovuk.blog.gov.uk/2024/12/12/making-it-quicker-and-easier-to-search-on-gov-uk/).

<img alt="Screenshot of GOV.UK showing how their filter panel looks when open." src="gov-uk-search.png" class="govuk-!-width-one-half">

The first iteration closely referenced the GOV.UK search.

However, as we have more search fields than GOV.UK, we were concerned that users would still not see the link to open the filters.

<img alt="Screenshot of the find teacher training prototype with the solution for filters that references GOV.UK search." src="prototype-iteration-1.png" class="govuk-!-width-one-half">

### Using data to drive decision-making

We discovered that candidates change the search radius in only around 27% of searches. We also found that only around 5% of searches are by training provider.

<img alt="Screenshot of the search box of the live site with fields for searching by subject location, training provider, and options to change the search radius" src="prototype-search-box-before.png" class="govuk-!-width-one-half">

From this data, we decided to reduce the prominence of the search radius and training provider options by moving them into the filters.

<img alt="Screenshot of the search box of the live site with the fields for searching by training provider and search radius removed." src="prototype-search-box-after.png" class="govuk-!-width-one-half">

We also reviewed the usage of the links to guidance on [Get Into Teaching](https://getintoteaching.education.gov.uk/).

![Screenshot of the section of the search results page on the live site with links to guidance pages on the Get Into Teaching website](git-links-live.png)

We found [how to choose a course](https://getintoteaching.education.gov.uk/train-to-be-a-teacher/how-to-choose-your-teacher-training-course) is clicked on around 150 times a day (which is around 4% of users on Find). The second and third links were only clicked on around 10 times a day. So, we decided to remove the two links which were not used often.

<img alt="Screenshot of the section of the search results page on the protoype with one link to a guidance page on the Get Into Teaching website." src="git-links-prototype.png" class="govuk-!-width-one-half">

### Adapting GOV.UK search for our use case

We moved the blue link to open the filters into the grey box with a heading and moved the active filters above the filter categories.

We felt this would better allow users to see the link to open the filters, and more easily see what they have selected and be able to remove them. This aligns more with the [filter component](https://design-patterns.service.justice.gov.uk/components/filter/) on the [MOJ Design System](https://design-patterns.service.justice.gov.uk/).

<img alt="Screenshot of the prototype of the filters section of the results page, showing the link to open and close filters on mobile and the selected filter tags." src="prototype-filters-box.png" class="govuk-!-width-one-half">

## Final designs for testing

<img alt="Screenshot of the results page of the prototype on mobile ready to be tested" src="prototype-design-mobile.png" class="govuk-!-width-one-half">

![Screenshot of the results page of the prototype on desktop ready to be tested.](prototype-design-desktop.png)

## Next steps

We will be testing these designs with participants, with the focus on testing on mobile. Based on the insights from testing, we may implement these changes in the service.

We are also [researching filters across government](/find-teacher-training/researching-filters-across-government/) to help develop a consistent and versatile component for filters.
