import type { RoGuideContent } from '@/lib/ro/types'
import {
  RO_AMC_PATH,
  RO_DUE_PATH,
  RO_EXCEL_PATH,
  RO_HI_PATH,
  RO_PATH,
  RO_PRICING_PATH,
  RO_TA_PATH,
  RO_UPDATED,
  SUPPORT_EMAIL,
} from '@/lib/ro/paths'

const relatedBase = [
  { href: RO_PATH, label: 'LeadBuddie RO' },
  { href: RO_PRICING_PATH, label: 'LeadBuddie RO pricing' },
  { href: RO_HI_PATH, label: 'LeadBuddie RO in Hindi' },
  { href: RO_TA_PATH, label: 'LeadBuddie RO in Tamil' },
  { href: RO_AMC_PATH, label: 'RO AMC renewal tracking' },
  { href: RO_DUE_PATH, label: 'RO service due reminders' },
  { href: RO_EXCEL_PATH, label: 'RO customers from Excel' },
]

function relatedExcept(path: string) {
  return relatedBase.filter((item) => item.href !== path)
}

export const amcGuide: RoGuideContent = {
  path: RO_AMC_PATH,
  eyebrow: 'AMC management for RO dealers',
  title: 'RO AMC renewal tracking for dealers who still live in Excel',
  description:
    'Track RO AMC start, end and amount on the customer record. See renewals before they lapse, without WhatsApp. LeadBuddie RO for Indian dealers.',
  keywords:
    'AMC management software for RO dealers, RO AMC renewal tracking, water purifier AMC software India, AMC renewal reminder RO, LeadBuddie RO',
  updated: RO_UPDATED,
  blocks: [
    {
      type: 'p',
      text: 'An annual maintenance contract is easy to sell and easy to lose. The end date sits in a register, a notebook, or a column nobody filters. The month it expires, the office is on installations and complaints. The customer quietly takes the next service somewhere else.',
    },
    {
      type: 'p',
      text: 'LeadBuddie RO is AMC management software for RO dealers. AMC start, AMC end and AMC amount stay on the same customer as the purifier and the service history. You can run that list without connecting WhatsApp.',
    },
    {
      type: 'h2',
      id: 'what-to-track',
      text: 'What to keep on every RO AMC',
    },
    {
      type: 'p',
      text: 'A renewal call is short when the record is complete. These are the fields that belong together. They are the same columns as the sample customer Excel.',
    },
    {
      type: 'ul',
      items: [
        'Customer name and phone, so the right person is called.',
        'Address and area, so the engineer knows which locality the home is in.',
        'Purifier model and installation date, so the conversation is about their unit.',
        'AMC start, AMC end and AMC amount.',
        'Last service date and next service due. A renewal is easier when the last visit is on the same screen.',
      ],
    },
    {
      type: 'h2',
      id: 'where-dates-go',
      text: 'Where renewal dates go missing',
    },
    {
      type: 'p',
      text: 'Excel can store the dates. It does not open itself on Monday and show whose contract ends this week, next to the purifier and the last payment. A counter register is worse once you look after a few hundred homes. Dealers with 200 to 5,000 or more customers usually have the data. They do not have it in one place.',
    },
    {
      type: 'p',
      text: 'Disconnected software makes the same hole. The installation is in one tool, the complaint in WhatsApp, the AMC amount in a sheet the accountant owns. The person who should call does not see all three.',
    },
    {
      type: 'h2',
      id: 'how-leadbuddie-ro-tracks-amc',
      text: 'How LeadBuddie RO tracks AMC renewals',
    },
    {
      type: 'p',
      text: 'Sign up and upload the customer Excel you already keep. If your sheet is messy, start from the sample template and copy your rows into those columns: customer name, phone, address, area, purifier model, installation date, last service date, next service due, AMC start, AMC end, AMC amount.',
    },
    {
      type: 'p',
      text: 'After the import, AMC tracking and renewals live on the customer. Your office can see who is coming to an end without opening a second file. Service history and payments from earlier visits stay on that same record, so the renewal conversation is not a cold call.',
    },
    {
      type: 'callout',
      title: 'WhatsApp is not required',
      text: 'Without WhatsApp the whole flow works manually: customers, service due, booking, engineer assignment, job cards, payments and AMC renewals. Connecting WhatsApp automates reminders, follow-ups and more. Conversation charges may apply separately via your Meta account.',
    },
    {
      type: 'h2',
      id: 'when-you-want-the-chase-done',
      text: 'When you want the follow-up done for you',
    },
    {
      type: 'p',
      text: 'Growth is the plan most RO service centres start on. It is free for the first month after signup, then ₹1,999 per month. Growth includes the LeadBuddie Engineer app, so field engineers see assigned jobs, digital job cards and job completion on their phone. On Growth your team works the renewal list. Pay yearly for a further discount — talk to our team.',
    },
    {
      type: 'p',
      text: 'Scale is ₹3,999 per month. Water-treatment Autopilot chases renewals, books a service from a customer reply, assigns the engineer and follows up on payment. Your team handles what Autopilot cannot close. A smaller Starter plan is ₹1,499 per month if you want a lighter start.',
    },
    {
      type: 'h2',
      id: 'a-monday-list',
      text: 'A Monday list that is actually usable',
    },
    {
      type: 'p',
      text: 'Pick the contracts that end soon. For each one, the office should be able to see the customer, the area, the purifier, the AMC amount and whether a service is also due. Call, note the answer, and if they want a visit, raise a service request and assign an engineer a digital job card. When the job is done, completion, service history and payment stay on the record.',
    },
    {
      type: 'p',
      text: 'That is the whole loop. It does not need a new register, and it does not need WhatsApp on day one.',
    },
  ],
  faq: [
    {
      question: 'Does RO AMC tracking need WhatsApp?',
      answer:
        'No. AMC start, end and amount stay on the customer record without WhatsApp. Notifications and automation are optional once you connect it. Conversation charges may apply separately via your Meta account.',
    },
    {
      question: 'Can I bring AMC dates across from Excel?',
      answer:
        'Yes. Upload your customer Excel when you sign up. The sample template includes AMC start, AMC end and AMC amount.',
    },
    {
      question: 'How much is LeadBuddie RO for AMC renewals?',
      answer:
        'Growth is free for the first month after signup, then ₹1,999 per month, including the LeadBuddie Engineer app. Scale, with Autopilot for renewals, booking, engineer assignment and payment follow-up, is ₹3,999 per month. Pay yearly for a further discount — talk to our team.',
    },
  ],
  related: relatedExcept(RO_AMC_PATH),
}

