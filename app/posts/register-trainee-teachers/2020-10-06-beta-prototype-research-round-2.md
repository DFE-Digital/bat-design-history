---
title: Beta prototype research (round 2)
description: Research into provider-led user needs and continued testing of the prototype
date: 2020-11-09
related:
  items:
  - text: Research playback
    href: https://docs.google.com/presentation/d/18ihO7djCDhPWZ_neSsciKrGEN5SFpyEb4u6pL6pnELE
  - text: Research plan
    href: https://docs.google.com/spreadsheets/d/1F1wl_VnntLwbOj5KEQb7D02X3T8w2CEeRMx9lehIywY
  - text: Research recordings
    href: https://drive.google.com/drive/folders/1x0SlQ-q8YY5N1Q4IWhSpDXy03DzGo4Ty
  - text: User needs
    href: https://trello.com/b/5WZeE54R/register-trainee-teachers-user-needs-board
---
{% from "figure/macro.njk" import appFigure with context %}

Research completed: 27 to 29 October 2020 


Our second round of research focused mainly on testing the usability of our service when inputting initial teacher training (ITT) data for the provider-led postgraduate route. 

Our intention was to answer the following questions:

* What are our users’ key behaviours and needs around inputting large numbers of trainees?
* What is their understanding of “allocations”?
* What are the different scenarios around deferrals and withdrawals?
* What happens if a trainee fails? 
* Is our guidance useful and do users understand the next steps around tracking TRN and QTS?
* Do our users want to manage data on an individual or cohort basis and how is a “cohort” characterised?
* How do users currently handle alternative assessment outcomes to a QTS recommendation? 

## Who we tested with

We tested with these providers:

* Associated Merseyside Partnership (AMP) SCITT
* Partnership London SCITT
* University College Birmingham
* Essex Primary SCITT
* The Pimlico London SCITT
* Suffolk and Norfolk SCITT

## Research findings

### Preparing data input

Data collection and preparation is laborious. Most users collect different types of data separately in several stages. This includes: 

* application data, collected through UCAS and Apply
* additional data that the provider needs
* data required for DTTP 

They then add this data to their existing spreadsheets, which are often structured in order of the DTTP data input.

> “We have a central record system: a great big Excel sheet. 
Now I’ve split it and am storing the protected data separately: ethnicity, date of birth. All these are in another password protected Excel sheet.”

> “When I do 25 people, I have my data in order of how it’s needed to go into the system. When I come out, I know who I’ve registered and who I’ve got left to do.”

### Intro pages

Participants’ response to our home screen was a little mixed: to some it seems useful; to others, redundant.
 
Regarding the “trainee status overview" section:

* most users identified it correctly as just an overview, and some participants tried clicking into the fields for quick access 
* users interpreted the meaning of the different statuses correctly
* users were not clear which cycle the overview refers to
* most prefered to view just the current cohort and deferred trainees

> “I’d be most interested in the top row, and deferred and withdrawn. Presumably this is for the current year but it’s not obvious.”

> “QTS awarded and recommended has more to do with the end of the programme - that would be blank right the way through the year. I’m assuming it’s everyone in the system because it doesn’t say otherwise. I would prefer to see just my current cohort.” 


Our data requirements page did not receive a lot of attention, but when prompted it clearly fit into the existing behaviour of checking data requirements approximately once a year.

We found that:

* some users check data requirements around May - but most check in September, just before submitting ITT data
* some DTTP users are not always clear which data is required and which data is optional 


> “DTTP tells you what data is required and whether it’s essential - I just double check once a year that that’s the same as last year, usually in September.”

> “I look for an email sent from the department, or teacher bulletin or NASBTT for info on changes. [On DTTP] there are things that are optional that turn out to not be optional.”

## Registering a (single) trainee

### Structure

Several users did not understand that before landing on the task list they had already completed the “type of training” section. They questioned its “completed” status and ended up clicking into it twice. 
  
> “Initially I didn’t understand how I can have completed a section when I’ve only just landed on this page.”

{{ appFigure({
  image: {
    file: "1. first section completed.png ",
    alt: "Annotated screenshot showing a section with a status tag ‘completed’"
  }
}) }}

Some users prefer to set up a new record starting with the name, because it would help them identify the draft afterwards. For this reason some of our users completed the personal details section first. 

> “I don’t know how it would work if I left this - I’ve created a training record for nobody. I wouldn’t be confident about getting back here.”

We also need to rethink how we structure the “programme details” section - to make input more intuitive and to reduce the need for dropdown lists. 

Two users filled out “age range” first and then completely missed inputting the subject. They both had to go back into the section. Based on this feedback, we could consider reordering the fields, for example, in the following order:

* primary and secondary
* age range
* subject


### Allocations

