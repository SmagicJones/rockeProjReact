import { Hero } from "./Hero";
import { Rockets } from "./Rockets";
import { Testimonials } from "./Testimonials";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Main = () => {
  return (
    <main className="mx-auto max-w-4xl">
      <Hero />
      <hr className="mx-auto bg-black dark:bg-white" />
      <Rockets/>
      <hr className="mx-auto bg-black dark:bg-white" />
      <Testimonials/>
      <hr className="mx-auto bg-black dark:bg-white" />
      <Contact/>
      <hr className="mx-auto bg-black dark:bg-white" />
      <Footer/>
    </main>
  );
};
