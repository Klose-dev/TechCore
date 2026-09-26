import { motion } from "framer-motion";
import IconBox from "@/components/icon-box";

export const iconBoxes = [
  {
    icon: "icons/medical-research-6506_05214fe4-cb2e-4171-ac03-72168bf2981b.svg",
    title: "Learn",
    description:
      "Sharpen your skills through practical learning, code reviews, and shared technical knowledge.",
  },
  {
    icon: "icons/edit-document-4191_913956ad-aac3-4d29-b4ef-061756334d24.svg",
    title: "Build",
    description:
      "Create real-world products, prototypes, and digital experiences that solve meaningful problems.",
  },
  {
    icon: "icons/currency-2634_d41cd9f8-1db2-4236-b082-94568e599e40.svg",
    title: "Collaborate",
    description:
      "Work with developers from different backgrounds and disciplines to build stronger solutions.",
  },
  {
    icon: "icons/medical-research-6506_05214fe4-cb2e-4171-ac03-72168bf2981b.svg",
    title: "Innovate",
    description:
      "Explore new technologies, test ideas, and develop the next generation of smart tools.",
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SectionIconBoxes = ({ noTitle }: { noTitle?: boolean }) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {!noTitle && (
          <div className="flex justify-center">
            <div className="text-center lg:w-3/5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Community Growth
              </p>
              <h2 className="mb-12">
                We learn, build, collaborate, and innovate together.
              </h2>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={iconBox.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
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
