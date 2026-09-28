import ContactForm from "@/components/forms/contact-form";

const SectionContactForm = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="pb-16 lg:pb-28">
      <div className="container">
        <ContactForm />
      </div>
    </section>
  );
};

export default SectionContactForm;
