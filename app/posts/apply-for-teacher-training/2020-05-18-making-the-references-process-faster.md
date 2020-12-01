---
title: Making the references process faster
description: Changing the way we ask for references to find out if it’s taking longer than needed.
date: 2020-05-18
tags:
- AN024
---
<!-- markdownlint-disable MD024 -->

On average it takes about 11 days to get references.

This potentially has a negative impact on candidates. They need 2 references to get a place but courses can become full at any time.

We made edits to the existing content throughout the references user journeys to try to speed up the process.

### User need

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Making the process faster

### Assigning responsibility

If we give candidates responsibility for chasing their references
Then they will get their references more quickly

We edited content to include messages like this:

> Get your reference as soon as possible.

If we give candidates responsibility for telling referees that our emails may go to junk or spam
Then candidates will make sure referees get the email

We edited content to include messages like this:

> Your referee has not responded yet. Ask them if they got the email - it may have gone to junk or spam.

If we tell referees that a candidate’s success depends on their reference
Then they will give a reference quickly

We edited content to include messages like this:

> Teacher training courses can become full at any time. The sooner the candidate gets a reference, the more likely it is that they’ll get a place.

### Giving options

If we give the candidate options about what to do when their referee has not responded
Then they will have more chance of getting a reference quickly

We edited content to include messages like this:

> We have not had a reference from your referee yet. Add a new referee.
If you know the referee is planning on giving a reference, you can keep chasing them instead.

### Adding urgency

If we add urgency to the content
Then candidates will chase their references quickly

We edited content to include messages like this:

> Courses can become full at any time. Keep in touch with your referees to ensure they give a reference as soon as possible.

If we remove deadlines from the content and add urgency in other ways
Then referees will give a reference quickly
Because they will not wait until the deadline

We edited content to include messages like this:

> The sooner the candidate gets a reference, the more likely it is that they’ll get a place. Give a reference as soon as possible.

## Giving the right guidance at the right time

If we use the messaging above at the relevant points in the user journeys
Then candidates will get their references more quickly
Because users will:

* [take responsibility](/apply-for-teacher-training/making-the-references-process-faster/#assigning-responsibility)
* [have options](/apply-for-teacher-training/making-the-references-process-faster/#giving-options)
* [know it's urgent](/apply-for-teacher-training/making-the-references-process-faster/#adding-urgency)

### Examples of how the messaging works on the [interstitial page](https://bat-design-history.netlify.app/apply-for-teacher-training/add-a-new-referee#you-need-to-add-a-new-referee)

#### 'Response overdue'

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  content: "

> ### You need to add a new referee

> ((referee_name)) has not responded.

> Add a new referee as soon as possible. Courses can become full at any time and providers do not consider applications without 2 references.

> Adding a new referee will not prevent ((referee_name)) from giving a reference. You can keep chasing ((referee_name)) if you know they’re planning on giving a reference.

> [Add new referee]

> [Continue without adding a new referee]"
}) }}

#### 'Cancelled'

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  content: "

> ### You need to add a new referee

> You cancelled your request for a reference from ((referee_name)).

> Add a new referee as soon as possible. Courses can become full at any time and providers do not consider applications without 2 references.

> [Add new referee]

> [Continue without adding a new referee]"
}) }}

### Examples of how the messaging works with the reference status tags

[Reference status tags](https://bat-design-history.netlify.app/apply-for-teacher-training/improving-the-references-user-journey/#what-this-looks-like) are not necessarily the best places for instructions: if a candidate cancels a reference and adds a new one, the cancelled tag will still show - meaning an instruction to 'add a new referee' would be out of date.

To avoid complexity and outdated content, we give instructions on the states which are likely to get updated:

#### 'Awaiting response'

> We’ve emailed your referee. Keep in touch with them to ensure they’re planning on giving a reference as soon as possible.

#### 'Response overdue'

> Your referee has not responded yet. Keep chasing the referee or cancel this request in favour of another referee.

### Examples of how the messaging works in our emails

#### Email to referee to ask for a reference

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  content: "

> Dear ((referee_name))

> ### Give a reference for ((candidate_name)) as soon as possible

> ((candidate_name)) put us in touch with you to get a reference for their teacher training application. They applied to:

> ((course_choices))

> Give a reference as soon as possible by filling in this short form (it does not take long):

> ((link))

> Teacher training courses can become full at any time. The sooner [Candidate] gets a reference, the more likely it is that they’ll get a place.

> Let us know as soon as possible if you will not give a reference:

> ((link))

> ### Your data

> We’ll only use your data to process the candidate’s application, unless you agree to be contacted by us about your experience of giving a reference. We’ll ask about this before you submit any information.

> ### Need help?

> Contact us at becomingateacher@digital.education.gov.uk"
}) }}

#### Email to candidate if a referee does not respond

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  content: "

> Dear ((candidate_name))

> ### Get in contact with your referee as soon as possible

> ((referee_name)) has not given you a reference yet.

> Ask them to check their inbox including their junk or spam emails and give a reference as soon as possible.

> ### Check you’ve given the right details

> You gave us this email address:

> ((referee_email_address))

> If this is not correct, cancel the reference request and add in the referee details again:

> ((link))

> We cannot send your application to your teacher training providers without 2 references. Courses can become full at any time - get your reference as soon as possible.

> ### Need help?

> Contact us at becomingateacher@digital.education.gov.uk"
}) }}

### Other content

Reference-related content is also found in other areas throughout the service, including the post-submission page, the edit your application page and the cancel your referee page. We used similar messaging here too.

## How will we know this works?

We'll look as user behaviour to see if references are collected more quickly.
