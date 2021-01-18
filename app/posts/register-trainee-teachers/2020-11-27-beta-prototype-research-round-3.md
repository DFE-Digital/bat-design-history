---
title: Beta prototype research (round 3)
description: Continuing research into the provider-led journey
date: 2020-11-27
related:
  items:
  - text: Lookback recordings
    href: https://lookback.io/org/dfe-digital/projects/register-i-round-3-i-ao-provider-led/rounds
  - text: Raw findings
    href: https://drive.google.com/drive/u/0/folders/19Ir3HwBuwOVg50cFm3dDi2-EfQ1ZmY4I
  - text: Research Plan 
    href: https://docs.google.com/document/d/1bppLVBhXxf-rOSR6GVzIXx1Oifgc9wdr2BrjmNKerqI/
  - text: Research playback
    href: https://docs.google.com/presentation/d/1t5uAjPsI_Y6cnHO9o5__XFfQeMzdX9o54Gz1Yy7a3Ew/
  - text: User needs
    href: https://trello.com/b/5WZeE54R/register-trainee-teachers-user-needs-board
---

The objective of our third research round was to achieve confidence in the proposed ITT data input for the assessment only (AO) route while continuing to improve our provider-led (Pl) journey.

Since UR round 2 we made some key changes to the prototype:

* added the sign in journey
* changed the process of inputting programme data from manually typing the data to [selecting courses pulled from Publish](/register-trainee-teachers/picking-publish-courses/)
* changed the [process of recording the assessment outcomes](/register-trainee-teachers/recording-training-outcomes/) to include failure and course extension

The intention was to answer the following questions:

* How do users that are responsible for multiple providers (e.g. lead schools) manage data? 
* What are the habits and needs around early data input and submitting for TRN (prior to course start)
* How do providers refer to their courses and how familiar are they with the Publish course codes?
* Do users understand our review and confirm features, as well as our error messages?
* Are we meeting user needs around navigation, specifically searching for and sorting  trainee records?
* Are we meeting user needs around recording assessment outcomes, especially alternative & negative ones?

## Who we tested with

* South West Teacher Training SCITT
* Inspiring Teacher Training SCITT
* Lincolnshire Teaching School Alliance SCITT
* North Manchester ITT Partnership
* The Tommy Flowers SCITT

## Research findings

### Sign in

There's an immediate brand recognition of BAT and the request to cross-link between the services (e.g. create a landing page/hub at sign in from which they can get into Manage, Publish or Register). This coherence adds to our users’ confidence in our service.

>“I like the continuity between the systems. At the moment all the systems I’m using are completely different to each other, they’re asking for different information. Whereas this is using all the same terms, all the same language, it’s a lot easier to find things. Even down to how it’s structured and formatted on the page it’s easier to see what you’re looking for. Definitely prefer this once it’s all set up.”

>“Would be good if you could get to the services like Manage, Publish and Register more quickly, for example through Google. There isn’t a landing page for these services. In a perfect world you’d have Apply, Publish and this all available on there.”

### Early drafts and requesting TRN

Currently the process of “registering trainees” seems to be viewed as one activity that starts with uploading data onto DTTP and finishes with putting the record through for TRN as a final step.

If we enable providers to input data throughout the year, then creating drafts early and submitting them for TRN once trainees have started become two distinct actions.

>“DBS isn’t done earlier than 3 months before the start of the course - this is part of the process of moving people from conditional to firm offers. This means putting people on earlier than August is unlikely.”

>“I wouldn’t submit them for registration until I was 100% sure they are on the course. I think it can cause issues trying to take them off.”

>“I don’t add data early because all of the updates and changes to the system happen in the summer. I do it all together so I get a list of TRNs together.”

#### Registering trainees early

So far there is no interest in submitting for TRN early, before trainees have started the course.

#### Creating drafts early

Users did respond positively to the possibility of creating drafts as soon as they have the data - throughout the year. Yet despite this most also said they would still prefer to upload all the data in one go in September.

>“I don’t work over July/August. I [...] start uploading when I get the opportunity in September. 
>
>If I managed to move the way we work back [and] had more time in July then I might [input data earlier]. If we’re still interviewing, we would end up with part-done, part-not-done [records], it would get a bit disjointed. 
>
>To do that in July would take me away from other stuff, but it might be helpful.”

Our system currently supports creating drafts and submitting records for individual trainees. If we were to enable submitting a group of draft records in one go, we may need to rethink [how we display drafts](/images/register-trainee-teachers/beta-prototype-updates/2020.11.02_12_29_04_Trainee%20teachers%20-%20Register%20trainee%20teachers%20-%20GOV.UK.png) in the user interface. 

