---
title: Changing how we ask candidates about what location they are applying to 
description: We changed the content on the question asking candidates what location they are applying to when they choose a training provider and course.
date: 2023-10-19
tags:
  - locations
---

We changed the content on the question asking candidates what location they are applying to when they choose a training provider and course.

This change was released in August 2023.

## How Apply works with other services in Becoming a teacher

Apply for teacher training (Apply) is one of 5 services that work together in the Becoming a teacher division.  

Training providers publish courses on Publish teacher training courses (Publish). These courses then show on Find postgraduate teacher training courses (Find). Candidates can search for courses on Find and then apply to courses in Apply.

When a candidate chooses a course they want to apply to, they also need to choose:

- if they are applying to study full time or part time
- the location they are applying to

If the provider has only one location (usually ‘Main site’), we skip the location question in Apply.

Apply pulls course information from Publish so the candidate can select and apply to their intended course.  

When a candidate chooses a location, we show a radio list of all the locations a training provider has. This list is pre-populated based on the information the provider adds in the ‘Schools’ tab in Publish.

When candidates choose their course in Apply they can add an application.

![Screenshot of the 'Your applications' tab showing candidates they can add an application by selecting a green button.](your-applications-page.png)

Candidates are then asked if they know which course they want to apply to.

![Screenshot of a question asking candidates if they know which course they want to apply to.](which-course-page.png)

If candidates say 'Yes', they then choose their training provider.

![Screenshot of a question asking candidates which training provider they are applying to.](which-training-provider.png)

Once they have chose their training provider, they choose a course that the training provider offers.

![Screenshot of a question asking candidates which course offered by the training provider they are applying to. This is followed by a list of available courses.](course-options.png)

They then choose a location, if the provider has given that information in Publish.

![Screenshot of the question asking candidates 'Which location are you applying to? The question is followed by a list of radio buttons.](old-location-question.png)

They then see a summary page of what they have selected.

![Screenshot of a summary page of all the questions the candidate has answered followed by 'Change' links and a green button to submit their application.](summary-page.png)

## The issue

User research with candidates found that understanding where training would take place was the most important decision-making factor when choosing a course. They needed to know not only where their classroom training could take place, but also where they would need to travel to for their theoretical study.

In Find, candidates were only shown a list of schools where they could do their school placements. A school placement is where a candidate gets practical classroom experience during their training. Candidates need to do 2 school placements. These are often decided once a candidate starts their training.

To make this clearer, the team [added another type of location to Publish called ‘Study sites’](/publish-teacher-training-courses/adding-study-sites/). A study site is where a candidate would be doing their theoretical training, like a university campus.

Training providers would now be able to add ‘Study sites’ and ‘Schools’ (school placements) to Publish. These would then show on Find for informational purposes so the candidates would get a better idea of where they would be travelling to. At the same time, we [improved the content above the list of placements](/find-teacher-training/improving-the-content-above-school-placements-and-in-the-provider-search/).

Through this work the team realised that in Apply, we ask candidates to choose their location and the list of schools shown are ‘placement schools’ because Apply pulls information from the ‘Schools’ list, not ‘Study sites’. Asking candidates to select a placement school is too early in the process because:

training providers often do not know where candidates will do their placement until the training start

candidates cannot choose their placement schools, so this is misleading for them

## What we did

We removed the question in Apply. However, this caused problems with the API we use to link Apply to training provider’s own student record systems. At the time, we found that this would be a large technical task to remove the question without breaking the API that the majority of our larger training providers rely on.

Some larger training providers also need some indication of what location a candidate wants to apply to. These providers will send applications to different teams depending on what location the candidate has selected.

For now, we decided to improve the content on the question in Apply to make it clearer to candidates what they are selecting.

We used the wording ‘school placements’ and added some guidance to explain what this is. We also explained that what they are selecting is a preference and it may not always be possible for providers to place a candidate where they want.

The question before we changed the content.

![Screenshot of the question asking candidates 'Which location are you applying to? The question is followed by a list of radio buttons.](old-location-question.png)

The question after the content changes.

![Screenshot of the new question with a heading of 'School placement location' followed by some guidance explaining placements to candidates. Then there is a question asking candidates which location they are applying to with a list of radio options to choose from.](new-location-question.png)

## Further considerations

This is not the best solution. Instead, we could:

- ask candidates to select from a list of ‘Study sites’ from Publish rather than ‘Schools’
- remove the question from Apply completely
- better understand the impact on the API and what we can do to resolve it