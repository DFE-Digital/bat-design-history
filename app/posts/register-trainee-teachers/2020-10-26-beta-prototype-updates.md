---
title: Beta prototype updates
description: How the prototype looked for round 2 of research
date: 2020-10-26
---

Overall the response to the prototype in the [first round of research](/register-trainee-teachers/beta-prototype-research-round-1/) was positive.

> This is very different to DTTP! It’s more friendly, a lot bigger and brighter. It’s a lot clearer.

> I think if this could be rolled out across everything [all routes], then it would make my job a lot easier.

Users intuitively knew how to navigate the prototype and they understood what data we were requesting from them.

## User-facing updates

Our response to the findings from round one of of research as well as additional feature development include the following updates:

* Support for multiple routes has been added with the second route, provider-led now available.
* Allocations data is now being requested on the provider-led route when creating records with Physical Education courses.
* Filter functionality has been enhanced when viewing teacher records. Users can now filter by route and subject, search by name and trainee ID and sort by date updated and last name.
* A timeline has been included on a record that lists key events in a trainees record.   
* Trainees can now be deferred and reinstated.
* Trainees can now be withdrawn.
* A homepage has been introduced which includes an overview of trainee statuses.
* Improvements on how we ask for international addresses, gender, ethnicity and disabilities have been made. 
* A [prototype settings](https://register-prototype.herokuapp.com/admin) page has been added which enables features to be toggled on and off. 
* Ongoing iteration of content throughout the prototype with an focus on ensuring our use of terminology is consistent.
* We have hidden the guidance section to test the hypothesis that guidance may not be needed.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Start",
      img: { src: "2020.11.02_12_16_01_Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Home",
      img: { src: "2020.11.02_12_16_09_Register for teacher training - GOV.UK.png" }
    }, {
      text: "Data requirements",
      img: { src: "2020.11.02_12_16_20_Data requirements - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add a trainee - What type of training are they on?",
      img: { src: "2020.11.02_12_16_42_Add a trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add a trainee - Type of training completed",
      img: { src: "2020.11.02_12_16_58_Add a trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Programme details",
      img: { src: "2020.11.02_12_17_09_Programme details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "This course has allocated places",
      img: { src: "2020.11.02_12_17_48_This course has allocated places - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm programme details",
      img: { src: "2020.11.02_12_17_55_Confirm programme details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add a trainee - Route into teaching completed",
      img: { src: "2020.11.02_12_18_03_Add a trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Trainee personal details",
      img: { src: "2020.11.02_12_18_55_Trainee personal details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm personal details",
      img: { src: "2020.11.02_12_19_33_Confirm personal details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add a trainee - Personal details completed",
      img: { src: "2020.11.02_12_19_41_Add a trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Contact details",
      img: { src: "2020.11.02_12_19_53_Contact details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Contact details - Outside the UK",
      img: { src: "2020.11.02_12_20_01_Contact details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Contact details - Inside the UK",
      img: { src: "2020.11.02_12_20_10_Contact details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm contact details",
      img: { src: "2020.11.02_12_21_48_Confirm contact details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add a trainee - Contact details completed",
      img: { src: "2020.11.02_12_21_58_Add a trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Has the trainee shared diversity information?",
      img: { src: "2020.11.02_12_22_07_Has the trainee shared diversity information_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm diversity information",
      img: { src: "2020.11.02_12_22_17_Confirm diversity information - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "What is their ethnic group?",
      img: { src: "2020.11.02_12_22_28_What is their ethnic group_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Which of the following best describes their White background?",
      img: { src: "2020.11.02_12_22_35_Which of the following best describes their White background_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Which of the following best describes their White background? - Another White background",
      img: { src: "2020.11.02_12_22_44_Which of the following best describes their White background_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Has the trainee shared that they are disabled?",
      img: { src: "2020.11.02_12_23_25_Has the trainee shared that they are disabled_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Which disabilities were shared?",
      img: { src: "2020.11.02_12_23_35_Which disabilities were shared_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm diversity information",
      img: { src: "2020.11.02_12_23_48_Confirm diversity information - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add a trainee - Diversity information completed",
      img: { src: "2020.11.02_12_25_02_Add a trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add undergraduate degree",
      img: { src: "2020.11.02_12_25_11_Add undergraduate degree - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add undergraduate degree - UK degree",
      img: { src: "2020.11.02_12_25_18_Add undergraduate degree - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add undergraduate degree - Non-UK degree",
      img: { src: "2020.11.02_12_25_26_Add undergraduate degree - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Degree details - UK degree",
      img: { src: "2020.11.02_12_26_10_Degree details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm degree details - UK Degree",
      img: { src: "2020.11.02_12_26_51_Confirm degree details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Degree details - Non-UK degree",
      img: { src: "2020.11.02_12_28_01_Degree details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm degree details - Non-UK Degree",
      img: { src: "2020.11.02_12_28_17_Confirm degree details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Add a trainee - All sections complete",
      img: { src: "2020.11.02_12_28_35_Add a trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm degree details",
      img: { src: "2020.11.02_12_28_42_Review trainee record - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Trainee submitted for TRN",
      img: { src: "2020.11.02_12_28_51_Trainee submitted for TRN - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Trainee teachers",
      img: { src: "2020.11.02_12_29_04_Trainee teachers - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Trainee teachers - Filtered view",
      img: { src: "2020.11.02_12_29_36_Trainee teachers - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Sarah Jones - Trainee details",
      img: { src: "2020.11.02_12_30_03_Sarah Jones - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Sarah Jones - Personal details and education",
      img: { src: "2020.11.02_12_30_13_Sarah Jones - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Sarah Jones - Timeline",
      img: { src: "2020.11.02_12_30_29_Sarah Jones - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Edit personal details",
      img: { src: "2020.11.02_12_31_09_Edit personal details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Confirm personal details",
      img: { src: "2020.11.02_12_31_22_Confirm personal details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Sarah Jones - Record updated",
      img: { src: "2020.11.02_12_32_04_Sarah Jones - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "When did the trainee defer?",
      img: { src: "2020.11.02_12_32_23_- Register trainee teachers - GOV.UK.png" }
    }, {
      text: "When did the trainee defer? - Custom date",
      img: { src: "2020.11.02_12_32_28_- Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Check deferral details",
      img: { src: "2020.11.02_12_32_39_Check deferral details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Sarah Jones - Deferred",
      img: { src: "2020.11.02_12_32_50_Sarah Jones - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "When did the trainee return?",
      img: { src: "2020.11.02_12_33_00_- Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Check reinstatement details",
      img: { src: "2020.11.02_12_33_06_Check reinstatement details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Sarah Jones - Reinstated",
      img: { src: "2020.11.02_12_33_12_Sarah Jones - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Withdraw trainee",
      img: { src: "2020.11.02_12_33_25_Withdraw trainee - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Check withdrawal details",
      img: { src: "2020.11.02_12_33_41_Check withdrawal details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Sarah Jones - Withdrawn",
      img: { src: "2020.11.02_12_33_47_Sarah Jones - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Paulette Feest - Record",
      img: { src: "2020.11.02_12_36_13_Paulette Feest - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Has the trainee passed their assessment?",
      img: { src: "2020.11.02_12_36_19_Has the trainee passed their assessment_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Has the trainee passed their assessment? - Custom date",
      img: { src: "2020.11.02_12_36_37_Has the trainee passed their assessment_ - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Check assessment details",
      img: { src: "2020.11.02_12_36_52_Check assessment details - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Trainee recommended for QTS",
      img: { src: "2020.11.02_12_36_59_Trainee recommended for QTS - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Paulette Feest - Recommended for QT",
      img: { src: "2020.11.02_12_37_11_Paulette Feest - Register trainee teachers - GOV.UK.png" }
    }, {
      text: "Trainees must pass their assessment to be recommended for QTS",
      img: { src: "2020.11.02_12_37_26_Trainees must pass their assessment to be recommended for QTS - Register trainee teachers - GOV.UK.png" }
    }]
}) }}
