---
title: Moving the personal details section to the top
description: Getting candidates to add their personal details before they choose courses.
date: 2021-08-17
---

{% from "screenshots/macro.njk" import appScreenshots with context %}


Previously, the Courses section was at the top of the application. This was to help direct candidates to the right site to complete their application. Some courses were on UCAS and others were on Apply for teacher training.

But when UCAS is switched off in September, candidates will be able to apply for all courses using Apply.

### Getting candidates to add their personal details before choosing a course

When we worked on the visa sponsorship content on Apply, we thought it would be helpful to warn candidates who need visas if they chose a course that does not sponsor visas. That way they could change their course choice before submitting their application.

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Visa warning in the Course choices summary",
    img: {
      src: "visa-warning-message.png"
    }
  }]
}) }}

To do that, we needed them to enter their nationality and immigration status before they chose their courses. So we decided to move the Personal details section to the top of the application.

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Personal details section at the top of the application",
    img: {
      src: "personal-details-top.png"
    }
  }]
}) }}

Another benefit of completing the Personal details section first, is that international candidates will see the English as a foreign language assessment section sooner. If a candidate enters a nationality other than British or Irish, that section will appear under Qualifications.
