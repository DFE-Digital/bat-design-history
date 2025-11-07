---
title: Improving how candidates can filter and sort courses
description: Researching filter components across government and designing and testing a solution to help candidates filter courses and see results.
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

Research in January 2025 on [improving the ability to browse and search for courses](/find-teacher-training/improving-the-ability-to-browse-and-search-for-courses-round-1-user-research/) revealed some usability issues with the filters on Find teacher training courses (Find).

### 1. Seeing the ability to filter on mobile

In our research, candidates on mobile phones did not notice the ‘Show filters’ button until it was pointed out.

<img alt="Screenshot of the live site on a mobile with a grey button to open a panel that displays ways to filter courses." src="live-site-filters-button.png" style="width:50%;">

In March 2025, the design ops team at DfE explored [applying filters consistently in DfE](https://dfedigital.blog.gov.uk/2025/03/03/applying-filters-consistently-in-dfe/), where they found several instances of users missing the “Show filters” button when using a mobile device.

They thought users may miss this grey secondary action button for a few reasons, including:

- it looks inactive
- the colour of the button is too similar to the background colour of the filters
- the button is too far away from the results it relates to

There were also usability issues with navigating the filters on mobile, such as the panel overlaying page content and not being clear on how to close the filter panel once it is open.

<img alt="Screenshot of the live site on a mobile with the filter panel open, displaying the ways to filter courses." src="live-site-filters-panel.png" class="govuk-!-width-one-half">

### 2. Seeing what filters have been selected

In our research, there was an expectation for applied filter labels to be present, so that they could see what they had selected.

Previous design work was done in 2022 on [exploring selected filter tags](/find-teacher-training/exploring-selected-filter-tags/).

![screenshot of a prototype with designs from October 2022 exploring how the team might incorporate selected fitler tags into the find teacher training courses website.](find-with-selected-filter-tags.png)

Implementing selected filter tags was found to be challenging at that time, because several filters were checked by default. This would mean there would be 5 selected filter tags on initial page load, which could cause confusion.

Since then, we have iterating on the filters so that by default, none are selected.

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

Currently, the [GOV.UK Design System](https://design-system.service.gov.uk/) does not have a filter component, so we researched filters across government to decide on the best solution to test. See the [appendix](#appendix-–-researching-filters-across-government) for more detail on this research.

We decided to use [the GOV.UK search](https://www.gov.uk/search/all?keywords=) as our main reference, as work was done last December to [make it quicker and easier to search on GOV.UK](https://insidegovuk.blog.gov.uk/2024/12/12/making-it-quicker-and-easier-to-search-on-gov-uk/).

<img alt="Screenshot of GOV.UK showing how their filter panel looks when open." src="gov-uk-search.png" style="width:50%;">

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

<img alt="Screenshot of the prototype of the filters section of the results page, showing the link to open and close filters on mobile and the selected filter tags." src="prototype-filters-box.png" style="width:50%;">

## Final designs for testing

<img alt="Screenshot of the results page of the prototype on mobile ready to be tested" src="prototype-design-mobile.png" class="govuk-!-width-one-half">

![Screenshot of the results page of the prototype on desktop ready to be tested.](prototype-design-desktop.png)

## Next steps

We will be testing these designs with participants, with the focus on testing on mobile. Based on the insights from testing, we may implement these changes in the service.

We are also pulling together research from across government to help develop a consistent and versatile component for filters.

---

## Appendix – researching filters across government

### GOV.UK Design System

Currently, the [GOV.UK Design System](https://design-system.service.gov.uk/) does not have a filter component. Due to prioritisation of other components, it will be a long time before they add it to their design system. This makes it is challenging to find a consistent way of implementing filters across government. Their [filter a list discussion on GitHub](https://github.com/alphagov/govuk-design-system-backlog/issues/133) provides a space to share examples, use cases and research.

We decided to research filters across government, and prototype and test a design that would meet user needs in our service while maintaining consistency.

### MOJ Design System

There is a [filter component](https://design-patterns.service.justice.gov.uk/components/filter/) on the [MOJ Design System](https://design-patterns.service.justice.gov.uk/), and they have a [filter discussion on GitHub](https://github.com/ministryofjustice/moj-frontend/discussions/197). However, this component has not been checked or improved recently and is not versatile enough that it can be used in a range of different services.

<img alt="Screenshot of the MOJ Design System filter component" src="across-gov-moj.png" style="width:50%;">

### DfE Design System

When the design ops team at DfE explored [applying filters consistently in DfE](https://dfedigital.blog.gov.uk/2025/03/03/applying-filters-consistently-in-dfe/) in March 2025, they decided not to create their own filter component. Instead, they decided the MOJ filter component is suitable for what most teams need when adding a filter component to their service and created some [guidance on how to use filters in DfE](https://design.education.gov.uk/design-system/components/filter).

### GOV.UK search

In December 2024, GDS [made it quicker and easier to search on GOV.UK](https://insidegovuk.blog.gov.uk/2024/12/12/making-it-quicker-and-easier-to-search-on-gov-uk/). This included improvements to filtering and sorting, such as merging filtering and sorting. They did both usability and accessibility testing before going live.

<img alt="Screenshot of GOV.UK showing how their filter panel looks when open." src="gov-uk-search.png" style="width:50%;">

### NHS Design System

The NHS Design System doesn’t have a filter component, but they do have a [Filter a list discussion on GitHub](https://github.com/nhsuk/nhsuk-service-manual-community-backlog/issues/217). There are examples where filters are being used, such as the [NHS jobs website](https://www.jobs.nhs.uk/candidate/search/results?language=en) where they currently use a combination of input components with the [expander component](https://service-manual.nhs.uk/design-system/components/expander) to collapse filters into filter categories.

<img alt="Screenshot of the NHS jobs website showing how their filter panel looks when open." src="across-gov-nhs.png" style="width:50%;">

### Additional filter examples

There are other reusable filter components in design systems across government, including:

- [Search filters](https://designsystem.gov.scot/patterns/search-results/search-filters) on the Scottish Government Design System
- [Filter group](https://digital-land.github.io/design-system/components/filter-group/) on the Digital Land (DLUHC) style guide
- [Filters](https://design-system.nice.org.uk/components/filters/) on the NICE Design System (National Institute for Healthcare and Excellence)

### Identifying design gaps in filters

When it comes to the existing filter components and how filters are used and adapted in services across government, there are three areas of inconsistency:

- Order and interaction of elements on mobile devices (or when a browser window is sized down)
- Filter categories - How filters collapse when there are a lot of filters

#### Filter categories

Many services collapse filters into filter groups or categories, which behave similarly to a [details component](https://design-system.service.gov.uk/components/details/) with additional styling. This is likely to make sure they are not overwhelming the user and allow them to focus on the content of pages like search results or job listings.

Some use a bespoke chevron that changes direction with ARIA attributes to indicate if it is expanded or collapsed, such as [Civil Service Jobs](https://www.civilservicejobs.service.gov.uk/).

<img alt="Screenshot of the Civil Service Jobs website filter panel." src="across-gov-jobs.png" style="width:50%;">

Others use the GOV.UK Design System [accordion component](https://design-system.service.gov.uk/components/accordion/), such as [Find an apprenticeship](https://www.gov.uk/apply-apprenticeship). The [accordion component was made more accessible](https://insidegovuk.blog.gov.uk/2021/10/29/how-we-made-the-gov-uk-accordion-component-more-accessible/) in 2021.

<img alt="Screenshot of the Find an apprenticeship website filter panel." src="across-gov-apprenticeships.png" style="width:50%;">

### List of resources mentioned in this post

#### Published guidance

- [MOJ Design System - filter component](https://design-patterns.service.justice.gov.uk/components/filter/)
- [DfE Design System guidance on using filters](https://design.education.gov.uk/design-system/components/filter)
- [Scottish Government Design System - Search filters](https://designsystem.gov.scot/patterns/search-results/search-filters)
- [Digital Land (DLUHC) style guide - Filter group](https://digital-land.github.io/design-system/components/filter-group/)
- [NICE Design System - Filters](https://design-system.nice.org.uk/components/filters/)

#### Related components

- [Details](https://design-system.service.gov.uk/components/details/)
- [Accordion](https://design-system.service.gov.uk/components/accordion/)
- [Expander - NHS Design System](https://service-manual.nhs.uk/design-system/components/expander)

#### Forums and discussions

- [GOV.UK Design System - filter a list discussion on GitHub](https://github.com/alphagov/govuk-design-system-backlog/issues/133)
- [MOJ Design System filter discussion on GitHub](https://github.com/ministryofjustice/moj-frontend/discussions/197)
- [NHS Design System filter a list discussion on GitHub](https://github.com/nhsuk/nhsuk-service-manual-community-backlog/issues/217)

#### Blog posts

- [GDS - making it quicker and easier to search on GOV.UK](https://insidegovuk.blog.gov.uk/2024/12/12/making-it-quicker-and-easier-to-search-on-gov-uk/)
- [GDS - How we made the GOV.UK accordion component more accessible](https://insidegovuk.blog.gov.uk/2021/10/29/how-we-made-the-gov-uk-accordion-component-more-accessible/)
- [DfE - Applying filters consistently in DfE](https://dfedigital.blog.gov.uk/2025/03/03/applying-filters-consistently-in-dfe/?)
