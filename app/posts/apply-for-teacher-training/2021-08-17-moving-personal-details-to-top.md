---
title: Moving the personal details section to the top
description: Encouraging candidates to add their personal details before they choose courses.
date: 2021-08-17
---

{% from "screenshots/macro.njk" import appScreenshots with context %}


Previously, the Courses section was at the top of the application. This was to help direct candidates to the right site to complete their application. Some courses were on UCAS and others were on Apply for teacher training.

For the 2022 to 2023 cycle, candidates will need to apply for all courses on Apply.

### Encouraging candidates to add their personal details before choosing a course

We know that providers reject candidates for not having the right to work or study in the UK.

Based on this, we decided to warn candidates who need a sponsored visa, if they choose a course that does not sponsor visas. That way, they could change their course choice before submitting their application.

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Visa warning in the Course choices summary",
    img: {
      src: "visa-warning-message.png"
    }
  }]
}) }}

To do that, we needed them to enter their nationality and state if they had the right to work or study in the UK, before they chose their courses. So we decided to move the Personal details section to the top of the application.

{{ appScreenshots({
  hideContents: true,
  items: [{
    text: "Personal details section at the top of the application",
    img: {
      src: "personal-details-top.png"
    }
  }]
}) }}

Another benefit of completing the Personal details section first, is that international candidates will see the English as a foreign language assessment section sooner. If candidates enter a nationality other than British or Irish, that section will appear under Qualifications.

### Candidates who start their journey on Find

Some candidates will end up choosing a course first because they've come from Find. They'll see the visa warning message when they review their application - or earlier, if they choose more courses after adding their personal details.
