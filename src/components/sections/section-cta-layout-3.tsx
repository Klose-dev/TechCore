import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SectionCTALayout3 = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="pb-16 dark:bg-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
          }}
        >
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-xl px-6 py-20 text-center shadow-sm dark:shadow-slate-950/40">
              <img
                src="hero/gradient_creative.png"
                className="dark:hidden absolute w-full h-full inset-0"
                sizes="100vw"
                alt="TechCore green gradient"
              />
              <img
                src="hero/gradient_creative_dark.png"
                className="hidden dark:block absolute w-full h-full inset-0"
                alt="TechCore green gradient"
              />
              <div className="relative mx-auto max-w-md">
                <h2 className="mb-4">
                  Have a project you want shipped?
                </h2>
                <p className="mb-8 text-lg">
                  Tell us what you are building and we will tell you honestly
                  whether we are the right team for it.
                </p>
                <Link to="/contact">
                  <Button size="lg">Let’s Work Together</Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionCTALayout3;
