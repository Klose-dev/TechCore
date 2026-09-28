import SectionPageTitle from "@/components/sections/section-page-title";
import SectionChecklist from "@/components/sections/section-checklist";
import SectionTeam from "@/components/sections/section-team";
import SectionCTA from "@/components/sections/section-cta";
import Manifesto from "@/components/sections/manifesto";
import MagicCard from "@/components/ui/magic-card";
import {
  CARD_HOVER,
  CARD_HOVER_SPRING,
  revealViewport,
  useRevealVariants,
  useStaggerContainer,
  useStaggerItem,
} from "@/components/ui/motion";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Code2,
  ShieldCheck,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

const values: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Our Mission",
    icon: Target,
    description:
      "To ship software that solves a real problem for a real user, and to hand it over in a state the client can own.",
  },
  {
    title: "How We Work",
    icon: Users,
    description:
      "You talk directly to the engineers building your product. No account managers, no relay race, no surprises in the invoice.",
  },
  {
    title: "What We Build",
    icon: Code2,
    description:
      "Web apps, mobile and desktop software, AI tooling, and data systems, designed to stay maintainable after we leave.",
  },
  {
    title: "What We Guarantee",
    icon: ShieldCheck,
    description:
      "Fixed scope agreed up front, working software every week, and a production release on the date we committed to.",
  },
  {
    title: "What We Believe",
    icon: Lightbulb,
    description:
      "Technology is most valuable when it solves a genuine problem, serves the people using it, and is built to be handed on.",
  },
];

const CoreValues = () => {
  const variants = useRevealVariants()
  const textContainer = useStaggerContainer()
  const textItem = useStaggerItem()

  return (
    <section id="values" className="bg-muted py-16 dark:bg-slate-950 lg:py-24">
      <div className="container">
        <motion.div
          className="mb-12 text-center"
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-secondary">
            What guides us
          </p>
          <h2>Our Core Values</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {values.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={title}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={revealViewport}
              custom={index}
              whileHover={{ ...CARD_HOVER, transition: CARD_HOVER_SPRING }}
              className="h-full"
            >
              <MagicCard className="h-full rounded-lg border border-border bg-white p-8 dark:bg-slate-900">
                <motion.div
                  variants={textContainer}
                  initial="hidden"
                  whileInView="show"
                >
                  <motion.span
                    variants={textItem}
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-accent-soft text-primary transition-transform duration-300 group-hover:scale-110"
                  >
                    <Icon width={22} height={22} />
                  </motion.span>
                  <motion.h3 variants={textItem} className="mb-3 text-xl">
                    {title}
                  </motion.h3>
                  <motion.p
                    variants={textItem}
                    className="text-base leading-relaxed text-secondary"
                  >
                    {description}
                  </motion.p>
                </motion.div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <>
    <Helmet>
      <title>About | TECHCORE</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle id="about" subtitle="A small senior team in Yaounde, Cameroon. We design, build, and hand over software, and you talk directly to the people writing it.">
        Built by Developers. Driven by Innovation.
      </SectionPageTitle>

      <Manifesto id="manifesto" />

      <CoreValues />

      <SectionChecklist id="process" />
      <SectionTeam id="team" />
      <SectionCTA id="contact" />
    </main>
  </>
);

export default About;
