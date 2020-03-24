---
title: Apply as launched on 26 November 2019
description: The initial pilot with one provider.
date: 2019-11-29
---

On 26 November 2019 we launched the initial Apply pilot with one provider, Royal Academy of Dance (RAD).

## What we descoped for pilot

* Course selection simplified to account for single course and provider
* International qualifications
* International addresses
* Features needed for non UK, EU and EEA citizens
* Referee forms (we use a Google Form)
* Individual work breaks ‘automatic breaks’ (replaced with a summary)
* Structured qualification information
* Tailoring of personal statements
* Postcode based address lookups
* Referee types
* Amending an application after submission (can do via support)
* Amending contact details (can do via support)
* Withdrawing your application (can do via support)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Start page",
    id: "01-start-page"
  }, {
    text: "Course on find",
    id: "02-course-on-find"
  }, {
    text: "Check eligibility",
    id: "03-check-eligibility"
  }, {
    text: "Not eligible",
    id: "04-not-eligible"
  }, {
    text: "Sign up",
    id: "05-sign-up"
  }, {
    text: "Sign up with errors",
    id: "06-sign-up-with-errors"
  }, {
    text: "Check your email after sign up",
    id: "07-check-your-email-after-sign-up"
  }, {
    text: "Incomplete application",
    id: "08-incomplete-application"
  }, {
    text: "Sign in",
    id: "09-sign-in"
  }, {
    text: "Choosing your courses",
    id: "20-choosing-your-courses"
  }, {
    text: "Have you chosen a course",
    id: "21-have-you-chosen-a-course"
  }, {
    text: "Which training provider",
    id: "22-which-training-provider"
  }, {
    text: "Which location",
    id: "24-which-location"
  }, {
    text: "Which course",
    id: "25-which-course"
  }, {
    text: "Course choices",
    id: "26-course-choices"
  }, {
    text: "Delete course",
    id: "27-delete-course"
  }, {
    text: "Application with choices complete",
    id: "28-application-with-choices-complete"
  }, {
    text: "Personal details",
    id: "30-personal-details"
  }, {
    text: "Personal details review",
    id: "31-personal-details-review"
  }, {
    text: "Contact details",
    id: "32-contact-details"
  }, {
    text: "What is your address",
    id: "33-what-is-your-address"
  }, {
    text: "Contact details review",
    id: "34-contact-details-review"
  }, {
    text: "Work history",
    id: "40-work-history"
  }, {
    text: "Explain time out of workplace",
    id: "41-explain-time-out-of-workplace"
  }, {
    text: "Add job",
    id: "42-add-job"
  }, {
    text: "Work history review",
    id: "43-work-history-review"
  }, {
    text: "Explain work breaks",
    id: "44-explain-work-breaks"
  }, {
    text: "Delete job",
    id: "45-delete-job"
  }, {
    text: "Volunteering",
    id: "50-volunteering"
  }, {
    text: "No volunteering",
    id: "51-no-volunteering"
  }, {
    text: "Add volunteering role",
    id: "52-add-volunteering-role"
  }, {
    text: "Volunteering review",
    id: "53-volunteering-review"
  }, {
    text: "Delete role",
    id: "54-delete-role"
  }, {
    text: "Add undergraduate degree",
    id: "60-add-undergraduate-degree"
  }, {
    text: "Degree review",
    id: "61-degree-review"
  }, {
    text: "Add another degree",
    id: "62-add-another-degree"
  }, {
    text: "Delete degree",
    id: "63-delete-degree"
  }, {
    text: "Maths GCSE",
    id: "64-maths-gcse"
  }, {
    text: "Maths GCSE year and grade",
    id: "65-maths-gcse-year-and-grade"
  }, {
    text: "Maths review",
    id: "66-maths-review"
  }, {
    text: "No maths qualification yet",
    id: "67-no-maths-qualification-yet"
  }, {
    text: "Maths review without qualification",
    id: "68-maths-review-without-qualification"
  }, {
    text: "Maths other qualification",
    id: "69-maths-other-qualification"
  }, {
    text: "Maths review other qualification",
    id: "70-maths-review-other-qualificationpng"
  }, {
    text: "Science grade and year with guidance",
    id: "71-science-grade-and-year-with-guidance"
  }, {
    text: "Other relevant qualifications",
    id: "72-other-relevant-qualifications"
  }, {
    text: "Other qualifications review",
    id: "73-other-qualifications-review"
  }, {
    text: "Delete qualification",
    id: "74-delete-qualification"
  }, {
    text: "Why do you want to be a teacher",
    id: "75-why-do-you-want-to-be-a-teacher"
  }, {
    text: "Why do you want to be a teacher review",
    id: "76-why-do-you-want-to-be-a-teacher-review"
  }, {
    text: "Subject knowledge",
    id: "77-subject-knowledge"
  }, {
    text: "Subject knowledge review",
    id: "78-subject-knowledge-review"
  }, {
    text: "Interview preferences",
    id: "79-interview-preferences"
  }, {
    text: "Interview preferences not set",
    id: "80-interview-preferences-not-set"
  }, {
    text: "Interview preferences review",
    id: "81-interview-preferences-review"
  }, {
    text: "Choosing your referees",
    id: "82-choosing-your-referees"
  }, {
    text: "Details of referee",
    id: "83-details-of-referee"
  }, {
    text: "Referee review with 1 referee",
    id: "84-referee-review-1-referee"
  }, {
    text: "Referee review with 2 referees",
    id: "85-referee-review-2-referees"
  }, {
    text: "Review application",
    id: "86-review-application"
  }, {
    text: "Review with error",
    id: "87-review-with-error"
  }, {
    text: "Submit application",
    id: "88-submit-application"
  }, {
    text: "Submitted application",
    id: "89-submitted-application"
  }, {
    text: "Application submitted email",
    id: "89-application-submitted-email"
  }, {
    text: "Emails sent to referees",
    id: "89-emails-sent-to-referees"
  }, {
    text: "Application dashboard",
    id: "90-application-dashboard"
  }, {
    text: "Editing your application",
    id: "91-editing-your-application"
  }, {
    text: "Accessibility statement",
    id: "96-accessibility-statement"
  }, {
    text: "Terms of use",
    id: "97-terms-of-use"
  }, {
    text: "Privacy policy",
    id: "98-privacy-policy"
  }, {
    text: "Cookies",
    id: "99-cookies"
  }]
}) }}
