---
title: Picking courses from Publish
description:
date: 2020-12-02
---
{% from "screenshots/macro.njk" import appScreenshots with context %}

Our existing journey for adding a trainee asks providers to provide details of the course the trainee is on - route, subject, age range, start and end dates.

For many providers, we (DfE) already have information about the courses they offer - they’re kept on our companion service ‘Publish’.

For this round of research, we experimented with offering providers a list of courses from Publish instead of having them pick a route and then entering course details.

Research questions we had:

1. Are providers familiar with Publish?
2. How do they refer to their courses on Publish? 
3. Would they be familiar with the course code?

{{ appScreenshots({
  title: "Designs",
  items: [{
      text: "Asking for a publish course",
      img: { src: "asking-for-publish-course.png" }
    }, {
      text: "Confirming a publish course",
      img: { src: "confirming-publish-course.png" }
    }]
}) }}

We also did some research looking at how many courses providers tend to offer on publish. This showed that 50 to 60% of providers with courses on Publish have up to one or two courses only. The rest can have anywhere from 3 to 90 courses.

The above design for picking courses probably works ok for 10 courses or less - so we’ll need a different approach for the smaller number of providers who have lots of courses. 

## Research findings

The providers we tested with had a good awareness of Publish and confidence in their courses being listed on it. They did not necessarily record the course code currently, but knew what it was and felt they’d be able to use it in the future. 

Subject and course code seemed to be the most important details needed to identify a course. We initially showed the qualifications gained, but this seemed to be unhelpful - and so we changed it to show the route instead. 
