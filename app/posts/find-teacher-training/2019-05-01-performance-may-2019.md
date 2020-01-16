---
title: 'Performance report: May 2019'
description: After 4 months of transitioning providers from UCAS course management to DfE course management, this report focuses on the candidate facing tool and what sorts of behaviours have been coming out of our analytics.
---
The last 4 months have been provider focused. Since the start of 2019, the Find team have been working closely with UCAS to ensure that all training providers with permissions to recruit for postgraduate ITT courses in recruitment cycle 19/20 have access to the new DfE owned course management features.

This means that providers will now only use DfE's Publish teacher training courses tool to create, manage and enrich courses for postgraduate ITT, rather than having to jump between UCAS course management and DfE Publish courses.

After 4 weeks of transitioning providers through incremental batches (25 providers transitioned in the first week, 30 in the second week, followed by 444 in week 3 and the remaining 1398 in week 4) without any hiccups, the Find team have spent the following weeks working alongside providers to clean up their course data (editing locations, vacancies and course details) and continuing build work to deliver additional publishing features ahead of Rollover during the summer.

That being said, Find usage has been steady. The service has had an average of 14,925 users visiting per week over the past six weeks. Whilst this is down 2,663 users on the previous six weeks, it is 926 short of the average weekly rate since launch. Similarly, users are consistently spending ~5 minutes on the service managing to step through an average of 5.2 pages per session. As a reminder, a user will need to step through 4 pages in order to visit a course details page. This implies that your average user keeps their searches down to a minimum. A later dive into various user personas highlights this fact.

In comparison, a successful user (one that visits at least one course details page or clicks on an external links), on the other hand, spends an average of 9 minutes and 48 seconds on the service and visits ~8 pages. If we consider this our benchmark for good, below we will dive into where users may be disengaging and introduce some user personas based on historic research and google analytics data. We will use these personas to find drop off points in the service and write stories that enable us to develop more optimal journeys for these user personas.

It is worth noting that, given the limitations of Google Analytics (we cannot view data on a per session level), we have had to aggregate our analysis for each persona. As a result, we have developed specific assumptions for each persona based on their underpinning characteristics and behaviour. For example, we know that a knowledgeable explorer visits on average ~6 pages per session (more than a pageview per page in the service) and, given the amount of time spent on each page, we assume that any additional page is either a revision to their location or subject search, or a new course details page.

One thing we would like to explore as a team is whether there are other Big Data tools out there that might be able to give us a slightly more granular and malleable view of our service performance data.

