
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiMail,
  FiSend,
  FiAlertCircle,
} from "react-icons/fi";

import RevealOnScroll from "../RevealOnScroll";
import "../../styles/contact.css";

const INITIAL_FORM = {
  name: "",
  email: "",
  message: "",
};

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/SadikRahman14",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sadik-rahman-7b0658253/",
    Icon: FaLinkedin,
  },
  {
    label: "X",
    href: "https://x.com/SadikRa94780860",
    Icon: FaXTwitter,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/SadikRahman14p/",
    Icon: FaFacebook,
  },
  {
    label: "Email",
    href: "mailto:sadik.nai.008@gmail.com",
    Icon: FiMail,
  },
];

export default function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (feedback) setFeedback(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSending || !formRef.current) return;

    setIsSending(true);
    setFeedback(null);

    try {
      // Existing EmailJS configuration.
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      );

      setFormData(INITIAL_FORM);

      setFeedback({
        type: "success",
        message:
          "Message sent successfully. Thanks for reaching out!",
      });

      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS message failed:", error);

      setFeedback({
        type: "error",
        message:
          "The message could not be sent. Please try again or email me directly.",
      });

      toast.error(
        "Couldn't send your message. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="sr-contact"
      aria-labelledby="sr-contact-heading"
    >
      <div className="sr-contact-shell">
        <RevealOnScroll>
          <div className="sr-contact-layout">

            {/* LEFT SIDE */}
            <div className="sr-contact-intro">

              <div className="sr-contact-kicker">
                <span
                  className="sr-contact-kicker-dot"
                  aria-hidden="true"
                />
                LET'S CONNECT
              </div>

              <h2 id="sr-contact-heading">
                Have an idea?
                <span> Let's build something.</span>
              </h2>

              <p className="sr-contact-description">
                A project, an opportunity, or just a
                conversation about technology? I'd love
                to hear what you have in mind.
              </p>

              {/* DIRECT EMAIL */}
              <div className="sr-contact-direct">
                <span className="sr-contact-small-label">
                  EMAIL ME DIRECTLY
                </span>

                <a href="mailto:sadik.nai.008@gmail.com">
                  <FiMail
                    size={19}
                    aria-hidden="true"
                  />

                  <span>
                    sadik.nai.008@gmail.com
                  </span>

                  <FiArrowUpRight
                    size={17}
                    aria-hidden="true"
                  />
                </a>
              </div>

              {/* SOCIAL LINKS */}
              <div className="sr-contact-social-block">
                <span className="sr-contact-small-label">
                  FIND ME ONLINE
                </span>

                <div className="sr-contact-social-links">
                  {SOCIALS.map(
                    ({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        title={label}
                        aria-label={label}
                        {...(href.startsWith("http")
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                      >
                        <Icon
                          size={19}
                          aria-hidden="true"
                        />
                      </a>
                    )
                  )}
                </div>
              </div>

            

            </div>

            {/* RIGHT SIDE — FORM */}
            <div className="sr-contact-form-card">

              <div className="sr-contact-form-header">
                <div>
                  

                  <h3>Send me a message.</h3>

                </div>

                <span
                  className="sr-contact-form-icon"
                  aria-hidden="true"
                >
                  <FiSend size={20} />
                </span>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                aria-busy={isSending}
              >
                {/* NAME AND EMAIL */}
                <div className="sr-contact-fields-row">

                  <div className="sr-contact-field">
                    <label htmlFor="contact-name">
                      Your name{" "}
                      <span aria-hidden="true">*</span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSending}
                      required
                    />
                  </div>

                  <div className="sr-contact-field">
                    <label htmlFor="contact-email">
                      Your email{" "}
                      <span aria-hidden="true">*</span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSending}
                      required
                    />
                  </div>

                </div>

                {/* MESSAGE */}
                <div className="sr-contact-field">
                  <label htmlFor="contact-message">
                    Your message{" "}
                    <span aria-hidden="true">*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    placeholder="Tell me a little about what you're working on..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSending}
                    required
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  className="sr-contact-submit"
                  type="submit"
                  disabled={isSending}
                >
                  <span>
                    {isSending
                      ? "Sending message..."
                      : "Send message"}
                  </span>

                  {isSending ? (
                    <span
                      className="sr-contact-spinner"
                      aria-hidden="true"
                    />
                  ) : (
                    <FiArrowUpRight
                      size={19}
                      aria-hidden="true"
                    />
                  )}
                </button>

                {/* FEEDBACK */}
                {feedback && (
                  <div
                    className={`sr-contact-feedback sr-contact-feedback--${feedback.type}`}
                    role={
                      feedback.type === "error"
                        ? "alert"
                        : "status"
                    }
                  >
                    {feedback.type === "success" ? (
                      <FiCheckCircle
                        size={17}
                        aria-hidden="true"
                      />
                    ) : (
                      <FiAlertCircle
                        size={17}
                        aria-hidden="true"
                      />
                    )}

                    <span>{feedback.message}</span>
                  </div>
                )}

                <p className="sr-contact-form-note">
                  Your name and email help me reply to
                  your message.
                </p>

              </form>
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
