---
title: Removing personal data from page titles
description: We recently made a change to remove personal data from page titles across the service
date: 2025-04-28
tags:
  - personal data
  - data protection
  - page titles
related:
  items:
    - text: Service manual - Collecting personal information from users
      href: https://www.gov.uk/service-manual/design/collecting-personal-information-from-users
    - text: GOV.UK - Data protection
      href: https://www.gov.uk/data-protection
    - text: HMRC design resources - Page title guidance
      href: https://design.tax.service.gov.uk/hmrc-design-patterns/page-title/#personally-identifiable-information
    - text: DWP accessibility manual - Page title guidance
      href: https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/content-designer#page-title
    - text: Information Commissioner’s Office (ICO) - Guide on what is personal information
      href: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/personal-information-what-is-it/what-is-personal-information-a-guide/
    - text: Legislation - Data Protection Act 2018
      href: https://www.legislation.gov.uk/ukpga/2018/12/section/19/enacted
    - text: Legislation - UK General Data Protection Regulations (UK GDPR)
      href: https://www.legislation.gov.uk/eur/2016/679/contents
    - text: Mozilla - The document `<title>` element
      href: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title
---

We recently made a change to remove personal data from page titles across the service.

This is part of our ongoing commitment to safeguarding user data and ensuring the service meets the highest standards of privacy, security, and compliance with relevant laws, including the Data Protection Act 2018 and the UK General Data Protection Regulations (UK GDPR).

## Why we made this change

Previously, some pages included personal data, such as a provider’s contact name, directly in the page title.

For example, if a user was updating a provider’s contact details, the page title included the contact’s full name alongside the purpose of the form.

This created two key issues:

1. Privacy risks: Page titles can appear in a user’s browser history, tab previews, operating system notifications, and screen recordings. Surfacing personal data in these contexts increases the risk of unintended data exposure, especially on shared devices or in public environments.

2. Security and compliance risks: Government services must minimise the unnecessary collection, use, and exposure of personal information, as set out in the [Service manual](https://www.gov.uk/service-manual/design/collecting-personal-information-from-users) and the [Data Protection Act 2018](https://www.legislation.gov.uk/ukpga/2018/12/section/19/enacted). Displaying personal data in metadata, such as page titles, where users have less visibility and control, contravenes best practices and increases the likelihood of a data protection breach.

Protecting personal information is not only good practice, but also a legal requirement.

## What we changed

We audited all pages across the service to identify instances where personal data appeared in page titles.

We then updated the templates to remove personal details from titles, while preserving the meaning and clarity of each page.

Instead of including a person’s name in the title, we now describe the task or action being carried out.

For example:

| Before | After |
| --- | --- |
| {provider name} - {name} - Contact details | {provider name} - Change provider contact’s details |
| {provider name} - Confirm you want to delete {name} | {provider name} - Confirm you want to delete provider contact |
| Support user - {name} | View support user |
| {name} - Personal details | Change support user’s personal details |
| Confirm you want to delete {name} | Confirm you want to delete support user |

Where a user needs to see or confirm personal details as part of a task, this information still appears on the page, just not in the title.

## How we approach it

Our approach focused on:

- user privacy - reducing the risk of accidental personal exposure in ways users might not expect or notice

- security compliance - aligning with the [Service manual](https://www.gov.uk/service-manual/design/collecting-personal-information-from-users), the [Data Protection Act 2018](https://www.legislation.gov.uk/ukpga/2018/12/section/19/enacted), and good practice guidance from departments like [HMRC](https://design.tax.service.gov.uk/hmrc-design-patterns/page-title/#personally-identifiable-information) and [DWP](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/content-designer#page-title)

- usability - ensuring the new page titles remained clear and recognisable, helping users stay oriented as they navigate through tasks

## What’s next

Protecting users’ data is an ongoing responsibility, not a one-off task.

As the service evolves, we will continue to review how personal information is collected, displayed, and managed, including in metadata such as page titles, to ensure we meet the highest standards of privacy, security, and transparency.

Minor improvements like this help build a more secure and trustworthy service for all users.

*[DWP]: Department for Work and Pensions
*[HMRC]: HM Revenue & Customs
