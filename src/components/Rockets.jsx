import { rocketData } from "./rocketData";

import { RocketCard } from "./RocketCard";

export const Rockets = () => {
  return (
    <section
      id="rockets"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Rockets
      </h2>
      <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
        {rocketData.map((rocket, i) => {
          return (
            <RocketCard
              key={i}
              itemClass={rocket.itemClass}
              rocketName={rocket.rocketName}
              rocketNameClass={rocket.rocketNameClass}
              price={rocket.price}
              priceClass={rocket.priceClass}
              imageLocation={rocket.image}
              imageAlt={rocket.imageAlt}
              imageClass={rocket.imageClass}
              tagline={rocket.tagline}
              taglineClass={rocket.taglineClass}
            />
          );
        })}
      </ul>
    </section>
  );
};
