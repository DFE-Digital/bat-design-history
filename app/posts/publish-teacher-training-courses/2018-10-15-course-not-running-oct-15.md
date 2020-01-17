---
title: Course statuses – 15 October iteration
description: We have uncovered more complexity around course statuses on UCAS.
---
{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}
{{ govukWarningText({ text: "We didn’t build this design.", iconFallbackText: "Warning" }) }}

As a user looking at all of my courses imported from UCAS, I need to know which of those courses have been published, so that I know which courses applicants are seeing.

An iteration on the [first UCAS course status design](/publish-teacher-training-courses/ucas-course-status) and the [second UCAS course status design](/publish-teacher-training-courses/course-not-running). We have received Zendesk tickets where candidates took a course code from DfE Find and hit errors when they tried to apply. The investigation showed that this was caused by us publishing courses to DfE Find which were set to running on UCAS, but weren’t set to published on UCAS.

The [UCAS Teacher Training Set-up Guide](https://www.ucas.com/file/115581/download?token=mv-G6P53) says:

> Once you have confirmation that a training programme has been allocated places, please check you have your training programmes set to both **Running** and **Yes** in **Publish**, so applicants can apply.

## A new publishing status

We need a new publishing status when a course is set to running but not yet been published on UCAS.

Courses can have 1 of 4 statuses.

### 1\. Running

At least one location is set to running and publish is set to ‘yes’. The course is published and applicants can see it on search. It can be edited.

### 2\. Needs attention on UCAS

If the status isn’t running, but there are some training locations set to running with publish set to ‘no’.

The course is not published yet because candidates can’t apply to it. It can’t be found on search. It can be edited by publishers.

On the organisation page any course with the status ‘Needs attention on UCAS’ should have that status displayed in red and bold to drawn attention to it. The status should link to the course page:

![Screenshot showing needs attention on UCAS status](/images/publish-teacher-training-courses/needs-attention-status.png)

### 3\. New - not yet running

If there’s no training location set to running, but at least one set to ‘new’.

The course is not published, it can’t be found on search. It can be edited by publishers.

### 4\. Not running

All locations are either suspended or discontinued.

It can’t be found on search and it can’t be edited.

Whether or not a course has been published on UCAS isn’t relevant for ’Not running’ and ’New - not yet running’ statuses.

## Training location status

When a training location is set to running but publish is set to ‘No’ it should have the following status:

Needs attention on UCAS: This location is set to ‘running’ but candidates can’t apply to it. To allow candidates to view and apply to this location, you must set its publish value to ‘Yes’ in UCAS web-link.

[Trello ticket](https://trello.com/c/sXUxUwyL/479-ucas-unpublished-courses-appearing-on-search-showing-incorrectly-on-publish)

## If the course status is ‘Needs attention on UCAS’

We need to show an error message at the top of the course page:

### This course needs attention in UCAS

Candidates can’t apply to this course because no training location has a publish value set to ‘Yes’ in [UCAS web-link](#). This course will not appear in Find postgraduate teacher training.

To allow candidates to find and apply to this course, you must set the publish value of all currently running training locations to ‘Yes’.

## If the course status is ‘Running’ but some training locations are wrong

We need to show a different error message at the top of the course page:

### Your training locations need attention in UCAS

Training locations for this course are set to ‘Running’ in [UCAS web-link](#), but their publish value hasn’t been set to ‘Yes’.

These training locations will not appear in Find postgraduate teacher training:

* Matravers School (Code: M)

To allow candidates to view and apply to a training location, you must set its publish value to ‘Yes’ in web-link.
