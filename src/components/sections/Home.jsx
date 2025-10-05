import React from "react";
import me from "../../assets/me_bg.png";
import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div
                className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-32   
             h-[32rem] w-[32rem] rounded-full bg-emerald-500/30 blur-3xl"
            />

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-[22rem] w-[22rem] rounded-full bg-emerald-700/10 blur-3xl" />
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.08),_transparent_60%)]" />

            {/* content */}
            <div className="z-10 w-full max-w-5xl px-4">
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-4 md:gap-6">
                    {/* text block */}
                    <div className="text-center md:text-left max-w-3xl">
                        <h1 className="text-3xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-800 bg-clip-text text-transparent leading-tight">
                            Sadik Rahman Here!  
                        </h1>

                        <p className="text-gray-300/90 text-lg md:text-xl mb-10 max-w-2xl md:max-w-none mx-auto md:mx-0">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam autem inventore consequuntur numquam
                            nostrum distinctio rem accusantium fugiat exercitationem corporis sed, quidem dolorum debitis,
                            repudiandae, accusamus architecto. Ducimus, optio tempora?
                        </p>

                        <div className="flex justify-center md:justify-start gap-4">
                            <a
                                href="#projects"
                                className="relative inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white shadow-lg shadow-emerald-600/20 ring-1 ring-emerald-400/30 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                            >
                                View Projects ↝
                            </a>

                            <a
                                href="#about"
                                className="relative inline-flex items-center justify-center rounded-lg border border-emerald-500/40 px-6 py-3 font-medium text-emerald-300 hover:text-emerald-200 hover:bg-emerald-500/10 transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                            >
                                About Me
                            </a>
                        </div>
                    </div>

                    <div className="relative shrink-0">
                        <img
                            src={me}
                            alt="Your portrait"
                            className="
                                w-[min(40vw,26rem)]
                                object-contain
                                [mask-image:linear-gradient(to_bottom,black_92%,transparent_100%)]
                                [-webkit-mask-image:linear-gradient(to_bottom,black_92%,transparent_100%)]
                                "
                        />
                        {/* floor shadow stays proportional */}
                        <div className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2
                  w-[70%] h-7 rounded-full bg-black/35 blur-md opacity-60" />
                    </div>

                </div>
            </div>

            {/* scroll hint */}
            <a
                href="#projects"
                className="z-10 absolute bottom-6 inline-flex flex-col items-center text-emerald-400/70 hover:text-emerald-300 transition"
            >
                <span className="text-sm mb-1">Scroll</span>
                <span className="animate-bounce text-2xl">↓</span>
            </a>
        </section>
    );
};

export default Home;
