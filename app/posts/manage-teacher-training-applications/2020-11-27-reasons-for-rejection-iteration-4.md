---
title: Reasons for rejection iteration 4
description: Various improvements to reasons for rejection
date: 2020-11-27
---

{% from "email/macro.njk" import appEmail %}

Previous iterations:

- [Iteration 1](/manage-teacher-training-applications/reasons-for-rejection/)
- [Iteration 2](/manage-teacher-training-applications/reasons-for-rejection-iteration-2/)
- [Iteration 3](/manage-teacher-training-applications/reasons-for-rejection-iteration-3/)

This iteration contains the following improvements:

- Removed negative contractions
- Removed ‘Advice’ and ‘Details’ prefixes on candidate feedback
- Changed to heading level 2 for candidate feedback on check answers page
- Removed introductory content from within the candidate feedback (inset text)
- Removed pleasantries like ‘Sorry’ and ‘Please’
- Removed capitalisation on maths and science
- Improved general clarity of the questions

## Emails

### When all applications have been rejected

{{ appEmail({
  subject: "Update on your application - all decisions now made",
  content: "

Dear {name}

<!-- markdownlint-disable MD024 MD025 -->
# Update on your application

{Provider} has decided not to make you an offer to study {course}. They've given feedback to explain this decision.

> **Quality of application**
>
> Your subject knowledge could be improved.
>
> Understand the purpose of PE in schools and then learn more about the procedures related to safeguarding.
>
> **Qualifications**
>
> Your degree does not meet the course requirements.
>
> **Future applications**
>
> The provider would not be interested in future applications from you.

Contact {provider} directly if you have any questions about their feedback.

<!-- markdownlint-disable MD024 MD025 -->
# You can apply again

{if this was not the only application}
  You’ve now had decisions about all the courses you applied for. You did not get any offers, so you can apply again.
{endif}

Your last application has been saved. You can make changes before you submit your new application.

{link}

<!-- markdownlint-disable MD024 MD025 -->
# Get support

If you need help getting a place on a course, contact Get Into Teaching (8:30am to 5pm Monday to Friday). Call for free on 0800 389 2500 or chat to an adviser online:

https://getintoteaching.education.gov.uk/lp/live-chat

Contact becomingateacher@digital.education.gov.uk if you have problems applying online or want to give feedback.
  "
}) }}

## When waiting for one decision and has one offer

{{ appEmail({
  subject: "Update on your application - decide what to do",
  content: "

Dear {name}

<!-- markdownlint-disable MD024 MD025 -->
# Update on your application

{Provider} has decided not to make you an offer to study {course}. They've given feedback to explain this decision.

> **Quality of application**
>
> Your subject knowledge could be improved.
>
> Understand the purpose of PE in schools and then learn more about the procedures related to safeguarding.
>
> **Qualifications**
>
> Your degree does not meet the course requirements.
>
> **Future applications**
>
> The provider would not be interested in future applications from you.

Contact {provider} directly if you have any questions about their feedback.

<!-- markdownlint-disable MD024 MD025 -->
# You have an offer and are waiting for a decision about another course

You have an offer from {provider1} to study {course1}.

{provider2} has until {date} to make a decision about your application to study {course2}.

You can wait until you’ve received both decisions before you respond. Alternatively you can sign in to you account and accept the offer you’ve already got:

{link}


# Get support

Contact becomingateacher@digital.education.gov.uk if you have problems applying online or want to give feedback.
  "
}) }}

<!-- markdownlint-disable MD001  -->
### When waiting for one or two decisions and no offers made

{{ appEmail({
  subject: "Update on your application",
  content: "

Dear {name}

<!-- markdownlint-disable MD024 MD025 -->
# Update on your application

{Provider} has decided not to make you an offer to study {course}. They've given feedback to explain this decision.

> **Quality of application**
>
> Your subject knowledge could be improved.
>
> Understand the purpose of PE in schools and then learn more about the procedures related to safeguarding.
>
> **Qualifications**
>
> Your degree does not meet the course requirements.
>
> **Future applications**
>
> The provider would not be interested in future applications from you.

Contact {provider} directly if you have any questions about their feedback.

{ if one }
<!-- markdownlint-disable MD024 MD025 -->
# You’re waiting for a decision

You’re waiting for {provider} to make a decision about your application to study {course}. They should do this by {date}.

{ else }
<!-- markdownlint-disable MD024 MD025 -->
# You’re waiting for decisions

You’re waiting for decisions about your applications to:

- {provider} to study {course}
- {provider} to study {course}

They should make their decisions by {date}.
{ endif }

## Get support

Contact becomingateacher@digital.education.gov.uk if you have problems applying online or want to give feedback.
  "
}) }}

## Potential improvements

Currently the emails have been designed to work regardless of whether the candidate applied to one or multiple courses.

We could improve the clarity of some of the emails if we sent bespoke emails for candidates who only applied to one course.

For example, if the candidate applied to one course and was rejected, then the subject could be more specific. Something like ‘Application successful – you can apply again’.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Make decision",
    img: {
      src: "make-decision.png"
    }
  }, {
    text: "Reasons (1)",
    img: {
      src: "questions-1.png"
    }
  }, {
    text: "Reasons (2)",
    img: {
      src: "questions-2.png"
    }
  }, {
    text: "Check answers",
    img: {
      src: "check-answers.png"
    }
  }, {
    text: "Application details",
    img: {
      src: "application-details.png"
    }
  }]
}) }}
