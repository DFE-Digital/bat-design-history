---
title: "Application sharing content changes"
description: Implementing findings from the content testing.
date: 2025-09-26
tags:
  - Find a candidate
  - Application sharing
  - Content
---

## Background

In August and September 2025 we did some [user research to understand weaknesses in the content about application sharing](https://becoming-a-teacher.design-history.education.gov.uk/apply-for-teacher-training/application-sharing-testing/) in Apply for teacher training courses.

Based on the discovery research we had a hypothesis that people were not fully aware of what they were signing up for. Whilst this wasn’t reflected in our healthy opt-in rate, we wondered if it was impacting the downstream journey. For example someone opts-in, doesn’t fully understand what they have opted-in to, receives an invitation to apply to a course, ignores it because they don’t know where it’s come from or why.

The user research across 3 rounds (highlighter testing, unmoderated interviews and moderated interviews) showed that:

* participants often did not understand that they would only be visible in the list for providers when they had no other applications in-flight
* participants expected and wanted to be visible all the time
* fee-funded is not well understood as a term to describe courses with fees to pay
* there is sometimes a preference for waiting to be invited to apply over applying proactively to courses  
* information on an FAQs page was perceived to be useful but it was not accessed by all participants
* it wasn’t clear to participants in the moderated round that they were setting preferences for application sharing, separate to their other applications.

There were also findings around people being unclear what data was shared about them and for how long, what the process of application sharing was, and what the invitation to apply for a course meant. Outside of application sharing, it was not well known to participants that they could only apply for 4 courses at a time, up to a maximum of 15 in a cycle.

## What we did

### Content mapping

We identified the pieces of information that candidates need to know in order to make an informed decision about opting-in to application sharing and understanding the process and the implications of their choices at each stage.

These were:

* what is application sharing?
* what data is visible?
* how long is it visible for?
* can I opt out?
* when are you visible to providers?
* why are you only visible some of the time?
* you must continue to apply proactively to courses
* what courses could I be invited to?
* invited applications count towards my application total
* step-by-step process

We then mapped these pieces of content across the application sharing journey. Doing this meant we could easily see where people first become aware of something, how frequently we make them aware of it, whether it’s on a transient screen or somewhere they can refer back to and whether there’s any information we’re not giving them at all.

![Diagram of the pages in the application sharing journey with the content items mapped along it](as-is-content-map.png)

Missing completely from the current flow is:

* what data is visible?
* how long is it visible for?
* you must continue to apply proactively
* step-by-step process

We don’t make people aware that they can set preferences to guide the kinds of invites they receive until after they opt-in. We’ve seen some responses in our opt-out free-text reasons that say people are not opting-in because they have specific areas in mind, so it feels important to make them aware that they can set locations up front.

### New flow

To address the information gaps we introduced 4 new steps in the journey:

* a confirmation screen at the end of opt-in
* an email confirmation of opt-in
* an inactivity nudge email (remains in backlog pending further investigation)
* additions to the how application sharing works screen (not a new screen but around 80% new content)

![Diagram of the pages in the application sharing journey with more content items mapped along it](to-be-content-map.png)

This means we can create a stronger ‘information scent’ so that users’ knowledge is built throughout the journey with important information repeated across several touchpoints. The hope is that this solves the problem ‘people value the information on ‘how it works’ but they do not access the page’ because they can also get that information on the opt-in page, the confirmation page and the email confirmation.

Having more touchpoints in the journey also means we can link to the ‘how it works’ page from more places, to hopefully funnel the people who would benefit from the information there to it. We have also moved it above the radio buttons on the opt-in page to give it more prominence and also have it in a more logical place for people who want to know more before they make their decision.

### Locating users in the application sharing flow

We added the [heading caption](https://design-system.service.gov.uk/styles/headings/#:~:text=%3C/h3%3E-,Headings%20with%20captions,-Sometimes%20you%20may) to each H1 in the application sharing flow so that users can see that they are setting preferences for application sharing and not their applications in general.

### Fee-funded courses confusion

We discovered quite early in the moderated interviews that the term ‘fee-funded courses’ was understood differently by people.

Some thought this meant courses that received funding from a third party which is not correct. Some who saw it next to ‘salaried courses’ understood that fee-funded were courses they had to pay for but mistakenly thought they could not get loans or other student finance to help them.

In an early implementation people thought that the question was asking them to select either fee-funded or salaried, rather than salaried only or fee-funded and salaried.

![Asking if fee-funded or salaried would be considered, with a warning component about salaried routes](fee-funded-question-original.png)

Including the link to find out more about scholarships and bursaries also caused some participants to associate fee-funded and salaried with bursaries and scholarships more closely than they are. International candidates who are not eligible for scholarships and bursaries also found this link off-putting.

The intention of the warning text was to steer people who were only selecting salaried courses towards courses with fees to pay, and let them know that whilst they will have to pay a fee, they can sometimes receive financial support in the form of bursaries and scholarships – which could open up the fee-funded route to more people.

However, the warning component was too prominent and alarming for candidates and whilst we didn’t specifically test with people who were pursuing a salaried route, participants said that this would cause them to select fee-funded because they were worried about not getting any chances if they chose salaried. We have seen a small number of salaried courses offered through application sharing, so we don’t want to force people to select fee-funded out of fear when there is a small chance they could be offered a salaried course.

We made the response options clearer so that people understood they were selecting both funding types or salaried only. We also changed ‘fee-funded’ to ‘courses with fees to pay’ which was much better understood.  

We deprioritised the help link by placing it next to the button as a secondary link. We changed the link text and destination to be more about general course funding rather than bursaries and scholarships to make it relevant to all users and not just those who are eligible for funding.

![Asking to select between courses with fees to pay and salaried routes](fee-funded-question-v2.png)

### How application sharing works page

Our intention in testing this page with users was to find out what information on it was useful and at what stage in their journey. We know that having an FAQs page isn’t good content design and we planned to take the content on this screen and include it in context on other screens.

However, research participants said that they liked having a single place where they could refer to information like this at any time. Having this content only in the opt-in journey, which is transient would mean that people would lose access to this information should they want to refer back to it. They also found the details components a good way to structure the content because they could access only the parts that they wanted on each visit.

We decided to keep the how it works page for now.  

One of the benefits of the page is that we can give context to some more complicated concepts involved in application sharing.

**Visibility**

The most complicated thing for people to understand is when you are and are not visible when you have opted-in. We explain the specific application statuses that this applies to, when it stops applying and why this is the case. In the research when the reasons for hiding candidates from other providers were explained, most were accepting of them.

New content:
> When you submit a new application choice, we will hide you from the list until the training provider has made a decision. This is to give the course you have just applied to time to review your application properly.

This also frames the reason you are hidden as a benefit to the candidate - it’s to make sure your applications are given proper consideration and not rushed to a decision.

**What kind of courses you can be invited to**

Our opt-out data shows that people are hesitant to commit to application sharing because they have specific requirements from their courses and don’t feel these will be met by application sharing.

It’s important to let people know that they have some degree of control over the types of courses they can be invited to. By setting preferences they can manage how they appear in filtered lists (note that this does not prevent providers from inviting them to courses they have not specified a preference for).  

The idea of choice came up a bit in the research. Candidates were unsure whether they would be tied into a course if they were invited to apply. We have made it clearer throughout that they can decide whether to apply or not, there is no obligation.

**Data sharing**

When participants saw that some of their data is not shared with providers, they saw this as a positive. This was particularly true of international students and candidates from different ethnic backgrounds who mentioned bias in the recruitment process.

> “I like that they can't see my name, because of bias” 
> - International participant in Nigeria.

People also liked that providers could not see why past applications had ended without success.

We are also able to provide information that was mentioned as being useful (although not by lots of participants) about how long data is shared for (until they opt-out, receive an offer elsewhere or at the end of the cycle.) It wasn’t clear to people what ‘basic information about where you have applied before’ referred to so we have made it clearer that this means the name of the provider and the course that was applied to.

## Next steps

It would be useful to monitor usage of the ‘how application sharing works’ screen using our standard analytics but also Microsoft Clarity to look at scroll depth to understand how much of the content people are consuming and whether we need to change the hierarchy.

It would be good to know where people are accessing the page from in the journey (as it’s linked to from several places now) to tell us at what stage they feel they need extra help.

If we notice that people are not accessing the screen then we could assume that they are getting the information they need elsewhere in the service, for example in the confirmation email. If this is the case, we could look at removing the how it works screen, following content design best practice.

We should continue to monitor opt-ins to give ourselves confidence that adding more content to the opt-in screen has not negatively impacted rates. If a drop in opt-ins is noted, it will be important to compare it to any changes elsewhere in the journey to understand whether it’s a case that the extra content has caused people to drop out of the journey completely, or that they now understand more about the feature and can make an informed decision to opt-out.  

If the opt-in rate declines, but the application rate remains the same or increases then I don’t think there’s a problem with having more content on the opt-in screen – fewer informed opt-ins are better than more disengaged opt-ins.  

We have not taken the nudge email (sent to candidates who have been application sharing for some time, not received an invite to apply and not drafted or submitted any applications themselves) forwards at the moment.

We think this would be a good targeted intervention for candidates who are potentially waiting for be invited rather than applying themselves. However we need to understand more about the reasons people stop applying for courses, the other email nudges that are sent, and when before we can take this forward.
