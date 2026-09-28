import { motion } from "framer-motion"

import Counter from "@/components/ui/counter"
import { revealViewport, useRevealVariants } from "@/components/ui/motion"
import RaysBackground from "@/components/lightswind/rays-background"
import MagicCard from "@/components/ui/magic-card"

const stats = [
  { value: 40, suffix: "+", label: "Projects shipped" },
  { value: 25, suffix: "+", label: "Happy clients" },
  { value: 30, suffix: "", label: "Day sprint cycle" },
  { value: 100, suffix: "%", label: "On-time delivery" },
]

const testimonials = [
  {
    quote:
      "They shipped in four weeks what our previous agency said would take three months. The weekly demos meant there were no surprises.",
    name: "Aminatou N.",
    role: "Founder, fintech client",
  },
  {
    quote:
      "We talk directly to the engineers building our product. No account managers translating messages back and forth.",
    name: "Serge M.",
    role: "Product lead, logistics client",
  },
  {
    quote:
      "The offline-first mobile app works in areas with no signal. Our field teams actually adopted it, which never happened before.",
    name: "Dr. Claudine E.",
    role: "Operations, healthcare client",
  },
]

const StudioStats = () => {
  const variants = useRevealVariants()

  return (
    <section id="results" className="py-20 lg:py-28">
      <div className="container">
        <MagicCard className="rounded-lg border border-border bg-surface p-8 lg:p-12">
          <RaysBackground color="#007A3E" opacity={0.06} rays={14} angle={195} />
          <dl className="relative z-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map(({ value, suffix, label }, index) => (
            <motion.div
              key={label}
              className="relative z-10 text-center"
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={revealViewport}
              custom={index}
            >
              <dt className="sr-only">{label}</dt>
              <dd className="mb-2 text-4xl font-extrabold text-primary lg:text-5xl">
                <Counter value={value} suffix={suffix} />
              </dd>
              <p className="text-sm font-semibold text-secondary">{label}</p>
            </motion.div>
          ))}
          </dl>
        </MagicCard>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map(({ quote, name, role }, index) => (
            <motion.figure
              key={name}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={revealViewport}
              custom={index}
              className="h-full"
            >
            <MagicCard className="h-full rounded-lg border border-border bg-surface p-8">
              <RaysBackground color="#FFB366" opacity={0.09} rays={8} angle={200} />
              <div className="relative z-10 flex h-full flex-col">
                <blockquote className="mb-6 flex-1 text-base leading-relaxed text-secondary">
                  “{quote}”
                </blockquote>
                <figcaption>
                  <p className="font-bold text-foreground">{name}</p>
                  <p className="text-sm text-secondary">{role}</p>
                </figcaption>
              </div>
            </MagicCard>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudioStats
