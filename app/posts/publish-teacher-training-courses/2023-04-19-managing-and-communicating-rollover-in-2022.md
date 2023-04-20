---
title: Managing and communicating rollover in 2022
description: We duplicated courses, added a way to switch between recruitment cycles and informed users about the rollover process
date: 2023-04-19
related:
  items:
    - text: Managing and communicating rollover in 2021
      href: /publish-teacher-training-courses/managing-and-communicating-rollover-in-2021
    - text: Switching between recruitment cycles during rollover
      href: /publish-teacher-training-courses/switching-between-recruitment-cycles-during-rollover
    - text: Allowing users to manually roll over courses not previously published
      href: /publish-teacher-training-courses/allowing-users-to-manually-rollover-courses-not-previously-published
    - text: Emailing users to let them know that courses will be rolled over soon
      href: /publish-teacher-training-courses/emailing-users-to-let-them-know-that-courses-will-be-rolled-over-soon
---

{% from "email/macro.njk" import appEmail %}

<!-- markdownlint-disable MD001 MD025 -->

On 4 October 2022, the 2022 to 2023 recruitment cycle for initial teacher training started. The start of the cycle meant that people wanting to train to teach in the 2023 to 2024 academic year could begin applying to courses on Find postgraduate teacher training (Find).

We wanted to make it easy for providers to reuse courses from the 2021 to 2022 recruitment cycle by making some improvements to the service. We also wanted to inform them about how to prepare their courses and explain when and how the process happens.

We did this by:

