'use client'

/**
 * Reusable Framer Motion animation primitives for the homepage.
 *
 * Everything here is a thin, declarative wrapper over framer-motion so sections
 * stay readable: <Reveal>, <Stagger>/<StaggerItem>, <Float>, <Parallax>.
 * All primitives respect prefers-reduced-motion — when the user opts out we
 * render content in its final state with no transform/opacity animation.
 */

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
  type MotionProps,
} from 'framer-motion'
import { useRef, type ReactNode } from 'react'

/** Calm, cinematic easing used across the site. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

function offsetFor(direction: Direction, distance: number) {
  switch (direction) {
    case 'up':
      return { y: distance }
    case 'down':
      return { y: -distance }
    case 'left':
      return { x: distance }
    case 'right':
      return { x: -distance }
    default:
      return {}
  }
}

interface RevealProps {
  children: ReactNode
  className?: string
  /** Direction the element travels in from. Default "up". */
  direction?: Direction
  /** Travel distance in px. Default 24. */
  distance?: number
  /** Seconds before the animation starts once in view. Default 0. */
  delay?: number
  /** Animation duration in seconds. Default 0.7. */
  duration?: number
  /** Play once (default) or every time it enters the viewport. */
  once?: boolean
  /** Viewport amount (0–1) that must be visible to trigger. Default 0.3. */
  amount?: number
  as?: 'div' | 'section' | 'li' | 'article' | 'span'
}

/**
 * Scroll-triggered progressive reveal. Fades + slides content in as it enters
 * the viewport. The workhorse for the homepage's "operations unfold as you
 * scroll" feeling.
 */
export function Reveal({
  children,
  className,
  direction = 'up',
  distance = 24,
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.3,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offsetFor(direction, distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount, margin: '0px 0px -8% 0px' }}
      transition={{ duration, delay, ease: EASE_OUT }}
    >
      {children}
    </MotionTag>
  )
}

interface StaggerProps {
  children: ReactNode
  className?: string
  /** Gap between each child's start, in seconds. Default 0.1. */
  stagger?: number
  /** Delay before the first child starts. Default 0. */
  delay?: number
  once?: boolean
  amount?: number
  as?: 'div' | 'ul' | 'ol'
}

/**
 * Container that orchestrates a staggered reveal of its <StaggerItem> children.
 * Pair with StaggerItem for connected, sequential reveals (workflow steps,
 * card grids, suggestion lists).
 */
export function Stagger({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  once = true,
  amount = 0.2,
  as = 'div',
}: StaggerProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  }

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: '0px 0px -8% 0px' }}
    >
      {children}
    </MotionTag>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: Direction
  distance?: number
  duration?: number
  as?: 'div' | 'li' | 'article' | 'span'
}

/** A single child of <Stagger>. Inherits orchestration from the parent. */
export function StaggerItem({
  children,
  className,
  direction = 'up',
  distance = 22,
  duration = 0.6,
  as = 'div',
}: StaggerItemProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const item: Variants = {
    hidden: { opacity: 0, ...offsetFor(direction, distance) },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: EASE_OUT },
    },
  }

  return (
    <MotionTag className={className} variants={item}>
      {children}
    </MotionTag>
  )
}

interface FloatProps extends MotionProps {
  children: ReactNode
  className?: string
  /** Vertical travel in px. Default 10. */
  amplitude?: number
  /** Full cycle duration in seconds. Default 6. */
  duration?: number
  /** Phase offset so multiple floats don't move in lockstep. Default 0. */
  delay?: number
}

/**
 * Gentle infinite float for ambient UI elements (Buddie cards, badges, orbs).
 * Adds life without distraction.
 */
export function Float({
  children,
  className,
  amplitude = 10,
  duration = 6,
  delay = 0,
  ...rest
}: FloatProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxProps {
  children: ReactNode
  className?: string
  /** Pixels of travel across the full scroll range. Positive = moves up. */
  offset?: number
}

/**
 * Scroll-linked parallax. Translates the element vertically as it passes
 * through the viewport for layered depth between sections.
 */
export function Parallax({ children, className, offset = 60 }: ParallaxProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}

/** Re-export the bare motion + hooks for ad-hoc use inside sections. */
export { motion, useReducedMotion, useScroll, useTransform }
