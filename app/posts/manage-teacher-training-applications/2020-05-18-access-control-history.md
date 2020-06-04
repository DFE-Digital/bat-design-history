---
title: Access control - feature design rationale
description: Determining the best best model for managing organisational and user access controls and permissions
date: 2020-05-18
---

{% from "figure/macro.njk" import appFigure with context %}

Teacher training providers have to partner with accredited bodies if they’re not an accredited body themselves. Accredited bodies maintain the quality of teacher training providers.

Different organisations need access to different information depending on what they’ve agreed with their partners.

How can we go about achieving this in the Manage service?

* [The initial problem statement](#the-initial-problem-statement)
* [Context and guidance](#context-and-guidance)
    * [How UCAS works](#how-ucas-works)
    * [Research we've done](#research-we%E2%80%99ve-done)
    * [User needs](#user-needs)
    * [Options analysis session](#options-analysis-session)
    * [Designs, research and iterations](#designs%2C-research-and-iterations)
    * [Policy](#policy)
    * [Next steps](#next-steps)
    * [Current solution](#current-solution)
    * [Worked examples](#worked-examples)
* [Appendix - UCAS Weblink Screenshots](#appendix---ucas-weblink-screenshots)


## The initial problem statement

### Who are our users?
People who manage applications. A user could be assigned to one or more providers in order to manage applications.

Examples we know of include:
* Head of admissions
* Admissions officer
* Administrator
* Course lead
* School lead
* Subject matter specialist
* Head of department
* Course Tutor 

Organisations can deliver initial teacher training manage through various organisational structures

The most common organisational structures for providers are shown below:
{{ appFigure({
  image: {
    file: "organisation-structures.png"
  }
}) }}

### Why do we need to look into this?

#### Hypotheses

* There are situations in which provider users need different levels of access
* Providers need to be able view applications made to their courses, or courses that they accredit
* There should be commonality between Apply and Publish access designs
* Access to a candidate’s sensitive information should be restricted

#### Scenario 1: Situations in which provider users need different levels of access

For many organisations, multiple different user types are involved in the application decision making process. We’ve identified common patterns through research where admissions staff will sift applications (on a daily basis), whilst academic staff will be largely involved in the interview process (may only require occasional access).

#### Scenario 2: managing applications across multiple organisations

Some users manage applications across multiple provider organisations. Our current business rules state that provider users should be able to view and make decisions on applications to courses that they deliver, or ratify. The provider UI and API enable provider users to change the course as part of an offer. We need to make sure that if a course change happens, the application is no longer visible to the provider (if it is not a course they ratify, or deliver)

##### Accredited bodies 
Accredited Providers must ensure that they remain compliant with the ITT criteria. We’ve identified in research that in some partnerships, application management is controlled centrally, whilst for other partnerships, Accredited bodies only need to have sight of submitted applications and acceptances to to track volumes, as opposed to individual applications (possibly a dashboard?. How might we cater for this scenario?

#### Scenario 3: restricting access to sensitive personal information 
Sensitive personal information will be collected in Apply for safeguarding and statistical reporting needs. This information includes:
* Safeguarding and disability research 
* Equality monitoring 

Not all users should have access to this information, so we’ll need to figure out how and when to present this data. 

We should also restrict access to this information for internal support users

## Context and guidance

In this document, ‘access management’ and ‘access control’ mean the permissions given training provider users and organisations to make decisions and see sensitive information. 

Our default setting is that all users with access to Manage teacher training applications can read all applications to courses at their provider organisations. Permissions aren’t needed for this. 

For a short story of this, see our [Show and Tell slides](https://docs.google.com/presentation/d/12hs4Rqiw2argAST5lCVD7p4t3xTIrDenx8B0ttTQqZs/edit#slide=id.g7714d84945_0_339) 

* [How UCAS works](#how-ucas-works)
* [Research we've done](#research-we%E2%80%99ve-done)
* [User needs](#user-needs)
* [Options analysis session](#options-analysis-session)
* [Designs, research and iterations](#designs%2C-research-and-iterations)
* [Policy](#policy)
* [Next steps](#next-steps)
* [Current solution](#current-solution)
* [Worked examples](#worked-examples)

### How UCAS works

* All providers have their own portal to their own applications through UCAS weblink.
* All accredited bodies of courses have view-only access to applications at a minimum.
* Some accredited bodies, normally SCITTs, can have access to other provider’s UCAS weblink portals to view and manage all applications. This might occur if the training provider user shares their username or password, or alternatively, the accredited body user is set up as if they were part of the partner organisation.
* Some School Directs may have access to other School Directs UCAS weblinks within their [alliance] wider organisational partnership.

#### Disadvantages of the current UCAS setup

* Some accredited bodies may have full access to their School Direct providers’ courses. There is a risk these accredited bodies have access to applications which are not ratified by themselves.
* The UCAS system does not allow for the complex ways providers interact with each other. This may affect notifications, filtering, sharing applications etc.
* It is not possible to customise permissions to enable different ways of working.
* Weblink is not  accessible to all users who interact with applications, meaning applications are constantly downloaded and managed outside of the service - this has GDPR implications.
* There are constraints around the types of sensitive data the system can collect and display due to the permissions setup. For example, detailed information about criminal convictions from the candidate.

__Goal:__ We have an opportunity in Manage to build a more secure and robust access system to mitigate these implications, meet all the user needs around access control and to allow for more sensitive information to be collected and displayed.

We formulated a starting hypothesis to test: 
> By introducing access controls ( e.g. read only vs. authorised to make decisions) we can better support provider users to manage applications across different organisational structures. Specifically, we can mitigate the risk of information being seen, or decisions being made, by the wrong person.
>> By implementing this, we’ll be able to give providers more flexibility to manage their own partnerships.

### Research we've done

#### Accredited body research: survey findings

We conducted a survey to learn how providers work with one another, particularly the part played by the accredited bodies who ratify specific training provider courses.

[Accredited body survey report](https://docs.google.com/presentation/d/1r7PNdue_o4TEdIZZXGkpNlSzFuzsamRdIsw1-x_fQPA/edit#slide=id.p)

__Key findings:__
* There is a lot of complexity in this space.
* We identified a number of different organisational structures, each of which has implications for how applications are processed and managed.
* Organisational structures aren’t always based on a formal accreditation relationship and they likely change over time based on the system and their ways of working. 
* Whoever an application starts with has some involvement at all stages of the application process.
* Applications are being looked at by more than one organisation at most stages of the process.
* Some of the stages can involve multiple actions or workflows.
* Schools Direct may work with several accredited bodies, and each of these bodies will work differently and engage at different parts of the application process.

#### Access control research: moderated sessions

We conducted a number of research sessions with providers to understand more about how they work with other providers and accredited bodies. The sessions below illustrate the organisational complexity faced by different types of providers, the impact it has on their processes and the implications for access control. 

##### Catholic Teaching School Alliance (CTSA)

A School Direct with 4 different HEI accredited bodies.
* [Session notes](https://docs.google.com/document/d/1hSYC9knyDeW1LsUlenZeil9tkoeoIPRZTc7v5YZeL4Y/edit)
* [Process map](https://drive.google.com/drive/folders/1p4Ap6BwUsEi4X_5xuqY1wp2QgY6IUHf5)

__Key access control findings:__
* Each accredited body HEI has a slightly different process that they want to be followed for managing applications for courses they ratify
* CTSA are very much in control of driving the process and have to be mindful of which HEI an application is for
* CTSA are able to move candidates from a course ratified by one HEI to a course ratified by another HEI
* CTSA use an external assessor for sifting applications. It would be very useful if this person could have access to Apply, but be restricted from any decision-making actions
* The HEIs need to see the safeguarding information, CTSA do not.

##### Keele and North Staffordshire Teacher Education (KNSTE) 

An accredited body and SCITT, ratifying courses for 12 partner schools, of which 4 are Schools Direct, some of whom are ratified  by other accredited bodies. KNSTE also run their own courses.
* [Session notes](https://docs.google.com/document/d/1QOGasJVs06b4NMhBWnPj9bIrhPL_P5ggf0t_N1F_2yo/edit)

__Key access control findings:__
* Each school has an agreement with KNSTE SCITT on ways of working
* People from the SCITT and from the schools are involved in decision-making, but most of the time KNSTE are uploading decisions into UCAS. So there are users who only need to view applications.
* However, given that the Schools Direct are also working with other accredited bodies, they will have their own additional ways of working agreements. These may be quite different to how they work with KNSTE
* The director of the SCITT handles anything to do with safeguarding

##### Potential access models

[Spreadsheet modeling how access permissions could work for these organisations](https://docs.google.com/spreadsheets/d/19D1PUSff78vevA8uuGtVJsnsIz7di_x3CNvbupzxNnc/edit#gid=0)

#### Organisation types & links

We developed a set of organisational diagrams to explain the different set ups within organisations. These were developed with evidence from qualitative research sessions, through policy documentation and historical research across teams in DfE. 

These diagrams show the organisational structures, but do not explain what different providers within the organisation are responsible for.

[Organisational diagrams folder](https://drive.google.com/drive/u/0/folders/1p4Ap6BwUsEi4X_5xuqY1wp2QgY6IUHf5)

#### Safeguarding research

During research, we identified a candidate need to explain any criminal convictions:

>__As a__ candidate
>__I need to__ feel comfortable disclosing negative information about my past
>__So that__ I know whether it’s worth carrying on with my application

[The questions we ask candidates](https://apply-beta-prototype.herokuapp.com/application/undefined/suitability/)

In completing this section, candidates may supply sensitive data. We tested this information with providers who expressed a strong interest in seeing this data. They also highlighted that the data would need to be locked down to certain individuals. This will be the same case as the HESA data, which providers need to report into HEI systems or DTTP.

For SCITTs this may be:
* Directors, chairs, CEOs
* HR 
* Possibly admin staff

For HEIs this may be: 
* ITT lead/director
* Criminal convictions teams
* HR teams

We made a decision, as an MVP, to collect the data from candidates, but only show a simple “candidate has shared information” or “candidate has not shared information”. We then steer providers to manage the communication about the information offline.

However, this does not support the need from providers to see the sensitive data. There is an opportunity to build this safeguarding information (HESA and criminal convictions) into the access management within Manage. We realised we could do this in such a way that it would be the provider’s responsibility to give permission to the relevant people within their organisation to view this information.

#### In summary

The research shows that:
* Providers organise themselves in a variety of ways. We have identified a number of common organisational structures, some more straightforward than others. We learnt it is possible for providers to exist within a highly interconnected network of organisations.
* Providers can have different ways of working with one another. A single provider, typically a School Direct, can have multiple different ways of working depending upon the accredited body which ratifies a particular  course for a particular application.
* There are multiple roles within providers, each of which may require different access permissions. For example:
    * An ITT Director may be the only person who should view safeguarding information
    * A subject lead at a school may only need to view applications
    * An ITT Administrator may need to make decisions and manage who should have access to the system.

### User needs

#### Sharing applications with other users

##### Key needs
>__As an__ administrator within a provider
>__I need to__ share an application with other decision-makers (potentially in other organisations)
>__So that__ we can decide how to progress the application

##### Supporting needs
* [Share an application with decision makers](https://trello.com/c/MunTJ6wX/67-share-an-application-with-decision-makers)
* [Have access to the application form before and during the interview process](https://trello.com/c/T1mspQpA/89-need-to-have-access-to-the-application-form-before-and-during-the-interview-process)
* [Interview panelists know enough about the candidate's application to be useful in the interview](https://trello.com/c/f2fqLASM/82-interview-panelists-know-enough-about-the-candidates-application-to-be-useful-in-the-interview)

#### Shared decision-making

##### Key needs
>__As a__ partner school or School Direct
>__I need to__ send a provisional decision about an application to the accredited body for that course
>__So that__ they can make the final decision and issue the offer

##### Supporting needs
* [Know when new applications arrive](https://trello.com/c/08w4bRtM/144-know-when-new-applications-arrive)
* [Inform the HEI of the decision made](https://trello.com/c/YqmCz0Py/141-inform-the-hei-of-the-decision-made)

#### Multi-organisation application processing

##### Key needs
>__As a__ provider user
>__I need to__ be able to see applications for the other organisations in my network
>__So that__ I can process applications according to the working practices we’ve agreed upon

>__As a__ provider user
>__I need to__ know who took which actions on an application, when they took those actions and to which organisation they belong
>__So that__ when I pick up the application I know what has been done to it and therefore what actions I now need to take

>__As a__ provider user
>__I need to__ know what I need to do with an application when I start work on it. I need to know if another user has actions they need me to take on this application
>__So that__ I can work efficiently without needing to ask for guidance

>__As a__ provider
>__I need to__ be able to move candidates from one course in my network of organisations to another
>__So that__ I can ensure that promising candidates aren’t lost and are provided with the best chance of being made an offer

##### Supporting needs
* [Know which organisation a candidate has applied to](https://trello.com/c/DAQq1mXq/142-know-which-organisation-a-candidate-has-applied-to)
* [Know when I'm allowed to invite candidates to interview](https://trello.com/c/euz9hTyd/140-know-when-im-allow-to-invite-candidates-for-interview)

#### Safeguarding

##### Key needs
>__As a__ provider
>__I need__ certain individuals within my organisation to know about a candidate’s past
>__So that__ we can make a judgement on whether to pursue their application while also reducing the risk of candidate’s information being made public to the wrong people

### Options analysis session

* [Options analysis paper](https://docs.google.com/document/d/1EtBONGDI1xJuXJdpASiqMGTbJWoens63x2Yadbg0QKk/edit)
* [Options spreadsheet](https://docs.google.com/spreadsheets/d/19D1PUSff78vevA8uuGtVJsnsIz7di_x3CNvbupzxNnc/edit#gid=0) (note that you will need to view the version history to see previous options)

#### Session aim

The aim of the session was to review the options within the options analysis paper. We collaborated and brought together our knowledge of the user needs, the organisational structures, the data we have and the technical knowledge of implementation. We then worked through what an example might look like, using a real-life example. The session was run with the whole ProVendor team, key members from the Find team, the Deputy Service owner and cross-service Technical Architect.

#### Key findings

* Find will assess whether there is a need for permissions, allocations etc. (they will be informed of the ongoing Apply work)
* Both teams will continue to share what they are doing in this space and look in the medium term for how we can meet the needs of users who work cross-service
* Decision to go with option 2: org-to-org relationships + more sophisticated user-to-org relationships
* Design and research to build out what this might look like in the UI

#### Rationale for decision made

The decision was made to go with option 2. It allows the provider to have full control over who has access to perform which functions. It also meets their needs around managing applications entirely within the Manage service. Although more technical to build, it will allow us greater flexibility in the future to add more permissions and will give us the data to understand how the organisations within the ITT space are set up. 

__Pros:__
* Mitigates the high risk of someone making a decision when they are not allowed to
* We can allow certain users to have access to certain sensitive data
* UI reflects possible permissions
* UI doesn’t need to explain itself
* When relationships change between organisations, you can set it once for all users.

__Cons:__
* Technically more complicated to implement - every user needs to be updated to reflect changes to relationships between orgs

### Designs, research and iterations

Given the decision made, we spun up some prototypes to understand this complex landscape in terms of what questions the user might be asked.

#### Current prototype

* [Onboarding flow](https://manage-applications-beta.herokuapp.com/onboard)
* [Managing organisations](https://manage-applications-beta.herokuapp.com/organisations)
* [Managing users](https://manage-applications-beta.herokuapp.com/users)

#### Design history

* [Iteration 1](https://bat-design-history.netlify.app/manage-teacher-training-applications/setting-up-permissions)
* [Iteration 2](https://bat-design-history.netlify.app/manage-teacher-training-applications/setting-up-permissions-iteration-2)

#### Our design process

We have adopted a multidisciplinary design process, with collaboration throughout:
* Research to determine user needs and understand the context
* Exploration of processes with design (interaction and content), business analysis and development to understand possible approaches and limitations
* Proposal of different approaches for handling inter-organisational permissions
* Modelling of different scenarios for example providers
* Collaboration between research and design to create initial designs
* Designs tested with providers and iterated
    * Process and content iterated
* Designs validated, policy implications identified

#### Research findings

We have tested the onboarding flow in depth with three providers so far:
* SCITT - Titan Ltd
* School Direct - Millais Alliance
* SCITT - Somerset SCITT

__Key findings:__
* The organisation-to-organisation set up has been understood by providers and they can set up their organisation structures
* The user permissions set up has been understood by providers and they can effectively invite users with the right permissions
* Providers who work collaboratively may need to set these permissions up collaboratively (e.g. with their accredited body)
* Users like the ability to see the overview of the permissions they have set, or that their School Direct has set
* Users like that they are able to edit their permissions if needed, including changing permissions of individual users
* Providers are beginning to realise how they could widen their scope of access to others within the organisations to manage their courses within Manage
* There are a number of content small tweaks that need to be addressed to make sure providers are aware of the impact of the decisions
* There are [policy questions](#policy) that have been highlighted around belonging to multiple providers

We have a good level of confidence in the understanding and the data that sits behind the decision made. We have a mid-level confidence in our designs to explain and allow providers to set up these permissions successfully for the first time. We need to do more testing with different organisation structures and with HEIs to understand how this might affect them.

### Policy 

From research we have identified there is a policy question around the on-boarding of providers in relation to access management. There are cases where individuals who work for organisations that don’t provide the course have complete management responsibilities over that provider's applications. This is normally a member of a SCITT having complete management responsibilities over a School Direct’s applications.

There is a decision to be made whether we want to allow this SCITT to have complete access to set up their School Direct organisational permissions (the current Publish model). An alternative is to default to assigning all organisational permissions to the provider of the course. This could be done during on-boarding. Each option has pros and cons and an impact on the on-boarding journey into Apply which we will need to discuss.

[Potential options](https://docs.google.com/document/d/1X9AIb5MhNStRBGytsC6Bg8_NW2yDgWsnvz7V6nwvpPc/edit?ts=5ea92fbf)

#### Decision

A user with Manage Users permission can invite other users from outside their organisation. These users will have the ability to view all applications to that provider, together with any other permissions they are granted. The inviting user will be warned of the consequences of inviting users from outside their organisation (the MVP is a hint text warning, but future iterations may be more sophisticated)

### Next steps

* Run policy workshop and come to decision around onboarding
* Research with HEIs to understand how access management will work with student record systems

### Current solution

__Onboarding:__
* A user indicates the organisation they belong to
* They can choose another user either within their organisation, or from another provider if they’re part of a close network, to set up their organisation (optionally) 
* The user signs the data sharing agreement
* The user sets up the access permissions for their organisation and where relevant the organisation that ratifies their courses. Ratifying organisations do not get to set permissions for the courses they ratify. If they run and ratify their own courses, they will automatically be given access to the make decisions and view safeguarding permissions.
* Onboarding can be considered complete once all organisations in a given structure have been onboarded

__Modifying organisation set-up:__
* A user with the appropriate permissions can navigate to the “Organisations” area and see the permissions for the organisation(s) they belong to
* There they can change the organisational setup for those organisations to which they belong. If they are an accredited body, they will see the permissions that the other organisations they work with have set. Should they not agree with these settings they can contact the organisation in question and ask them to alter them.

__Adding users:__
* The first user, who set up the organisation, will by default have “manage organisations” and “manage users” permissions
* They navigate to the “Users” area and select invite user
* They can select which organisations the new user should belong to
* They then select permissions for that user for each organisation in turn. The permissions screen shows the scope of different permissions for that organisation (for example, Provider X has been set-up at the organisational level to be able to make decisions for courses ratified by Accredited Body A, but not Accredited Body B. The permissions screen will show that the Make Decisions permission only applies to courses ratified by Accredited Body A)

### Worked examples

#### Catholic Teaching Schools Alliance (CTSA) - a complex School Direct 

##### Context:
* School Direct
* 4 accredited bodies with different working practices:
    * Goldsmiths 
    * Kings College
    * St. Mary’s
    * UCL

##### Onboarding:
* Clare at CTSA is invited to Apply and signs the data sharing agreement
* She is then shown that (based on the data held in Publish) we believe she has courses ratified by the 4 HEIs
* She is taken to a screen to set-up the permissions for each HEI in turn:
    * For Goldsmiths: she sets that they can make decisions and see safeguarding information and that CTSA can make decisions
    * For Kings College: she sets that they can make decisions and see safeguarding information and that CTSA can make decisions
    * For St. Mary’s: she sets that they can make decisions and see safeguarding information and that CTSA can make decisions
    * For UCL: she sets that they can see safeguarding information and that CTSA can make decisions

##### Add users:
* CTSA have an external vettor who reviews all incoming applications. 
    * They are added as a CTSA user. They are given no permissions, meaning they get to see all applications and make notes, but nothing else.
* Clare has a deputy.
    * They are added with Manage users and Make Decisions permissions (the make decisions permission field shows that decisions can be made for all 4 HEIs)

#### Somerset SCITT - a SCITT with a large degree of control over the courses they ratify

##### Context:
* A SCITT that runs their own courses
* Works with 4 Schools Direct:
    * Growing Expert Teachers
    * Taunton Teaching Alliance
    * The Beach Teaching School
    * Venturas Teaching School Alliance
* The Schools Direct are only ratified by Somerset SCITT

##### Onboarding:
* Somerset SCITT
    * Claudine at Somerset SCITT is invited to Apply and signs the data sharing agreement for Somerset SCITT
    * She is then shown that according to the data in Publish, her organisation ratifies and runs their own courses
    * She is informed that as Somerset SCITT ratify and run their own courses, Somerset SCITT users can have the option of make decisions and view safeguarding permissions.
    * Claudine now has to wait for the Schools Direct to be onboarded or indicate that they want her to onboard them
* Growing Expert Teachers
    * Alice at Growing Expert Teachers is contacted to be onboarded
    * She signs the data sharing agreement
    * She can then see that Growing Expert Teachers have courses ratified by Somerset SCITT
    * She then sets up the following organisation permissions based on the working practices agreed with Somerset SCITT:
        * Somerset SCITT can make decisions and see safeguarding information, Growing Expert Teachers can see safeguarding information.
* Taunton Teaching Alliance
    * Alan at Taunton Teaching Alliance is contacted to be onboarded. He indicates that he wants to give that control to Claudine
    * Claudine is invited to sign the data sharing agreement
    * She can then see that Taunton Teaching Alliance have courses ratified by Somerset SCITT
    * She then sets up the following organisation permissions:
        * Somerset SCITT can make decisions and see safeguarding information, Taunton Teaching Alliance can see safeguarding information.
* The Beach Teaching School
    * Gavin at The Beach Teaching School is contacted to be onboarded
    * He signs the data sharing agreement
    * He can then see that The Beach Teaching School have courses ratified by Somerset SCITT
    * He then sets up the following organisation permissions based on the working practices agreed with Somerset SCITT:
        * Somerset SCITT can make decisions and see safeguarding information, The Beach Teaching School can see safeguarding information.
* Venturas Teaching School Alliance
    * Karen at Venturas Teaching School Alliance is contacted to be onboarded
    * She signs the data sharing agreement
    * She can then see that Venturas Teaching School Alliance have courses ratified by Somerset SCITT
    * She then sets up the following organisation permissions based on the working practices agreed with Somerset SCITT:
        * Somerset SCITT can make decisions and see safeguarding information, Venturas Teaching School Alliance can see safeguarding information.

##### Adding users:
* Claudine (Somerset SCITT)  wants to add: 
    * Her Senior Administrator:
        * She selects that they have the “make decisions” permission. She sees that this applies to courses run by all 5 providers.
    * Her safeguarding lead:
        * She selects that they have the “view safeguarding information” permission. She sees that this applies to courses run by all 5 providers.
    * Her Programme manager:
        * She sets that they are a user of both Somerset SCITT and Taunton Teaching Alliance and that they can:
            * Manage organisations for both Somerset SCITT and Taunton Teaching Alliance (this option is not available for the other organisations as they manage their own set-up)
            * Manage users for both Somerset SCITT and Taunton Teaching Alliance (this option is not available for the other organisations as they manage their own set-up)
            * Make decisions for all 5 organisations
* Karen (Venturas Teaching School Alliance) wants to add:
    * Her deputy:
        * She can only select her own organisation. She sets that her deputy can:
            * Manage organisations
            * Manage users
            * Make decisions

#### Keele and North Staffordshire Teacher Education (KNSTE) - a SCITT with more autonomous partners

##### Context:
* A SCITT that runs its own courses via 8 partner schools
* Also works with 4 Schools Direct:
    * Blackfriars Teaching School Alliance (accredited by The Oaks, KNSTE and University of Derby)
    * City Learning Trust (accredited by Staffordshire University, Manchester Metropolitan University and KNSTE)
    * Painsley Teaching School Alliance (accredited by University of Derby and KNSTE)
    * Uttoxeter Learning Trust Teaching School (accredited by The John Taylor SCITT and KNSTE)

##### Onboarding:
* KNSTE
    * Susan at KNSTE is invited to Apply and signs the data sharing agreement for KNSTE
    * She can see that KNSTE run and ratify their own courses and that they can make decisions and view safeguarding information
    * Susan now has to wait for the Schools Direct to be onboarded or indicate that they want her to onboard them
* Blackfriars Teaching School Alliance
    * Erica at Blackfriars Teaching School Alliance is invited to Apply and signs the data sharing agreement
    * She can see that Blackfriars Teaching School Alliance have courses ratified by The Oaks, KNSTE and University of Derby. She sets the following permissions:
        * The Oaks can see safeguarding information, Blackfriars Teaching School Alliance can make decisions
        * KNSTE can see safeguarding information, Blackfriars Teaching School Alliance can make decisions
        * University of Derby can see safeguarding information, Blackfriars Teaching School Alliance can make decisions
* City Learning Trust
    * Yasmin at City Learning Trust is invited to Apply and signs the data sharing agreement
    * She can see that City Learning Trust have courses ratified by Staffordshire University, Manchester Metropolitan University and KNSTE. She sets the following permissions:
        * Staffordshire University can see safeguarding information, City Learning Trust can make decisions
        * Manchester Metropolitan University can see safeguarding information and make decisions, City Learning Trust don’t have any permissions set.
        * KNSTE can see safeguarding information, City Learning Trust can make decisions
* Painsley Teaching School Alliance
    * Priti at Painsley Teaching School Alliance is invited to Apply and signs the data sharing agreement
    * She can see that Painsley Teaching School Alliance have courses ratified by KNSTE and University of Derby. She sets the following permissions:
        * KNSTE can make decisions and see safeguarding information, Painsley Teaching School Alliance can make decisions
        * University of Derby can see safeguarding information, Painsley Teaching School Alliance can make decisions
    * She also indicates that Susan at KNSTE can also manage Painsley Teaching School Alliance’s organisational setup. She acknowledges that this means that Susan will be able to see applications for courses ratified by both KNSTE and University of Derby for Painsley.
* Uttoxeter Learning Trust Teaching School
    * Pauline at Uttoxeter Learning Trust Teaching School is invited to Apply and signs the data sharing agreement
    * She can see that Uttoxeter Learning Trust Teaching School have courses ratified by The John Taylor SCITT and KNSTE. She sets the following permissions:
        * The John Taylor SCITT can see safeguarding information, Uttoxeter Learning Trust Teaching School can make decisions
        * KNSTE can see safeguarding information, Uttoxeter Learning Trust Teaching School can make decisions

##### Adding users:
* Susan (KNSTE) wants to add:
    * Her deputy:
        * She can select that they can see applications for all 5 organisations
        * She selects that they can Manage organisations for KNSTE and Painsley (as this permission has been allowed by Painsley)
        * She selects that they can make decisions and sees that this is only possible for KNSTE and Painsley courses
    * Her Head of HR
        * She can select that they can see applications for all 5 organisations
        * She selects that they can see safeguarding information for all 5 organisations
* Yasmin (City Learning Trust) wants to add:
    * Her Head of ITT:
        * She can only select that they can see applications for City Learning Trust
        * She selects that they can manage the organisation and manage users
        * She selects that they can make decisions. She sees that this applies to courses ratified by Staffordshire University and KNSTE.

## Appendix - UCAS Weblink Screenshots

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application list",
    img: {
      src: "Weblink-application-list.png"
    }
  }, {
    text: "Modify application",
    img: {
      src: "Weblink-modify-application.png"
    }
  }, {
    text: "Change offer",
    img: {
      src: "Weblink-change-offer.png"
    }
  }]
}) }}

Note that for changing an offer in weblink, the user can change:
* The course
* The location
* The month (assume this is the starting month)
* Which cycle the application is for
* Whether it’s a modular course (this appears to be most relevant to HEIs, less so to other providers)
* The mode of study
* The details of the offer (note the relatively small character limit)
