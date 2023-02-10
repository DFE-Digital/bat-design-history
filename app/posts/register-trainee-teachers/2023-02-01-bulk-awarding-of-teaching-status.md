---
title: Bulk awarding of teaching status
description: Letting providers bulk recommend trainees for qualified teacher status or early years teacher status.
date: 2023-02-10
related:
  items:
    - text: Bulk actions on a group of records
      href: /register-trainee-teachers/bulk-actions-v1/
ogImage:
  src: /register-trainee-teachers/bulk-awarding-of-teaching-status/flow-diagram.png
  alt: Flow diagram of the bulk award flow
---

We’ve designed a new section of Register which allows providers to recommend multiple trainees for teaching status at the same time. 

Trainees are recommended for teaching status if they successfully complete initial teacher training (ITT). They get either qualified teacher status (QTS) or early years teacher status (EYTS) depending on the course they took.

Providers of school centred initial teacher training (SCITTs) currently recommend trainees in Register. Higher education institutions (HEIs) recommend trainees:

- in the Teaching Regulation Agency (TRA) ITT provider portal if the trainee was registered through the Higher Education Statistics Agency (HESA)
- in Register if the trainee was not registered through HESA

The ITT provider portal allows providers to recommend trainees either one by one or in bulk using a spreadsheet. 

Although SCITTs now only need to use Register to deal with trainee teacher data, HEIs still need to use several different systems. We would like to reduce this to just 2 systems, HESA and Register. 

To allow this, we intend to turn off the ITT provider portal. This means that any user needs it currently meets will need to be met by Register.

An HEI might need to recommend up to 500 trainees at once for teaching status. It will take too much time for providers to do this one by one, so we need a bulk solution.

## Options we considered for bulk recommending

[We previously explored using the Register user interface for bulk actions.](/register-trainee-teachers/bulk-actions-v1/) This works well for small numbers of trainees, but we do not think it would be suitable for recommending hundreds of trainees.

We decided to let providers use spreadsheets to bulk recommend trainees. This is not ideal for recommending smaller numbers of trainees, but works well for larger numbers. 

It’s also flexible for providers who have existing student record systems. For them, they want to be able to export data to give it to us - they can use the exports and merge that on to any template we give them.

In future iterations we may add a way to bulk recommend trainees entirely within the user interface. 

For now, letting users upload a spreadsheet allows us to support providers with large numbers of trainees. Providers with fewer trainees can use a spreadsheet or continue to recommend trainees one by one.

## How this will differ from the ITT provider portal

Our bulk recommendation flow will differ from the ITT provider portal by:

- only allowing teaching status recommendations, rather than a range of bulk actions
- not allowing users to edit trainee data
- telling users about errors immediately

### Only allowing teaching status recommendations

The ITT provider portal is used for more than just recommendations. Providers can also use it to defer and withdraw trainees. 

We do not plan to support this, as we’d like to keep this flow focused on awards of teaching status. Instead: 

- deferrals should come from HESA or be done one by one in Register
- withdrawals should be done one by one in Register because we want to [understand more about why trainees withdraw](/register-trainee-teachers/collecting-more-useful-information-about-why-trainees-withdraw/)

### Not allowing users to edit trainee data

The ITT provider portal allows users to edit some fields if they notice mistakes. This means that providers can make bulk changes to trainee records. 

We will not allow this initially as it would require significantly more development work and error checking for each field. We may consider it in the future.

### Telling users about errors immediately

When a provider uploads their spreadsheet to the ITT provider portal, they do not get any immediate feedback or opportunity to review the changes. 

If there are no errors then the data is immediately processed. The provider gets an email the next day telling them that their upload was successful.

If there were errors, the provider gets an email the next day with details of the errors. They have to fix the errors, return to the ITT provider portal and upload a spreadsheet fixing those that had errors.

In Register we’ll give users immediate feedback about any errors. We’ll also let them review their list of trainees to recommend before they submit their recommendations.

## How it works

![Flow diagram of the bulk award flow](flow-diagram.png)

