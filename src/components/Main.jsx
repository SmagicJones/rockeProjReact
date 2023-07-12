import { Hero } from "./Hero";
import { Rockets } from "./Rockets";
import { Testimonials } from "./Testimonials";
import { Contact } from "./Contact";


export const Main = () => {
  return (
    <main>
      <Hero />
      <hr className="mx-auto bg-black dark:bg-white" />
      <Rockets />
      <hr className="mx-auto bg-black dark:bg-white" />
      <Testimonials />
      <hr className="mx-auto bg-black dark:bg-white" />
      <Contact />
    </main>
  );
};
