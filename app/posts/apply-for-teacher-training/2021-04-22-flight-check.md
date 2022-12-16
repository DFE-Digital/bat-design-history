---
title: Prompting candidates to review their answers before submitting
description: Making recommendations to candidates on how they can improve their application prior to submission, aka ‘flight check’.
date: 2021-04-22
tags:
  - rejections
screenshots:
  items:
    - text: Reviewing course choices
      caption: If more choices are available, we show how many
    - text: Reviewing GCSE with pass grade
    - text: Reviewing GCSE without pass grade
    - text: Reviewing degrees
    - text: Reviewing work history
    - text: Reviewing personal statement
    - text: Reviewing subject knowledge
    - text: Asking for details of how candidate is working towards meeting GCSE requirement
      src: explanation-if-no-gcse-pass-grade.png
---

Now that we have greater insight into common [reasons for rejection](/manage-teacher-training-applications/reasons-for-rejection-iteration-3/), we are better placed to make recommendations to candidates on how they can improve their application and be more likely to have a successful outcome.

For example, we know that a number of candidates get rejected because their qualifications do not meet the minimum entry requirements set by a provider. By encouraging candidates to check these requirements before submitting, we can prevent them from potentially wasting a course choice.

In other cases, we already prompt candidates to review aspects of their application, but do so inconsistently. Looking holistically at this problem, we can arrive at a common solution.

## Hypothesis

If we show recommendations based on common rejection reasons

Then candidates will review their application and make changes

We’ll know this has if worked if we see an increase in candidates being made an offer

## Initial approach

We concentrated our changes on the application review page, adding prompts for four different sections. These used the inset text pattern, but with a blue border – the same design used for highlighting incomplete sections and unexplained work breaks.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  headingLevel: 3,
  items: [{
    text: "Degree prompt",
    caption: "This prompt suggested that the grade entered for the candidate’s degree did not meet the requirements for one of their chosen providers. This is not something we can do until we have structured entry requirements, but we wanted to test how this might work all the same."
  }, {
    text: "Other qualifications prompt",
    caption: "This prompt recommended adding qualifications if none were added, or adding more if one or more had been added."
  }, {
    text: "Unpaid experience prompt",
    caption: "This prompt updated the existing guidance about using the Get school experience service to follow this new pattern. We also revised how we play back the answer to this question so that it followed the same approach used in other sections."
  }, {
    text: "Personal statement prompt",
    caption: "This prompt reminded candidates to proofread their answers."
  }]
}) }}

## Research findings

In general, the guidance shown was well understood and seen as supportive, useful and helpful:

> It’s very useful. Having things pop up to kind of give you little pieces of advice… that’s very good, I’d say.
> – Career changer

> It's almost like a supportive push… if you haven’t done it right. It’s prompting me to go and find out and get some.
> – Educational worker

> I feel like some actions need to be taken here.
> – Career changer

However, the guidance shown for the degree could have an adverse effect, particularly as there are few good options available if you don’t have the desired degree class:

> Looking at this, it seems to be highlighting areas where I’m lacking. I’m more likely to discount myself… it seems like ‘oh all these things that I don’t have’. So it might not be worth submitting the form.
> – Educational worker

Some candidates thought the blue line meant the particular section was completed, given the completed tag on the previous page was also blue.

It was also thought that adding prompts to an already long page meant guidance could be lost and make the page more confusing.

## Second iteration

Our second iteration focused more on changes we can make in this cycle, before we roll out structured entry requirements.

### Prompt candidates as they complete individual sections

We decided to move prompts to section review pages only. This also allowed us to revisit how we ask candidates to mark sections as complete.

Using radio buttons instead of a checkbox may make what we are asking clearer and also make it harder to miss this question. This change would also enable us to show contextual guidance when completing certain sections.

We added the following prompts:

* Course choice: reminding candidates how many choices they still have available
* Degree: prompting candidates to check course entry requirements
* Work history: moving the existing guidance about adding all jobs since leaving school into this question
* Personal statement: moving the existing guidance about proofreading their answer into this question
* Subject knowledge: repeating the guidance from the personal statement section about proofreading their answer

### Ask candidates without a GCSE pass grade how they expect to meet the entry requirements

Without having structured data about providers specific entry requirements, we can’t make any specific recommendations to candidates about how they can improve their application.

However, we do know the standard ITT entry criteria regarding GCSEs and their equivalents.

Currently, we ask candidates to explain how they plan to meet this criteria if they do not have this qualification, but not if they enter a non-pass grade (i.e. a grade lower than C or 4).

To address this, we added an additional question to the GCSE flow. If a candidate enters a non-pass grade, we ask them the same question that would be asked if they had said they don’t have this qualification yet.
