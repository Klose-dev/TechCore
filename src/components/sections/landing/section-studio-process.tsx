import { motion } from "framer-motion"
import { Search, PenTool, Code2, Rocket } from "lucide-react"

import { revealViewport, useRevealVariants } from "@/components/ui/motion"
import RaysBackground from "@/components/lightswind/rays-background"
import MagicCard from "@/components/ui/magic-card"

const steps = [
  {
    week: "Week 1",
    icon: Search,
    title: "Discovery",
    copy: "We map the problem with your team, agree on what success looks like, and lock the scope before a line of code is written.",
    output: "Scope doc + success metrics",
  },
  {
    week: "Week 2",
    icon: PenTool,
    title: "Design",
    copy: "Wireframes become a working prototype. You click through the real product early, so nothing surprises you at launch.",
    output: "Clickable prototype + UI kit",
  },
  {
    week: "Weeks 3–4",
    icon: Code2,
    title: "Build",
    copy: "Sprint-driven engineering with a demo every week. You see progress live and can steer it without a change request.",
    output: "Working build, weekly demos",
  },
  {
    week: "Launch",
    icon: Rocket,
    title: "Ship",
    copy: "Testing, deployment, documentation, and handoff. We stay on after launch to keep improving what we built together.",
    output: "Live product + handover docs",
  },
]

const StudioProcess = () => {
  const variants = useRevealVariants()

  return (
    <section id="process" className="border-y border-border bg-white py-20 dark:bg-slate-900 lg:py-32">
      <div className="container">
        <motion.div
          className="mb-16 max-w-2xl"
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-secondary">
            Our process
          </p>
          <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl">
            A 30-day sprint from discovery to launch
          </h2>
          <p className="text-lg leading-relaxed text-secondary">
            We move fast without cutting corners. Every project follows the same
            clear rhythm, so you always know what ships next.
          </p>
        </motion.div>

        <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
          <span
            aria-hidden="true"
            className="absolute left-8 right-8 top-8 hidden h-px bg-border lg:block"
          />

          {steps.map(({ week, icon: Icon, title, copy, output }, index) => (
            <motion.li
              key={title}
              className="relative h-full"
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={revealViewport}
              custom={index}
            >
              <MagicCard className="h-full rounded-lg border border-border bg-surface p-6">
                <RaysBackground color="#FFB366" opacity={0.08} rays={7} angle={205} />
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4 lg:block">
                  <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-border bg-white text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white dark:bg-slate-800">
                    <Icon width={24} height={24} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary lg:mt-6 lg:block">
                    {week}
                  </span>
                </div>

                <h3 className="mb-3 text-xl">
                  <span className="mr-2 text-secondary">0{index + 1}</span>
                  {title}
                </h3>
                <p className="mb-4 text-base leading-relaxed text-secondary">{copy}</p>
                <p className="inline-block rounded-full bg-accent-soft px-3 py-1.5 text-xs font-bold">
                  {output}
                </p>
              </div>
              </MagicCard>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default StudioProcess
