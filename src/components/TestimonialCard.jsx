export const TestimonialCard = ({
  figureClass,
  blockquoteClass,
  paragraphClass,
  paragraphText,
  figcaptionClass,
  figcaptionText,
}) => {
  return (
    <figure className={figureClass}>
      <blockquote className={blockquoteClass}>
        <p className={paragraphClass}>{paragraphText}</p>
      </blockquote>
      <figcaption className={figcaptionClass}>{figcaptionText}</figcaption>
    </figure>
  );
};
