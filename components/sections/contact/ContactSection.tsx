import { LoadingSpinner } from "@components/icons";
import { EventHandler, FC, FormEvent, FormEventHandler, useState } from "react";

const ContactSection: FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setLoading(true);
    // Send message
    setLoading(false);
  };

  return (
    <section id="contactSection">
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-4 px-4 sm:px-10 border-l border-r border-gray-400 md:border-none pb-24 pt-8 md:pb-40 md:pt-12">
        <div className="sm:col-span-1 sm:pr-5">
          <h2 className="font-bold text-white text-5xl mt-16">Say Hi!</h2>
          <p className="text-white mt-5 lg:text-lg">
            Want to talk? Collaborate on a project? Or if you simply have a question, send me a
            message and let’s talk. I’m always happy help and answer any questions :){" "}
          </p>

          <img
            className="h-48 sm:h-56 lg:h-72 mt-6 mx-auto pr-10"
            src="/contactIllustration.svg"
            alt="contact illustration"
          />
        </div>
        <form
          onSubmit={onSubmit}
          className="mt-2 sm:mt-16 sm:col-span-1 z-10 transition duration-200 ease-in-out"
        >
          <div className="">
            <label className="block font-bold text-white lg:text-lg" htmlFor="email">
              Your email
            </label>
            <input
              name="email"
              required
              className="rounded-md shadow-md w-full mt-2 h-10 px-2 outline-none focus:ring-2 focus:ring-purple-400 focus-within:ring-purple-300 lg:text-lg"
              type="email"
              placeholder="legolas.greenleaf@gmail.com"
            />
          </div>
          <div className="mt-8">
            <label className="block font-bold text-white lg:text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              placeholder="Just wanted to say hi!"
              required
              maxLength={8000}
              className="shadow-md rounded-md w-full mt-2 h-64 lg:h-80 p-2 outline-none focus:ring-2 focus:ring-purple-400 focus-within:ring-purple-400 lg:text-lg"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button
            className="flex items-center px-4 py-1 font-semibold text-white bg-primaryBgDark rounded-md mt-10 focus:ring-2 focus:outline-none focus:ring-purple-400"
            type="submit"
            disabled={loading}
          >
            {loading && <LoadingSpinner className="h-6 w-6 mr-2" />}
            {loading ? "sending..." : "Send now"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
