---
title: Changing the application process for candidates
description: We designed a new way for candidates to fill out and submit their applications for teacher training to give them more flexibility to manage their applications.
date: 2023-06-01
tags:
  - courses
ogImage:
  src: /apply-for-teacher-training/changing-application-process/changing-application-cover.png
  alt: "Illustration showing a before and after of the application process. Before shows how the application os one page where candidates can choose 4 course choices as part of their application for. After shows how candidates will fill out a section called ‘Your details’ first and then navigate to a section called ‘Your applications’ where they will choose their 4 courses and each of those would become an application."

---
![Illustration showing a before and after of the application process. Before shows how the application os one page where candidates can choose 4 course choices as part of their application for. After shows how candidates will fill out a section called ‘Your details’ first and then navigate to a section called ‘Your applications’ where they will choose their 4 courses and each of those would become an application."](changing-application-cover.png)

The way the current application process works is based on old business rules from UCAS (the service that Apply for teacher training replaced).

Candidates can currently submit one application linked to 4 course choices. Then they have to wait for an outcome on all 4 course choices before they can apply again.

We’re now in a position to change this process. We designed a way for candidates to apply for courses with more flexibility and autonomy to manage their own applications one by one.

## The issue

Last recruitment cycle (October 2021 to September 2022), 65% of candidates who received rejections on all of their course choices did not apply again.  

So far this recruitment cycle (October 2022 to May 2023), 63% of candidates who received rejections on all their course choices are not applying again.

Candidates have also told us that when they receive a rejection on one course choice, they expect to be able to apply for another course immediately, instead of waiting for an outcome on all their course choices.

On top of this, candidates also struggle to apply again if they receive poor, or no feedback from providers and this makes them feel like they have less trust in providers.

Currently, providers have 40 working days to respond to a candidate’s application. If they do not, the applications get rejected automatically. This is the most negative experience a candidate can have in our service because most candidates expect to hear back within 2 or 3 weeks.

## What we did

The idea of allowing candidates to ‘continuously apply’ for courses had been looked at before by previous teams. We gathered previous research to see what holes we had in our knowledge so we could test some initial designs with candidates.

From this research we realised we did not have a good understanding of a candidate’s mental model around the application process. We also do not publish any information about the application process to help candidates prepare to apply for teacher training.

The hypotheses we wanted to test with this work were:

* allowing candidates to continuously apply will reduce friction and increase applications per candidate
* candidates will apply to another course sooner when an application is unsuccessful
* allowing candidates to continuously apply is more aligned to candidates’ mental models
* candidates will penalise slow providers by withdrawing an application and applying somewhere else
* allowing candidates to continuously apply creates a tighter feedback loop between providers and candidates

### Adding a navigation bar and splitting the application process

Currently Apply has one page consisting of the application form that candidates fill out. As part of this form, they choose up to 4 course choices.

We added a navigation bar and created a section called ‘Your details’. In this section, candidates would add all their information personal to them (like their qualifications and work history). Once they had completed this, they could move on to the next tab called ‘Your applications’.

The ‘Your applications’ tab would allow candidates to search for and choose a course to apply to.

![Screenshot showing a navigation bar with two tabs. One says 'Your details' and the other says 'Your applications'.](new-nav-bar.png)

### Adding courses

If a candidate had not filled out all the sections in ‘Your details’, we would show a message telling candidates they needed to do that before they could add a course.

![Screenshot showing a message that says 'You need to complete your details before you can apply to any courses'.](incomplete-details.png)

If they had completed the ‘Your details’ section, they could begin adding a course. We designed a new flow for adding a course.

![Screenshot showing content that explains users can add up to 4 courses at a time. It also explains how course can fill up quickly so the user should apply soon. After the content is a green button that says 'Add application'.](adding-applications.png)

Once a candidates starts adding their courses, we would display them like we do now, with a status attached. We’d also tell them how many courses they have left to apply to.

![Screenshot showing content that explains users can add another 3 courses to apply to. Below this is a summary card showing the first course the user has applied to.](after-application-added.png)

### Guidance on the application process

We also added some guidance explaining the application process. We currently do not explain this in detail to candidates anywhere, including on the Get Into Teaching website.

![Screenshot showing important dates and deadlines candidates should know when applying for teacher training. For example it states that applications open on 10 October 2022 and close on 17 September 2023.](new-guidance.png)

### Exploring an alternative to rejecting applications automatically

 Currently, once a candidate submits an application, the training provider has 40 working days to respond. If they do not, the application is rejected automatically.  

As a team we had a workshop to look at alternative ways to help candidates have more autonomy over their applications and help providers to give feedback.

The option we tested was to allow an application to become ‘inactive’ after 40 working days. This would allow candidates to submit another application while they wait for a response. Training providers would still be able to respond to an ‘inactive’ application too.

![Screenshot showing an application to a training provider called 2 Schools Consortium. The application is to a Chemistry course. The status of the application says 'Inactive' and explains that the candidate can apply for another course while they wait for a response on this application.](inactive-application.png)

We also tested another option where there would be no 40 working day time limit and instead we tell candidates to just withdraw the application if they have not heard anything from providers.

![Screenshot showing an application to a training provider called Alban Federation SCITT. The application is to an English course. The status of the application says 'Awaiting decision' and explains that the candidate can withdraw the application and apply somewhere else if they do not receive a response from the training provider.](waiting-for-decision.png)

## What we learnt

We now have a better understanding of candidate’s mental models when it comes to applying.

We learnt that candidates:

* found the guidance on the application process useful
* preferred the option for applications to become ‘inactive’ allowing them to apply to another course
* did not expect applications to be open all year and expected a deadline and all applications to be assessed equally
* would not feel comfortable withdrawing an application unless they had received feedback on it from a training provider
* would expect to have an outcome on all their applications before deciding which to accept

## Further considerations

We need to do more research to understand why providers do not give feedback to candidates, as this is a fundamental issue and prevents candidates from applying again.

We’ll also be continuing to improve the designs to give candidates more flexibility when applying. We plan to launch some of the designs we tested this recruitment cycle (like publishing guidance on the application process). We’ll launch the bigger changes next recruitment cycle (like allowing applications to become ‘inactive’).
