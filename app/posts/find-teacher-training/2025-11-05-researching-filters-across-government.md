---
title: Researching filters across government
description: Identifying common solutions and design gaps in the use of filters.
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

As part of the work to [improve how candidates can filter and sort courses](/find-teacher-training/improving-filtering-and-sorting/) on [Find Teacher Training Courses](https://find-teacher-training-courses.service.gov.uk/), we did research to identify common solutions and design gaps.

We also thought this could help towards defining a common filter component that is [versatile enough to be used in a range of different services that may need it](https://design-system.service.gov.uk/community/contribution-criteria#developing-a-component-or-pattern).

## Filters across government

### GOV.UK Design System

Currently, the [GOV.UK Design System](https://design-system.service.gov.uk/) does not have a filter component. Due to prioritisation of other components, it will be a long time before they add it to their design system.

Their [filter a list discussion on GitHub](https://github.com/alphagov/govuk-design-system-backlog/issues/133) provides a space to share examples, use cases and research.

### MOJ Design System

There is a [filter component](https://design-patterns.service.justice.gov.uk/components/filter/) on the [MOJ Design System](https://design-patterns.service.justice.gov.uk/). However, this component has not been checked or improved recently, and is not versatile enough that it can be used in a range of different services.

They also have a [filter discussion on GitHub](https://github.com/ministryofjustice/moj-frontend/discussions/197).

<img alt="Screenshot of the MOJ Design System filter component" src="across-gov-moj.png" class="govuk-!-width-one-half">

### DfE Design System

When the design ops team at DfE explored [applying filters consistently in DfE](https://dfedigital.blog.gov.uk/2025/03/03/applying-filters-consistently-in-dfe/) in March 2025, they decided not to create their own filter component.

Instead, they decided the MOJ filter component is suitable for what most teams need when adding a filter component to their service and created some [guidance on how to use filters in DfE](https://design.education.gov.uk/design-system/components/filter).

### GOV.UK search

In December 2024, GDS [made it quicker and easier to search on GOV.UK](https://insidegovuk.blog.gov.uk/2024/12/12/making-it-quicker-and-easier-to-search-on-gov-uk/).

This included improvements to filtering and sorting, such as merging sort by into the filters.

They did both usability and accessibility testing before going live.

<img alt="Screenshot of GOV.UK showing how their filter panel looks when open." src="gov-uk-search.png" class="govuk-!-width-one-half">

### NHS Design System

The NHS Design System does not have a filter component, but they do have a [Filter a list discussion on GitHub](https://github.com/nhsuk/nhsuk-service-manual-community-backlog/issues/217).

There are examples where filters are being used, such as the [NHS jobs website](https://www.jobs.nhs.uk/candidate/search/results?language=en) where they currently use a combination of input components with the [expander component](https://service-manual.nhs.uk/design-system/components/expander) to collapse filters into filter categories.

<img alt="Screenshot of the NHS jobs website showing how their filter panel looks when open." src="across-gov-nhs.png" class="govuk-!-width-one-half">

### Additional filter examples

There are other reusable filter components in design systems across government, including:

- [Search filters](https://designsystem.gov.scot/patterns/search-results/search-filters) on the Scottish Government Design System
- [Filter group](https://digital-land.github.io/design-system/components/filter-group/) on the Digital Land (DLUHC) style guide
- [Filters](https://design-system.nice.org.uk/components/filters/) on the NICE Design System (National Institute for Healthcare and Excellence)

## Identifying design gaps in filters

When it comes to the existing filter components and how filters are used and adapted in services across government, the main areas of inconsistency are:

1. Style and position of elements
2. Accessing filters on mobile devices (or when a browser window is sized down)
3. Filter categories - How filters collapse when there are a lot of filters

### 1. Style and position of elements

There are several inconsistencies with the style and position of elements within filters. Two examples are applying filters, and active filters.

**Applying filters** - The [MOJ Design System](https://design-patterns.service.justice.gov.uk/) has the button to apply filters at the top. However, research in DfE has suggested that having the button at the bottom of the filters is a better user experience, and they now recommend this in their [guidance on how to use filters in DfE](https://design.education.gov.uk/design-system/components/filter).

**Active filters** - Active filters are sometimes positioned at the top of the filters, and other times they are at the bottom. There is also a variation in how they are styled.

| [GOV.UK](https://www.gov.uk/search/all?keywords=)    | [Service Standard Reports](https://www.gov.uk/service-standard-reports?) | [Find an apprenticeship](https://www.findapprenticeship.service.gov.uk/apprenticeships?sort=AgeAsc) |
| -------- | ------- | ------- |
| <img alt="Screenshot of the gov.uk website and how the active filters are postioned and styled on mobile." src="active-filters-search.png"> | <img alt="Screenshot of the Service Standard Reports website and how the active filters are postioned and styled on mobile." src="active-filters-ssr-1.png"> | <img alt="Screenshot of the Find an apprenticeship website and how the active filters are postioned and styled on mobile." src="active-filters-apprenticeship.png"> |

Additionally, On larger browsers such as desktop, sometimes they move to the right hand side above the list of results.

 <img alt="Screenshot of the Service Standard Reports website and how the active filters are postioned and styled on desktop." src="active-filters-ssr-2.png">

### 2. Accessing filters on mobile

Currently, the position and style of the link used to access filters on a small browser such as mobile is different across services.

Some services display a link with a bespoke chevron that changes direction with ARIA attributes to indicate if it is expanded or collapsed.

Others display a bold link or a grey button. However, we know from research that the grey button is not easily seen by users.

| [GOV.UK](https://www.gov.uk/search/all?keywords=)    | [Civil Service Jobs](https://www.civilservicejobs.service.gov.uk/csr/index.cgi?SID=cGFnZWNsYXNzPVNlYXJjaCZvd25lcj01MDcwMDAwJm93bmVydHlwZT1mYWlyJmNvbnRleHRpZD0xNTk2MTA3MzImcGFnZWFjdGlvbj1zZWFyY2hjb250ZXh0JnJlcXNpZz0xNzYyNTI3NDg4LTFhYmY3NDNkNjg2MDk2ZWE2NTk3NmQ5NDc5YjMwOTc0ZjU1NGJjMmM=) | [Teaching vacancies](https://teaching-vacancies.service.gov.uk/jobs?keyword=&location=) |
| -------- | ------- | ------- |
| <img alt="Screenshot of the gov.uk website and how the filters are accessed on mobile." src="accessing-filters-search.png"> | <img alt="Screenshot of the Civil Service Jobs website and how the filters are accessed on mobile." src="accessing-filters-jobs.png"> | <img alt="Screenshot of the teaching vacancies website and how the filters are accessed on mobile." src="accessing-filters-teaching.png"> |

### 3. Filter categories

Many services collapse filters into filter groups or categories, which behave similarly to a [details component](https://design-system.service.gov.uk/components/details/) with additional styling.

This may be to make sure they are not overwhelming the user, and allow them to focus on the content of pages like search results or job listings.

Some services use a bespoke chevron that changes direction with ARIA attributes to indicate if it is expanded or collapsed. There is variation in how they are styled.

Others use the [GOV.UK Design System](https://design-system.service.gov.uk/) [accordion component](https://design-system.service.gov.uk/components/accordion/). The [accordion component was made more accessible](https://insidegovuk.blog.gov.uk/2021/10/29/how-we-made-the-gov-uk-accordion-component-more-accessible/) in 2021.

| [GOV.UK](https://www.gov.uk/search/all?keywords=)    | [Civil Service Jobs](https://www.civilservicejobs.service.gov.uk/csr/index.cgi?SID=cGFnZWNsYXNzPVNlYXJjaCZvd25lcj01MDcwMDAwJm93bmVydHlwZT1mYWlyJmNvbnRleHRpZD0xNTk2MTA3MzImcGFnZWFjdGlvbj1zZWFyY2hjb250ZXh0JnJlcXNpZz0xNzYyNTI3NDg4LTFhYmY3NDNkNjg2MDk2ZWE2NTk3NmQ5NDc5YjMwOTc0ZjU1NGJjMmM=) | [Find an apprenticeship](https://www.findapprenticeship.service.gov.uk/apprenticeships?sort=AgeAsc) |
| -------- | ------- | ------- |
| <img alt="Screenshot of the gov.uk filter categories." src="filter-categories-search.png"> | <img alt="Screenshot of the civil service jobs filter categories." src="filter-categories-jobs.png"> | <img alt="Screenshot of the Find an apprenticeship filter categories." src="filter-categories-apprenticeships.png"> |

## Next steps

We will use this research to [improve how candidates can filter and sort courses](/find-teacher-training/improving-filtering-and-sorting/) on [Find Teacher Training Courses](https://find-teacher-training-courses.service.gov.uk/).

We will look to create a working group to discuss how we might make filter components more consistent across government.

---

## Resources mentioned in this post

### Published guidance

- [MOJ Design System - filter component](https://design-patterns.service.justice.gov.uk/components/filter/)
- [DfE Design System guidance on using filters](https://design.education.gov.uk/design-system/components/filter)
- [Scottish Government Design System - Search filters](https://designsystem.gov.scot/patterns/search-results/search-filters)
- [Digital Land (DLUHC) style guide - Filter group](https://digital-land.github.io/design-system/components/filter-group/)
- [NICE Design System - Filters](https://design-system.nice.org.uk/components/filters/)

### Related components

- [Details](https://design-system.service.gov.uk/components/details/)
- [Accordion](https://design-system.service.gov.uk/components/accordion/)
- [Expander - NHS Design System](https://service-manual.nhs.uk/design-system/components/expander)

### Forums and discussions

- [GOV.UK Design System - filter a list discussion on GitHub](https://github.com/alphagov/govuk-design-system-backlog/issues/133)
- [MOJ Design System filter discussion on GitHub](https://github.com/ministryofjustice/moj-frontend/discussions/197)
- [NHS Design System filter a list discussion on GitHub](https://github.com/nhsuk/nhsuk-service-manual-community-backlog/issues/217)

### Blog posts

- [GDS - making it quicker and easier to search on GOV.UK](https://insidegovuk.blog.gov.uk/2024/12/12/making-it-quicker-and-easier-to-search-on-gov-uk/)
- [GDS - How we made the GOV.UK accordion component more accessible](https://insidegovuk.blog.gov.uk/2021/10/29/how-we-made-the-gov-uk-accordion-component-more-accessible/)
- [DfE - Applying filters consistently in DfE](https://dfedigital.blog.gov.uk/2025/03/03/applying-filters-consistently-in-dfe/?)
