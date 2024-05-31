---
title: How data flows through the service line
description: We mapped what data is created and consumed and how it flows through the ‘Becoming a teacher’ service line
date: 2024-05-28
tags:
  - data
---

We mapped what data is created and consumed and how it flows through the ‘Becoming a teacher’ service line.

[![How data flows through the ‘Becoming a teacher’ service line](itt-data-flow-diagram.png "How data flows through the ‘Becoming a teacher’ service line (select image to view larger version)")](itt-data-flow-diagram.png)

[Download the diagram as a PDF (644KB)](itt-data-flow-diagram.pdf)

Becoming a teacher has several services that create, share and consume data:

- Publish teacher training courses (Publish)
- Find postgraduate teacher training (Find)
- Apply for teacher training (Apply)
- Manage teacher training applications (Manage)
- Register trainee teachers (Register)
- Claim funding for mentor training (Claims)
- Manage school placements (Placements)

The service line also uses or receives data from third parties:

- Database of Qualified Teachers (DQT)
- Get information about schools (GIAS)
- Higher Education Statistics Agency (HESA)

Furthermore, student record systems (SRS) interact with Manage and Register through APIs and HESA.

Student record systems include:

- Ellucian Banner
- Oracle
- Thesis Cloud
- Tribal SITS

## Data entities

The service line includes several distinct data entities:

- application
- course
- placement
- provider
- school
- teacher
- trainee

In the future, there will also be a ‘mentor’ entity.

### Data entity ownership

Different services are responsible for each data entity. Typically, this is where the data enters the service line. For example, Publish owns course data.

| Data entity | Service |
| --- | --- |
| application | Apply for teacher training |
| course | Publish teacher training courses |
| placement | Manage school placements |
| provider | Publish teacher training courses |
| school | Get information about schools |
| teacher | Database of Qualified Teachers |
| trainee | Register teacher trainees |
| mentor | Manage school placements and Claim funding for mentor training |

DQT does not only hold teacher data. It also holds data on trainees and other people, such as widows and widowers, who collect their partner’s pension.

Where one service uses the entity authored in another, the data is copied rather than accessed via an API. If data is changed in a downstream service, it is not passed back to the owning service.

### Data relationships

Each service independently creates relationships between different entities. For example, Publish and Manage separately create relationships between accredited providers and lead partners.

| Data relationship | Service |
| --- | --- |
| Accredited provider to lead partner | Publish teacher training courses and Manage teacher training applications |
| Course to accredited provider | Publish teacher training courses |
| Course to school | Publish teacher training courses |
| ITT provider to school | Manage school placements |

Some relationships are defined within data entities, for example:

| Data relationship | Service |
| --- | --- |
| Candidate to application | Apply for teacher training |
| Course to accredited provider | Publish teacher training courses |
| Course to school | Publish teacher training courses |

## Application programming interfaces (APIs)

| API | Read/write | Public/private | Documentation |
| --- | --- | --- | --- |
| Apply for teacher training| Read and write | Private | [Apply API docs](https://www.apply-for-teacher-training.service.gov.uk/api-docs) |
| Publish teacher training courses | Read only | Public | [Publish API docs](https://api.publish-teacher-training-courses.service.gov.uk/docs/) |

At the time of writing, [Register has an API in development](https://sandbox.register-trainee-teachers.service.gov.uk/api-docs).
