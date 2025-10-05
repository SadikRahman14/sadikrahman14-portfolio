import React from "react";
import RevealOnScroll from "../RevealOnScroll";


const About = () => {
    const frontendSkills = ["React", "TailwindCSS", "TypeScript"];
    const backendSkills = ["NodeJS", "Python", "MySQL", "MongoDB"];

    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
        >
            <RevealOnScroll>
                {/* soft background accents */}
               
                <div className="pointer-events-none absolute -bottom-40 left-0 h-72 w-72 rounded-full bg-emerald-700/10 blur-3xl" />

                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    {/* Intro / Bio card */}
                    <div className="relative rounded-xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm hover:-translate-y-1 transition-all">
                        {/* top accent line */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe impedit quia iste harum, vel ipsam rem debitis error voluptate, recusandae dignissimos ratione tempore, quaerat aliquam quidem voluptas ipsa culpa odio.
                        </p>

                        {/* Skills */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group rounded-xl border border-white/10 bg-emerald-500/10 p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-white text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-green-700/30 text-green-300 py-1 px-3 rounded-full text-sm ring-1 ring-emerald-500/20
                               hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="group rounded-xl border border-white/10 bg-emerald-500/10 p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-white text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-green-700/30 text-green-300 py-1 px-3 rounded-full text-sm ring-1 ring-emerald-500/20
                               hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education + Awards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {/* Education */}
                        <div className="relative p-6 rounded-xl border border-white/10 bg-emerald-950/40 hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-bold text-green-200 mb-4">Education</h3>

                            <ul className="space-y-5">
                                <li className="relative pl-8">
                                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                    <strong className="text-white block">B.Sc in Computer Science</strong>
                                    <p className="text-gray-300">Ahsanullah University of Science &amp; Technology</p>
                                </li>

                                <li className="relative pl-8">
                                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                    <strong className="text-white block">Higher Secondary Certificate</strong>
                                    <p className="text-gray-300">Ispahani Public School &amp; College</p>
                                </li>

                                <li className="relative pl-8">
                                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                    <strong className="text-white block">Secondary School Certificate</strong>
                                    <p className="text-gray-300">Nasirabad Government High School</p>
                                </li>
                            </ul>
                        </div>

                        {/* Awards */}
                        <div className="relative p-6 rounded-xl border border-white/10 bg-emerald-950/40 hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-bold text-green-200 mb-4">Awards</h3>

                            <ul className="space-y-5">
                                <li className="relative pl-8">
                                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                    <strong className="text-white block">Code Alchemy : Refactoring Contest</strong>
                                    <p className="text-gray-300">AUST CSE Carnival 5.0, Fall-23</p>
                                    <strong className="text-emerald-300">Champion</strong>
                                </li>

                                <li className="relative pl-8">
                                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                    <strong className="text-white block">Quiz Contest</strong>
                                    <p className="text-gray-300">AUST CSE Carnival 3 &amp; 4, Spring-23 &amp; Fall-22</p>
                                    <strong className="text-emerald-300">Runners-Up</strong>
                                </li>

                                <li className="relative pl-8">
                                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                    <strong className="text-white block">Chess Competetion</strong>
                                    <p className="text-gray-300">AUST CSE Carnival 2.0</p>
                                    <strong className="text-emerald-300">Runners-Up</strong>
                                </li>

                                <li className="relative pl-8">
                                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                    <strong className="text-white block">Intra Department Football Tournament</strong>
                                    <p className="text-gray-300">Fall-23</p>
                                    <strong className="text-emerald-300">Runners-Up</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default About;
