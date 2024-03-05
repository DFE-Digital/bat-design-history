---
title: Uploading bulk placement data
description: We created a bulk upload tool to help ITT providers make changes to multiple trainee records at the same time
date: 2024-02-08
tags:
  - school placements
  - providers
  - trainees
---
{% from "email/macro.njk" import appEmail %}
We created a bulk upload tool to help ITT providers make changes to multiple trainee records at the same time.

## Background

DfE has a need to understand more about what is happening with school placements and ITT mentors. DfE does not hold this information in the Becoming a Teacher (BAT) service line, even though providers and Higher Education Statistics Agency (HESA) do.

By understanding what is happening in the placements space, we can then better meet the needs of providers and trainees, and the potential impact of school placement/ITT mentor issues.

The Register service is the best place to hold this information because trainees must complete a minimum of 2 placements prior to being awarded Qualified Teacher Status (QTS).

## Why we did this

We created bulk upload placements as we know that providers tend to update their trainees in one go and having a bulk upload was easier than doing it one-by-one for many trainees.

Additionally, we knew that SCITT providers hadn't previously been able to supply this data and we were asking them to provide it within 2 months of the performance profiles sign-off so it made sense to release this at the same time as placements to reduce the burden on providers who were being asked to send this data through at short notice.

![A screenshot of placement fields in the Register service](bulk-add-placement-details-to-trainee-records.png)

## How it works

Bulk upload placements is the ability to make changes to multiple trainee records at the same time.

Providers were asked to include placement data as part of performance profile sign off for registered trainees with a course outcome in the previous academic year.

Providers can bulk add missing placement data to multiple trainee records. The requirement was to add school placement URNs for 2 school or setting placements.

## Challenges

We made a mistake telling HEIs they could use the ITT data collection update period of 15 to 31 January 2024 to import their trainee data through HESA into Register.

This was not possible because the placement data we were after was for the 2022 to 2023 collection. This made this data historical and not part of the January 2024 update window.

Providers told us that they had just completed submitting their placement data as part of the separate HESA Student Collection so we fixed the problem by offering to import their placement data from this collection into Register.

HEI providers needed to check their placement data in Register as part of the performance profile sign off by the deadline of 31 January 2024.

They could use the bulk upload tool to fill in any missing placement data.

{{ appEmail({

subject: "Performance profile sign off for the 2022 to 2023 academic year",
content: "Dear ((first_name)) 

You must sign off your list of trainee teachers from the 2022 to 2023 academic year. 

^The deadline for performance profile sign off is 31 January 2024.

This is so that the data can be included in the annual initial teacher training (ITT) performance profiles publication.

1. Check you have a minimum of 2 placements for each trainee awarded QTS or EYTS in the 2022 to 2023 academic year
2. Export your trainee data
3. Check your data and fix any mistakes
4. Sign off your data 

If you have any questions, email [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk) using the subject line \"Performance profiles sign off\".

# 1.  Check you have a minimum of 2 placements for each trainee awarded QTS or EYTS in the 2022 to 2023 academic year

Your placement data has been imported from the Student Collection into the Register service.

You can use the bulk update placement feature to fill in any data gaps:
https://www.register-trainee-teachers.service.gov.uk/bulk-update/add-details/new

You can also sign in to manage your registered trainee placement data manually:
https://www.register-trainee-teachers.service.gov.uk/trainees  

Find out how to check you have 2 placements for each trainee:
https://www.register-trainee-teachers.service.gov.uk/guidance/manage-placements

This does not include assessment only trainees.

# 2. Find your trainee data

Sign in to export the data you need to check:
https://www.register-trainee-teachers.service.gov.uk/reports/performance-profiles

# 3. Check your trainee data and fix any mistakes

Find out what you need to check and how to fix mistakes:
https://www.register-trainee-teachers.service.gov.uk/guidance/performance-profiles

# 4. Sign off your trainee data

You must complete this form to sign off this data:
https://forms.office.com/e/ATXmqJusud

Kind regards

Becoming a teacher team" }]}}

## Opportunities

### Bug parties

The Register team set up a dedicated bug party channel on Slack where the whole team was invited to swarm around to test what we've built for providers.

![A screenshot of a bug party event on a chat group](register-bug-party-channel-on-slack.png)

We started bug parties with manual placements and used it again for the bulk upload placement tool.

The purpose is to find any bugs, for example, a link not working, and give us feedback on what weve built so far.

Those who attended were given scenarios to test. Any feedback was posted in the Slack channel using a template to describe:

- where the issue was located
- description
- expected user behaviour
- steps to replicate

The feedback was used to make any changes and improvements so that when we release the bulk upload tool to providers, weve made 100% sure there are no issues.

The benefit was for a multi-disciplinary team to come together and work efficiently across a build to check for any issues.

## Next steps

Placement data retrospective and using feedback from providers to inform future iterations such as:

- The instructions weren't very clear on how to add additional placements beyond the mandatory 2 so we updated the content with a view to test and iterate.
- One provider wanted to add placements in bulk to trainees who already had 2 placements, but our filter meant these trainees were not included in the bulk import download. We created a ticket in the backlog to design a solution for this
- Some providers mentioned that trainees had done placements at 2 schools which had the same URN and our unique validation rule meant they couldn't record them using URNs in Register. Instead, they had to record the second placement using the free text fields. We have a ticket in the backlog to investigate solution for this.
