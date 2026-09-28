const SectionBenefits = ({ id }: { id?: string }) => {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-gradient-to-b from-[#EBE4FA]/25 to-muted/25 py-24 dark:bg-slate-900 dark:bg-none lg:py-32"
    >
      <div className="container">
        <div className="flex flex-wrap items-center justify-between lg:flex-nowrap">
          <div className="relative z-[1] mb-10 lg:w-1/2">
            <img
              src="circles_pattern.png"
              alt="circles pattern"
              width={640}
              height={561}
              className="absolute -z-[1] -translate-y-8 scale-110 dark:opacity-10"
            />
            <img
              src="benefits_img_1.jpg"
              alt="TechCore delivery process"
              width={540}
              height={540}
              className="rounded-xl"
            />
            <div className="absolute -right-10 top-1/4 w-1/2 animate-fly rounded-xl lg:w-auto">
              <img
                src="benefits_img_2.jpg"
                alt="TechCore delivery process"
                width={320}
                height={320}
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="lg:w-2/5 lg:pl-10">
            <h2 className="max-w-sm">
              From idea to shipped product in 30 days
            </h2>
            <p className="mb-8 text-lg">
              A fixed sprint, a weekly demo, and a small team. You see working
              software every week instead of a status report.
            </p>
            <div className="mb-6 flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-8 w-8 shrink-0 fill-green"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
              </svg>
              <div>
                <h3 className="mb-3 text-base">
                  Fixed scope, no surprise invoices
                </h3>
                <p className="text-base">
                  We agree the scope before we start, and we tell you the number
                  once. No change orders halfway through a sprint.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-8 w-8 shrink-0 fill-green"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
              </svg>
              <div>
                <h3 className="mb-3 text-base">You talk to the builders</h3>
                <p className="text-base">
                  No account managers, no relay race. You talk directly to the
                  engineers writing your code, so nothing gets lost in
                  translation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBenefits;
