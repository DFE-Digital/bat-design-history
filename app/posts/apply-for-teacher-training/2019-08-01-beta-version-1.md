---
title: Creating our first interactive prototype
description: Testing an interactive version of the application form.
related:
  items:
  - text: Prototype v1
    description: |
      Username: `bat-apply`
      Password: `briantownley`
    href: https://apply-beta-prototype-v1.herokuapp.com
  - text: Findings and recommendations from usability testing
    href: https://docs.google.com/presentation/d/11n2OsN9LswmHab64FG0sIsQ-BijdS-GM
---
In June the Apply team started development of the candidate-facing aspects of the service. To ensure that what we are delivering is usable and understandable, we created an interactive prototype that we could use to test with users and validate our design decisions.

Using the content and structure of the [paper-based prototype](/apply-for-teacher-training/paper-based-application) as a foundation, combined with the common GOV.UK design system components, guidance and prototyping kit, we mocked up the user journeys and interactions candidates would use when completing their application online.

## The broader user journey

In order to provide a reasonable end-to-end journey to test with, we started to consider the broader structure of the service. We asked users to create an account, and provided a signed-in dashboard to give candidates an overview of the process, and their place within it.

Much of our focus up to this point had been around the questions we about a candidate’s eligibility and suitability for teaching. However, these questions form just a small part of the overall application process. Needing to find a term we could use to distinguish these questions from the later portions of the journey, we settled on ‘Your teaching profile’.

Alongside a prompt to complete this profile, we displayed a pre-populated course selection, and during testing, users were asked to imagine they had made these choices at some point prior to completing their profile.

After the teaching profile had been completed, users would then see an option to apply to each course. Clicking ‘Apply’, candidates could review and edit their answers before proceeding further. In the next step, they could provide information a training provider might need to consider when scheduling an interview, and in the final step, we provided an opportunity for candidates to tell providers anything else they felt relevant to their application.

Guiding users through lengthier sections of their profile
Building a digital version of the teaching profile meant we could think about how we guide users through some of its more complex sections. For qualifications, work history, school experience and reference sections, we used the following pattern:
* Provide some introductory guidance about what the section is for, and how the information will be used
* Ask candidates to add the relevant items (a qualification, a role, a job, a referee) one at a time
* Present an overview of the entered information, allowing them to review and edit their answers.

## Collecting structured responses

Building a digital form meant we could consider how to collect structured responses instead of free text answers. For example:
* UK-based applicants could use an address look-up service, and choose from a list of addresses based on their postcode
* Country/nationality questions could use an autocomplete input field, allowing applicants to choose from a predetermined list
* For UK-awarded degrees, we could provide a list of common degree awards (First, Upper second, etc.)
* For UK-awarded GCSEs, we could provide a list of equivalent and historical awards (GCE, Scottish Higher, etc.)
* For work history, we could automatically calculate any gaps between jobs, and allow candidates to provide an explanation for each.

## Updated fields

We made the following changes to the information we ask candidates to deliver a simpler, more user-centred design:

### ‘Title’ (removed)

This was felt unnecessary, and may possibly reveal gender information which isn’t required at this stage of the application
‘First name(s)’ and ‘Last name’ (combined)

Previous prototypes had separated first name and last name into 2 fields. We checked the GOV.UK design pattern and found it recommends a single field, because [not everyone’s name fits into the ‘first name last name’ pattern](https://design-system.service.gov.uk/patterns/names/). Having confirmed with DfE’s statisticians that a single field for names would give them the information they needed to map users coming from Get into Teaching, we were able to make the change.

### ‘What is your residence status?’ (updated)

Under the option, ‘I have the right to study and/or work in the UK’, we added a free text box asking ‘Please give details of your visa type, status or circumstances’. After provider feedback, we realised we needed to allow for complex circumstances not covered by a work or student visa.

### ‘Would you be interested in taking a subject knowledge enhancement (SKE) course?’ (removed)

Although some candidates expressed an interest in taking a SKE, especially to top up rusty areas of knowledge, this decision rests with providers. It was also felt that many candidates would feel they obliged to say yes to strengthen their application.

### ‘Have you passed your professional skills test?’ (removed)

This will [no longer be a requirement](https://www.gov.uk/government/news/changes-to-the-professional-skills-test-for-teachers) for future recruitment cycles.

### ‘Is English your first language?’ (updated)

Replaced ‘first’ with ‘main’, and gave candidates who speak English as their main language an opportunity to provide details of other languages they speak.

## Updated guidance

### Redesigned start page

Added information about basic eligibility requirements (to avoid wasting the time of candidates who might not meet entry requirements) and a link to the ‘Get school experience’ service (school experience is not mandatory, but nevertheless much preferred by providers).

### Academic qualifications

* Created start page content about the nature and purpose of the section and added reassurance for candidates still studying for their degree

* International qualifications – changed the hierarchy of guidance so that candidates are first advised to contact their provider, then Get into Teaching, and finally NARIC if need be. Our reasoning was that NARIC is the most expensive and confusing of the options, but some candidates may have started down this path and therefore need to be able to supply statements of equivalency etc.

*  Made allowance for candidates who might still be studying (UK and international)

For missing GCSEs:

* provided more contextual guidance where candidates might find it helpful: ‘Have you considered how you will meet this requirement in time for the start of your course? Get advice from a training provider or Get into Teaching’

* Allowed for the possibility that not all candidates will have chosen a provider at this stage

### Work history

* Created a page for people (parents, carers etc) who might have been out of the workplace for 5 years, and gave them an opportunity to explain their situation.
* We gave recent graduates the opportunity to include work before and during university.

### School experience

* Explained to users that we’d ask for detailed insights about their school experience later, in the ‘Why you want to be a teacher’ section.

### References

* Changed the hierarchy of information so that fewer recent graduates were reassured sooner about who to choose as a referee.
* Adjusted reference request form to reflect the relationship/timeframe aspects of the section.
* Provided hint text on time frames to reflect the fact the length of time can vary hugely not necessarily to the detriment of the reference.

### Personal statement

* Originally labelled ‘Motivation’, we’d changed this to ‘Your teaching vocation’. However, user research and informal office discussion suggested this was not a well-understood term. For now, we’ve called the section ‘Why you want to be a teacher’ (to be continued…)

### Submit application

* Added guidance on criminal convictions. User research among providers suggests that, while an enhanced DBS will reveal all convictions, some of which will permanently disbar candidates, other convictions will not. Providers adopt different policies on a criminal record, with some wanting early notification of past convictions. For this reason we’ve suggested candidates concerned about past convictions should contact their provider for candid advice.

## Research findings

While the prototype tested well, there were a few areas that stood out as needing improvement:

* Most users understood where they were in completing their teaching profile but were less confident about where this sat within the overall process. With less thought given to the broader application journey – and asking users to imagine they had already chosen a set of courses – this was to be expected.

* Most users could complete the application to what they deemed a ‘satisfactory’ standard, however, there was a lack of clarity on expectations for free text fields, including type, amount and format of content, and whether these fields were mandatory or optional.

* Most users expressed a lack of clarity around accounts, not understanding what type of account they were creating or how it related to other government services.

* Some users expressed confusion around section headers, with some not certain what to expect for ‘Subject knowledge’ and ‘Your teaching vocation’ sections.

This first round of usability testing also demonstrated the need for confirmation emails to be included as part of the journeys we test.
