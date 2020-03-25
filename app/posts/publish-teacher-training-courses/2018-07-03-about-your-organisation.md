---
title: Shared organisation details
description: Share organisation information between courses and split the organisation page across tabs.
date: 2018-07-03
---

The ‘About your organisation’ section is not unique to a course ([see old design](/publish-teacher-training-courses/iteration-june-28#course)). The data is about the organisation itself. Represent this by moving the fields out of course pages and up to the organisation view.

To accommodate this new section, put courses and request access in tabs alongside it.

## Accrediting providers

An organisation can have no accrediting provider, one provider, or many. Add a field to describe each accrediting provider (if there are any), and remove guidance around accrediting provider from the ‘Training with you’ field. Only one will show to applicants at any given time.

| Number of accreditors | Providers with that many accreditors |
| - | - |
| 0 or 1 accreditor | 865 providers |
| 2 accreditors | 147 providers |
| 3 accreditors | 41 providers |
| 4 accreditors | 13 providers |
| 5 accreditors | 1 provider |
| 6 accreditors | 1 provider |
| 7 accreditors | 1 provider |

[BATSA-402](https://dfedigital.atlassian.net/browse/BATSA-402)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Organisation",
    img: { src: "organisation.png" }
  }, {
    text: "About your organisation",
    img: { src: "about-your-organisation.png" }
  }, {
    text: "With one accrediting provider",
    img: { src: "with-one-accrediting-provider.png" }
  }, {
    text: "With multiple accrediting providers",
    img: { src: "with-multiple-accrediting-providers.png" }
  }, {
    text: "Course without organisation section",
    img: { src: "course-without-organisation-section.png" }
  }]
}) }}
