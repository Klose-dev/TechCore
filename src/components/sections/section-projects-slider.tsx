import ProjectSlider from "@/components/projects/project-slider";
import SectionTitle from "./section-title";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const SectionProjectsSlider = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="py-16 lg:py-24">
      <div className="container">
        <SectionTitle
          subtitle="Real products built for fintech, health, logistics, and education teams."
          sectionClasses="mx-auto max-w-xl text-center mb-12"
          titleClasses="mb-3 text-center"
          subtitleClasses="text-md font-medium"
        >
          What we have shipped
        </SectionTitle>

        <ProjectSlider
          limit={4}
          swiperParams={{
            breakpoints: {
              768: {
                slidesPerView: 2,
              },
              1025: {
                slidesPerView: 2,
              },
            },
            spaceBetween: 40,
            modules: [Pagination],
            pagination: { clickable: true },
          }}
        />
      </div>
    </section>
  );
};

export default SectionProjectsSlider;
