---
title: Shortlisting an application
description: We added a way to shortlist a new application, which can be used to distinguish new applications from those that have been sifted.
date: 2022-04-25
tags:
  - shortlisting
user_needs:
  - MN030
screenshots:
  items:
    - text: Application list
      src: application-list.png
    - text: Application details
      src: application-details.png
    - text: Success message
      src: success-message.png
    - text: Overview
      src: overview.png
    - text: Timeline
      src: timeline.png
    - text: Activity log
      src: activity-log.png
---

We’ve already tried some approaches to helping users [find applications which have not been looked at yet](/manage-teacher-training-applications/helping-users-find-applications-which-have-not-been-looked-at-yet/). They did not work well in research, so we’ve decided instead to try letting users:

- shortlist applications
- [filter the application list to show applications received recently](/manage-teacher-training-applications/filtering-the-application-list-to-show-applications-received-recently/)
- [filter the activity log to show applications received recently](/manage-teacher-training-applications/filtering-the-activity-log-to-show-applications-received-recently/)

## User need

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Why we’re trying this approach

We know that most providers start by ‘sifting’ or ‘shortlisting’ candidates.

They check whether a candidate meets basic requirements such as having appropriate qualifications. Then they either:

- reject the candidate
- move on to the next stage, such as sending the application to a tutor who will decide whether to interview the candidate

At the moment there’s no way to indicate that this shortlisting stage has been completed. An application remains in the received status until:

- an interview is set up
- an offer is made
- the application is rejected

 If we add a shortlisted status, users will be able to indicate that a candidate has met the basic requirements.

## What we changed

We added a way for users to shortlist applications. The new shortlisted status is displayed wherever statuses appear, including:

- the tables showing applications by status on the overview page
- the filter list on the application list page
- applications on the application list and details pages
- the timeline and activity log

## How it works

If an application is in the received status, its application details page has a prompt which indicates the automatic rejection date.

If the user and their organisation have the appropriate permissions, the prompt also has buttons allowing the user to:

- make a decision
- set up an interview

We’ve added a ‘Shortlist’ button which appears if the user has permission to make decisions.

When the user clicks the button the page refreshes and a success message banner appears at the top. It says “Application shortlisted”.

Once the application is in the shortlisted status, the button no longer appears in the prompt. It’s not possible to move the application back to received status.

## What we want to find out

We want to find out:

- if users would shortlist applications in Manage
- if users can use the shortlisted status to make it easier to find new applications
- if users consider shortlisting a type of decision - the application list says, for example, “3 days to make a decision” but we don’t consider shortlisting to be a decision

## Further considerations

If we decide to introduce a way to shortlist an application, we could consider:

- designing a different way for users to choose the status, rather than having an additional button in the prompt
- allowing an application to be moved back from shortlisted to received status
- what to show if a provider does not use the status - for example, we could hide it in the tables on the overview page
- whether we should add a box to the overview, for example “5 received applications have not been shortlisted” or “7 applications have not been looked at yet”
- whether the name of the status should be “sifted” instead
- whether we need a new permission to allow users to shortlist an application
