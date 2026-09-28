import { motion } from "framer-motion";
import IconBox from "@/components/icon-box";
import {
  CARD_HOVER,
  CARD_HOVER_SPRING,
  revealViewport,
  useRevealVariants,
} from "@/components/ui/motion";

export const iconBoxes = [
  {
    icon: "icons/software-service-2045_e40b986c-38b0-4c8f-b7a3-b5e6ce091b6a.svg",
    title: "Web Apps",
    description:
      "Fast, accessible web applications on a modern stack, built to scale with your team instead of against it.",
  },
  {
    icon: "icons/smartphone-4897_aa627869-d7e7-4f56-84f6-f23923d72bf4.svg",
    title: "Mobile Apps",
    description:
      "Cross-platform mobile experiences that feel native on every device, even on slow rural connections.",
  },
  {
    icon: "icons/puzzle-2058_36759580-64eb-459e-bc98-511d2b9a045d.svg",
    title: "AI Tools",
    description:
      "LLM integrations and intelligent automation tuned to the way your team already works.",
  },
  {
    icon: "icons/data-app-2057_cdd8fbaf-0caf-4a7b-9644-9004976bca94.svg",
    title: "Data Systems",
    description:
      "Pipelines, dashboards, and reporting that turn scattered raw data into decisions you can defend.",
  },
];

const SectionIconBoxes = ({
  noTitle,
  id,
}: {
  noTitle?: boolean;
  id?: string;
}) => {
  const variants = useRevealVariants();

  return (
    <section id={id} className="py-16 lg:py-24">
      <div className="container">
        {!noTitle && (
          <div className="flex justify-center">
            <div className="text-center lg:w-3/5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                What We Build
              </p>
              <h2 className="mb-12">
                Software that solves a real problem, not a slide deck.
              </h2>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={iconBox.title}
                variants={variants}
                initial="hidden"
                whileInView="show"
                viewport={revealViewport}
                custom={index}
                whileHover={{ ...CARD_HOVER, transition: CARD_HOVER_SPRING }}
                className="h-full"
              >
                <IconBox iconBox={iconBox} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxes;
