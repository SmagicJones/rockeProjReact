export const Footer = () => {
  return (
    <footer
      id="footer"
      className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justifiy-between"
    >
      <address>
        <h2>Acme Rocket-Powered Products, Inc.</h2>
        555 Astro Way <br />
        Fairfeild, New Jersey 12345-5555 <br />
        Email:
        <a href="mailto:inquires@acmerockets.com">
          inquiries@acmerockets.com
        </a>{" "}
        <br />
        Phone: <a href="tel:+15555555555">(555)-555-5555</a>
      </address>
      <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
        <a href="#rockets" className="hover:opacity-90">
          Our Rockets
        </a>
        <a href="#testimonials" className="hover:opacity-90">
          Testimonials
        </a>
        <a href="#contact" className="hover:opacity-90">
          Contact Us
        </a>
      </nav>
      <div className="flex flex-col sm:gap-2">
        <p className="text-right">
          Copyright &copy; <span id="year">2023</span>
        </p>
        <p className="text-right">All Rights Reserved</p>
      </div>
    </footer>
  );
};
