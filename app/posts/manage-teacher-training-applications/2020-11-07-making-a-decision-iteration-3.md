---
title: Making a decision iteration 3
description: Various improvements to the flow for making a decision
date: 2020-11-07
---

{% from "screenshots/macro.njk" import appScreenshots with context %}

[View previous iteration](/manage-teacher-training-applications/making-a-decision-iteration-2)

## Reducing the number of options

In the previous iteration we had radio buttons for each of the details you could change like training provider, course and location.

But this meant there was a lot of options which could increase cognitive load. Plus all the options started with similar text making it harder to pick out the one you want.

So we’ve now combined them all into just one option and with a different label.

Note that when:

- the user only belongs to a single training provider, the training provider page is not shown
- the course only has one location, the location page is not shown
- the training provider only has one course, the course page is not shown
- the course can only be studied full time (or part time), the study mode page is not shown

## Showing the details of the course on the decision screen

In the previous iteration, the details of the course were not shown.

This means users had to remember this as they make the actual decision.

So now we show the course details in context of making a decision so they don’t have to remember it.

## Improving the content on the check answers screens

Previously the page looked like this:

![Screenshot of check answers page before change.](check--before.png "Check answers: before")

We spotted the following issues:

- The h1 and button label were inconsistent
- The button could be clearer about the fact an offer will be sent to the candidate
- There’s a lot of guidance before the button

Here’s the new version which addresses these issues:

![Screenshot of check answers page after change.](make-offer--check.png "Check answers: after")

## Making the conditions screen consistent

The screen for specifying conditions and [editing conditions](/manage-teacher-training-applications/editing-conditions-iteration) now match. Specifically:

- the hint text for the DBS check option
- simplifying the way to add further conditions

{{ appScreenshots({
  items: [{
    text: "Make a decision",
    img: {
      src: "decision.png"
    }
  }, {
    text: "Make offer: conditions",
    img: {
      src: "make-offer--conditions.png"
    }
  }, {
    text: "Make offer: check answers",
    img: {
      src: "make-offer--check.png"
    }
  }, {
    text: "Make offer: success",
    img: {
      src: "success.png"
    }
  }, {
    text: "Change course details and make an offer: training provider",
    img: {
      src: "change--training-provider.png"
    }
  }, {
    text: "Change course details and make an offer: course",
    img: {
      src: "change--course.png"
    }
  }, {
    text: "Change course details and make an offer: location",
    img: {
      src: "change--location.png"
    }
  }, {
    text: "Change course details and make an offer: conditions",
    img: {
      src: "change--conditions.png"
    }
  }, {
    text: "Change course details and make an offer: check answers",
    img: {
      src: "change--check.png"
    }
  }, {
    text: "Change course details and make an offer: success",
    img: {
      src: "success.png"
    }
  }]
}) }}
