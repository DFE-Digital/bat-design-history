---
title: Initial alpha static prototype 
description: A look at the alpha prototype and beginning to think about the next steps.
date: 2020-09-07
related:
  items:
  - text: Alpha assessment
    href: https://docs.google.com/presentation/d/1Ws9gmeHZTjmc2NRZlSCcVEfReEmyi9KB1_BLyyJv-ZE/
  - text: Alpha research overview
    href: https://dfedigital.atlassian.net/wiki/spaces/TTDT/pages/1626931201/
  - text: Alpha research analysis 
    href: https://dfedigital.atlassian.net/wiki/spaces/TTDT/pages/1626931201/3.+User+Research+Rounds+Sprint+Work
  - text: Static prototype 
    href: https://projects.invisionapp.com/share/R2YGO89WADV#/screens/428900167
---

The Register teacher trainee service exists to support the exchange of data on trainee teachers in England between accredited Initial Teacher Training (ITT) providers and the DfE.

Each year the service provides data on approximately 40,000 trainee teachers across 632 institutions in England.

The Register alpha focused on replacing an existing DfE product, the [Database of trainee teachers and providers (DTTP)](https://www.gov.uk/guidance/database-of-trainee-teachers-and-providers-dttp) and ran from 27 April to the end of July, with an assessment in early August.

## Next steps

The alpha produced a [static prototype hosted on InVision](https://projects.invisionapp.com/share/R2YGO89WADV#/screens/428900167). 

A functional prototype is being built which will enable us to gather further insights from research.

The team has identified areas in the current prototype that will require further thought for the functional prototype such as:

* the ‘add a record’ journey includes a form split over multiple tabs which presents accessibility and usability issues
* adding multiples of things such as education qualifications and diversity information
* adding personal details for candidates/trainees that either studied or are living overseas

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Start page",
      img: {
        src: "start-page.jpg"
      }
    },
    {
      text: "Guidance",
      img: {
        src: "guidance.jpg"
      }
    },
    {
      text: "Dashboard",
      img: {
        src: "dashboard.jpg"
      }
    },
    {
      text: "Teacher trainee list",
      img: {
        src: "teacher-trainee-list.jpg"
      }
    },
    {
      text: "Teacher trainee list additional states",
      img: {
        src: "teacher-trainee-list-additional-states.jpg"
      }
    },
    {
      text: "Start record",
      img: {
        src: "create-a-record.jpg"
      }
    },
    {
      text: "Personal details",
      img: {
        src: "personal-details.jpg"
      }
    },
    {
      text: "Contact details",
      img: {
        src: "contact-details.jpg"
      }
    },
    {
      text: "Previous education",
      img: {
        src: "previous-education.jpg"
      }
    },
    {
      text: "Assessment details",
      img: {
        src: "assessment-details.jpg"
      }
    },
    {
      text: "Incomplete record summary",
      img: {
        src: "incomplete-record-summary.jpg"
      }
    },
    {
      text: "Complete record summary",
      img: {
        src: "complete-record-summary.jpg"
      }
    },
    {
      text: "Submitted for TRN",
      img: {
        src: "submitted-for-trn.jpg"
      }
    },
    {
      text: "Ready for QTS recommendation",
      img: {
        src: "ready-for-qts-recommendation.jpg"
      }
    },
    {
      text: "Check QTS details",
      img: {
        src: "Check-qts-details.jpg"
      }
    },
    {
      text: "Recommended for QTS",
      img: {
        src: "recommended-for-qts.jpg"
      }
    },
    {
      text: "Deferral",
      img: {
        src: "deferral.jpg"
      }
    },
    {
      text: "Check deferral details",
      img: {
        src: "check-deferral-details.jpg"
      }
    },
    {
      text: "Deferral successful",
      img: {
        src: "deferral-successful.jpg"
      }
    },
    {
      text: "Deferred record",
      img: {
        src: "deferred-record.jpg"
      }
    },
    {
      text: "Deferral status",
      img: {
        src: "deferral-status.jpg"
      }
    },
    {
      text: "Reinstate candidate in progress",
      img: {
        src: "reinstate-candidate-in-progress.jpg"
      }
    },
    {
      text: "Reinstate candidate",
      img: {
        src: "reinstate-candidate.jpg"
      }
    }
  ]
}) }}
