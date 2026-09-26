import { motion } from "framer-motion"

import TypewriterText from "@/components/ui/typewriter-text"
import RaysBackground from "@/components/lightswind/rays-background"
import { revealViewport, useRevealVariants } from "@/components/ui/motion"

const PARAGRAPHS = [
  "TECHCORE is a developer community created to bring passionate and ambitious developers together in an environment where knowledge, creativity, and collaboration can thrive.",
  "We believe developers grow faster when they build together. TECHCORE provides a space where members can exchange knowledge, work on real-world projects, explore emerging technologies, solve problems, and develop the skills needed to turn ideas into working solutions.",
  "Our goal is not simply to create another technology community. We aim to build an environment where developers can discover their potential, contribute their skills, and create technology that matters.",
]

const PHRASES = [
  "Knowledge grows when it is shared.",
  "Collaboration turns ideas into working software.",
  "Build together. Learn faster. Create what matters.",
]

const Manifesto = () => {
  const variants = useRevealVariants()

  return (
    <section className="relative overflow-hidden border-y border-border bg-white py-20 dark:bg-slate-900 lg:py-28">
      <RaysBackground color="#008A48" opacity={0.07} rays={16} angle={190} />

      <div className="container relative">
        <motion.blockquote
          className="relative mx-auto max-w-3xl text-center"
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.14em] text-primary">
            Our manifesto
          </p>

          <p className="mb-8 text-2xl font-extrabold leading-tight text-foreground sm:text-3xl lg:text-4xl">
            <TypewriterText phrases={PHRASES} />
          </p>

          <span
            aria-hidden="true"
            className="mx-auto mb-12 block h-px w-16 bg-primary"
          />

          <div className="space-y-6 text-left">
            {PARAGRAPHS.map((paragraph, index) => (
              <motion.p
                key={paragraph.slice(0, 24)}
                className="text-lg leading-relaxed text-secondary"
                variants={variants}
                initial="hidden"
                whileInView="show"
                viewport={revealViewport}
                custom={index + 1}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.blockquote>
      </div>
    </section>
  )
}

export default Manifesto
