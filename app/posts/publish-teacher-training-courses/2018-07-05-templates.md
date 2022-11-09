---
title: Templates
description: Use templates to share information between courses.
date: 2018-07-05
screenshots:
  items:
    - text: Courses
      caption: The courses view (unfolded, showing each variant of a course) with a column showing which template each course uses. If the course doesn’t use a template then ‘Custom course’ is displayed.
    - text: Templates
      caption: |
        A tab for templates showing all templates an organisation has made. This table might be expanded to include how many courses each one is applied to.

        ### Results

        Users navigated to and from this list easily. One user expected the table of templates to eventually show state – eg published or approved.
    - text: New template
      caption: |
        Create a template by choosing a name.

        ### Results

        Users followed our guidance and experimented with template names similar to the one suggested. Names used were:

        * Secondary PGCE courses
        * Primary PGCE courses
        * Tuition fee
        * Secondary PGCE information
        * Secondary PGCE - core
        * History Secondary PGCE course
        * Secondary French PGCE
        * Primary Non-Salaried
        * English
        * Secondary PGCE (M) QTS
        * Secondary St Marys Unsalaried
        * SCITT
        * Darrick Wood SDS (SDS means ‘school direct salaried’)
    - text: Template
      caption: |
        A template looks the same as a course. It can be edited in parts and previewed.

        ### Results

        Sometimes users couldn’t tell if they were looking at a template or a course.

        After entering information it is summarised on this page, some users then mistook this page to be a preview of the course, thinking that this might be what candidates would see.

        We might want to switch this to the simpler [task-list pattern](https://design-system.service.gov.uk/patterns/task-list-pages/) that shows ‘completed’ badges, maybe indicating word counts too.
    - text: Set fields for a template
      caption: An example of fields available for a template.
    - text: Template preview
      caption: |
        A template preview needs to indicate:

        * that it’s a template
        * which bits will vary by course

        Hypothesis: There might be a need to indicate where each field can be edited.

        ### Results

        Users were confused about the missing “about your organisation” and “training with a disability” fields. Most did find where to add these fields eventually but the section previews should point to where information can be entered.
    - text: Apply template to courses
      caption: |
        A bulk editing screen to apply a template to many courses at once. This could be delivered in a later iteration of templates.

        ### Results

        Users who found this page were able to apply templates to courses. Most users however applied courses one by one through the course view (below).
    - text: Pick a template for a course
      caption: |
        When navigating to a course users are presented with a choice on how to proceed. They can pick a template or choose to write a custom course description.

        ### Results

        Users often clicked through to one of these pages as their first action. A prompt asking them to create their first template worked well.

        When presented with a list of templates users were able to make a choice easily and understood the outcome. Some users were distracted or confused by the ‘View template’ link in the form.

        Writing custom course content was also understood.
    - text: Template selected for a course
      caption: |
        Once a template is selected a user can preview the course or click through to the template itself. No other fields are needed.

        ### Results

        Users searched this page to find a way to tweak or modify a template for a specific course. Some did this on the preview too.
    - text: Don’t use a template
      caption: If a custom course is selected the course fields will appear and the course can be previewed and submitted to DfE for the QA process.
    - text: Course preview
---

A first pass at providing users with a template function.

[BATSA-402](https://dfedigital.atlassian.net/browse/BATSA-402)

## Why use templates?

For many training providers there is great similarity between the courses they offer for different subjects. Users need an easy way to share information between these courses so they don’t have to copy and paste content between them. Users also need to easily update all courses that share information, so that they all remain consistent, again without needing to copy and paste.

We’ve observed in user research that without the ability to share information users are likely to use copy and paste.

## Template user research

To test templates we ran unmoderated remote research sessions with 4 training providers, and we visited 3 further providers.

We attempted many more remote sessions but some users didn’t complete the exercise and others couldn’t record the session because of network firewalls or IT restrictions.

More about our research in confluence: [Confluence](https://dfedigital.atlassian.net/wiki/spaces/BaT/pages/440074245/Testing+templates+and+multiple+orgs)

### Unmoderated sessions

- [University of Sunderland](https://lookback.io/watch/Ww6yAHxHiNB95vLwR)
- [Surrey South Farnham](https://lookback.io/watch/9nNasdJrSy7rJ4jYb)
- [Excalibur TSA](https://lookback.io/watch/PBqjHp7QFt65r5Q2x)
- [University of Reading – 1](https://lookback.io/watch/Der6yQKnYKaN3iuyS)
- [University of Reading – 2](https://lookback.io/watch/Yy7TNgYpKT6dXDWF6)
- [University of Reading – 3](https://lookback.io/watch/ziQcSNFCbY6gmKth6)
- [University of Reading – 4](https://lookback.io/watch/e4dYojoqk5ZMyEW56)

### In-person moderated sessions

- [Catholic Teaching Alliance](https://lookback.io/watch/6dwaSDCngbuPTiL4x)
- [West London Teaching Schools Alliance](https://lookback.io/watch/CCdNXjjh34amgbWzK)
- [Bromley Schools Collegiate](https://lookback.io/dfe-digital/bromley-multiple-orgs-and-templates)

## What goes into a template?

A template should have an identical structure to a course. eg About this course, course fees and length, and course requirements.

A course either uses a template wholesale or is completely custom. Our hypothesis is that a middle-ground, where a user can pick and choose which fields to copy or use, will be too complex a concept to explain and build, especially regarding ongoing maintenance and consistency.

### Results

We found that users expect to be able to apply a template and then tweak it so they can add subject or course specific details. They also expect to be able to update a template and have that change apply to all courses using the template.

For example we saw that a Primary course is very similar to Primary with special educational needs, but the latter needs some extra supporting text.

Some users made their courses generic to use templates whereas others noted that they wouldn’t use templates without the ability to tweak – instead opting for the ‘Custom course’ every time. Users said they need ‘elements of templates’, or to ‘pick and choose’.

Without changes we risk making it easy for providers to not communicate the differences between their courses.

Follow-up design ticket: [BATSA-459](https://dfedigital.atlassian.net/browse/BATSA-459)

## Allowing multiple templates

Training providers can have similarity between courses in many ways. All of their PGCE courses might be the same, while their QTS all follow a different pattern. The same could be true for secondary vs primary. If a provider uses multiple accrediting providers then an accrediting provider template could work.

### Results

Multiple templates were largely useful and understood by users.

## Template limits and risks

Because a template includes all course fields it might be inappropriate to use them across certain courses. For example, by setting the fees on a template to those of a PGCE course (£9,000), this template shouldn’t then be applied to a QTS course – which costs less. There’s a risk that users could apply these templates wrongly and show incorrect information to users.

### Results

We saw one user incorrectly apply a template, meaning a course showed the wrong fees. This may have been a symptom of the research as they didn’t spend too long checking their course information during the session.

Follow-up ticket to look at template validation, warnings and QA: [BATSA-452](https://dfedigital.atlassian.net/browse/BATSA-452)

We saw 2 users misunderstand templates, they created subject specific course templates that could only ever apply to one course. However these users also did not fully engage with the exercise and did not complete the task set. We expected to see more users struggle with the concept of templates but were encouraged to see that the idea was largely well understood.

## Templates in UCAS

There’s some concept of a template in the tool provided by UCAS. Users can select a training programme from which they can copy fields. Though once a copy has been made no subsequent edits are updated – users must resort to copy and paste again.

[UCAS documentation for ‘Entry profiles’](https://www.ucas.com/file/115116/download?token=Du-edwFy

*[PGCE]: Postgraduate Certificate in Education
*[PGDE]: Postgraduate Diploma in Education
*[QTS]: Qualified Teacher Status
*[UCAS]: Universities and Colleges Admissions Service
