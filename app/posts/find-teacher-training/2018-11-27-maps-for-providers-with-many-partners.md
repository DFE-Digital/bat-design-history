---
title: Maps for providers with many partner schools
description: What does good look like for providers with many partner schools?
---
From research with providers we found that for courses offered by large SCITTs and universities we didn’t have enough data to accurately tell candidates the full story around location. This also applies to growing school direct alliances (for example [Trinity TSA](https://find-postgraduate-teacher-training.education.gov.uk/course/1YF/2QL9)).

When we tested with these providers they compared their courses with those of a School Direct. A School Direct course usually has many training locations, leading to many points on a map for each course. These extra locations put School Direct courses closer to more users. In comparison, a university usually has one location – it's main campus, and a large SCITT will use a set of locations that represent many more schools.

> “We want people to see a wide range of partner schools that we work with, for this subject” ([video](https://lookback.io/watch/j7XGfjfS8Bh4WrSzz?t=19m18s))

(This work was parked to focus on UCAS transition. When providers can manage their locations in one place, it’ll be easier to fix and improve those locations. Map ideas haven’t been tested with users.)

## Partner schools

Partner schools are the schools a training provider works with, they are schools a candidate might be based in for 60 days or more.

We [requested a list of partner schools](https://trello.com/c/HYCOt7Od/733-collect-a-couple-of-sets-of-school-locations-from-large-scitts-and-universities) from providers, so we’d have data to [explore what good looks like](https://trello.com/c/YqMogW7u/735-design-what-good-looks-like-for-uni-and-national-scitt-locations).

Providers will need an easy way to manage their list of partner schools, numbers range from 20 to 1,000+.

There are constraints around how we show partner schools:

*   not all schools for next year are known
*   this year’s schools give the best illustration but must be caveated
*   these schools can’t be broken down by subject, only by phase
*   providers don’t want to give the impression that people can apply to specific schools

> “We have to be careful that someone doesn’t apply to us because they want to work at a specific school … they can only apply to \[us\]” ([video](https://lookback.io/watch/j7XGfjfS8Bh4WrSzz?t=48m2.26s))

Breaking down schools by subject, if possible, can be misleading. For one provider they had 2 biology locations which just happened to be in Walthamstow, someone seeing that and looking from elsewhere might think that’s the only place they could be, which isn’t right.

> “Just doing it by subject is misleading” ([video](https://lookback.io/watch/j7XGfjfS8Bh4WrSzz?t=1h17m12.81s))

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Sketch of UCL partner schools",
      img: { src: "sketch-of-ucl-partner-schools.jpg" },
      caption: '
A sketch illustrating how a map of UCL’s 500 partner schools might be displayed. Not based on real data.

The distribution of schools in the area isn’t clear.

Because we don’t include points for schools, show a total in the area.

The bounded region can be interpreted optimistically, hypothetically: ‘I’m within that area, so I can be placed in a school close to me’. It can also be viewed pessimistically, ‘I could be put in a school the other side of London, that would be a horrible commute.’

We need to iterate to alleviate the pessimistic view. One example of this might be messaging saying ‘there are 20 partner schools within 5 miles of you’, or by re-iterating the provider’s policy on placement schools – eg taking location into account and doing their best to provide a manageable commute.'
    },
    { text: "Sketch of smaller university",
      img: { src: "sketch-of-smaller-university.jpg" },
      caption: 'An alternative fake university with only 20 partner schools.'
    },
    { text: "Educate Group schools and hubs",
      img: { src: "educate-schools-and-hubs.png" },
      caption: '
A simple map showing each school that Educate Group partners with (the blue dots). The black stars are the training locations they list on UCAS. The black stars show the data we have on Find which we’re using for location search. The blue dots illustrate all the actual locations. The difference between them shows how inaccuate our location search is for this type of provider.

There are almost 200 schools.

[Google Map](https://www.google.com/maps/d/u/1/edit?mid=1bkUM7X4NML3-fkRSVtRbBe-uo9c1Vaoe&ll=52.768288612172654%2C-1.9754494999999679&z=7)' },
    { text: "Outline schools",
      img: { src: "outline-schools.png" },
      caption: 'A rough hand drawn outline of Educate Group’s partner schools to indicate where they work.'
    },
    { text: "Outline schools and ignore outliers",
      img: { src: "outline-schools-and-ignore-outliers.png" },
      caption: '
Another outline but this one ignores some of the outlying schools.

[Google Map](https://www.google.com/maps/d/u/1/edit?mid=1qGoXy_eDE6amZYWkF_JwgsBcB-XR4uxm&ll=53.63114770019044%2C-1.3202538000000459&z=7)'},
    { text: "Outline regions around hubs",
      img: { src: "outline-regions-around-hubs.png" },
      caption: 'By taking into account the hubs that Educate uses we can split one large region into three smaller ones.' },
    { text: "Outline regions but hide schools",
      img: { src: "outline-regions-but-hide-schools.png" },
      caption: 'Hide individual schools but show hubs and the regions associated with them.' },
    { text: "United schools and hubs",
      img: { src: "united-schools-and-hubs.png" },
      caption: '
The data for United National SCITT is very different to Educate Group’s. They have many more hubs over a wider area – 23 hubs in total. But they also have fewer schools, about 70.

[Google Map](https://www.google.com/maps/d/u/1/edit?mid=1Mwtq1HM9bDMfgQ9UvlDNzc-9sUilhjFs&ll=52.66492574421534%2C-0.9992265000000771&z=7)'},
    { text: "United regions and hubs",
      img: { src: "united-regions-and-hubs.png" },
      caption: '
By drawing regions around schools and their nearest hub, to match the pattern used for Educate, it’s clear that this technique breaks down. Perhaps for United it’d be best to show each school – [they list schools on their own website](https://www.unitedteaching.org.uk/about-us/our-schools).

In Publish there might need to be a ‘Show/hide partner schools’ option. An obfuscate option.'
    }
  ]
}) }}
