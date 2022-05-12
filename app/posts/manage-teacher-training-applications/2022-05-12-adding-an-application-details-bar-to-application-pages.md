---
title: Adding an application details bar to application pages
description: We replaced the header on application pages with a smaller application details bar. This makes better use of space and includes actions which users can take from any page.
date: 2022-05-11
screenshots:
  items:
    - text: Received
      src: bar-received.png
    - text: Received - menu open
      src: bar-received--open.png
    - text: Shortlisted
      src: bar-shortlisted.png
    - text: Shortlisted - menu open
      src: bar-shortlisted--open.png
    - text: Interviewing
      src: bar-interviewing.png
    - text: Interviewing - menu open
      src: bar-interview--open.png
    - text: Offered
      src: bar-offered.png
    - text: Conditions pending
      src: bar-conditions-pending.png
    - text: Recruited
      src: bar-recruited.png
    - text: Deferred
      src: bar-deferred.png
    - text: Deferred - ready to confirm
      src: bar-deferred--ready-to-confirm.png
    - text: Rejected
      src: bar-rejected.png
    - text: Rejected - needs feedback
      src: bar-rejected--needs-feedback.png
    - text: Conditions not met
      src: bar-conditions-not-met.png
    - text: Declined
      src: bar-declined.png
    - text: Application withdrawn
      src: bar-application-withdrawn.png
    - text: Offer withdrawn
      src: bar-offer-withdrawn.png
    - text: Make offer page
      src: make-offer.png
---

An application consists of pages showing:

- application details
- offer details (if the provider has made an offer)
- interviews (if the provider has set up an interview)
- notes
- timeline
- feedback (if the provider has given reasons for rejection)

The top of each of these pages has a header which contains:

- the candidate’s name in large text
- the application status
- a prompt (if we need to tell the user about a deadline such as for automatic rejection)
- a list of assigned users and a link to change which users are assigned
- the sub navigation menu, which gives access to the each of the pages in the application

![Screenshot of current header taking up a lot of space](current-big-header.png "Application details page showing how the header taking up a lot of space")

This header takes up a lot of space and pushes down the rest of the content on each page.

It also uses the candidate’s name as the h1 heading, rather than content which indicates the function of the page such as ‘application details’ or ‘notes’. This is not helpful for users of screen readers, as each page in the application has the same h1 heading.

We’ve designed a header which makes better use of the space at the top of each page. At the same time, we’ve improved the way we display the actions which a user can take.

The number of available actions has increased as the service has developed. For example, when an application is received the user can now:

- assign users
- shortlist the application
- reject the application
- set up an interview
- make an offer
- withdraw at the candidate’s request

![Screenshot of a page with lots of actions](current-actions.png "Application details page showing a lot of different actions")

The new header makes it easier for users to find certain actions from any page in the application.

## What we changed

We created a section at the top of each application containing:

- application number
- candidate name
- application status
- prompt text - this tells the user about a deadline or other important information
- buttons for certain actions

We’ve called this section an application details bar to make it easier to refer to.

We decided to remove the assigned users feature from this design. There’s no current plan to develop the feature in production.

## Actions included in the application details bar

We decided to include only global actions in the application details bar. These are actions which:

- affect the application as a whole
- may be selected from any page within an application
- are not usually available within a specific page

Previously we put some of these actions in a prompt which was visible on every page.

We have not included non-global actions in the application details bar. These are actions which:

- do not usually affect the application as a whole
- are typically only available within a specific page

### Examples of global actions

Global actions available in the application details bar include:

- shortlist (in the received state)
- reject (in the received, shortlisted or interviewing states)
- set up interview (in the received or shortlisted states)
- make offer (in the received, shortlisted or interviewing states)
- withdraw at candidate’s request (not in the rejected, declined, application withdrawn or offer withdrawn states)

As part of this work, we’ve split the ‘make decision’ action into ‘reject’ and ‘make offer’. Instead of a page where the user can choose between rejecting and making an offer, we’ll treat this as 2 separate journeys.

