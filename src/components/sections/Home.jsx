
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiMail,
} from "react-icons/fi";

import portrait from "../../assets/me_bg.png";
import "../../styles/home.css";

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

export default function Home() {
  return (
    <section
      id="home"
      className="sr-home"
      aria-labelledby="sr-home-name"
    >
      <div className="sr-home-container">

        {/* LEFT — INTRODUCTION */}
        <div className="sr-home-content">

          

          <h1
            id="sr-home-name"
            className="sr-home-name"
          >
            <span>Sadik</span>

            <span className="sr-home-name-accent">
              Rahman
              <span className="sr-home-period">.</span>
            </span>
          </h1>

          <div className="sr-home-role">
            <span
                className="sr-home-role-dot"
                aria-hidden="true"
            />
            FULL-STACK DEVELOPER
        </div>

          <p className="sr-home-description">
            I build reliable backends and thoughtful
            web experiences. I enjoy clean architecture,
            solving challenging problems, and exploring
            reinforcement learning, computer vision,
            and predictive modeling.
          </p>

          <p className="sr-home-quote">
            “If it scales, it ships. If it doesn’t,
            it learns.”
          </p>

          {/* MAIN ACTIONS */}
          <div className="sr-home-actions">
            <a
              className="sr-home-button sr-home-button-primary"
              href="#projects"
            >
              View my work
              <FiArrowRight
                size={18}
                aria-hidden="true"
              />
            </a>

            <a
              className="sr-home-button sr-home-button-secondary"
              href="#contact"
            >
              Let's talk
              <FiArrowRight
                size={17}
                aria-hidden="true"
              />
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="sr-home-social-row">
            <span className="sr-home-social-label">
              FIND ME ONLINE
            </span>

            <div className="sr-home-social-links">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  className="sr-home-social-link"
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(href.startsWith("http")
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                >
                  <Icon
                    size={18}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — ORIGINAL PORTRAIT */}
        <div className="sr-home-visual">

          <div
            className="sr-home-orbit sr-home-orbit-outer"
            aria-hidden="true"
          />

          <div
            className="sr-home-orbit sr-home-orbit-inner"
            aria-hidden="true"
          />

          <div
            className="sr-home-portrait-glow"
            aria-hidden="true"
          />

          <div
            className="sr-home-visual-index"
            aria-hidden="true"
          >
            <span>01 / INTRO</span>
            <span>CREATIVE ENGINEERING</span>
          </div>

          <img
            src={portrait}
            alt="Portrait illustration of Sadik Rahman"
            className="sr-home-portrait"
            fetchPriority="high"
            draggable={false}
          />

          

        </div>
      </div>

      
    </section>
  );
}
