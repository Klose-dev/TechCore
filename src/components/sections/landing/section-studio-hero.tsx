import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"

import { useRevealVariants } from "@/components/ui/motion"
import HeroCapabilityPanel from "./hero-capability-panel"

const promises = [
  "Discovery to launch in 30 days",
  "You talk directly to the builders",
  "Fixed scope, no surprise invoices",
]

const StudioHero = () => {
  const variants = useRevealVariants()

  return (
    <section className="relative overflow-hidden pt-32 lg:pt-44">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-primary">
              Software studio · Cameroon
            </span>

            <h1 className="mb-6 mt-6 text-4xl sm:text-5xl lg:text-6xl">
              We design and build software that{" "}
              <span className="text-primary">moves your business forward</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-secondary">
              TechCore Studio is a small, senior team in Yaoundé building web
              apps, desktop apps, mobile apps, AI tools, and data systems — from
              the first sketch to a product your customers actually use.
            </p>

            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-white transition-colors hover:bg-primary/90"
              >
                Start a Project
                <ArrowRight width={18} height={18} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-white px-8 text-base font-bold text-primary shadow-sm transition-all hover:border-primary hover:shadow-md dark:bg-slate-900"
              >
                Explore Work
              </Link>
            </div>

            <ul className="space-y-3">
              {promises.map((promise) => (
                <li
                  key={promise}
                  className="flex items-center gap-3 text-sm font-semibold text-secondary"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-primary">
                    <Check width={13} height={13} strokeWidth={3} />
                  </span>
                  {promise}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="relative"
            variants={variants}
            initial="hidden"
            animate="show"
            custom={1}
          >
            <HeroCapabilityPanel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StudioHero
