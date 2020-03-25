---
title: Updating Cookie policy and banner
description: Design changes and implementation of cookies.
date: 2020-02-28
---

To adhere to [The Privacy and Electronic Communications (EC Directive) Regulations 2003 - Confidentiality of communications - Regulation 6](http://www.legislation.gov.uk/uksi/2003/2426/regulation/6) the following is needed:

1. tell people the cookies are there
2. explain what the cookies are doing and why; and
3. get the person’s consent to store a cookie on their device.

We were meeting requirement 1 and 2 but failed to ask users for their consent before storing cookies on their device. Some cookies are needed by Google Analytics to track users through the service. Users have to consent to these cookies before we can start tracking them.

### Technical implementation

[4 Pull Requests showing implementation and code](https://github.com/DFE-Digital/find-teacher-training/issues?q=label%3Acookie-banner-consent+is%3Aclosed)

#### Cookie banner

The cookie banner is hidden by default using css. It does use a small amount of JavaScript to determine whether or not to show or hide the banner depending on whether or not the user has set their preference.

It was decided that this feature would rely on JavaScript (i.e if JavaScript fails to load or is disabled, no banner is shown) because the user might decide to accept cookies at any point of their journey through the service and we did not want to risk losing any of their existing data or having to playback their data once the page reloaded. Technically this would have been difficult to implement, and using JavaScript makes it less obtrusive.

If the user decides to accept the cookies then the following events happen:

1. Hides the banner without a page refresh
2. Installs Google Analytics/Google Tag Manager.
3. Enables event tracking on the page

#### Cookie policy page form

There are various ways to implement this form. For example [GOV.UK Notify](https://www.notifications.service.gov.uk/cookies) uses JavaScript to set the radio buttons options and to show/hide any validation errors or success messages. We did not take this approach because it would need a lot of additional coding to make it accessible. We also discovered as a result of implementing it as a traditional form that submits data to the server, we would be able to report on the number of users who actively reject cookies by looking at the server logs.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Cookies - Before" },
    { text: "Cookies - After" },
    { text: "Cookie Banner - Before" },
    { text: "Cookie Banner - After" }
  ]
}) }}
