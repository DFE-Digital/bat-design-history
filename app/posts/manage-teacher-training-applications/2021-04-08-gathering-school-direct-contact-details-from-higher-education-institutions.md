---
title: Gathering school direct contact details from higher education institutions
description: Using a spreadsheet to help higher education institutions invite their school direct partners to use  Manage
date: 2021-04-08
---

{% from "email/macro.njk" import appEmail %}

We’ve been looking at ways to help higher education institutions (HEIs) to:

- set themselves up to use Manage
- invite their school direct partners (SDs) to set themselves up

We started by designing a [small online service that allowed HEIs to set themselves up and invite SDs](https://bat-design-history.netlify.app/manage-teacher-training-applications/self-service-registration/). 

After testing that design we decided to explore a simpler approach, focusing on gathering contact details for SDs.

## What we did and why

We created a spreadsheet template that we could send to HEIs as a CSV file. The columns in the template were:

- partner (pre-filled with the name of an SD) 
- code (pre-filled with the SD’s provider code)
- contact name (to be completed by the HEI user)
- contact email (to be completed by the HEI user)

We decided to keep the headings short as we have no control over column width in a CSV file. When we tested it using Microsoft Excel, the default column width was very narrow.

If an SD was already using Manage, the contact name and email cells would be pre-filled with ‘Not needed - already has account’. 

We also created an email explaining what we wanted users to do. It asked them to either: 

- download the spreadsheet, complete it and email it back
- fill in a Google Sheets version of the spreadsheet online

The email said that courses would become available as soon as the contact at the SD set up their account.

Since the previous iteration, we’d discovered that HEI users have to sign a data sharing agreement (DSA) in order to get access to the ‘sandbox’ version of Manage. They access this so that they can experiment before signing up to use the service with real data.

Since each HEI should have already signed a DSA, we decided not to ask them to do it as part of our process.

## Research findings

Users understood what they were being asked to do in the email.

Some users said they would not want to complete the spreadsheet immediately. They’d want to make sure they were ready to use Manage and also let SDs know what was happening.

When we asked users to complete the spreadsheet, we found that in general they: 

- expected to invite all their SDs at the same time
- did not recognise the provider code we used – some expected the unique reference number (URN) instead
- wanted to see all their SDs listed, including the ones which were already set up in Manage 
- would add any missing information, such as SDs which should have been on the list 
- were unsure about what to do if something was incorrect
- would choose to complete and return the CSV file rather than use the Google Sheets version

## Future considerations

We are confident that users would be able to complete the spreadsheet we tested. 

Before using it, we’d need to give more thought to: 

- how users could tell us about inaccuracies
- what would happen if a user changed information in the spreadsheet or added extra SDs
- the reference number we’d use in the spreadsheet
- whether to offer a Google Sheets version
- how to be clearer in the email about which courses would become available and when

After the research we decided to focus on the next stage of the process. We’ll need a more streamlined way to set up users once we've gathered contact details from HEIs.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Spreadsheet for gathering SD contact details",
    img: {
      src: "sd-contact-details-spreadsheet.png"
    }
  }]
}) }}

## Emails

### Asking users to give SD contact details

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
 subject: "Give contact details for your School Direct partners",
 content: "

Dear Andrew

Some teacher training courses accredited by Bishop Grosseteste University are not available through GOV.​UK.

This is because each School Direct partner needs to set up an online account before their courses become available.

# What you need to do

We’ve created a spreadsheet listing the partners whose courses you accredit.

There’s space for you to add the name and email address of your main contact at each partner which does not have an online account.

You can either:

- [download the spreadsheet as a CSV file](), fill it in and return it to providercontacts@digital.education.gov.uk
- fill in an online [Google Sheets version]() of the same spreadsheet

The spreadsheet may indicate that you do not need to give contact details for some partners. This is because they already have accounts.

# After you fill in the spreadsheet

We’ll send invitations to the people whose details you gave.

The courses you accredit will be made available for applications through GOV.​UK once the partner sets up an account.

# Help and support

Contact your relationship manager at the Department for Education if you need help.

You can also contact the support team at becomingateacher@digital.education.gov.uk.

 "
}) }}