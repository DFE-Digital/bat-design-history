---
title: Status logic before UCAS transition
description: How vacancies, applications and whether a course is on Find is derived from a set of training locations.
date: 2019-02-15
---

## Training location: Is it on Find?

UCAS Status | UCAS Publish flag | Is it on Find?
----------- |------------------ | --------------
N (new), S (suspended), D (discontinued) | No effect | No
R (running) | No | No
R (running) | Yes | Yes

## Training location: Applications open

Is it on Find? | Application open date | Vacancies | Applications
-------------- | --------------------- | --------- | ------------
Yes | Today or earlier | F (full time), P (part time), B (both) | Open
No | No effect | No effect | Closed
Yes | In the future | No effect | Opens on [date] (Closed)
Yes | Today or earlier | N (none) | Closed (no vacancies)

## Course: Is it on Find?

Training location on find | Course on find
------------------------- | --------------
All no | No
Any yes | Yes

## Course: Applications open

Training location accepts applications | Course accepts applications
-------------------------------------- | ---------------------------
All no | No
Any yes | Yes

## Course: Vacancy status

Training location vacancy status | Course vacancy status
-------------------------------- | ---------------------
Any has F (full time), P (part time), B (both) | Yes
All have N (no vacancies) | No
