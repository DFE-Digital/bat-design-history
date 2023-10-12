---
title: Updating Register’s guidance pages
description: We updated Register’s guidance pages to help different training providers find what they need quickly
date: 2022-10-24
---

We updated Register’s guidance pages to help different training providers find what they need quickly

## Reviewing Register’s current guidance pages and going through previous user research

Register previously had 2 pages of guidance, which included:

- a general page about what Register is
- a page for school centred initial teacher training providers (SCITTs) about what trainee data they need to create records directly in Register

The page views on these pages were low. They were also created with only SCITT users in mind and were not useful to higher education institutions (HEIs) who submit data to Register through the Higher Education Statistics Agency’s (HESA) data collection system.

Through multiple rounds of user research, users kept telling us they would find it useful to have guidance on:

- how applications from the Apply for teacher training (Apply) service get imported into Register
- clearer explanations how Register defines a ‘withdrawn‘ or ‘deferred‘ trainee compared to HESA
- important dates users need to be aware of throughout an academic year (there are specific dates where users need to submit and check data in Register that we could communicate better)
- how data submitted through HESA maps to Register’s user interface  and data exports so that users can compare their data more easily

## Splitting guidance pages by provider type

From the information we’d gathered we decided to split the guidance page into multiple pages aimed at different types of providers (providers that use HESA to submit their data and providers who use Register).

We looked at other Becoming a teacher services too, and created a section for the guidance on our Homepage called ‘How to use this service’ which matches the ‘Publish teacher training courses’ and ‘Manage teacher training applications’ services.

Users can also get to our guidance pages from the footer. By providing a link in the footer, users also do not have to be logged in to view and explore these pages.

On the Homepage, we can also surface important guidance links for users (like the ‘dates and deadlines’ page) instead of showing every single page. Previously, the guidance was in a section called ‘Guidance, news and updates’ and got lost in a mix of links. Now it has its own dedicated section so it’s easier for users to find.

## Mapping HESA data to Register

The last step included mapping out how data from HESA maps to Register. Our business analyst mapped out the data using Airtable. Our designers then experimented with different layouts to present this information in the clearest way possible to users.

We decided to present the information in a table with 4 columns. The table followed the order of the CSV users can export from Register, because this is what users would use to compare against their own records when they check their data. These 4 columns were:

- the name of the column in the CSV export from Register
- the name of the field in the Register user interface
- the name of the HESA field (or code)
- a column to add any information that explains any complexity in the mapping

We then populated the table with the information we had mapped and provided explanations where needed.

## Experimenting with layout

The table we ended up with was very long. So we experimented splitting it up over tabs or accordions. We split them based on how the trainee’s information is split across their trainee record in Register.

We found that tabs would be the most useful for users who need to switch quickly between the sections. Using tabs would also allow us to have different URLs for each tab so we can see which sections users are viewing the most or not at all.

We created settings in the Register prototype to switch between tabs, accordions or a full table in case we want to change the layout in future.

## Results so far

The guidance pages went onto our service on 15 September 2022.

Although page views are still quite low, after a month we can see that more HEIs are navigating to the pages mentioning HESA and more SCITTs are navigating to pages mentioning ‘manually registering trainees’. This makes us more confident that splitting the guidance by type of user makes sense.

We can also see that users are clicking to all the tabs on our page explaining how HESA data maps to Register.

So far, the dates and deadlines page is most popular, although during October users are registering their trainees for the ITT census publication, so there is more activity than usual in Register, and more important deadlines during this period.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  headingLevel: 2,
  items: [
  {
    id: "1. Homepage with new guidance section",
    text: "Homepage with new guidance section"
  },
  {
    id: "2. Index page with guidance",
    text: "Index page with guidance links"
  },
  {
    id: "3. Dates and deadlines page",
    text: "Dates and deadlines page"
  },
  {
    id: "4. Designs using tabs",
    text: "Designs using tabs"
  },
  {
    id: "5. Designs using accordions",
    text: "Designs using accordions"
  }]
}) }}
