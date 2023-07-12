import { Hero } from "./Hero";
import { Rockets } from "./Rockets";
import { Testimonials } from "./Testimonials";

export const Main = () => {
  return (
    <main className="mx-auto max-w-4xl">
      <Hero />
      <hr className="mx-auto bg-black dark:bg-white" />
      <Rockets/>
      <hr className="mx-auto bg-black dark:bg-white" />
      <Testimonials/>

    </main>
  );
};
