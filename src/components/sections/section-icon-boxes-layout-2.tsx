import { motion } from "framer-motion";
import IconBoxLayout2 from "@/components/icon-box-layout-2";
import {
  CARD_HOVER,
  CARD_HOVER_SPRING,
  revealViewport,
  useRevealVariants,
} from "@/components/ui/motion";
import ContactsLineIcon from "remixicon-react/ContactsLineIcon";
import Message2LineIcon from "remixicon-react/Message2LineIcon";
import ListSettingsLineIcon from "remixicon-react/ListSettingsLineIcon";
import FileTextLineIcon from "remixicon-react/FileTextLineIcon";
import Database2LineIcon from "remixicon-react/Database2LineIcon";
import Key2LineIcon from "remixicon-react/Key2LineIcon";

export const iconBoxes = [
  {
    icon: <ContactsLineIcon className="fill-primary" size={32} />,
    iconBase: "bg-[#FEE8E8]",
    title: "Web Apps",
    description:
      "Fast, accessible web applications on a modern stack, built to scale with your team instead of against it.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FA6262]",
  },
  {
    icon: <Message2LineIcon className="fill-[#44D88D]" size={32} />,
    iconBase: "bg-[#E3F9EE]",
    title: "Mobile Apps",
    description:
      "Cross-platform mobile experiences that feel native on every device, even on slow rural connections.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#44D88D]",
  },
  {
    icon: <ListSettingsLineIcon className="fill-[#4C86E7]" size={32} />,
    iconBase: "bg-[#D3E9FF]",
    title: "Desktop Apps",
    description:
      "Native-feeling desktop software for Windows, macOS, and Linux that your team can rely on all day.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#4C86E7]",
  },
  {
    icon: <FileTextLineIcon className="fill-[#7444FF]" size={32} />,
    iconBase: "bg-[#EAE3FF]",
    title: "AI Tools",
    description:
      "LLM integrations, intelligent automation, and custom models tuned to the way your team already works.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#7444FF]",
  },
  {
    icon: <Database2LineIcon className="fill-[#FFAF13]" size={32} />,
    iconBase: "bg-[#FFF3DC]",
    title: "Data Systems",
    description:
      "Pipelines, dashboards, and reporting that turn scattered raw data into decisions you can defend.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FFAF13]",
  },
  {
    icon: <Key2LineIcon className="fill-[#B939E5]" size={32} />,
    iconBase: "bg-[#FAF1FF]",
    title: "Product Design",
    description:
      "Research, wireframes, and polished interfaces that make genuinely complex systems feel simple.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
  },
];

const SectionIconBoxesLayout2 = ({ id }: { id?: string }) => {
  const variants = useRevealVariants();

  return (
    <section id={id} className="py-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="text-center lg:w-3/5">
            <h2 className="mb-12">
              Everything we build, from first sketch to{" "}
              <span className="text-primary">a product your customers use</span>.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
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
                <IconBoxLayout2 iconBox={iconBox} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxesLayout2;
