---
title: Courses that become full after submission – our initial approach
description: Informing candidates when a course becomes full between submission and the provider receiving it, and letting them decide what to do.
date: 2020-06-01
tags:
  - course full
related:
  items:
    - text: Content for email notifications
      href: https://docs.google.com/document/d/1-aN7tIZzCASXrcAMd6XA05jrrslDTP0QCCp9Y6Zer_g/
    - text: User interface
      href: https://docs.google.com/document/d/1FwPaGSYzSViXtbB2INHwO7bdxr0fFFUpVs4z978tW9Q/
---

We had a number of questions about what happens when [courses become full after a candidate submits their application](/apply-for-teacher-training/course-full-after-submitting/) - but before they get their references:

* What do providers expect when they mark a course as full?
* Will providers consider any applications after marking a course as full?
* Should we let providers choose how to respond when they have pending applications (applications which are submitted but waiting on references)?

This is a complex scenario with inconsistent behaviour.

As we approach the end of our first recruitment cycle, we need to minimise the risk of candidates wasting a choice on a course that becomes full while they wait for their references.

We need a solution to this problem, even if it’s not perfect, so we can learn more about this situation and continually improve how we manage it.

We can deliver something in 2 stages:

1. Notify candidates by email when a course becomes full, informing them of their options and pointing them to support if they want to change their course choices.
2. Allow candidates to update course choices themselves.

## What can a candidate do?

There are various ways a candidate can respond when their course becomes full while waiting for references.

### When a course is full or has been withdrawn (for courses which have a single location or study mode)

Candidates can:

* choose a different course
* remove course from application
* submit application anyway

### When a location is full or has been withdrawn (for courses with multiple locations, but not study modes)

Candidates can:

* edit location
* choose a different course
* remove course from application
* submit application anyway

### When a study mode is full or has been withdrawn (for courses with multiple study modes, but not locations)

Candidates can:

* edit study mode
* choose a different course
* remove course from application
* submit application anyway

### When a study mode at a location is full or has been withdrawn (for courses with multiple study modes and locations)

Candidates can:

* edit study mode
* edit location
* choose a different course
* remove course from application
* submit application anyway

## Design

We’ll start by emailing candidates who end up in this situation. [The email](https://docs.google.com/document/d/1-aN7tIZzCASXrcAMd6XA05jrrslDTP0QCCp9Y6Zer_g/edit) will outline their options and ask them to let us know what they want to do by contacting us.

Later on we’ll build a more sophisticated process, allowing candidates to make changes themselves. They’ll also get a notification on their dashboard.

![User journey flow diagram](flow.svg)

We used Google Docs rather than HTML to prototype our designs. This allowed us to quickly iterate the design and content.

![Screenshot of a Google Doc with a mock up of a form](update-course-choice.png "Using a placeholder syntax to indicate which content can vary")

![Screenshot of a Google Doc with a mock-up of 2 summary cards](your-updated-course-choice.png "Using tables to imitate buttons and summary cards")

We’ll see if [the resulting document](https://docs.google.com/document/d/1FwPaGSYzSViXtbB2INHwO7bdxr0fFFUpVs4z978tW9Q/) gives developers enough information to build the pages in this flow.
