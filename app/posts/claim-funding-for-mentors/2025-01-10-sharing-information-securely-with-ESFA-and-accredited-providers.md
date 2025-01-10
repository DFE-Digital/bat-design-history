---
# Receiving approval for our approach to sharing information securely with the Education and Skills Funding Agency (ESFA) and accredited providers
description: Using emails with temporary links to CSV files to share data with authorised third parties
date: 2025-01-10
tags:
  - payments
  - sampling
  - clawbacks
---
## Overview
### Sharing data with accredited providers
To enable accredited providers to assure the claims made by placement schools, we share data with them.
In order to assure the claims, the accredited providers need to see the following information for each of their claims:
•	Claim reference number
•	School name
•	School unique reference number (URN)
•	School postcode
•	Mentor name (first and last name)
•	Hours of mentor training
Sharing this data is covered by the central DfE privacy notice, which the service directs users to - Privacy information: education providers’ workforce, including teachers - GOV.UK via the service’s privacy notice: Claim funding for mentor training privacy notice - Claim funding for mentor training - GOV.UK
We do not share the Teacher Reference Number (TRN) nor the claim value with the accredited provider to minimise the amount of personal data being transferred.

### Sharing data with ESFA
We do not share any personal data with the ESFA to make the payments, instead we share:
•	Claim reference
•	School URN
•	School name
•	School type and group
•	Claim amount

## Our approach
Both the ESFA and the accredited providers we have conducted user research with, have requested to receive this information via spreadsheet (CSV). 
When co-designing the service’s support console with the Ops and Support team, they requested that we automate as much as the process as possible, to reduce the burden on their team.
Taking into consideration user feedback and privacy and security concerns we have designed the service to share this information in the following way:
Support colleagues log into the service and click the appropriate button to send the information to either the ESFA or accredited providers. Before the information is sent, there is a confirmation screen to ensure that the user definitely wants to send the information. This generates an email to the intended user. 
The user receives an email with guidance on how to process the data and a temporary link to download the data. The data is not included as an attachment in the email.
After 7 days, the link expires and the CSV file can no longer be downloaded from that link. In addition, the temporary link can only be used to download the file once, which further restricts any unauthorised access. 
The original CSV files are stored securely within our Azure Storage containers.

## Guidance from the data protection team
We have outlined this approach to the data protection team who have provided the below feedback:
The department's preferred policy is to use Galaxkey when sending personal or sensitive information. Galaxkey provides an added layer of security by encrypting data, which helps protect it from unauthorised access.
However, the final decision on whether to use Galaxkey or another transfer mechanism as proposed rests with the Information Asset Owner (IAO). They are responsible for ensuring that the chosen method is appropriate, taking into account the nature, sensitivity, and risk level of the data being transferred.

## Why we aren’t using Galaxkey
We made the decision to not use Galaxkey for the following reasons:
•	Doing so would require users to manually send the information, instead of it being automated into the service. This does present the opportunity that information is sent to the wrong user, which although unlikely is possible.
•	Galaxkey is not well liked by users. We understand that this is one of the reasons why the ECF team requested a new journey for their users to request TRNs that didn’t involve users having to submit information via Galaxkey.
•	The information being sent to accredited providers is information that they should already have, as the process is designed to enable them to cross-reference our data with their records to enable them to assure the claims.
•	We do not send any personal information to the ESFA.

## Decision
On 10 January 2025, Stacy Singleton, the service’s Senior Responsible Officer (SRO) and Information Asset Owner (IAO) approved this approach as requested by the data protection team.
