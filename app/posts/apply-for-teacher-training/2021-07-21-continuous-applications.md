---
title: Allowing candidates to apply again earlier
description: An exploration of changes to the rules around 'applying again'
date: 2021-07-21
---

Candidates applying for teacher training courses can currently select up to 3 different courses on their initial application. Once this is submitted, they have to wait until all the course choices they selected have been resolved, either leading to an offer or a rejection (although they can also withdraw).

If no choice led to a place, the candidate is then given an opportunity to [apply again](/apply-for-teacher-training/apply-again-changes/). From this point on they can only apply to one course at a time, and must wait for each application to be resolved before being able to submit another application.

We know from previous research that these rules are not well understood by candidates, who often expect to be able to select and apply for another option straight away when they hear that one choice was unsuccessful - particularly if it was because the course was full.

To try and address this, we designed and tested a change where candidates would be able to have up to 3 active course choices at any one time.

This meant that candidates would be able to apply to additional courses if:

* they applied for less than 3 courses initially
* a course becomes full or they were unsuccessful
* they change their mind about one course and decide to withdraw their application

We tested this idea with some changes to the prototype.

## Design changes

On the post-submission dashboard, if a candidate had less than 3 active applications, they are invited to apply for another course. This used a similar design to the [‘apply again’ call to action](/apply-for-teacher-training/dashboard-changes/#being-unsuccessful-and-getting-feedback-from-providers), but with a ‘secondary’ (grey) button style instead of the regular green, to indicate that this was only a suggested option rather than the candidate’s required next step.

![Screenshot of post-submission dashboard showing ‘apply for another course’.](continuous-applications-apply-for-another-course.png "Post-submission dashboard showing ‘apply for another course’")

When a user pressed this button, they were taken to a copy of their most recent application, with their previous course choices removed. Some text in the task list advised them of how many courses they were now able to pick.

A back link was added to enable them to return to the post-submission dashboard.

![Screenshot of new application showing that 2 course choices can be made.](draft-application.png "New application showing that 2 course choices can be made")

If the candidate returned to the post-submission dashboard before submitting their new application, the dashboard showed the ‘draft’ application at the top of the page, enabling them to continue it. This used a slightly different design, omitting the course choice header, as the courses might not have been chosen yet, or there might be two different courses chosen.

Candidates were not able to apply again whilst having an application in draft, in order to prevent the confusion of having two unsubmitted applications.

![Screenshot of post-submission dashboard showing an application in draft.](continuous-applications-dashboard-showing-draft.png "Post-submission dashboard showing an application in draft")

## Next steps

We plan to test this design with candidates.

We also need to understand the potential impact on providers and any new requirements for the [Manage teacher training applications](/manage-teacher-training-applications/) service.
