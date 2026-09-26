import { animate, useInView, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { EASE, revealViewport } from "@/components/ui/motion"

type CounterProps = {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
}

const Counter = ({
  value,
  prefix = "",
  suffix = "",
  duration = 1.4,
}: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, revealViewport)
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!inView || reduceMotion) return

    setDisplay(0)

    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
      onComplete: () => setDisplay(value),
    })

    return () => controls.stop()
  }, [inView, reduceMotion, value, duration])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export default Counter
