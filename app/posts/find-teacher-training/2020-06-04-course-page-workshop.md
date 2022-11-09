---
title: Course page workshop
description: Identifying user and stakeholder needs and opportunities for course page improvements
date: 2020-06-04
related:
  items:
    - text: Workshop agenda and raw group notes
      href: https://docs.google.com/document/d/1ZjgnXosijDO8EJ8MCoGN-6IaJXNu0_A225oY1QqaCmo/edit?usp=sharing
    - text: Miro board
      href: https://miro.com/welcomeonboard/yADFg4XSksX2gQpJCVr1VMl8Q7hYYV0TaDUKObyCYuZp2Mam2b1K65efFUBhEY3b
---

Members of the Find postgraduate teacher training (Find) team participated in a workshop to collect ideas for course page improvements that address the needs of candidates, providers and the Department for Education (DfE).

## Who attended?

- 2 x Interaction designers
- Content designer
- User researcher
- Product owner
- Delivery mananger
- Business analyst
- Front end developer

## User needs

### Collecting and displaying data

**As a candidate who works part-time and wants to study part-time**
I need to know how many days per year I will spend doing my practical placement
So that I know if I can do it or not (considering my part-time job and the annual leave I have).

**As a candidate who wants to find a course to become a teacher**
I need to know exactly what will happen during the interview
So that I can prepare myself.

**As a candidate**
I need a clear, at a glance understanding of the structure of the course.

**As a candidate wanting to apply for a course**
I need to know if my qualifications are good enough
So that I don’t waste a choice on a course I won’t be successful in.

> Use structured data to capture provider’s requirements for a course, for example:
>
> * You only need legal minimum
> * You must have X degree grade

**As a potential candidate**
I need to know the requirements a provider has before I apply
So that I can make an informed decision about whether to apply.

**As a provider**
I need to have standardised requirements fields
So that we reduce duplication (benefits users as more consistent and easy to compare requirements).

**As a candidate evaluating a course**
I need to see how far the training locations are from me
So that I can estimate my commute time.

> Pass the user’s searched for location through to the maps on the course page, so they can see the training locations relative to where they are/or searched.
>
> Move the maps up.
>
> Reconsider how we communicate location to users, perhaps with a new sections “Where you’ll spend your time”.
>
> Use structured data to collect time spent in different locations, for example:
>
> * 1 day per week at Uni
> * 5 weeks at Uni
> * 2 weeks at first placement school
> * 6 weeks in each placement school

**As a candidate who wants to find a course to become a teacher**
I need to have specific information about the course
So that I can understand if it’s the right course for me.

> Add specific information about:
>
> * Where - Location - Where I’m going to be based and for how long
> * When - Time - for how many days
> * What - To do what - what I’m going to do and why?
> * Who - Tutors / mentors / support available

**As a candidate**
I need to know if there are course vacancies or low on vacancies
So that I can invest my time appropriately.

> Add a visual prompt on the course page to signify a course is nearly full.

**As a provider**
I want to be able to tell candidates vacancies are nearly full
So that they will be prompted to apply.

> Add extra fields to denote course availability and visual cues for users on Find.

### Improving content

**As a candidate who wants to find a course to become a teacher**
I need to understand what the course offers me
So that I can understand if it’s the right course for me.

> Examples of displaying key information.
> [UCL example](https://www.ucl.ac.uk/ioe/courses/teacher-training/mathematics-pgce) [University of Oxford example](http://www.education.ox.ac.uk/programmes/pgce/)

**As a candidate new to teacher training**
I need to understand the terms providers use
So that I can correctly interpret the course page.

> Add validations to ask users to certain explain abbreviations.
>
> Ban other abbreviations.
>
> Add validations or warnings to commonly used terms or phrases that candidates don’t understand.

**As a candidate**
I need to know what all these terms mean in plain English.

**As an international candidate**
I need to understand the information on the course page
So that I know whether I can apply.

**As a provider**
I need an alert system in Publish to know when I’ve done a content no-no, for example, a big red flag when I haven’t inserted paragraph breaks, or when a sentence is too long, or even when I use jargon - this will show up when I’m adding content.

**As a provider**
I need to know that it’s not ok to paste generic content across numerous course pages, for example, the same text for my maths, english, foreign languages and chemistry courses - perhaps there could be a way of detecting identical content in Publish, sending up a red flag to alert me to this.

**As a provider**
I need examples of really good content (relevant to my courses)
So that I have something to model my own pages on.

**As a provider**
I need evidence that good content leads to more applications, with quotes and feedback from candidates supporting this, to encourage me to pay more attention to my content.

**As a provider**
I need a way to format and check content I write so that I can improve it.

**As a provider**
I want to understand how much detail to provide
So that content is clear and concise.

> Are we making candidates read too much? Consider setting limits on word count.

**As a provider**
I need to enter my course details easily without worrying too much about formatting
So that my courses display correctly to candidates
And so that candidates can read them easily.

> Avoid [common markdown bugs](https://github.com/DFE-Digital/manage-courses-ui/issues/188).
>
> Convert all list type markers to markdown lists (-, *, •).
>
> Fix links with spaces between [ ] and ( ).
>
> [Broken list example](https://www.find-postgraduate-teacher-training.service.gov.uk/course/E28/2M8K#section-entry)

**As a provider giving a detailed course description**
I need to break up the description into sections
So that the description is well structured.

> Allow providers to use headings in the About this course section.
>
> [Example course](https://www.find-postgraduate-teacher-training.service.gov.uk/course/1EL/2VP3)

**As a provider**
I need provocation to change ‘bad content’
So that I don’t just leave it how it is forever.

> Analyse content and incentivise (for example, nudges/banners based on what they have/haven’t completed).

**As a content designer**
I’d like to see what other organisations have done to improve the quality of user-generated content, including ones outside government eg what systems do Right Move, Airbnb, etc have in place, if any.

### Miscellaneous

**As a candidate who wants to become a teacher and has not done any previous research**
I need to know the different routes and qualifications to become a teacher
So that I can find the right course for me.

> Add more information about the different routes and teaching qualifications at the beginning of the journey in Find, after the search and before choosing the subject.

**As a candidate**
I need to know what a SCITT is, and what School Direct means, and what these partnership things are, and what an accredited body is, and why so many providers have funny names like ‘Achieve with TLA’ and ‘Academies Enterprise Trust’ and whether it’s better to train with one of these or with a school or a university.

**As a candidate**
I need some immediate way of knowing how good a course or provider is - a ratings system maybe, akin to school and university league tables?

**As the Find team**
We need to consolidate survey data, user support feedback, and existing user research
So that we understand more about the users experience on the course page.

**As the Find team**
I need to assure course pages are indexing well and follow best SEO practices
So that we increase candidates chance of finding them.
