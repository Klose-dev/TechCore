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

const SectionTeam = () => {
  return (
    <section className="relative isolate overflow-hidden bg-background py-16 lg:py-28">
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
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
              custom={index}
            >
              <MagicCard className="h-full">
              <img
                src={item.image}
                alt={item.name}
                width={400}
                height={250}
                className="mb-6 aspect-[4/3] w-full rounded object-cover"
              />
              <div className="relative z-10">
                {item.name && <h3 className="mb-1">{item.name}</h3>}
                {item.position && (
                  <span className="text-sm font-bold text-secondary">
                    {item.position}
                  </span>
                )}
                {item.description && (
                  <p className="my-5 text-secondary">{item.description}</p>
                )}
              </div>
              {item.socials && (
                <div className="relative z-10 flex space-x-2">
                  {item.socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={cn(
                        "mb-2 flex h-10 w-10 items-center justify-center rounded text-white transition-colors hover:bg-foreground hover:text-white",
                        social.color,
                      )}
                    >
                      <FontAwesomeIcon icon={social.icon} width={15} />
                    </a>
                  ))}
                </div>
              )}
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTeam;
