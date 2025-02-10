---
title: User research with candidates on surfacing provider data
description: Detailing the first round of user research with candidates about surfacing provider data
date: 2025-02-07
tags:
  - research
  - find
  - candidates
  -  provider performance data
---

## Goals of the research 

### Objective 1

Understand what information candidates would find useful in relation to provider performance, and how they would use that information when deciding on a course  

## Objective 2

Test some designs with candidates gain insight into the following: 

-	How candidates use the data to make their decision  
-	Which data type is the most useful to them
 
## User Need  

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
description: "As a candidate,
I need to identify the quality of different teacher training courses and providers,
so that I apply to courses where I am more likely to be successful.” 
}) }}

## Who we spoke to

We spoke to 8 prospective domestic ITT candidates.   

## Methodology 

We conducted 1:1 interviews which were 1 hour long.  

The first half of the session was exploratory. We discussed participants thoughts and expectations about provider performance data in the context of Find.  

The second half of the session was usability testing. We shared at a prototype which included 5 different ITT courses. 

The courses included the following provider performance data: Ofsted rating, success rate, offer rate and response time. All other elements of the course (subject, location etc.) were kept as similar as possible. 

We iterated the designs between interviews based on initial findings.  

## Limitations  

### Sample 

The sample only included domestic candidates due to the scope of the project. 

Further research is required with international candidates before proceeding with the designs

The sample was smaller than planned due to drop-out. We planned on speaking to 10-15 prospective ITT candidates, however in total we spoke to 8 candidates. 

### Time constraints 

There was a tight deadline for the project. This resulted in researchers being unable to recruit additional participants to increase the sample size. 

### Technical Limitations 

The testing involved using a prototype in which some features were not functionable and occasionally required the researcher to guide the participant.    

### Devices 

All participants were on laptops. In the future we need to undertake mobile testing.

## Key Insights resulting in iterations during the round

### Changes made to the “About the provider” section

When first testing the prototype, the accredited and training provider data was listed in one section under the ‘About the Provider’ title.

![About the provider initial](initial-provider-information.png)
 
During the research sessions, it became clear that participants were unsure what pieces of data related to each provider.  

After Participant 3, the design team split out the training provider and accredited provider with sub-heading. This made it clearer who the data relates to. 
 
![About the provider post iteration](post-iteration.png)
  
### Changes made to the “Apply for this course” banner 

Discussions were held within the internal team to determine what data could be shown.  

It was decided to show the number of applicants who have clicked to Apply, as this may be more helpful in helping candidates compare courses. Changes were made so that the information displayed the number of people who have applied.  

![number of people who have clicked to Apply](clicked-to-apply.png)
  
Additional information about the number of trainees who achieved QTS was displayed to provide context to the success rate 
 
![percentage of trainees who achieved QTS](success-rate.png)

## General findings on how the participants reacted to provider performance data

### Success rate

Participant found having data on the success rate to be an important piece of information when deciding which course to apply for. For some participants, the success rate was indicator to the quality of the course. The ideal success rate for participants is 80% or above.  

### Response time

There was a mixed response when asked about the importance of the response time, with some factors being ranked as more important. Participants felt that knowing the response time is useful and reassuring. However, it would not be the most impactful factor in their decision.  

### Offer rate

Some participants felt that the offer rate would not impact the decision when choosing a course. They felt it was interesting to know but it is not the most important factor. The offer rate can be interpreted differently with some participants having preference to a lower offer rate and some preferring a higher offer rate.

### Ofsted

The Ofsted report held somewhat importance to participants as it allowed them to identify if the provider was suitable and the right fit for them. It allowed participants to determine the quality of the provider. However, some participants expressed preference to seeing the Ofsted rating instead. 

### Number of applicants

Knowing how many candidates have applied to the course made participants feel informed when making the decision. From this data, participants made assumptions as to whether too few people have applied, and whether the course will be funded.  
 
### More consideration is needed for users with access needs 

Some aspects of the layout and the way text is presented is not user friendly to participants with accessibility needs. For example, one participant struggled to read the blue highlighted. In addition to this, the background of the screen was too bright, therefore they had to use a screen dimmer when reading the information.  
 
### Courses with missing data are seen as less desirable 

Some participants understood why a course might not have pieces of data, but it still left concern.  

The absence of offer rate information is off-putting for some participants and would impact their decision when choosing a course.  This created the assumption that the course is new, making it less likely to be picked a first choice. Some participants would seek additional information from the provider.

Not being able to view an Ofsted report would deter some participants. There is an assumption that the course is newer and might not be up to certain standards.  

Participants were less likely to apply to a course that did not show their success rate. Some would assume that this is due to the course not running in the previous year, making them question if the course is well established. 

### Performance data is used alongside other metrics inform decision  

Success rate data would be considered alongside the number of trainees and the number of people who have clicked apply. 

The offer rate has the potential to be more impactful when combined with the number of people who have applied. Additionally, it would be helpful for users to know the number of places available to use with the offer rate.  

## Recommendations 

-	Further testing is needed to ensure the webpage is accessible and the text is presented in a way that all users can read  

-	Further testing is needed on the utility of surfacing the QTS success rate for accredited providers, as the view of how importance this was varied between participants

-	If possible, including additional information on previous course cohort sizes to alleviate candidate worries about courses being oversubscribed would be desirable

-	If possible, including additional information on the number of spaces remaining on the course to help candidates make informed decisions  would be desirable

-	Further testing to include the Ofsted rating in the provider information section, where possible as participants felt this was important

-	Recommend providers to give candidates more communication if the processing times are longer than average

 ## Next steps 
 
Further user research and testing is needed, including with candidates that have accessibility needs and candidates from overseas. 

Undertake an accessibility review of the Find service to ensure it is user friendly to all candidates. 

Gather feedback from providers to validate or disprove assumptions on the performance data being displayed. 
