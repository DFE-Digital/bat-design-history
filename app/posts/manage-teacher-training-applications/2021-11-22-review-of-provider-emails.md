---
title: Review of provider emails
description: Making emails clearer and more consistent.
date: 2021-11-22
---

{% from "email/macro.njk" import appEmail %}

We reviewed the emails sent to providers to:

- improve consistency
- make any obvious and easy improvements

We documented the rules which we followed as a possible starting point for improving consistency between services.

## Rules for writing emails

After auditing all 25 emails that we currently send to providers, we defined rules to ensure we are consistent and clear.

### Subject line

The subject line should say:

- what has happened
- who or what it has happened to

Start with the most important piece of information, so that users see it even if the subject line has been shortened.

For example, if the email is about a candidate, put the candidate’s name as close to the start as possible.

> #### Good examples
>
> - Jennifer Walters submitted an application for English Literature
> - Jennifer Walters accepted your offer for English Literature
>
> #### Bad examples
>
> - Application received from Jennifer Walters for English Literature
> - Offer accepted by Jennifer Walters for English Literature

If it’s not possible to write concisely with the most important information at the start, you can use a dash as a separator.

> #### Good examples
>
> - Safeguarding issues - Jennifer Walters submitted an application for English Literature
> - Deadline approaching - Jennifer Walters submitted an application for English Literature
>
> #### Bad examples
>
> - Jennifer Walters submitted an application for English Literature which contains safeguarding issues
> - You only have 20 days left to make a decision about Jennifer Walters’s application

Keep the subject line short. Give more detail in the opening line if necessary.

> #### Good examples
>
> - Gorse SCITT has set up organisation permissions
> - Jennifer Walters submitted an application for English Literature
>
> #### Bad examples
>
> - Gorse SCITT has set up organisation permissions for teacher training courses you work on with them
> - Jennifer Walters submitted an application for English Literature (XB55)

For now, we should end all subject lines with “- manage teacher training applications”. This is because we share a GOV&#8203;.&#8203;UK Notify account with other services, and our emails are sent from “Becoming a Teacher”.

### Greeting

Start with “Dear [first name]”, for example “Dear Peter”.

### Headings

Do not add a heading underneath the greeting. Instead go straight into the main content of the email.

Do not use a generic heading like “Next steps”. It may not be the next thing the user needs to do.

Since each email should deal with only one topic, it should be unnecessary to use any headings other than for the footer.

#### Good example

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  content: "Dear Jennifer

Peter Parker has submitted an application for English Literature (XB55).

View the application:

https://www.service.com/applications/12345

..."
}) }}

#### Bad example

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  content: "Dear Jennifer

# Application received

Peter Parker has submitted an application for English Literature (XB55).

# Next steps

Sign in to view the application:

https://www.service.com/applications/12345

..."
}) }}

### Links to the service

The lead-in to the link should say why the user may want to click. Do not say “sign in” as the user may already have signed in.

The link should usually be at the end of the email body, just before the ‘Get help’ footer heading.

#### Good example

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  content: "Dear Jennifer

Peter Parker has submitted an application for English Literature (XB55).

The application will be automatically rejected after 40 working days, on 21 January 2022.

View the application:

https://www.service.com/applications/12345

# Get help

..."
}) }}

#### Bad example

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  content: "Dear Jennifer

Peter Parker has submitted an application for English Literature (XB55).

View the application:

https://www.service.com/applications/12345

The application will be automatically rejected after 40 working days, on 21 January 2022.

# Get help

..."
}) }}

Start with “You can” if the user is unlikely to take immediate action. For example, “You can update the status of the offer conditions:”.

### Talking about the service

Avoid saying “we” because it’s not clear who “we” are.

> #### Good examples
>
> - A new device has been used to sign in to your account.
> - The application will be automatically rejected after 20 working days.
>
> #### Bad examples
>
> - We detected you signed in on a new device.
> - We’ll reject the application on your behalf after 20 working days.

### Referring to services

Try not to refer to the service by name. If you cannot do this, put the name in inverted commas. For example, ‘Register trainee teachers’.

> #### Good examples
>
> - Candidates can now find courses.
> - Once the candidate has met all the offer conditions, their details will be added to the ‘Register trainee teachers’ service.
>
> #### Bad examples
>
> - Candidates can now see courses on Find.
> - Once the candidate has met all the offer conditions, their details will be added to Register trainee teachers.

### Footer

Use the following footer for emails which can be switched off.

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  content: "

# Get help

Get help, report a problem or give feedback at [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk)

You can change your email notification settings:

((notifications_link))

"
}) }}
<!-- markdownlint-enable MD025 MD001 -->

Use the following footer for emails that cannot be switched off.

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  content: "

# Get help

Get help, report a problem or give feedback at [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk)
"
}) }}
<!-- markdownlint-enable MD025 MD001 -->

## Terms we use

We kept a record of common terms we use in emails, to use them as the basis of a style guide. The terms we recorded are:

- “added to [organisation]” - not “invited to [organisation]”
- “application for” - not “application to”
- “automatically rejected” - not “rejected by default” or “RBD”, avoid “automatic rejection” if possible
- “automatically declined” - not “declined by default” or “application withdrawn automatically”
- “courses that you work on with” - not “courses run by” or “courses ratified by”
- “make a decision about” - or if there’s room to spell it out, “make offers and reject applications”, not “respond to the candidate”
- “offer conditions” - not “conditions” or “your conditions” or “their conditions”
- “removed from [organisation]” - not “deleted from [organisation]”
- “respond” - when candidates reply to offers, not when providers set up an interview or make a decision
- “submitted an application” - not “application received” or “new application”
- “update the status of the offer conditions” - not “mark offer conditions as met or not met” or “track conditions”

## Other changes we made

We removed:

- any mention of GOV&#8203;.&#8203;UK because the UCAS service has been switched off, so there’s no need to differentiate between them
- any links to the guidance from the footer because it only contains dates and deadlines
- the heading “Change your email notification settings” from the footer because it draws too much attention
- any mention of the candidate reference number because we provide a link to the application
- the line about needing permission to view from the email about safeguarding issues because we tell thim this in the application
- the email that users get when courses are opened on ‘Apply for teacher training’ because it’s no longer being used
- the line “in your organisation settings” from the emails about setting up and updating organisation permissions because it’s unnecessary

We added:

- the lead-in “Set up organisation permissions” to the link in the email asking users to set up organisation permissions
- tailored content when there’s only one partner in the email asking users to set up organisation permissions
- ‘Deadline approaching - ’ to the start of the subject in the email that chases providers to make a decision

## Further considerations

We spotted a number of issues we’ll consider later.

### Using a separate GOV&#8203;.&#8203;UK Notify account

At the moment, we use the same GOV&#8203;.&#8203;UK Notify account to send emails from the ‘Publish teacher training courses’, ‘Manage teacher training applications’ and ‘Register trainee teachers’. This means our emails are sent from “Becoming a Teacher”.

This makes it harder for users to distinguish emails received from different services. As a temporary solution we’re appending “- manage teacher training applications” to every subject line.

In future we want to have a unique from address for each service.

### Giving users tailored content depending on whether they have certain permissions

We’ll consider showing tailored email content for users who lack permissions when an application is:

- submitted with safeguarding information
- automatically rejected and feedback needs to be sent to the candidate

### Deadline approaching to make a decision email

We’ll consider whether we should have an alternative version of the chaser email when only 20 days were given in the first place. For example, we could remind users when 10 days remain.

We also want to let users turn off this email notification.

### Changing the way we refer to automatically rejected applications

There’s been some work done to avoid the negative connotations with the word ‘rejection’ on the candidate service. We’ll consider the language we use throughout service.

### Using candidate name at the start of the subject line

We put the candidate’s name at the start of several emails because it helps differentiate it from other emails of the same type.

But we’ll consider whether making the name prominent could give someone preconceptions about who they are.

### Showing IP address and user agent when a new sign in is detected

The email we send to users when they sign in from a new device contains the IP address and user agent string.

We’ll consider whether it’s useful and if we should provide the location.

### Highlighting certain details using inset text

We’ll consider if it would be useful to use inset text to highlight details that are different across emails of the same type.

### Sign in page when DfE Sign-in is unavailable

The sign in page currently mentions ‘login’ instead of ‘sign in’. We’ll make this consistent with the email users receive when they sign in when DfE Sign-in is unavailable.

We’ll also add a referrer to the link so that users are redirected correctly.
