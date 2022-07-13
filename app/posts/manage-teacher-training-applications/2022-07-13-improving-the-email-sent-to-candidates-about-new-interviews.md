---
title: Improving the email sent to candidates about new interviews
description: We now include the course subject and code. We also show details separately rather than in a single section.
date: 2022-07-13
---

{% from "email/macro.njk" import appEmail %}

The email sent to candidates when an interview is set up does not currently include the course name or code.

We wanted to add these to the email and also reflect [changes we made to the email sent when an interview is updated](https://bat-design-history.netlify.app/manage-teacher-training-applications/emailing-candidates-about-upcoming-interviews-when-their-course-is-changed/).

While making these changes we looked at examples of text entered for:

- address or online meeting details
- additional details

We found that providers often give large amounts of information, sometimes including multiple paragraphs. This does not display well in the existing design so we decided to change it.

## What we changed

We have:

- added the course subject and code to the subject line and within the email
- changed the first line of the email to make it more active and bring the name of the provider to the beginning
- put the ‘address or online meeting details’ and ‘additional details’ in their own sections, separate from the date and time

The additional details section only appears if the provider entered something into the optional field.

## Email

<!-- markdownlint-disable MD001 MD025 -->

{{ appEmail({
  subject: "Interview arranged for ((subject_and_code))",
  content: "

Dear ((candidate_name))

((provider)) has arranged an interview with you for ((subject_and_code)).

The interview is on ((date)) at ((time)).

Address or online meeting details:

^ ((address))

Additional details:

^ ((additional details))

Contact ((provider)) if you have any questions. Let them know if you cannot attend the interview.

#Get help

Call 0800 389 2500 or chat online:

https://getintoteaching.education.gov.uk/#talk-to-us

Monday to Friday, 8:30am to 5:30pm (except public holidays).
  "
}) }}

<!-- markdownlint-enable MD001 MD025 -->

## Further considerations

We need to change the way the ‘address or online meeting details’ and ‘additional details’ fields are displayed in the updated interview email.
