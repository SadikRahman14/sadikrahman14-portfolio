import React, { useEffect, useRef } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const NAV_LINKS = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
];

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const closeBtnRef = useRef(null);
    const panelRef = useRef(null);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
            // focus after paint
            const id = setTimeout(() => closeBtnRef.current?.focus(), 0);
            return () => {
                clearTimeout(id);
                document.body.style.overflow = "";
            };
        } else {
            document.body.style.overflow = "";
        }
    }, [menuOpen]);


    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [setMenuOpen]);

    return (
        <div
            // overlay
            className={`fixed inset-0 z-40 transition-opacity duration-300 ease-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        bg-[rgba(10,10,10,0.75)] backdrop-blur-md`}
            aria-hidden={!menuOpen}
            onClick={() => setMenuOpen(false)} // click outside to close
        >
            {/* panel (prevents outside-click bubbling) */}
            <div
                ref={panelRef}
                onClick={(e) => e.stopPropagation()}
                className={`relative mx-auto flex h-full w-full max-w-md flex-col items-center justify-center
          transition-transform duration-300 ease-out
          ${menuOpen ? "translate-y-0" : "-translate-y-6"}`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
            >
                {/* Close button */}
                <button
                    ref={closeBtnRef}
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-6 right-6 text-green-600 text-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                    aria-label="Close menu"
                >
                    <IoMdCloseCircle />
                </button>

                {/* Links */}
                <nav className="flex flex-col items-center">
                    {NAV_LINKS.map((item, i) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className={`my-3 text-white/95 text-2xl font-semibold
                          transition-all duration-300 transform
                          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-2 py-2`}
                            style={{
                                transitionDelay: menuOpen ? `${120 + i * 60}ms` : "0ms",
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu;
