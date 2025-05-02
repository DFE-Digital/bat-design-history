---
title: Find a candidate
description: Helping unsuccessful candidates reapply for initial teacher training courses.
date: 2025-04-23
tags:
  - reapplication
  - find a candidate
---

## Background

In the 2023 to 2024 recruitment cycle our analysis showed that:

* 25% of eligible candidates (7,597 candidates in total) didn't get any offers
* 6,687 eligible candidates who received a rejection never got an offer
* 24% of these unsuccessful, eligible candidates (1,877) specifically missed out on at least one of their application choices, because the course was full

We are defining eligible candidates as candidates that sent at least one application choice to a course where they:

* either didn't need a visa, or the course sponsored a visa
* had a degree grade that matched the course requirements
* had a degree in a subject that matched the course requirements

So we know there are unfilled vacancies on initial teacher training (ITT) courses each year and that there are suitable candidates who could fill them.

Research has shown us that following a rejection, candidates feel demotivated about the recruitment process which stops them from submitting further applications.

Our reapplication rate indicates that candidates don't always know which courses to apply to initially. This leads to repeated unsuccessful outcomes when they select a route or course that isn’t a good fit.

### Email course matching pilot

In June 2023 we conducted an email pilot to encourage 2,367 recently rejected candidates to reapply to training providers who had spaces on their courses.

7% of these candidates went on to submit an application, but the rejection rate was high due to the email being sent late in the cycle when lots of courses were already full. Candidates were also not directed to a specific course which could account for the high rejection rates. 81 candidates were accepted onto a course which showed there was some value in nudging recently rejected candidates to reapply.

### Provider recommendations research

Also in 2023 there was some [research with training providers](/manage-teacher-training-applications/letting-providers-recommend-candidates/) to measure their attitudes towards recommending candidates that they are not offering a place to, to other providers.
Our designs tested well but users had more detailed questions of how the shortlist would work in practice

## What we did

We built on the 2023 experiments by prototyping a way for candidates to opt-in to the candidate list, and a way for providers to view the list and invite them to apply to courses.

Our hypotheses were:

* if unsuccessful candidates were invited to a specific course by a provider, they would be likely to submit an application
* if providers could access candidate application details, they can successfully match candidates to courses

### Opt-in or opt-out?

There was discussion about whether being searchable by training providers other than ones you have submitted an application to should be something candidates opt-into. There was support for automatically making everyone who submits an application visible to all training providers, with the option for them to opt-out.

We were concerned that making the feature opt-in might limit the number of candidates available to search. However, the email pilot of the previous year gave us some confidence that candidates would be keen on the concept.

In a co-design session with training providers in December 2024 one of the concerns they raised about the concept was that candidates would not respond to unsolicited invitations to courses, which would waste providers’ time in sending them.

Providers were also concerned that candidates might be overwhelmed by emails. Making the feature something they can choose to engage with could mitigate this.

### Who should be searchable by providers?

We decided not to ‘pre-filter’ who can join the list of searchable applicants. This means we will not prevent anyone from opting-in based on their rejection or withdrawal reasons, their qualifications or any other information in their application.

If a candidate were applying in the standard application process, the provider would not have any of this extra information about them and would review their application based only on the data contained in it. We will replicate this in the Find a candidate applications process for now.

The December 2024 provider co-design session raised a concern about poaching candidates from other providers. To mitigate against this, candidates’ details will only be visible to other training providers when they have no other applications in any of these statuses:

* Awaiting decision
* Offered
* Conditions pending
* Accepted

Unrelated research into withdrawal reasons raised the prospect that a candidate could withdraw their application, giving the reason ‘I do not want to train to be a teacher any more’ but not opt-out of Find a candidate. They would still be searchable and could receive invitations to apply which they will never respond to. We decided to remove these candidates from the list of searchable candidates.

### When should the list be searchable?

We considered several models for Find a candidate:

A single clearing window at the end of the recruitment cycle

* Benefits:
  * candidates would not be ‘spammed’ by emails, they would receive a single email with all of their invitations in it on a given date
  * Both small and large providers would be able to engage with the feature equally by assigning resource to it at a given time
  * Providers are aware of the remaining vacancies on their courses and can use the feature in a focussed way

* Drawbacks:
  * Disadvantages international candidates who need time to arrange visas
  * Candidates who have not heard back about teacher training by the end of the cycle are less likely to engage with invitations, they will have moved on
  * A condensed period of activity could be unmanageable for providers’ workload
  * It’s unknown when in the cycle this window would be best placed, it would likely be different for different providers so would advantage some over others by being inflexible

