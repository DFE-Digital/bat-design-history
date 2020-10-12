---
title: Beta prototype v1
description:
date: 2020-10-12
related:
  items:
  - text: Current beta prototype (Heroku)
    href: https://register-prototype.herokuapp.com/
  - text: Github repo for prototype
    href: https://github.com/DFE-Digital/register-trainee-teachers-prototype
  - text: Alpha prototype
    href: /register-trainee-teachers/alpha-prototype/
---

## Building a new prototype from scratch
We began work on a new prototype for the Register service in early September 2020. The [alpha prototype](/register-trainee-teachers/alpha-prototype/) was a static InVision prototype, which while good for quick iteration, limited some of the usability testing we could do. This new one is built with the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/) and allows us to test complex journeys with realistic data.

## Journey changes
Working in HTML and designing for progressive enhancement necessitated some changes from the alpha designs:

* use the task list pattern rather than tabs for each form
* break up forms across pages to support adding multiples (like multiple degrees)
* implicitly require that each section be completed as a whole, and not allow individual fields to be left blank

The new prototype borrows heavily from the Apply and Manage services. Register sits half way between them in terms of data collected and actions users need to take, so it’s been incredibly helpful to have them to take inspiration from.

## Task list pattern

This pattern allows us to have multiple sections that users can complete in any order. As Register trainee teachers supports more routes, we can vary the sections shown to be specific to the route.

{% from "figure/macro.njk" import appFigure with context %}
Task list overview:
{{ appFigure({
  image: {
    file: "2020.09.22_17_17_39_Overview - Register trainee teachers - GOV.UK.png"
  }
}) }}

A task collecting some data:
{{ appFigure({
  image: {
    file: "2020.09.22_17_18_55_Candidate personal details - Register trainee teachers - GOV.UK.png"
  }
}) }}

Confirming those details:
{{ appFigure({
  image: {
    file: "2020.09.22_17_19_23_Confirm personal details - Register trainee teachers - GOV.UK.png"
  }
}) }}

A partially completed task list:
{{ appFigure({
  image: {
    file: "2020.09.22_17_21_58_Overview - Register trainee teachers - GOV.UK.png"
  }
}) }}

## Screenshots of all pages

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  hideContents: true,
  items: [{
      text: "2020.09.22_17_06_58_Register for teacher training   GOV.UK",
      img: { src: "2020.09.22_17_06_58_Register for teacher training - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_12_55_  Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_12_55_- Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_15_23_  Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_15_23_- Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_15_45_Trainee teachers   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_15_45_Trainee teachers - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_16_00_Add a trainee   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_16_00_Add a trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_16_11_Other routes not supported   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_16_11_Other routes not supported - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_17_39_Overview   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_17_39_Overview - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_18_55_Candidate personal details   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_18_55_Candidate personal details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_19_23_Confirm personal details   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_19_23_Confirm personal details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_19_51_Contact details   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_19_51_Contact details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_21_51_Confirm personal details   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_21_51_Confirm personal details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_21_58_Overview   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_21_58_Overview - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_22_22_Has the candidate disclosed diversity information_   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_22_22_Has the candidate disclosed diversity information_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_22_28_Confirm diversity information   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_22_28_Confirm diversity information - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_22_35_Ethnic group   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_22_35_Ethnic group - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_22_42_Which of the following best describes their Asian or Asian British background_   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_22_42_Which of the following best describes their Asian or Asian British background_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_22_48_Which of the following best describes their Black, African, Black British or Caribbean background_   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_22_48_Which of the following best describes their Black, African, Black British or Caribbean background_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_23_11_Which of the following best describes their Mixed or multiple ethnic groups background_   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_23_11_Which of the following best describes their Mixed or multiple ethnic groups background_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_23_26_Which of the following best describes their White background_   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_23_26_Which of the following best describes their White background_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_23_36_Which of the following best describes their Another ethnic group background_   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_23_36_Which of the following best describes their Another ethnic group background_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_23_58_Is the candidate disabled_   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_23_58_Is the candidate disabled_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_24_04_Confirm diversity information   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_24_04_Confirm diversity information - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_24_11_Which disabilities were disclosed_   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_24_11_Which disabilities were disclosed_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_24_19_Confirm diversity information   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_24_19_Confirm diversity information - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_24_33_Check record   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_24_33_Check record - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_24_41_Check record   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_24_41_Check record - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_24_55_GCSE details   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_24_55_GCSE details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_25_04_Confirm GCSE details   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_25_04_Confirm GCSE details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_25_24_Add undergraduate degree   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_25_24_Add undergraduate degree - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_25_44_Add undergraduate degree   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_25_44_Add undergraduate degree - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_25_59_Degree details   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_25_59_Degree details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_26_25_Confirm degree details   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_26_25_Confirm degree details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_26_36_Add undergraduate degree   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_26_36_Add undergraduate degree - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_27_46_Degree details   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_27_46_Degree details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_28_07_Confirm degree details   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_28_07_Confirm degree details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_28_19_Assessment details   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_28_19_Assessment details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_28_45_Confirm assessment details   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_28_45_Confirm assessment details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_28_59_Check record   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_28_59_Check record - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_29_08_Trainee submitted for TRN   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_29_08_Trainee submitted for TRN - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_29_16_Trainee teachers   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_29_16_Trainee teachers - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_29_29_Sally Jenkins   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_29_29_Sally Jenkins - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_29_37_Sally Jenkins   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_29_37_Sally Jenkins - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_29_52_Trainee ID (optional)   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_29_52_Trainee ID (optional) - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_30_01_Assessment details   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_30_01_Assessment details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_30_27_Sally Jenkins   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_30_27_Sally Jenkins - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_30_35_Recommend for QTS   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_30_35_Recommend for QTS - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_30_57_Check assessment details   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_30_57_Check assessment details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_31_02_Sally Jenkins   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_31_02_Sally Jenkins - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_35_03_Sally Jenkins   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_35_03_Sally Jenkins - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_35_11_Sally Jenkins   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_35_11_Sally Jenkins - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_35_27_Trainee teachers   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_35_27_Trainee teachers - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_35_37_Trainee teachers   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_35_37_Trainee teachers - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "2020.09.22_17_35_48_Trainee teachers   Register trainee teachers   GOV.UK",
      img: { src: "2020.09.22_17_35_48_Trainee teachers - Register trainee teachers - GOV.UK.png" }
    }]
}) }}
