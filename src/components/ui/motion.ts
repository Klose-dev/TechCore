import { useReducedMotion, type Variants } from "framer-motion"

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const CARD_HOVER = { y: -6 }
export const CARD_HOVER_SPRING = { type: "spring", stiffness: 300, damping: 24 } as const

const STAGGER = 0.07
const DURATION = 0.55
const RISE = 20
const TEXT_RISE = 12

export const revealViewport = { once: true, margin: "0px 0px -80px 0px" }

export function useRevealVariants(): Variants {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      show: { opacity: 1, y: 0 },
    }
  }

  return {
    hidden: { opacity: 0, y: RISE },
    show: (index: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: DURATION,
        ease: EASE,
        delay: index * STAGGER,
      },
    }),
  }
}

/** Coordinates a group of sibling elements so their text animates in sequence. */
export function useStaggerContainer(step: number = STAGGER): Variants {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return { hidden: {}, show: {} }
  }

  return {
    hidden: {},
    show: { transition: { staggerChildren: step, delayChildren: 0.08 } },
  }
}

/** A single text line / block inside a staggered group. */
export function useStaggerItem(): Variants {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
  }

  return {
    hidden: { opacity: 0, y: TEXT_RISE },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION, ease: EASE },
    },
  }
}
