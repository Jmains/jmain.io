import { FC } from "react";

const ContactSection: FC = () => {
  return (
    <section id="contactSection">
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-4 px-4 border-l border-r border-gray-400 md:border-none pb-20">
        <div className="sm:col-span-1 sm:pr-5">
        <h2 className="font-bold text-white text-5xl mt-16">Say Hi!</h2>
        <p className="text-white mt-5">
          Want to talk? Collaborate? Or if you simply have a question, send me a message and
          let’s talk. I’m always happy help and answer any questions.{" "}
        </p>

        <img
          className="h-48 mt-6 mx-auto pr-10"
          src="/contactIllustration.svg"
          alt="contact illustration"
        />

        </div>
        <form className="mt-2 sm:mt-16 sm:col-span-1 z-10 transition duration-200 ease-in-out">
          <div className="">
            <label className="block font-semibold text-white text-lg" htmlFor="email">
              Email
            </label>
            <input
              required
              className="rounded-md shadow-md w-full mt-2 h-10 px-2 outline-none focus:ring-2 focus:ring-purple-300"
              type="email"
            />
          </div>
          <div className="mt-8">
            <label className="block font-semibold text-white text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              required
              maxLength={5000}
              className="shadow-md rounded-md w-full mt-2 h-36 p-2  outline-none focus:ring-2 focus:ring-purple-400"
              name="message"
              id=""
            ></textarea>
          </div>
          <button
            className="px-4 py-1 font-semibold text-white bg-primaryBgDark rounded-md mt-10 focus:ring-2 focus:outline-none focus:ring-purple-400"
            type="submit"
          >
            send {" "}->
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
