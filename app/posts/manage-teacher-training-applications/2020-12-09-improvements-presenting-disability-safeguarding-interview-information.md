---
title: Improvements for representing disability, safeguarding and interview information
description: A series of changes to the disability, interview needs and safeguarding sections. Plus removing the candidate guidance blocks.
date: 2020-12-09
screenshots:
  items:
    - text: Everything provided, user lacks permission to view safeguarding information
      src: application-list--1.png
    - text: Some information not provided, user has permission to view safeguarding information
      src: application-list--1.png
---

The original task was to make it easier to understand whether the candidate had been asked questions relating to disability, safeguarding information and interview needs.

Initially we considered just changing the wording which would appear if the candidate had not been asked the question, rather than if they hadn’t given any information.

However, once we looked at the questions within the application service it became clear that more work was needed.

The questions currently in the application service, and their respective responses in our service, are in the following table.

| Question to candidate | Answer ‘no’ | Answered ‘yes’ | Was never asked |
| ----------------------|-------------|----------------|---------------- |
| Do you have any interview needs? | No preferences. | [Their answer] | No preferences.
| Do you want to share any safeguarding issues? | The candidate has declared no criminal convictions or other safeguarding issues. | The candidate has disclosed sensitive material related to safeguarding.<br><br>[Their answer] | Never asked |
| Do you want to ask for help to become a teacher? | No information shared. | [Their answer] | |

## Improvements summary

We have made the following improvements to the presentation of this information:

- put the content into summary lists (tables)
- replay the actual question asked and the answer given
- not show anything at all if the candidate was not asked the question
- remove the guidance given to candidates
- no longer hide the safeguarding information with the Details component
- use generic wording for users without permission to view safeguarding information

![Screenshot of ‘Disability support’, ‘Safeguarding issues’ and ‘Interview needs’ sections of the application page.](inline.png)

## Putting the content into summary lists (tables)

This means the content will fit the format of the majority of the application, making it easier to scan. It also allows us to replay the questions and answers in full.

## Replaying the questions and answers

This will let the provider see exactly what was asked and what the response was.

The content will match the the radio button which the candidate chose when they applied.

If it’s a ‘yes’ response, we’ll also give the candidate’s free text input as usual.

This means we don’t have to interpret or explain what the generic answer means because we just play it back verbatim.

For example: ‘Do you want to ask for help to become a teacher? – No’ is clearer than ‘Do you want to ask for help to become a teacher? – No information shared.’

## Not showing anything if the candidate was not asked

We don't think it's a good idea to indicate questions which were not asked.

When replaying questions and answers in a service, it’s normal only to include those which were actually asked.

Since the application details are a record of what was asked and the candidate’s response, omitting the question entirely implies that it was not asked.

As we are now going to lay out the candidate’s answers verbatim, it will be even more obvious that the absence of the field means the question wasn’t asked. We don’t think there’s any need to explain this with words.

In addition, the service will likely add and remove questions. We don’t think it will be useful to keep adding the new ones into older applications, or marking a question as removed into new applications because it will add to the length and complexity of the page.

## Removing the guidance

We currently replay the guidance given to candidates. If they refer to it, providers have to read through a lot of content which is not relevant to them. It includes:

- telling the candidate about things which are outside of the application process (eg that they can apply for a grant)
- explanations and examples of what the candidate could put in the field – but all a provider needs to know is what the candidate actually put into the field
- things which the provider should already know, and it isn't the role of this service to tell them - for example, that they have legal responsibilities

We have removed the guidance from the application details page. If there really is a user need for providers to occasionally refer to what the wording was, we could consider adding it to the service guidance.

Similar guidance is also present in other sections of the application details page, and we’d suggest tackling those as a separate piece of work.

Note that there’s currently no facility to store old versions of the guidance, so if it changes on the application side then the content replayed to the provider will not be what the candidate actually saw.

## Showing the safeguarding information

The safeguarding information is hidden to prevent an ‘over the shoulder’ privacy breach.

But there’s a lot of other sensitive personal information within the application which is not hidden in this way. And we don’t think there is much chance of a user using this service in a public place.

That's why we have removed the ability to toggle the display of the safeguarding information. This will mean that users can see all relevant information at a glance.

## Generic wording for users without permission to view safeguarding information

We have new wording for users who cannot see safeguarding information:

> Unavailable: you and your organisation both need permission to view these safeguarding issues.

There’s currently a range of different messages, but we don’t feel that’s necessary now that we have far clearer onboarding and organisational permissions are more likely to be set up.

We think we should instead just provide enough information for users to move to the next step, rather than trying to squeeze in a lot of information.

If the issue of incorrectly set up permissions does persist, we probably need a better overall strategy. One example might be a ‘check my permissions to work out why I can’t see this’ link in appropriate places.

## Distinguishing between system messaging for lack of safeguarding permissions and candidate answers

Currently, the system message that tells the user they can’t view safeguarding permission has the same standard black text as the candidate’s actual answer (when it can be viewed).

We tried using inset text, warning text, details (toggle), a box and grey text when the user lacks permission. But:

- inset text makes it look like a table border
- warning text is too prominent and is not intended to be used this way
- the Details component draws attention and requires a click to view a tiny amount of information
- a box is too prominent and looks messy inside a table

So we decided to use a combination of grey text and a prefix of ‘Unavailable:’.

## Risks

As we’ve worked on this, we’ve discussed the fact that we’re not storing exactly what the user was asked and what answers they could choose from.

Since the candidate service is still being iterated, this means that we risk the chance of misrepresenting a candidate’s answers over time. The answer will remain the same, but the question it appears to be answering will change.

This risk also applies to other parts of the application details which are not covered in this piece of work.
