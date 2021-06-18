---
title: Learning about what data our users need
description: 
date: 2021-06-18
---


{% from "screenshots/macro.njk" import appScreenshots with context %}

Users need to see data about the applications they receive. 

This data helps them make decisions and report to other people, for example when a course is close to being full.

## Data provided by UCAS

Providers can see several reports in UCAS Weblink, including:

- interview decisions
- conditional and unconditional offers
- declined applications
- withdrawn applications
- cancelled applications
- applicant (candidate) data

The reports include data for the current and previous years. The detailed data is shown in tables rather than as a summary, and it can be downloaded.

UCAS also publishes [statistical releases](https://www.ucas.com/data-and-analysis/ucas-teacher-training-statistical-releases). These are publicly available but do not give data for individual providers.

## What we did and why

We were considering various ways of providing data in our service, including:

- displaying counts on the applications list
- sending a regular email to users
- providing data for download only 
- adding reports to the ‘export data’ section
- creating a separate section for reports

From previous research we knew that providers track how many applications are at each stage of the process. They cut this data by date and compare it to previous years.

Most of our research had been with school-centred initial teacher training (SCITT) and school direct (SD) providers.

We decided to carry out more research to help us understand:

- what data providers need and what they do with it
- what methods of presenting data would be most useful to providers
- how providers want to manipulate data
- whether higher education institutions have different needs

We created a spreadsheet containing data that we thought may be useful to providers. 

This included the average number of days to reach each status, as well as the number of applications by:

- status
- course
- training location
- candidate’s nationality
- candidate’s country of residence 

We showed this spreadsheet to research participants rather than incorporating it into the service prototype. This allowed us to focus the conversation on the data needs rather than possible designs.

## What we found

We divided the needs we discovered into five categories:

- total numbers of applications
- application processing
- capacity management
- diversity
- marketing

Participants talked about using this data in various ways, including:

- looking at it on their screen
- emailing it to a colleague
- printing it, for example to take to a meeting
- downloading it as a spreadsheet to do further analysis

There is more information on these findings in:

- [the research playback](https://docs.google.com/presentation/d/1SgcynK_0RYSv1S_M5iPz96jxuqDy_Qo7K6WR1emEDOk/edit#slide=id.gd73ed30205_0_123) 
- [a spreadsheet summarising the needs we found](https://docs.google.com/spreadsheets/d/1PUCvgXHD81ArZg1TTkxV50gh2nCdBw9C1MIXT1qBxFM/edit#gid=0)

## The next round of research

We decided to focus on providing data within a new section of the service. 

We used the needs we’d identified to create a series of reports. Our findings also helped us decide:

- which reports to create
- what configuration options we should offer

{{ appScreenshots({
  items: [{
    text: "Data shown to research participants",
    img: {
      src: "spreadsheet-example.png"
    }
  }]
}) }}
