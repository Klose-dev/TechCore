const SectionResults = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="bg-muted py-16 dark:bg-slate-900 lg:py-24">
      <div className="container">
        <div className="flex flex-wrap items-center lg:flex-nowrap lg:space-x-16">
          <div className="w-full lg:w-[54%] lg:pr-20">
            <h2 className="mb-5 max-w-md">
              How a 30-day sprint actually runs
            </h2>
            <p className="mb-8 text-lg">
              Discovery in the first week, working software every week after,
              and a production release on day thirty. Here is what that looks
              like in practice.
            </p>
          </div>
          <div className="w-full lg:w-[46%]">
            <div className="flex flex-wrap lg:flex-nowrap lg:space-x-10">
              <div className="w-full lg:w-1/2">
                <div className="hover-shadow mb-10 rounded bg-white p-12 dark:bg-slate-800">
                  <span className="text-green mb-3 block text-3xl font-bold md:text-5xl">
                    40+
                  </span>
                  <span className="text-md font-medium text-foreground dark:text-white">
                    Projects shipped
                  </span>
                </div>
                <div className="hover-shadow mb-10 rounded bg-white p-12 dark:bg-slate-800">
                  <span className="text-green mb-3 block text-3xl font-bold md:text-5xl">
                    25+
                  </span>
                  <span className="text-md font-medium text-foreground dark:text-white">
                    Happy clients
                  </span>
                </div>
              </div>
              <div className="w-full lg:mt-10 lg:w-1/2">
                <div className="hover-shadow mb-10 rounded bg-white p-12 dark:bg-slate-800">
                  <span className="text-green mb-3 block text-3xl font-bold md:text-5xl">
                    30
                  </span>
                  <span className="text-md font-medium text-foreground dark:text-white">
                    Day sprint cycle
                  </span>
                </div>
                <div className="hover-shadow rounded bg-white p-12 dark:bg-slate-800">
                  <span className="text-green mb-3 block text-3xl font-bold md:text-5xl">
                    100%
                  </span>
                  <span className="text-md font-medium text-foreground dark:text-white">
                    On-time delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionResults;
