import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { revealViewport, useRevealVariants } from "@/components/ui/motion"
import RaysBackground from "@/components/lightswind/rays-background"
import MagicCard from "@/components/ui/magic-card"

const projects = [
  {
    title: "FinTrack Analytics",
    category: "Web app · Data",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    copy: "Real-time financial reporting that turns raw transaction data into a dashboard finance teams actually open every morning.",
    metrics: [
      ["2M+", "Transactions / day"],
      ["<1s", "Query response"],
    ],
  },
  {
    title: "HealthBridge Mobile",
    category: "Mobile · AI",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    copy: "An offline-first patient management app with AI-assisted triage, built for clinics running on unreliable connections.",
    metrics: [
      ["3", "Clinics live"],
      ["Offline", "First sync"],
    ],
  },
  {
    title: "LogiChain Desktop",
    category: "Desktop · Enterprise",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    copy: "Supply chain software for regional distributors: barcode scanning, live inventory, and multi-warehouse sync in one tool.",
    metrics: [
      ["5", "Warehouses synced"],
      ["-40%", "Stock errors"],
    ],
  },
]

const StudioWork = () => {
  const variants = useRevealVariants()

  return (
    <section id="work" className="py-20 lg:py-32">
      <div className="container">
        <motion.div
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-secondary">
              Selected work
            </p>
            <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl">
              Projects we are proud of
            </h2>
            <p className="text-lg leading-relaxed text-secondary">
              A few recent builds across fintech, health, and logistics. Every
              one shipped inside a 30-day sprint.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-border bg-white px-6 text-sm font-bold text-primary shadow-sm transition-all hover:border-primary hover:shadow-md lg:self-auto"
          >
            View all work
            <ArrowRight width={16} height={16} />
          </Link>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map(({ title, category, image, copy, metrics }, index) => (
            <motion.div
              key={title}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={revealViewport}
              custom={index}
            >
            <MagicCard className="h-full rounded-lg border border-border bg-surface">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-bold text-primary">
                  {category}
                </span>
              </div>

              <div className="relative isolate flex flex-1 flex-col p-8">
                <RaysBackground color="#FFB366" opacity={0.1} rays={8} angle={210} />
                <div className="relative z-10 flex h-full flex-col">
                  <h3 className="mb-3 text-xl">{title}</h3>
                  <p className="mb-6 flex-1 text-base leading-relaxed text-secondary">
                    {copy}
                  </p>

                  <dl className="flex gap-8 border-t border-border pt-6">
                    {metrics.map(([value, label]) => (
                      <div key={label}>
                        <dd className="text-xl font-extrabold text-primary">
                          {value}
                        </dd>
                        <dt className="text-xs text-secondary">{label}</dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudioWork
