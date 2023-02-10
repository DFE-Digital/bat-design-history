---
title: Allowing HEIs to edit HESA records in Register
description: Giving more control to HEIs to correct mistakes themselves
date: 2023-02-10
related:
  items:
    - text: Bulk awarding of teaching status
      href: /register-trainee-teachers/bulk-awarding-of-teaching-status/
---

We want to provide a way for HEI users to edit their HESA records within Register.

Our users cannot currently edit HESA records. We did not allow it because there were previously lots of data discrepancies related to data being updated in some places but not all, and then different values syncing to other services.

The result was lots of inconsistency and data changing unexpectedly.

## When a provider might need to make changes

We want most updates to HESA trainees to come via HESA. But this may be difficult or impossible, for example when: 

* a HESA update window has passed, the trainee is ready to be awarded, but changes are needed
* an academic year has just finished, and trainee has now withdrawn - the provider does not want to provide the trainee in the next HESA collection purely to tell us they've withdrawn

Currently in these situations our support staff have to manually make the changes. We’d like to give our users a way to update trainees easily.

## Why we’re doing this now

We’re about to allow providers to [bulk recommend trainees for QTS or EYTS](/register-trainee-teachers/bulk-awarding-of-teaching-status/).
Once this is possible, we expect providers to notice mistakes and want to fix them immediately. If we do not allow users to edit HESA records, they’ll need to either:

* submit these changes to HESA
* contact our support teams to manually correct the record

If we make this change, they’ll be able to fix issues themselves.

## What we changed

We’ve added a button to HESA records to let users enable editing of the record.
We’ve decided to require users to explicitly opt in to editing because we still want them to make most edits in the HESA service.

Once a user has enabled editing, they’ll be shown an interstitial page. It warns them that if they update the record in HESA in the future then that update will overwrite the changes they made in Register.
Once editing is enabled, the record will act like other records that can be edited. We’ll update the HESA inset text to note that editing has been enabled.


## Other details

We don’t feel there’s a need to have a ‘disable editing’ feature, but could add this in the future if we find there’s a need.

Deferrals are handled specially. They’re statuses that can be updated in HESA, but currently sit with other actions on trainee records. As users will always be able to do actions on statuses on records, it felt weird to hide the ‘defer’ link on HESA records, and expect users to know that ‘enable editing’ would reveal it. Instead, we’ll show a warning if users attempt to defer or reinstate a HESA trainee.

It’s still possible for data to overwrite with this new feature, but we hope this will be rare, and if it does happen, it will be clear to providers why it’s happened. They’ll be able to see that they enabled editing, updated a field, then later a HESA sync changed that field. This will be better than in DTTP where fields would change unexpectedly and it wasn’t clear where changes were coming from.

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
