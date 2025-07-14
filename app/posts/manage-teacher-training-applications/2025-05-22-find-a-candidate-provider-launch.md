---
title: Find a candidate
description: Helping training providers recruit candidates to their courses.
date: 2025-05-22
tags:
  - find a candidate
  - recruitment
eleventyComputed:
  eleventyNavigation:
    key: manage-teacher-training-find-a-candidate
---
## Background

Our analysis in the 2023 to 2024 recruitment cycle showed that over 7,500 eligible candidates did not get any offers.

Anecdotally training providers have told us that they can struggle to fill all the spaces on their courses. This was also borne out in a survey we conducted in December 2024 where only 3% (2) of providers surveyed said they always fill the available places on their courses.

There have been some experiments over the last few years to try to get more eligible candidates onto teacher training courses. This work is a continuation of those experiments.

You can read the [design history about the candidate side of this work](https://becoming-a-teacher.design-history.education.gov.uk/apply-for-teacher-training/find-a-candidate-initial-launch-scope/).

### Letting providers recommend candidates to each other pilot

[This experiment](https://becoming-a-teacher.design-history.education.gov.uk/manage-teacher-training-applications/letting-providers-recommend-candidates/) aimed to match unsuccessful candidates to training courses when they had been rejected for reasons other than whether they meet the Initial Teacher Training (ITT) eligibility criteria. For example, the course they applied to is full, there are no available placements, they have a third class degree and the course requires a second class degree or higher.

We trialled showing an additional question on the rejection screens (conditional on the candidate meeting the ITT eligibility criteria) asking providers if they would recommend the candidate they are rejecting to other training providers. The recommended candidates would join a ‘shortlist’ that other providers could browse.

Providers were unclear about whether it was their responsibility to recommend candidates and how far that responsibility went.

They also had questions about how:

- the shortlist would be shared
- big the shortlist would be
- they could filter down to candidates that match their own set criteria

Users also wanted assurances that:

- candidates would understand that getting shortlisted was not a definite
- they would not have to commit to using the shortlist
- they would have enough information about candidates on the shortlist before contacting them

This felt like a promising idea but one that needed more insights to make it practical.

### Co-design December 2024

As part of our 3-part co-design series of workshops with training providers, we shared some early concepts for a ‘candidate pool’ with them for their views.

The participants were generally positive about the concept. They had the following notes:

- candidates should opt-in to be contacted by other providers
  - this would make them more likely to respond positively to invitations to apply than if they received a ‘cold’ approach from a provider
  - there is potential for us to ask candidates for information about the types of courses they are interested in so we can match them to courses better

- knowing the reason a candidate has been rejected or withdrawn would make this feature more useful
- they are more likely to use a ‘candidate pool’ for recruitment at the end of the cycle if they still have unfilled spaces.
- They would be interested in either:
  - inviting candidates to submit an application
  - sending candidates an expression of interest for the candidate to respond to
  - requesting more information from candidates, particularly around locations they can travel to before making an invitation

They had some concerns about the concept:

- the increased workload of recruiting proactively from a list of candidates
- it could favour larger providers who are able to interview quickly, over smaller ones
- it could reduce the overall quality of candidates joining teacher training courses

### Survey December 2024

We sent a survey to 500 providers (around 10% of our total provider population) which was open to response between 4 and 9 December 2024. The survey’s purpose was to gauge initial responses to the ‘candidate pool’ idea.

It had a 14% response rate (72/500), of which 61% of respondents somewhat or strongly agreed with the statement:

> “I would like to be able to view available candidates who haven’t applied to our courses and contact them if I thought they were suitable”

## What we did

We prototyped a simple list view of candidates with basic filters to allow providers to search for candidates. The filters allow providers to match candidates by subject, location, full or part-time, under- or post-graduate and visa sponsorship.

Providers can click through to read an abbreviated version of a candidate’s application details.

They can then decide whether to invite them to apply to their course by generating a system email to the candidate.

![Screenshot of the search results with filters on the left](early-filter-design.jpg)

### Who should be in the ‘pool’?

We agreed that candidates should opt-in to be searchable by other training providers. The hypothesis is that people would be more likely to respond to invitations that they have some expectation of receiving.

We accepted the risk that this could mean fewer candidates available to search for.

We agreed that only candidates who have submitted at least 1 application should be searchable by other training providers. This gives us more information to be able to match candidates to courses to in the provider search, for example the locations and subjects of courses they have applied to in the past.

This was also something that came out of the co-design workshop in December when providers told us that adding everyone who creates a profile on Apply would create a list that is too big to meaningfully search and the workload would be too great for them to use the feature.

The other concern that providers raised in the co-design session was around ‘poaching’ - training providers targeting candidates who have an application in progress with another provider. Smaller organisations were particularly worried about this as they do not have the capacity to interview quickly, so were worried that bigger organisations with more capacity would be able to offer places to the best candidates more quickly.

Because of this concern, we decided that only candidates who do not have any open applications would be searchable. This means that candidates who are rejected, withdrawn or inactive are all searchable.

### Application details

We decided early in this project to trial anonymising the application details of candidates to reduce unconscious bias in the recruitment process.

This means that we obscured candidates’ names, removed their date of birth and disability information.

The initial round of research with providers showed that this was not an issue in itself, all 5 participants understood that the letter followed by asterisks represented a name and why we would remove that information. However, for keeping track of candidates throughout the process, they would need more specific identifiers, for example when shortlisting, sharing applications with colleagues or tracking who has applied from their list of invites.

We decided to apply a candidate number to the obscured names to support this whilst maintaining the anonymity of the candidates.

![Screenshot of the application details page](application-details.png)

### User research

#### March 24 to March 27 2025

Now that we had a basic design, we wanted to test the assumptions that we had made about the feature with more training providers.

We wanted to use data analysis to identify research participants who were struggling to recruit based on criteria that we defined. However, when we reached out to these training providers we had no response. This was mainly due to the short timelines that we had between recruitment and interviews. In future if we would like to target specific providers instead of either our user research warm prospects or our full provider list, we should leave more time to recruit.

We widened the scope to include more participants and managed to recruit 5 providers from a mix of organisation types.

This is a small sample size but we had a short turnaround time to release the functionality at a time in the recruitment cycle when it would still be useful. We intend to continue to discover new information and validate the insights we gained through data analysis of live usage of the feature and further user research which will give us more confidence in the design decisions.

Of the 5 providers we interviewed, all were receptive to the idea of searching for candidates in order to invite them to apply to their courses:

- 3 out of 5 would definitely try it out when it was released.
- a further 1 said it would depend on their workload as they are already stretched
- the final person said they would use it if they could see the rejection reasons of candidates in the list.

One of the main findings was that the number of people in the list could be unmanageable for training providers to search through, given how time-poor they are. A desire to filter by quality filters such as degree grade would help them to reduce the number of applications to read through.

The other big finding of this research was that training providers find it difficult to make a confident decision about whether to invite a candidate to apply without knowing why they have withdrawn or been rejected by another provider. It was felt that they could potentially waste time taking someone through to offer stage only to discover that they are unable to progress them.

## Updates following user research

### Rejection reasons

Despite the research findings pointing strongly towards rejection reasons being a requirement for providers, we decided to omit them from the initial launch scope.

The reason a candidate is rejected is often the subjective opinion of the provider who has rejected them. Our earlier pilot on recommending candidates to other providers also indicated that providers were not 100% comfortable having or taking responsibility for other provider’s decisions. When a candidate reapplies proactively, the provider they reapply with does not have access to their previous rejection reasons, they judge the application on its own merits. We wanted to replicate this in Find a candidate rather than introducing information that providers don’t usually have into the recruitment process.

The research findings indicated that whilst providers wanted to know the rejection reason, they wouldn’t necessarily discount someone from the selection process because of it.

They said things like:

> “If they’ve been rejected because their degree doesn’t meet the criteria, that’s fine because we accept any degree grade”

Without telling them the specific reason a candidate has been rejected, some would infer the worst-case scenario:

> “Having the reason made clear would be better than guessing”

Other options they raised included:

- knowing how many times someone has been rejected or withdrawn
- knowing the status but not the reason
- knowing the reason category but not the specifics

This feels like something we should continue to monitor and review. Potentially sharing reasons that relate to the ITT eligibility criteria but not others could support providers to filter candidates more quickly and make good decisions.

### Changes to the application details

Because of what we know about providers’ concerns about time and capacity, it was important to make it easy to parse candidate applications for important details quickly.

During the research providers told us that they use these 3 main elements to shortlist candidates:

- qualifications
- work history and unpaid experience
- personal statement

Originally qualifications were at the bottom of the candidate application details, which would force providers to scroll all the way down to find this key information.

We also listed a candidate’s previous applications at the top of the page, including all of their personal statements. This made the application details page extremely long.

- We reordered the page to have qualifications, work history and unpaid experience and personal statement at the top in that order
- We moved all past applications to the bottom and displayed them as a table to make them easier to scan
- We decided to only show the most recent personal statement on the application details page, and to truncate it to 100 words with an option to expand to read the full text
  - providers judge spelling and grammar in a personal statement, they can do this with a smaller excerpt
  - providers are interested in candidates’ experience in the subject they are applying for, enthusiasm for teaching and interest in the age group they are applying to teach – these things will not vary much from statement to statement so there’s no need to include all statements in this view.

We hope that these changes will make it faster for providers to make a decision about whether to invite a candidate to interview by prioritising the information they find most useful and reducing the volume of information on the page.

### Including degree information in the search results

Providers told us that they would find it useful to filter candidates by whether they have a degree or not, and the degree grade.

Our data on degrees is structured for UK based degrees, but not for international degrees. Candidates can enter these as free-text when they create their applications.

Because there is no structured data for international degree types, it would be difficult to filter by degree type.

We wanted to make this information available to providers searching for candidates without forcing them to click through to the application details each time.

We decided to include the degree type and grade in the search results. There is a risk that this could add cognitive load to the results page and this is something we should monitor in future research.

![Screenshot of the search results showing degree results](qualifications-in-search-result-view.jpg)

### Adding a unique candidate identifier

Providers told us they needed a way to reliably differentiate candidates from one another. This would enable them to:

- share candidate details with colleagues in partner schools
- identify who they have invited to apply from the list of all applicants
- understand how valuable the feature is by knowing how many of their offers have come from it

Whilst we will design in-service sharing and shortlisting journeys beyond the initial launch scope, for launch it could be quicker to surface the candidate ID to providers and allow them use their offline methods to share and track applications.

The candidate ID is already in the URL for each application details page, so we are just surfacing it in a more user-friendly way for providers.

![Screenshot of the candidate ID](candidate-identification-number.jpg)

## Roll out and launch

We considered a pilot period with a phased rollout of this feature. This would have the following benefits:

- allow us to identify any issues with a small initial audience so that we can be proactive in solving them before releasing to the full provider audience
- validate the design decisions which we had low confidence in due to a small user research sample size using real data
- collect feedback in a controlled way through specified routes into the team

We decided against it for these reasons

- for the feature to be useful in this recruitment cycle, providers need to be able to use it sooner rather than later. A pilot period or phased rollout would delay the feature’s potential to impact on recruitment figures in this cycle.
- providers had received communication that the feature will be available in May so the deadline was not flexible beyond that
- we can mitigate some of the risks we identified through good communications and monitoring live data with a big sample size.

### Communications

We will contact providers several times about this feature to encourage take-up and answer some key questions that we predict will come up.

Starting on 24 April providers received an email from the Permanent Secretary which mentioned Find a candidate as a new way to recruit candidates. This email was followed up with more information about Find a candidate.

One of the key messages that we are keen to land is that Find a candidate is an early version of what this feature could become. We are releasing it now to learn more about how to make it optimally useful in future.

We are also recruiting provider participants for user research in the roll out emails. It’s important that we collect further insights about this feature so that we can improve upon the basic functionality we have launched with. We also need to validate the findings of the lean user research that we have done to date to improve our confidence in the decisions and mitigate some of the risks we identified throughout the process.

We will produce video guidance as this has tested well with providers in the past and we are keen to minimise questions to our Support teams if we can pre-emptively solve them.

We have also shared information about Find a candidate with The Universities Council for the Education of Teachers (UCET) and The National Association of School-Based Teacher Trainers (NASBTT) in their monthly check-ins.

We have made information available to Teacher Training Advisers (TTAs) as well so that they can encourage candidates to use this option to gain a place on a course.

## Next steps

An improvement that came up in user research that we did not have time to implement before release was the ability for providers to edit the invitation email before it is sent.

Some research participants said they would want to speak to a candidate on the phone before receiving an application from them. Others said they could include information about why they thought that candidate was suitable for their course to increase the likelihood of them submitting an application. We felt that allowing providers to personalise the invite email would bring some flexibility into the feature which could have several benefits. We will try to include this functionality shortly after the initial release.

We will monitor live usage of the feature including:

- the number of providers performing searches for candidates
- the number of invitations to apply to a course sent to candidates
- the number of candidates who apply from an invitation
- the number of offers made and accepted from an invited application

![Screenshot of the data analysis areas of interest including the pipeline of opt-ins to applications to offers](data-analysis-flow-chart.png)

We will also monitor the number of invitations individuals are receiving to gauge if they are overwhelmed.

We have planned further user research with providers to understand their use of the feature and ways we can improve it in future.
