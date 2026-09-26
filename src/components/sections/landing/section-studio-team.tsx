import { motion } from "framer-motion"
import { HeartHandshake, Zap, Compass, MapPin } from "lucide-react"

import { revealViewport, useRevealVariants } from "@/components/ui/motion"
import RaysBackground from "@/components/lightswind/rays-background"
import MagicCard from "@/components/ui/magic-card"

const values = [
  {
    icon: HeartHandshake,
    title: "A partnership, not a vendor",
    copy: "We work as an extension of your team, in your tools, on your hours.",
  },
  {
    icon: Zap,
    title: "Fast without being careless",
    copy: "Speed matters, but so does quality. We optimise for both, deliberately.",
  },
  {
    icon: Compass,
    title: "The right tool for the job",
    copy: "No cargo-cult stacks. We pick what fits and we explain why.",
  },
]

const team = [
  { src: "/team/1.jpg", name: "Engineering", role: "Product & backend" },
  { src: "/team/2.jpg", name: "Design", role: "Product & brand" },
  { src: "/team/3.jpg", name: "Delivery", role: "Sprint & client lead" },
]

const StudioTeam = () => {
  const variants = useRevealVariants()

  return (
    <section id="studio" className="border-y border-border bg-white py-20 dark:bg-slate-900 lg:py-32">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-secondary">
              Our studio
            </p>
            <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl">
              A small team you will actually get to know
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-secondary">
              We are a tight group of designers and engineers based in Cameroon.
              Good software comes from close collaboration and genuine care, not
              from headcount.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-secondary">
              Every client works directly with the people building their project.
              No account managers, no hand-offs, no messages lost in translation.
            </p>

            <div className="space-y-6">
              {values.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-primary">
                    <Icon width={18} height={18} />
                  </span>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-foreground">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-secondary">{copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
              <MapPin width={16} height={16} className="text-primary" />
              Yaoundé, Cameroon · working with teams worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            {team.map(({ src, name, role }, index) => (
              <motion.figure
                key={name}
                className="h-full"
                variants={variants}
                initial="hidden"
                whileInView="show"
                viewport={revealViewport}
                custom={index}
              >
              <MagicCard className="h-full rounded-lg border border-border bg-surface">
                <RaysBackground color="#007A3E" opacity={0.08} rays={9} angle={190} />
                <div className="relative z-10">
                  <img
                    src={src}
                    alt={`${name} at TechCore Studio`}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <figcaption className="border-t border-border p-4">
                    <p className="text-sm font-bold text-foreground">{name}</p>
                    <p className="text-xs text-secondary">{role}</p>
                  </figcaption>
                </div>
              </MagicCard>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioTeam
