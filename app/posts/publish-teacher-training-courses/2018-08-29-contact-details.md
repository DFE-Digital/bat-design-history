---
title: Contact details
description: Allow users to edit their contact details
date: 2018-08-29
screenshots:
  items:
    - About your organisation
    - Contact details
    - About your organisation with errors
    - Contact details with errors
    - Preview with missing contact details
---

We added the [contact details from UCAS](/publish-teacher-training-courses/iteration-aug-23#about-your-organisation) to the design ([Trello](https://trello.com/c/XcWDGsvo/175-design-showing-org-info-to-publishers)). In user research we asked training providers about those details. We expected to be able to display them to applicants. We thought this was something we could avoid building for the minimum viable service.

Users told us that those UCAS contact details would not be correct.

> “Where are the contact details pulled from? … I do not want it to put my personal details … I do not want it to show an address, it’ll be wrong … If you pull in the address from UCAS it’ll be wrong … It could be an admin office, not somewhere someone can visit and see us” ([Video](https://lookback.io/watch/kY9HWu5MJiJhgJ5yC?t=58m55s))

> “So I need to put in the contact details… Where am I putting in the contact details? … The information I put on UCAS is not necessarily who they need to ring” ([Video](https://lookback.io/watch/acQugHJ6r7QFpvkMQ?t=1h25m6.76s))

## The data is in Entry Profiles

We import data from UCAS’s NetUpdate tool. We do not use any of the Entry Profiles information. Entry Profiles is the tool that Publish courses will replace, it is not available to training providers for the 2019/2020 cycle.

Contact details for institutions in NetUpdate are incomplete, they do not have email and address fields. The websites stored have not been validated, they often do not have a protocol.

The information shown to applicants is actually stored in the Entry Profiles system. Here there are well formatted addresses, telephone numbers, emails and validated websites.

If we used this data, because Entry Profiles is no longer available, and without a way to update it in Publish courses, providers could not update or correct their contact information.

## Editing contact details in Publish courses

### A one-off import

We need to import the Entry Profiles contact details as a one-off. This will seed the contact details for every UCAS institution. From then on our database will be the source of truth.

### Adding contact details to About your organisation

Replace the read only "information from UCAS" section with a standard contact details one. Contact details can be edited on their own page, this includes email, telephone number, website and contact address.

## Validating contact details

### Email address

[Follow design system guidance on email addresses](https://design-system.service.gov.uk/patterns/email-addresses/)

We indicate in the help text that this is the email address applicants will use to contact them.

### Telephone number

[Follow design system guidance on telephone numbers](https://design-system.service.gov.uk/patterns/telephone-numbers/)

Users should be allowed to enter telephone numbers in whatever format is familiar to them. You should allow for additional spaces, hyphens, brackets and dashes, and be able to accommodate country and area codes.

We must allow users to include an extension number. This is usually in the format: 01234 987654 ext 1234

“I set up UCAS, so it’s probably my details. UCAS probably does not have the extension number” ([Video](https://lookback.io/watch/acQugHJ6r7QFpvkMQ?t=2h28m54.82s))

### Website

A website fails validation if it is not a valid URL.

After a website is entered we must:

- convert it to lowercase
- prepend \`http://\` if there is no protocol

We need training providers to deep link to the page on their website that lists their courses. Some of the URLs we will import already do this. A top-level URL can make it hard to find the information needed – a school website does not prioritise their ITT content, a university equally prioritises other types of course and facilities.

### Contact address

[Follow design system guidance on addresses with multiple text inputs](https://design-system.service.gov.uk/patterns/addresses/#multiple-text-inputs)

The first line of the address, town or city, county and postcode are required fields for the benefit of applicants.

Applicants can use the postcode to quickly lookup directions. The county along with the town or city is a quick indicator of where an address is.

If we have problems with these fields being required we can loosen the rules.

*[UCAS]: Universities and colleges admissions service
