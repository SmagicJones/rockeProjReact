import rocketdab from "../assets/rocketdab.png";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row widescreen:section-min-height tallscreen:section-min-height"
    >
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
          We boldly go
          <span className="text-indigo-700 dark:text-indigo-300">
            where no rocket
          </span>
          has gone before...
        </h2>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dar:text-slate-400 sm:text-left">
          We're building rockets for the next century today. From the Moon to
          Mars, Jupiter and beyond...
        </p>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          Think Acme Rockets.
        </p>
      </article>
      <img src={rocketdab} alt="" />
    </section>
  );
};
