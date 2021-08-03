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
    img: { src: "01-register-trainee-teachers.png" }
  }, {
    text: "Home",
    img: { src: "02-register-trainee-teachers.png" }
  }, {
    text: "Data requirements",
    img: { src: "03-data-requirements.png" }
  }, {
    text: "Add a trainee - What type of training are they on?",
    img: { src: "04-add-a-trainee.png" }
  }, {
    text: "Add a trainee - Type of training completed",
    img: { src: "05-add-a-trainee.png" }
  }, {
    text: "Programme details",
    img: { src: "06-programme-details.png" }
  }, {
    text: "This course has allocated places",
    img: { src: "07-this-course-has-allocated-places.png" }
  }, {
    text: "Confirm programme details",
    img: { src: "08-confirm-programme-details.png" }
  }, {
    text: "Add a trainee - Route into teaching completed",
    img: { src: "09-add-a-trainee.png" }
  }, {
    text: "Trainee personal details",
    img: { src: "10-trainee-personal-details.png" }
  }, {
    text: "Confirm personal details",
    img: { src: "11-confirm-personal-details.png" }
  }, {
    text: "Add a trainee - Personal details completed",
    img: { src: "12-add-a-trainee.png" }
  }, {
    text: "Contact details",
    img: { src: "13-contact-details.png" }
  }, {
    text: "Contact details - Outside the UK",
    img: { src: "14-contact-details.png" }
  }, {
    text: "Contact details - Inside the UK",
    img: { src: "15-contact-details.png" }
  }, {
    text: "Confirm contact details",
    img: { src: "16-confirm-contact-details.png" }
  }, {
    text: "Add a trainee - Contact details completed",
    img: { src: "17-add-a-trainee.png" }
  }, {
    text: "Has the trainee shared diversity information?",
    img: { src: "18-has-the-trainee-shared-diversity-information.png" }
  }, {
    text: "Confirm diversity information",
    img: { src: "19-confirm-diversity-information.png" }
  }, {
    text: "What is their ethnic group?",
    img: { src: "20-what-is-their-ethnic-group.png" }
  }, {
    text: "Which of the following best describes their White background?",
    img: { src: "21-which-of-the-following-best-describes-their-white-background.png" }
  }, {
    text: "Which of the following best describes their White background? - Another White background",
    img: { src: "22-which-of-the-following-best-describes-their-white-background.png" }
  }, {
    text: "Has the trainee shared that they are disabled?",
    img: { src: "23-has-the-trainee-shared-that-they-are-disabled.png" }
  }, {
    text: "Which disabilities were shared?",
    img: { src: "24-which-disabilities-were-shared.png" }
  }, {
    text: "Confirm diversity information",
    img: { src: "25-confirm-diversity-information.png" }
  }, {
    text: "Add a trainee - Diversity information completed",
    img: { src: "26-add-a-trainee.png" }
  }, {
    text: "Add undergraduate degree",
    img: { src: "27-add-undergraduate-degree.png" }
  }, {
    text: "Add undergraduate degree - UK degree",
    img: { src: "28-add-undergraduate-degree.png" }
  }, {
    text: "Add undergraduate degree - Non-UK degree",
    img: { src: "29-add-undergraduate-degree.png" }
  }, {
    text: "Degree details - UK degree",
    img: { src: "30-degree-details.png" }
  }, {
    text: "Confirm degree details - UK Degree",
    img: { src: "31-confirm-degree-details.png" }
  }, {
    text: "Degree details - Non-UK degree",
    img: { src: "32-degree-details.png" }
  }, {
    text: "Confirm degree details - Non-UK Degree",
    img: { src: "33-confirm-degree-details.png" }
  }, {
    text: "Add a trainee - All sections complete",
    img: { src: "34-add-a-trainee.png" }
  }, {
    text: "Confirm degree details",
    img: { src: "35-review-trainee-record.png" }
  }, {
    text: "Trainee submitted for TRN",
    img: { src: "36-trainee-submitted-for-trn.png" }
  }, {
    text: "Trainee teachers",
    img: { src: "37-trainee-teachers.png" }
  }, {
    text: "Trainee teachers - Filtered view",
    img: { src: "38-trainee-teachers.png" }
  }, {
    text: "Sarah Jones - Trainee details",
    img: { src: "39-sarah-jones.png" }
  }, {
    text: "Sarah Jones - Personal details and education",
    img: { src: "40-sarah-jones.png" }
  }, {
    text: "Sarah Jones - Timeline",
    img: { src: "41-sarah-jones.png" }
  }, {
    text: "Edit personal details",
    img: { src: "42-edit-personal-details.png" }
  }, {
    text: "Confirm personal details",
    img: { src: "43-confirm-personal-details.png" }
  }, {
    text: "Sarah Jones - Record updated",
    img: { src: "44-sarah-jones.png" }
  }, {
    text: "When did the trainee defer?",
    img: { src: "45-when-did-the-trainee-defer.png" }
  }, {
    text: "When did the trainee defer? - Custom date",
    img: { src: "46-when-did-the-trainee-defer.png" }
  }, {
    text: "Check deferral details",
    img: { src: "47-check-deferral-details.png" }
  }, {
    text: "Sarah Jones - Deferred",
    img: { src: "48-sarah-jones.png" }
  }, {
    text: "When did the trainee return?",
    img: { src: "49-when-did-the-teacher-return.png" }
  }, {
    text: "Check reinstatement details",
    img: { src: "50-check-reinstatement-details.png" }
  }, {
    text: "Sarah Jones - Reinstated",
    img: { src: "51-sarah-jones.png" }
  }, {
    text: "Withdraw trainee",
    img: { src: "52-withdraw-trainee.png" }
  }, {
    text: "Check withdrawal details",
    img: { src: "53-check-withdrawal-details.png" }
  }, {
    text: "Sarah Jones - Withdrawn",
    img: { src: "54-sarah-jones.png" }
  }, {
    text: "Paulette Feest - Record",
    img: { src: "55-paulette-feest.png" }
  }, {
    text: "Has the trainee passed their assessment?",
    img: { src: "56-has-the-trainee-passed-their-assessment.png" }
  }, {
    text: "Has the trainee passed their assessment? - Custom date",
    img: { src: "57-has-the-trainee-passed-their-assessment.png" }
  }, {
    text: "Check assessment details",
    img: { src: "58-check-assessment-details.png" }
  }, {
    text: "Trainee recommended for QTS",
    img: { src: "59-trainee-recommended-for-qts.png" }
  }, {
    text: "Paulette Feest - Recommended for QT",
    img: { src: "60-paulette-feest.png" }
  }, {
    text: "Trainees must pass their assessment to be recommended for QTS",
    img: { src: "61-trainees-must-pass-their-assessment-to-be-recommended-for-qts.png" }
  }]
}) }}
