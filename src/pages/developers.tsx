import SectionPageTitle from "@/components/sections/section-page-title";
import SectionTeam from "@/components/sections/section-team";
import SectionFAQ from "@/components/sections/section-faq";
import MagicCard from "@/components/ui/magic-card";
import { revealViewport, useRevealVariants } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const VALUES = [
  ["Curiosity", "We are always learning, exploring, and asking better questions."],
  ["Collaboration", "Great work happens when people share ideas and build together."],
  ["Craftsmanship", "We care about quality, maintainability, and real-world impact."],
  ["Creativity", "We build with imagination while staying practical and focused."],
];

const StudioValues = () => {
  const variants = useRevealVariants()

  return (
    <section id="values" className="py-16 lg:py-24">
      <div className="container">
        <div className="rounded-2xl bg-muted p-8 dark:bg-slate-950">
          <h2 className="mb-6 text-center">What we value in our developers</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(([title, description], index) => (
              <motion.div
                key={title}
                variants={variants}
                initial="hidden"
                whileInView="show"
                viewport={revealViewport}
                custom={index}
              >
                <MagicCard className="h-full rounded-xl border border-border bg-surface p-6">
                  <h3 className="mb-2 text-xl font-bold">{title}</h3>
                  <p className="text-sm leading-6 text-secondary">{description}</p>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Developers = () => (
  <>
    <Helmet>
      <title>Developers | TECHCORE</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle id="about" subtitle="Meet the developers building projects, sharing knowledge, and creating solutions together.">
        Our Developers
      </SectionPageTitle>
      <SectionTeam id="team" />
      <StudioValues />
      <SectionFAQ id="faq" />
    </main>
  </>
);

export default Developers;
