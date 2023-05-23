---
title: No longer asking for a trainee’s home address
description: We’ve stopped importing, collecting and displaying home addresses.
date: 2023-05-19
---

We currently collect a trainee’s home address when:

- we import a trainee from the Manage teacher training applications service
- a user manually adds a trainee to Register

The Higher Education Statistics Authority (HESA) does not collect home addresses. This means that we do not have home addresses for trainees who are training with higher education institutions.

The DfE no longer needs to write to trainees at their home addresses. We now use email to send messages to them, for example when they’ve been awarded teaching status.

We should not collect more data than we need, so we’ve decided to stop importing or asking for home addresses. We’ll delete the home addresses we’ve already collected.

## How it works

We’ve removed home addresses from:

- the tasks which users complete when they manually add a trainee
- trainee records

### Manually adding a trainee

When users create a new trainee record, they need to complete a series of tasks. Previously the personal details task asked them to add:

- first names
- middle names
- last names
- date of birth
- sex
- nationality

The contact details task asked users to add:

- address
- email address

Now that we are not asking for the trainee’s address, we do not think it’s necessary to have a separate contact details task. Instead we’ll ask for the trainee’s email address as part of the personal details task.

![The add a trainee task list has a section for personal details and education. This includes tasks to add personal details, diversity information and degree. These are all marked as incomplete.](task-list.png)

We’ve decided to ask for the trainee’s email address on a separate page within the personal details task because:

- there are already a lot of questions about personal details
- an email address is a different type of information to name, date of birth, sex or nationality
- it’s more likely that users will read the hint text for the email address field if we ask for it in isolation

We’ve changed the wording to ask for ‘personal email address’ rather than just ‘email address’. Previously we relied on the hint text to make this distinction but we know that users often ignore hint text.

We’ve also made some changes to the hint text to say what we use email addresses for. This is not essential information but may help users understand why we want a personal email address.

![The personal email address question is on its own page. It has hint text which reads: “The trainee’s TRN will be sent to this address. They’ll also use it to sign in to access their QTS or EYTS certificate after they finish training.”](personal-email-address.png)

When we ask the user to confirm the trainee’s personal details, we replay the personal email address along with the other details which were entered.

![The user has to confirm that the personal details they added are correct. The details include full name, date of birth, sex, nationality and personal email address.](confirm-personal-details.png)

### Trainee record

We’ve changed the trainee record by:

- removing the contact details section
- putting personal email address in the personal details section

![The trainee record has a section for personal details. This includes full name, date of birth, sex, nationality and personal email address.](trainee-record-personal-details-and-education.png)
