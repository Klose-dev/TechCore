import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const serviceTabs = [
  {
    id: "web-apps",
    title: "Web Apps",
    content: {
      title: "Web applications your team can rely on",
      subtitle:
        "Dashboards, portals, and internal tools built on a stack your engineers can maintain.",
      text: "We build the whole thing: data model, API, interface, and deployment. You get a working product in week one, not a wireframe and a roadmap. Every sprint ends with something deployed.",
      cta: "Start a project",
      image: "services/service_1.jpg",
    },
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    content: {
      title: "Cross-platform apps that work on slow connections",
      subtitle:
        "One codebase, iOS and Android, tuned for the networks your users actually have.",
      text: "We design for the phone in a user's hand, not the screen in a design file. Offline states, small payloads, and fast first paint are part of the build. You get a store-ready build at the end of the sprint.",
      cta: "Start a project",
      image: "services/service_2.jpg",
    },
  },
  {
    id: "ai-tools",
    title: "AI Tools",
    content: {
      title: "LLM features tuned to how you already work",
      subtitle:
        "Assistants, extraction, and automation added to the product you already run.",
      text: "We start by finding the slow, repetitive part of your workflow and putting a model on it. Prompts, retrieval, and evaluation are part of the engineering, not an afterthought. If AI does not earn its keep in the sprint, we will tell you.",
      cta: "Start a project",
      image: "services/service_3.jpg",
    },
  },
  {
    id: "data-systems",
    title: "Data Systems",
    content: {
      title: "Pipelines and dashboards you can defend",
      subtitle:
        "Clean data, reproducible jobs, and reporting the business can read without help.",
      text: "We map where your data comes from, fix the gaps, and put it behind dashboards people actually open. Pipelines are versioned and monitored, so a broken job is a page, not a mystery. You get the schema and the runbook too.",
      cta: "Start a project",
      image: "services/service_4.jpg",
    },
  },
];

const SectionServiceTabs = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="relative py-16 lg:py-24">
      <div className="container max-w-5xl">
        <Tabs defaultValue="web-apps">
          <TabsList className="mb-10 md:mb-20">
            {serviceTabs.map((serviceTab) => (
              <TabsTrigger key={serviceTab.id} value={serviceTab.id}>
                {serviceTab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {serviceTabs.map((serviceTab) => (
            <TabsContent
              key={serviceTab.id}
              value={serviceTab.id}
              className="md:flex md:justify-between"
            >
              <div className="mb-10 md:w-1/2">
                {serviceTab.content.title && (
                  <h2 className="mb-5 max-w-md">{serviceTab.content.title}</h2>
                )}
                {serviceTab.content.subtitle && (
                  <p className="mb-4 text-lg">{serviceTab.content.subtitle}</p>
                )}

                {serviceTab.content.text && (
                  <p className="mb-4">{serviceTab.content.text}</p>
                )}

                {serviceTab.content.cta && (
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-bold text-secondary hover:text-primary"
                  >
                    {serviceTab.content.cta}
                    <ChevronRightIcon width={20} height={20} className="ml-4" />
                  </a>
                )}
              </div>
              {serviceTab.content.image && (
                <div className="md:pl-8">
                  <img
                    src={serviceTab.content.image}
                    width={356}
                    height={356}
                    alt={serviceTab.title}
                    className="rounded"
                  />
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SectionServiceTabs;
