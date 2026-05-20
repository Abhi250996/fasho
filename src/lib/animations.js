import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const luxuryEase = [0.22, 1, 0.36, 1]
export const gsapLuxuryEase = 'power3.out'

export const revealVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: luxuryEase,
    },
  },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
}

export const scaleRevealVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: luxuryEase,
    },
  },
}

export const buttonMotion = {
  whileHover: {
    y: -3,
    scale: 1.02,
    transition: { duration: 0.35, ease: luxuryEase },
  },
  whileTap: { scale: 0.98 },
}

export function createLuxuryTimeline(scope) {
  return gsap.context(() => {
    const timeline = gsap.timeline({ defaults: { ease: gsapLuxuryEase } })

    timeline
      .from('[data-hero-reveal]', {
        y: 70,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
      })
      .from(
        '[data-hero-image]',
        {
          scale: 1.08,
          opacity: 0,
          duration: 1.35,
        },
        '-=0.95',
      )
      .from(
        '[data-hero-badge]',
        {
          y: 30,
          scale: 0.9,
          opacity: 0,
          duration: 0.9,
        },
        '-=0.55',
      )

    return timeline
  }, scope)
}

export function createPageTransition(node) {
  return gsap.fromTo(
    node,
    { opacity: 0, scale: 0.985, y: 18 },
    { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: gsapLuxuryEase },
  )
}

export function refreshScrollAnimations() {
  ScrollTrigger.refresh()
}

export { gsap, ScrollTrigger }
