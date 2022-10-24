---
title: Asking candidates to confirm who reference requests should be sent to
description: When candidates accept an offer, they also now have to confirm who should receive reference requests.
date: 2022-10-24
---

{% from "email/macro.njk" import appEmail %}

We’ve [changed the references process](/changing-the-reference-process-to-make-it-easier-for-candidates-to-submit-applications) so that candidates:

- only need to give details of people who can give references, rather than having to request and receive references before submitting their application
- must confirm these details when they accept an offer, so that reference requests can be sent
- can check on the progress of reference requests - this includes requesting more, cancelling requests and sending reminders

## The issue

We needed to design a way for candidates to confirm details of references when they accept an offer.

Candidates give details when they apply, but they may need to make changes before their reference requests are sent. This may happen for example if:

- they didn't originally include an academic reference but a provider has asked them to provide one
- someone is no longer able to give a reference, so the candidate needs to choose a different person
- someone has changed their email address and therefore would not receive the reference request

## What we changed

We made changes to:

- the content of the page which candidates see if they sign in after receiving an offer
- the ‘details of offer’ page

We also:

- added a new page asking candidates to confirm who can give them references
- removed the page which asks candidates to confirm that they want to accept the offer

### What candidates see if they sign in after receiving an offer

When a candidate signs in after submitting their application, they see a summary card for each of their applications.

If a provider has made an offer with conditions, the summary card includes a ‘conditions’ section. We’ve added content which mentions references:

“They’ll confirm your place once you’ve met the conditions and they’ve checked your references.”

### Details of offer

After the candidate clicks on the ‘respond to offer’ link, they’re taken to a page with details of the offer. This repeats the conditions but also shows additional details such as the fees or salary.

For an offer with conditions, this page says “They’ll confirm your place once you’ve met the conditions and they’ve checked your references.”

### Asking candidates to confirm who can give them references

We added a page with the h1 heading ‘Confirm your reference details and accept your offer’. It is very similar to the [page used to add reference details before submitting an application](/).

The page shows the details which the candidate submitted as part of their application. For each person who can give a reference, the page shows:

- type
- name
- email address
- how the candidate knows them and for how long

Before they click to accept the offer, the candidate can:

- delete reference details, so that a reference request is not sent
- change reference details
- add reference details, so that additional requests are sent

The ‘accept offer’ button only appears if the candidate has given details for at least 2 references.

After the candidate clicks the ‘accept offer’ button, they’re taken to a [page where they can deal with reference requests](/) and see the status of their offer conditions.

A success message appears at the top of the page they’re taken to, saying “You have accepted your offer for ((course_and_code)) at ((provider))”. This message has not been changed.

### Deleting reference details

If the candidate clicks a delete link, they’re taken to a page asking them to confirm the deletion. This is the same as in the journey which is used to add references before submitting an application.

### Adding details for another reference

If the candidate adds a reference, they use the journey which is used to add references before submitting an application.

### References carried over from the old references process

If a candidate originally applied before 4 October 2022, they would have used the old references process. This means that they would have received their references before submitting their application.

The candidate still sees the same reference request details. They do not see the reference itself.

The candidate can delete the details so that the training providers will not see the reference. They cannot change the details, so change links do not appear.

## Emails

The service sends an email to a candidate when:

- they accept a conditional offer
- they accept an unconditional offer

When the candidate accepts their offer, the service sends an email requesting references to each of the people whose details they gave.



## Further work

We need to add a message about references for unconditional offers, to match the one we show for conditional offers.
