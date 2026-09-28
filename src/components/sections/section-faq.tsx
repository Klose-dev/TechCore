import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MagicCard from "@/components/ui/magic-card";

const accordionItems = [
  {
    title: "What is TECHCORE?",
    content:
      "TECHCORE is a small senior software team in Yaounde, Cameroon. We design and build web apps, desktop apps, mobile apps, AI tools, and data systems, from discovery to launch in 30 days.",
  },
  {
    title: "Who do you work with?",
    content:
      "A small senior team based in Yaounde, Cameroon. You talk directly to the engineers building your product, not to an account manager.",
  },
  {
    title: "How long does a project take?",
    content:
      "Most projects run on a 30-day sprint. Discovery happens in the first week, you see working software every week after that, and we ship to production on day thirty.",
  },
  {
    title: "What does TECHCORE build?",
    content:
      "Web applications, mobile and desktop apps, AI integrations and automation, and data pipelines with dashboards and reporting.",
  },
  {
    title: "What does a sprint cost?",
    content:
      "It depends on scope, so we agree the scope before we start and give you the number once. No surprise invoices and no change orders halfway through.",
  },
];

const SectionFAQ = ({ id }: { id?: string }) => {
  return (
    <section
      id={id}
      className="relative overflow-hidden py-24 dark:bg-slate-900 lg:py-32"
    >
      <div className="container">
        <div className="flex flex-wrap items-center justify-between lg:flex-nowrap">
          <div className="lg:w-[45%] lg:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
            >
              <h2>Frequently Asked Questions</h2>
              <p className="mb-8 text-lg">
                Everything you need to know about how we work, what we build, and what a 30-day sprint looks like.
              </p>
              <Accordion
                type="multiple"
                defaultValue={[accordionItems[0].title]}
                className="w-full"
              >
                {accordionItems?.map((item, index) => (
                  <AccordionItem key={index} value={item.title}>
                    <AccordionTrigger className="text-md">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {item.content}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <span className="mt-14 inline-block text-lg">
                Any Question?{" "}
                <a href="mailto:hello@techcore.dev" className="text-primary">
                  hello@techcore.dev
                </a>
              </span>
            </motion.div>
          </div>

          <div className="relative z-[1] mb-10 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
            >
              <img
                src="circles_pattern_2.png"
                alt="circles pattern"
                width={526}
                height={531}
                className="absolute right-10 top-4 -z-[1] -translate-y-8 scale-110 dark:opacity-10"
              />
              <div className="mt-12 md:flex md:space-x-8 lg:justify-end">
                <img
                  src="faq.jpg"
                  alt="The TechCore team collaborating"
                  width={320}
                  height={320}
                  className="mb-8 inline-block rounded-xl"
                />
                <MagicCard className="mb-8 max-w-[13.125rem] self-end rounded-xl border border-border bg-surface p-8 shadow-lg">
                  <span className="mb-4 block text-base font-semibold text-foreground">
                    Projects delivered
                  </span>
                  <span className="mb-4 block text-3xl font-bold text-primary">
                    40+
                  </span>
                  <span className="block text-base text-secondary">
                    Across fintech, health, logistics, and education.
                  </span>
                </MagicCard>
              </div>
              <div className="relative">
                <MagicCard className="mx-auto max-w-xs self-start rounded-xl border border-border bg-surface p-8 shadow-lg">
                  <div className="absolute right-8 top-8 rounded-full bg-accent-soft p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="fill-primary"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M4.406 14.523l3.402-3.402 2.828 2.829 3.157-3.157L12 9h5v5l-1.793-1.793-4.571 4.571-2.828-2.828-2.475 2.474a8 8 0 1 0-.927-1.9zm-1.538 1.558l-.01-.01.004-.004A9.965 9.965 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10c-4.07 0-7.57-2.43-9.132-5.919z"></path>
                    </svg>
                  </div>

                  <div className="relative z-10 text-left">
                    <span className="mb-4 block text-base font-semibold text-foreground">
                      Sprint length
                    </span>
                    <span className="mb-4 block text-3xl font-bold text-primary">
                      30 days
                    </span>
                    <span className="block text-base text-secondary">
                      From discovery to a live, production release.
                    </span>
                  </div>
                </MagicCard>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFAQ;
