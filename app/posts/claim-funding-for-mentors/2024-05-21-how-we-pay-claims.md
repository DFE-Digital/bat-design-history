---
title: How we pay claims
description: How we work with the Education and Skills Funding Agency (ESFA) to manage and pay claims
date: 2024-05-21
tags:
  - payments
  - claims
---

The Department for Education (DfE) is the spend manager for this grant payment, this means that we are responsible for all assurance, guidance, administration and service communication. with users. In addition, we are working with the Education and Skills Funding Agency (ESFA), which will manage and process the payment process. For Private Beta, the DfE and ESFA will share data via CSV exports generated by the Claim funding for mentor training (Claim) service.

The DfE will send the ESFA a list of all claims that need to be paid. Before starting the payment run, the ESFA will run internal and external checks on the school. These will include confirmation of bank details and confirmation that the school is currently open via Get Information About Schools (GIAS).

After running payments, the ESFA will consolidate payment outcomes and send an export back to the DfE. The DfE team intends to import this data into the Claim service and update the status of the claims to ‘Paid.’

There will be two payment windows for Private Beta. The first will see payments made in late September and early October. A second will run for claims not paid within that window, and payments will be made in late December and early January.

The service expects most payments will be made within the first window. The second payment window has been agreed upon to facilitate any late claims and claims where further investigation has meant the deadline for the first window was missed. This will be essential when the service moves into Public Beta, with over 15,000 organisations eligible to submit a claim.

## How it works

### Data submissions to the ESFA

To facilitate the ESFA making the claim payments they require three separate extracts of claim data between the service opening and making the final payment run. These submissions include:

- Initial forecast (26 July 2024): This forecast gives a rough estimate of the funds required to make the payments and allows sufficient funds to be requested from HM Treasury. This extract is high-level and contains a figure for the total claim value.
- Final forecast (16 August 2024): This forecast includes a breakdown of all claims considered ready for payment. Unique identifiers and school information are included to support the first round of due diligence tests. Due diligence is covered below.
- Pay list (6 September 2024): This is the final submission, and it will mirror the final forecast and include any claims not captured in time for the final forecast.

All data extracts are completed using the Download CSV feature. This downloads all claims data, and, where necessary, users can filter and adapt the information to meet the intended objective.

### Due diligence payment checks

As part of the payment process, the data submitted as part of the Final forecast and the Pay list is subject to due diligence checks. These checks include:

- GIAS cross-referencing: Using the UK Provider Reference Number UKPRN and the Unique Reference Number URN as identifiers, GIAS lookups are performed to ensure the school characteristics still match. The main discrepancies being looked for are that the school is still open and the setting (local authority, for instance) is the same. In addition, this check will highlight any address changes and site moves. This is important as funding brackets are tied to location.
- Payment detail checks: Internal ESFA systems are consulted to ensure they have access to the school’s payment details. Additionally, this check will seek to understand if the school has been blocked for payment. The service does not capture this information, so matching is completed using a combination of URN and UKPRN.

Should due diligence checks highlight any issues relating to the claim or the school at either the Final forecast or Pay list stage, the services support team will be notified. Notifying the issue will trigger the support team to contact the claimant to try and investigate and rectify the issue/s.

If payment details are found to be incorrect or no payment details are available, the ESFA will request the school update via a separate service. Once this has been done, finance will conduct counterfraud checks. If the school has been blocked for payment, the ESFA will work with Finance to remedy the situation.

### Paying the claim

As outlined above, the Department for Education is the grant’s ‘Spend manager’ with the Education and Skills Funding Agency, making payments on their behalf.

The final payment run is made after successfully completing the due diligence checks. Rules regarding when a school receives their payment will depend on the type of school they are.

Local authority-maintained school claims will be paid on the last working day in September. As with all funding payments, the payment will be made to the parent local authority, which has a duty to distribute the funds accordingly.

As an additional assurance step for local authority school payments, the parent local authority is bound to complete a section 151 audit. This helps ensure the local authority distributes the funds correctly and promptly.

For academies, payments will be received on the fifth working day of the following month. These claims are paid directly to the academy.

### Updating the user

Following payment processing, the ESFA will consolidate the outcome and compile a spreadsheet containing the payment status. The status will be linked to the claim ID.

This spreadsheet will be sent to the Claim team. They will add the data using the service’s bulk upload feature. The relevant upload scripts will run and automatically update the claim status.

If the payment fails, the support team will identify this through the claim status and initiate contact with the school to investigate.

## Further considerations

### Second payment run

If payment is not made through the first run, the service will operate a second run commencing in late October 2024.

- Initial forecast - late October
- Final forecast - mid November
- Pay list - late November

The second payment run will be subject to the same due diligence checks as the first. The timelines for the different school settings will remain the same. This will mean academies will receive payment in early January 2025.

## Flow diagram

[![How we pay claims flow diagram](claim-funding-for-mentor-training--payments.png "How we pay claims flow diagram (select image to view larger version)")](claim-funding-for-mentor-training--payments.png)

[Download the payments flow diagram as PDF (155KB)](claim-funding-for-mentor-training--payments.pdf)
