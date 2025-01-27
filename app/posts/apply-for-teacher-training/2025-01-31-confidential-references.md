---
title: Showing when references are confidential
description: Making it clearer to all people giving, receiving and reading references when they are confidential and when they can be shared with the candidate.
date: 2025-01-31
tags:
  - references
  - confidentiality
---

## Background

In the summer of 2024 the product team were made aware by our legal team that there’s no clear way for people providing references to indicate that their reference should not be shared with the subject of the reference (the candidate).

We have operated on the basis that all references should be treated as confidential, however if a candidate asks for contents of their references, we have no clear basis to refuse that request.

To make it clearer that a reference is to be treated as confidential, or whether it can be shared with the candidate if they request it, we have added a question to the ‘add a reference’ user journey.

We have also updated the screens used by our support team to clearly indicate to them when a reference is confidential. This is the team that candidates would contact to request the contents of their references, so it’s important that the information is clearly presented to them as well as to candidates and people providing references.  

## What we did

### For candidates

We added:

* Content to the start of the journey a candidate follows to add people who can give them a reference to make it clear that the referee can decide whether a reference can be shared or not  

  * They’ll be asked whether they want you to be able to see their reference or if it is confidential.

* Unrelated to this issue but we also used the opportunity to link to content on Get Into Teaching about [how to select a person to give you a reference](https://getintoteaching.education.gov.uk/how-to-apply-for-teacher-training/teacher-training-references)

* We also improved the content about which references to select in which circumstances

* When the candidate confirms their reference choice, we repeat the content ‘They can decide whether you will be able to see their reference or if it is confidential.’

![Screenshot of candidate start screen](/apply-for-teacher-training/2025-01-31-confidential-references/confidential-references-candidate-start-page.png)

### For referees

We added content to the start page where we ask if they can provide a reference:

> You can choose whether Jane Doe should be able to see the contents of your reference  or if it should be confidential.  

![Screenshot of referee screen](/apply-for-teacher-training/2025-01-31-confidential-references/confidential-references-referee.png)

We added a new question to the flow:

> Can your reference be shared with [candidate name]?

![Screenshot of referee screen](/apply-for-teacher-training/2025-01-31-confidential-references/confidential-references-referee-yes-no.png)


### For providers

We updated the table that Providers see in the Manage service that shows reference content to indicate whether a reference is confidential or not. There is a warning at the top of a candidate's reference and it's repeated in the table.

![Screenshot of updated reference table in Manage](/apply-for-teacher-training/2025-01-31-confidential-references/confidential-references-manage.png)

We also added the confidentiality status, selected by the referee for the reference, in version 1.6 of the vendor API.

### For our support team

The Becoming a Teacher support team are the people who could be asked by candidates to share the contents of their references with them, so it’s important that it’s also clear to them when a reference is confidential.

We added the same warning text to the internal support console as we used for the Provider view in Manage.

### Communicating the change

We emailed providers in early December to tell them this change is coming up.  

We wanted to reassure them that although references have been assumed to be confidential up to this point, that if they have shared the contents with candidates they should not worry.  

From the point that this change goes live, they should not share any references which are explicitly marked as confidential.
