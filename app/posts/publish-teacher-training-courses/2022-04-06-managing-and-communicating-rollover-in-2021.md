---
title: Managing and communicating rollover in 2021
description: We duplicated courses, added a new page to the service and informed users about the rollover process.
date: 2022-04-05

---

{% from "email/macro.njk" import appEmail %}

<!-- markdownlint-disable MD001 MD025 -->

On 5 October 2021, the new recruitment cycle for initial teacher training started. This meant that people wanting to train to teach from autumn 2022 could start applying to courses on Find postgraduate teacher training.

We wanted to make it easy for providers to reuse courses from the current cycle and help them to be well informed about how to prepare their courses. We did this by:

- duplicating courses from one recruitment cycle to the next
- adding a new page to that allows the user to switch between courses for the current cycle and rolled over courses for the next cycle
- adding a banner to remind providers to publish their courses
- sending a series of emails to providers about the rollover process

# Important dates
{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "First email sent to providers"
      },
      value: {
        text: "June 2021"
      }
    },
    {
      key: {
        text: "Courses rolled over (banner and new page deployed)"
      },
      value: {
        text: "6 July 2021"
      }
    },
    {
      key: {
        text: "Second email to providers"
      },
      value: {
        text: "September 2021"
      }
    },
    {
      key: {
        text: "First email reminder"
      },
      value: {
        text: "14 September 2021"
      }
    },
    {
      key: {
        text: "Second email reminder"
      },
      value: {
        text: "28 September 2021"
      }
    },
    {
      key: {
        text: "Find postgraduate teacher training opened"
      },
      value: {
        text: "5 October 2021"
      }
    }
  {
      key: {
        text: "Targeted reminders (depending on course status)"
      },
      value: {
        text: "26 October 2021"
      }
    }
  ]
}) }}


## Duplicating course information from one cycle to the next

On 6 July 2021, we rolled over all courses that had been published or withdrawn by providers between 5 October 2020 and 4 October 2021.

We copied all details and put the courses into the ‘Rolled over’ state. Providers could then review and edit the details, and publish them in time for the new recruitment cycle.

(screenshot of courses list in the ‘Rolled over’ state)

## New page added to Publish

Once the courses had been rolled over, we displayed an additional page to allow users to manage courses for the current cycle and the next cycle.

We added a banner to remind users to publish their courses ready to be viewed on Find from 5 October.

![Screenshot of new page and banner](rollover-new-page.png "New page and banner")

## Contacting providers about rollover

### Before rollover

In June, we contacted providers to let them know that they will soon need to prepare and publish their courses for the new cycle.

{{ appEmail({
  subject: "New recruitment cycle for the 2022 to 2023 academic year",
  content: "

Dear colleague,

We are writing to you about your courses for the 2022 to 2023 academic year, which will appear on Find postgraduate teacher training in October. This email sets out what you need to do to prepare your courses for the new cycle.

# How the process will work this year: checking and publishing your courses

On Tuesday 6 July, we’ll duplicate all your current content (for 2021 to 2022) in Publish teacher training courses.

This is known as the ‘rollover’ process. All your courses which were published this cycle will be copied over (including withdrawn ones). Courses that were not published will not be copied over.

From 6 July, when you sign in you’ll see a new section titled ‘Next cycle (2022 to 2023)’. In this section, you should:

* add any new courses you’re running for the first time in 2022 to 2023
* fact-check your rolled over courses (paying attention to any details that might change for the new academic year)
* delete any courses you’ll no longer be running
* check formatting (for example, bulleted lists, links and paragraph breaks)
* make sure your course locations are correct, and add any new ones

Once you’ve checked and edited your courses, schedule them for publication by pressing the green ‘Publish in October’ button (you can still make further changes to them after doing this).

Your courses will then appear on Find in early October when the new cycle opens.

# What’s new for this cycle?

When you view the ‘Next cycle (2022 to 2023)’ section, you’ll need to:
* add the UKPRN for your provider (lead schools will also need to add the URN)
* add any new or additional locations (the limit of 37 locations will no longer be in place)
* select if you can sponsor Student and Skilled Worker visas
* select if you require a minimum degree classification
* select if you have additional degree subject requirements for secondary courses
* select if you’ll consider candidates with pending GCSEs or candidates who require an equivalency test

There will be some changes to how courses can be advertised:

* the term “Early Years” will not be permitted in course titles, since Early Years Teacher Status is not awarded for any courses on Find. Courses can instead include the age range in the title – for example, Primary (3 to 7)

From the start of next cycle, Apply for teacher training will replace UCAS Teacher Training and will be the only service for applying to postgraduate ITT applications in England. If you need additional support preparing for Apply, please email becomingateacher@digital.education.gov.uk    

# Do I need to request permission for any courses?

You only need to request permission to recruit trainees for fee-funded PE courses. Accredited bodies have until Friday 2 July to request fee-funded PE and can do this directly in Publish. You can publish all other courses without requesting permission.

# What happens to my current courses?

You’ll still be able to view and edit your current courses after rollover. When you sign in to Publish from Tuesday 6 July, you’ll find them in the section titled ‘Current cycle (2021 to 2022)’. This will be available until your new courses have been published in October.

# Next steps

We’ll be in touch again in July to let you know that rollover has been completed and you can now view, edit and publish your courses for 2022 to 2023.  

If anyone else in your organisation needs to see this email, please forward it to them. If you have any questions, you can contact us at becomingateacher@digital.education.gov.uk.

Regards,

Becoming a Teacher team

"
}) }}


