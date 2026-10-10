
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import {
  FiArrowUp,
  FiArrowUpRight,
  FiMail,
} from "react-icons/fi";

import "../styles/footer.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Latest project", href: "#latest" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

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

export default function Footer() {
  return (
    <footer className="sr-footer">
      <div className="sr-footer-shell">

        {/* ==================================
            CLOSING STATEMENT
        ================================== */}

        

        {/* ==================================
            BRAND + NAVIGATION + SOCIALS
        ================================== */}

        <div className="sr-footer-main">

          {/* BRAND */}
          <div className="sr-footer-brand">

            <a
              href="#home"
              className="sr-footer-brand-name"
            >
              Sadik <span>Rahman.</span>
            </a>

            <p>
              Full-stack developer building thoughtful
              web experiences, reliable systems, and
              ideas worth sharing.
            </p>
          </div>

          {/* NAVIGATION */}
          <nav
            className="sr-footer-navigation"
            aria-label="Footer navigation"
          >
            <h3>EXPLORE</h3>

            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* SOCIAL LINKS */}
          <div className="sr-footer-connect">

            <h3>FIND ME ONLINE</h3>

            <p>
              Code, updates, and everything in between.
            </p>

            <div className="sr-footer-socials">

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
                      size={18}
                      aria-hidden="true"
                    />
                  </a>
                )
              )}

            </div>
          </div>
        </div>

        {/* ==================================
            COPYRIGHT + RETURN TO TOP
        ================================== */}

        <div className="sr-footer-bottom">

          <span>
            © {new Date().getFullYear()} Sadik Rahman.
            All rights reserved.
          </span>

          <span className="sr-footer-made-with">
            Built with React, Vite and You know Who
          </span>

          <a href="#home">
            Back to top

            <FiArrowUp
              size={15}
              aria-hidden="true"
            />
          </a>

        </div>

        {/* LARGE DECORATIVE SIGNATURE */}
        <div
          className="sr-footer-wordmark"
          aria-hidden="true"
        >
          SADIK RAHMAN<span>.</span>
        </div>

      </div>
    </footer>
  );
}