To bulk recommend trainees, users need to:

- download a report listing trainees they can recommend
- enter the date when trainees reached the standard for teaching status
- upload the report and fix any errors
- check their list of trainees and submit their recommendations

### Download a report

Users will be able to download a report listing trainees they can recommend. We’re still deciding which trainees to include, but it’s likely to be trainees who have: 

- received a teacher reference number (TRN)
- an expected end date close to the current date

The report will be a new CSV export. Unlike our existing exports, we’ll only include selected columns which will help providers to identify, check or filter their trainees. 

Filtering the data in the spreadsheet may be important for providers with a lot of trainees. For example, they might only want to recommend trainees who are on certain courses.

### Enter the date when trainees met teaching standards

Providers need to enter the date when a trainee met teaching standards into the final column of the spreadsheet.

In the initial version of the design, we told users to leave the column blank if they did not want to recommend a trainee. We assumed that we would also accept the spreadsheet if they deleted rows instead.

### Upload the report and fix any errors

When the provider has added dates for all trainees they want to recommend, they’ll upload the spreadsheet to Register. 

We’ll process the spreadsheet and validate each row. We’ll tell users how many trainees:

- will be recommended for teaching status
- will not be recommended because the user did not give a date when they met teaching standards
- cannot be recommended because there are errors in the spreadsheet

Since the spreadsheet we provide to users will not have any errors, it is only possible for the upload to have errors if the user:

- entered an incorrect date when standards were met, such as a date in the future
- edited data which we provided in the spreadsheet, for example because the user thinks they can make bulk changes to data

If there are errors, we’ll take the user to a page where they can download a new version of the spreadsheet. It has an additional column which gives details of the errors for each row.

We decided to show the errors in the spreadsheet rather than in the user interface. This will make it easier to spot and fix errors, particularly when there are a lot of them. Users will not need to make comparisons between the user interface and the spreadsheet.
 
The provider can choose to: 

- fix the errors before continuing
- skip the rows with errors and continue

We expect that most users will want to fix the errors. They’ll be able to do this by editing data in the spreadsheet or deleting lines which have errors. They’ll then upload the spreadsheet and we’ll check for errors again.

If users skip the rows without errors, they can continue to check and submit recommendations. The trainees whose rows have errors will not appear in the list of trainees to be recommended.

### Check list of trainees and submit recommendations

If there are no errors or the user has chosen to skip fixing them, we’ll take the user to a review page. Here they can see a list of all trainees they’re going to recommend. 

This page could be very long if the provider is recommending a lot of trainees. We’re going to use the accordion pattern if there are more than a certain number in the list. We’ve not yet decided on the number but we expect that most users will not see the accordion. 

We do not think that providers will check every trainee at this stage. We want to give them the opportunity to check as many as they need to be confident that the list is correct.

Once the user proceeds, we’ll immediately recommend the trainees in the list. We’ll take the user to a success page which confirms how many trainees they’ve recommended.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  headingLevel: 2,
  items: [
  {
    id: "1-initial-download-and-upload",
    text: "Initial bulk recommend page with report and upload prompt"
  },
  {
    id: "2-upload-summary-with-errors",
    text: "Upload summary showing errors"
  },
  {
    id: "3-fix-errors-and-upload",
    text: "Errors summary with download of new report and upload prompt"
  },
  {
    id: "4-upload-summary-no-errors",
    text: "Upload summary without errors"
  },
  {
    id: "5-check-who-youll-recommend-accordion-collapsed",
    text: "Review page with accordion items collapsed"
  },
  {
    id: "6-check-who-youll-recommend-accordion-expanded",
    text: "Review page with accordion item expanded"
  },
  {
    id: "7-make-changes",
    text: "Make changes with download of report and upload prompt"
  },
  {
    id: "8-confirmation",
    text: "Confirmation page"
  },
  {
    id: "9-cancel-changes",
    text: "Cancel changes confirmation page"
  },
  {
    id: "10-homepage-cards",
    text: "Revised homepage with new cards to link to bulk recommend"
  }]
}) }}
