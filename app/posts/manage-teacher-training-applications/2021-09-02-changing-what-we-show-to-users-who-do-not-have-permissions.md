---
title: Changing what we show to users who do not have permissions
description: Improving how we deal with users who do not have permissions and improving the layout of the sex, disability and ethnicity section of the application
date: 2021-09-02
---

As part of our recent work on permissions, we added messages telling users why they could not manage users or manage organisation permissions.

We looked at this again and realised that these changes introduced inconsistency.

We’ve now made our approach consistent. At the same time we’ve made additional changes to improve the way we indicate why users cannot view some parts of the application.

## Simplifying what we show to users who do not have permission to do something

In the most recent design, if a user does not have permission to manage users we show a message to explain why they cannot invite a user. We hide the ‘invite user’ button.

![User list page](user-list--no-permissions.png)

Similarly if they cannot change user details, we show a message to explain why. We also hide the ‘change’ and ‘delete user’ links.

![User details page](user-details--no-permissions.png)

The same applies to users who cannot manage organisation permissions. We show a message and hide the ‘change’ links.

![Organisation permissions](organisation-permissions--no-permissions.png)

However, if a user does not have permission to make offers and reject applications we just hide the button. We do not show a message.

![Received prompt without permissions](received-prompt--no-permissions.png)

To make things consistent, we decided not to show any messages to users who do not have permission to do something.

We did this because:

- we do not know of any problems resulting from leaving these messages out of the live service
- users whose permissions are correctly set up do not need to be constantly reminded of what they cannot do

![User list page](user-list.png)

![User details page](user-details.png)

![Organisation permissions details page](organisation-permissions.png)

## Changing the ‘give feedback’ prompt for users who cannot give feedback

At the moment, users who cannot make offers and reject applications are incorrectly shown the prompt to give feedback on automatically rejected applications.

They’re not shown a button, so they cannot actually give feedback.

![Feedback prompt](feedback--live.png)

We’ve fixed this by:

- hiding the “Give feedback” heading
- replacing the message to say, for example, “This application was automatically rejected on 7 March 2021. Feedback has not been sent to the candidate.”

![Feedback prompt](feedback--new.png)

## Simplifying what we show to users who do not have permission to view sex, disability and ethnicity information

Currently the content we show in this section is based on whether the:

- candidate has provided information
- candidate has accepted an offer
- user has permission to view this information

We only show the candidate’s answers if they provided information and accepted an offer, and the user has the right permission.

![Diversity information](diversity--can-view.png)

If the candidate has not provided information it says ‘No information shared’.

![Diversity information](diversity--no-info.png)

If an offer has not been accepted and the user does not have permission, we tell the user that.

![Diversity information](diversity--not-accepted-and-cannot-view.png)

If the user has permission but the offer has not been accepted, we tell the user that.

![Diversity information](diversity--not-accepted-but-can-view.png)

Finally, if the user has permission but the offer has not been accepted, we tell the user that.

![Diversity information](diversity--accept-but-cannot-view.png)

As part of this work we changed the layout to [replay the actual questions and answers in full like we do with the safeguarding section](/manage-teacher-training-applications/improvements-presenting-disability-safeguarding-interview-information/).

![Diversity information](diversity-new--old-labels.png)

Doing this we discovered that some of the questions used in the candidate service did not make sense on their own. So we changed:

- “Can you complete a 3-minute questionnaire?” to “Do you want to answer a few questions about your sex, disability and ethnicity?”
- “Please select all that apply to you” to “What disabilities do you have?”

![Diversity information](diversity-new--labels.png)

If the user does not have permission to view the information, the answer is replaced with “You cannot view this because you do not have permission to view sex, disability and ethnicity information.”

![Diversity information](diversity-new--cannot-view.png)

If the user has permission but the candidate has not accepted an offer, the answer is replaced with “You’ll be able to view this if the candidate accepts an offer for this application.”

![Diversity information](diversity-new--not-accepted.png)

## Simplifying what we show to users who do not have permission to view criminal record and professional misconduct information

In the [most recent design](/manage-teacher-training-applications/improvements-presenting-disability-safeguarding-interview-information/) the heading is “Safeguarding issues”. If the user or their organisation does not have permission to view the information, we show a message in grey text saying “Unavailable: you and your organisation both need permission to view these safeguarding issues.”

![Criminal record before](criminal-record--before.png)

We changed the heading to “Criminal record and professional misconduct” because that’s what is mentioned in the candidate service.

We decided not to use grey text because the difference from black text is too subtle. It looks like a mistake.

We removed “Unavailable:” because it felt unnecessary. It’s clear that the message is not an answer provided by the candidate.

We decided not to mention the user’s organisation because it felt unnecessary.

So we have changed the message to “You cannot view this because you do not have permission to view criminal record and professional misconduct information.”

We changed “Do you want to share any safeguarding issues?” to “Do you want to declare any safeguarding issues such as a criminal record or professional misconduct?” in the candidate service. This makes it easier to understand in isolation.

![Criminal record after](criminal-record--after.png)
