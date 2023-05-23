---

title: Creating a new provider onboarding form and accompanying email

description: We made a Microsoft onboarding form and updated the content for the form and support team email

date: 2023-05-11

---

{% from "email/macro.njk" import appEmail %}

<!-- markdownlint-disable MD001 MD025 -->

To onboard providers to Publish teacher training courses (Publish), the Support team use a Google form to collect the details we will need from the provider. They input the details from the form in the ‘Accredited providers’ section in Support for Publish (Support).

As the department has now stopped using the Google suite, we needed to create a Microsoft version of the form to onboard providers to Publish.

We took the opportunity to review the content on the forms and update them.

## What we changed

The Support team were using two forms; one for lead schools and one for accredited providers.

We realised that we no longer needed the lead school form, and we could combine the two forms in to one. We also discovered that the Support team onboard the provider to Manage teacher training courses (Manage) at the same time.

### ‘Add an organisation to Publish and Manage’ Microsoft form

We updated the form to:

* say that we will also onboard the provider’s organisation to Manage, as well as Publish
* remove any unnecessary questions that were not required for onboarding, such as ‘What is your job role?’
* make it clear that the email address, phone number and postal address we collect is used in the ‘Contact details’ section on Find postgraduate teacher training (Find)
* only ask for the unique reference number (URN) if they are not an accredited provider

We include a short link to the form from the email (redacted from the email below for the purposes of this design history).

### Email to accompany the form

When an organisation wants to onboard to Publish, the Support team will send them an email containing a link to the form. We updated this to make it more concise and include mention of onboarding to Manage.

{{ appEmail({
  subject: "Add your organisation to Publish and Manage",
  content: "

Hello (name),

Publish teacher training courses is a service that gives initial teacher training providers a way to add courses and publish them to Find postgraduate teacher training. Candidates can then use Find to search for courses and apply to them.

Manage teacher training applications allows you to view, manage and make decisions on applications.

# Adding your organisation

We need some details from you to add your organisation to Publish and Manage. Please complete the following form: [link to form].

Once we’ve added your organisation, you’ll receive an email to let you know.

# Get help

If you need help, contact us at becomingateacher@digital.education.gov.uk.
"
}) }}

## Further considerations

Using a form to collect this data can be time consuming for both the provider and the department. There is also room for error as details need to be transferred from one data source (the form) to another (Support).

We will look at ways to improve this process and collect this information in a safer and more efficient way.

<!-- markdownlint-enable MD001 MD025 -->
