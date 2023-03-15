---
title: Letting training providers recommend candidates to other providers
description: Testing the idea of a ‘shortlist of eligible candidates’ where training providers can recommend candidates to other providers.
date: 2023-03-15
tags:
  - rejections
ogImage:
  src: /manage-teacher-training-applications/letting-providers-recommend-candidates/recommend-cover-image.png
  alt: "Illustration containing 2 screens: The first screen asks for the reason for rejection with a list of checkboxes. There is a green button below the checkboxes, once the user clisck on this, it goes to the second screen. Te second screen has a question that reads 'Would you recommend this candidate? Two radio selections are below the question followed by a green button."
---

![Illustration containing 2 screens: The first screen asks for the reason for rejection with a list of checkboxes. There is a green button below the checkboxes, once the user clisck on this, it goes to the second screen. Te second screen has a question that reads 'Would you recommend this candidate?' Two radio selections are below the question followed by a green button.](recommend-cover-image.png)

If a candidate meets all the initial teacher training (ITT) criteria, they can still be rejected for other reasons. We wanted to test the idea of a ‘shortlist of eligible candidates’ that training providers could recommend to other training providers.

Our designs tested well but users had more detailed questions of how this ‘shortlist’ would work in practice. We need to do more research on the idea so we've not implemented this into the service yet.

## The issue

Sometimes candidates get rejected by training providers, even though they meet the ITT criteria. This can happen for different reasons, including:

* if the candidate needs to improve their personal statement
* the course is full
* the provider thinks the candidate would be suitable for a different course
* the candidate’s degree is a 3rd class degree and the training provider only accepts a degree class of 2:2

## What we changed

On the page where we show the [preview of the email that will be sent to candidates when a provider rejects their application], we added a further question. The question asks training providers if they would like to recommend a candidate to join a shortlist.

This new question would only show if the [candidate meets all the ITT criteria](/manage-teacher-training-applications/helping-users-decide-if-candidates-meet-the-itt-criteria/).

![Screenshot showing a page with the heading 'Check details and reject application'. Beneath this is a preview of the email the candidate will be sent to show why they were rejected. Beneath this is a question asking 'Would you recommend this candidate?'. The answers the user can select are, 'Yes, the should be invited' and 'No, your answer will not be shown to the candidate'. Beneath this is a green button that says 'Reject application'.](recommend-candidate.png)

## Research

We tested this design with 9 training providers alongside other changes.

Most users found the concept of ‘recommending’ a candidate confusing. They had to read the question and hint text several times to understand it.

Users were not sure if it was their responsibility to recommend candidates. They felt hesitant to recommend someone and wanted more information on how seriously this recommendation would be taken.

Once they understood the concept, nearly all users said they would recommend candidates if their own courses were full. Some also mentioned they would recommend candidates if they had a weak personal statement because this would be a subjective assessment and other providers might be ok with the same personal statement.

Users were much more confident in knowing when they would not recommend candidates. For example, if:

* the candidate had a poor interview
* the candidate could not be contacted
* there were serious safeguarding concerns

## Future considerations

Overall, we think this idea needs more thought and testing on how it would work in practice.

Users had questions about how:

* the shortlist would be shared
* big the shortlist would be
* they could filter down to candidates that match their own set criteria

Users also wanted assurances that:

* candidates would understand that getting shortlisted wasn’t a definite 
* they would not have to commit to using the shortlist 
* they would have enough information about candidates on the shortlist before contacting them

We will not implement these designs yet until we’ve done more testing around the idea.
