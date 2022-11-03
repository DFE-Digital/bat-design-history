---
title: Changing how we ask people for a reference
description: Why we now ask people to give a factual reference instead describing how the candidate would make a good teacher.
date: 2022-11-03
ogImage:
  src: /apply-for-teacher-training/changing-how-we-ask-for-references/reference-illustration.png
  alt: "Illustration with the title 'References', 2 bullet points and an empty text box"

---
{% from "email/macro.njk" import appEmail %}
![Illustration with the title 'References', 2 bullet points and an empty text box](reference-illustration.png)

We’ve [changed the references process](/changing-the-reference-process-to-make-it-easier-for-candidates-to-submit-applications) so that candidates do not need to receive references before they submit their application, and instead only need to request references once they have accepted an offer.

This change meant we could also review the questions we ask people when giving a reference, refocusing it on factual information used for safeguarding purposes.

## The issue

Previously when giving a reference, people were asked the question ‘Does (candidate name) have the potential to teach?’, with some bullet points suggesting things they could comment on.

There were also given a word limit of 500 words, and told they could save and return later if they needed more time.

![Screenshot showing the heading 'Does Jane Doe have the potential to teach?' followed by 'You could comment on things like their commuication skills, reliability and punctuality, transferable skills, ablity to work with children or academic schools'.](old-reference-question.png "Previous design for reference screen")

With the change to collecting references after candidates had already accepted an offer, it was no longer appropriate to ask for such detail as the candidate’s potential for teaching would already have been assessed. At this point, the main reason for asking for a reference was for safeguarding purposes.

We needed to encourage people giving a reference to focus on factual details, and to give a reference relatively quickly so that the candidate’s place could be confirmed.

This change was made on 11 October 2022. This was the first date on which candidates could start submitting applications and providers could start making offers for the 2022 to 2023 recruitment cycle.

## What we changed

We made changes to the initial email and to each of the pages shown when giving a reference.

### Email

We rewrote the email we send asking for a reference. This now says that the candidate has accepted an offer, and gives the name of the provider.

The rest of the content tells people what they’ll need to provide, focusing on factual information.

{{ appEmail({
  subject: "Teacher training reference needed for ((candidate name))",
  content: "

Dear ((name))

((candidate name)) has accepted an offer from ((provider name)) for a place on a teacher training course.

They’ve said that you can give them a reference.

You’ll need to:

- say whether you have any concerns about them working with children
- give factual information which can be used to check their application, for example about their academic performance

Use this link to give the reference or to say you cannot give one:

((link))

If you say you cannot give a reference, ((candidate name)) will know they should ask someone else. You will receive no further emails."
}) }}

### Initial question

We added some content at the top confirming what the reference was for.

![Screenshot showing the heading 'Give a reference for Jane Doe' followed by the question 'Can you give a reference for Jane Doe?' with Yes and No answers.](initial-question.png)

### Confirming how they know you

We made a change to this page in response to some usability testing.

Previously the options were "Yes" and "No". One research participant was nervous about selecting No, as they feared it’d reflect badly on the candidate or would reject the reference.

We changed the answer to "No, I’ll give a more accurate information". This aims to help users understand that if they select this option they’ll be able to write in their own answer.

We also changed the question from "Is this correct?" to "Is this description accurate?"

![Screenshot showing the heading 'Confirm how Jane Doe knows you' followed by a quoted description and the question 'Is this description accurate?'](second-question.png)

### Safeguarding question

A review of where users had previously answered "Yes" to "Do you know any reason why (candidate name) should not work with children" revealed that most users had misread the question, and had written positive things about the candidate into the text box. Whilst this was only a small percentage of the overall number of references given, we reviewed how we could improve this.

We changed "Yes" to "Yes, I know a reason why they should not work with children" to help people scanning the page.

We also added the hint text "Give facts, not your opinion". This was based on guidance in the [Keeping children safe in education policy](https://www.gov.uk/government/publications/keeping-children-safe-in-education--2), which states that only substantiated allegations should be shared.

![Screenshot with the heading 'Do you know any reason why Jane Doe should not work with children?'](safeguarding.png)

### Reference

We reduced the amount of content on this page.

The content now starts "Your reference should include facts, not your opinions."

Some bullet point suggestions are included. These vary depending on the type of reference (academic, professional, from working in a school, or a 'character' reference).

References to a word limit have been removed, to discourage users from thinking they need to write a long reference. The word count now only appears as the user approaches the 500 word limit.

![Screenshot with the heading 'Reference for Jane Doe'](reference.png)


### Check your answers

We simplified this page, focusing on the three answers given followed by a green 'Submit reference' button.

![Screenshot with the heading 'Check your reference for Jane Doe'](check-answers.png)

## Research

We did research with 7 people who had previously given a reference or had previously declined to give a reference.

We asked them about their experience of giving references more generally, and found that they:

- usually have to write references in their personal time
- dislike having to use different forms and formats for different employers
- have to look up students’ records, if they taught them a while ago
- are sometimes prevented from their organisation policy from writing anything negative
- would decline to give a reference if they had any concerns about the candidate

We also tested our new flow with them, and found that they:

- wanted a more specific indication of when the reference was needed by
- were unclear what 'concerns about working with children' meant, particularly if they had not observed the candidate around children at all
- were sometimes surprised by only needing to give factual information

The participants also appreciated the idea that they would only be asked for a reference if a candidate was successful, as this would reduce the number of references they had to write.

## Further considerations

We plan to review the new references process once it has been in place for a few months.

We will consider:

- how long it takes people to give a reference
- if fewer people mis-interpret the safeguarding question
- whether 'how you know them and how long you’ve known them' could be improved, perhaps by splitting it into 2 questions
- what kind of factual information people enter on the main reference page

