---
title: Allowing providers to import applications with conditions pending
description: Making it possible to register trainees whose status in Apply has not yet changed to recruited.
date: 2023-04-06
related:
  items:
    - text: Apply integration - version 1
      href: /register-trainee-teachers/apply-integration-v1/
---

The integration between the Manage and Register services automatically imports applications from Manage when they reach recruited status. This happens when the candidate has either:

- accepted an unconditional offer
- met all the conditions of their offer

We use recruited status to decide which applications to import because it’s the best way to identify someone who is due to start training.

The integration is not active throughout the year. It’s turned on part way through each recruitment cycle, to help providers register trainees who will start training in the upcoming academic year.

The integration was used for some school centred initial teacher training (SCITT) applications in the 2020 to 2021 recruitment cycle and for the majority of them in 2021 to 2022.

## Why we’re doing this

We’ve found that importing applications with recruited status has worked well in most cases.

However, some providers contacted us late in the 2021 to 2022 recruitment cycle. They told us that they had trainees who had not met all their conditions but had been allowed to start their courses. They expected that these trainees would meet their conditions soon.

The providers needed to register the trainees but they had not been automatically imported because they did not have recruited status in Manage. The providers did not want to mark the conditions as met since that would be inaccurate.

The providers had to manually register the trainees. We do not want them to need to do this in future if they’re in the same situation.

It’s possible that in future there will be changes to how recruited status works in Manage. For example, it could be possible to move an application to recruited status with certain types of conditions not met.

That would be a significant change to how Manage works. We’ve decided to initially make a change in Register instead, allowing applications to be imported while they have conditions pending.

## Importing all applications or letting users select applications

We needed to decide whether to import:

- all applications with conditions pending
- selected applications with conditions pending

### Importing all applications with conditions pending

We could automatically import all applications with conditions pending. This would mean that users would not need to do anything.

We do not think this is the right thing to do because:

- providers do not normally need to register trainees before they've met all their offer conditions
- around 45% of candidates who have conditions pending status at the end of a recruitment cycle do not go on to start training
- changes can still be made in Manage to applications with conditions pending status, so Register might have the wrong data unless we do additional work to maintain synchronisation between the records
- it would mean that records would exist simultaneously in Manage and Register for much longer, with potential for increased confusion about where users should make changes

### Letting users select which applications to import with conditions pending

We decided to show providers a list of applications with conditions pending and let them select which they want to import. We’ll make it clear that they do not need to do this for most trainees as they’ll be imported automatically.

We’ll only show applications close to their course start. This will help to:

- prevent providers from importing applications very early when they could have waited for the candidate to meet their conditions
- avoid importing applications where the candidate has withdrawn, but Manage has not been updated yet

We get course data from Publish and it only holds the month in which a course starts, rather than a specific date. We’ve decided to show applications with a course start date either:

- in the past 3 months
- before the end of next month

## How it works

A link is shown on the home page if the user has one or more applications which they could manually import. The link includes the number of applications available to import.

We describe the applications as being imported from Apply rather than from Manage. This matches the wording in other parts of Register and reflects research showing that our users referred to both services collectively as Apply. This may have changed and we’ll consider revising the wording in future.

We considered putting a link on the draft trainees list but decided that it would be too prominent. We expect that many providers will never use the manual import or only use it very rarely.

![The draft trainees section of the home page has a link to ‘import applications from Apply with conditions pending’. The number 7 in brackets at the end of the link indicates how many applications can be imported.](1.home.png)

If the user clicks the link, they’re taken to a page which lists all the applications they can manually import. For each application it shows:

- name of the candidate
- course name and route
- pending conditions

![The import applications page has guidance explaining when applications are automatically imported and the criteria for which applications can be manually imported. It then has a list of applications which can be imported, each showing the candidate details. There’s a checkbox for each.](2.import-applications.png)

We’ve put the pending conditions in a details component because it’s possible to enter free text in Manage. Some providers enter long paragraphs of information, which would make the page hard to understand. The details component hides the conditions until the user clicks on it.

![The checkboxes for 2 applications have been checked. The details component for one has been expanded, showing the pending conditions for that application.](3.import-applications-details-revealed.png)

Users can select as many applications as they like then click the green button to continue. They’re then shown a page where they can check the list of applications they’ve chosen before they import them.

![The check application import details page shows the name, course and training route for each application which was selected. There’s a change link, a button to confirm that the user wants to import the applications and a cancel link.](4.check-application-import-details.png)

After users import the applications they return to the home page. A success banner is displayed.

![A success banner which says how many applications have been imported as draft trainees.](5.success-banner.png)
