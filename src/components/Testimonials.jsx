import { testimonialData } from "./testimonialData";

import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="widscreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:5xl">
        Testimonials
      </h2>
      {testimonialData.map((testimonial, i) => {
        return (
          <TestimonialCard
            key={i}
            figureClass={testimonial.figcaptionClass}
            blockquoteClass={testimonial.blockquoteClass}
            paragraphClass={testimonial.paragraphClass}
            paragraphText={testimonial.paragraphText}
            figcaptionClass={testimonial.figcaptionClass}
            figcaptionText={testimonial.figcaptionText}
          />
        );
      })}
    </section>
  );
};