The concept of DfE subject allocations is correctly understood both on DTTP and on Register.

Our users explained that it would be possible to submit a trainee record even if the trainee does not have an “allocated” place (for example, because the student is self-funded) - but no one remembers ever actually doing this. 

> “Yes = I have permission to recruit
No = I do not have permission to recruit, or may go over [the] allocation so may not get the funding needed for bursary. It may affect the ability of the school that they are placed in to support them. I have never heard of this actually happening!”

> “We bid for allocations through DTTP, got 20 originally, but had lots of applications so requested increased allocation over email this year. We got them extended to the maximum requested (44).”

> “We keep track of PE allocations on our main spreadsheet and end our recruitment once we’ve finished all our places.”

### International address

When changing a trainee’s address from international to national, many users did not initially select “In the UK”, which  allows us to collect  structured data. Instead they proceeded to input the UK address into the free text field, intended for “Outside the UK” addresses.

{{ appFigure({
  image: {
    file: "2. international address.png",
    alt: "A screenshot of a form asking for an international address using a textarea"
  }
}) }}

{{ appFigure({
  image: {
    file: "3. uk address.png",
    alt: "A screenshot of a form asking for a UK address using a separate fields"
  }
}) }}


### Multiple degrees

Even though users recognise our system enables them to input multiple degrees, some users might input only the one they consider most relevant. Some have confirmed this is how they went about it on DTTP. 

They would either pick the more recent one, the more relevant one in terms of subject or the one with the highest class. Typically the

> “They’ve got 2 degrees - that’s complicated. You’d normally go with their first degree, or with the higher class one, whatever makes most sense for the funding.”

### Autofill 

We observed some issues with the autofill feature. 

Most participants struggled to pick the right nationality as it was logged as “USA” in our mock data, but “American” in the system. 

There is also a chance that other adjectivals could be hard to find if they do not match country names (American, Dutch, Bissau-Guinean etc).

Later in the user journey, the international degree institution drop-down list consists of country names which results in an inconsistency within our interface. We need to ensure consistency across BAT and within our interface. 


Users commented that it is much simpler to enter degree data on Register than on DTTP. 
However, they did not realise that they could start typing the relevant institution to be given a list of suggestions. Instead, they scrolled through the entire list.  

### Confirmation 

Both the confirmation prompts and the section overviews give users confidence that they have inputted data correctly. All participants were confident they would be able to return to the draft at a later point without losing any data. 

> “I like that, it gives me the chance to check what I’ve already done, make sure that I’m happy with the data that’s gone in and then you can tick you’ve completed that.”

> “The [DTTP] system doesn’t allow you to submit if something is missing but it’s not always clear what is missing.”

## Registering multiple trainees 

We quickly confirmed the biggest pain point: adding multiple trainees. 

Providers have to add between 60 and 200 trainees at the beginning of the year. This typically means adding 10 to 30 trainees a day. This whole process takes 3 to 7 days to complete, on average, for our users. 

### Bulk action behaviour

Providers try to maximise their efficiency by waiting until they have gathered all the data they need, and then upload all of their trainee records at around the same time. 

We found that:

* users generally upload data manually onto DTTP (for example, copying and pasting data from Excel spreadsheets into the system)
* one participant works with a data management team who use a bulk upload system to input data
* when it comes to uploading trainee data via HESA, participants create a data return from their own trainee record system, and then upload this data in bulk, making manual adjustments where necessary

> “We don’t always do it as soon as they’ve started their program. We start registering 2 or 3 weeks after the candidate has started, because not all candidates have provided everything needed at the very start.” 

> “We know we have until the end of October, as the information on DTTP has to be in by whatever date the DFE says so it can be included in the census. We are informed of the date by the data management team.”

The behaviour of splitting registering a trainee into 2 distinct actions (setting up drafts and submitting them for TRN) is reflected in our participants’ approach to grouping trainees into “cohorts”.

> “I would upload them all as a draft record, then I’d do a download of all my records, I’d ask my responsible officer to check if all the data was correct and then I would send them all through for a TRN request.”

## What is a “cohort”?

“Cohort” is a widely yet inconsistently used term and its use differs depending on context: it could be interpreted as a recruitment cohort or teaching cohort - resulting in different definitions. 

A teaching cohort is:

* typically defined by the current year of study
* sometimes split by primary and early years

(Part time trainees, where studies span more than one year, would shift from cohort to cohort depending on what year they’re in.) 

> “The current cohort is 20/21. Our cohorts are defined by their training years.”

We learned that reinstatement of dormant trainees and course extensions can move trainees from one cycle into the next, but we are not clear if this has an impact on our data consumers or on our users’ expectations towards managing different cohorts in our system.

## Using our service for multiple trainees

