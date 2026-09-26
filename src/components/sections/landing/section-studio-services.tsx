import { motion } from "framer-motion"
import {
  Globe,
  Monitor,
  Smartphone,
  Sparkles,
  BarChart3,
  Palette,
  type LucideIcon,
} from "lucide-react"

import { revealViewport, useRevealVariants } from "@/components/ui/motion"
import RaysBackground from "@/components/lightswind/rays-background"
import MagicCard from "@/components/ui/magic-card"

const services: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: Globe,
    title: "Web Apps",
    copy: "Fast, accessible web applications on a modern stack, built to scale with your team instead of against it.",
  },
  {
    icon: Monitor,
    title: "Desktop Apps",
    copy: "Native-feeling desktop software for Windows, macOS, and Linux that your team can rely on all day.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    copy: "Cross-platform mobile experiences that feel native on every device, even on slow rural connections.",
  },
  {
    icon: Sparkles,
    title: "AI Tools",
    copy: "LLM integrations, intelligent automation, and custom models tuned to the way your team already works.",
  },
  {
    icon: BarChart3,
    title: "Data Systems",
    copy: "Pipelines, dashboards, and reporting that turn scattered raw data into decisions you can defend.",
  },
  {
    icon: Palette,
    title: "Product Design",
    copy: "Research, wireframes, and polished interfaces that make genuinely complex systems feel simple.",
  },
]

const StudioServices = () => {
  const variants = useRevealVariants()

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-secondary">
            Services
          </p>
          <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl">
            Everything you need to ship great software
          </h2>
          <p className="text-lg leading-relaxed text-secondary">
            From first idea to running in production, we handle design,
            engineering, AI, and data under one roof — so nothing falls
            between vendors.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, copy }, index) => (
            <motion.div
              key={title}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={revealViewport}
              custom={index}
            >
              <MagicCard className="h-full rounded-lg border border-border bg-surface">
                <RaysBackground color="#007A3E" opacity={0.07} rays={10} />
                <div className="relative z-10 p-8">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-accent-soft text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon width={22} height={22} />
                  </span>
                  <h3 className="mb-3 text-xl">{title}</h3>
                  <p className="text-base leading-relaxed text-secondary">{copy}</p>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudioServices
