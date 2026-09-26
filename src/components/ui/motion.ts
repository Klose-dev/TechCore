import { useReducedMotion, type Variants } from "framer-motion"

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const STAGGER = 0.07
const DURATION = 0.55
const RISE = 20

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
