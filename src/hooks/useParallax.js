import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/animations'

export function useParallax(options = {}) {
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
      gsap.to(element, {
        yPercent: options.yPercent ?? -8,
        xPercent: options.xPercent ?? 0,
        scale: options.scale ?? 1,
        ease: 'none',
        scrollTrigger: {
          trigger: options.trigger ?? element,
          start: options.start ?? 'top bottom',
          end: options.end ?? 'bottom top',
          scrub: options.scrub ?? 1.1,
        },
      })
    }, element)

    return () => {
      context.revert()
      ScrollTrigger.refresh()
    }
  }, [options])

  return ref
}
