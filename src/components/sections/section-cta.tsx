import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SectionCTA = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="pb-20 pt-8 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="container"
      >
        <div className="relative overflow-hidden rounded-lg bg-primary-dark px-6 py-16 text-center lg:px-12 lg:py-20">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent opacity-20 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="mb-8 text-white">
              Join TECHCORE and build with a community that moves technology
              forward.
            </h2>
            <Link to="/contact">
              <Button
                size="lg"
                className="rounded-full bg-white text-primary-dark hover:bg-accent-soft hover:text-primary-dark"
              >
                Join TECHCORE
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionCTA;
