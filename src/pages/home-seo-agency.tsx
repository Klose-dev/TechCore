import SectionHeroLayout2 from "@/components/sections/section-hero-layout-2";
import SectionServiceTabs from "@/components/sections/section-service-tabs";
import SectionResults from "@/components/sections/section-results";
import SectionCTA from "@/components/sections/section-cta";
import SectionQuotation from "@/components/sections/section-quotation";
import { Helmet } from "react-helmet";

const HomeSEOAgency = () => (
  <>
    <Helmet>
      <title>Software Studio | TECHCORE</title>
      <meta
        name="description"
        content="A small senior team in Cameroon builds web, mobile, desktop, and AI software from discovery to launch in 30 days."
      />
    </Helmet>
    <main className="relative mt-[4.5rem] lg:mt-[161px]">
      <SectionHeroLayout2 id="overview" />
      <SectionServiceTabs id="services" />
      <SectionResults id="process" />
      <SectionCTA id="faq" />
      <SectionQuotation id="contact" />
    </main>
  </>
);

export default HomeSEOAgency;
