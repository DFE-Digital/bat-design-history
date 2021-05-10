---
title: Rollover – what we did in 2020
description: How we handled rollover for the second time
date: 2020-10-13
---

{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}
{% from "figure/macro.njk" import appFigure with context %}

Rollover is the process of copying courses from the current cycle to the next. This entry documents significant information and dates from the second Publish rollover. 

This is [what we did for the first rollover](/publish-teacher-training-courses/what-we-did-for-rollover/) in 2019.

## Significant dates

{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Rollover started"
      },
      value: {
        text: "5 July 2020"
      }
    },
    {
      key: {
        text: "Rollover closed in Publish"
      },
      value: {
        text: "6 October 2020"
      }
    },
    {
      key: {
        text: "Application start date for old cycle (2019 to 2020)"
      },
      value: {
        text: "8 October 2019"
      }
    },
    {
      key: {
        text: "Application end date for old cycle (2019 to 2020)"
      },
      value: {
        text: "30 September 2020"
      }
    },
    {
      key: {
        text: "Application start date for new cycle (2020 to 2021)"
      },
      value: {
        text: "13 October 2020"
      }
    },
    {
      key: {
        text: "Application end date for new cycle (2020 to 2021)"
      },
      value: {
        text: "3 October 2021"
      }
    }
  ]
}) }}

## Communication to providers

The following emails were sent to Publish users:

* [information about your teacher training courses for 2021 – 2022](https://www.notifications.service.gov.uk/services/022acc23-c40a-4077-bbd6-fc98b2155534/templates/22946b68-92e9-4205-a3c0-f0c5628fb7eb) (sent in June)
* [review and publish your courses for 2021 – 2022](https://www.notifications.service.gov.uk/services/022acc23-c40a-4077-bbd6-fc98b2155534/templates/901ee5cd-c524-4588-96ce-478f1d003997) (sent in July)
* [new recruitment cycle for the 2021 to 2022 academic year](https://www.notifications.service.gov.uk/services/022acc23-c40a-4077-bbd6-fc98b2155534/templates/7ebed1e2-b8a9-4da7-968f-d3df302f5219) (sent in September)
* [2021 to 2022 cycle opening tomorrow on Find](https://www.notifications.service.gov.uk/services/022acc23-c40a-4077-bbd6-fc98b2155534/templates/0e311d43-c450-4eb5-894b-544dd92ef735) (sent in October)

## Dev testing environments

In advance of rollover we set up a test environment to simulate putting Publish through the various rollover states. Essentially, this worked well, however, the rollover test environment and production were continually getting out of sync. New work happened in production but not mirrored in the test environment. In order to test updates intended for the new cycle, we had to continually update the test environment.

## QA processes

### API

We tested v1, v2, v3 endpoints and the public v1 endpoint.

### Publish

We manually tested the create a course journey and sporadic checks of various screens and flows in both the ‘Current Cycle’ and ‘Next Cycle’ during rollover, and of Publish after rollover. We adopted a ‘click around and see if things are ok’ approach to our QA. We should introduce more structure to our rollover QA process in future.

We encountered a number of issues relating to error validation in this testing. While not directly linked to rollover this also highlighted room for improvement in our QA processes.

## Development milestones

### Before/during rollover

A spike which lasted at least 7 days.

https://github.com/DFE-Digital/find-teacher-training/pull/386
https://github.com/DFE-Digital/publish-teacher-training/pull/1304
https://github.com/DFE-Digital/teacher-training-api/pull/1520

### After rollover

Rollover settings.

https://github.com/DFE-Digital/find-teacher-training/pull/461
https://github.com/DFE-Digital/publish-teacher-training/pull/1384
https://github.com/DFE-Digital/teacher-training-api/pull/1586

Course opening dates were updated on Find and Apply.

https://github.com/DFE-Digital/find-teacher-training/pull/462

## Design and product updates

### Financial incentives

Financial incentives had not been confirmed during the transition from the old cycle to new cycle so we introduced placeholder UI.

https://github.com/DFE-Digital/publish-teacher-training/pull/1352
https://github.com/DFE-Digital/publish-teacher-training/pull/1387
https://github.com/DFE-Digital/find-teacher-training/pull/464

Financial incentive for most courses were then removed.

https://github.com/DFE-Digital/teacher-training-api/pull/1589

### Course fees

We [uncoupled EU from UK course fees](https://bat-design-history.netlify.app/publish-teacher-training-courses/uncoupling-UK-and-EU-course-fees/).

https://github.com/DFE-Digital/publish-teacher-training/pull/1374
https://github.com/DFE-Digital/find-teacher-training/pull/458

### Age range

We made the age range field mandatory for all courses in the next cycle. This data was missing from approximately 14,000 / 15,000 courses. Rollover gave us the opportunity to collect this data.

{{ appFigure({
  image: {
    file: "age-range-banner.png",
    alt: "A banner prompting users to supply an age range."
  },
  caption: "A notice summary was displayed on courses that did not specify an age range."
}) }}

{{ appFigure({
  image: {
    file: "age-range-error.png",
    alt: "If no age range is provided, an error summary is displayed."
  },
  caption: "An error summary is displayed if a user tries to publish a course without providing an age range."
}) }}

### Service performance 

We enabled a rollover tab on the [Publish performance dashboard](https://www.publish-teacher-training-courses.service.gov.uk/performance-dashboard) to track providers progress in rolling over their courses. This cycle we will be able to compare progress between this rollover and the last one.

### Langauge 

Consistency of language was an issue during rollover. Dates referring to cycle (eg., 2019 to 2020) needed to be updated across the service. While a find and replace in the code base helped, there were several instances where manual updates needed to be made, such as the Google Form to create PE courses.  

The default earliest "Applications open date" for courses was set to 8th October, copied over from the previous cycle's start date. Since this date was pushed back for the new cycle, we needed to adjust the default and ensure the example start date for form completion was within the correct range.

## Allocations during rollover

The [allocations process](/publish-teacher-training-courses/request-pe-courses/) for the 2020 to 2021 recruitment cycle overlapped with the rollover window.

### Important dates

{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Allocations window opened"
      },
      value: {
        text: "8 June 2020"
      }
    },
    {
      key: {
        text: "Allocations window closed"
      },
      value: {
        text: "10 July 2020"
      }
    }
  ]
}) }}


