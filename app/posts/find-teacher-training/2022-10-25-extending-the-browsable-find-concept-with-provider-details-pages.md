---
title: Extending the browsable Find concept with provider details pages
description: We added provider details pages to the browsable Find concept to make it easier for users to find information about a provider and their courses
date: 2022-10-25
tags:
  - browsable find
  - concepts
related:
  items:
    - text: Making the service more browseable
      href: /find-teacher-training/making-the-service-more-browseable/
    - text: Enhancing the browsable Find concept prototype
      href: /find-teacher-training/enhancing-the-browsable-find-concept-prototype/
screenshots:
  items:
    - text: Course list
      src: course-list.png
    - text: Provider details
      src: provider-details.png
    - text: Course description
      src: course-description.png
---

We recently did some work to enhance our prototype to explore making Find postgraduate teacher training (Find) more browsable.

As part of this work, we wanted to explore whether there was a benefit to having a dedicated provider page containing information about the provider and the courses they run.

## What we changed

We have:

- added a provider details page
- linked to the provider details page from each course on the results page
- linked to the provider details page from the ‘About the training provider’ section in each course description

### Provider details page

The provider details page includes:

- a link back to the filtered search results page
- a heading containing the provider name and code
- a list of contents
- information ‘About the training provider’
- information about ‘Training with disabilities and other needs’
- a paginated list of all courses the provider runs

### Course description

If the user selects a course from the provider details page, we label the backlink ‘Back to provider’ and clicking it will take the user back to the provider details page. Otherwise, we label it ‘Back to search results’ and clicking it will take the user back to the filtered results list.

## Other considerations

We considered some changes which we did not implement.

- Including a list of locations. This was not implemented as we could not establish a need for it.
- Showing the accredited bodies if the provider is a lead school. We did not implement this as many providers have only one accredited body.
- Showing metrics - for example, diversity and inclusion. We did not implement this as we want to explore what metrics are useful to candidates first.
