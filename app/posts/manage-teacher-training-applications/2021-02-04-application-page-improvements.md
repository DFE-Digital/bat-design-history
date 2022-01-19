---
title: Application page improvements
description: Various improvements to the way we present work history and other parts of the application details page
date: 2021-02-04
tags:
  - MN024
  - MN025
  - MN007
screenshots:
  items:
    - text: Separate work history and unpaid experience - both provided
      src: application-page.png
    - text: Separate work history and unpaid experience - both not provided
      src: application-page--no-work-history.png
    - text: Combined work history and unpaid experience - both provided
      src: application-page--combined-work-history.png
    - text: Combined work history and unpaid experience - just unpaid experience
      src: application-page--combined-no-work-history.png
    - text: Combined work history and unpaid experience - just work history
      src: application-page--combined-no-unpaid-experience.png
---

This iteration contains several improvements to the way we present the candidate’s application to providers.

## Marking roles that are relevant to teaching

We used to mark roles that involved working with children.

But research shows that a role can be relevant to teaching even if it doesn’t involve working with children.

We are instead going to ask candidates whether roles are relevant to teaching, so we changed the flag which can appear against work history items.

## Removed job descriptions

We used to ask candidates to enter descriptions of their roles. This created more work for candidates and also for providers, who had to read descriptions which were sometimes irrelevant.

So we have removed the job descriptions for new applications. Instead a new ‘relevant to teaching’ flag indicates roles which providers might want to find out more about during an interview.

Job descriptions should still be shown for old applications where the candidate did provide this information.

## Making it easier to spot gaps in work

Providers need to spot periods of time in which a candidate was not working or getting unpaid experience.

We have combined work experience and unpaid roles into one list, so that providers do not need to compare two separate lists. We mark unpaid experience so providers can distinguish between paid and unpaid roles.

We have always indicated gaps but we now use the inset text component to make it easier to spot them.

We have also moved work history above qualifications and put the items into reverse chronological order. This matches the more familiar layout of many CVs, which should make it much easier to scan for gaps.

## Move interview needs and disability information towards the bottom

Interview needs are shown in context when a provider sets up an interview.

This means it is not essential for providers to see interview needs at the ‘sift stage’ when they are deciding whether to interview the candidate.

Disability information should not be a consideration at the sift stage.

Moving both of these towards the bottom elevates work history and qualifications, which are always used at the sift stage.

## Add ‘No, I have always been in full time education’

A common reason for not having any work history is that the candidate has always been in full time education.

This has become a new option for candidates to choose from and so we now show this on the application page.

## Mark approximate dates

Some candidates find it hard to remember the exact dates when roles began and ended.

Rather than having to guess the dates and risk being seen as dishonest, candidates now have the option to say that they are approximate.

As this is a new option for candidates, we now flag this on the application page.

## Telling providers when candidates have no unpaid experience

We used to hide the entire ‘unpaid experience’ section of the application if the user said ‘no’ to ‘do you have any experience to add?’

This meant that providers could not tell the difference between something that was asked and not provided, and something that was never asked in the first place.

We will now display all the candidate’s answers exactly as they given.

## Make headings and space consistent across sections

As part of this work we took the opportunity to tidy up the heading sizes and space between sections to be consistent.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}
