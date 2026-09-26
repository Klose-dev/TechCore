import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionContactForm from "@/components/sections/section-contact-form";
import { Helmet } from "react-helmet";

const Contact = useFramerTransition(
  <>
    <Helmet>
      <title>Contact | TECHCORE</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle subtitle="Have a project idea, collaboration opportunity, technical question, or simply want to connect with TECHCORE? We’d love to hear from you.">
        Let’s Build Something Together
      </SectionPageTitle>
      <SectionContactForm />
    </main>
  </>,
);

export default Contact;
