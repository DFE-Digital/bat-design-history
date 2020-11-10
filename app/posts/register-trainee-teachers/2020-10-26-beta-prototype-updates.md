---
title: Beta prototype updates
description: How the prototype looked for round 2 of research
date: 2020-10-26
---

After validating our prototype approach in the [first round of reserach](/beta-prototype-research-round-1/)...

## Significant updates

Allocations screens
Filters (adding subjects and indicitive cyles)
Support for multiple routes
Timeline
Defer/resinate
Withdrawal
Add static content pages
Home page
Allowing users to add a 'not provided' gender option
Improvements when asking about ethnicity and disabilities

## Task list pattern

This pattern allows us to have multiple sections that users can complete in any order. As the Register service supports more routes, we can vary the sections shown so they are specific to each route.

<!-- {% from "figure/macro.njk" import appFigure with context %}
{{ appFigure({
  image: {
    file: "2020.09.22_17_17_39_Overview - Register trainee teachers - GOV.UK.png"
  },
  caption: "Task list overview"
}) }} -->

## Screenshots of all pages

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  hideContents: true,
  items: [{
      text: "Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_16_01_Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Home - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_16_09_Register for teacher training - GOV.UK.png" }
    }, {
      text: "Data requirements - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_16_20_Data requirements - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add a trainee - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_16_42_Add a trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add a trainee - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_16_58_Add a trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Programme details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_17_09_Programme details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "This course has allocated places - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_17_48_This course has allocated places - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm programme details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_17_55_Confirm programme details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add a trainee - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_18_03_Add a trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Trainee personal details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_18_55_Trainee personal details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm personal details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_19_33_Confirm personal details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add a trainee - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_19_41_Add a trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Contact details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_19_53_Contact details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Contact details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_20_01_Contact details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Contact details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_20_10_Contact details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm contact details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_21_48_Confirm contact details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add a trainee - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_21_58_Add a trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Has the trainee shared diversity information_ - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_22_07_Has the trainee shared diversity information_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm diversity information - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_22_17_Confirm diversity information - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "What is their ethnic group_ - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_22_28_What is their ethnic group_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Which of the following best describes their White background_ - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_22_35_Which of the following best describes their White background_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Which of the following best describes their White background_ - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_22_44_Which of the following best describes their White background_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Has the trainee shared that they are disabled_ - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_23_25_Has the trainee shared that they are disabled_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Which disabilities were shared_ - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_23_35_Which disabilities were shared_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm diversity information - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_23_48_Confirm diversity information - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add a trainee - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_25_02_Add a trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add undergraduate degree - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_25_11_Add undergraduate degree - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add undergraduate degree - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_25_18_Add undergraduate degree - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add undergraduate degree - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_25_26_Add undergraduate degree - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Degree details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_26_10_Degree details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm degree details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_26_51_Confirm degree details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Degree details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_28_01_Degree details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm degree details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_28_17_Confirm degree details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add a trainee - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_28_35_Add a trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm degree details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_28_42_Review trainee record - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Trainee submitted for TRN - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_28_51_Trainee submitted for TRN - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Trainee teachers - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_29_04_Trainee teachers - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Trainee teachers - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_29_36_Trainee teachers - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Sarah Jones - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_30_03_Sarah Jones - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Sarah Jones - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_30_13_Sarah Jones - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Sally Jenkins - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_30_29_Sarah Jones - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Edit personal details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_31_09_Edit personal details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm personal details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_31_22_Confirm personal details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Sarah Jones - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_32_04_Sarah Jones - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "When did the trainee defer - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_32_23_- Register trainee teachers - GOV.UK.png" }
    }, {
      text: "When did the trainee defer - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_32_28_- Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Check deferral details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_32_39_Check deferral details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Sarah Jones - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_32_50_Sarah Jones - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "When did the trainee return - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_33_00_- Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Check reinstatement details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_33_06_Check reinstatement details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Sarah Jones - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_33_12_Sarah Jones - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Withdraw trainee - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_33_25_Withdraw trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Check withdrawal details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_33_41_Check withdrawal details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Sarah Jones - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_33_47_Sarah Jones - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Paulette Feest - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_36_13_Paulette Feest - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Has the trainee passed their assessment_ - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_36_19_Has the trainee passed their assessment_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Has the trainee passed their assessment_ - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_36_37_Has the trainee passed their assessment_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Check assessment details - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_36_52_Check assessment details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Trainee recommended for QTS - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_36_59_Trainee recommended for QTS - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Paulette Feest - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_37_11_Paulette Feest - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Trainees must pass their assessment to be recommended for QTS - Register trainee teachers - GOV.UK",
      img: { src: "2020.11.02_12_37_26_Trainees must pass their assessment to be recommended for QTS - Register trainee teachers - GOV.UK.png" }
    }]
}) }}
