---
title: Exploring ways to integrate the services
description: We sketched some idea for ways that the different services involved in becoming a teacher could be more joined-up.
date: 2023-06-21
ogImage:
  src: connecting-services.png
  alt: "Illustration showing the Apply for teacher training service connected to lots of other services."
---

![Illustration showing the Apply for teacher training service connected to lots of other services.](connecting-services.png)

As a service design exercise, we explored some ideas for ways that the different services involved in becoming a teacher could be more joined-up.

These designs are all rough sketches to illustrate the ideas.

## Step by step

There are a lot of different steps involved in becoming a qualified teacher, from big ones like getting accepted onto a teacher training course, to smaller ones like completing safeguarding checks and applying for funding.

The Get into teaching website already has a [how to become a teacher page](https://getintoteaching.education.gov.uk/steps-to-become-a-teacher) which outlines some of this.

Another approach might be to use the [step by step pattern](https://design-system.service.gov.uk/patterns/step-by-step-navigation/). This has the advantage that it can also link all of the start pages for each of the services together. For a similar example, see [become a car driving instructor](https://www.gov.uk/become-car-driving-instructor).

![Screenshot showing a page with the title 'How to become a teacher: step by step' with 6 steps.](step-by-step.png)

## Find a course

The Find postgraduate teacher training service is currently separate from Apply for teacher training. There are links between the two, but the ‘Find’ service does not have any account or login functionality associated with it.

Currently, when adding a course from ‘Apply’, the service asks users if they already know which course they want to apply to. If they do, then they can pick the course within Apply using autocompletes and radio buttons, but if they don’t, they are sent over to Find first. This could be confusing.

One option might be to incorporate both services under a single combined navigation header and a shared account.

![Screenshot showing a page with a navigation bar with the items: Courses, Your details, Applications, Messagea and the service title 'Become a teacher'](find.png)

This might make it clearer to users that the 2 services are closely connected.

## Immigration status

Currently, candidates who do not have British or Irish nationality are asked to confirm whether they have the right to work or study in the UK, and if so, what their immigration status is.

The immigration status is not verified straight away. Instead, it is up to the provider to do this at a later date once an offer has been accepted.

An alternative approach might be to ask the candidate if they have a ‘immigration status share code’ from the Home Office. These are issued for things like EU settled status and some types of visa.

If the candidate has this, then their immigration status could be automatically verified.

This might help to:

* reassure the candidate whether they have the right to work or study
* avoid the need for providers to verify immigration status separately

![Screenshot showing a page asking for an immigration status share code ](immigration-status-share-code.png)

![Screenshot showing a page where a share code check was successful and the candidate has EU settled status](share-code-successful.png)

## School qualifications

Candidates are asked to enter their GCSE qualifications in English, maths and science, as having achieved a grade C or 4 in will demonstrate that they meet the minimum standard for initial teacher training. Candidates are also strongly encouraged to add their A level results, as these can support their application, particularly for secondary teaching.

Adding these qualifications can take some time, and some candidates may not even remember accurately what their qualifications were.

However, for anyone who took their GCSEs or A levels on or after 2012, the qualifications are held on a central database held by the Education and Skills Finding Agency (ESFA), part of the Department for Education.

Anyone can [access their personal learner record](https://www.gov.uk/guidance/how-to-access-your-personal-learning-record), however this currently involves filling out and emailing a Word document along with proof of identity.

An idea to explore in future might be to link these services together, allowing candidates to quickly import their qualifications into their teacher training application.

![Screenshot showing a page asking for a unique learner number](school-qualifications.png)

![Screenshot showing a page listing GCSE and A level qualifications imported from the learner record](import-qualifications.png)


This would also have the advantage of verifying these qualifications, so that providers to not have to ask for proof of them later, which currently involves candidates finding (or re-requesting) their original certificates.

## Messages

There are several places in the service where candidates are encouraged to contact teacher training providers, with both email addresses and phone numbers given. Candidates can also contact support using an online chat feature (working hours only) or by phone. And if candidates have been assigned a teacher training adviser, they can get advice from them via email, phone, or SMS.

These different communication channels may make it hard for candidates to keep track of. We also know that many candidates are reluctant to use phone communication.

One idea to explore would be to have the option for candidates to send and receive messages within the service.

![Screenshot showing a page listing messages from different providers](messages.png)

![Screenshot showing a page with messages to and from a teacher tranining provider](tta-messages.png)

This could supplement the other channels, with candidates also receiving new messages via email.

The messages feature could also perhaps include automated notifications, such as when an offer is received from a provider.

## Criminal records checks

Once a candidate has accepted an offer for a training course, they are required to pass safeguarding checks including an enhanced criminal records check. This is currently all done off-service, with providers asked to manually mark the status of the check as ‘complete’ once it has been done.

To make this more seamless, the service could give candidates a link to apply for a criminal records check, and then ask for their ‘share code’ once the check has been done.

![Screenshot showing a page asking for a criminal records check share code](criminal-records-check.png)

![Screenshot showing a page where criminal records checks have been successful](criminal-records-check-done.png)

This would require tight integration with the [Disclosure and Barring Service (DBS)](https://www.gov.uk/government/organisations/disclosure-and-barring-service). Currently they don’t have an online service for enhanced checks, only basic ones, but this may change in future.

## Scholarships

Candidates who are offered a place on a course for physics, maths, chemistry, computing or modern languages are offered the ability for apply for a scholarship. These are administered by professional bodies such as the Institute of Physics, and offer slightly more money than the standard bursary, as well as other benefits.

However applying for these currently involves filling out entirely separate application forms (asking for much of the same information as already entered on Apply), and also candidates have to know that this is available to them.

Instead of this, the service could prompt all eligible candidates to apply, and could make this a single click rather than asking for any extra information.

![Screenshot showing a page inviting candidates to apply for a scholarship](scholarship.png)

![Screenshot showing a page confirming that a scholarship application has been sent](scholarship-done.png)

This would involve working closely with the scholarship institutions and providing them a way to receive and make decisions on scholarship applications.

## Student loan

Most candidates applying to fee-paying courses will go on to apply for a student loan in order to pay for the course fee as well as contribute to their living costs.

Currently this involves following the guidance and application process for [undergraduate student finance](https://www.gov.uk/student-finance) (even though the course is post graduate), which involves adding details of their course as well as proving that they have met the conditions of their offer.

This could be improved through better integration with Student Finance England, which might enable to apply for a student loan without having to re-enter and prove the details of their training course.

![Screenshot inviting trainees to apply for a student loan](student-loan.png)

![Screenshot showing the Student Finance England website with the course details already confirmed](student-loan-application.png)

## GOV.UK One Login

Currently, all of the services involved in becoming a teacher have a completely separate account and login system.

The Government Digital Service are currently building and rolling out a the [GOV.UK One Login service](https://www.sign-in.service.gov.uk) which aims to make it easier to access government service using a single account.

When signed in, the One Login service provides a ‘Your services’ screen which lists all the services a user has connected to. This makes it easier to users to return to services, and provides an additional way to navigate between services

![Screenshot showing a list of services on the One Login service](one-login.png)
