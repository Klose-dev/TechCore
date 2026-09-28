import SectionHeroLayout3 from "@/components/sections/section-hero-layout-3";
import SectionPartnersLayout2 from "@/components/sections/section-partners-layout-2";
import SectionBenefits from "@/components/sections/section-benefits";
import SectionIconBoxesLayout2 from "@/components/sections/section-icon-boxes-layout-2";
import SectionFAQ from "@/components/sections/section-faq";
import SectionCTALayout3 from "@/components/sections/section-cta-layout-3";
import { Helmet } from "react-helmet";

const HomeConsulting = () => (
  <>
    <Helmet>
      <title>Consulting | TECHCORE</title>
      <meta
        name="description"
        content="Talk to the engineers building your product. TECHCORE scopes the work, agrees the number once, and ships working software every week."
      />
    </Helmet>
    <main className="relative">
      <SectionHeroLayout3 id="overview" />
      <SectionPartnersLayout2 id="stack" />
      <SectionBenefits id="process" />
      <SectionIconBoxesLayout2 id="services" />
      <SectionFAQ id="faq" />
      <SectionCTALayout3 id="contact" />
    </main>
  </>
);

export default HomeConsulting;
