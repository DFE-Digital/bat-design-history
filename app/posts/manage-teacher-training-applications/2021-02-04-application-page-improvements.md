---
title: Application page improvements
description: Various improvements to the way we present work history and other parts of the application details page
date: 2021-02-04
tags:
 - MN004
 - MN014
 - MN021
---

This iteration contains several improvements to the way we present the candidate’s application.

## Marking roles that are relevant teaching

We used to mark roles which involved working with children.

But research shows that roles can be relevant to teaching even if the role didn’t involve working with children.

So to reflect the replcement question that we ask candidates, we changed the flag that can appear against a work history item.

## Removed job descriptions

We used to ask candidates to enter descriptions of their roles. But this creates more work for candidates and also more work for providers to read irrelevant descriptions.

Instead the ‘relevant to teaching’ flag lets providers find out more about these roles during the interview process.

So we removed the job descriptions.

Note: job descriptions should still be shown for old applications where the candidate did provide this information.

## Making it easier to spot gaps in work

Providers need to spot gaps across the candidate’s education and work history.

We have always presented gaps but to make it easier we have used the inset text component to make them easy to distinguish from jobs.

We have also moved work history above qualifications and put the items into reverse chronological order.

This matches the more familiar CV layout which should make it much easier to scan for gaps.

We have also combined work experience and unpaid roles into one list to meet the same need.

## Move interview needs, disability information and safeguarding towards the bottom

Interview needs are now shown in context of setting up an interview.

Safeguarding is uncommon and providers get notified about applications that contain safeguading issues. [Is this true Bill]

Disability information shouldn’t be a consideration at the sift stage.

Moving all of these toward the bottom elevates work history and qualifications which is always used at the sift stage.

## Add ‘No, I have always been in full time education’

## Mark approximate dates

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Feedback page",
    img: {
      src: "feedback-page.png"
    }
  }]
}) }}
