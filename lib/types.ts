export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  currency: string
  period: string
  description: string
  features: readonly string[] | string[]
  cta: string
  highlighted: boolean
}

export interface Step {
  step: number
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  quote: string
  author: string
  company?: string
  location: string
  rating: number
}

export interface NavLink {
  name: string
  href: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

