import type { RoCopy } from '@/lib/ro/types'
import {
  RO_AMC_PATH,
  RO_DUE_PATH,
  RO_EXCEL_PATH,
  SUPPORT_EMAIL,
} from '@/lib/ro/paths'

export const roCopyEn: RoCopy = {
  eyebrow: 'For Indian RO dealers, installers and service centres',
  productName: 'LeadBuddie RO',
  h1: 'Customer records, service jobs and AMC renewals in one place.',
  lede:
    'Your customer records, RO installation details, upcoming services, engineer jobs and AMC renewals in one place. Start with your existing customer Excel file, even without connecting WhatsApp.',
  intro:
    'LeadBuddie RO is water purifier service software for India. It is built for residential RO dealers, installers, service centres and AMC businesses that look after about 200 to 5,000 or more customers, and today track the work in Excel, a paper register, or software that does not connect.',
  primaryCta: 'Sign up and upload your Excel',
  secondaryCta: 'See the customer Excel template',
  trust: [
    'No WhatsApp needed to start',
    'Bring the customer file you already have',
    'Service dues, job cards and AMC dates together',
  ],
  audienceEyebrow: 'Who it is for',
  audienceTitle: 'The RO businesses that have outgrown a register.',
  audienceLede:
    'You already have the customers. The trouble is finding the purifier, the next service and the AMC end date when the phone rings.',
  audiences: [
    {
      title: 'Residential RO dealers',
      copy: 'Homes you installed and still service, without a second list for complaints.',
    },
    {
      title: 'Installers',
      copy: 'The purifier model, the installation date and the address stay on one record.',
    },
    {
      title: 'Service centres',
      copy: 'Service requests, engineer jobs and what was done last time, in one list.',
    },
    {
      title: 'AMC businesses',
      copy: 'Contract start, end and amount sit with the customer, not in a side file.',
    },
  ],
  capabilityEyebrow: 'What you can run',
  capabilityTitle: 'The service work, not a new way to sell.',
  capabilityLede:
    'These are the parts of an RO service business LeadBuddie RO actually keeps. Nothing here is a future idea.',
  capabilities: [
    {
      id: 'customers',
      title: 'Customer database and Excel import',
      copy: 'Keep every customer in one database. Sign up and upload the Excel file your office already uses.',
    },
    {
      id: 'installations',
      title: 'RO purifier and installation records',
      copy: 'Model, installation date and the address stay on the customer, so nobody asks “which unit was it?” again.',
    },
    {
      id: 'dues',
      title: 'Service schedules and upcoming dues',
      copy: 'See which services are coming up, instead of hunting through a register or an old sheet.',
    },
    {
      id: 'requests',
      title: 'Customer service requests',
      copy: 'When a customer asks for service, the request sits on their record for the office to act on.',
    },
    {
      id: 'engineers',
      title: 'Engineer assignment and digital job cards',
      copy: 'Assign an engineer and hand over a digital job card with the customer and the purifier.',
    },
    {
      id: 'history',
      title: 'Job completion, history and payments',
      copy: 'Close the job, keep the service history, and track what was paid against that visit.',
    },
    {
      id: 'amc',
      title: 'AMC tracking and renewals',
      copy: 'AMC management for RO dealers: start, end and amount stay on the customer so renewals are a list, not a memory.',
    },
  ],
  whatsappEyebrow: 'WhatsApp is optional',
  whatsappTitle: 'The whole flow works manually. WhatsApp automates it.',
  whatsappLede:
    'Sign up and upload your customer Excel. You can run the service business by hand. Connect WhatsApp only when you want the reminders and follow-ups to go out on their own.',
  withoutKicker: 'Without WhatsApp',
  withoutTitle: 'The whole flow works manually',
  withoutPoints: [
    'Customers',
    'Service due',
    'Booking',
    'Engineer assignment',
    'Job cards',
    'Payments',
    'AMC renewals',
  ],
  withKicker: 'When you connect WhatsApp',
  withTitle: 'Reminders, follow-ups and more',
  withCopy:
    'Connecting WhatsApp automates reminders, follow-ups and more. WhatsApp conversation charges may apply separately via your Meta account.',
  engineerEyebrow: 'Included with Growth',
  engineerTitle: 'LeadBuddie Engineer, on the engineer’s phone.',
  engineerLede:
    'The LeadBuddie Engineer app is live for field engineers. They see the jobs you assign, open a digital job card, and mark the job complete from their phone.',
  engineerPoints: [
    { title: 'Assigned jobs', copy: 'The visit you assign shows up on the engineer’s phone.' },
    { title: 'Digital job cards', copy: 'Customer, address and purifier travel with the job.' },
    { title: 'Job completion', copy: 'The engineer closes the job from the phone when the visit is done.' },
  ],
  engineerFoot: 'Included with Growth. Your office still assigns the work.',
  flowEyebrow: 'A normal working day',
  flowTitle: 'From the Excel file to a closed job.',
  flowLede:
    'The same customer record carries the purifier, the due date, the engineer’s job and the AMC. Your office does not retype it at each step.',
  flow: [
    { title: 'Upload the Excel you have', copy: 'Names, phones, addresses, models and the dates you already keep.' },
    { title: 'See who is due', copy: 'Upcoming services and open service requests on one list.' },
    { title: 'Assign the engineer', copy: 'A digital job card with the customer and the purifier.' },
    { title: 'Close the visit', copy: 'Completion, service history and the payment on that job.' },
    { title: 'Catch the renewal', copy: 'AMC end dates sit with the customer, ready for a follow-up.' },
  ],
  exampleLabel: 'Example layout',
  exampleTitle: 'What the office looks at',
  exampleRows: [
    { label: 'Service due', detail: 'Next service date on the customer record' },
    { label: 'Service request', detail: 'Waiting for an engineer to be assigned' },
    { label: 'AMC renewal', detail: 'End date and amount on the same record' },
  ],
  jobCardTitle: 'On the digital job card',
  jobCardItems: ['Customer and address', 'Area and phone', 'Purifier model', 'What the visit is for'],
  pricingEyebrow: 'LeadBuddie RO pricing',
  pricingTitle: 'Start on Growth. The first month is free.',
  pricingLede:
    'Growth is free for the first month after signup, then ₹1,999 per month. It includes the customer records, the service flow and the LeadBuddie Engineer app. This offer is for LeadBuddie RO.',
  priceListLabel: 'Official LeadBuddie RO price list',
  growthName: 'Growth',
  growthKicker: 'The plan for an RO service centre',
  growthTimeline: [
    { when: 'First month', price: '₹0', detail: 'Free after signup' },
    { when: 'Then', price: '₹1,999', detail: 'Per month' },
  ],
  growthIncludes: 'What you run on Growth',
  growthPoints: [
    'Customer database and Excel import',
    'RO purifier and installation records',
    'Service schedules and upcoming dues',
    'Customer service requests',
    'Engineer assignment and digital job cards',
    'Job completion, service history and payment tracking',
    'AMC tracking and renewals',
    'LeadBuddie Engineer app for field engineers',
    'Full manual use without WhatsApp',
  ],
  growthCta: 'Start Growth and upload Excel',
  scaleName: 'Scale',
  scalePrice: '₹3,999',
  scalePeriod: 'per month',
  scaleKicker: 'Water-treatment Autopilot',
  scaleCopy:
    'Scale is for the office that wants the chasing done. Autopilot works on top of the same customer, service and AMC records.',
  scalePoints: [
    'Chase AMC renewals',
    'Book a service from a customer reply',
    'Assign the engineer',
    'Follow up on payment',
  ],
  scaleCta: 'Sign up for Scale',
  starterNote:
    'Need a smaller start? Starter is ₹1,499 per month. Growth is the plan we set up for RO dealers who want the service records, the Engineer app and AMC dates in one place.',
  annualLead: 'Pay yearly for a further discount —',
  annualCta: 'talk to our team',
  pricingNote:
    'WhatsApp conversation charges may apply separately via your Meta account. You can use LeadBuddie RO fully without connecting WhatsApp.',
  guidesEyebrow: 'Practical guides',
  guidesTitle: 'Read the part you are stuck on.',
  guidesLede: 'Short guides for the three jobs RO offices ask about first. No case studies and no invented numbers.',
  guidesCta: 'Read the guide',
  guides: [
    {
      href: RO_AMC_PATH,
      label: 'AMC',
      title: 'RO AMC renewal tracking',
      copy: 'Keep AMC start, end and amount on the customer, and see renewals before they lapse.',
    },
    {
      href: RO_DUE_PATH,
      label: 'Service due',
      title: 'RO service due reminders',
      copy: 'Upcoming services, customer requests and the engineer job that closes the visit.',
    },
    {
      href: RO_EXCEL_PATH,
      label: 'Excel',
      title: 'RO customers from Excel',
      copy: 'Download a sample customer sheet and upload the file you already maintain.',
    },
  ],
  faqTitle: 'Questions RO dealers ask first',
  faqLede: `Support is a real person at ${SUPPORT_EMAIL}.`,
  faq: [
    {
      question: 'Do I need WhatsApp?',
      answer:
        'No. Without WhatsApp the whole flow works manually: customers, service due, booking, engineer assignment, job cards, payments and AMC renewals. Connecting WhatsApp automates reminders, follow-ups and more. WhatsApp conversation charges may apply separately via your Meta account.',
    },
    {
      question: 'Can I import my Excel?',
      answer:
        'Yes. Sign up at app.leadbuddie.com and upload the customer Excel you already use. A sample file, with the columns we expect, is on the Excel guide.',
    },
    {
      question: 'Is the first month free?',
      answer:
        'Yes. Growth is free for the first month after signup, then ₹1,999 per month. Pay yearly for a further discount — talk to our team.',
    },
    {
      question: 'How do I contact support?',
      answer: `Email ${SUPPORT_EMAIL}. Write from the address you used to sign up and tell us what you were trying to do.`,
    },
    {
      question: 'Who is LeadBuddie RO for?',
      answer:
        'Indian residential RO dealers, installers, service centres and AMC businesses that look after about 200 to 5,000 or more customers and currently track the work in Excel, a register, or disconnected software.',
    },
    {
      question: 'What does Scale add?',
      answer:
        'Scale is ₹3,999 per month. Water-treatment Autopilot chases renewals, books a service from a customer reply, assigns the engineer and follows up on payment. Growth already includes the LeadBuddie Engineer app.',
    },
  ],
  supportLabel: 'Email support',
  finalEyebrow: 'Start from the file you have',
  finalTitle: 'Upload your customer Excel and open the service list.',
  finalLede:
    'Sign up for LeadBuddie RO. Growth is free for the first month. WhatsApp can wait until you want notifications.',
  finalCta: 'Sign up and upload your Excel',
}
