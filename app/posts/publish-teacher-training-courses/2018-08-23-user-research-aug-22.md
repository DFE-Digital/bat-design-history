---
title: User research – 22 August
description: Testing markdown, SimpleMDE and publishing workflow.
date: 2018-08-23
---

In August we’ve struggled to find providers to test with, because schools are on holiday and universities are very busy.

We tested this design with 3 providers:

* [Keele and North Staffordshire Teacher Education](https://lookback.io/watch/kY9HWu5MJiJhgJ5yC)
* [West London Teaching Schools Alliance](https://lookback.io/watch/acQugHJ6r7QFpvkMQ)
* [Bromely Schools Collegiate](https://lookback.io/watch/QfEkvbkjW6uCJaLYJ) ([Part 2](https://lookback.io/watch/r7d8nZPwuqHCZNgpg))

## Users miss ‘About your organisation’

The about your organisation fields are behind a tab on the homepage. We’ve found in research that users go straight to courses. Then they either publish without noticing the organisation fields, or they find them while previewing and click through to complete them.

The journey from the preview through to about your organisation is a confusing one – users don’t realise where they are and some think they are still on the course.

In this design we tweaked the styles of the navigation from tabs to a bar. We hoped that the navigation would be more obvious and that users were simply not seeing the links.

### Results

This design tweak didn’t change user behaviour. A [more substantial redesign](/publish-teacher-training-courses/iteration-aug-23) is needed to bring ‘About the organisation’ into the user journey.

## Statuses

We needed to test whether users understood the ‘running/not running’ column and its affect on editing.

This design also introduced a separate kind of status to display the publish state of the course content. We wanted to see if this was also understood, and if the two statuses were confusing.

### Results

Users recognised the ‘running/not running’ text used by UCAS. They understood that it meant applicants wouldn’t see the course and that if they wanted it to show they would need to edit it in UCAS. They also understood that editing would be available if the course was set to running.

[“This one would need to be set to running in UCAS somewhere”](https://lookback.io/watch/kY9HWu5MJiJhgJ5yC?t=49m8s)

[“Because it’s not running, it won’t let me edit it … I’d change it to running and then assume the editing bars would pop up”](https://lookback.io/watch/acQugHJ6r7QFpvkMQ?t=1h55m0.26s)

One user didn’t realise they needed to publish courses themselves. They believed draft meant it was ready for some sort of sign-off from DfE. We’d previously tested a QA process with this user. [“My guess is that someone else needs to sign it off”](https://lookback.io/watch/QfEkvbkjW6uCJaLYJ?t=47m6s).

## Courses are already published

It’s not clear to users that courses which are set to running but have no published content will still be seen by applicants, just in a minimal state. We need to set these expectations better. This will begin with a comms email.

[“It just wouldn’t be there until it’s published”](https://lookback.io/watch/acQugHJ6r7QFpvkMQ?t=1h34m42.25s)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Organisation",
    img: { src: "organisation.png" }
  }, {
    text: "Course",
    img: { src: "course.png" }
  }, {
    text: "Preview",
    img: { src: "preview.png" }
  }, {
    text: "About your organisation",
    img: { src: "about-your-organisation.png" }
  }, {
    text: "Course length and fees",
    img: { src: "course-length-and-fees.png" }
  }, {
    text: "Workflow states",
    img: { src: "workflow-states.png" }
  }]
}) }}
