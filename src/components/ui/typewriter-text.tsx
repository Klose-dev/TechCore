import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"

type TypewriterTextProps = {
  /** Phrases typed in sequence, then held before the next one. */
  phrases: string[]
  typeSpeed?: number
  deleteSpeed?: number
  holdMs?: number
  className?: string
}

/**
 * Types each phrase, holds it, then deletes and moves to the next.
 *
 * Under prefers-reduced-motion nothing animates: the first phrase renders
 * immediately and the rest are not cycled.
 */
export default function TypewriterText({
  phrases,
  typeSpeed = 55,
  deleteSpeed = 28,
  holdMs = 2600,
  className = "",
}: TypewriterTextProps) {
  const reduceMotion = useReducedMotion()
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion) {
      setLength(phrases[0]?.length ?? 0)
      return
    }

    const phrase = phrases[phraseIndex % phrases.length] ?? ""
    const atEnd = length === phrase.length

    if (!deleting && atEnd) {
      const hold = setTimeout(() => setDeleting(true), holdMs)
      return () => clearTimeout(hold)
    }

    if (deleting && length === 0) {
      setDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
      return
    }

    const tick = setTimeout(
      () => setLength((l) => l + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(tick)
  }, [length, deleting, phraseIndex, phrases, reduceMotion, typeSpeed, deleteSpeed, holdMs])

  const phrase = phrases[phraseIndex % phrases.length] ?? ""

  return (
    <span className={className}>
      {phrase.slice(0, length)}
      {!reduceMotion && (
        <span
          aria-hidden="true"
          className="ml-0.5 inline-block h-[0.95em] w-[3px] translate-y-[0.12em] animate-pulse rounded-full bg-primary align-middle motion-reduce:hidden"
        />
      )}
    </span>
  )
}