You can [see the live report in our dashboard](https://datastudio.google.com/reporting/1M4DgevUBtTVwS09bEpWbkhPxxFqNOBjt).

### Contents

[[toc]]

## Find personas

As mentioned above, in order to analyse drop off points in the service, we need to develop an understanding for how our users behave. That being said, it would be naive to assume that all users operate, and behave in the same way. They have different motivations, levels of knowledge, and understanding when they hit our service and, as a result, use our service differently. As a starting point, we have decided to create personas based on one underpinning assumption, that anyone who hits the service wants to 'explore' and two schools of thought:

* People's level of knowledge around teaching differs and therefore their level of engagement and time spent on the service might vary
* People move forwards, backwards or decide not to progress in their journey

Our three personas can be defined as follows:
* A surfer: a user who has little knowledge of teacher training, who hits the site to perform a rough exploration of the tool and its results.
* A knowledge explorer: they have knowledge of the profession, but not of the options available and want to perform in depth searches to unpick their needs and identify the right types of providers, courses and financial options.
* An information seeker: they realise they need more information and jump off - going on to provider websites, back to get into teaching or to seek advice from a TTA.

### Example personas – where are users struggling

#### The surfer

A user who has little knowledge of teacher training, who hits the site to perform a rough exploration of the tool and its results. we anticipate a surfer may view course details pages but will not engage with the content.

The surfer persona can be validated by exploring our users' usage of the service; by splitting our users up based on session duration. For example, we hypothesised that the surfer represented a % of our user base who spent little time on the service and most of it up front exploring the filter options available. Given the average time spent on the service is around 5 minutes, for the purpose of this exercise, we have capped the average surfer session duration at up to 90 seconds.
Diving into the data, we can see that the surfer represents approximately 34% of our user base. On average, a surfer has an 11.9% chance of leaving the service at an undesirable point. Some context on a surfer's journey, your typical surfer might spend more than 55% of their time navigating the location and search filter pages. They have tendencies to exit the service when hitting a no results page. For example, if a surfer were to search for a Dance course with a 5 mile radius of Horncastle, LN9, we would anticipate there to be a 37% chance of the user exiting the service when they realise there are no courses within 5 miles.

In this instance, Find may be the surfer's first engagement with ITT content and, whilst we provide them with suggestions to refine their searches and find courses that are near them, it might be that we can optimise the journey of a failed surfer's search by pointing them to further information on teacher training courses through Get into Teaching, or suggest alternative subjects that are on offer near them. For example, we know that users who search for Dance also have a tendency to perform subject searches against Drama, PE and Primary courses. If you were to include these subjects in their search, they would meet a results page of 7 subjects listed and this might increase the likelihood of them visiting a course details page.

Additionally, we notice that a surfer has a 15% chance of exiting the service when hitting only the third page of the service, the subject filter page. Here we hypothesise that surfers are progressing as a persona, from casually exploring teacher training to deciding that they actively need to seek more information on specific subject matter, thus becoming an information seeker. We will need to test this hypothesis through candidate research, but we anticipate that users exiting the service at this point in the service do so to seek further information perhaps on financial incentives or to explore qualification requirements for particular subjects. We actively want to encourage this behaviour and, if the user has decided that this is required, we need to research if there are mechanisms we can provide to better help them source what they require.

#### The knowledgeable explorer

They have knowledge of the profession, but not of the options available and want to perform in depth searches to unpick their needs and identify the right types of providers, courses and financial options.
In this instance, we'll look at users on the opposite end of the spectrum. Those whose sessions average between 91 - 370 seconds.

The knowledgeable explorer represents the remaining 66% of our explorer personas. They have a significantly lower exit rate when hitting a no results page (~11%). Determined to revise their searches, we see knowledgeable explorers revisiting their location and subject filters (e.g. editing radius, or abstracting their location search - street name to town name - adding additional subjects), spending on average 31 and 42 seconds on location and subject pages, respectively. The impact of this being that ~46% of knowledgeable explorers end up visiting at least one course details page. Comparatively, less than 10% of users who spend less than 91 seconds on the service end up visiting a course details page. As a result, we start to see a correlation between filter tweaking and successful Find content engagement. This further supports our conclusions above that we should nudge our surfers to re-engage with our filters and tweak their searches.

The analysis so far has been about how our users have been engaging with the service. Interestingly, when digging into what these users were searching for we noticed some anomalies. Noticeably that SEND courses came up as 10th in their top subjects searched for. Given there are only 63 SEND courses available through Find, we decided to explore the hypothesis that we were giving too much prominence to SEND courses. To do this, we analysed SEND against Primary (top subject applied to), Geography (mid level subject searched for) and Dance (similar volume of subjects). From this, we gathered that SEND courses were generating 3x the number of visits than Primary courses and 4.5x that of Dance courses on a per course basis. As a result, we have decided to prioritise a re-design of the subject page on Find to de-emphasise SEND and Further Education and to place greater emphasis on higher priority subjects.

#### The information seeker

They realise they need more information and jump off - going on to provider websites, back to get into teaching or to seek advice from a TTA.
We first established the existence of information seekers back in Alpha when candidates highlighted the need to source more information about financial incentives and a desire to contact providers to find out more about the locations of their courses and the structure of their courses as a whole. From our analytics we can see that information seekers make up ~20% of users engaging with the service. There are currently over 1,700 external links on the Find service, 97.8% of which are found on course details pages and are predominantly links to provider websites.

To paint a picture of what information seekers are looking for, ~80% of users who click an external link end up being handed off to UCAS or a provider website. For the 14% of users who jump off to Apply, their intentions are clear and, as previously mentioned, from our research, we know that when a candidate looks to jump off to a provider website it is either to find teacher training contact information or to read a bit more about the provider themselves before submitting an application. This indicates a positive, forward looking approach for information seekers. However, we would like to test this hypothesis through further research to better understand the expectations of our information seekers when jumping off from a course details page. We have questions, such as: what is their typical journey, do they return to our service and how long after leaving might it take them to decide to apply?

Furthermore, there is a group of 20% of information seekers, around 20,000 users, who have chosen to move back in their journey - to find out more information about teaching as a profession either through direct TTA advice or by going to Get into Teaching (GiT). These links are present throughout the service, however, 55% of users who opt to jump off to GiT or TTA services do so on the subject filter page. While the remaining 45% are clicked on either through the results, or a course details page. This indicates that the majority of users (11,000) who opt to move back in their journey chose to do so early on in their journey through Find. This positively re-enforces the service design. However, once again, we would like to research further with these users to get an understanding of their journey once they leave Find postgraduate teacher training.

For a large proportion of information seekers, like with the surfer, we currently do not have a good idea of where they go once they leave our service and we need to develop our understanding in this area.

## A quarter in review

### Success criteria

As a reminder, a successful journey is defined as, a user who:
* visits at least one course details page, or
* clicks through to any external link on the service (e.g. Get into Teaching or UCAS Apply).

Since the launch of our service, the site has seen 164,512 users complete a successful journey. This makes up 37.3% of our total user base. On average, a "successful" user will visit 8.6 pages per session, spending 9 minutes and 47 seconds on the service. This is around 2x the time spent by your average user, visiting 3 more pages per session. Over the past 2 months, we have seen a persistence in these averages and it appears as though behaviour is starting to trend out.

Given the above benchmark for visiting at least one course details page, and an agreed understanding that a candidate who visits a course details page is more likely to convert, we might need to consider different ways in which we can get surfers, knowledge explorers and information seekers to visit either more course details pages or get to a course details page faster. For users who are potentially less knowledgeable, or up to speed with the teacher training space, we might want to test a hypothesis that if we can present surfers with a course details page, within the parameters of their first session on the service, they will be more likely to continue to engage with teacher training. Albeit, we need to make sure we maintain the foundation principle that the course details pages they view meet their needs.

### Conversion

Thinking about conversions (how are users converting from Find to UCAS), we see that UCAS registrant figures are continuing to drop at a faster rate than the number of users on Find.

Since March, Find user volumes have dropped by a monthly rate of 5.7%. Comparatively, UCAS registrants have been dropping at a monthly rate of 13% (May registrant figures forecasted out at a multiple of 1.5x from 12/05/2019). Our hypothesis persists that, whilst users may be successfully moving on from Find, increasingly, the next step does not involve UCAS registration. This may mean that users are opting instead to source more information, looking to provider websites and Get into Teaching to find out more.

From our analysis of the information seeker persona, we have confirmed that this is likely the case. As a result, it looks as though a drop-off is beginning to appear in between services. Users who want to engage with providers before applying appear not to be converting following contact. This may be because they realise the provider is not for them, in which case are they coming back to the Find service? Or, potentially, is this because of a deeper loss of interest in the profession once speaking to providers? Whilst it will be hard to recruit candidates who fit this profile, it might be an important avenue to explore in order to better understand whether indeed there is a drop off following provider engagement or if the problem lies elsewhere.

## Conclusion

**There are improvements we can make in Find, but also a need to research along the service line.**

The above personas highlight the potential drop off points and areas for improvements within the service. This is not an all-inclusive analysis of our user groups, but represents the users for whom  we have the most robust data at this stage. As we continue to iterate the tool, and the data we collect to support it, we will hopefully see new personas develop and further iterations of existing personas that may help us identify whether functional changes made to the service have initiated a positive behavioural change from our users.

We will card up the above improvements and research hypotheses, recruit users that fit our persona profiles and run some thorough tests to assess their needs and further our understanding of their journey beyond Find.

Furthermore, as the recruitment cycle comes to a close, and schools close for the summer, our next report will be a look back across the past year. We will use apply data to provide an overview of how the two services have performed in tandem and reflect on the changes we have made to finding postgraduate teacher training courses.

In the meantime, feel free to [keep an eye on our dashboards](https://datastudio.google.com/reporting/1M4DgevUBtTVwS09bEpWbkhPxxFqNOBjt) and start familiarising yourself with some of the ways we’re looking at service performance.
