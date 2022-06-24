---
title: Making references an offer condition
description: Exploring how providers can request and review references after a candidate accepts an offer.
date: 2022-06-22
screenshots:
  items:
    - text: Add offer conditions
      src: make-offer--offer-conditions.png
    - text: Check details and make an offer
      src: make-offer--check-details.png
    - text: Offer made
      src: application--offer-made.png
    - text: References page
      src: application--references.png
    - text: Offer page with references condition pending
      src: application--offer-references-pending.png
    - text: Update status of conditions
      src: update-status-conditions--status-conditions.png
    - text: Check details and mark conditions as met
      src: update-status-conditions--check-details.png
    - text: Conditions marked as met
      src: application--conditions-met.png
---

Candidates for teacher training must currently include 2 references as part of their application.

We know that providing references slows down or deters some candidates. For example, they may need to ask their employer for a reference even though they do not yet have a place on a course.

We’ve discussed ways to make it easier for candidates to submit their application, including:

- no longer gathering references in the service, instead giving contact details to providers
- gathering reference details as part of the application but only requesting references after the candidate accepts an offer
- gathering reference details and requesting references after the candidate accepts an offer

We decided to test a design based on the last of these. We want to find out more about the effect this change would have on candidates and providers.

## Data analysis

Analysis in May 2022 of data for the current recruitment cycle found that:

- 93.5% of candidates with unsubmitted applications had not completed the references section
- 2,011 candidates with unsubmitted applications only had the references left to complete
- 49.4% of candidates with only references left to complete had not entered any reference details
- 46.2% of candidates with only references left to complete were waiting for a response for at least one reference

We also found that 73.3% of candidates who had not requested references were over 25, but only 68.8% of the total candidates were over 25. This suggests that getting references may be more of an obstacle to candidates changing career.

## What we did

We’ve assumed that candidates will no longer be asked for any reference details when they apply.

Instead, the provider will request references when they make an offer. References will be treated as a condition of the offer.

Providers will need to mark the condition as met once they’ve received acceptable references.

## How it works

References no longer appear in the application details page.

### Making an offer

When the provider makes an offer, they’re asked to add conditions as usual.

There are currently 2 standard conditions, which have pre-selected checkboxes but can be unselected. They are:

- Disclosure and Barring Service check
- fitness to train to teach check

We’ve added a third standard condition for references. There’s a text box so that the user can say what references they need.

This means that they can ask for references based on the candidate’s circumstances. For example, if the candidate graduated recently then they can ask for an academic reference.

The text entered by the user will appear as a condition of the offer.

If the user leaves the references checkbox ticked but does not enter any text, they get an error message when they click to continue.

### After the candidate accepts an offer

For this design, we’ve assumed that the candidate will:

- request references at the same time as they accept an offer
- be able to return to the candidate service and request more references, for example if there’s no response to a request

When the candidate accepts an offer, the status of their application changes to ‘conditions pending’ as usual. A new ‘references’ page appears in their application, with content saying:

- how many references the candidate has received - this will be hidden until at least 1 reference has been received
- how many references the candidate has requested but not yet received
- what type of references they’ve requested, for example academic or professional
- when they requested the references

We will not indicate reference requests which have been:

- declined by the person asked to give the reference
- cancelled by the candidate

This is because users could interpret these as being negative, which would be unfair to candidates.

### Receiving references

When a reference is received, the provider is sent an email which tells them:

- the name of the candidate
- the course the candidate applied for
- how many references the candidate has received in total - this is because the provider may not want to click through if it’s the first reference

A link in the email takes the user to the references page in the candidate’s application.

The references page will have been updated so that:

- the received reference is not mentioned in the list of requested references
- details of the received reference appears on the page

The most recently received reference appears first. This is so that it is easier to spot that something has changed.

### Marking the references condition as met or not met

If the provider is satisfied with the candidate’s references, they can go to the offer page and mark the condition is met. There are no changes to this journey.

If the provider is not satisfied with the candidate’s references, they can either:

- ask them for more references - this will be done outside the service
- go to the offer page and mark the condition as not met, which will move the application to the ‘conditions not met’ status

## Further considerations

We plan to research this design with users.

If we go ahead with it, we’ll need to:

- decide how to show references in the timeline and activity log
- add emails about references to the email notifications preferences page, so that providers can choose whether or not to receive them
- design changes to the services used by candidates and the people giving references

We need to consider:

- whether to automatically give a heading such ‘References:’ to the text entered for the references condition, in case it is not clear from what the user has written
- try other designs for showing the number of references requested and received
