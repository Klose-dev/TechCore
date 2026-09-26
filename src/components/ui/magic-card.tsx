import { useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

type MagicCardProps = {
  children: ReactNode
  className?: string
  /** Max tilt in degrees */
  tilt?: number
}

/**
 * Cursor-tracked spotlight card.
 *
 * A radial highlight follows the pointer, paired with a small spring tilt.
 * Both are disabled under prefers-reduced-motion, where the card stays flat
 * and keeps only the static border treatment.
 */
export default function MagicCard({
  children,
  className,
  tilt = 5,
}: MagicCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 22,
  })
  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 22,
  })

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return

    const rect = node.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    node.style.setProperty("--mx", `${x}px`)
    node.style.setProperty("--my", `${y}px`)

    if (reduceMotion) return

    const px = (x / rect.width) * 2 - 1
    const py = (y / rect.height) * 2 - 1
    rotateY.set(px * tilt)
    rotateX.set(-py * tilt)
  }

  const handleLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      className={cn("magic-card group relative isolate overflow-hidden", className)}
    >
      {children}
    </motion.div>
  )
}
