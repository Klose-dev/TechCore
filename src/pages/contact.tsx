import SectionPageTitle from "@/components/sections/section-page-title";
import SectionContactForm from "@/components/sections/section-contact-form";
import { Helmet } from "react-helmet";

const Contact = () => (
  <>
    <Helmet>
      <title>Contact | TECHCORE</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle id="about" subtitle="Have a project idea, collaboration opportunity, technical question, or simply want to connect with TECHCORE? We’d love to hear from you.">
        Let’s Build Something Together
      </SectionPageTitle>
      <SectionContactForm id="form" />
    </main>
  </>
);

export default Contact;
