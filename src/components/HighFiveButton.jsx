// HighFiveButton.jsx
import { useEffect, useState } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { GiHighFive } from "react-icons/gi";

const NAMESPACE = "sadikrahman14-portfolio";
const KEY = "highfive";
const API = "https://api.countapi.xyz";

const LS_HAS = "sr_has_high_fived";
const LS_COUNT = "sr_local_highfive_count";

export default function HighFiveButton() {
    const [count, setCount] = useState(null);
    const [hasFived, setHasFived] = useState(false);
    const [blocked, setBlocked] = useState(false);
    const [pending, setPending] = useState(false);

    useEffect(() => {
        const localHas = localStorage.getItem(LS_HAS) === "1";
        const localCount = parseInt(localStorage.getItem(LS_COUNT) || "0", 10);
        setHasFived(localHas);
        setCount(Number.isNaN(localCount) ? 0 : localCount);

        // 2) try to get global count; if blocked, we keep local
        (async () => {
            try {
                const r = await fetch(`${API}/get/${NAMESPACE}/${KEY}`, { cache: "no-store" });
                if (!r.ok) throw new Error();
                const d = await r.json();
                setBlocked(false);
                setCount(typeof d.value === "number" ? d.value : 0);
            } catch {
                setBlocked(true);
            }
        })();
    }, []);

const giveHighFive = async () => {
  if (pending) return;

  // ---- BLOCKED: keep a per-device counter in localStorage
  if (blocked) {
    const current = parseInt(localStorage.getItem(LS_COUNT) || "0", 10) || 0;

    if (hasFived) {
      // undo locally
      const next = Math.max(0, current - 1);
      localStorage.setItem(LS_COUNT, String(next));
      localStorage.removeItem(LS_HAS);
      setHasFived(false);
      setCount(next);
    } else {
      // give locally
      const next = current + 1;
      localStorage.setItem(LS_COUNT, String(next));
      localStorage.setItem(LS_HAS, "1");
      setHasFived(true);
      setCount(next);
    }
    return;
  }

  // ---- GLOBAL: use CountAPI
  setPending(true);

  if (hasFived) {
    // undo (decrement)
    setHasFived(false);
    setCount((c) => Math.max(0, (c ?? 1) - 1)); // optimistic

    try {
      const r = await fetch(`${API}/update/${NAMESPACE}/${KEY}?amount=-1`, { cache: "no-store" });
      const d = await r.json();
      if (typeof d.value === "number") setCount(Math.max(0, d.value));
      localStorage.removeItem(LS_HAS);
    } catch {
      setHasFived(true);
      setCount((c) => (c ?? 0) + 1);
    } finally {
      setPending(false);
    }
  } else {
    setHasFived(true);
    setCount((c) => (c ?? 0) + 1); 

    try {
      const r = await fetch(`${API}/hit/${NAMESPACE}/${KEY}`, { cache: "no-store" });
      const d = await r.json();
      if (typeof d.value === "number") setCount(d.value);
      localStorage.setItem(LS_HAS, "1");
    } catch {
      setHasFived(false);
      setCount((c) => Math.max(0, (c ?? 1) - 1));
    } finally {
      setPending(false);
    }
  }
};


    const label =
        count == null ? "…" : `${count.toLocaleString()}`;

    return (
        <div className="flex items-center gap-3">
            <button
                onClick={giveHighFive}
                disabled={pending}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 min-h-[40px]
          ${hasFived ? "bg-emerald-700/30 text-emerald-200/70 cursor-default" : "bg-emerald-600 text-white hover:bg-emerald-500"}
          shadow-lg shadow-emerald-600/20 ring-1 ring-emerald-400/30 transition-colors
          focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400`}
                aria-pressed={hasFived}
                title={blocked ? "Global counter blocked by your network; saving locally." : undefined}
            >
                <GiHighFive className="h-5 w-5" />
                {hasFived ? `(${label})` : `(${label})`}
            </button>
        </div>
    );
}