### Examples of non-global actions

Non-global actions include:

- add note
- update offer
- update course
- download application
- update status of conditions
- defer offer

There are pages with content that directly relates to these actions. For example, you can:

- add a note from the notes page
- update an offer on the offer page
- download the application details on the application details page

### Actions which can be both global and non-global

We treat setting up a first interview as a global action because there’s no specific page on which to put the button. The interview page only appears after an interview has been set up.

Once the interview page has appeared, there’s a place to put the button for setting up a further interview. So we treat it as a non-global action and do not put it in the header.

This is currently the only action which can be both global and non-global.

### Choosing which actions have buttons in the details bar

In some statuses there will be several global actions. We do not want to show a button for each at the same time as this would make the details bar cramped and confusing.

We’ll show at most 2 buttons plus a ‘more actions’ toggle menu.

The most common actions in each status have been given buttons. This makes it easier to access them.

For example, when an application has been received there are buttons to shortlist and reject the application. These actions do not appear within the ‘more actions’ toggle menu.

The most common action that leads to a positive outcome has a green primary button. Other actions have a grey secondary button.

| Status | Button colours | More actions |
|------------|----------|----------|
| Received | Shortlist is green, reject is grey | Make offer, set up interview, withdraw at candidate’s request |
| Shortlisted | Set up interview is green | Make offer, reject, withdraw at candidate’s request|
| Interviewing | Make offer is green, reject is grey | Withdraw at candidate’s request |
| Offered, conditions pending, recruited | Withdraw at candidate’s request is grey | Not applicable |
| Deferred and not ready to confirm | Withdraw at candidate’s request is grey | Not applicable  |
| Deferred and is ready to confirm | Confirm deferred offer is green, withdraw at candidate’s request is grey | Not applicable  |
| Rejected and needs feedback | Give feedback is green | Not applicable |

## Removing the option to reject on the decision page

At the moment, users click ‘make decision’ in the prompt to make an offer or reject the application. This allowed us to have only 2 buttons in the prompt, ‘make decision’ and ‘set up interview’.

They’re taken to the ‘make decision’ page which has 3 options:

- make offer
- change course details and make offer
- reject application

Since we can now have more than 2 actions in the prompt, we’ve split ‘make decision’ into ‘make offer’ and ‘reject’.

If the user clicks ‘reject’ then they go straight into the rejection flow. If they click ‘make offer’ then they go to a page based on the ‘make decision’ page but with:

- an h1 heading ‘make offer’ instead of ‘make decision’
- no ‘reject application’ radio button
- a legend of ‘Do you want to make an offer for this course?’
- a ‘yes’ option instead of ‘make offer’
- a ‘no, change course details and make offer’ option instead of ‘change course details and make offer’

## Future considerations

We want to consider:

- putting ‘add note’ in the global menu, making it possible to add notes from any page

- showing assigned users within the header

- moving certain non-global actions like ‘add note’ to the right of the ‘notes’ h1 heading, to save space and be consistent with the application details bar

- removing the concept of ‘make decision’ from the application list page, now that we’ve split the action into ‘reject’ and ‘make offer’

- moving the success notification banner above the header

- moving the ‘set up interview’ button from the interviews page to the global menu when the application is in the interviewing state

- adding prompt text when in the conditions pending state, saying something like ‘3 conditions still need to be met’

- changing ‘defer offer’ to ‘defer application’ and making it a global action

- removing the prompt telling users that deferred offers which are ready to confirm, since it may be clear from the status label and green ‘confirm deferred offer’ button

- removing the prompt telling users that feedback is needed for automatically rejected applications, since it may be clear from status label the green ‘give feedback’ button

- wording the prompts differently depending on whether the user has permission to take action

- changing ‘withdraw offer’ to ‘undo offer’, since we know that many users expect to be able to undo an offer without withdrawing the application

- having ‘set up interview’ as a button when the application is in the received state, instead of having ‘reject’ as a button
