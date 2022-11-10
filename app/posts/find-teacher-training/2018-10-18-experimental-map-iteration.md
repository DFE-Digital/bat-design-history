---
title: Results on a map – Full screen iteration
description: Second pass at showing courses on a full screen map
date: 2018-10-18
screenshots:
  items:
    - Training locations and providers on map
    - Training location open on map
    - Provider open on map
    - Another provider open on map
    - Provider with one course open on map
---

An iteration on the [first pass](/find-teacher-training/experimental-map/) of putting search results on a full-width map. This design adds:

- training locations with a black dot
- different map windows for training locations (the prototype lacks the name of a place so "School or campus" is used as a placeholder)
- radius circles to indicate distance

## User research

We tested this design alongside the [original map](/find-teacher-training/map-original) with [10 users from 9 October to 11 October 2018](https://lookback.io/dfe-digital/r4-live-routes-in).

[Initial findings are on confluence](https://dfedigital.atlassian.net/wiki/spaces/BaT/pages/615219275/First+round+on+location).

- [Participant 1](https://lookback.io/watch/AprAGdLxxz9FdxGLJ)
- [Participant 2](https://lookback.io/watch/u9cZaEQQRZGDofaKP)
- [Participant 3](https://lookback.io/watch/ASAKdsr783jwsPMxh) ([part 2](https://lookback.io/watch/E9934fSeb3Zu5ubP4))
- [Participant 4](https://lookback.io/watch/SQSacPWpZoagWWb7y) ([part 2](https://lookback.io/watch/Z7hgQ6xFz5fxBjw48))
- [Participant 5](https://lookback.io/watch/GiTRz4TGGFdkWrQAy)
- [Participant 6](https://lookback.io/watch/6fpoe9h3RPnvRxAti)
- [Participant 7](https://lookback.io/watch/FCQB8Q5DTjkDAD44w) ([part 2](https://lookback.io/watch/MhCQ6R6gRASHmxxuX))
- [Participant 8](https://lookback.io/watch/ZJAPjZSHPkKiDiNXk) ([part 2](https://lookback.io/watch/mgtvefiPnJvgREmih), [part 3](https://lookback.io/watch/eXcRdhFDjFx8H8rXP))
- [Participant 9](https://lookback.io/watch/aMhWcCjxknPF69zsy)
- [Participant 10](https://lookback.io/watch/JXJFEQMvzDBk8HH32)

There is a general positive response on seeing the map. We need to consider using these results as the default, if we can fix the issues found.

[“Straight away I received information that I didn’t know about, which is brilliant”](https://lookback.io/watch/GiTRz4TGGFdkWrQAy?t=32m5.36s)

### Users prefer the larger map

We thought that the radically different page showing a large map might confuse or disorientate users. We instead found that users were comfortable using the full size map.

People could see the name of streets and places they recognised immediately. People could see places they did not consider before.

On toggling the full screen mode of a smaller map when prompted: [“\[The bigger map\] makes life easier”](https://lookback.io/watch/GiTRz4TGGFdkWrQAy?t=33m26.05s)

### The black dots aren’t seen or used

We knew that we hadn’t explained the difference between the black dot (training locations) and the markers (administrative or main site addresses), and we expected users to not understand the difference, but we wanted to explore how they reacted to them.

We found that most users didn’t engage with them:

[“I just thought it was a feature of the map”](https://lookback.io/watch/6fpoe9h3RPnvRxAti?t=28m39.88s)

Users cannot deduce what a training location is, as it is based on provider parameters of a place you can apply to and go to. A key is needed. However, we need to realise that this is a temporary fix whatever text we put in there. Currently the existence of training locations is unstable and predicated on the need to be able to apply to that location. [We added a key](/find-teacher-training/map-2).

### It’s too easy to misinterpret location

The location markers strongly suggest that this is the location of training, at best that this is the main location, at worst that this is the only location. Where the location is an administrative one, we can’t be sure that any training takes place there.

[“The pins are where the courses are”](https://lookback.io/watch/6fpoe9h3RPnvRxAti?t=30m7.54s)

### The radius circles helped

Users responded well to the radius circles – they understood their meaning and it helpers them to gauge distance more easily. The label in this design wasn’t always clear – a white background was added in the [next design](/find-teacher-training/map-2).

Without the circles there’s a fair assumption that all points shown are within the radius searched ([video](https://lookback.io/watch/GiTRz4TGGFdkWrQAy?t=27m43.27s)), which [isn’t always the case](https://lookback.io/watch/GiTRz4TGGFdkWrQAy?t=30m27.11s). [Another example](https://lookback.io/watch/u9cZaEQQRZGDofaKP?t=53m34s).

Without the red indicator it’s not always clear what location was searched for. The red marker and the circles work well together.

### Distances in pop-ups

Users found the distance in the map pop-up helpful.

[“So when I look at a pin it tells me how far away the institution is as well”](https://lookback.io/watch/GiTRz4TGGFdkWrQAy?t=40m39.85s)

[“And this is 10 miles away”](https://lookback.io/watch/2y5X6M8ZqsKpthh3Q?t=1m12.15s)

### Filters

Nobody used the filters unprompted. When prompted people used it and understood the filters.

In the follow-up design these filters were collapsed (like on mobile) and the results listed down the left.

### Clustering

In the original design we tried clustering results: when zoomed out many results get grouped into one map pointer with a number. The colour of the pointer changes as the value gets larger. Users didn’t understand the [default Google Maps clustering pattern](https://developers.google.com/maps/documentation/javascript/marker-clustering).

It was quickly removed.

Example of a user struggling with clustering: [“It didn’t mean a lot to me, I saw the 3 and thought it meant within 3 miles of \[city\]… what is that, the 2 and the 3?”](https://lookback.io/watch/u9cZaEQQRZGDofaKP?t=57m9.02s).
