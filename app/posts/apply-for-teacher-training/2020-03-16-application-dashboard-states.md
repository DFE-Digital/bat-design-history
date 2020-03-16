---
title: Application dashboard
description: How the dashboard looks at different stages of an application
date: 2020-03-16
---
How the dashboard looked at different stages of an application as of March 2020.

Each state shows a different generated application, with between 1 and 3 choices. Any given state could show up to 3 choices.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Awaiting references",
      img: { src: "01-awaiting-references.png" },
      caption: "The candidate submits their application choices with a list of referees. Until 2 references have been received all applications remain in the Awaiting references state. The providers don’t see the application at this stage."
    }, {
      text: "Waiting to be sent",
      img: { src: "02-waiting-to-be-sent.png" },
      caption: "The references have come back and have been added to the application. Candidates are allowed a cooling-off period of 5 days to modify their application before it’s sent to providers. They can’t modify the references."
    }, {
      text: "Pending decision from provider",
      img: { src: "03-pending-decision-from-provider.png" },
      caption: "Providers only see the application after the references have come back and have been added to the application and 5 days have elapsed for the candidate to review and modify the application. When both of these prerequisites are met the application moves to the Awaiting provider decision state."
    }, {
      text: "Offer made (pending decision from candidate)",
      img: { src: "04-offer-made-pending-decision-from-candidate.png" },
      caption: "The provider has made an offer to the candidate. The candidate has to accept or reject the offer, which sets the application status to ‘Pending conditions’. We assume that all offers have some conditions, even if there are no academic conditions."
    }, {
      text: "Provider rejected",
      img: { src: "04-provider-rejected.png" },
      caption: "The provider has rejected the candidate’s application."
    }, {
      text: "Candidate accepted offer pending conditions",
      img: { src: "05-candidate-accepted-offer-pending-conditions.png" },
      caption: "Provider is waiting for the candidate to prove that they have met the conditions."
    }, {
      text: "Candidate declined offer",
      img: { src: "05-candidate-declined-offer.png" },
      caption: "The candidate has declined the offer."
    }, {
      text: "Candidate met conditions (recruited)",
      img: { src: "06-candidate-met-conditions-recruited.png" },
      caption: "When the provider confirms that the offer conditions have been met, the application is marked ‘recruited’."
    }, {
      text: "Conditions of offer not met",
      img: { src: "06-conditions-of-offer-not-met.png" },
      caption: "The candidate did not meet the conditions set out in the offer."
    }, {
      text: "Provider has withdrawn offer",
      img: { src: "06-provider-has-withdrawn-offer.png" }
    }, {
      text: "Candidate enrolled",
      img: { src: "07-candidate-enrolled.png" },
      caption: "Once the candidate has completed the enrolment process, the provider confirms their enrolment onto the training programme. Since this status would be used to claim bursaries/grants from DfE, the provider may delay enrolling the trainee until a few weeks after the start of the training, since trainees can still not show up on the first day or drop out within the first couple of weeks. This reduces the risk that DfE over-pays that provider for training they didn’t deliver and has to reconcile later on. The candidate’s HESA equality monitoring information is made available to the provider."
    }, {
      text: "Candidate has withdrawn all their choices",
      img: { src: "08-candidate-has-withdrawn-all-their-choices.png" },
      caption: "If the candidate withdraws an application in progress it moves to the Withdrawn (end) state."
    }, {
      text: "Details of offer",
      img: { src: "09-details-of-offer.png" }
    }, {
      text: "Are you sure you want to accept this offer?",
      img: { src: "10-are-you-sure-you-want-to-accept.png" }
    }, {
      text: "Are you sure you want to decline this offer?",
      img: { src: "11-are-you-sure-you-want-to-decline.png" }
    }]
}) }}
