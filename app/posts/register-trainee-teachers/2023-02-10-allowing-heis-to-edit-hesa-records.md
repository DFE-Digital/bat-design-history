---
title: Allowing users to edit records imported from HESA in Register
description: We’ve made it easier for users from higher education authorities to correct mistakes in their data.
date: 2023-02-10
related:
  items:
    - text: Bulk awarding of teaching status
      href: /register-trainee-teachers/bulk-awarding-of-teaching-status/
---

We want to provide a way for users from higher education authorities (HEIs) to edit records imported into Register from the Higher Education Statistics Agency (HESA) service.

We did not initially allow this because there were previously lots of discrepancies in trainee data. This was due to it being updated in some places but not all, leading to unexpected changes when data was synced between services.

We’ve decided to require users to explicitly opt in to editing because we still want them to make most edits in the HESA service.

It will still be possible for data to be overwritten with this new feature but we’ll warn users about this and hope it will be rare.

If data is overwritten, it will be clear to providers why it’s happened. They’ll be able to see that they enabled editing and updated a field, then later a HESA sync changed that field.

This will be better than in the old DTTP service, where fields would change unexpectedly and it was not clear where changes were coming from.

## When a provider might need to make changes

We want most updates to HESA trainees to be made in the HESA service. But this may be impossible because providers can only update HESA data at certain times of the year.

A provider may need to update a trainee’s data outside of these ‘HESA windows’, for example to fix an error before they recommend the trainee for teaching status.

A provider may also need to indicate that a trainee has withdrawn after an academic year has just finished. The provider can wait until the next academic year to do this, but then the trainee will appear in the next HESA collection.

Currently in these situations DfE support staff have to manually make the changes. We’d like to give our users a way to update trainees easily themselves.

## Why we’re doing this now

We’re about to allow providers to [bulk recommend trainees for QTS or EYTS](/register-trainee-teachers/bulk-awarding-of-teaching-status/).
Once this is possible, we expect providers to notice mistakes in their data and want to fix them immediately.

If we do not allow users to edit HESA records, they’ll need to either:

* submit changes to HESA, if they’re within a ‘window’ when editing is possible
* contact our support teams to manually correct the record

If we allow users to edit the records, they’ll be able to fix issues themselves.

## What we changed

We’ve added a button to records imported from HESA to let users enable editing of the record.

When a user clicks the button, they’ll be shown an interstitial page. It warns them that if they update the record in HESA in the future then that update will overwrite the changes they made in Register.

Once editing has been enabled, the record will act like other records that can be edited. A timeline entry will show who enabled editing and when they did it.

Records imported from HESA previously had inset text explaining this and giving the date when HESA records were last updated. We’ve changed the wording of this text before editing is enabled to:

- say what users can do before and after enabling editing
- give the date when this particular HESA record was last updated

After a user has enabled editing, this inset text changes to:

- note that editing has been enabled
- warn users that if they update the record in HESA then it will overwrite the changes they made in Register

## Deferring, reinstating and withdrawing trainees

Users can use either Register or the HESA service to indicate that a trainee has:

- deferred
- been reinstated (returned to training after a deferral)
- withdrawn from training

We did not want to require users to need to enable editing to reveal these actions. So we’ll continue to show them whether or not editing has been enabled.

If a trainee has been withdrawn using Register then we do not need to worry about an update in HESA overwriting the trainee’s data.

If a trainee has been deferred or reinstated then we’ll show a warning. It will tell them that if they update the record in HESA then it will overwrite the changes they made in Register.

## Further considerations

We don’t feel there’s a need to have a ‘disable editing’ feature, but could add this in the future if we find there’s a need.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  headingLevel: 2,
  items: [
  {
    id: "1.record-overview",
    text: "A HESA trainee that does not have editing enabled"
  },
  {
    id: "2.interstitial-notice",
    text: "Interstitial shown after enabling editing"
  },
  {
    id: "3.record-overview-editable",
    text: "A HESA trainee that has editing enabled"
  },
  {
    id: "4.timeline",
    text: "Timeline message"
  },
  {
    id: "5.interstitial-before-defer",
    text: "Interstitial shown before deferring"
  },
  {
    id: "6.interstitial-before-reinstate",
    text: "Interstitial shown before reinstating"
  }]
}) }}
