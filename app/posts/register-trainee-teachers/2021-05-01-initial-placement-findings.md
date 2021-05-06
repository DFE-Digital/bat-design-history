---
title: Initial placements findings
description: Initial findings on placements show they are more complex than we initially thought.

date: 2021-05-01
---
{% from "screenshots/macro.njk" import appScreenshots with context %}
{% from "figure/macro.njk" import appFigure with context %}

We’ve been continuing our work around [collecting placement details](/register-trainee-teachers/collecting-placement-details/) through exploratory research and usability testing on the prototype.

Dates of research:
 
* round 5: 4 -12 March 2021, 7 participants, all SCITT
* round 6: 29 March - 12 April 2021, 9 participants, 4 HEI, 5 SCITT, (8 EY Employment, 3 EY Graduate, 2 EY UG, 1SD Salaried, 2 SD tuition fee)


## What we learned

All the users we tested with understood what they were being asked to do in regards to providing placement details.

Most of the people we spoke to could provide information for the first placement when registering a trainee in September, but for some this meant changing their current work practices. 

> “We’d struggle with this, wouldn’t we? We’d have to go and get this information from our placement team.” 
> Round 6 P7 (Scitt)

> “If I’m doing it in August I’ll do “No, I’m doing it later”. If there are any changes I’d have to go back in and amend [them]. If I was keying in September I would put the first. I wouldn’t put the second as there might be changes in the Autumn. [I prefer] keying in the correct information rather than going in and changing it.” 
> Round 5 P3 (HEI, EY employment)

The rationale behind asking for placements is opaque and can lead to additional frustrations.

> “Compliance states that we need two, but why does the DfE need to know where the person is placed? They just need to know that they are placed?” 
> Round 6 P6 (SCITT)

We found that further placements are often unknown at the point of requesting a TRN.

All users felt confident that Register will enable them to change or finalise the placement info at a later point.

> “I’ve always keyed in the number of days. I’ve never not. We have our year planned out so to me it doesn't make any difference as long as we can change. I’ve had to change things due to the pandemic.” 
> Round 5 P3 (SCITT)

> “We had a couple of times when a trainee changed placements, I wonder how I would record that? I think I would just add another placement I’m guessing and change the previous placement to just 2 weeks?”
> Round 5 P6 (SCITT)

We learned that providers’ approach to placements was more varied than we anticipated. We assumed that a trainee would have two linear placements and that terminology would be consistent across the ITT market. Neither turned out to be true and our initial designs did not fit with user needs.

### Placement terminology

Terminology varies by provider with numerous terms being used to describe similar things.

There is the concept of a main location:

* main school or main setting 
* host school 
* training location

These locations are typically schools where the SCITT administration is based.

For provider-led trainees, this could also be their ‘training location’ - where the academic training takes place. In this case providers do not count time spent at this location towards a placement duration. 

However on early years routes the ‘main setting’ is where a trainee might have one or even two official placements, it could also be their employer. 	

> “People would be employed at a nursery or a young child setting and the program has three placements - two of them would be at their own setting, one at a different setting. Those would be spaced out throughout the year.” 
> R6 P1

Early years trainees and candidates do not go to schools. They go to private nursery businesses. So early years providers tend to refer to the placement locations and early years salaried course employers as ‘settings’. 

We identified commonly used terms by providers when referring to placements:

* First placement
* Placement A
* Second placement
* Placement B
* Contrast placement
* Temporary placement
* Complementary placement
* Phase B

Placements are mandatory and provide trainees with  versatile teaching experience. ‘Contrast’ and ‘complementary’ placements reflect that notion and offer the trainee exposure to a different context than their main location, or previous placements. For example, an inner city placement might be contrasted with a rural placement. A placement in an all-girls school might be followed by a placement in an all-boys setting.

### Placement patterns

There are different requirements for different ITT programmes and providers have different approaches to meeting these requirements. As a result, placement patterns varied across the participants.

#### Provider-led and school direct routes

Most placements were structured in blocks of several weeks, with some trainees returning to their training location in between placements. 

A-B
A-B-A
T-A-B
T-A-T-B-T

A: placement location  
B: another placement location
T: training location

> “Their first placement would be September ‘til Christmas, and then their second would start in January.” 
> Round 5 P6 (SCITT)  

#### Early years (EY) graduate and employment based routes

SCITTs offering the EY route too tend to place trainees at a location for several weeks at a time, whereas HEIs might spread placements across several months with just one day a week spent at a placement location. Scheduling trainee placements on the salaried route adds complexity because the employer’s needs and priorities also have to be considered.

