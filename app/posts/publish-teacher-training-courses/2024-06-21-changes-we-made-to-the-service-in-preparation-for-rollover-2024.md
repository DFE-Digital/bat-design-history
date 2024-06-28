---
title: Changes we made to the service in preparation for rollover 2024
description: We made several changes to the service as part of our preparation for rollover
date: 2024-06-21
tags:
  - applications
  - courses
  - markdown
  - copy courses
  - rollover
---

Several changes to the prototype have been made over the past year following best practices and research recommendations, but they have not been implemented in the live service.

As part of Rollover 2024, we reexamined these changes alongside more recent research findings to see if they were still suitable for providers’ needs.

These changes are listed below, with the additional work we implemented.

## What we changed

We have made the following changes:

- shortening pages
- adding in markdown guidance
- removing ‘Personal qualities’ and ‘Other requirements’
- changes to ‘Course details’
- special educational needs and disabilities (SEND) checkbox changed to radio buttons
- full time or part time radio buttons changed to checkboxes
- add a second subject validation

### Shortening pages

The Course information page comprises 3 sections:

- About the course
- Interview process
- How placements work

Previous work had been done on the prototype to break this down into 3 separate pages instead, following GDS guidance for one thing per page.

Following more recent research feedback, we looked again at this and updated the content and page titles to match better what candidates told us they looked for in this content. The aim is to help Providers produce more useful course pages.

Additionally, we moved the markdown guidance from the right-hand column to be in situ above the text area so it’s easier to refer to

![Screenshot of course details page](about-this-course.png "Course details page")
![Screenshot of interview process page](interview-process.png "Interview process page")
![Screenshot of course school placement](school-placements.png "School placement page")

The Course length and fees page comprises 3 sections:

- Course length
- Course fees
- Fees and financial support

Previous work had been done on the prototype to break this down into 3 separate pages instead, following GDS guidance for one thing per page.

Following more recent research feedback, we looked at this and updated the content and page titles.

We also merged the 2 pages, ‘Fee details’ and ‘Financial support’, because data showed that providers tended to enter all financial information into fee details.

Additionally, we moved the Markdown guidance from the right-hand column to above the text area so it’s easier to refer to.

![Screenshot of course fees page](course-fees.png "Course fees page")
![Screenshot of course length](course-length.png "Course length page")
![Screenshot of financial support](financial-support.png "Financial support page")

### Adding in markdown guidance

Some pages with text areas were missing the Markdown guidance, we added these to the following pages:

- About the accredited provider
- Training with your organisation
- Training with disabilities and other needs

![Screenshot of accredited providers](accredited-providers.png "Accredited providers page")
![Screenshot of about organisation](about-org.png "About organisation page")

### Removing ‘Personal qualities’ and ‘Other requirements’

We originally intended to separate the ‘Personal qualities’ and ‘Other requirements’ sections into separate pages. However, further analysis showed that the content in these sections was commonly repeated across all courses, making them less useful to candidates who are looking for things that make courses different from one another.

We already surface information very similar to the content that providers enter in personal qualities on the screen where candidates enter their personal statement. This is the most relevant place for this content in the journey.

We aren’t dropping columns because we’ll need to see the data for providers to see for courses in the past.

The content entered in the Other qualities field covered the mandatory checks (DBS and fitness to train to teach checks) before an offer of training can be accepted.

We already have this information on the start pages for Find and Apply and the safeguarding declaration in Apply. We will add it to the email candidates receive when they get an offer to join a course and to the Get Into Teaching website so that candidates can see it throughout their journey.

User research with candidates also revealed that some find a DBS check difficult to understand, so we have explained its meaning in the content.

It is going to sit behind a feature flag.

### Changes to course details

As we made some changes to the title on other pages, this information on the course details page was also updated.

There had also been some work done on the prototype, which never went live, including:

- removing the truncation so that all text is visible
- using the ’Tab’ design for the Basic Details / Description links
- removal of Personal qualities
- removal of Other qualities

![Screenshot of courses](courses.png "Courses page")

### SEND checkbox to radio buttons

To match how the SEND option appears in the edit section, we changed the SEND question from a single checkbox to radio buttons

![Screenshot of send option](send.png "SEND option")

### Full time or part time radio buttons to checkboxes

This has been changed from radio buttons to checkboxes to follow best practices. Users can now choose one or both.

![Screenshot of full time or part time option](full-part-time.png "Full time or part time option")

### Add validation to the second subject choice

Some validation has been added so that users cannot select the same subject as a second option that they already selected as a first option.

![Screenshot of second subject](second-subject.png "Second subject page")
