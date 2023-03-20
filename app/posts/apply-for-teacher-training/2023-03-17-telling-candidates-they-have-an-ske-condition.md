---
title: Telling candidates they need to do a subject knowledge enhancement course
description: How we designed a way to tell candidates they have a subject knowledge enhancement course as a condition of their offer.
date: 2023-03-17
tags:
  - making an offer
  - application details
ogImage:
  src: /apply-for-teacher-training/telling-candidates-they-have-an-ske-condition/ske-cover-image.png
  alt: "Illustration with the text 'Offer received' and information about doing an 8 week subject knowledge enhancement course in physics"

---
![Illustration with the text 'Offer received' and inforation about doing an 8 week subject knowledge enhancement course in physics](ske-cover-image.png)

Previously, we designed a way to help training providers add a subject knowledge enhancement (SKE) course as a condition of an offer.

When this offer comes through to the candidate, we need a way for them to see information about the SKE course.

We tested these designs and improved the content shown to candidates. We released this new feature on 20 March 2023.

## The issue

Subject knowledge enhancement (SKE) courses are currently available in 9 secondary subjects:

* biology
* chemistry
* computing
* design and technology
* English
* languages
* mathematics
* physics
* religious education

Providers can ask candidates to do an SKE course if they need to improve their subject knowledge before they start their initial teacher training (ITT).

From previous research, candidates often do not know what an SKE course is when they're asked to do one.

Some of the main issues candidates have are not knowing:

* why they have to do an SKE course
* how to find an SKE course or who to do it with (SKE providers and ITT providers can be different)
* SKE courses are free
* they can get a bursary of £175 a week while they do their SKE course
* how they can study their course (for example, online, in-person or both)

## What we did

After the training provider sends an offer to a candidate with an SKE course condition, we show some guidance before a candidate accepts their offer. This helps explain what an SKE course is, so the candidate can make an informed decision about accepting the offer or not.

We give them information on:

* the subject and length of their SKE course
* why they have to do an SKE course
* when they should complete their SKE course by
* the SKE course being free and they'll get £175 a week while they do it
* how they can study their SKE (online, in-person or both)

![Screenshot showing the offer a candidate will recieve with a subject knowledge enhancement course attached. The course is for a 12 week biology course. The content also tells the user they should start their course by April 2023, there is a £175 bursary they can get while doing the course and there are options on how they can study which include full time, part time and online or in-person. The screen then asks the user to respond to the offer'.](ske-offer-page.png)

### Language SKE courses

Sometimes training providers can ask candidates to do 2 language SKE courses if they’re applying to a modern language course. This is so they can have the ability to teach another language at their school if they need to.

If there are 2 language SKE courses, we show slightly different content with grammatical changes so it makes sense to candidates.

![Screenshot showing the offer a candidate will recieve with 2 language subject knowledge enhancement courses attached. The courses are for an 8 week French course and a 12 week Spanish course. The content also tells the user they should start their courses by April 2023, there is a £175 bursary they can get while doing the courses and there are options on how they can study which include full time, part time and online or in-person. The screen then asks the user to respond to the offer'](language-ske.png)

Once they accept the offer, we show their SKE course with their other conditions, like their Disclosure and Barring Service (DBS) check.

![Screenshot with the heading 'Study before you start training' followed by content saying the user has a 20 weeks maths course with the tag 'Not yet started'. This is followed by content explaining when the user should start their course, that there will be a £175 bursary for the course and to contact the University of Sussex if they have any issues.](offer-page.png)

### Selecting a training provider

Currently, candidates can use the [SKE course directory](https://www.gov.uk/government/publications/subject-knowledge-enhancement-course-directory/subject-knowledge-enhancement-ske-course-directory) to find an SKE provider. This is published on GOV.UK and not owned by our team.

We wanted to test if it would be feasible to allow candidates to choose their SKE provider within our service.

We added a button to the ‘Offer page’ that would allow candidates to select an SKE training provider.

![Screenshot with the heading 'Study before you start training' followed by content saying the user has a 20 weeks maths course with the tag 'Not yet started'. This is followed by content explaining when the user should start their course, that there will be a £175 bursary for the course and to contact the University of Sussex if they have any issues. This is then followed by a green button that says 'Select a training provider'.](study-before-training.png)

On the next page, there is a link to the SKE course directory. This is so candidates can go and look at possible options if they're not sure who to choose.

Then we show a list of SKE providers to choose from. Ideally, this would only show a list of providers that offer a SKE course in the relevant subject.

![Screenshot with the heading 'Selecting a training provider'. This is followed by a link to the subject knowledge enhamncement (SKE) directory and a radio list of SKE training providers that the user can do their SKE course with.](select-training-provider.png)

After selecting an SKE provider, there's a screen that tells the candidate what information we would share with that provider to set expectations. We're not sure how technically feasible this would be but we wanted to test the concept with users to see if this would be a smoother process.

Currently, candidates have to go to the SKE provider's website and fill in another application form. Often this form asks for the same information as our service. This seems like a waste of time.

![Screenshot with the heading 'Confirm training provider'. This is followed by content tellng the user what information we will share with the SKE provider which includes their name, email address, phone number and degree and A levels. It then says the provider will contact the user followed by a green 'Continue' button.](confirm-ske-provider.png)

## Initial results

We tested these designs with 7 users at different stages of the application process.

Overall the designs tested well and there were no major usability issues. Users did make suggestions on where we could make the content clearer.

We iterated the designs to include:

* clarity about how the bursary would be paid – this can vary by provider
* clarity around what ‘part-time’ means
* calculating the latest month of when a candidate should start their SKE course so they finish it before their ITT starts

We also tested the SKE course directory and found that most users did not even know it exisited and that they could choose their own SKE provider.

The directory is also hard for users to make sense of because there was nothing to tell users which SKE provider was better than another. Users mentioned having reviews to help tell the difference.

Some of the language used in the directory (like short, medium, or long courses) did not make sense to users either.

### Pairing back our designs

We removed our designs that allowed candidates to choose the SKE provider in our service. Although they tested well, we need to think about how we can integrate SKE provider information into our service and if this is something our service should even handle.

Instead of having a green button that says 'Select a training provider' we now just show the final page showing all the candidate's conditions. We replaced the green button with a link to the SKE course directory so canddiates can use it.

Once a candidate has finished their SKE course, their ITT training provider can mark it as completed. This would then change the status on the candidate’s side to ‘Completed’ too.

## Further considerations

During the testing of these designs, we found out a lot about the SKE policy as a whole. This does not sit directly with our team so we gathered these findings and presented them to our policy team who are looking to evaluate the SKE policy.