### Homepage

The homepage seems to work well as a springboard into our service. Users understand the statuses and appreciate them as shortcuts to the filtered records. Users understand what cycle the information relates to. 

>“That’s really good because a lot of the time [in DTTP] there’s no clear indication of how many I’m waiting for. This is really clear what the status of everything is.”

### Registering a candidate

There was some confusion about the difference between ‘training details’ and ‘programme details’. Some users filled in personal data first because:

* this is how DTTP does it
* it gives the draft a name

> “I haven’t selected the person yet, so maybe there’s an anonymous person that’s started, but if there were multiple people it would be hard to pick this record back out from a group”

### Programme data input

Pulling data through from Publish is a good solution for programme data input. The providers we tested with had a good awareness of Publish and confidence in their courses being listed on it. They did not necessarily record the course code currently, but knew what it was and how to find it if needed.

>“I know the course codes for Primary salaried and Primary training by heart. Otherwise I’d look on UCAS but I don’t have to on Manage. Internally we’d write the subject title.”

>“Useful that this has already been populated - I assume it comes through Publish?”

Subject and course code seemed to be the most important details needed to identify a course. We [adjusted the prototype](/images/register-trainee-teachers/picking-publish-courses/asking-for-publish-course.png) to respond to this feedback during the testing round - removing data that did not help users identify a course. 

The current design works well for picking from around 10 courses or less - but we have providers that offer up to 90 courses, and we need to make sure our solution works for them too.

> “Title and code is enough for me. Differentiating by primary and secondary might help, if you’ve got a lot of codes.”

### Confirming data input and error messages

Users liked the idea of checking their work using the section confirmation pages  and understood the progress labels. 

> "The ‘Completed’ button says ‘I’m happy with this section‘, and that this is ok to be saved against that record."

> "There could be certain sections where I’d want to save a partially complete record. [It should then show] in progress or draft."

Users also understood different error messages and were able to adjust data to submit easily.     

### Negative assessment outcome

Our flow around assessment failure does not reflect the real process.

#### What we thought happens

Trainees go through a standard assessment and can either pass or fail it. If they fail it, they either drop out or get a course extension at the end of which they are being re-assessed.

#### What really happens

Currently a trainee is either withdrawn if they’re unlikely to pass assessment, or they get an extension if they’re likely to pass but need a bit more time.

'Failing' is considered a rare exception. Failing and then staying on the course is entirely unrealistic.

>“We’ve never had anybody fail. Something would be implemented before that, a remediation stage - 3 week period to make sure they pass. Or we extend the course in which case I would change the [programme] date.”

>“Normally they would withdraw before this point. They’d be informed of this process, it has to be ratified by executive boards, lots of paperwork before this point. We wouldn’t offer an extension to someone who isn’t going to get there regardless.”

Read more on what [our users said about 'failing'](/register-trainee-teachers/recording-training-outcomes-iteration-2/#what-our-users-said).

Users act responsibly when it comes to updating outcomes on DTTP, but because an extension is not considered a formal "outcome" it is currently either not recorded at all or falls under deferrals.

>“It isn’t the case that an extension would be as a result of a failed assessment, it would be done preemptively. We don’t change anything on the DTTP until the final judgement about their position.”

Lookback highlights:

[What happens if a trainee fails?](https://lookback.io/watch/Hqxvr2mhA37qBnTJ5 ) 
[When do you make this decision?](https://lookback.io/watch/2Top4tRiz4MJwpM3u) 

### Handling ITT data for several organisations

There seems to be a range of undetected needs around handling ITT data for several organisations. So far we have learned that there might be different levels of authorisation and responsibility between DTTP users of one organisation.

>“I’ve got a central role so I work across all our 5 partners. My local admins can only see information for their providers, which is good due to GDPR. If it works in that way, that would be useful.”

>“I did [the data entry] provider by provider, all by myself, but now the individual admin does their own cohort and I go in and check everything.”

The responsibility across several organisations may impact the way drafts are being set up, trainees are being registered and recommended for QTS.

>“We have the annual cohort for this year, we have cohorts for each of our 5  partnerships as well.”

>“Our partnerships all have slightly different assessment dates, different across the counties.”

We will likely have to make a design decision:

1. Do we split data by provider and let the user enter a provider-specific mode?
2. Do we show them all the data from the providers they work for, with the option to filter by provider?
