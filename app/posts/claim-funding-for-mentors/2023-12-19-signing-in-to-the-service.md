---
title: Signing in to the service
description: We use DfE Sign-in for managing access to the service
date: 2023-12-01
tags:
  - authentication
  - users
  - DfE Sign-in
related:
  items:
    - text: Department for Education Sign-in
      href: https://services.signin.education.gov.uk/
    - text: National Cyber Security Centre (NCSC) application development guidance
      href: https://www.ncsc.gov.uk/guidance/application-development-guidance-introduction
screenshots:
  items:
    - text: Sign-in form
      src: dfe-sign-in--sign-in.png
    - text: Sign in form with error
      src: dfe-sign-in--sign-in-error.png
    - text: Forgot password form
      src: dfe-sign-in--forgot-password.png
    - text: Forgot password form with error
      src: dfe-sign-in--forgot-password-error.png
    - text: Create account form
      src: dfe-sign-in--create-account.png
    - text: Create account form with error
      src: dfe-sign-in--create-account-error.png
    - text: Confirm email form
      src: dfe-sign-in--confirm-email.png
    - text: Confirm email form with error
      src: dfe-sign-in--confirm-email-error.png
    - text: Create password form
      src: dfe-sign-in--create-password.png
    - text: Create password form with error
      src: dfe-sign-in--create-password-error.png
    - text: Resend verification code form
      src: dfe-sign-in--resend-verification-code.png
    - text: Resend verification code form with error
      src: dfe-sign-in--resend-verification-code-error.png
    - text: Verification code resent
      src: dfe-sign-in--verification-code-resent.png
    - text: Registration complete
      src: dfe-sign-in--registration-complete.png
eleventyComputed:
  eleventyNavigation:
    key: funding-mentors-signing-in-to-the-service
---

All users must use the Department for Education (DfE) Sign-in to access Claim funding for mentor training.

DfE Sign-in is how schools and other education organisations access DfE online services, including all Becoming a teacher (BAT) services.

## How it works

Before accessing the Claim funding for mentor training service, users must be invited by someone from their organisation or BAT support.

Once added to the organisation, users will receive an email with a link to sign in.

To access the service, users will either need:

- an existing DfE Sign-in account
- to create a DfE Sign-in account if they haven’t used DfE Sign-in before

Users can create DfE Sign-in accounts with any email address, but they are expected to use their organisation’s email address rather than one from a free email service provider such as Gmail or Hotmail.

The DfE Sign-in account email must match the email used to invite the user; otherwise, we cannot sign the user in, and their organisation will be unknown.

If the user needs to create a new DfE Sign-in account, there is a bug in which DfE Sign-in forgets which service they’re signing in to. In this case, users must return to their original email to follow the steps to sign into the service.

Once signed in, if a user is inactive for 20 minutes, their session will time out, and they will be signed out.

### Users belonging to multiple organisations

If a user belongs to multiple organisations, each organisation will need to invite them to the service. The user can use the same email address. If this is the case, they can choose which organisation they want to work on after signing in.

They will not have to choose an organisation if they use a different email address for each organisation.


### In-service error states

If a user has a DfE Sign-in account, they can sign in to the service. However, if we do not recognise their account – for example, their email is not associated with an account in the service – we show a message:

> **Ask for an account to claim funding for mentor training**
>
> Although you have a DfE Sign-in account, you also need an account for this service.

If a user has a DfE Sign-in account and we recognise them in the service but they are not linked to an organisation, we show a message:

> **Tell us which organisation you’re part of**
>
> You’ve successfully signed in to your DfE account, but your email address is not currently linked to an organisation. This can happen if:
>
> - the email address you used is different to the one we sent the invitation email to
> - you haven't yet been invited by someone in your organisation
> - another user in your organisation has removed your account
>
> To access your organisation’s placements, ensure you’ve signed in with the correct email address. If it looks right, you’ll need to email us instead to tell us which organisation you need access to.

In both instances, we encourage users to email BAT support.

## Further considerations

We considered some changes that we did not implement. These included:

- Using a ‘magic link’ when the DfE Sign-in service is unavailable
- Using DfE Sign-in for access management

### Using a ‘magic link’ when the DfE Sign-in service is unavailable

If DfE Sign-in is unavailable when a user tries to sign in, we could provide a fallback using a magic link. Existing services such as Register trainee teachers and Apply for teacher training use this approach.

We have not implemented a magic link as we have yet to find a need for it. DfE Sign-in is not often unavailable; when it is, it is only for a short time.

### Using DfE Sign-in for access management

We only use DfE Sign-in for authentication, not access management. Access management is handled by the service.

Currently, if a school user has access, they can perform all the tasks available to their school, including adding mentors and creating claims.
