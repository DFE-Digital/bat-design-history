---
title: Hiding the sex, disability, ethnicity and age of candidates report
description: Protecting the identity of candidates by hiding the sex, disability, ethnicity and age of candidates report until a provider has received applications from 10 candidates.
date: 2022-01-07
---
{% from "screenshots/macro.njk" import appScreenshots with context %}

Candidates are asked about their sex, disability and ethnicity in a questionnaire at the end of the application process. They are told that the information will only be given to a provider if the candidate accepts an offer from them.

We show this data in a report designed to [help users spot bias in their recruitment processes](/manage-teacher-training-applications/simplifying-how-we-help-users-spot-bias-in-their-recruitment-processes/).

If a provider has received very few applications it’s possible that they could identify a candidate based on the information in the report.

For example, if they’ve received only one application and the report says that they have one candidate with a disability then they will have information which is supposed to be confidential.

We considered hiding the diversity report until:

- after the provider has received a certain number of applications
- after a certain amount of time
- the end of the recruitment cycle

## Deciding when to show the report

We don’t have a complete view of how quickly applications came in during the 2020 to 2021 recruitment cycle. This is because applications were split between Manage and the UCAS service.

We decided to look at data from the current recruitment cycle, to see the effect of showing the report only after a provider has received applications from 10 candidates.

Analysis showed by the 15 December 2021, the report could be viewed by 63% of providers who had received at least one application.

We intend to go ahead with showing the report after a provider receives applications from 10 candidates. We’ll review this at the end of the cycle by looking at when the report became available to each provider.

We also plan to show the report to all providers at the end of the recruitment cycle, including providers which have not received applications from at least 10 candidates.

We think there is not a significant risk to candidates. At the end of the recruitment cycle all applications will have ended with either:

- the candidate being recruited or deferring their application to the next recruitment cycle - in which case the provider will have access to the information they gave in the questionnaire

- the application being rejected or withdrawn - in which case it does not matter if the provider is able to work out how a candidate answered the questionnaire

## What we changed

We considered hiding the report entirely when it is not available by either:

- removing the link from the list of reports
- replacing the link with content explaining why the report is hidden

Removing the link would make it impossible for the user to know when the report is going to become available. This would be particularly problematic if the user belonged to more than one provider and the report was available for some but not all providers.

Replacing the link with an explanation did not work well because it did not stand out among the links. We decided to keep the link and add content on the report page explaining when the user will be able to view the report and why we’re hiding it.

We also added details of the recruitment cycle to the h1 heading for the page, to make it clear that the report does not include data for previous cycles.

![Reports landing page](reports-landing-page.png "Reports landing page")

![Candidate sex, disability, ethnicity and age report](candidate-sex-disability-ethnicity-age-report.png "Candidate sex, disability, ethnicity and age report")

![Candidate sex, disability, ethnicity and age report with data hidden](candidate-sex-disability-ethnicity-age-report--data-hidden.png "Candidate sex, disability, ethnicity and age report with data hidden")

## Showing the report for 2 recruitment cycles

We considered how we might show the report once it’s available for 2 recruitment cycles.

We will not initially need to do this because we do not intend to show data for the 2020 to 2021 recruitment cycle. It would be incomplete because many applications were made through the UCAS service.

In our design we:

- have only one link on the reports page
- link to a page which gives information about the report and has a section for each recruitment cycle
- give a link to the report for each recruitment cycle or an explanation of why the report is not available

This means that we no longer need to have content on the report page saying why it is unavailable. We’ll hide the link until the report is available.

The previous recruitment cycle’s report will always be available because we plan to show it to all providers from the end of the cycle.

![Reports landing page](reports-landing-page.png "Reports landing page")

![Candidate sex, disability, ethnicity and age report - interstitial](candidate-sex-disability-ethnicity-age-report--interstitial.png "Candidate sex, disability, ethnicity and age report - interstitial")

![Candidate sex, disability, ethnicity and age report - interstitial with current report hidden](candidate-sex-disability-ethnicity-age-report--interstitial-report-hidden.png "Candidate sex, disability, ethnicity and age report - interstitial with current report hidden")

![Candidate sex, disability, ethnicity and age report - current cycle](candidate-sex-disability-ethnicity-age-report--current-cycle.png "Candidate sex, disability, ethnicity and age report - current cycle")

![Candidate sex, disability, ethnicity and age report - previous cycle](candidate-sex-disability-ethnicity-age-report--previous-cycle.png "Candidate sex, disability, ethnicity and age report - previous cycle")

## Further considerations

In future we’ll consider:

- only showing data for completed applications rather than all received applications
- showing data for other outcomes, for example rejections
- grouping outcomes and showing data for positive and negative outcomes

We’ll also consider always showing the table with the age of candidates. We do not need to hide this data because the date of birth appears in a candidate’s application details.

We do not intend to do this initially as we do not know whether providers will find the age data useful on its own.
