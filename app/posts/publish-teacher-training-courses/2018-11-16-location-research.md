---
title: Location labels and survey research
description: First attempts to understand location with a classification exercise.
tags:
---

Following research on maps with candidates and [discussions with providers about location](/publish-teacher-training-courses/the-location-problem), we sought to focus further research by providing prototypes.

[We showed providers maps](/find-teacher-training/map-4) for the first time, and then quizzed them about their locations using the Publish prototype.

## Design changes

These changes weren’t intended as final designs to be shipped in the product, but more a basis for focused conversation around specific aspects of location.

* Add a locations section to the organisation page (Step 2)
* List organisations that candidates can choose on a locations page
* Create a page for each location
* For each location ask questions about time spent there, what the location is for and the nature of the location
* For each location try to add a label

## Who did we test with?

* [West London Teaching School Alliance](https://lookback.io/watch/4tQhyScCJf2e3WcNL)
* [UCL](https://lookback.io/watch/j7XGfjfS8Bh4WrSzz)
* [Hertfordshire University](https://lookback.io/watch/H7rjFgyTKznrKuTAo)
* [United Teaching](https://lookback.io/watch/vwNSsgXhna4JBDmyZ)

## User research insights

### Maps

Provider Codes: All preferred provider name than the code in the map. Hertfordshire knew what the code meant, but didn't think it would make sense to candidates and UCL didn't even know what they were.

Mini map: Users found there wasn't a very clear "call to action" to expand the mini map. It didn't indicate that it will show any more information than you already see, which is why many users did not click on these.

Large map: There were lots of insights around the map, and how we could represent the data. From the SD places (Alex at WLTSA) there was good feedback on the locations, zoom level, transport links, white labels and usability in general.

Hertfordshire, UCL and United all wanted their partner schools to be shown on the map, in some capacity, to be able to show the breadth of their course. As it stands, the map only shows one location whereas sometimes, there are hundreds. UCL and Hertfordshire are massive, so they both wanted to show an area, rather than the specific schools themselves. This would be a better representation of their data but a caveat would have to be shown saying 'this is generally the area where our schools are placed'. In United's case, they wanted to show the specific schools, as they have far fewer. In terms of their hubs, they wanted to outline the hub regions and which schools are related to which hub - either on the map or as a list. In all cases, showing these locations were important in both the large map and the course details maps. They would have to be course-generic as it would be far too much upkeep to assign the schools by course, mainly because sometimes they don't actually know this information until much later.

With United, it was stated that the course details map could look confusing to candidates as it shows areas all over the UK, not just in the place you searched. She expressed that it would be better if it narrowed down the pins by region when you search. So, if you searched in London, it would only come up with the pins closest to London - London, Essex, Surrey.

Alex stated that the course map should be at the top of the course listings page as people won't scroll down that far and look at it. She said it's one of the most important things, knowing where you could go, so you need it at the top.

It was stated a few times that it was important to show the breadth of the landscape of schools. It was also said that providing the exact schools may be helpful as 'we work with some very high profile schools' - obviously this would have to be caveated again saying that one school is not guaranteed.

In a few cases, Hert and United, they both said they would be happy to list the lead school in the area. This may enrich the data with specific schools, however may be confusing to candidates as to why only a select number of schools are listed - something to think about.

Lastly, in the TSA case, they were keen to add in the locations that were also relevant for the SD course. For example, adding in the provider location (where they go for some training) and the university who accredits the course (as they go there for academic training). They would like these as pins and as other colours on the map with an explanation as to what they mean. - this would mean they need a section in 'manage' to add, remove and tag these locations.

### Course listings and maps

Training locations: You do not need training location codes when applying to UCAS. You need the name of the provider and the name of the school - this makes more sense to candidates rather than a randomly assigned number/letter. In addition, the training locations seem to be in no particular order - could they be alphabetical?

Commute: There were a few mentions about it being important to write about commute times within the course details page, clearly setting out expectations from candidates from the beginning. It also links with the 'perfect' end goal to have real-time commute information and travel times embedded into the map.

Course listings - salary, name: From Alex, it came out that the mismatch of language between Salaried and 'scholarships, bursaries, student finance' is misleading. It is her opinion that it should just be 'salaried' and 'non salaried' to keep things simpler and be able to compare them more. In addition, the name of the accrediting provider should not be provider as it confuses the actual provider with them. It should be 'accredited by'. The name of the schools should also be surfaced, rather than just the address of the nearest one. This would make it easier to see where that course is offered, with more options within the course details itself. Lastly, something we have already now fixed, there should be the course code in the listings to differentiate between them.

### Manage courses prototype

Changing location: Several providers wanted to change the name of their location or change the actual location itself. They would expect to be able to do this within the 'locations' part of our manage prototype. They all stated they wanted the location of the specific 'education' faculty and to add in the specific postcodes to make the location geo-coded better. They didn't seem to know how to do this in WebLink.

URN: 2/3 people knew what this meant. None of them knew the URN of their schools, with Alex (WLTSA) stating it would be difficult and time consuming to find all that information for every single school. Universities do not have a URN, so this wouldn't be able to be added - Uni of Hert. This URN number needs to be explained as to why we need it: it provides much more data about the specific school e.g. location, ofsted, type of school etc.

Email and website field: This seemed to be liked, as users could put in the website address for the specific school, if they had it, or it was optional. However, for large amounts of data this would be in-feasible as it would take so much time to complete this. There were also concerns about the email, with Alex wanting to put in a few email addresses (for primary and secondary). Perhaps making it clearer that the email address is specific to the course would be a better idea.

Inputting form: The University Site label was not correct - they don't spend most of their time there, only some. It wasn't wholly clear you could check more than one box - or how this information would look to candidates. There's some discrepancies of terminology, UCL don't use 'professional training', perhaps the labels need to be more generic - e.g. Uni campus, host school, placement school. The 'area' feature was understood well by Hertfordshire Uni, but not used by any other organisation. He liked that he could put in a rough radius and the number of schools, signifying the extent of their organisation. Two people saw the label and that once an option was picked, it was highlighted in the table. They wanted to all change the location details currently in within this tool. They wanted to change the address and the name of it - not 'main site'! Alex also very specifically said they're NOT places you apply, they are schools you can choose when applying - this breaks our method of calling them 'application locations'.

[Full write up and affinity mapping](https://dfedigital.atlassian.net/wiki/spaces/BaT/pages/737280130/5th+round+provider+insights)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Organisation",
      img: { src: "01-organisation.png" }
    },
    {
      text: "Locations",
      img: { src: "02-locations.png" }
    },
    {
      text: "Location survey",
      img: { src: "03-location-survey.png" }
    }
  ]
}) }}
