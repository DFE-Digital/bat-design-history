---
title: Add training location wizard
description: Add a training location in Publish teacher training courses rather than UCAS
date: 2019-01-31
screenshots:
  items:
    - Training locations
    - What type of training location?
    - Pick location
    - Is this name and address correct?
    - Something needs changing
    - Check your answers
---

The first design for adding training locations to an organisation. It follows the same patterns as the [new course wizard](/publish-teacher-training-courses/new-course-iteration-14-jan) – one thing per page, check your answers at the end, back-and-forth editing once the wizard is finished.

We’ve only designed the ‘school, college or university’ flow so far.

## Using a schools autocomplete

By using a [schools autocomplete](/publish-teacher-training-courses/schools-autocomplete) this design tries to:

- minimise what information a provider needs to enter
- improve the accuracy and quality of data we have
- create the opportunity for future features that can use that data (eg Ofsted ratings, precise map locations, school type and size)

This prototype does a URN lookup from [a flat-file repository](https://github.com/fofr/schools-json), as a sort of MVP schools API – [example response](https://github.com/fofr/schools-json/blob/master/schools/100005.json).

## User research

- [Canterbury Christ Church University](https://lookback.io/watch/oDwREDkfjwjW5SpCi)
- [East of England Teacher Training](https://lookback.io/watch/vw6eDzqmL4s24rR2Y) (a SCITT)
- [Doncaster ITT Partnership](https://lookback.io/watch/qD9xw5pLPFuYHvevH)
- [Gateway Alliance](https://lookback.io/watch/XkCjbzaEZNPrEnNcp)
- [Claremont Primary School](https://lookback.io/watch/3FQ5u2nh8JRFJLtGF)
- [University of Huddersfield](https://lookback.io/watch/pWYBvEpr8YfeF7pAx)
- [The Royal Borough Teaching School Alliance](https://lookback.io/watch/iviAKDMGPxMK68voe)

The ‘pick a school’ workflow works well if the provider can find the school they’re after. If the [quirks around the autocomplete](/publish-teacher-training-courses/schools-autocomplete#user-research) can be fixed then this should work well.

An FE provider got confused with the label ‘School or university’, they wanted to add a college. We renamed type to include ‘college’.

One user wanted to enter their school manually.

No one has needed to edit the details pulled in from Edubase.

On the summary screens we started with ‘Code’, which a user misunderstood. We renamed it to ‘UCAS campus code’ and haven’t seen any further issues. [One provider wanted to change the code](https://lookback.io/watch/vw6eDzqmL4s24rR2Y?t=51m43s) to something which aligns with the schools, eg St Mary’s could be M, and St Peter’s could be P.

[Research playback presentation](https://docs.google.com/presentation/d/17wz2ZWJCNbbqsaywigok-fHv07IUjjiLRSaffCuim64/edit)

*[ITT]: Initial teacher training
*[SCITT]: School centred initial teacher training
*[SCITTs]: School centred initial teacher training
*[UCAS]: Universities and colleges admissions service
*[URN]: Unique reference number
*[MVP]: Minimum viable product
*[API]: Application programming interface
