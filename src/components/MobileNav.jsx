export const MobileNav = ({toggleMenuClass, mobileMenu }) => {
  return (
    <section
      id="mobile-menu"
      className={`justify-content-center top-68 absolute w-full origin-top flex-col bg-black text-5xl text-pa ${toggleMenuClass} animate-open-says-me`}
    >
      <nav
        className="flex min-h-screen flex-col items-center py-8"
        aria-label="mobile"
        onClick={mobileMenu}
      >
        <a href="#hero" className="w-full py-6 text-center hover:opacity-90">
          Home
        </a>
        <a href="#rockets" className="w-full py-6 text-center hover:opacity-90">
          Our Rockets
        </a>
        <a
          href="#testimonials"
          className="w-full py-6 text-center hover:opacity-90"
        >
          Tesimonials
        </a>
        <a href="#contact" className="w-full py-6 text-center hover:opacity-90">
          Contact Us
        </a>
        <a href="#footer" className="w-full py-6 text-center hover:opacity-90">
          Legal
        </a>
      </nav>
    </section>
  );
};