> “We don’t do block-placements, we do running placements. [...] The duration can vary: [...] they have to complete 120 days overall, but within that it’s about ensuring they had an adequate experience.” 
> R6 P9 (HEI)

>“Placements are not done in blocks, 2 days this week 5 days over next weeks. Supposed to do 30 days so you could say 6 weeks. [...]
>The uni can reserve a few uni days to do placements and then they may have 6 other days one day here and there done when they can. We have to fit in with their employers. No tuition fees for the student and the setting for the employer have Fridays off for placements.”
> R6 P2 (HEI)

Potential placement patterns for EY are: 

A-B
A-B-A
A-B-C
T-A-B
T-A-T-B-T
T-A-T-A-T-A-T-B-T-B-T-B

A: placement location  
B: another placement location
C: a third placement location
T: training location/university

## Feedback on our designs

### Placement details

{{ appFigure({
  image: {
    file: "add-a-placement.png",
    alt: "Adding a the URN, start month and duration of a placement"
  }
}) }}

Participants accepted the need to collect URNs.

A few participants had the URNs readily available, for others finding the URN was quite fiddly and slowed them down, as it’s not part of their current work practice.

There was also some mistrust of URNs because they can change seldomly. ALso some users felt uncomfortable remembering a random 7 digit number and would more commonly prefer to use the school name and address/postcode to find it. If there were multiple schools in one location with a similar name, or to be especially cautious, they would double check with a URN.

Selecting the start month of the placement worked well.

The process of calculating placement duration varied amongst the participants. Many providers will guess. All participants manually counted using a calendar. 

>“Oh this fills me with absolute dread. Everybody goes to every different school. A host school then a different school then a different ... I'd have to do it three times. It's just more work.” 
> Round 5 P2 (SCITT)

### Confirm placement details

{{ appFigure({
  image: {
    file: "confirm-placements.png",
    alt: "Confirm the placement details you have added"
  }
}) }}

Many participants commented that they would like to see the name of the school to help confirm the URN is the correct one.

>“URNs are unreliable:
>Because a school has gone from school to trust etc. these numbers might change.” 
>Round 5 P4 (SCITT)

The current design displays placements in order of them being added to Register. If a trainee changed locations midway through their placement, the update will currently not appear in chronological order.

>“There are instances where the trainee doesn't suit the school. Looking at this I don't know how [to reflect that in the record] unless there is another option to add another school there could be two or three schools needed in the for instance.”  
>Round 5 P5 (SCITT)

## Next steps

### Iterate our designs

Requiring the user to input a specific start date and duration in weeks doesn’t reflect how placements really happen and therefore not meet some of our user’s needs. 

Additionally, due to the one-day-a-week pattern we observed with some EY providers, it would be more appropriate to ask them about duration in days, not weeks.

We need to decide if we want to prioritise details of each location or details around the time spent at each placement location. Collecting a combination of the two is an overly complex task.

### Consult data consumers
 
We need to better understand why our data consumers want to know this data/what exactly they are tracking. If they are interested in understanding how much time the trainees spend physically teaching in schools (as opposed to being trained) - our results might be skewed. 

## Design todos

* include a search that allows for school name, postcode or URN
* if we decide to pursue collect dates, we will also need to collect the year the placement started
* give our users' confidence by adding a location name, URN and postcode on the confirmation page
* there is no list of locations for EY placements in DTTP. Instead we need to collect the setting’s names (nursery, childminder, children's centre), postcode and potentially URNs as free text fields

## Concerns with collecting placement details

We have concerns about the implications of making the collection of placement details a required task.
 
Considering the frequency of location change for some trainees, our hunch is that this will:

* create a significant amount of additional work, becoming a burden for our users
* increase errors as users might forget about the updating the system with placement changes

By acknowledging the scale of the burden we are knowingly compromising our users’ experience.

How might we make the process of adding placement data fit with the reality of how placements happen to reduce effort and minimise potential for error?

Asking for the placement data at trainee record setup allows for flexibility and for users to create a workflow that suits them. This creates additional complexity as not all placements are known at the time of record setup so in this scenario our users need to understand that they can do some of a task now, but will need to finish it off later.

In turn collecting placement details at time of QTS recommendation removes complexity when creating records yet would mean users spend significantly more time completing the task of recommending for qualifications.

By exploring different ways of prompting outstanding actions we could change provider’s behaviour to record data changes as soon as they occur, minimising potential for error and reducing time needed to recommend a trainee for QTS.