### During rollover

In September, we sent an email to tell providers to get their courses ready to be published.

{{ appEmail({
  subject: "Review and publish your courses for 2022 to 2023",
  content: "

Dear colleague,

Courses for the 2022 to 2023 academic year will be published on Find postgraduate teacher training on 5 October 2021.

# What you need to do now

If you have not already done so, you should start getting your courses ready.

In July we copied your 2021 to 2022 courses in preparation for 2022 to 2023. You can view, edit and publish your courses in time for October in Publish teacher training courses at https://www.publish-teacher-training-courses.service.gov.uk/.

# Review your courses

When you sign in to Publish, you’ll see a new section titled ‘Next cycle (2022 to 2023)’. This contains copies of published and withdrawn courses in the 2021 to 2022 cycle. Courses that were in draft or unpublished have not been copied over.

In this section, you should:

- check and update the details of any courses you want to run again in 2022 to 23
- add new courses that you’re running for the first time in 2022 to 23
- add the UKPRN for your provider (lead schools will also need to add the URN)
- add new locations
- select if you can sponsor Student and Skilled Worker visas
- check the information about the entry requirements

It’s important that your course information is formatted correctly so that candidates find it easy to read. You should:

- check links to make sure they’re still working
- check that bulleted lists are displaying correctly
- insert paragraph breaks into long pieces of text

This is a good opportunity to preview your courses on Find and see if improvements can be made to the course content.

To help with this, you’ll find guidance above each text box (for example, ‘About this course’, ‘Interview process’ and ‘How school placements work’).

# Publish your courses

Once you’ve reviewed your courses, use the ‘Publish in October’ button to schedule them for publication.

Your courses will appear on Find in October, when the new recruitment cycle opens, replacing your current courses.

If anyone else in your organisation needs to see this email, please forward it to them. If you have any questions, contact us at becomingateacher@digital.education.gov.uk.

Regards,

Becoming a Teacher team

"
}) }}

At three weeks before Find opened (5 October), we emailed users again to remind them to make sure their courses were ready.

We sent another reminder one week before Find opened.

