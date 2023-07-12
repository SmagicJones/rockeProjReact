import rocketman from "../assets/rocketman.png";
import rocketRide from "../assets/rocketride.png";
import rocketLaunch from "../assets/rocketlaunch.png";

export const RocketCard = ({
  rocketName,
  price,
  imageAlt,
  tagline,
}) => {
  return (
    <li className="mx-auto flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
      <img
        src={
          rocketName === "Explorer"
            ? rocketman
            : rocketName === "Adventurer"
            ? rocketRide
            : rocketLaunch
        }
        alt={imageAlt}
        className="mb-6 w-1/2"
      />
      <h3 className="text-center text-3xl text-slate-500 dark:text-white">
        {rocketName}
      </h3>
      <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
        {price}
      </p>
      <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
        {tagline}
      </p>
    </li>
  );
};
