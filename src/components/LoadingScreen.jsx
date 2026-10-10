
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import me from "../assets/me_bg_resize.png";

const FULL_TEXT = "<SadikRahman.../>";

// Total animation time: 2.3 seconds
const INTRO_DURATION = 2300;
const EXIT_START = 1800;
const TYPING_START = 180;
const TYPING_SPEED = 65;

export default function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Respect accessibility settings.
    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      onComplete();
      return;
    }

    let index = 0;
    let typingInterval;

    // Start typing after the portrait appears.
    const typingTimer = window.setTimeout(() => {
      typingInterval = window.setInterval(() => {
        index += 1;

        setText(FULL_TEXT.slice(0, index));

        if (index >= FULL_TEXT.length) {
          window.clearInterval(typingInterval);
        }
      }, TYPING_SPEED);
    }, TYPING_START);

    // Begin the transition to the homepage.
    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, EXIT_START);

    // Remove the loading screen.
    const completeTimer = window.setTimeout(() => {
      onComplete();
    }, INTRO_DURATION);

    // Prevent timers from surviving unmount.
    return () => {
      window.clearTimeout(typingTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
      window.clearInterval(typingInterval);
    };
  }, [onComplete]);

  return (
    <div
      className={`portfolio-intro-overlay ${
        isExiting ? "is-exiting" : ""
      }`}
      role="status"
      aria-label="Opening Sadik Rahman's portfolio"
    >
      {/* Ambient background */}
      <div
        className="portfolio-intro-ambient"
        aria-hidden="true"
      />

      {/* Top label */}
      <div className="portfolio-intro-top">
        <span className="portfolio-intro-status-dot" />
        PORTFOLIO / INITIALIZING
      </div>

      {/* Main animation */}
      <div className="portfolio-intro-content">
        <div className="portfolio-intro-photo-wrap">
          <div
            className="portfolio-intro-photo-glow"
            aria-hidden="true"
          />

          <img
            src={me}
            alt=""
            className="portfolio-intro-photo"
            draggable={false}
          />
        </div>

        {/* Typewriter */}
        <div
          className="portfolio-intro-title"
          aria-hidden="true"
        >
          {text}
          <span className="portfolio-intro-cursor" />
        </div>

        <p className="portfolio-intro-subtitle">
          Building the experience
        </p>

        {/* Animated loading progress */}
        <div
          className="portfolio-intro-progress"
          aria-hidden="true"
        >
          <div className="portfolio-intro-progress-fill" />
        </div>
      </div>

      {/* Skip option */}
      <button
        type="button"
        className="portfolio-intro-skip"
        onClick={onComplete}
      >
        Skip intro
        <FiArrowRight size={15} aria-hidden="true" />
      </button>
    </div>
  );
}
