---
title: Asking candidates to confirm who reference requests should be sent to
description: When candidates accept an offer, they also now have to confirm who should receive reference requests.
date: 2022-10-27
tags:
  - reference
ogImage:
  src: /apply-for-teacher-training/asking-candidates-to-confirm-who-reference-requests-should-be-sent-to/confirm-details.png
  alt: "Flow diagram showing questions related to home fee status"

---

{% from "email/macro.njk" import appEmail %}

![Illustration with heading: Confirm your reference details and accept your offer. Table showing: type, name, email, how you know them and for how long.](confirm-details.png)

We’ve [changed the references process](/changing-the-reference-process-to-make-it-easier-for-candidates-to-submit-applications) so that candidates do not need to receive references before they submit their application. They instead need to [give details of 2 people who can give a reference](/apply-for-teacher-training/asking-candidates-to-confirm-who-reference-requests-should-be-sent-to/).

When they accept an offer, candidates are given the chance to change these details.

## The issue

Candidates give details of people who can give references when they apply, but they may need to make changes before the reference requests are sent.

This may happen for example if:

- they did not include details for an academic reference but a provider has asked them to provide one
- someone is no longer able to give a reference, so the candidate needs to choose a different person
- someone has changed their email address and therefore would not receive the reference request

## What we changed

We made changes to:

- the content of the page which candidates see if they sign in after receiving an offer
- the page showing the details of an offer

We also:

- added a new page asking candidates to confirm who can give them references
- removed the page which asks candidates to confirm that they want to accept the offer

### What candidates see if they sign in after receiving an offer

![Screenshot showing page with the heading ‘Your application‘. The introduction shows the heading ‘Congratulations on your offer‘ and the content ‘You have 14 days (until 4 Matrch 2021) to respond. If you do not respond, your offer will automatically be declined.’ A box contains details of the offer, including the name of the training provider, the course, the ‘offer received‘ status and the conditions of the offer. These conditions include ‘Fitness to train to teach check‘, ‘Disclosure and barring service check’ and ‘Verification of GCSE maths and English certificates‘. Text under this tells the candidate to contact the provider for more information and mentions that the provider needs to check their references. A link underneath lets the candidate respond to the offer and repeats the deadline. Links outside the box on the right of the page let the candidate view their application or withdraw from the course.](offer.png)

When a candidate signs in after submitting their application, they see a summary card for each of their applications.

If a provider has made an offer with conditions, the summary card includes a ‘conditions’ section. We’ve added content which mentions references:

“They’ll confirm your place once you’ve met the conditions and they’ve checked your references.”

### Details of offer