Multiple windows throughout the cycle

* Benefits:
  * More flexible to accommodate candidates who are rejected at any point in the cycle including international candidates
  * Reduced risk of candidate drop out as we can target them with reapplications closer to their initial rejection
  * More flexible for providers to adapt to their existing ways of working and processes throughout the cycle

* Drawbacks:
  * Potentially confusing for both candidates and providers about when and where and for how long the application windows are open for, communications about this could be ignored or forgotten
  * Unclear user need for an application window earlier in the recruitment cycle when proactive applications are coming in to providers
  * Risk of candidate drop-out remains, although it’s reduced by having windows nearer in time to their rejection than the single application window idea.

‘Always on’ throughout the cycle

* Benefits:
  * It would reduce the time between receiving a rejection and potentially receiving a new offer, we know this reduces dropout rates
  * There’s time for international candidates to arrange visas
  * It should be flexible enough for providers to be able to include it in their existing processes
  * Having a rolling application process is the same model as our existing application process which makes it easier to understand and engage with for providers and candidates
  * It gives providers a solution to their recruitment problems as soon as they become aware of them – if they are experiencing low application numbers at any point in the cycle they can find candidates to invite
  * It’s the simplest technical implementation of this idea and reduces the communications burden on our team

* Drawbacks:
  * Potential for confusion with our existing recruitment process, candidates could think that they don’t need to find and apply for courses themselves if they engage with this
  * Providers could cherry-pick candidates early in the recruitment cycle before other providers have engaged with the feature
  * Candidates could be overwhelmed by invitations throughout the recruitment cycle and disengage from the process completely.

We felt that the always on model had the most potential benefits, with drawbacks that we could mitigate for through research. This is the model that we designed for.

## Initial designs

When a candidate is submitting an application, we would show them an interruption screen asking them to opt-in to share their application details with training providers that they have not submitted an application to.

![Screenshot of an interruption page asking if candidates want to increase their chances of success by opting in](first-design-interruption-page.png)

They can change their setting at the bottom of Your applications

![Screenshot of the Your applications page with the option to change settings at the bottom](change-settings.png)

### Candidate research round 1

#### 27 February to 5 March 2025

We shared the prototype designs with 5 UK candidates to understand their attitude towards the feature, in particular sharing their data, and their ability to use the designs.

Findings:

* Candidates were positive about the concept and welcomed ways for training providers to contact them about courses
* Candidates were happy for their application data to be shared with training providers for the purposes of assessing their suitability for courses
  * 1 participant would want to see a data sharing agreement as part of their opt-in journey
* They found the interruption page between reviewing their application and submitting it confusing.
  * Some felt that it was unclear whether we were asking them to share the application they were submitting, or something else
  * Some felt that introducing the idea of the application they are submitting being unsuccessful was a negative experience
* Candidates would not want to apply to courses that do not match their preferences (for example full- or part-time, salaried or fee-funded)
* The location of the course the candidate last applied to is not the most appropriate location for us to match them to in search results
  * Candidates expressed a strong preference for locations that are local to them – their home address.
  * We did not test with any international candidates in this round of research, and home address would not be an appropriate location to match to for international candidates.
* Some candidates had some misconceptions about the feature, including:
  * They would be more likely to receive an offer if they opted in
  * They could stop applying for courses themselves and wait to be invited to apply
  * They can be contacted by training providers even when they have an application in-flight with another provider.

### The initial launch scope

We moved the opt-in interruption screen to after an application has been submitted to separate it from the current application.

![Screenshot of the interruption page with the application submitted success banner at the top](inital-launch-scope-interruption-page.jpg)

We added a way for candidates to set location preferences so that they will only appear in search results for courses that they can travel to.

![Screenshot of a page where you can define a location and a radius](initial-launch-scope-location-preferences.jpg)

We updated the content in the opt-in screen to highlight how this feature should be used alongside the current application process. We made a permanent home for this information, accessed from the bottom of My Applications, so that candidates can review it when needed.

![Screenshot of a page containing information about the feature](inital-launch-scope-interruption-page.jpg)

## Next steps

The launch email inviting candidates to opt-into the feature will be A/B tested to optimise for the most effective messaging.

We are aiming for 1,150 candidates (who are eligible to train to teach but have been unsuccessful so far) to opt-in before we release the provider side of this feature. This is to make sure there are candidates to search for when the search is released.

We will monitor live use of the feature including:

* number of candidates opting in to share their application details
* number of candidates opting out

There is a further round of user research planned to capture insights from international candidates and help us to identify features to add to the product roadmap.
