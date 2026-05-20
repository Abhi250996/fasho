import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, gsapLuxuryEase } from '../lib/animations'

export function useRevealAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current

    if (
      !element ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        element.querySelectorAll(options.selector ?? '[data-reveal]'),
        {
          opacity: 0,
          y: options.y ?? 42,
          scale: options.scale ?? 1,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: options.duration ?? 0.95,
          stagger: options.stagger ?? 0.08,
          ease: options.ease ?? gsapLuxuryEase,
          scrollTrigger: {
            trigger: element,
            start: options.start ?? 'top 82%',
            once: options.once ?? true,
          },
        },
      )
    }, element)

    return () => {
      context.revert()
      ScrollTrigger.refresh()
    }
  }, [options])

  return ref
}
