export const Contact = () => {
  return (
    <section
      id="contact"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Contact Us
      </h2>

      <form
        data-netlify="true"
        name="contact"
        method="POST"
        onSubmit="submit"
        // onSubmit="submit"
        // data-netlify="true"
        className="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl"
      >
        <input type="hidden" name="form_name" value="contact" />
        <label htmlFor="subject"></label>
        <input
          name="subject"
          type="text"
          id="subject"
          required
          minLength="3"
          maxlength="60"
          placeholder="what do you want to contact us about"
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
        />
        <label htmlFor="message"></label>
        <textarea
          name="message"
          type="text"
          placeholder="Your message to us"
          id="message"
          cols="30"
          rows="10"
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
        ></textarea>
        <button
          type="submit"
          className="mx-auto w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
