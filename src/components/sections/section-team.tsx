import { motion } from "framer-motion";
import SectionTitle from "./section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { cn } from "@/lib/utils";
import MagicCard from "@/components/ui/magic-card";
import {
  CARD_HOVER,
  CARD_HOVER_SPRING,
  revealViewport,
  useRevealVariants,
  useStaggerContainer,
  useStaggerItem,
} from "@/components/ui/motion";

export const team = [
  {
    image: "team/1.jpg",
    name: "Aisha Bello",
    position: "Frontend Engineer",
    description:
      "Builds responsive user interfaces and turns product ideas into approachable, high-quality experiences.",
    socials: [
      { icon: faGithub, color: "bg-[#333]", url: "#" },
      { icon: faXTwitter, color: "bg-black", url: "#" },
      { icon: faLinkedin, color: "bg-[#0a66c2]", url: "#" },
    ],
  },
  {
    image: "team/2.jpg",
    name: "Daniel Okafor",
    position: "Backend Engineer",
    description:
      "Designs APIs, system architecture, and scalable services that power the tools TECHCORE builds.",
    socials: [
      { icon: faGithub, color: "bg-[#333]", url: "#" },
      { icon: faLinkedin, color: "bg-[#0a66c2]", url: "#" },
      { icon: faXTwitter, color: "bg-black", url: "#" },
    ],
  },
  {
    image: "team/3.jpg",
    name: "Kehinde Peters",
    position: "AI & Product Developer",
    description:
      "Explores practical machine learning and product thinking to turn ideas into useful, real-world solutions.",
    socials: [
      { icon: faGithub, color: "bg-[#333]", url: "#" },
      { icon: faLinkedin, color: "bg-[#0a66c2]", url: "#" },
      { icon: faYoutube, color: "bg-[#cd201f]", url: "#" },
    ],
  },
];

const SectionTeam = ({ id }: { id?: string }) => {
  const variants = useRevealVariants();
  const textContainer = useStaggerContainer();
  const textItem = useStaggerItem();

  return (
    <section
      id={id}
      className="relative isolate overflow-hidden bg-background py-16 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          subtitle="TECHCORE is powered by developers with different skills, perspectives, and areas of expertise. Together, we learn, collaborate, and build."
          sectionClasses="mx-auto max-w-xl text-center mb-12"
          titleClasses="mb-3 text-center"
          subtitleClasses="text-md font-medium"
        >
          Meet the Developers
        </SectionTitle>
        <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {team.map((item, index) => (
            <motion.div
              key={index}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={revealViewport}
              custom={index}
              whileHover={{ ...CARD_HOVER, transition: CARD_HOVER_SPRING }}
              className="h-full"
            >
              <MagicCard className="h-full">
                <motion.div
                  className="relative z-10"
                  variants={textContainer}
                  initial="hidden"
                  whileInView="show"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    loading="lazy"
                    className="mb-6 aspect-[4/3] w-full rounded object-cover"
                  />
                  <motion.div variants={textItem}>
                    {item.name && <h3 className="mb-1">{item.name}</h3>}
                    {item.position && (
                      <span className="text-sm font-bold text-secondary">
                        {item.position}
                      </span>
                    )}
                  </motion.div>
                  {item.description && (
                    <motion.p variants={textItem} className="my-5 text-secondary">
                      {item.description}
                    </motion.p>
                  )}
                  {item.socials && (
                    <motion.ul variants={textItem} className="relative z-10 flex space-x-2">
                      {item.socials.map((social, socialIndex) => (
                        <li key={socialIndex}>
                          <a
                            href={social.url}
                            aria-label={`${item.name} profile`}
                            className={cn(
                              "mb-2 flex h-10 w-10 items-center justify-center rounded text-white transition-colors hover:bg-foreground hover:text-white",
                              social.color,
                            )}
                          >
                            <FontAwesomeIcon icon={social.icon} width={15} />
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTeam;
