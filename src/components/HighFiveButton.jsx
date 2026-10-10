
import { useEffect, useRef, useState } from "react";
import { GiHighFive } from "react-icons/gi";
import "../styles/high-five.css";

// Hosted counter — no API key required.
const API_BASE = "https://abacus.jasoncameron.dev";
const NAMESPACE = "sadikrahman14.github.io";
const COUNTER_NAME = "portfolio-highfives";

const LOCAL_KEY = "sr_highfive_abacus_v1";

const GET_URL =
  `${API_BASE}/get/${NAMESPACE}/${COUNTER_NAME}`;

const HIT_URL =
  `${API_BASE}/hit/${NAMESPACE}/${COUNTER_NAME}`;

function alreadyHighFived() {
  try {
    return window.localStorage.getItem(LOCAL_KEY) === "1";
  } catch {
    return false;
  }
}

export default function HighFiveButton({ compact = false }) {
  const [count, setCount] = useState(null);
  const [hasFived, setHasFived] = useState(alreadyHighFived);
  const [status, setStatus] = useState("loading");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  const requestInFlight = useRef(false);

  // Read the global count when the component mounts.
  useEffect(() => {
    const controller = new AbortController();

    async function loadCount() {
      try {
        const response = await fetch(GET_URL, {
          cache: "no-store",
          signal: controller.signal,
        });

        // New counters don't exist until the first hit.
        if (response.status === 404) {
          setCount(0);
          setStatus("ready");
          return;
        }

        if (!response.ok) {
          throw new Error(`Counter HTTP ${response.status}`);
        }

        const data = await response.json();

        if (
          !Number.isSafeInteger(data.value) ||
          data.value < 0
        ) {
          throw new Error("Invalid counter response");
        }

        setCount(data.value);
        setStatus("ready");
      } catch (error) {
        if (controller.signal.aborted) return;

        console.error(
          "Couldn't load high five count:",
          error
        );

        setStatus("error");
        setMessage(
          "The shared counter is unavailable right now."
        );
      }
    }

    loadCount();

    return () => controller.abort();
  }, []);

  async function giveHighFive() {
    if (
      requestInFlight.current ||
      hasFived ||
      status !== "ready"
    ) {
      return;
    }

    // Check again in case another tab already clicked.
    if (alreadyHighFived()) {
      setHasFived(true);
      return;
    }

    requestInFlight.current = true;
    setPending(true);
    setMessage("");

    try {
      const response = await fetch(HIT_URL, {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(
          `Counter HTTP ${response.status}`
        );
      }

      const data = await response.json();

      if (
        !Number.isSafeInteger(data.value) ||
        data.value < 1
      ) {
        throw new Error("Invalid counter response");
      }

      // Remember this browser's high five.
      try {
        window.localStorage.setItem(LOCAL_KEY, "1");
      } catch {
        // The shared count still works without storage.
      }

      setCount(data.value);
      setHasFived(true);
      setMessage("High five received. Thank you!");
    } catch (error) {
      console.error(
        "Couldn't give high five:",
        error
      );

      setStatus("error");
      setMessage(
        "Couldn't confirm the high five. Refresh to check again."
      );
    } finally {
      requestInFlight.current = false;
      setPending(false);
    }
  }

  const disabled =
    hasFived || pending || status !== "ready";

  const displayedCount =
    count === null ? "—" : count.toLocaleString();

  
  // Compact version for the navbar
  if (compact) {
    return (
      <div className="sr-highfive-nav">
        <button
          type="button"
          className={`sr-highfive-nav-button ${
            hasFived ? "is-given" : ""
          }`}
          onClick={giveHighFive}
          disabled={disabled}
          aria-pressed={hasFived}
          aria-label={
            status === "error"
              ? "High five counter unavailable"
              : hasFived
                ? `High five already given. Total: ${displayedCount}`
                : `Give a high five. Total: ${displayedCount}`
          }
          title={
            message ||
            `${displayedCount} high fives received`
          }
        >
          <GiHighFive size={18} aria-hidden="true" />

          <span className="sr-highfive-nav-text">
            {hasFived ? "High-fived!" : "High Five"}
          </span>

          <span
            className="sr-highfive-nav-count"
            aria-live="polite"
          >
            {displayedCount}
          </span>
        </button>
      </div>
    );
  }


}
