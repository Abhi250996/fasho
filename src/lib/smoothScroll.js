import Lenis from '@studio-freight/lenis'

const premiumEase = (time) => Math.min(1, 1.001 - 2 ** (-10 * time))

export function createSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.35,
    easing: premiumEase,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 1.35,
    wheelMultiplier: 0.92,
    infinite: false,
  })

  let frameId

  const raf = (time) => {
    lenis.raf(time)
    frameId = requestAnimationFrame(raf)
  }

  frameId = requestAnimationFrame(raf)

  const handleAnchorClick = (event) => {
    const anchor = event.target.closest('a[href^="#"]')

    if (!anchor) return

    const href = anchor.getAttribute('href')

    if (!href || href === '#') return

    const target = document.querySelector(href)

    if (!target) return

    event.preventDefault()
    lenis.scrollTo(target, {
      offset: 0,
      duration: 1.45,
      easing: premiumEase,
    })
  }

  document.addEventListener('click', handleAnchorClick)

  return {
    lenis,
    destroy() {
      cancelAnimationFrame(frameId)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    },
  }
}