![Screenshot showing page with the heading ‘Details of offer‘. There is a table showing the provider, course, salart, location and conditions for the offer. Under this is a note saying that if the candidate declines the offer or does not respond it time, they’ll be able to apply again. It also has a link to get help from a teacher training advisor. At the bottom of the page is the question ‘How do you want to respond to this offer?’ The options are ‘Accept offer and conditions’ or ‘Decline offer’. There's a green button to let the candidate continue after choosing an option.](offer-details.png)

After the candidate clicks on the ‘respond to offer’ link, they’re taken to a page with details of the offer. This repeats the conditions but also shows additional details such as the fees or salary.

For an offer with conditions, this page also says “They’ll confirm your place once you’ve met the conditions and they’ve checked your references.”

### Asking candidates to confirm who can give them references

![Screenshot showing page with the heading ‘Confirm your reference details and accept your offer’. The text under this expplains that the candidate can change the reference details before sending reference requests. There's a button to add details for another reference. Under that is a box for the details of each reference request, including name, type, email and how long the candidate has known them and for how long. There's a link to delete each set of details and links to change the individual details. At the bottom is a green button which says ‘Accept offer’.](confirm-reference-details.png)


We added a page with the h1 heading ‘Confirm your reference details and accept your offer’. It is very similar to the page used to [add reference details before submitting an application](/asking-candidates-for-reference-details-when-they-apply).

The page shows the details which the candidate submitted as part of their application. For each person who can give a reference, the page shows:

- type
- name
- email address
- how the candidate knows them and for how long

Before they click to accept the offer, the candidate can:

- delete reference details, so that a reference request is not sent
- change reference details
- add reference details, so that an additional reference request is sent

The ‘accept offer’ button only appears if the candidate has given details for at least 2 references.

After the candidate clicks the ‘accept offer’ button, they’re taken to a page where they can deal with their reference requests.

A success message appears at the top of the page they’re taken to, saying “You have accepted your offer for [course_and_code] at [provider]”. This message has not been changed.

#### Deleting reference details

![Screenshot showing page with the heading ‘Are you sure you want to delete the reference from Frankie?’. There is also a red button with the text ‘Yes I’m sure - delete this reference’](delete-reference-details.png)

If the candidate clicks a delete link, they’re taken to a page asking them to confirm the deletion. After they click the red button, they return to the page asking them to confirm who can give them references.

#### Changing reference details

If the candidate clicks a change link, they’re taken into [the journey which is used to add references before submitting an application](asking-candidates-for-reference-details-when-they-apply/).

After they make the change, they return to the page asking them to confirm who can give them references.

#### Adding details for another reference

If the candidate adds a reference, they use [the journey which is used to add references before submitting an application](asking-candidates-for-reference-details-when-they-apply/).

At the end of the journey, they return to the page asking them to confirm who can give them references.

#### References carried over from the old references process

![Screenshot showing a box with reference details in a table. These include type, name, email and how long the candidate has known them and for how long. There’s a link to allow the candidate to delete the details.](reference-already-given.png)

If a candidate originally applied or started their application before 6pm on 20 September 2022, they would have used the old references process.

They’ll use the new process if they apply again or continue their application in the 2022 to 2023 recruitment cycle.

Their application will contain the details of their reference requests from the old process, unless:

- the request email failed to send
- the person they asked for a reference said they could not give one
- the candidate deleted the details before they submitted their current application

The candidate will see the details of the reference request and will be able to:

- change the details or delete them if the reference has not been received
- delete the details if the reference has been received

If they delete the details, the reference will not be sent to the training provider.

## Emails

The service sends an email to a candidate when:

- they accept a conditional offer
- they accept an unconditional offer

### Conditional offer accepted

<!-- markdownlint-disable MD001 MD025 -->

{{ appEmail({
  subject: "You’ve accepted ((provider))’s offer to study ((course_and_code))",
  content: "

Dear ((name))

You’ve accepted ((provider))’s offer to study ((course_and_code)).

Your place will be confirmed when:

- ((provider)) has received and checked your references
- you’ve met your offer conditions

Sign into your account to check the progress of your reference requests and offer conditions.

[Sign into your account].

# If you’re unable to start training in ((month_and_year))

Some providers allow you to defer your offer. This means that you could start your course a year later.

Contact ((provider)) to find out if they’ll allow you to defer your offer. Asking them will not affect your existing offer.

# Get help

Call 0800 389 2500 or [chat online]

Monday to Friday, 8:30am to 5:30pm (except public holidays).
  "
}) }}

### Unconditional offer accepted

{{ appEmail({
  subject: "You’ve accepted ((provider))’s offer to study ((course_and_code))",
  content: "

Dear ((name))

You’ve accepted ((provider))’s offer to study ((course_and_code)).

((provider)) will check your references once they receive them.

They’ll let you know if they need further information before you start training.

Sign into your account to check the progress of your reference requests.

[Sign into your account].

# If you’re unable to start training in ((month_and_year))

Some providers allow you to defer your offer. This means that you could start your course a year later.

Contact ((provider)) to find out if they’ll allow you to defer your offer. Asking if it’s possible will not affect your existing offer.

# Get help

Call 0800 389 2500 or [chat online]

https://getintoteaching.education.gov.uk/#talk-to-us

Monday to Friday, 8:30am to 5:30pm (except public holidays).
  "
}) }}

<!-- markdownlint-enable MD001 MD025 -->

## Research

We did usability testing on the new flow with 8 participants who had previously applied for teacher training. We found no major usability issues.

However, some participants were confused as they thought that they would already have received their references before they applied. This may have been influenced by their recent experience of how the process used to work.

## Further work

We need to add a message about references for unconditional offers, to match the one we show for conditional offers.

We also need to make clearer on the offer page that choosing “Accept offer and conditions” will not accept the offer straight away. The page does not mention that the candidate will need to confirm their reference request details first.