export const serviceDueGuide: RoGuideContent = {
  path: RO_DUE_PATH,
  eyebrow: 'Water purifier service software',
  title: 'RO service due reminders without a second register',
  description:
    'RO service due reminders for Indian dealers. Upcoming services, customer requests, engineer job cards and service history in LeadBuddie RO. WhatsApp optional.',
  keywords:
    'RO service due reminders, RO service management software, water purifier service software India, RO service schedule, engineer job card, LeadBuddie RO',
  updated: RO_UPDATED,
  blocks: [
    {
      type: 'p',
      text: 'A residential RO is sold once and serviced for years. The next visit is usually the last service plus the interval your team already uses, written on a card, in Excel, or in someone’s memory. When that date passes and nobody calls, the customer complains or leaves. The installation you were paid for becomes someone else’s service income.',
    },
    {
      type: 'p',
      text: 'LeadBuddie RO is RO service management software for that gap. Service schedules and upcoming dues sit next to the customer and the purifier. You can work the list by phone. WhatsApp reminders are optional, not the starting point.',
    },
    {
      type: 'h2',
      id: 'dates-that-matter',
      text: 'The dates that matter on a service record',
    },
    {
      type: 'ul',
      items: [
        'Installation date — when the unit went in, and the start of its history.',
        'Last service date — the visit you actually completed, not a date someone hoped for.',
        'Next service due — the date your office will work from.',
        'Customer phone, address and area — so the engineer is not guessing the locality.',
        'Purifier model — so the van carries the right idea of the job.',
      ],
    },
    {
      type: 'p',
      text: 'If a date in the old sheet is blank, leave it blank and fill it when you know it. Do not invent a due date to make the column look full. A wrong date is worse than an empty one, because the office will trust it.',
    },
    {
      type: 'h2',
      id: 'from-due-date-to-closed-job',
      text: 'From a due date to a closed job',
    },
    {
      type: 'p',
      text: 'Two things put a customer on today’s work. A service schedule says they are due. Or they raise a service request — a call, a walk-in, a message your office types onto the record. Both should land on the same customer, not in a separate complaint book.',
    },
    {
      type: 'p',
      text: 'Your office then assigns an engineer and gives them a digital job card: who the customer is, where they are, which purifier, and what the visit is for. When the engineer finishes, you record job completion, the service history and the payment. The next due can be set from the visit you actually did.',
    },
    {
      type: 'callout',
      title: 'What this is not',
      text: 'LeadBuddie RO does not guess a service date for you. The schedule comes from the dates you imported or entered. Empty dates stay empty until your team fills them.',
    },
    {
      type: 'h2',
      id: 'reminders-without-whatsapp',
      text: 'Reminders without making WhatsApp compulsory',
    },
    {
      type: 'p',
      text: 'Without WhatsApp the whole flow works manually: customers, service due, booking, engineer assignment, job cards, payments and AMC renewals. Your office can call from the due list. Field engineers still get assigned jobs, a digital job card and job completion on the LeadBuddie Engineer app, which is included with Growth.',
    },
    {
      type: 'p',
      text: 'Connecting WhatsApp automates reminders, follow-ups and more. Conversation charges may apply separately via your Meta account. On Scale (₹3,999 per month), water-treatment Autopilot can book a service from a customer reply, assign the engineer, follow up on payment, and chase AMC renewals.',
    },
    {
      type: 'h2',
      id: 'start-from-excel',
      text: 'Start from the Excel you already have',
    },
    {
      type: 'p',
      text: 'You do not need a fresh register. Download the sample customer sheet, line your columns up, and upload the file when you sign up. Growth is free for the first month after signup, then ₹1,999 per month. Starter, if you want a smaller plan, is ₹1,499 per month. Pay yearly for a further discount — talk to our team.',
    },
    {
      type: 'p',
      text: 'Service dues and AMC end dates are different lists that should still share a customer. A home can be due for a filter change and also be a month from the end of the contract. Seeing both is how a service centre stops doing the visit and forgetting the renewal, or chasing the renewal and missing the complaint.',
    },
  ],
  faq: [
    {
      question: 'Can I see upcoming RO services without WhatsApp?',
      answer:
        'Yes. Service schedules and upcoming dues are in LeadBuddie RO even when WhatsApp is not connected. Your team can call from that list.',
    },
    {
      question: 'What is on the engineer job card?',
      answer:
        'The customer, the address, the purifier and the job the engineer is assigned. When the job is completed, the service history and the payment stay on the record.',
    },
    {
      question: 'Will LeadBuddie RO invent a service due date?',
      answer:
        'No. Due dates come from the dates you import or enter. If the old sheet has no date, that field stays empty until you fill it.',
    },
  ],
  related: relatedExcept(RO_DUE_PATH),
}

