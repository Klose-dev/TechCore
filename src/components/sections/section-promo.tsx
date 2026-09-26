import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const SectionPromo = () => {
  return (
    <section className="relative overflow-hidden bg-muted pb-28 pt-10 dark:bg-slate-900 lg:pb-32 lg:pt-24">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex justify-center">
            <img
              src="/techcore-logo.svg"
              alt="TECHCORE developer community"
              width={320}
              height={320}
              className="w-56 rounded-full shadow-xl sm:w-72"
            />
          </div>
          <div>
          <h2 className="max-w-md">More Than Just a Developer Group</h2>
          <p className="mb-10 text-lg">
            TECHCORE is a community built around people, ideas, and technology. Members can
            ask questions, share knowledge, discover opportunities, collaborate on projects,
            and connect with developers who share the same passion for building meaningful
            software.
          </p>
          <Button asChild>
            <a href="/contact">
              Join the Community
              <ChevronRightIcon width={20} height={20} className="-mr-2 ml-4" />
            </a>
          </Button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPromo;
