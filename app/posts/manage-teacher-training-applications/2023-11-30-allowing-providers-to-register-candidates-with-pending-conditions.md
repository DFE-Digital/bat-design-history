---
title: Allowing providers to register candidates who still have to meet their subject knowledge enhancement (SKE) condition 
description: We added a button to allow providers to send candidates to Register trainee teachers (Register) before all the candidate's conditions have been met.
date: 2023-11-30
tags:
  - offer conditions
  - application status
---

When a candidate accepts an offer from a training provider, their status changes from ‘offer made’ to 'conditions pending’ in Manage teacher training applications (Manage).

A ‘conditions pending’ status means the candidates must meet conditions the provider has set before they can start their course. These can include:

- passing a disclosure and barring service (DBS) check
- passing a fitness to train to teach assessment
- showing the provider their original degree certificate
- doing a subject knowledge enhancement (SKE) course

Once a candidate has met these conditions and they begin their training, training providers can then register them in a service called Register trainee teachers (Register).

## The issue

The services Apply for teacher training (Apply), Manage and Register all work together. When a candidate moves from ‘conditions pending’ to ‘recruited’ status in Apply and Manage, their information gets automatically sent to Register over an API. This allows providers to register trainees who are starting their training without having to input the same information from one service, into another.

However, at the end of the 2022 to 2023 recruitment cycle, we saw a lot of candidates who had not completed their subject knowledge enhancement (SKE) course yet. SKE courses aim to improve a candidate’s subject knowledge to better prepare them for the classroom. SKE courses are usually online and can be between 8 to 28 weeks in length.

If a candidate did not complete their SKE course before their training starts, this meant providers could not move them to ‘recruited’ status and send them to Register.

Providers were contacting our support team to ask how they should register these candidates before the new recruitment cycle started.

## What we changed

We worked with our policy team and decided to allow candidates to start their training even if they still had to complete their SKE course. We decided this was not a risk to the providers or children they would be interacting with during their training.

We worked with the Register team to design a way for providers to send candidates to Register if the candidate only had an outstanding SKE condition in Manage.

We added a secondary button to Manage, that would only appear if all conditions had been marked as ‘met’ excluding the candidate’s SKE condition.

![Screenshot of the offer page with a grey secondary button saying 'Recruit candidate with pending conditions'.](offer-page.png)

Once the provider selected that button, they would be asked if they wanted to recruit the candidate.

![Screenshot of questions asking providers if they want to recruit the candidate with a pending SKE condition](recruit-with-conditions-pending-question.png)

Once the provider had selected ‘yes’, the candidate’s status would change to ‘recruited’ and ‘conditions pending’.

![Screenshot of the candidate application in Manage showing their name and a blue status saying conditions pending and a green status saying recruited](candidate-new-status.png)

This would mean their information would be sent to Register so there would be no delays for that candidate to be registered on time for the new recruitment cycle.

We also included content on an email that is sent to candidates when they are recruited that reminds them to complete their SKE course.

## Further considerations

We need to monitor the use of this new feature, and if it is successful, we will allow providers to do this for more conditions where there could be a delay to training. For example, allowing candidates to be registered when they have only received one, instead of 2 references.
