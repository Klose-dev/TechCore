import { motion, useReducedMotion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const FRAME =
  "relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-primary/5 dark:bg-primary/10"

/**
 * Wireframe globe built from CSS 3D rings. Each meridian is a real circle
 * rotated around the Y axis inside a preserve-3d context, so the group
 * genuinely sweeps rather than faking the spin with a scaleX tween.
 *
 * Border colours are set inline: the `border-primary/40` utility loses the
 * cascade to the global `* { @apply border-border }` rule in index.css.
 */
function GlobeVisual() {
  const reduceMotion = useReducedMotion()
  const meridians = [0, 30, 60, 90, 120, 150]
  const parallels = [-56, -28, 0, 28, 56]

  return (
    <div className={FRAME}>
      <div className="[perspective:640px] grid h-32 w-32 place-items-center">
        <motion.div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={reduceMotion ? undefined : { rotateY: [0, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {meridians.map((angle) => (
            <span
              key={`m${angle}`}
              className="absolute inset-0 rounded-full border"
              style={{
                borderColor: "rgb(var(--primary) / 0.55)",
                transform: `rotateY(${angle}deg)`,
              }}
            />
          ))}
          {parallels.map((offset) => (
            <span
              key={`p${offset}`}
              className="absolute left-0 right-0 top-1/2 h-1/2 -translate-y-1/2 rounded-[50%] border"
              style={{
                borderColor: "rgb(var(--primary) / 0.35)",
                transform: `rotateX(68deg) translateY(-${offset}px)`,
              }}
            />
          ))}
        </motion.div>
      </div>
      <span className="absolute bottom-6 h-1.5 w-16 rounded-full bg-primary/20 blur-[6px]" />
    </div>
  )
}

function Laptop() {
  const reduceMotion = useReducedMotion()

  return (
    <div className={FRAME}>
      <motion.div
        className="w-44"
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative rounded-t-lg border-2 border-primary/50 bg-surface p-2 dark:bg-slate-900">
          <div className="flex flex-col gap-1.5 rounded-sm bg-primary/10 p-2">
            <div className="flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
            </div>
            <div className="mt-1 space-y-1.5">
              <div className="h-1.5 w-4/5 rounded-full bg-primary/40" />
              <div className="h-1.5 w-3/5 rounded-full bg-primary/25" />
              <div className="h-1.5 w-2/3 rounded-full bg-primary/25" />
            </div>
            <div className="mt-1 flex gap-1.5">
              <div className="h-6 flex-1 rounded-sm bg-primary/20" />
              <div className="h-6 flex-1 rounded-sm bg-primary/30" />
            </div>
          </div>
        </div>
        <div className="mx-auto h-1.5 w-[112%] -translate-x-[5.4%] rounded-b-md bg-primary/40" />
      </motion.div>
    </div>
  )
}

function Phone() {
  const reduceMotion = useReducedMotion()

  return (
    <div className={FRAME}>
      <motion.div
        className="relative w-[92px] rounded-[1.6rem] border-[3px] border-primary/50 bg-surface p-1.5 shadow-sm dark:bg-slate-900"
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.15rem] bg-primary/10">
          <span className="absolute left-1/2 top-1 h-1.5 w-8 -translate-x-1/2 rounded-full bg-primary/40" />
          <div className="flex h-full flex-col gap-1.5 p-2 pt-5">
            <div className="h-8 rounded-md bg-primary/30" />
            <div className="space-y-1.5 pt-1">
              <div className="h-1.5 w-4/5 rounded-full bg-primary/40" />
              <div className="h-1.5 w-3/5 rounded-full bg-primary/20" />
            </div>
            <div className="mt-auto space-y-1.5">
              <div className="h-7 rounded-md bg-primary/25" />
              <div className="h-7 rounded-md bg-primary/30" />
            </div>
          </div>
        </div>
        <span className="absolute -left-[5px] top-14 h-6 w-[3px] rounded-l-sm bg-primary/50" />
        <span className="absolute -left-[5px] top-24 h-4 w-[3px] rounded-l-sm bg-primary/50" />
        <span className="absolute -right-[5px] top-20 h-8 w-[3px] rounded-r-sm bg-primary/50" />
      </motion.div>
    </div>
  )
}

function Bot() {
  const reduceMotion = useReducedMotion()

  return (
    <div className={FRAME}>
      <motion.div
        className="relative w-32"
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 rounded-full bg-primary/50" />
        <motion.span
          className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent"
          animate={reduceMotion ? undefined : { opacity: [1, 0.35, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mt-3 rounded-2xl border-2 border-primary/50 bg-surface p-3 dark:bg-slate-900">
          <div className="flex items-center justify-between gap-3">
            <span className="h-5 w-5 rounded-full bg-primary/25" />
            <span className="h-5 w-5 rounded-full bg-primary/25" />
          </div>
          <motion.div
            className="mt-3 h-1.5 w-2/3 self-center rounded-full bg-primary/40"
            animate={reduceMotion ? undefined : { scaleX: [1, 0.5, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: EASE }}
          />
        </div>
        <div className="mx-auto -mt-0.5 h-2 w-16 rounded-b-lg bg-primary/40" />
      </motion.div>
    </div>
  )
}

function DataDashboard() {
  const reduceMotion = useReducedMotion()
  const bars = [38, 62, 46, 80, 58, 92]

  return (
    <div className={FRAME}>
      <div className="w-44 rounded-lg border-2 border-primary/40 bg-surface p-3 dark:bg-slate-900">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[0.625rem] font-bold uppercase tracking-[0.1em] text-primary/70">
            Throughput
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
        <div className="flex h-20 items-end gap-1.5">
          {bars.map((height, index) => (
            <motion.span
              key={height}
              className="flex-1 rounded-t-sm bg-primary/40"
              style={{ height: `${height}%` }}
              initial={reduceMotion ? false : { scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, ease: EASE, delay: reduceMotion ? 0 : index * 0.07 }}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center gap-1.5">
          <svg width="100%" height="16" viewBox="0 0 100 16" fill="none" aria-hidden="true">
            <motion.path
              d="M0 12 L18 9 L34 11 L52 5 L70 7 L86 3 L100 5"
              stroke="rgb(var(--primary))"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={reduceMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

const VISUALS: Record<string, () => JSX.Element> = {
  web: GlobeVisual,
  desktop: Laptop,
  mobile: Phone,
  ai: Bot,
  data: DataDashboard,
}

export function CapabilityVisual({ id }: { id: string }) {
  const Visual = VISUALS[id] ?? GlobeVisual
  return <Visual />
}
