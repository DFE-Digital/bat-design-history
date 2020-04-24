---
title: New course wizard as launched for accredited bodies
description: The new course wizard is now available to accredited bodies.  
date: 2020-02-15
---
Development of the new course wizard began in September 2019 and was made available to accredited bodies in mid-February 2020.

## Access for accredited bodies

Accredited bodies are able to access the new course wizard from the [Courses page](https://www.qa.publish-teacher-training-courses.service.gov.uk/organisations/T92/2020/courses).

## Access for school directs

Access to the wizard is yet been provided to school directs.

## Why the wizard is not yet available to all users

School directs will not receive access to the new course wizard until Publish can automatically notify their accredited body that a course has been created. 

An accredited body needs to be notified immediately when courses they accredit are created so they can maintain accurate data in their record systems. This was highlighted in [Accredited bodies research - Reporting round 2](publish-teacher-training-courses/accredited-bodies-research-round-2).
 
Publish will shortly [provide these notifications](https://bat-design-history.netlify.com/publish-teacher-training-courses/notifications-mvp) to ensure this need is met. Once notifications are enabled all users will have access to the wizard.

## Course creation for school directs

All school direct users are required to [submit a google form](/publish-teacher-training-courses/new-course-google-form) to request a new course. 

After recieving the request, DfE support creates the course manually and notifies both the school direct and associated accredited body via email of the new course’s availability.

## How to access the new course wizard via URL

Access the course wizard by appending `/new` to an organisations course page URL in Publish.

[Example URL](https://www.qa.publish-teacher-training-courses.service.gov.uk/organisations/153/2020/courses/new)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Add a new course"
    },
    {
      text: "What type of course"
    },
    {
      text: "Pick a primary subject"
    },
    {
      text: "Pick a secondary subject"
    },
    {
      text: "Specify an age range"
    },
    {
      text: "Pick a course outcome"
    },
    {
      text: "Is this a teaching apprenticeship"
    },
    {
      text: "Full time or part time"
    },
    {
      text: "Pick the locations for this course"
    },
    {
      text: "GCSE requirements for applicants"
    },
    {
      text: "When will applications open"
    }, 
    {
      text: "When does the course start"
    },
    {
      text: "Check your answers before confirming"
    },
    {
      text: "Your course has been created"
    }
  ]
}) }}
