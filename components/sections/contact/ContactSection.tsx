import { LoadingSpinner } from "@components/icons";
import { FC, FormEvent, useState } from "react";
import emailjs from "emailjs-com";
import { useUIDispatch } from "@components/ui/context";

const ContactSection: FC = () => {
  const uiDispatch = useUIDispatch();
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [recaptchaLoad, setRecaptcahLoad] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(null);

  // const recaptchaLoaded = () => {
  //   setRecaptchaLoad(true);
  // }

  // const verifiedRecaptcha = (response) => {
  //   if (response) {
  //     setIsVerified(true);
  //   }
  // }

  const sendContactMail = async (fromEmail: string, message: string) => {
    const templateParams = {
      from_email: fromEmail,
      message,
    };

    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      return res;
    } catch (err) {
      console.error(err);
      return err;
    }

    // if (recaptchaLoad && isVerified) {
    //   emailjs.send(
    //     process.env.NEXT_PUBLIC_SERVICE_ID,
    //     process.env.NEXT_PUBLIC_TEMPLATE_ID,
    //     data,
    //     process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
    //   )
    // }
  };

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setLoading(true);
    try {
      const res = await sendContactMail(fromEmail, message);

      setFromEmail("");
      setMessage("");

      uiDispatch({
        type: "SET_TOAST_TEXT",
        text: "Success! ✅ Your email was sent to Jackson.",
      });
      uiDispatch({ type: "OPEN_TOAST" });

      console.log(res);
    } catch (err) {
      uiDispatch({
        type: "SET_TOAST_TEXT",
        text: "Error: Failed to send email 🙁.",
      });
      uiDispatch({ type: "OPEN_TOAST" });

      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="bg-primaryDark w-full relative">
      <div className="max-w-screen-xl mx-auto">
        <section id="contactSection">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 mx-4 px-4 sm:pr-0 md:pr-2 lg:pr-7 xl:pr-14 sm:pl-10 border-l border-r border-gray-400 md:border-none pb-24 pt-8 md:pb-40 md:pt-12">
            <div className="sm:col-span-1 sm:pr-5">
              <h2 className="font-bold text-white text-5xl mt-16">Say Hi!</h2>
              <p className="text-white mt-5 lg:text-lg">
                Want to talk? Collaborate on a project? Or if you simply have a question, send
                me a message and let’s talk. I’m always happy to help and answer any questions
                :){" "}
              </p>

              <img
                className="h-48 sm:h-56 lg:h-72 mt-6 mx-auto pr-10"
                src="/contactIllustration.svg"
                alt="contact illustration"
              />
            </div>
            <form
              name="contact"
              onSubmit={onSubmit}
              className="mt-2 sm:mt-16 sm:col-span-1 z-10 transition duration-200 ease-in-out"
            >
              <div>
                <label className="block font-bold text-white lg:text-lg" htmlFor="email">
                  Your Email
                </label>
                <input
                  onChange={(ev) => {
                    setFromEmail(ev.target.value);
                  }}
                  value={fromEmail}
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="rounded-md shadow-md w-full mt-2 h-10 px-2 outline-none focus:ring-2 focus:ring-gray-900 focus-within:ring-gray-900 lg:text-lg"
                  type="email"
                  placeholder="luke.skywalker@gmail.com"
                />
              </div>

              <div className="mt-8">
                <label className="block font-bold text-white lg:text-lg" htmlFor="message">
                  Message
                </label>
                <textarea
                  onChange={(ev) => {
                    setMessage(ev.target.value);
                  }}
                  placeholder="Hey love the site let's talk!"
                  required
                  value={message}
                  maxLength={8000}
                  className="shadow-md rounded-md w-full mt-2 h-64 lg:h-80 p-2 outline-none focus:ring-2 focus:ring-gray-900 focus-within:ring-gray-900 lg:text-lg"
                  name="message"
                  id="message"
                ></textarea>
              </div>

              <button
                aria-label="send now"
                name="send now"
                className="flex items-center px-4 py-1 font-semibold text-white bg-primaryBgDark rounded-md mt-10 hover:bg-opacity-70 focus:ring-2 focus:outline-none focus:ring-purple-400 transition duration-200 ease-in-out"
                type="submit"
                disabled={loading}
              >
                {loading && <LoadingSpinner className="h-6 w-6 mr-2" />}
                {loading ? "sending..." : "Send Now"}
              </button>

              {/* <Recaptcha
  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
  render="explicit"
  onloadCallback={recaptchaLoaded}
  verifyCallback={verifiedRecaptcha}
/> */}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactSection;
