---
title: How we onboarded schools in private beta
description: DESCRIPTION
date: 2024-05-20
tags:
  - onboarding
  - schools
  - claims
---

The primary way to onboard private beta users to the service is via bulk upload. Having identified and verified schools and their associated users, the bulk upload feature allows a file to be uploaded to the service, which creates the school, the user, and the linkage between them. This flow also triggers an invitation email to users, prompting them to access the service using DfE (Department for Education) Sign-in authentication.

## How it worked

### Finding the schools

We started by requesting an extract from Register trainee teachers (Register) of all placement schools uploaded by Best Practice Network (BPN) and National Institute of Teachers (NIoT) for the academic year 2023/24. We then confirmed these lists of schools with our early adopter providers. This allowed the accredited providers to update the data we held for individual schools should any of this be out-of-date. The two accredited providers manually updated the lists for us and updated their returns in Register. For the Public Beta, we will only work with data in Register, as it will be impossible to manage manual updates via email with 170 accredited providers.

### Getting contacts within the schools

Having confirmed the list of schools we wanted in the service, the next step was identifying an individual within that school. This individual would become the invited, or first user, for the associated school.

We asked the early adopter providers, BPN and NIoT, to review the data extract and update it with a contact within the schools. Both providers need to gain consent from the user first to provide DfE with a contact and email address. This was quite a laborious process, and it took NIoT over five months to provide first user information for most of their schools—over twenty of their schools still do not have a contact uploaded into the Claim service.

Having confirmed and updated data from Register, we now have a comprehensive list of schools we would be onboarding and a named contact within those schools.

### Uploading our schools and users

The team developed a bulk upload feature within the service. This allows the service to consume an Excel (or similar) file and create or update information based on the data.

We used this feature to bulk upload schools and their associated users. The upload would create the school and then the first user, automatically associating the user with the school. Having created the entries within the service, an email was sent to the first user, notifying and inviting them that the service was available.

As part of this upload feature, the service also matched the Register data with data from Get information about schools (GIAS) to populate the schools’ email address, telephone number, website, address, as well as calculate the grant funding region. There are four funding regions: Inner London, Outer London, London Fringe and Rest of England. To calculate the correct region of the school, the service mapped the school’s district admin code from GIAS against those four funding regions and assigned the correct one within the service.

### DfE Sign-in

We elected to use one of the DfE Sign-in services to add a layer of user authentication and improve the service's information security. Users must have an active DfE Sign-in account to access the service.

If the user already had a DfE Sign-in account, they could click the link in the invitation email, use their credentials, and access the service.

For users without an existing DfE Sign-in account, the service would load the start page, and the user would be prompted, via the DfE Sign-in page, to create an account. For users needing to create an account, they would be diverted to the DfE Sign-in service, where they could create and confirm their account, with their email address acting as a verification method.

After creating a DfE Sign-in account, the user would need to return to the invitation email and click the link again. The service would load, and users could use their new credentials to sign in via DfE Sign-in.

### Grant conditions

After successfully signing into the service via DfE Sign-in for the first time, the user is presented with the grant conditions. The user must accept the grant conditions before continuing to the main service.

We need the grant conditions for any funding-related service to be accepted by someone with the appropriate delegated authority on behalf of the school. Based on findings from similar services, we added this to the declaration the user makes when accepting the conditions.
