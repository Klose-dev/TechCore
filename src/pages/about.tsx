import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionChecklist from "@/components/sections/section-checklist";
import SectionTeam from "@/components/sections/section-team";
import SectionCTA from "@/components/sections/section-cta";
import Manifesto from "@/components/sections/manifesto";
import MagicCard from "@/components/ui/magic-card";
import { revealViewport, useRevealVariants } from "@/components/ui/motion";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Compass,
  HelpCircle,
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
      "To create a space where developers can learn, collaborate, and build meaningful technology solutions together.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    description:
      "To become a trusted developer ecosystem that equips people with the skills, networks, and experience to shape the future of technology.",
  },
  {
    title: "Our Values",
    icon: Compass,
    description:
      "We believe in continuous learning, responsible building, respectful collaboration, and thoughtful innovation.",
  },
  {
    title: "Why TECHCORE",
    icon: HelpCircle,
    description:
      "Because developers grow faster when they build together, share ideas, and challenge each other to improve.",
  },
  {
    title: "What We Believe",
    icon: Lightbulb,
    description:
      "Technology is most valuable when it solves real problems, serves communities, and empowers people to create impact.",
  },
];

const CoreValues = () => {
  const variants = useRevealVariants()

  return (
    <section className="bg-muted py-16 dark:bg-slate-950 lg:py-24">
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
            >
              <MagicCard className="h-full rounded-lg border border-border bg-white p-8 dark:bg-slate-900">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-accent-soft text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon width={22} height={22} />
                </span>
                <h3 className="mb-3 text-xl">{title}</h3>
                <p className="text-base leading-relaxed text-secondary">
                  {description}
                </p>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = useFramerTransition(
  <>
    <Helmet>
      <title>About | TECHCORE</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle subtitle="TECHCORE is a developer community created to bring passionate and ambitious developers together in an environment where knowledge, creativity, and collaboration can thrive.">
        Built by Developers. Driven by Innovation.
      </SectionPageTitle>

      <Manifesto />

      <CoreValues />

      <SectionChecklist />
      <SectionTeam />
      <SectionCTA />
    </main>
  </>,
);

export default About;
