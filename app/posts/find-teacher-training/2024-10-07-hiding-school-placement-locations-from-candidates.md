---
title: Hiding school placement location information from candidates
description: Reducing the false expectation that candidates can select a placement location.
date: 2024-10-07
tags:
  - placement schools
  - locations
  - school placements
  - study sites
---

## The issue

We know that most training providers do not confirm their placement schools until further into the recruitment cycle, some not until the summer before the course begins. They cannot upload their placements when the cycle opens in October, so they enter either inaccurate locations or none at all.

We also know that some training providers, particularly higher education institutions can work with hundreds of placement schools over a wide geographic area. The administrative burden of uploading all of these locations into Publish is heavy, so some organisations enter only a selection of their placements, or none at all.

Whilst candidates have told us that knowing where they will do their training is the most important factor when selecting a course, having inaccurate or missing information does not support this user need.

When they apply for a course, candidates have the option of selecting a preferred placement school from a list:
![Placement selection radio buttons in apply - select your preferred location](apply-location-selection.png)

Providers have told us that this is problematic for their recruitment and admissions processes. The list of placements that candidates are selecting from are frequently inaccurate due to the reasons mentioned above, and when candidates find out that they cannot have their first choice of placement, they are disappointed and some can withdraw from the application process completely (814 in the 2023 to 2024 cycle).  

The ability to select placement schools in their application creates a false expectation that they will be placed there, when in reality our analysis shows that only 26% of HEI applicants and 10% of SCITT applicants will receive their first choice of placement school.

There has been [some work in the past to try to solve this problem](https://becoming-a-teacher.design-history.education.gov.uk/apply-for-teacher-training/changing-the-question-about-locations/) but we know from recent research that the problem persists.

The ideal is for candidates to be able to see accurate locations when they are searching and applying for courses. The best solution is to make sure the data being input about placement school locations is accurate and complete, but without adding more administrative burden on training providers. We are investigating existing and near-future data sources (for example from the Register School Placements service) that we could use to populate this information on behalf of providers. However at the moment this data is not complete enough to properly solve the problem.

Because we are unable to show accurate data in the 2024 to 2025 recruitment cycle, we took the decision to remove it from the candidate-facing services so that they do not see it.

We hypothesise that this will solve the problem that providers have with candidates misunderstanding how much they can select a placement school themselves, so it’s a partial solution to some of the problems we are aware of.

## Training provider consultation

We sent a survey to providers in the Teaching Recruitment Bulletin and the Becoming a Teacher Newsletter in July 2024. We also consulted with the Universities Council for the Education of Teachers (UCET) and The National Association of School Based Teacher Trainers (NASBETT).

We asked them to let us know if removing placement school locations from Find and Apply would solve the problems outlined above.

We received around 80 responses to the survey and around 75% (60) said that this change would be welcomed. 25% (20)said that this change would negatively impact them.

Because the majority of providers were in favour of the changes, by default:  

* we will no longer show placement school locations to candidates on course pages
* candidates can no longer select a placement school when they apply

Providers will still upload placement schools because the location search uses this data to surface results to candidates.  

We asked the providers who would be negatively impacted for more information about how they use the placement school information in their processes.

They said that they **do** confirm their placements early in the cycle and they publish an accurate list of locations. They see it as an advantage in the marketplace to be able to offer this certainty to candidates.

Some providers also told us that they direct applications to different areas or schools based on the placement school a candidate selects when they apply. Removing this functionality would negatively impact their admissions processes.

For these providers we will exclude them from the changes. Their placement schools will still be listed on course pages and candidates can still select them when they apply.

We will apply this change at an organisation level to the providers who have contacted us. We will do this manually for the start of the 2024 to 2025 recruitment cycle, but we have designed a user interface for providers to toggle the display of placement schools on and off themselves.

![Radio buttons to show or hide placement locations from candidates](publish-show-hide-placement-locations.png)

When they have locations toggled on the list of placement schools will be accessible from the course page:

![Course page with locations accessible from a link](/app/images/find-teacher-training/hiding-placement-school-locations/placement-location-course-page-location-toggled-on.jpeg)

## Candidate view

The search results and course pages will show the distance from the search location to the nearest placement school and study site, where these have been entered by the provider.
The placement location will specify that it is a potential location, that it can change and is not guaranteed.
Where no locations have been entered by the provider, 'not listed yet' will be shown.

There is a content box-out on all course pages which gives more information to candidates about how placements will be selected for them. The intention is to reassure candidates that their individual situation will be taken into account and the provider will select a placement that works well for them based on several factors.

This content is consistent across all provider types, there is no variation in the location information shown. This is a change from having variations of the content depending on the provider type. We felt that this highlighted internal structures which were not important to candidates when searching for courses.

![New locations design in Find with reassuring how placements work content and no specific addresses](/find-teacher-training/hiding-placement-school-locations/placement-location-course-page.jpeg)

### Usability testing

This was tested in August 2024 with candidates and the following findings were highlighted:

* the content about how candidate placements are selected by providers was reassuring to candidates, they agreed that they had enough information to proceed with their application
* it was moved to above the location information on the course page so that candidates would read it first, when it was positioned below the location information it was missed
* candidates understood that the distance stated in the search results was subject to change, although they did not expect to be placed anywhere outside of their search radius (which is not the case, they could be placed anywhere there is an available placement)
* 'where you will study' was an acceptable alternative to 'study site' and was understood by all participants
* the placement school location was more important to candidates than the study site location because it is where they would spend the majority of their time
* whilst all candidates understood 'not listed yet' and agreed this was better than a blank line, they would want this information before starting the course (importantly they did not need this information before starting their application)

## Next steps

We held a co-design workshop with providers on 30 September where we asked about the value of collecting information in the application about candidate's circumstances that would help them to select a placement school. It was agreed by all participants that this would not be a good use of the Apply service.

Providers told us that they all follow different processes and collect different data. To standardise this data collection as part of the application process would introduce unnecessary complexity without solving a whole problem for providers.
There was some concern that asking candidates how long they can drive for, what days they can travel on and other questions could again create the false expectation that providers will be able to find them a placement that meets all of their specific requirements.

Currently the show/hide locations toggle is set at a provider level. We will monitor use to see whether creating more granular controls is needed, for example the ability to show or hide locations on individual courses.

We will continue to review the possibility of using data from the Register School Placements service to pre-populate location data in Find and Apply. Ultimately the best solution to the placement school problem is to have reliable and accurate source data and this seems like the best way of assuring that at the moment.
