import React from "react";
import me from "../../assets/me_bg.png";
import RevealOnScroll from "../RevealOnScroll";
import { FaFacebook, FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const Home = () => {
    const SOCIALS = [
        { label: "GitHub", href: "https://github.com/SadikRahman14", Icon: FaGithub },
        { label: "X", href: "https://x.com/SadikRa94780860", Icon: FaXTwitter },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/sadik-rahman-7b0658253/", Icon: FaLinkedin },
        { label: "Email", href: "mailto:sadik.nai.008@gmail.com", Icon: FiMail },
        { label: "Facebook", href: "https://www.facebook.com/SadikRahman14p/", Icon: FaFacebook },
    ];
   
    return (
        <section id="home" className="mt-4 relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-[22rem] w-[22rem] rounded-full bg-emerald-700/10 blur-3xl hidden md:block" />
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.08),_transparent_60%)]" />

            <div className="z-10 w-full max-w-5xl px-4">
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-4 md:gap-6">
                    <div className="text-center md:text-left max-w-3xl">
                        <h1 className="hover:scale-105 text-3xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-800 bg-clip-text text-transparent leading-tight">
                            Sadik Rahman
                        </h1>

                        <h1 className="text-xl md:text-md font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-800 bg-clip-text text-transparent leading-tight">
                            If it scales, it ships. If it doesn’t, it learns.
                        </h1>
                        <p className="text-gray-300/90 text-lg md:text-xl mb-10 max-w-2xl md:max-w-none mx-auto md:mx-0">
                            Backend engineer who enjoys clean architectures, rude latencies, and LeetCode puzzles. Currently diving into reinforcement learning, computer vision, and predictive modeling.
                        </p>
                        <div className="mt-10 flex justify-start mb-10 gap-3 flex-wrap">
                            {SOCIALS.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-12 w-12 md:h-10 md:w-10 items-center justify-center rounded-full border border-white/10
                                        text-green-200/80 hover:text-green-200 hover:bg-green-900 hover:scale-125 transition"
                            >
                                <Icon className="h-5 w-5" />
                            </a>
                            ))}
                        </div>
                        <div className="flex flex-col md:flex-row mb-10 justify-center md:justify-start gap-3 md:gap-4 w-full md:w-auto">
                            <a
                                href="#projects"
                                className="w-full md:w-auto text-center relative inline-flex items-center justify-center
                                        rounded-lg bg-emerald-600 px-5 sm:px-6 py-3 sm:py-3.5
                                        text-base font-medium text-white
                                        shadow-lg shadow-emerald-600/20 ring-1 ring-emerald-400/30
                                        transition-transform duration-300 hover:-translate-y-0.5 hover:bg-emerald-500
                                        focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400
                                        min-h-[44px]"
                            >
                                View Projects ↝
                            </a>

                            <a
                                href="#about"
                                className="w-full md:w-auto text-center relative inline-flex items-center justify-center
                                            rounded-lg border border-emerald-500/40 px-5 sm:px-6 py-3 sm:py-3.5
                                            text-base font-medium text-emerald-300 hover:text-emerald-200 hover:bg-emerald-500/10
                                            transition-transform duration-300 hover:-translate-y-0.5
                                            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400
                                            min-h-[44px]"
                            >
                                About Me
                            </a>
                        </div>
                    </div>

                    <div className="relative shrink-0 hidden md:block group transform-gpu">
                        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[32rem] rounded-full bg-emerald-500/30 blur-3xl" />
                        
                        <div className="absolute -inset-4 -z-10 rounded-3xl bg-emerald-500/10 opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100 group-hover:blur-3xl" />

                        <div className="relative">
                            <img
                                src={me}
                                alt="Portrait of Sadik Rahman"
                                className="
                            w-[min(40vw,26rem)]
                            object-contain select-none
                            transition-all duration-700 ease-out transform-gpu
                            grayscale-[25%] contrast-110
                            group-hover:grayscale-0 group-hover:saturate-125
                            group-hover:scale-105
                            motion-reduce:transition-none
                            [mask-image:linear-gradient(to_bottom,black_92%,transparent_100%)]
                            [-webkit-mask-image:linear-gradient(to_bottom,black_92%,transparent_100%)]
                        "
                                draggable="false"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <a
                href="#contact"
                className=" z-10 absolute bottom-6 inline-flex flex-col items-center text-emerald-400/70 hover:text-emerald-300"
            >
                <span className="text-sm mb-1">Scroll to Contact</span>
                <span className="animate-bounce text-2xl">↓</span>
            </a>
        </section>
    );
};

export default Home;