---
layout: page
title: Question protocol for initial pilot
description: Asking questions of our questions.
---
Below is a snapshot of the questions we ask (or intended to ask) candidates for the initial launch of the pilot. From [the service manual page about structuring forms](https://www.gov.uk/service-manual/design/form-structure):

> Only add a question if you know:
>
> * that you need the information to deliver the service
> * why you need the information
> * what you’ll do with it
> * which users need to give you the information
> * how you’ll check the information is accurate
> * how to keep the information up to date and secure
>
> This list is called a ‘question protocol’ - it’s different from the form itself because it’s about how you’ll use the answers.

✘ = removed from MVP

[[toc]]

{% from "protocol/macro.njk" import appProtocol with context %}

## Eligibility for pilot

{{ appProtocol({
  title: "Candidate has UK, EU or EEA citizenship",
  items: {
    question: "Are you a citizen of the UK, EU or EEA?",
    required: "Yes (prior to accessing the service)",
    why: [{
      who: ["service"],
      what: "only accepts candidates that are citizens of the UK and EEA. Apart from reducing the scope, there was a concern that SCITT’s are not well equipped to make decisions about international candidates"
    }],
    what: ["Candidate’s not meeting this requirement are asked to apply via UCAS"],
    notes: ["Question to be removed once the pilot has been expanded to allow candidates with complex residency statuses"]
  }
}) }}

{{ appProtocol({
  title: "Candidate has qualifications required for ITT awarded by UK institutions",
  items: {
    question: "Did you gain all your qualifications at institutions based in the UK?",
    required: "Yes (prior to accessing the service)",
    why: [{
      who: ["service"],
      what: "only accepts candidates with the qualifications needed for eligibility for ITT that have been awarded by UK institutions. Apart from reducing scope, there was a concern that SCITT’s are not well equipped to make decisions about international qualifications"
    }],
    what: ["Candidate’s not meeting this requirement are asked to apply via UCAS"],
    notes: ["Question to be removed once the pilot has been expanded to allow candidates with international qualifications"]
  }
}) }}

## Course choices (maximum of three)

Candidates can update course choices before (and 5 working days after) submitting their application. They can withdraw from a given choice at any time after that.

{{ appProtocol({
  title: "Candidate knows which provider and course they want to apply to",
  items: {
    question: "Have you chosen a course to apply to?",
    required: "Yes",
    why: [{
      who: ["service"],
      what: "uses this to direct candidates to the [Find postgraduate teacher training](https://find-postgraduate-teacher-training.education.gov.uk) service to find a course to apply to if they haven’t done so yet"
    }],
    what: ["Answer not submitted as part of application"]
  }
}) }}

{{ appProtocol({
  title: "Training provider",
  items: {
    question: "Which training provider are you applying to?",
    required: "Yes",
    api: {
      param: "course.provider_code",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#course-object"
    },
    why: [{
      who: ["service"],
      what: "uses this to know which provider to send the completed application"
    }, {
      who: ["hesa"],
      what: "requires this to identify source of student record"
    }, {
      who: ["dfe"],
      what: "uses this for reporting"
    }],
    what: ["Retrievable via API"],
    accuracy: ["Candidates can only choose from a pre-populated list of providers which is driven by data from the Find service. Provider names are occasionally updated via Publish, they must update here too"]
  }
}) }}

{{ appProtocol({
  title: "Course",
  items: {
    question: "Which course are you applying to?",
    required: "Yes",
    api: {
      param: "course.course_code",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#course-object"
    },
    why: [{
      who: ["provider"],
      what: "uses this to know which course is being applied to, and to determine funding"
    }, {
      who: ["hesa"],
      what: "requires this to “identify the subject of the ITT course”"
    }, {
      who: ["dfe"],
      what: "uses this for reporting"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Candidates can only choose from a pre-populated list of courses which is driven by data from the Find service"]
  }
}) }}

{{ appProtocol({
  title: "Training location",
  items: {
    question: "Which location are you applying to?",
    required: "Yes",
    api: {
      param: "course.site_code",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#course-object"
    },
    why: [{
      who: ["candidate"],
      what: "uses this to indicate their preferred training location"
    }, {
      who: ["provider"],
      what: "may use the course and location code to generate a unique identifier (which then triggers a different workflow within a student record system)"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Candidates can only choose from a pre-populated list of training locations which is driven by data from the Find service. Only training locations that have vacancies will be shown."]
  }
}) }}

## Personal details

Candidates can update these answers before (and 5 working days after) submitting their application.

{{ appProtocol({
  title: "Given (first) name",
  items: {
    question: "First name",
    required: "Yes",
    api: {
      param: "candidate.first_name",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#candidate-object"
    },
    why: [{
      who: ["provider"],
      what: "uses this to verify a candidate’s identity. If offered a place, it’s used when making a DBS check"
    }, {
      who: ["provider", "dfe"],
      what: "use a combination of this and other values to identify individual candidates and for record matching"
    }, {
      who: ["hesa"],
      what: "requires this to facilitate “checking data with providers and for Statutory Customers to link student records collected by HESA for statistical purposes”"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers ask for proof of identification"],
    notes: ["Ideally this field would be combined with family name into a single field. It’s recorded separately to support legacy student record systems."]
  }
}) }}

{{ appProtocol({
  title: "Family (last) name",
  items: {
    question: "Last name",
    required: "Yes",
    api: {
      param: "candidate.last_name",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#candidate-object"
    },
    why: [{
      who: ["provider"],
      what: "uses this to verify a candidate’s identity. If offered a place, it is then used when making a DBS check"
    }, {
      who: ["provider", "dfe"],
      what: "use a combination of this and other values to identify individual candidates and for record matching"
    }, {
      who: ["hesa"],
      what: "requires this to facilitate “checking data with providers and for Statutory Customers to link student records collected by HESA for statistical purposes.”"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers ask for proof of identification"],
    notes: [
      "Ideally this field would be combined with family name into a single field. It’s recorded separately to support legacy student record systems.",
      "HESA also ask for ‘Immediately prior surname’ to “allow matching of records where a student has changed surname” but we don’t capture this information.",
      "Should we allow changes post-submission?"
    ]
  }
}) }}

{{ appProtocol({
  title: "Date of birth",
  items: {
    question: "Date of birth",
    required: "Yes",
    api: {
      param: "candidate.date_of_birth",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#candidate-object"
    },
    why: [{
      who: ["provider"],
      what: "use this when performing a DBS check"
    }, {
      who: ["hesa"],
      what: "needs this to be in the format YYYY-MM-DD in order to link to other records, and across higher education (wider than just ITT)"
    }, {
      who: ["dfe"],
      what: "uses this for record matching and statistical analysis, for example looking at application rates of over 35 year olds (something the minister has historically been interested in)"
    }],
    what: ["Retrievable via API"],
    accuracy: ["Providers ask for proof of identification"],
    notes: [
      "We need to collect year, but do we need to show it to providers? And if so, at what point? (We currenty don’t show date of birth in the provider interface)."
    ]
  }
}) }}

{{ appProtocol({
  title: "Nationality",
  items: {
    question: "Nationality",
    required: "Yes",
    api: {
      param: "candidate.nationality[]",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#candidate-object"
    },
    why: [{
      who: ["provider"],
      what: "may use this to assess if a candidate is [eligibile for student finance](https://www.gov.uk/student-finance/who-qualifies)"
    }, {
      who: ["hesa"],
      what: "requires this “to respond to Parliamentary Questions, Written Questions, FOI requests on complex citizenship/nationality issues. To be able to perform analysis on trainee demographics at the start of an academic year.”"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers ask for proof of identification"],
    notes: ["We need to collect year, but do we need to show it to providers?"]
  }
}) }}

{{ appProtocol({
  title: "Second nationality",
  items: {
    question: "Add another nationality → Second nationality",
    required: "No",
    api: {
      param: "candidate.nationality[]",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#candidate-object"
    },
    what: ["Appears in provider-facing interface and retrievable via API"],
    notes: ["We needn’t ask for additional nationalities; dual nationals can enter their British or EEA-derived nationality"]
  }
}) }}

{{ appProtocol({
  title: "✘ Residency status",
  items: {
    question: "What is your residence status?",
    required: "Yes (if country of nationality is not within the UK or EEA)",
    api: {
      param: "candidate.uk_residency_status",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#candidate-object"
    },
    why: [{
      who: ["provider"],
      what: "may use this field to assess if a candidate is [eligibile for student finance](https://www.gov.uk/student-finance/who-qualifies)"
    }, {
      who: ["hesa"],
      what: "requires domicile to “distinguish between home and overseas students and to disaggregate students by origin. To obtain the numbers of students domiciled in particular EC countries and elsewhere abroad, and hence calculate participation rates. To forecast the demand for student allowances and grants. To record cross-border flows.”"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers ask for documentation"],
    notes: ["In addition to status, do we also need to ask for the date they entered the country? This might be relevant if an applicant has a Tier 5 Visa (from Australia or New Zealand, where people can work for up to 2 years in the UK). Date they entered the country can also impact funding."]
  }
}) }}

{{ appProtocol({
  title: "Main language spoken",
  items: {
    question: "Is English your main language?",
    required: "Yes",
    api: {
      param: "candidate.english_main_language",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#candidate-object"
    },
    why: [{
      who: ["unknown"],
      what: "Further research required"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    notes: ["Does having an English language GCSE (or equivalent) mean we need to ask this question? Does an English GCSE indicate fluency?"]
  }
}) }}

{{ appProtocol({
  title: "English language skills/qualifications",
  items: {
    question: "Please tell us about your English language qualifications (including grades or scores)",
    required: "Yes (if candidate’s main language is not English)",
    api: {
      param: "candidate.english_language_qualifications",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#candidate-object"
    },
    why: [{
      who: ["unknown"],
      what: "Further research required"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    notes: ["Does having an English language GCSE (or equivalent) mean we need to ask this question? Does an English GCSE indicate fluency?"]
  }
}) }}

{{ appProtocol({
  title: "Other languages spoken",
  items: {
    question: "If you are bilingual or very familiar with languages other than English, you can tell us about them here",
    required: "No",
    api: {
      param: "candidate.other_languages",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#candidate-object"
    },
    why: [{
      who: ["candidate"],
      what: "may want to demonstrate language skills, especially if looking to teach a language subject or teach in school with children whose main language isn’t English"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Assessed at interview"],
    notes: ["SCITTs/SDs we've recently spoken to haven’t expressed a need for this, but it’s something candidates sometimes like to mention"]
  }
}) }}

## Contact details

A candidate can update these details at any point during the application process.

{{ appProtocol({
  title: "Email address",
  items: {
    question: "Enter your email address",
    required: "Yes",
    api: {
      param: "contact_details.email",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#contactdetails-object"
    },
    why: [{
      who: ["service"],
      what: "requires this to send candidates a ‘magic link’ to sign back in, and to send updates about their application"
    }, {
      who: ["provider"],
      what: "requires this to contact candidates to arrange interviews and send communications relevant to their application"
    }, {
      who: ["hesa"],
      what: "requires this as the “DfE requires this to communicate with newly qualified teachers”"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: [
      "Address format is validated",
      "Service requires a verified email address to sign in"
    ]
  }
}) }}

{{ appProtocol({
  title: "Phone number",
  items: {
    question: "Phone number",
    required: "Yes",
    api: {
      param: "contact_details.phone_number",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#contactdetails-object"
    },
    why: [{
      who: ["provider"],
      what: "may use this to contact a candidate"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["❓"],
    notes: ["Do providers actually need a phone number? Some candidates might not want to be contacted this way."]
  }
}) }}

{{ appProtocol({
  title: "Address",
  items: {
    question: "What is your address?",
    required: "Yes",
    api: {
      param: "contact_details.address_line1
        contact_details.address_line2
        contact_details.address_line3
        contact_details.address_line4
        contact_details.postcode
        contact_details.country",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#contactdetails-object"
    },
    why: [{
      who: ["provider"],
      what: "may use this to write to candidates"
    }, {
      who: ["provider"],
      what: "may use this to advise candidates on travel and suitability of different campuses"
    }, {
      who: ["provider"],
      what: "may use this to determine the seriousness of an application (given the candidate’s proximity to the training location) and to advise candidates on travel and suitability of different campuses"
    }, {
      who: ["dfe"],
      what: "uses this for demographic reporting"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["In the future we can use a postcode look-up database to fill in UK addresses"],
    notes: [
      "Do providers actually need an address (and might some candidates not want to be contacted this way)?",
      "A DBS check requires a five year address history, which we don’t currently ask for"
    ]
  }
}) }}

## Work history

Candidates can update their answers before (and 5 working days after) submitting their application.

{{ appProtocol({
  title: "Candidate has 5-year employment history",
  items: {
    question: "How long have you been working?",
    required: "Yes",
    why: [{
      who: ["service"],
      what: "needs to offer guidance about completing this section and enable branching; if no employment history we need to capture that reason rather than ask for details of employment"
    }],
    what: ["Answer not submitted as part of application"]
  }
}) }}

{{ appProtocol({
  title: "Reason for being out of work",
  items: {
    question: "Tell us why you’ve been out of the workplace",
    required: "Yes (if candidate has no employment history)",
    api: {
      param: "—"
    },
    why: [{
      who: ["provider"],
      what: "wants to see 5 years of work history as part of their safeguarding responsibilities"
    }],
    what: ["Appears in provider-facing interface"],
    accuracy: ["May be assessed at interview"],
    notes: ["There is currently no field in the API to capture this information"]
  }
}) }}

{{ appProtocol({
  title: "Job - Title",
  items: {
    question: "Job title",
    required: "Yes",
    api: {
      param: "work_experience.jobs[].role",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#workexperiences-object"
    },
    why: [{
      who: ["service"],
      what: "uses this label to distinguish between different jobs when reviewing answers"
    }, {
      who: ["provider"],
      what: "uses this to build a picture of a candidate’s background"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["We don’t directly, but a reference from an employer may collaborate some of this information"]
  }
}) }}

{{ appProtocol({
  title: "Job - Employer",
  items: {
    question: "Name of employer",
    required: "Yes",
    api: {
      param: "work_experience.jobs[].organisation_name",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#workexperiences-object"
    },
    why: [{
      who: ["service"],
      what: "uses this label to distinguish between different jobs when reviewing answers"
    }, {
      who: ["provider"],
      what: "uses this to build a picture of a candidate’s background"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["We don’t directly, but a reference from an employer may collaborate some of this information"]
  }
}) }}

{{ appProtocol({
  title: "Job - Time commitment",
  items: {
    question: "Was this job full time or part time?",
    required: "Yes",
    api: {
      param: "work_experience.jobs[].commitment",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#workexperiences-object"
    },
    why: [{
      who: ["provider"],
      what: "uses this to build a picture of a candidate’s background"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["We don’t directly, but a reference from an employer may collaborate some of this information"],
    notes: ["Feedback from HEIs has suggested hours per week is more useful (this is what UCAS asks). We might extend to include details of working pattern for part time jobs."]
  }
}) }}

{{ appProtocol({
  title: "Job - Period of employment",
  items: {
    question: "Start date
      End date",
    required: "Yes",
    api: {
      param: "work_experience.jobs[].start_date
      work_experience.jobs[].end_date",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#workexperiences-object"
    },
    why: [{
      who: ["service"],
      what: "uses this to calculate any gaps in work history"
    }, {
      who: ["provider"],
      what: "uses this to build a picture of a candidate’s background"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["We don’t directly, but a reference from an employer may collaborate some of this information"]
  }
}) }}

{{ appProtocol({
  title: "Job - Skills and experience",
  items: {
    question: "Skills and experience relevant to teaching you gained in this role",
    required: "Yes",
    api: {
      param: "work_experience.jobs[].description",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#workexperiences-object"
    },
    why: [{
      who: ["candidate"],
      what: "may use this to demonstrate subject knowledge gained in the workplace"
    }, {
      who: ["provider"],
      what: "uses this to build a picture of a candidate’s background"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["We don’t directly, but a reference from an employer may collaborate some of this information"]
  }
}) }}

{{ appProtocol({
  title: "Job - Role involved working with children",
  items: {
    question: "Did this job involve working in a school or with children?",
    required: "Yes",
    api: {
      param: "work_experience.jobs[].start_date
      work_experience.jobs[].end_date",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#workexperiences-object"
    },
    why: [{
      who: ["candidate"],
      what: "may use this to indicate experience working with children"
    }, {
      who: ["provider"],
      what: "uses this to build a picture of a candidate’s suitability"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["We don’t directly, but a reference from an employer may collaborate some of this information"]
  }
}) }}

{{ appProtocol({
  title: "Break - Duration",
  items: {
    question: "Start date
      End date",
    required: "Yes (if any gaps appear in work history)",
    api: {
      param: "work_experience.work_history_break_explanation",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#workexperiences-object"
    },
    why: [{
      who: ["service"],
      what: "uses this to calculate any gaps in work history"
    }, {
      who: ["provider"],
      what: "uses this to build a picture of a candidate’s background, and answer questions about any gaps in work history"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["We don’t directly, but a reference from an employer may collaborate some of this information"],
    notes: ["For v1 of the API, any information about breaks will be appended to the above named parameter. When we start collecting date information around breaks, we'll include those in the text field too."]
  }
}) }}

{{ appProtocol({
  title: "Break - Reason for work break",
  items: {
    question: "Enter reasons for break in work history",
    required: "Yes (if any gaps appear in work history)",
    api: {
      param: "work_experience.work_history_break_explanation",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#workexperiences-object"
    },
    why: [{
      who: ["provider"],
      what: "uses this to build a picture of a candidate’s background, and answer questions about gaps in employment history"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["❓"],
    notes: ["For v1 of the API, any information about breaks will be appended to the above named parameter. When we start collecting date information around breaks, we'll include those in the text field too."]
  }
}) }}

## Volunteering with children and young people

Candidates can update their answers before (and 5 working days after) submitting their application.

{{ appProtocol({
  title: "Candidate has school experience",
  items: {
    question: "Do you have experience volunteering with young people or in school?",
    required: "Yes",
    why: [{
      who: ["service"],
      what: "needs to offer guidance about completing this section and enable branching; if no experience of volunteering with young people or in school, we direct candidates to the [Get school experience](https://schoolexperience.education.gov.uk) service"
    }],
    what: ["Answer not submitted as part of application"]
  }
}) }}

{{ appProtocol({
  title: "Role - Title",
  items: {
    question: "Your role",
    required: "No",
    api: {
      param: "work_experience.volunteering[].role",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#workexperiences-object"
    },
    why: [{
      who: ["service"],
      what: "uses this label to distinguish between different roles"
    }, {
      who: ["provider"],
      what: "uses this to build a picture of a candidate’s experience"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Reference from an employer may collaborate some degree of information"]
  }
}) }}

{{ appProtocol({
  title: "Role - Organisation",
  items: {
    question: "Organisation where you gained experience or volunteered",
    required: "No",
    api: {
      param: "work_experience.volunteering[].organisation_name",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#workexperiences-object"
    },
    why: [{
      who: ["service"],
      what: "uses this label to distinguish between different roles"
    }, {
      who: ["provider"],
      what: "uses this to build a picture of a candidate’s background"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Reference may collaborate some of this information"]
  }
}) }}

{{ appProtocol({
  title: "Role - Dates of volunteering",
  items: {
    question: "Start date
      End date",
    required: "No",
    api: {
      param: "work_experience.volunteering[].start_date
      work_experience.volunteering[].end_date",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#workexperiences-object"
    },
    why: [{
      who: ["provider"],
      what: "uses this to build a picture of a candidate’s background"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Reference may collaborate some of this information"]
  }
}) }}

{{ appProtocol({
  title: "Role - Time commitment and responsibilities",
  items: {
    question: "Enter details of your time commitment and responsibilities",
    required: "No",
    api: {
      param: "work_experience.volunteering[].description",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#workexperiences-object"
    },
    why: [{
      who: ["candidate"],
      what: "can use this to demonstrate what they learnt during their unpaid experience"
    }, {
      who: ["provider"],
      what: "uses this to build a picture of a candidate’s background"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Reference may collaborate some of this information"]
  }
}) }}

{{ appProtocol({
  title: "Role - Role involved working with children",
  items: {
    question: "Did this job involve working in a school or with children?",
    required: "No",
    api: {
      param: "work_experience.volunteering[].working_with_children",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#workexperiences-object"
    },
    why: [{
      who: ["candidate"],
      what: "may use this to indicate experience working with children"
    }, {
      who: ["provider"],
      what: "uses this to build a picture of a candidate’s suitability"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Reference may collaborate some of this information"],
    notes: ["We’ve allowed people to include volunteering roles that don't involve kids – this needs to be clearer."]
  }
}) }}

## Training with a disability

This question in the form, as described below, was removed from the initial pilot for launch. It will return once additional research in this area has been completed.

Candidates can update their answers before (and 5 working days after) submitting their application.

{{ appProtocol({
  title: "✘ Candidate wants to disclose a disability",
  items: {
    question: "Do you want to disclose a disability?",
    required: "Yes",
    why: [{
      who: ["service"],
      what: "uses the answer to show/hide textarea"
    }],
    what: ["Yes/no answer appears in provider-facing interface"]
  }
}) }}

{{ appProtocol({
  title: "✘ Disability disclosure",
  items: {
    question: "Tell us about your disability",
    required: "No",
    api: {
      param: "candidate.disability_disclosure",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#candidate-object"
    },
    why: [{
      who: ["provider"],
      what: "may use this to support the candidate at interview (and training if accepted onto course)"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Provides will probably speak to candidate to discuss their individual needs prior to interview"],
    notes: ["Does a provider or someone else look at this and make any reasonable adjustments? Is there a process to work out what adjustments can be made or not? Research currently being undertaken."],
    history: ["/apply-for-teacher-training/training-with-a-disability"]
  }
}) }}

## Degrees

Candidates can update their answers before (and 5 working days after) submitting their application.

This question is required to [assess entry criteria](https://www.gov.uk/government/publications/initial-teacher-training-criteria/initial-teacher-training-itt-criteria-and-supporting-advice#c12-degree-criteria):

> All accredited ITT providers must ensure that, in the case of graduate programmes of ITT, all entrants hold a first degree of a United Kingdom higher education institution or equivalent qualification.

{{ appProtocol({
  title: "Qualification - type",
  items: {
    question: "Type of degree",
    required: "First degree: Yes
      Additional degree(s): No",
    api: {
      param: "qualifications.degrees[].qualification_type",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "needs to ensure candidate holds a first degree of a UK higher education institution or equivalent qualification"
    }, {
      who: ["provider"],
      what: "wants to see that candidate can demonstrate subject and curriculum knowledge at a sufficient level"
    }, {
      who: ["hesa"],
      what: "requires this to enable “to create the student's DfE record”"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"]
  }
}) }}

{{ appProtocol({
  title: "Qualification - subject",
  items: {
    question: "Subject of degree",
    required: "First degree: Yes
      Additional degree(s): No",
    api: {
      param: "qualifications.degrees[].subject",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "wants to see that a candidate can demonstrate subject and curriculum knowledge"
    }, {
      who: ["hesa"],
      what: "requires this to “provide data on the qualifications of teachers.”"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"]
  }
}) }}

{{ appProtocol({
  title: "Qualification - grade",
  items: {
    question: "Enter your degree grade",
    required: "First degree: Yes
      Additional degree(s): No",
    api: {
      param: "qualifications.degrees[].grade",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["hesa"],
      what: "requires this to “provide data on the qualifications of teachers.”"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"],
    notes: ["Not all postgraduate degrees have grades, for example a PhD"]
  }
}) }}

{{ appProtocol({
  title: "Qualification - year",
  items: {
    question: "What year did you graduate?",
    required: "First degree: Yes
      Additional degree(s): No",
    api: {
      param: "qualifications.degrees[].award_year",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["hesa"],
      what: "requires this to “create the student's DfE record.”"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"]
  }
}) }}

{{ appProtocol({
  title: "Qualification - institution",
  items: {
    question: "Institution where you studied",
    required: "First degree: Yes
      Additional degree(s): No",
    api: {
      param: "qualifications.degrees[].institution_details",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "may be interested in calibre of the institution studied at"
    }, {
      who: ["hesa"],
      what: "requires this to “create the student's DfE record.”"
    }],
    what: ["Retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"],
    notes: [
      "This may be a want, more than a need.",
      "However, a dance provider mentioned they’d use this information to make sure they didn’t send a trainee teacher to one of the schools they had previously trained at.",
      "Not currently shown to providers."
    ]
  }
}) }}

{{ appProtocol({
  title: "✘ Qualification - (non-UK) country",
  items: {
    question: "Country (if outside UK)",
    required: "Yes (if degree not awarded in UK)",
    api: {
      param: "qualifications.degrees[].awarding_body",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "uses this to perform a [NARIC](https://www.naric.org.uk) check (they need confirmation from a the institution that they’ve actually obtained the degree they say they have)"
    }, {
      who: ["hesa"],
      what: "requires this to “create the student's DfE record.”"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"]
  }
}) }}

{{ appProtocol({
  title: "✘ Qualification - (non-UK) equivalency",
  items: {
    question: "Do you know what UK degree your degree is equivalent to?",
    required: "Yes (if degree not awarded in UK)",
    api: {
      param: "qualifications.degrees[].equivalency_details",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "needs to look for evidence that a qualification is of a standard equivalent to a UK degree"
    }, {
      who: ["candidate"],
      what: "needs to provide evidence that their international qualification demonstrates a similar level and breadth as the equivalent UK qualification"
    }, {
      who: ["candidate"],
      what: "may already have a statement of comparability from [NARIC](https://www.naric.org.uk)"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"],
    notes: ["Candidates can request a statement of comparability from [NARIC](https://www.naric.org.uk), or speak to a TTA who can certify equivalence"]
  }
}) }}

## Maths GCSE or equivalent

Candidates can update their answers before (and 5 working days after) submitting their application.

This question is required to [assess entry criteria](https://www.gov.uk/government/publications/initial-teacher-training-criteria/initial-teacher-training-itt-criteria-and-supporting-advice#c11-gcse-standard-equivalent):

> All accredited ITT providers must ensure that all entrants have achieved a standard equivalent to a grade 4 (see note 2) in the GCSE examinations in English and mathematics.

{{ appProtocol({
  title: "Qualification - type",
  items: {
    question: "Type of qualification",
    required: "Yes",
    api: {
      param: "qualifications.gcses[].qualification_type",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "needs to ensure candidates for primary and secondary courses have achieved a standard equivalent to a grade 4 in GCSE Maths"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: [
      "Providers will ask to see hard copies for any qualifications awarded",
      "In the future we can check any post-14 qualifications (awarded after 2006 in England, Wales and Northern Ireland) against the [Learning Records Service](https://www.gov.uk/topic/further-education-skills/learning-records-service)"]
  }
}) }}

{{ appProtocol({
  title: "Qualification - grade",
  items: {
    question: "What grade is your maths qualification?",
    required: "Yes",
    api: {
      param: "qualifications.gcses[].grade",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "needs to ensure candidates have achieved a standard equivalent to a grade 4 in GCSE Maths"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: [
      "Providers will ask to see hard copies for any qualifications awarded",
      "In the future we can check any post-14 qualifications (awarded after 2006 in England, Wales and Northern Ireland) against the [Learning Records Service](https://www.gov.uk/topic/further-education-skills/learning-records-service)"]
  }
}) }}

{{ appProtocol({
  title: "Qualification - year",
  items: {
    question: "When was your maths qualification awarded?",
    required: "Yes",
    api: {
      param: "qualifications.gcses[].award_year",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["service"],
      what: "may use this to validate qualification with LRS"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: [
      "Providers will ask to see hard copies for any qualifications awarded",
      "In the future we can check any post-14 qualifications (awarded after 2006 in England, Wales and Northern Ireland) against the [Learning Records Service](https://www.gov.uk/topic/further-education-skills/learning-records-service)"]
  }
}) }}

{{ appProtocol({
  title: "✘ Qualification - (non-UK) awarding body",
  items: {
    question: "What was the awarding organisation?",
    required: "Yes (if non-UK qualification)",
    api: {
      param: "qualifications.gcses[].awarding_body",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "needs to look for evidence that a qualification is of a standard equivalent to GCSE grade 4, not only in terms of its level, but also in terms of its breadth. Details of qualification can help determine if equivalent to GCSE"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"]
  }
}) }}

{{ appProtocol({
  title: "✘ Qualification - (non-UK) country",
  items: {
    question: "In which country did you gain this qualification?",
    required: "Yes (if non-UK qualification)",
    api: {
      param: "qualifications.gcses[].awarding_body",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "needs to look for evidence that a qualification is of a standard equivalent to GCSE grade 4, not only in terms of its level, but also in terms of its breadth. Details of qualification can help determine if equivalent to GCSE"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"],
    notes: ["If we are able to use structured data, do we then need to capture information about the country of the awarding body?"]
  }
}) }}

{{ appProtocol({
  title: "✘ Qualification - (non-UK) equivalency",
  items: {
    question: "Do you know what UK qualification your maths qualification is equivalent to?",
    required: "Yes (if non-UK qualification)",
    api: {
      param: "qualifications.gcses[].equivalency_details",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["candidate"],
      what: "needs to provide evidence that their international qualification demonstrates a similar level and breadth as the equivalent UK qualification"
    }, {
      who: ["candidate"],
      what: "may already have a statement of comparability from [NARIC](https://www.naric.org.uk)"
    }, {
      who: ["provider"],
      what: "needs to look for evidence that a qualification is of a standard equivalent to GCSE grade 4, not only in terms of its level, but also in terms of its breadth. Details of qualification can help determine if equivalent to GCSE"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"],
    notes: ["Candidates can request a statement of comparability from [NARIC](https://www.naric.org.uk), or speak to a TTA who can certify equivalence"]
  }
}) }}

## English GCSE or equivalent

Candidates can update their answers before (and 5 working days after) submitting their application.

This question is required to [assess entry criteria](https://www.gov.uk/government/publications/initial-teacher-training-criteria/initial-teacher-training-itt-criteria-and-supporting-advice#c11-gcse-standard-equivalent):

> All accredited ITT providers must ensure that all entrants have achieved a standard equivalent to a grade 4 (see note 2) in the GCSE examinations in English and mathematics.

Providers should look for <q>further evidence of a breadth of achievement in English where applicants have achieved a GCSE grade 4 or above in English literature only</q>. We don’t currently make this distinction in the service.

{{ appProtocol({
  title: "Qualification - type",
  items: {
    question: "Type of qualification",
    required: "Yes",
    api: {
      param: "qualifications.gcses[].qualification_type",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "needs to ensure candidates have achieved a standard equivalent to a grade 4 in GCSE English"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: [
      "Providers will ask to see hard copies for any qualifications awarded",
      "In the future we can check any post-14 qualifications (awarded after 2006 in England, Wales and Northern Ireland) against the [Learning Records Service](https://www.gov.uk/topic/further-education-skills/learning-records-service)"]
  }
}) }}

{{ appProtocol({
  title: "Qualification - grade",
  items: {
    question: "What grade is your English qualification?",
    required: "Yes",
    api: {
      param: "qualifications.gcses[].grade",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "needs to ensure candidates have achieved a standard equivalent to a grade 4 in GCSE English"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: [
      "Providers will ask to see hard copies for any qualifications awarded",
      "In the future we can check any post-14 qualifications (awarded after 2006 in England, Wales and Northern Ireland) against the [Learning Records Service](https://www.gov.uk/topic/further-education-skills/learning-records-service)"]
  }
}) }}

{{ appProtocol({
  title: "Qualification - year",
  items: {
    question: "When was your English qualification awarded?",
    required: "Yes",
    api: {
      param: "qualifications.gcses[].award_year",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["service"],
      what: "may use this to validate qualification with LRS"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: [
      "Providers will ask to see hard copies for any qualifications awarded",
      "In the future we can check any post-14 qualifications (awarded after 2006 in England, Wales and Northern Ireland) against the [Learning Records Service](https://www.gov.uk/topic/further-education-skills/learning-records-service)"]
  }
}) }}

{{ appProtocol({
  title: "✘ Qualification - (non-UK) awarding body",
  items: {
    question: "What was the awarding organisation?",
    required: "Yes (if non-UK qualification)",
    api: {
      param: "qualifications.gcses[].awarding_body",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "needs to look for evidence that a qualification is of a standard equivalent to GCSE grade 4, not only in terms of its level, but also in terms of its breadth. Details of qualification can help determine if equivalent to GCSE"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"]
  }
}) }}

{{ appProtocol({
  title: "✘ Qualification - (non-UK) country",
  items: {
    question: "In which country did you gain this qualification?",
    required: "Yes (if non-UK qualification)",
    api: {
      param: "qualifications.gcses[].awarding_body",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "needs to look for evidence that a qualification is of a standard equivalent to GCSE grade 4, not only in terms of its level, but also in terms of its breadth. Details of qualification can help determine if equivalent to GCSE"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"],
    notes: ["If we are able to use structured data, do we then need to capture information about the country of the awarding body?"]
  }
}) }}

{{ appProtocol({
  title: "✘ Qualification - (non-UK) equivalency",
  items: {
    question: "Do you know what UK qualification your English qualification is equivalent to?",
    required: "Yes (if non-UK qualification)",
    api: {
      param: "qualifications.gcses[].equivalency_details",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["candidate"],
      what: "needs to provide evidence that their international qualification demonstrates a similar level and breadth as the equivalent UK qualification"
    }, {
      who: ["candidate"],
      what: "may already have a statement of comparability from [NARIC](https://www.naric.org.uk)"
    }, {
      who: ["provider"],
      what: "needs to look for evidence that a qualification is of a standard equivalent to GCSE grade 4, not only in terms of its level, but also in terms of its breadth. Details of qualification can help determine if equivalent to GCSE"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"],
    notes: ["Candidates can request a statement of comparability from [NARIC](https://www.naric.org.uk), or speak to a TTA who can certify equivalence"]
  }
}) }}

## Science GCSE or equivalent

Candidates can update their answers before (and 5 working days after) submitting their application.

This question is required to [assess entry criteria](https://www.gov.uk/government/publications/initial-teacher-training-criteria/initial-teacher-training-itt-criteria-and-supporting-advice#c11-gcse-standard-equivalent):

> All accredited ITT providers must ensure that all entrants have achieved a standard equivalent to a grade 4 (see note 2) in the GCSE examinations in English and mathematics and that all who intend to train to teach pupils aged 3-11 additionally have achieved a standard equivalent to a grade 4 in the GCSE examination in a science subject.

This means this question is only required for candidates applying to a Primary course.

{{ appProtocol({
  title: "Qualification - type",
  items: {
    question: "Type of qualification",
    required: "Yes (if applying for a Primary course)",
    api: {
      param: "qualifications.gcses[].qualification_type",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "needs to ensure candidates have achieved a standard equivalent to a grade 4 in a GCSE science subject"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: [
      "Providers will ask to see hard copies for any qualifications awarded",
      "In the future we can check any post-14 qualifications (awarded after 2006 in England, Wales and Northern Ireland) against the [Learning Records Service](https://www.gov.uk/topic/further-education-skills/learning-records-service)"]
  }
}) }}

{{ appProtocol({
  title: "Qualification - grade",
  items: {
    question: "What grade is your English qualification?",
    required: "Yes (if applying for a Primary course)",
    api: {
      param: "qualifications.gcses[].grade",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "needs to ensure candidates have achieved a standard equivalent to a grade 4 in a GCSE science subject"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: [
      "Providers will ask to see hard copies for any qualifications awarded",
      "In the future we can check any post-14 qualifications (awarded after 2006 in England, Wales and Northern Ireland) against the [Learning Records Service](https://www.gov.uk/topic/further-education-skills/learning-records-service)"],
    notes: ["Do candidates need to specify which subjects they obtained each grade in? (double or triple award science, for example)? Some HEI providers have asked to have information not only about the overall grade, but in which science subjects, too"]
  }
}) }}

{{ appProtocol({
  title: "Qualification - year",
  items: {
    question: "When was your English qualification awarded?",
    required: "Yes (if applying for a Primary course)",
    api: {
      param: "qualifications.gcses[].award_year",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["service"],
      what: "may use this to validate qualification with LRS"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: [
      "Providers will ask to see hard copies for any qualifications awarded",
      "In the future we can check any post-14 qualifications (awarded after 2006 in England, Wales and Northern Ireland) against the [Learning Records Service](https://www.gov.uk/topic/further-education-skills/learning-records-service)"]
  }
}) }}

{{ appProtocol({
  title: "✘ Qualification - (non-UK) awarding body",
  items: {
    question: "What was the awarding organisation?",
    required: "Yes (if applying for a Primary course with non-UK qualification)",
    api: {
      param: "qualifications.gcses[].awarding_body",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "needs to look for evidence that a qualification is of a standard equivalent to GCSE grade 4, not only in terms of its level, but also in terms of its breadth. Details of qualification can help determine if equivalent to GCSE"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"]
  }
}) }}

{{ appProtocol({
  title: "✘ Qualification - (non-UK) country",
  items: {
    question: "In which country did you gain this qualification?",
    required: "Yes (if applying for a Primary course with non-UK qualification)",
    api: {
      param: "qualifications.gcses[].awarding_body",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "needs to look for evidence that a qualification is of a standard equivalent to GCSE grade 4, not only in terms of its level, but also in terms of its breadth. Details of qualification can help determine if equivalent to GCSE"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"],
    notes: ["If we are able to use structured data, do we then need to capture information about the country of the awarding body?"]
  }
}) }}

{{ appProtocol({
  title: "✘ Qualification - (non-UK) equivalency",
  items: {
    question: "Do you know what UK qualification your English qualification is equivalent to?",
    required: "Yes (if applying for a Primary course with non-UK qualification)",
    api: {
      param: "qualifications.gcses[].equivalency_details",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["candidate"],
      what: "needs to provide evidence that their international qualification demonstrates a similar level and breadth as the equivalent UK qualification"
    }, {
      who: ["candidate"],
      what: "may already have a statement of comparability from [NARIC](https://www.naric.org.uk)"
    }, {
      who: ["provider"],
      what: "needs to look for evidence that a qualification is of a standard equivalent to GCSE grade 4, not only in terms of its level, but also in terms of its breadth. Details of qualification can help determine if equivalent to GCSE"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["Providers will ask to see hard copies for any qualifications awarded"],
    notes: ["Candidates can request a statement of comparability from [NARIC](https://www.naric.org.uk), or speak to a TTA who can certify equivalence"]
  }
}) }}

## Other relevant qualification(s)

Candidates can update their answers before (and 5 working days after) submitting their application.

{{ appProtocol({
  title: "Qualification - type",
  items: {
    question: "Type of qualification",
    required: "No",
    api: {
      param: "qualifications.other_qualifications[].qualification_type",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "wants to see that a candidate can demonstrate subject and curriculum knowledge at a sufficient level"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["In the future we can check any post-14 qualifications (awarded after 2006 in England, Wales and Northern Ireland) against the [Learning Records Service](https://www.gov.uk/topic/further-education-skills/learning-records-service)."]
  }
}) }}

{{ appProtocol({
  title: "Qualification - subject",
  items: {
    question: "Subject",
    required: "No",
    api: {
      param: "qualifications.other_qualifications[].subject",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "wants to see that a candidate can demonstrate subject and curriculum knowledge"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["In the future we can check any post-14 qualifications (awarded after 2006 in England, Wales and Northern Ireland) against the [Learning Records Service](https://www.gov.uk/topic/further-education-skills/learning-records-service)."]
  }
}) }}

{{ appProtocol({
  title: "Qualification - grade",
  items: {
    question: "Grade",
    required: "No",
    api: {
      param: "qualifications.other_qualifications[].grade",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "want to see that a candidate can demonstrate subject and curriculum knowledge at a sufficient level"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["In the future we can check any post-14 qualifications (awarded after 2006 in England, Wales and Northern Ireland) against the [Learning Records Service](https://www.gov.uk/topic/further-education-skills/learning-records-service)."]
  }
}) }}

{{ appProtocol({
  title: "Qualification - year",
  items: {
    question: "Year qualification was awarded",
    required: "No",
    api: {
      param: "qualifications.other_qualifications[].award_year",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["unknown"]
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["In the future we can check any post-14 qualifications (awarded after 2006 in England, Wales and Northern Ireland) against the [Learning Records Service](https://www.gov.uk/topic/further-education-skills/learning-records-service)."]
  }
}) }}

{{ appProtocol({
  title: "Qualification - institution",
  items: {
    question: "Institution where you studied",
    required: "No",
    api: {
      param: "qualifications.other_qualifications[].institution_details",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "may be interested in calibre of the institution studied at"
    }],
    what: ["Retrievable via API"],
    accuracy: ["In the future we can check any post-14 qualifications (awarded after 2006 in England, Wales and Northern Ireland) against the [Learning Records Service](https://www.gov.uk/topic/further-education-skills/learning-records-service)."],
    notes: [
      "This may be a want, more than a need.",
      "Not currently shown to providers"
    ]
  }
}) }}

{{ appProtocol({
  title: "✘ Qualification - (non-UK) country",
  items: {
    question: "Country (if outside UK)",
    required: "No (removed from MVP)",
    api: {
    param: "qualifications.other_qualifications[].institution_details",
    href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#qualification-object"
    },
    why: [{
      who: ["provider"],
      what: "may be interested in calibre of the institution studied at"
    }],
    what: ["Retrievable via API"],
    accuracy: ["N/A"],
    notes: ["If we are able to use structured data, do we then need to capture information about the country of the awarding body?"]
  }
}) }}

## Personal statement

Candidates can update their answers before (and 5 working days after) submitting their application.

{{ appProtocol({
  title: "Vocation",
  items: {
    question: "Why do you want to be a teacher?",
    required: "Yes",
    api: {
      param: "personal_statement",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#applicationattributes-object"
    },
    why: [{
      who: ["candidate"],
      what: "needs to demonstrate the distinct qualities that will make them an amazing teacher"
    }, {
      who: ["provider"],
      what: "needs to assess a candidate’s suitability, commitment and motivation for teaching"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["In the future we may be able to check for plagiarism, fraud and similarity (UCAS do this currently)"]
  }
}) }}

{{ appProtocol({
  title: "Subject knowledge",
  items: {
    question: "Enter your subject knowledge",
    required: "Yes",
    api: {
      param: "personal_statement",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#applicationattributes-object"
    },
    why: [{
      who: ["candidate"],
      what: "applying to a primary course needs an opportunity to showcase their broader subject knowledge"
    }, {
      who: ["provider"],
      what: "needs to assess a candidate’s suitability for the training in a particular subject. This is critical if a candidate is applying to teach a subject different to their degree"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["In the future we may be able to check for plagiarism, fraud and similarity (UCAS do this currently)"]
  }
}) }}

## Interview preferences

{{ appProtocol({
  title: "Candidate has interview preferences",
  items: {
    question: "Do you have any preferences for your interview?",
    required: "Yes",
    why: [{
      who: ["service"],
      what: "uses the answer to show/hide textarea"
    }],
    what: ["Answer not submitted as part of application"]
  }
}) }}

{{ appProtocol({
  title: "Interview preferences",
  items: {
    question: "What are your interview preferences?",
    required: "No",
    api: {
      param: "interview_preferences",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#applicationattributes-object"
    },
    why: [{
      who: ["candidate"],
      what: "needs to ensure providers are aware of any dates or circumstances that should be considered when scheduling an interview"
    }, {
      who: ["provider"],
      what: "may need to know whether a candidate has any additional interview requirements, so they can meet their needs"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["N/A"],
    notes: ["Some providers have indicated that they don’t want arranging interviews complicated by candidate's needs/lives. That said, if there are dates the candidate absolutely can't make, what sense is there in offering them an interview? If we continue to ask this question, we should set expectations that providers may ignore any date requests."]
  }
}) }}

## Referees (two required)

The reference process is a point of differentiation with UCAS, and requires more research to fully understand candidate and provider needs.

Candidates can update their answers before submitting, but not after. If a referee declines to give a reference, or fails to respond, they can submit details of a new referee.

{{ appProtocol({
  title: "✘ Reference type",
  items: {
    question: "What kind of reference is this?",
    required: "Yes",
    api: {
      param: "N/A"
    },
    why: [{
      who: ["service"],
      what: "uses this to determine which questions we ask a referee"
    }],
    what: ["Answer not submitted as part of application"]
  }
}) }}

{{ appProtocol({
  title: "Referee - name",
  items: {
    question: "Full name",
    required: "Yes",
    api: {
      param: "referees[].name",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#reference-object"
    },
    why: [{
      who: ["service"],
      what: "uses this to address referee in email correspondence"
    }],
    what: ["Appears in support interface. If the referee provides a reference, appears in the provider-facing interface and retrievable via API"],
    accuracy: ["Not checked. We could offer referees the ability to correct this information, but that might raise concerns about the true identity of the referee"]
  }
}) }}

{{ appProtocol({
  title: "Referee - email address",
  items: {
    question: "Email address",
    required: "Yes",
    api: {
      param: "referees[].email",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#reference-object"
    },
    why: [{
      who: ["service"],
      what: "uses this to contact a referee and request a reference"
    }, {
      who: ["provider"],
      what: "use this to validate that a reference is from an official work source (with the domain name used as a proxy)"
    }],
    what: ["Appears in support interface. If the referee provides a reference, appears in the provider-facing interface and retrievable via API"],
    accuracy: [
      "Address format is validated",
      "If email to the nominated referee bounces, we can request correct details from the candidate"
    ],
    notes: ["Should providers be assessing based on this information? We don’t surface to candidates that they need to submit professional email addresses. How do we accommodate candidates (career changers, people returning to the workplace, etc.) who may struggle to provide such information?"]
  }
}) }}

{{ appProtocol({
  title: "Referee - relationship to candidate",
  items: {
    question: "Relationship to referee",
    required: "Yes",
    api: {
      param: "referees[].relationship",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#reference-object"
    },
    why: [{
      who: ["provider"],
      what: "uses this to validate that reference is from a suitable source"
    }],
    what: ["Appears in support interface. If the referee provides a reference, appears in the provider-facing interface and retrievable via API"],
    accuracy: ["A referee might be able corroborate (though we don't currently show this information to referees)"]
  }
}) }}

## Submit

Candidates can update their answers before (and 5 working days after) submitting their application.

{{ appProtocol({
  title: "Candidate has something else to add",
  items: {
    question: "Is there anything else you would like to tell us about your application?",
    required: "Yes",
    why: [{
      who: ["service"],
      what: "uses the answer to show/hide textarea"
    }],
    what: ["Answer not submitted as part of application"]
  }
}) }}

{{ appProtocol({
  title: "Further information",
  items: {
    question: "Enter further information",
    required: "No",
    api: {
      param: "further_information",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#applicationattributes-object"
    },
    why: [{
      who: ["candidate"],
      what: "may want to disclose a disability or request a reasonable adjustment. With ‘training with a disability’ section removed, this is the only place in the application this information can be given"
    }, {
      who: ["candidate"],
      what: "may want to voluntarily disclose a criminal conviction.
      What do we do with it?"
    }],
    what: ["Appears in provider-facing interface and retrievable via API"],
    accuracy: ["N/A"],
    notes: [
      "Some HEIs really wanted to see that candidates had clearly stated they didn't have any criminal convictions, especially if interviews take place at a school. Others do not undertake safeguarding obligations for interview, but prior to placement.",
      "[Trello card - DBS guidance and criminal records checks](https://trello.com/c/InaE3OPE/101)"
    ]
  }
}) }}

## Equality monitoring

Candidates can update their answers before submitting. We don’t ask these questions again if a candidate returns to edit their application within 5 working day amendment period.

{{ appProtocol({
  title: "Sex",
  items: {
    question: "What is your sex?",
    required: "No",
    api: {
      param: "hesa_itt_data.sex",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#hesaittdata-object"
    },
    why: [{
      who: ["hesa"],
      what: "requires this to “monitor equal opportunities issues in the higher education sector and support higher education providers (HEPs) in meeting their obligations under the Equality Act 2010”"
    }],
    what: ["Appears in provider-facing interface and retrievable via API only once the application status has changed to ‘enrolled’"],
    accuracy: ["N/A"],
    history: ["/apply-for-teacher-training/equality-monitoring"]
  }
}) }}

{{ appProtocol({
  title: "Disability",
  items: {
    question: "Are you disabled?
      Please select all that apply to you",
    required: "No",
    api: {
      param: "hesa_itt_data.disability",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#hesaittdata-object"
    },
    why: [{
      who: ["hesa"],
      what: "requires this to “permit disability-based analysis; for monitoring levels and trends in participation by particular groups of people; to permit analysis based on type of disability”"
    }],
    what: ["Appears in provider-facing interface and retrievable via API only once the application status has changed to ‘enrolled’"],
    accuracy: ["N/A"],
    history: ["/apply-for-teacher-training/equality-monitoring"]
  }
}) }}

{{ appProtocol({
  title: "Ethnicity",
  items: {
    question: "What is your ethnic group?
      Which of the following best describes your [group] background?",
    required: "No",
    api: {
      param: "hesa_itt_data.ethnicity",
      href: "https://www.apply-for-teacher-training.education.gov.uk/api-docs/reference/#hesaittdata-object"
    },
    why: [{
      who: ["hesa"],
      what: "requires this to “monitor equal opportunities issues in the higher education sector and support higher education providers (HEPs) in meeting their obligations under the Equality Act 2010”"
    }],
    what: ["Appears in provider-facing interface and retrievable via API only once the application status has changed to ‘enrolled’"],
    accuracy: ["N/A"],
    notes: ["GOV.UK Design System has guidance on [asking users for their ethnic group](https://design-system.service.gov.uk/patterns/ethnic-group/)"],
    history: ["/apply-for-teacher-training/equality-monitoring"]
  }
}) }}
