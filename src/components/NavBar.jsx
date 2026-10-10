
import { FiMenu, FiX } from "react-icons/fi";
import HighFiveButton from "./HighFiveButton";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "LATEST", href: "#latest" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function NavBar({
  menuOpen,
  setMenuOpen,
}) {
  return (
    <nav
      className="fixed top-0 left-0 z-40 w-full border-b border-white/10 bg-[rgba(10,10,10,0.85)] shadow-lg backdrop-blur-lg"
      aria-label="Primary navigation"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between gap-3">

          {/* LOGO */}
          <a href="#home" aria-label="Sadik Rahman — Home" className="shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}Icon.png`}
              alt="Sadik Rahman"
              className="h-10 w-10 object-contain"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-4 md:flex lg:gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-xs font-medium tracking-widest text-gray-300 transition-colors hover:text-emerald-300 focus-visible:text-emerald-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* HIGH FIVE + MOBILE MENU */}
          <div className="flex shrink-0 items-center gap-2">

            <HighFiveButton compact />

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-600/30 text-emerald-200 transition hover:border-emerald-400/60 hover:bg-emerald-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 md:hidden"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <FiX size={23} aria-hidden="true" />
              ) : (
                <FiMenu size={23} aria-hidden="true" />
              )}
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}