As a result of this need to upload multiple trainees at once, users are calling for several changes.

### Review trainee record page 

Instead of reviewing and submitting records one by one, some users would prefer to have a simple overview (e.g. spreadsheet format) of all the drafts for comparison.

> “If I was inputting just a few students this would be ok. If I was doing 70 students, I’d rather have a report/ list to scan down - grouping of relevant trainees. Everyone is on the same course so a lot of the data would be the same. All our PGCEs start in September, so I’d be looking at everyone in the cohort at the same time. So the ability to check students together would be an improvement.”

### Trainee records page

We found that in order to help users manage their trainee records we should add more sort options.  For example, we should provide the option to sort alphabetically by surname, as well as by the date the record was added and updated.

> “I prefer them to be alphabetically ordered. If I wanted to award QTS for 20 students I would work from a list - wouldn’t want to have to keep searching.”

> “I don’t understand from this list what the order is. Would prefer an alphabetical thing. I’d obviously want to see my current cohort. I’d like previous years’ records to be archived.”

In order to save time, some users would prefer to be “directed to the next section automatically”.
  
> “I don’t know whether that would be an issue and feel like [it’s] just another click, having done 20 entries. I don’t know, I would have to try that out.”

### User needs

As a provider (of all other routes except AO) I need to add multiple records in a short period.
I need to request multiple TRNs and recommend multiple trainees for QTS in an easy and efficient way. 

I need to report on data from the service at a cohort level.

## Integration across BAT services

Our users recognise the connection with Publish, Apply and Manage and are hoping for us to reduce the strain of adding multiple trainees by using the existing data. 

> “There’s a lot of data that is re-entry. There’s always the chance of making a mistake.”

> “This depends on each provider, but our programme is the same for everybody, so we have the same start date and the same end date that goes in for each trainee - it could be good if this could be prefilled for a provider.”

## Tracking TRN

Users find the process of registering a trainee and requesting a TRN “straightforward” and “self explanatory”. Leaving the TRN confirmation page, they are clear on the timelines and next steps. Some users would come back a few days later to download all the TRNs and keep them in their internal spreadsheet. For this they are happy to enter our service and are not interested in email notifications. Most users would communicate TRNs to trainees at the end of the year or earlier upon request.

> “The trainee will get an email from DfE. But trainees sometimes will ask if they need the TRN earlier for job applications etc. We have issues with Schools registering TRN’s sometimes, so may send them out earlier.”

> “I feel like I wouldn’t have to hand-hold new colleagues through this - it’s self explanatory!”


## Managing trainee data

### Filters

Participants understood the different statuses and were able to filter trainee data according to their needs.

### Search and download

Most participants used the search bar to search by surname - however, one user did not even notice that there was a search bar. The download button also got overlooked a few times. None of the participants interviewed were interested in searching by trainee ID.

### Deferring and reinstating

Users easily understood and completed the process of deferring and reinstating trainees.  

The terminology seems clear (deferred = dormant, reinstate = return onto course). 
Reinstatement of a deferred trainee and extension of one's course both mean that the trainee becomes part of the current cohort. 

> “We would update it within a couple of days because it affects bursaries and funding.”

> “Deferred and withdrawn, we might reflect back on these over the year - I’d cross check my excel data and this data. Got to make sure you’ve updated this data on DTTP.”

### Withdrawing

Users easily completed the process of withdrawing a trainee. The most typical reasons for withdrawing a trainee were:

* not passing the Standards Assessment
* not passing their exams (e.g. PGCE) 
* health reasons
* other personal reasons/dropping out 

Some struggled to differentiate between two of the terms:

> “I don’t understand the difference between Academic failure and Did not pass assessment.”

{{ appFigure({
  image: {
    file: "4. withdrawal reasons.png",
    alt: "A series of radio choices for reasons a trainee might withdraw from a course."
  }
}) }}


But withdrawing someone is not the right default process for someone whose assessment outcome was “failure”. (View next section on assessment outcomes) 

## Recording assessment outcomes 

According to our participants, trainees do not get automatically withdrawn having failed the assessment once. Instead, they can extend the course and get reassessed. 

As a result, withdrawal is not the right default process for someone whose assessment outcome was “failure”.

> “Trainees get one opportunity to repeat. [Their status on DTTP] would stay as a ‘continuing student’ if they were repeating their assessment. If they choose not to repeat, they would be on as a fail. I’ve not had anybody fail Assessment Only.”

> “We’d wait until they passed before touching their DTTP record.” 

Currently, DTTP users do not seem to record scenarios when trainees fail assessments - instead, they extend their courses for another term. Register also encourages this behaviour. Because of this, we could be missing out on valuable data. We need to rethink QTS recommendation as the logical next step after TRN submission and instead look at capturing the “assessment outcome”. 
