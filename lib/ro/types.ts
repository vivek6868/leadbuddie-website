export type RoFaq = {
  question: string
  answer: string
}

export type RoCapability = {
  id: 'customers' | 'installations' | 'dues' | 'requests' | 'engineers' | 'history' | 'amc'
  title: string
  copy: string
}

export type RoAudience = {
  title: string
  copy: string
}

export type RoGuideLink = {
  href: string
  label: string
  title: string
  copy: string
}

export type RoCopy = {
  eyebrow: string
  productName: string
  h1: string
  lede: string
  intro: string
  primaryCta: string
  secondaryCta: string
  trust: string[]
  audienceEyebrow: string
  audienceTitle: string
  audienceLede: string
  audiences: RoAudience[]
  capabilityEyebrow: string
  capabilityTitle: string
  capabilityLede: string
  capabilities: RoCapability[]
  whatsappEyebrow: string
  whatsappTitle: string
  whatsappLede: string
  withoutKicker: string
  withoutTitle: string
  withoutPoints: string[]
  withKicker: string
  withTitle: string
  withCopy: string
  engineerEyebrow: string
  engineerTitle: string
  engineerLede: string
  engineerPoints: { title: string; copy: string }[]
  engineerFoot: string
  flowEyebrow: string
  flowTitle: string
  flowLede: string
  flow: { title: string; copy: string }[]
  exampleLabel: string
  exampleTitle: string
  exampleRows: { label: string; detail: string }[]
  jobCardTitle: string
  jobCardItems: string[]
  pricingEyebrow: string
  pricingTitle: string
  pricingLede: string
  priceListLabel: string
  growthName: string
  growthKicker: string
  growthTimeline: { when: string; price: string; detail: string }[]
  growthIncludes: string
  growthPoints: string[]
  growthCta: string
  scaleName: string
  scalePrice: string
  scalePeriod: string
  scaleKicker: string
  scaleCopy: string
  scalePoints: string[]
  scaleCta: string
  starterNote: string
  annualLead: string
  annualCta: string
  pricingNote: string
  guidesEyebrow: string
  guidesTitle: string
  guidesLede: string
  guidesCta: string
  guides: RoGuideLink[]
  faqTitle: string
  faqLede: string
  faq: RoFaq[]
  supportLabel: string
  finalEyebrow: string
  finalTitle: string
  finalLede: string
  finalCta: string
}

export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; caption: string; headers: string[]; rows: string[][] }
  | { type: 'callout'; title: string; text: string }
  | { type: 'downloads' }

export type RoGuideContent = {
  path: string
  eyebrow: string
  title: string
  description: string
  keywords: string
  updated: string
  blocks: GuideBlock[]
  faq: RoFaq[]
  related: { href: string; label: string }[]
}