- duplicating courses from the 2021 to 2022 recruitment cycle to the 2022 to 2023 recruitment cycle
- giving users the ability to [switch between recruitment cycles]( https://bat-design-history.netlify.app/publish-teacher-training-courses/switching-between-recruitment-cycles-during-rollover/)
- allowing users to [manually rollover courses not previously published]( https://bat-design-history.netlify.app/publish-teacher-training-courses/allowing-users-to-manually-rollover-courses-not-previously-published/)
- sending a series of emails to providers about the rollover process

## Timeline

| Date | What happened |
| --- | --- |
| June 2022 | First email sent to providers to let them know rollover is approaching. |
| 7 July 2022 | Courses rolled over – email to let providers know about the new functionality and removal of PE allocations. |
| 5 September 2022 | Email to providers to tell them that rollover is now in progress and to edit and publish courses for the new cycle. |
| 27 September 2022 | Reminder to sign in and publish courses. |
| 20 October 2022 | Targeted email reminder depending on course status. |

## Duplicating course information from one cycle to the next

On 7 July 2022, we rolled over all courses published or withdrawn by providers between 5 October 2020 and 4 October 2021.

We copied all details and put the courses into the ‘Rolled over’ state. Providers could then review and edit the details and publish them in time for the new recruitment cycle.

We added a way for providers to switch between recruitment cycles easily.

## Contacting providers about rollover

### Before rollover

In June, we contacted providers to let them know that they will soon need to prepare and publish their courses for the new cycle.

{{ appEmail({
  subject: "Get ready for the 2022 to 2023 recruitment cycle",
  content: "

Dear ((first_name))

In October, courses for the 2023 to 2024 academic year will be published on Find postgraduate teacher training.

In preparation for this, we’ll soon be making some changes in Publish teacher training courses to allow you to update and publish courses for the new recruitment cycle.

# Rolled over courses

On Thursday 7 July, we’ll duplicate all your current courses in Publish.

https://www.publish-teacher-training-courses.service.gov.uk

All courses which were published or withdrawn this recruitment cycle will be rolled over to the new cycle ready to be updated and published.

From 7 July, you’ll see a new section in Publish titled ‘Recruitment cycle 2022 to 2023 - current’. You can then:

- add new courses
- update rolled over courses
- delete any courses you’ll no longer be running

Also, you’ll find some improved guidance on what information to include in your course descriptions. This is based on our research into what candidates are looking for when they are browsing course page.

# Next steps

We are making some changes to the structure of course information to help candidates easily distinguish between courses on Find. We would like your feedback on these changes before rollover begins.

Please register your interest to take part by Wednesday 15 June at https://forms.gle/jXiGgJc3QkzwAXih7.

We’ll be in touch again in July to let you know that the courses have been rolled over.

# Get help

If anyone else in your organisation needs to see this email, please forward it to them. If you need any help, contact us at becomingateacher@digital.education.gov.uk.

The Becoming a Teacher team
"
}) }}

### During rollover

In September, we sent an email to tell providers to get their courses ready to be published.

{{ appEmail({
  subject: "Publish your courses for the 2022 to 2023 recruitment cycle",
  content: "

Dear ((first_name))

On 4 October, courses for the 2023 to 2024 academic year will be published on Find postgraduate teacher training.

Before 4 October, check and publish your 'rolled over' courses, if you haven't already.

https://www.publish-teacher-training-courses.service.gov.uk/sign-in

Sign in to Publish and go to ‘Recruitment cycle 2022 to 2023 - current’. From here, you can:

- add new courses
- check and edit rolled over courses
- delete any courses you’ll no longer be running

# Updating and publishing courses

Before publishing courses, make sure that the information you’ve provided is up to date.

Having complete and accurate information gives candidates the best possible experience when looking for a suitable course.

Check that:

- course locations are correct - you can also add new locations if needed
- all essential information, such as fees and visa sponsorship, is up to date
- your course descriptions are specific and give candidates a good overview of what they can expect

When your courses are ready, you can schedule them to go live as soon as Find opens on 4 October (you can still make changes to them after doing this).

# Course summary examples and guidance

Based on our research into what candidates are looking for when reading course content, we’ve produced some new guidance.

Course summary examples: https://www.publish-teacher-training-courses.service.gov.uk/how-to-use-this-service/course-summary-examples

Writing descriptions for Publish teacher training courses: https://www.publish-teacher-training-courses.service.gov.uk/how-to-use-this-service/writing-descriptions-for-publish-teacher-training-courses

# Get help

If you need any help, contact us at becomingateacher@digital.education.gov.uk.

The Becoming a Teacher team
"
}) }}

One week before Find opened on 4 October, we emailed users again to remind them to make sure their courses were ready.

{{ appEmail({
  subject: "Important: publish your courses for the 2022 to 2023 recruitment cycle",
  content: "

Dear ((first_name))

There’s just one week left before Find postgraduate teacher training (Find) opens on 4 October. Please check and publish your courses now so that candidates can view and apply.

https://www.publish-teacher-training-courses.service.gov.uk/sign-in

Sign in to Publish and go to ‘Recruitment cycle 2022 to 2023 - current’. From here, you can:

- add new courses
- check and edit rolled over courses
- delete any courses you’ll no longer be running

# Updating and publishing courses

Before publishing, check that:

- course locations are correct - you can also add new locations if needed
- all essential information, such as fees and visa sponsorship, is up to date
- your course descriptions are specific and give candidates a good overview of what they can expect

# Course summary examples and guidance

Based on our research into what candidates are looking for when reading course content, we’ve produced some new guidance.

Course summary examples: https://www.publish-teacher-training-courses.service.gov.uk/how-to-use-this-service/course-summary-examples

Writing descriptions for Publish teacher training courses: https://www.publish-teacher-training-courses.service.gov.uk/how-to-use-this-service/writing-descriptions-for-publish-teacher-training-courses

<<<<<<< HEAD
=======

---

>>>>>>> a8a2287f038ef672aa1eac34e4aae16610759a12
>>>>>>>
# Get help

If you need any help, contact us at becomingateacher@digital.education.gov.uk.

The Becoming a Teacher team
"
}) }}

## After rollover

On 20 October, we sent a more targeted reminder to providers who had courses that had not been published or withdrawn.

{{ appEmail({
  subject: "Reminder to publish or withdraw courses",
  content: "

Dear ((first_name))

We’ve noticed that ((provider_name)) has the following unpublished courses for the 2022 to 2023 recruitment cycle:

((courses))

This means that candidates cannot currently view the course or apply on Find postgraduate teacher training (Find).

# What you can do now

You can publish or withdraw courses by signing in to Publish teacher training courses (Publish).

https://www.publish-teacher-training-courses.service.gov.uk/sign-in

1. Go to the ‘Courses’ page and click on the course
2. Click on ‘Publish’ or ‘Withdraw’

If you do not want to publish a course for the current recruitment cycle but might want to publish it next cycle, you can withdraw the course. This means you’ll be able to keep the course in your account and it will be rolled over next year.

# Get help

If you need any help, contact us at becomingateacher@digital.education.gov.uk.

The Becoming a Teacher team
"
}) }}


## Additional communications

We included reminders about rollover in several of the Becoming a Teacher newsletters.

## Further considerations

We are in the process of creating a rollover plan for 2023. We know from user research that some participants find the email reminders helpful and well-timed. We plan to replicate what went well and look at how we can refine the process.

As a team, we’re compiling a list of important information we feel users need to know for rollover 2023. This information will help to inform our messaging and timing.

<!-- markdownlint-enable MD001 MD025 -->
