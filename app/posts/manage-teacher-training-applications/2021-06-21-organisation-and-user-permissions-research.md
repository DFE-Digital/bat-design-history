---
title: Organisation and user permissions research
description: Finding out whether users can set organisation and user permissions, and understand the links between the two
date: 2021-06-21
related:
  items:
  - text: Research findings slides
    href: https://docs.google.com/presentation/d/1-NNXVPR68PbK84pU8yMmFpOZcRyJDPYdpdw3WNuYMxU/edit#slide=id.p3
  - text: Design history entry about displaying permissions in the user list
    href: https://bat-design-history.netlify.app/manage-teacher-training-applications/displaying-permissions-in-the-user-list/ 
  - text: Design history entry about moving organisation permissions guidance
    href: https://bat-design-history.netlify.app/manage-teacher-training-applications/moving-organisational-permissions-guidance-above-the-form/ 
screenshots:
  items:
    - text: Set up organisation permissions - start page
      src: set-up--start.png
    - text: Set up organisation permissions - relationship
      src: set-up--relationship.png
    - text: Set up organisation permissions - check answers
      src: set-up--check.png
    - text: Set up organisation permissions - confirmation
      src: set-up--confirmation.png
    - text: Set up organisation permissions - organisation settings
      src: organisation-settings.png
    - text: Users - list
      src: user--list.png
    - text: Invite user - partners not listed if permission applies to all or none
      src: permissions-form-not-listing-all--open.png
    - text: Invite user - partners listed if permission applies to all or none
      src: permissions-form--open.png
    - text: User - details
      src: your-permissions.png
---

{% from "email/macro.njk" import appEmail %}

This research was part of an extended piece of work to improve the way users set up permissions.

We wanted to see if participants could: 

- understand how permissions work 
- set up organisation permissions to reflect how they work with their partners 
- set up user permissions to reflect how a new user would work within their organisation

## Who we researched with

We carried out research sessions with:

- 2 higher education institutions (HEIs)
- 4 school-centred initial teacher training (SCITT) providers
- 3 school direct providers

All participants were administrators or admissions leads.

## What we researched

We tested the flows which providers use to set up permissions: 

- between their own organisation and their partners

- for users within their own organisation

### Organisation permissions

We started with an email which users would receive when a partner organisation joined the service. We wanted to know whether participants understood what they were being asked to do.

After clicking a link in the email, the participant saw the start page for setting up organisation permissions. The content was very similar to the email and again we wanted to see whether users understood enough to continue.  

Participants then saw a series of pages where they could set the permissions for each partner organisation. We‘d added a line to say that all users would be able to view applications and wanted to see whether that improved participants‘ understanding.

After they‘d chosen organisation permissions for all partners, the participant reached a 'check answers' page. We were interested to see whether they used this page and went back to make any changes. 

Finally there was a confirmation page. This had links to further actions such as inviting or managing users and we wanted to see what users chose to do.

### User permissions

We asked participants to add a user and give them appropriate permissions. The flow took them from the organisation settings page to the user list.

We had changed the user list page so that it showed all users‘ permissions, which were previously only available on the separate page for each user. We wanted to find out whether this would be useful for participants.

After clicking to invite a user and giving a name and email address, the participant had to set the user’s permissions. 

For this iteration of the design we had removed hint text from the checkboxes used to set user permissions. We had done this because very long hint text can cause problems for screen reader users. 

We’d moved the hint text into a details component, a triangular control which reveals the content once clicked. We were particularly interested in whether participants:

- spotted and chose to expand the details component
- understood the connection between organisation and user permissions after reading the content

We had also changed some of the hint text. In this iteration we did not show the names of partner organisations if a user permission applied to all partners or none of them. Instead we said either:

- “This currently applies to courses you work on with all of your partner organisations”
- “This does not currently apply to courses you work on with any of your partner organisations”

We did this because we’d found in previous research that users were not sure whether a list of organisations represented all their partners or just some of them. We wanted to find out whether this worked better for participants.

## What we found

Parts of the flows worked well. We found that:

- all participants were able to set up organisation permissions as they intended
- the new user list design gave participants a good overview of their colleagues’ permissions
- all participants were able to invite users and change their permissions
- listing the organisations to which user permissions applied helped participants understand the implications of giving those permissions

However we also found that:

- some participants had trouble understanding how organisation permissions and user permissions relate to each other
- it was not clear to some participants what ‘criminal convictions’ and ‘diversity information’ permissions included
- some participants were not sure which organisation users belonged to in the user list
- it was unclear to participants who their partner organisations were when we did not show all their names
- few participants expanded the details component on the user permissions page without us prompting them

### How organisation permissions and user permissions relate to each other

It was not clear to particpants how organisation permissions and user permissions relate to each other. 

For example, some participants did not realise that they may need to change both organisation and user permissions to allow a user to view criminal convictions. Even some participants who did understand this were unable to navigate the service to do it. 

Some participants could not fully explain what they’d done after they had set up organisation permissions.

### ‘Criminal convictions and professional misconduct’ and ‘diversity information’ permissions

Some participants found the ‘criminal convictions’ and ‘diversity information’ permission labels unclear. They were not sure what information would be restricted after permitting certain organisations with these permissions.

During the course of the research we changed the wording of the ‘diversity’ permission to ‘sex, disability and ethnicity information’. Participants found this wording to be clear.

We did not change the 'criminal convictions' wording but may do so later.

### Understanding which organisation users belong to

The scope of the users list wasn’t completely clear. Some participants:

- asked if the list included users in their partner organisations
- talked about working out who belonged to which organisation based on their email address

This may cause users to incorrectly add partner organisation users to their organisation. It may also lead them to contact support.

During the round of research we added the organisation name above the h1 heading as a caption. This helped users understand what they were looking at. 

We still need to test understanding of the organisational settings page for users who belong to multiple organisations.

### Understanding which partner organisations are referred to in user permissions 

We did not list partner organisation names when a user permission applied to all or none of them. We found that some participants did not know what we meant by “all” or “none”.

As a result they were not be sure if they had added the correct permissions for a user.

We responded to this by changing the content during the round of research. We listed out all the partner organisations even when it applied to all or none of them. Users found this clearer.

### Details component

Most participants had to be directed to use the details component. They would not have used it otherwise.

This meant they would not have seen the content explaining the impact of organisation permissions on user permissions. This information is important in building an understanding what a user can and cannot do. 

Although participants were able to set permissions, they did not have a strong understanding of what they had done and the implications of it.

If users cannot access this information then they may create new users without fully understanding what those users will be able to do.

## Email

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  subject: "Set up organisation permissions for your teacher training courses",
  content: "

# Set up organisation permissions for your teacher training courses

Candidates can now apply through GOV.UK for courses that you work on with: 

- Essex Teacher Training
- UCL, University College London (University of London)
- University of Birmingham
- University of Derby
- University of East Anglia
- University of Greenwich

Either you or these partner organisations must set up organisation permissions before you can manage applications to the courses.

You’ll be asked to set up organisation permissions when you sign in:

https://manage-applications-beta.herokuapp.com/onboard/

# Get help, give feedback or report a problem

For an overview of Manage teacher training applications, see our [Service guidance](https://www.apply-for-teacher-training.service.gov.uk/provider/service-guidance).

You can also contact us at [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk).

  "
}) }}

<!-- markdownlint-enable -->
