---
title: Showing providers the funding they receive
description:
date: 2022-05-13
---
{% from "screenshots/macro.njk" import appScreenshots with context %}

DTTP shows providers the money they receive from the DfE for bursaries, grants and scholarships. In research we saw that this information is useful, but not as complete or as clear as users would like.

The value it offers users is providing confirmation they’ve registered their trainees correctly and that the DfE will pay as expected.

We saw that users want more transparency and clarity in how the DfE decides how much it pays each month. There is rarely a straightforward relationship between the number of trainees eligible for funding and what the provider gets paid. The first 3 month’s payments are based on the number of trainees given unconditional offers in Apply (minus 25% to allow for trainees that do not start). After these first 3 payments, the remaining payments will correct over or under payments. The funding team update their payment models quarterly. If a provider’s trainees change status this will only be reflected at the end of that quarter. This adds to the need for more over or under payment, increasing the complexity for providers in unpicking why they have been paid what they’ve been paid.

As the simplest way to show this information, we are adding the same funding data to Register. The data will continue to be uploaded from spreadsheets to Register.

## How DTTP shows the funding information

The funding team break payments into 2 sets of data. Accredited providers (HEIs and SCITTs) and lead schools get slightly different versions of the 2 sets.

### 1. The ‘payment profile’

This is the money the provider receives each month, separated by types of payment (for example, total amount of bursary money for all trainees for that month).

The ‘payment profile’ always covers the whole academic year. It has payments that have been made and predicted payments. For example, if the user is looking at their payment profile in August they see one payment made in August and 11 predicted payments for the rest of the year. If the user is looking at their payment profile in July they see 12 payments that have been made and no predicted payments. More payment types are added through the year.

DTTP keeps a history of all previous versions fo the payment profile. For example, in August a user can see one payment profile, in July the user can see 12 payment profiles.

### 2. The ‘training bursary summary’ or ‘school direct summary’

Accredited providers (HEIs and SCITTs) see a list of the bursary and scholarship amounts their trainees receive.

Lead schools see the grants they receive.

These summaries are based on the October census. They’re not updated throughout the year. For example, if a trainee withdraws then the amount shown is not adjusted. Because it’s based on the October census, the summary is not available until December.

These summaries show all the funding available to a provider, not just the funding they or their trainees will receive. For example, a provider without any eligible trainees would still see all subjects, just with no amounts paid out.

## Showing funding information in Register

### Payment profile

The main thing we did with this information was remove the historic predictions and make it explicit which payments had been made and which were predicted. To do this we made two tables and each month the number of paid months increases and the number of predicted months decreases.

Research showed that no one found the history of predicted payments necessary, so we removed them.

#### Version 1 — summary table and monthly breakdown

![Monthly payments shown together.](01-payment-schedule-v1.png "Showing all payment types together")

For the first version we used a single table with the months as rows and payment types as columns. We didn’t test this with users, but it’s a straightforward interpretation of the data. 

However, the data contains an unknown number of payment types, each with a column heading of unknown length. If there are 5 or more columns, each column becomes narrow and hard to read. Most providers would only have 3 or 4 payment types by the end of the year (this means 6 columns total when you include the month and total for the month). 

![Monthly payments shown together. The table has many columns and is harder to read](02-payment-schedule-v1--many-columns.png "Showing all payment types together can be be hard to read if there are a lot of payment types")

We could make the type size smaller, but this decreases legibility and the table could still end up becoming very narrow. Added to the fact that this will need to scroll horizontally on narrower devices we looked for an alternate way of presenting the information.

#### Version 2 — splitting the table by payment type or month

Using multiple tables allows the data to be stacked vertically without compromising line length as new payment types are added. The compromise is that it’s harder for the user to make relational comparisons. For example, if we split the payments into a table per month its harder for a user to see what they were paid last month and spot an anomaly.

Payments separated by month:

![Monthly payments split by month.](03-payment-schedule-v2--by-month.png "Splitting the payment information by month")

Separate tables per month allows users to see the payment they’ll recieve for that month with a breakdown of payment types.

Payments separated by payment type:

![Monthly payments split by payment type.](04-payment-schedule-v2--by-payment-type.png "Splitting the payment information by payment type")

Separate tables per payment type allows the user to see the payments they’ll receive for that payment type across the year. One downside of this is that new tables can appear throughout the year. New payment types would either need to appear at the top, which is likely to be unexpected behaviour for a page like this, or they would need to be added to the bottom which could easily be missed.

We considered splitting the table when there are more than a certain number of columns. This has the advantage of giving most users a simple display most of the year. However, the view could suddenly change at some point during the year. The confusion this is likely to cause doesn’t outweigh the benefits. It would also mean the service needs to maintain two ways of presenting data.

#### Version 3 — splitting the payments by month with a summary table

In the end we decided to go with having a summary table and payments split by month. This felt the most intuitive and would have the most consistent appearance throughout the year.

![Monthly payments split by payment month, with summary.](05-payment-schedule-v3--by-month-with-summary.png "Annual summary and splitting the payment information by payment month")

### Trainee summary

The main thing we did was remove any irrelevant information. For example, if a provider doesn’t have any trainees studying to teach physics, we wont show the bursary amount for physics. This will reduce the number of rows users need to read through.

For accredited providers we split each payment (ITT bursary, ITT scholarship and EYITT bursary) type into its own table to make the data clearer. 

![Summary of trainee payments.](06-trainee-summary--accredited-provider.png "Trainee summary for accredited providers")

Lead schools only get grants so the page only shows grant funding.

![Summary of trainee payments.](07-trainee-summary--lead-school.png "Trainee summary for lead schools")

## Further development

### Trainee by trainee data

This presentation of the data was well received by users. There is still a strong desire to see a direct relationship between a trainee and the money they will receive. It’s not clear if this is something that would make the user’s lives any easier beyond the reassurance it would provide. The funding team has this data and they could change what they export so Register can show it to users.

Alternatively, Register has the data to show which trainees have applied for funding. But this is based on simple rules. It’s not necessarily the funding a provider will receive and does not account for manual corrections that happen off-service. Before this could be implemented, Register would need a way for the funding team to make corrections and add  other types of payments.

### Showing all the data

The trainee summary does not include all the payments a provider receives per trainee. For example, it does not show the Early years grants. This grant is paid for most, but not all trainees on Early years ITTs, so being explicit about the number of trainees receiving it would help providers have more certainty that the money they receive is correct.

### Reducing the delay in changes to trainee status and payments made

The process funding uses has not changed since the DfE stopped using UCAS and is no longer reliant on DTTP. If the funding team could make payments based on Register data sooner (instead of using the Apply data for the first 3 months) and then update the amounts paid monthly (instead of quarterly) it would reduce the amount that needs to be over or underpaid. The amount paid each month would then track more closely to what the provider is expecting to see.