{{ appEmail({
  subject: "Reminder to publish courses",
  content: "


Dear colleague,

We’re writing to remind you that courses for the 2022 to 2023 academic year will be published on Find postgraduate teacher training on 5 October 2021, on https://www.gov.uk/find-postgraduate-teacher-training-courses

If you have not already done so, make sure you’ve checked and edited your courses for the 2022 to 2023 cycle in Publish teacher training courses, on https://www.publish-teacher-training-courses.service.gov.uk/

There’s one week left before the start of the new academic cycle. Make sure you publish them, so that they will be visible on Find from 5 October, for candidates to apply to from 12 October.

#Check your new courses
When you sign in to Publish, you’ll see a new section titled ‘Next cycle (2022 to 2023)’. This contains copies of published and withdrawn courses in the 2021 to 2022 cycle. Courses that were in draft or unpublished have not been copied over.

In this section, you should:
* check and update the details of any courses you want to run again in 2022/23,
* add any new courses that you’re running for the first time in 2022/23
* add the UKPRN for your provider (lead schools will also need to add the URN)
* add any new or additional locations (the limit of 37 locations will no longer be in place)
* select if you can sponsor Student and Skilled Worker visas
* add additional information about the entry requirements for your courses

We’d encourage you to pay particular attention to the formatting on your course pages. You should:
* click on any links to make sure they’re still working
* check that bulleted lists are displaying correctly
* insert paragraph breaks into long pieces of text, to make them easier to read

This is also a good time to review and improve the copy on your pages. Guidance and tips are available in Publish to help you with this. You’ll find these above each free-text box (for example, ‘About this course’, ‘Interview process’ and ‘How school placements work’).

#Publish your courses
Once you’ve reviewed and edited your courses, you can line them up for publication to Find postgraduate teacher training.

To publish, click the green ‘Publish in October’ button (you can still make changes to your courses after doing this). Your courses will appear on Find in October, when the new recruitment cycle opens, replacing your current courses.

If anyone else in your organisation needs to see this email, please forward it to them. If you have any questions, you can contact us at becomingateacher@digital.education.gov.uk

#Provide us with some feedback
We’re looking to improve our services so that they are easier to navigate and meet the needs of our users.

If you'd like to provide feedback on the Publish teacher training courses service, email becomingateacher@digital.education.gov.uk to schedule some time to share your thoughts.

Regards,
Becoming a Teacher team

"
}) }}

### After rollover

After three weeks after the start of the cycle, we sent more targeted reminders depending on the status of the courses.

### Providers that have some but not all courses unpublished

{{ appEmail({
  subject: "Reminder to publish or withdraw",
  content: "


Dear colleague,

We’ve noticed that you have not published some of your courses for the 2022 to 2023 academic year.

This means that candidates cannot view or apply to these courses on Find postgraduate teacher training courses.

#What you can do


Publish the courses, if you want candidates to view and apply to them for the 2022 to 2023 academic year.

If you’re not offering the courses for 2022 to 2023, you should ‘withdraw’ them in Publish.

Withdrawing or publishing the courses means that they will be rolled over for the 2023 to 2024 academic year. You’ll then have access to them if you want to offer the courses again.

They will not be rolled over to 2023 to 2024 if you do not withdraw or publish the courses.

Rollover is when we copy all of your courses from one recruitment cycle to the next. You can then choose which ones you want to Publish for the next cycle.

You can publish or withdraw your courses by logging into your Publish account:
https://interactions.signin.education.gov.uk//31b1fd5d-8f4b-4b8a-95ab-36f32f40c8a3/usernamepassword?clientid=bats2&redirect_uri=https://www.publish-teacher-training-courses.service.gov.uk/auth/dfe/callback


If you have any questions, contact us at becomingateacher@digital.education.gov.uk
Regards,
Becoming a Teacher team

"
}) }}

### Providers who haven't published any courses

We used the same format as above but with a different opening section:

“We’ve noticed that you have not published any courses for the 2022 to 2023 academic year.

This means that candidates cannot view or apply to any of your courses on Find postgraduate teacher training courses.”

### Providers with all courses in rolled over state

We used the same format as above but with a different opening section:

“We’ve noticed that all of your courses for the 2022 to 2023 academic year are in the ‘rolled over’ state in Publish.

This means that candidates cannot view or apply to any of these courses on Find postgraduate teacher training courses.

Rollover is when we copy all of your courses from one recruitment cycle to the next. You can then choose which ones you want to Publish for the next cycle.”

## Additional communications

We included reminders about rollover in several of the Becoming a teacher newsletters.

We also contacted UCET and NASBTT who agreed to email their provider members and post reminders about publishing courses on their websites.


## Future considerations

We are in the process of creating an email comms plan for rollover 2022. We know from user research that some participants found the email reminders useful and well-timed. We plan to replicate what went well and look at how the process can be refined.

As a team, we’re compiling a list of important information we feel users need to know for rollover 2022. This will help to inform our messaging.

<!-- markdownlint-enable MD001 MD025 -->
