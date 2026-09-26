import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { revealViewport, useRevealVariants } from "@/components/ui/motion"

const StudioCTA = () => {
  const variants = useRevealVariants()

  return (
    <section id="contact" className="pb-20 pt-8 lg:pb-32">
      <div className="container">
        <motion.div
          className="relative overflow-hidden rounded-lg bg-primary-dark px-8 py-16 text-center lg:px-12 lg:py-20"
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent opacity-20 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="mb-5 text-3xl text-white sm:text-4xl lg:text-5xl">
              Tell us about your project
            </h2>
            <p className="mb-9 text-lg leading-relaxed text-white/80">
              Send a few lines about what you want to build. We will come back
              within one business day with honest thoughts, a rough scope, and
              whether we are the right fit.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-white px-8 text-base font-bold text-primary transition-colors hover:bg-accent-soft"
              >
                Discuss your project
                <ArrowRight width={18} height={18} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/40 px-8 text-base font-bold text-white transition-colors hover:border-white/80 hover:bg-white/10"
              >
                See our work first
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StudioCTA