export const excelGuide: RoGuideContent = {
  path: RO_EXCEL_PATH,
  eyebrow: 'RO customer Excel',
  title: 'Manage RO customers from the Excel file you already have',
  description:
    'Move RO customers out of Excel without starting from zero. Download a sample customer sheet and upload it to LeadBuddie RO. WhatsApp is optional.',
  keywords:
    'RO customer Excel, manage RO customers from Excel, water purifier customer Excel template, RO dealer customer import, LeadBuddie RO',
  updated: RO_UPDATED,
  blocks: [
    {
      type: 'p',
      text: 'Most RO dealers already have the customer list. It is an Excel file, sometimes two, sometimes a register that was typed up later. The phones are there. The models are mostly there. The AMC dates are in a column someone understands and everyone else is afraid to sort.',
    },
    {
      type: 'p',
      text: 'LeadBuddie RO lets you start with that file. Sign up, upload the customer Excel, and use the customer database, installation records, service dues, requests, engineer job cards, service history, payments and AMC renewals. You can do all of that without connecting WhatsApp.',
    },
    {
      type: 'h2',
      id: 'columns',
      text: 'Columns to prepare',
    },
    {
      type: 'p',
      text: 'Use one row per customer. The sample file uses these columns. Match them so the sheet is ready to upload.',
    },
    {
      type: 'table',
      caption: 'Columns in the LeadBuddie RO customer template',
      headers: ['Column', 'What to put'],
      rows: [
        ['Customer name', 'The person your office asks for'],
        ['Phone', 'A mobile number, one format for the whole sheet'],
        ['Address', 'House or flat and street'],
        ['Area', 'Locality your engineer already uses, such as a neighbourhood name'],
        ['Purifier model', 'The RO unit you installed'],
        ['Installation date', 'When it was installed, or blank if you do not know'],
        ['Last service date', 'The last visit you actually completed, or blank'],
        ['Next service due', 'The next date your team will work from, or blank'],
        ['AMC start', 'Contract start, or blank if there is no AMC'],
        ['AMC end', 'Contract end, or blank'],
        ['AMC amount', 'The renewal amount as a number, or blank'],
      ],
    },
    {
      type: 'h2',
      id: 'download',
      text: 'Download the sample customer file',
    },
    {
      type: 'p',
      text: 'The file has three sample rows so you can see the shape. They are not real customers. Replace them with your own rows before you upload. Do not upload the sample unchanged.',
    },
    { type: 'downloads' },
    {
      type: 'p',
      text: 'The same columns are in the Excel file and the CSV file. CSV opens in Excel. Dates in the sample are written as YYYY-MM-DD so a day and a month are not swapped. Phone numbers are text, so Excel does not turn them into a scientific number.',
    },
    {
      type: 'h2',
      id: 'a-clean-sheet',
      text: 'A sheet that is easier to upload',
    },
    {
      type: 'ul',
      items: [
        'One row per customer. Do not merge cells.',
        'Keep phone numbers consistent. Ten digits is enough if the whole list is Indian mobiles.',
        'Use a real date, or leave the cell empty. Do not type “NA” or “-” into a date column.',
        'Put the AMC amount as a number, without the rupee sign.',
        'If you do not know a model or a date, leave it blank. Fill it when the next visit tells you.',
      ],
    },
    {
      type: 'callout',
      title: 'We will not pretend the old file is perfect',
      text: 'Old lists have duplicate names and missing phones. Upload the file you have. Empty fields stay empty until your team fills them. LeadBuddie RO does not invent a service date to fill a gap.',
    },
    {
      type: 'h2',
      id: 'after-import',
      text: 'What you can do after the file is in',
    },
    {
      type: 'p',
      text: 'The customer database is the base. On each customer you can keep the RO purifier and installation, see service schedules and upcoming dues, log a service request, assign an engineer a digital job card, and when the job is done record completion, service history and payment. AMC start, end and amount stay there for renewals.',
    },
    {
      type: 'p',
      text: 'Without WhatsApp that flow works manually. Connecting WhatsApp automates reminders, follow-ups and more. Conversation charges may apply separately via your Meta account. Growth also includes the LeadBuddie Engineer app: assigned jobs, digital job cards and job completion on the engineer’s phone. On Scale, Autopilot can chase renewals, book a service from a customer reply, assign the engineer and follow up on payment.',
    },
    {
      type: 'h2',
      id: 'price',
      text: 'What signup costs',
    },
    {
      type: 'p',
      text: 'Growth is free for the first month after signup, then ₹1,999 per month. Scale is ₹3,999 per month. Starter, a smaller option, is ₹1,499 per month. Pay yearly for a further discount — talk to our team. Support is hello@hutliv.com — write if the sheet will not upload and say which column is causing trouble.',
    },
  ],
  faq: [
    {
      question: 'Can I import my RO customer Excel?',
      answer:
        'Yes. Sign up at app.leadbuddie.com and upload the customer file you already use. A sample Excel and CSV, with the columns listed on this page, is available to download.',
    },
    {
      question: 'Do I need WhatsApp before I upload?',
      answer:
        'No. Without WhatsApp the whole flow works manually. Connecting WhatsApp automates reminders, follow-ups and more.',
    },
    {
      question: 'Are the sample rows real customers?',
      answer:
        'No. The three rows are examples so you can see the columns. Replace them with your own customers before you upload.',
    },
  ],
  related: relatedExcept(RO_EXCEL_PATH),
}

export const RO_GUIDES = [amcGuide, serviceDueGuide, excelGuide]

export const RO_SUPPORT_EMAIL = SUPPORT_EMAIL
