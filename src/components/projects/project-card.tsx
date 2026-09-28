import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import MagicCard from "@/components/ui/magic-card";
import {
  CARD_HOVER,
  CARD_HOVER_SPRING,
  revealViewport,
  useRevealVariants,
  useStaggerContainer,
  useStaggerItem,
} from "@/components/ui/motion";

type Props = {
  project: Post;
  index?: number;
};

const ProjectCard = ({ project, index = 0 }: Props) => {
  const featuredMedia = project.featuredmedia;
  const featuredImageSizes = featuredMedia?.["media_details"];
  const softwareProjects = [
    { title: "BuildFlow Platform", category: "Web Application", excerpt: "A collaborative project workspace that helps software teams plan, ship, and monitor products together.", stats: [["12", "Active contributors"], ["98%", "Test coverage"]] },
    { title: "Pulse Mobile App", category: "Mobile Development", excerpt: "A fast cross-platform mobile experience connecting communities with the tools and updates they need.", stats: [["2", "Platforms shipped"], ["4.9", "User rating"]] },
    { title: "Core Analytics API", category: "Backend & APIs", excerpt: "A scalable TypeScript API that turns product data into clear, actionable engineering insights.", stats: [["40ms", "Average response"], ["99.9%", "API uptime"]] },
    { title: "LearnStack", category: "Developer Education", excerpt: "An interactive learning platform for developers building practical skills through guided projects.", stats: [["80+", "Learning modules"], ["3k", "Developers reached"]] },
  ];
  const softwareProject = softwareProjects[(Number(project.id) - 1) % softwareProjects.length] || softwareProjects[0];
  const projectImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
  ];
  const projectImage = projectImages[(Number(project.id) - 1) % projectImages.length] || projectImages[0];

  const variants = useRevealVariants();
  const textContainer = useStaggerContainer();
  const textItem = useStaggerItem();

  return (
    <MagicCard className="h-full">
      <motion.article
        className="h-full overflow-hidden rounded-lg bg-surface"
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        custom={index}
        whileHover={{ ...CARD_HOVER, transition: CARD_HOVER_SPRING }}
      >
        <figure className="relative overflow-hidden">
          <div className="absolute left-0 top-0 z-[1] flex space-x-1.5 p-8 text-xs font-medium">
            <span className="rounded bg-slate-850/80 px-3 py-1 text-white">
              {softwareProject.category}
            </span>
          </div>
          <Link
            to={`/single-project`}
            className="group after:absolute after:inset-0 after:bg-gradient-to-t after:from-slate-950/75 after:via-transparent after:via-50%"
          >
            <img
              src={projectImage}
              alt={softwareProject.title}
              width={featuredImageSizes?.width || 1200}
              height={featuredImageSizes?.height || 800}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
            />
          </Link>
          <motion.h2
            variants={textItem}
            className="absolute bottom-0 mb-0 px-8 py-6 text-xl font-bold text-white"
          >
            <Link
              to={`/single-project`}
              className="transition-colors hover:text-primary"
            >
              {softwareProject.title}
            </Link>
          </motion.h2>
        </figure>
        <motion.div
          className="bg-surface p-8"
          variants={textContainer}
          initial="hidden"
          whileInView="show"
        >
          {softwareProject.stats && (
            <motion.dl
              variants={textItem}
              className="mb-5 flex flex-wrap items-center lg:flex-nowrap"
            >
              {softwareProject.stats.map(([value, label], statIndex) => (
                <div
                  key={label}
                  className={`w-full p-3 text-center lg:flex-1 ${statIndex === 0 ? "lg:border-r" : ""}`}
                >
                  <dd className="text-green block text-2xl font-bold lg:text-[2.25rem]">{value}</dd>
                  <dt className="text-[1.0625rem] font-bold">{label}</dt>
                </div>
              ))}
            </motion.dl>
          )}

          <motion.p variants={textItem} className="text-secondary">
            {softwareProject.excerpt}
          </motion.p>
          <motion.p variants={textItem} className="mt-6">
            <Link
              to={`/single-project`}
              className="inline-flex items-center text-sm font-bold text-secondary transition-colors hover:text-primary"
            >
              View Case Study
              <motion.span
                aria-hidden="true"
                className="ml-4 inline-block"
                variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
              >
                <ChevronRightIcon width={20} height={20} />
              </motion.span>
            </Link>
          </motion.p>
        </motion.div>
      </motion.article>
    </MagicCard>
  );
};

export default ProjectCard;
