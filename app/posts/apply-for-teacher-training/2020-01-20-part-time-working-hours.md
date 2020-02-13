---
title: Working patterns for part time jobs
description: Adding a place for candidates to describe their working pattern.
date: 2020-01-20
---
We ask candidates to select ‘full time’ or ‘part time’ for their work history entries.

Some providers say that ‘part time’ doesn’t give enough detail. It could mean a candidate has worked 5 hours or 25 hours, for example.

## User needs

As a provider, I need detail about a candidate’s work history so that I have enough information to make decisions on their application.

As a candidate, I need to be able to describe my part time jobs, so that I can show how much work I did.

[Listen to a discussion about full time and part time with a candidate](https://lookback.io/watch/cxYdKBYN9TK7cmxHF?t=23m15.35s)

## Hypotheses

### Context

UCAS asks for working hours for all jobs. We're not sure if this is necessary, because:

* the difference between 20 and 22 hours, for example, isn't significant
* a full time job shows a level of commitment, whether it was 37 hours or 40 hours

### Our hypotheses

**If** we ask for the working pattern (rather than the number of hours):

 * **Then** it will be easier for candidates to fill out the application form
 **Because** they won't have to find out the number of hours they worked in each job

 * **Then** providers will still have the information they need to make decisions on a candidate's application
 **Because** the working pattern will give a detailed picture of a candidate's work history

### How will we know this works?

 We’ll know this works when candidates can describe their part time jobs in a way that’s useful for providers.

 We've updated the design (refer to screenshots below) to include a field for candidates to enter their working pattern. We'll see if this works by:

 * testing it with candidates to see if they understand what kind of information to give
 * testing it with teacher training providers to see if this gives them the information they need

 ## Findings

 Candidates are frequently completing this, and typically give hours per week as in the example. They have also used the free text fields to indicate zero hour contract details and similar situations.

 {% from "screenshots/macro.njk" import appScreenshots with context %}
 {{ appScreenshots({
   items: [
     { text: "Working pattern for a part time job" },
     { text: "Work history review page" }
   ]
 }) }}
