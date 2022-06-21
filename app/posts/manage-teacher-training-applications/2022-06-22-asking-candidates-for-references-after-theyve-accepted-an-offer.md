---
title: Asking candidates for references after they’ve accepted an offer
description: We no longer ask candidates to get references before they submit their application.
date: 2022-06-22
screenshots:
  items:
    - text: x
      src: x
---

Candidates for teacher training must currently include 2 references with their application.

They can request more than 2 references then choose which to use. They cannot see the content of the references.

We know that asking for references slows down or deters some candidates. For example, someone who is working may need to ask their employer for a reference.

We’ve decided to explore ways to make it easier for candidates to submit their application. We considered:

- not gathering references in the service, instead giving contact details to providers
- gathering the name and email address for references as part of the application, then the rest of the details when the candidate accepts an offer
- gathering all details when the candidate accepts an offer

This design follows the last of those approaches.

## Data analysis

Analysis in May 2022 of data for the current recruitment cycle found that:

- 93.5% of candidates with unsubmitted applications had not completed the references section
- 2,011 candidates with unsubmitted applications only had the references left to complete
- 49.4% of candidates with only references left to complete had not entered any reference details
- 46.2% of candidates with only references left to complete were waiting for a response for at least one reference

We also found that 73.3% of candidates who had not requested references were over 25, but only 68.8% of the total candidates were over 25. This suggests that references may be more of an obstacle to career changers.

## What we did

For this design we’ve assumed that candidates will not be asked for any reference details when they apply.

Instead, the provider will request references when they make an offer. References will be treated as a condition of the offer.

Providers will need to mark the condition as met once they’ve received acceptable references.

## How it works

References no longer appear in the application details page.

### Making an offer

When the provider user makes an offer, they are asked to add conditions as usual. There are currently 2 standard conditions which have pre-ticked checkboxes but can be unselected. These are:

- Disclosure and Barring Service check
- fitness to train to teach check

We’ve added a third standard condition for references. There’s a text box so that the user can explain what references the candidate needs.

If the user leaves the references checkbox ticked but does not enter any text, they get an error message when they click to continue.

On the next page the user needs to check their answers. If the checkbox for references was ticked, we show the text which they entered in the text box.

### After the candidate accepts an offer

For this design, we’ve assumed that the candidate will:

- request references at the same time as they accept an offer
- be able to return to the candidate service and request more references, for example if there’s no response to a request

When the candidate accepts the offer, the status of their application changes to ‘conditions pending’ as usual. A new ‘references’ page appears in their application, with content saying:

- how many references the candidate has received - this will be hidden until at least 1 reference has been received
- how many references the candidate has requested but not yet received
- what type of references they’ve requested - for example academic or professional
- when they requested the references

We will not indicate reference requests which have been:

- declined by the person asked to give the reference
- withdrawn by the candidate

This is because either of these could be unfairly seen as negative.

### Receiving references

When a reference is received, the provider is sent an email which tells them:

- the name of the candidate
- the course the candidate applied for
- how many references the candidate has received in total - this is because the provider may not want to click through until they’ve received 2 references

A link in the email takes the user to the references page in the candidate’s application.

The references page will have been updated so that:

- the received reference is not mentioned in the list of requested references
- details of the received reference appears on the page

The most recently received reference appears first. This is so that it is easier to spot that something has changed on the page.

### Marking the references condition as met

If the provider can accept the candidate’s references, they can go to the offer page and mark the condition is met. There are no changes to this journey.

## Further considerations

We need to:


- decide how to show references in the timeline and activity log
- add emails about references to the email notifications preferences page, so that providers can choose whether or not to receive them

We need to consider whether to:

- add ‘References:’ to function as a heading for the free text of the condition - we could make a decision about this after looking at what text users enter
- try other designs for showing the number of references requested an
