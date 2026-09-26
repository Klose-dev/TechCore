import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionIconBoxes from "@/components/sections/section-icon-boxes";
import SectionCTA from "@/components/sections/section-cta";
import MagicCard from "@/components/ui/magic-card";
import { revealViewport, useRevealVariants } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const SERVICES = [
  [
    "Web Development",
    "Modern, responsive, and scalable websites and web applications designed to solve real problems.",
  ],
  [
    "Software Development",
    "Custom software solutions built around specific business, organizational, and community needs.",
  ],
  [
    "Mobile Development",
    "Mobile applications designed to provide practical and accessible digital experiences.",
  ],
  [
    "AI & Machine Learning",
    "Intelligent solutions using artificial intelligence, machine learning, computer vision, and automation.",
  ],
  [
    "UI/UX Design",
    "User-centered interfaces that combine functionality, accessibility, and modern design.",
  ],
  [
    "Backend & API Development",
    "Secure and scalable backend systems, APIs, databases, and server-side applications.",
  ],
  [
    "Open Source & Collaboration",
    "Collaborative development of projects that encourage knowledge sharing and community contribution.",
  ],
  [
    "Technical Research",
    "Exploring emerging technologies and developing innovative solutions to real-world problems.",
  ],
];

const ServiceGrid = () => {
  const variants = useRevealVariants()

  return (
    <section className="pb-16 lg:pb-24">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map(([title, description], index) => (
            <motion.div
              key={title}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={revealViewport}
              custom={index}
            >
              <MagicCard className="h-full rounded-xl border border-border bg-surface p-6">
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="text-sm leading-6 text-secondary">{description}</p>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Services = useFramerTransition(
  <>
    <Helmet>
      <title>Services | TECHCORE</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle subtitle="From experimental ideas to practical software systems, TECHCORE builds solutions that help people and teams move faster.">
        What We Build
      </SectionPageTitle>
      <SectionIconBoxes noTitle />
      <ServiceGrid />
      <SectionCTA />
    </main>
  </>,
);

export default Services;