### Design updates

We launched an [interruption screen](https://qa.publish-teacher-training-courses.service.gov.uk/rollover-recruitment) to communicate changes to recruitment policy. Users saw this on their first visit in the new cycle.

https://github.com/DFE-Digital/publish-teacher-training/pull/1376

{{ appFigure({
  image: {
    file: "interstitial-screen.png",
    alt: "A page containing guidence about recruiting for next cycle"
  }
}) }}

### Issues

We received support tickets (e.g., [#9466](https://becomingateacher.zendesk.com/agent/tickets/9466)) from providers who couldn’t find their confirmed places. Users were looking in the ‘Next cycle’ section though we had only published them in the ‘Current cycle’ section.

Rollover copies over all courses from the previous cycle. This meant there were fee-funded PE courses automatically created in the new cycle which had not received permission to recruit. We had to contact the providers of these courses and inform them that we would withdraw the courses. This [email was sent to providers before the new cycle](https://www.notifications.service.gov.uk/services/022acc23-c40a-4077-bbd6-fc98b2155534/templates/276d444a-f805-48a4-8e6b-aaf0f79febd5) was launched and this [email was sent after the new cycle](https://www.notifications.service.gov.uk/services/022acc23-c40a-4077-bbd6-fc98b2155534/templates/2f91cd7f-ea21-4ef9-98c9-e18f2800b54b) was launched. Some providers then had requests approved via support to keep these courses open.
