import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion"
import { Check, Globe, Monitor, Smartphone, Sparkles, BarChart3 } from "lucide-react"

import RaysBackground from "@/components/lightswind/rays-background"

type Capability = {
  id: string
  label: string
  icon: typeof Globe
  headline: string
  detail: string
  points: string[]
}

const CAPABILITIES: Capability[] = [
  {
    id: "web",
    label: "Web",
    icon: Globe,
    headline: "Web applications",
    detail: "Fast, accessible platforms on a modern stack that scale with your team.",
    points: ["React & TypeScript frontends", "API-first architecture", "WCAG accessible by default"],
  },
  {
    id: "desktop",
    label: "Desktop",
    icon: Monitor,
    headline: "Desktop software",
    detail: "Native-feeling apps for Windows, macOS, and Linux your team can rely on all day.",
    points: ["Cross-platform builds", "Offline-first data", "Auto-updating releases"],
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    headline: "Mobile apps",
    detail: "Cross-platform experiences that feel native, even on slow rural connections.",
    points: ["iOS & Android", "Offline sync", "Lightweight on low-end devices"],
  },
  {
    id: "ai",
    label: "AI",
    icon: Sparkles,
    headline: "AI tools",
    detail: "LLM integrations and automation tuned to the way your team already works.",
    points: ["Retrieval-augmented search", "Workflow automation", "Human-in-the-loop review"],
  },
  {
    id: "data",
    label: "Data",
    icon: BarChart3,
    headline: "Data systems",
    detail: "Pipelines and dashboards that turn scattered raw data into decisions you can defend.",
    points: ["ETL & warehousing", "Real-time dashboards", "Anomaly alerting"],
  },
]

const STAGES = [
  { label: "Discovery", status: "done" },
  { label: "Design", status: "done" },
  { label: "Build", status: "active" },
  { label: "Launch", status: "pending" },
] as const

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const HeroCapabilityPanel = () => {
  const [activeId, setActiveId] = useState(CAPABILITIES[0].id)
  const [autoRotate, setAutoRotate] = useState(true)
  const reduceMotion = useReducedMotion()
  const progressRef = useRef<HTMLDivElement>(null)
  const progressInView = useInView(progressRef, { once: true, margin: "-60px" })

  const active = CAPABILITIES.find((c) => c.id === activeId) ?? CAPABILITIES[0]
  const ActiveIcon = active.icon

  useEffect(() => {
    if (!autoRotate || reduceMotion) return
    const timer = setInterval(() => {
      setActiveId((current) => {
        const index = CAPABILITIES.findIndex((c) => c.id === current)
        return CAPABILITIES[(index + 1) % CAPABILITIES.length].id
      })
    }, 4200)
    return () => clearInterval(timer)
  }, [autoRotate, reduceMotion])

  const select = (id: string) => {
    setActiveId(id)
    setAutoRotate(false)
  }

  return (
    <div className="relative">
      <div className="relative isolate overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
        <RaysBackground color="#007A3E" opacity={0.07} rays={10} angle={185} />

        <div className="relative z-10 p-8">
          <div className="mb-6 flex items-center gap-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-accent" />
            <span className="h-3 w-3 rounded-full bg-border" />
            <span className="h-3 w-3 rounded-full bg-primary" />
          </div>

          <div
            className="mb-6 flex flex-wrap gap-2"
            role="tablist"
            aria-label="What we build"
          >
            {CAPABILITIES.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                role="tab"
                type="button"
                aria-selected={activeId === id}
                onClick={() => select(id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                  activeId === id
                    ? "border-primary bg-primary text-white"
                    : "border-border text-secondary hover:border-primary hover:text-primary"
                }`}
              >
                <Icon width={15} height={15} />
                {label}
              </button>
            ))}
          </div>

          <div className="min-h-[188px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.32, ease: EASE }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-primary">
                    <ActiveIcon width={20} height={20} />
                  </span>
                  <h2 className="text-xl">{active.headline}</h2>
                </div>

                <p className="mb-5 text-base leading-relaxed text-secondary">
                  {active.detail}
                </p>

                <ul className="space-y-2">
                  {active.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-sm text-secondary"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-soft text-primary">
                        <Check width={10} height={10} strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div
        ref={progressRef}
        className="relative isolate mt-6 overflow-hidden rounded-lg border border-border bg-surface p-6"
      >
        <RaysBackground color="#FFB366" opacity={0.09} rays={8} angle={200} />
        <div className="relative z-10">
          <div className="mb-5 flex items-baseline justify-between">
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-secondary">
              Sprint progress
            </p>
            <p className="text-sm font-bold text-primary">Week 3 of 4</p>
          </div>

          <ol className="relative flex items-start justify-between">
            <span
              aria-hidden="true"
              className="absolute left-4 right-4 top-4 h-0.5 bg-border"
            >
              <motion.span
                className="block h-full origin-left bg-primary"
                initial={{ scaleX: 0 }}
                animate={progressInView ? { scaleX: 0.62 } : { scaleX: 0 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
              />
            </span>

            {STAGES.map((stage, index) => (
              <li key={stage.label} className="relative z-10 flex flex-1 flex-col items-center gap-2 text-center">
                <motion.span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold ${
                    stage.status === "done"
                      ? "border-primary bg-primary text-white"
                      : stage.status === "active"
                        ? "border-primary bg-surface text-primary"
                        : "border-border bg-surface text-secondary"
                  }`}
                  initial={reduceMotion ? false : { scale: 0.7, opacity: 0 }}
                  animate={
                    progressInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.7, opacity: 0 }
                  }
                  transition={{ duration: 0.35, ease: EASE, delay: 0.35 + index * 0.12 }}
                >
                  {stage.status === "done" ? (
                    <Check width={14} height={14} strokeWidth={3} />
                  ) : (
                    index + 1
                  )}
                </motion.span>
                <span
                  className={`text-xs font-semibold ${
                    stage.status === "pending" ? "text-secondary" : "text-foreground"
                  }`}
                >
                  {stage.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-lg border border-border bg-surface px-5 py-4 shadow-md sm:flex">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-primary">
          <Check width={18} height={18} strokeWidth={3} />
        </span>
        <div>
          <p className="text-sm font-bold text-foreground">Ship-ready in 30 days</p>
          <p className="text-xs text-secondary">Fixed scope, weekly demos</p>
        </div>
      </div>
    </div>
  )
}

export default HeroCapabilityPanel
