import { useEffect, useRef } from 'react'

/**
 * Attach to a container ref. Adds 'visible' class when the element
 * enters the viewport, triggering CSS reveal / reveal-stagger animations.
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) observer.unobserve(el) && el.classList.add('visible') || el.classList.add('visible') },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
