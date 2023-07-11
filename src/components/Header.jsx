import { MobileNav } from "./MobileNav";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-teal-700 text-white">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="font-md text-3xl">
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <div>
          <button
            id="hamburger-button"
            className="relative h-8 w-8 cursor-pointer text-3xl focus:outline-none md:hidden"
          >
            <div className="absolute top-4 -mt-0 5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:content-['']"></div>
          </button>
          <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">
              Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
        </div>
      </section>
      <MobileNav/>
    </header>
  );
};
