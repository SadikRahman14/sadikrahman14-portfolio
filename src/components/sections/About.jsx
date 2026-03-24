import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import SectionHeading from "../SectionHeading";
import DownloadCV from "../DownloadCV";

const About = () => {

    const aboutMe = "I’m a backend engineer focused on building reliable, high-performance APIs using Node.js, Python, MySQL, and MongoDB. I stay sharp with LeetCode to catch edge cases early, and when I'm not shipping features, I'm researching RL and deep learning—tackling problems like power grid optimization and image classification. I'm all about small, safe changes, clear docs, and making production incidents as boring as possible."

    const frontendSkills = ["React", "TailwindCSS", "TypeScript", "NextJS"];
    const backendSkills = ["NodeJS", "Python", "MySQL", "MongoDB", "Laravel"];

    return (
        <section
            id="about"
            className="mt-15 relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
        >
            <RevealOnScroll>

                <div className="pointer-events-none absolute -bottom-40 left-0 h-72 w-72 rounded-full bg-emerald-700/10 blur-3xl" />

                <div className="max-w-5xl mx-auto px-4">
                    <SectionHeading>About Me</SectionHeading>

                    <div className="relative rounded-xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm hover:-translate-y-1 transition-all">
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                        <p className="text-gray-300 leading-relaxed mb-6 align-middle">
                            {aboutMe}
                        </p>
                        
                    </div>

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

                        {/* Research Interest */}
                        <div className="relative p-6 rounded-xl border border-white/10 bg-emerald-950/40 hover:-translate-y-1 transition-all md:col-span-2">
                            <h3 className="text-2xl font-bold text-green-200 mb-4"> Research Interest </h3>

                            <ul className="space-y-6">
                                <li className="relative pl-8">
                                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                    <strong className="text-white block">Power Grid Transmission Optimization (RL)</strong>
                                    <p className="text-gray-300">
                                        Developing a reinforcement learning approach to reduce transmission loss to 2-3% in the Bangladeshi Power Grid.
                                    </p>

                                    <div className="mt-2 flex flex-wrap gap-2">
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">Reinforcement Learning</span>
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">Python</span>
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">Simulation</span>
                                    </div>

                                    <div className="mt-2 flex items-center gap-3">
                                        <strong className="text-emerald-300">Status: Successfully simulated a subsection of the Khulna division grid.</strong>
                                    </div>
                                </li>

                                <li className="relative pl-8">
                                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                    <strong className="text-white block">Taka Note Fitness Classifier</strong>
                                    <p className="text-gray-300">
                                        Deep learning project to classify the fitness and condition of Bangladeshi Taka notes.
                                    </p>

                                    <div className="mt-2 flex flex-wrap gap-2">
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">Deep Learning</span>
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">ResNet</span>
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">EfficientNet</span>
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">Computer Vision</span>
                                    </div>

                                    <div className="mt-2 flex items-center gap-3">
                                        <strong className="text-emerald-300">Status: 80%+ accuracy achieved on an initial 150-image dataset.</strong>
                                    </div>
                                </li>

                                <li className="relative pl-8">
                                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                    <strong className="text-white block">UCL Match Predictor</strong>
                                    <p className="text-gray-300">
                                        Statistical modeling to predict UEFA Champions League results based on clubs' domestic performance metrics.
                                    </p>

                                    <div className="mt-2 flex flex-wrap gap-2">
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">Poisson Distribution</span>
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">Monte Carlo Simulation</span>
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">Predictive Modeling</span>
                                    </div>

                                    <div className="mt-2 flex items-center gap-3">
                                        <strong className="text-emerald-300">Status: Correctly predicted 7/8 matches in the UCL 2025-26 Round of 16.</strong>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Work Experience */}
                        <div className="relative p-6 rounded-xl border border-white/10 bg-emerald-950/40 hover:-translate-y-1 transition-all shadow-lg shadow-emerald-900/20">
                            <h3 className="text-2xl font-bold text-green-200 mb-4">Work Experience</h3>

                            <ul className="space-y-6">
                                <li className="relative pl-8">
                                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                        <strong className="text-white block">
                                            Backend Developer <span className="text-emerald-300/90">·</span> AUST Ahsanullah (R.) Peace Club
                                        </strong>
                                    </div>

                                    <p className="mt-2 text-gray-300">
                                        Building and maintaining backend services and APIs used by club initiatives and event platforms.
                                        I focus on clean domain models, predictable performance, and instrumentation for quick debugging.
                                    </p>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">Node.js</span>
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">Express</span>
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">Supabase</span>
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">JWT/Auth</span>
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">Redis (cache)</span>
                                        <span className="text-xs rounded-full bg-emerald-700/30 text-emerald-200 px-2 py-1">GitHub Actions</span>
                                    </div>

                                    <div className="mt-3 flex flex-wrap items-center gap-3">
                                        <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                                            Sept. 2025 - Present
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                         {/* Extras */}
                         <div className="relative p-6 rounded-xl border border-white/10 bg-emerald-950/40 hover:-translate-y-1 transition-all shadow-lg shadow-emerald-900/20">
                            <h3 className="text-2xl font-bold text-green-200 mb-4">Extras</h3>

                            <ul className="space-y-6">
                                <li className="relative pl-8">
                                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                    <strong className="text-white block">LeetCode</strong>
                                    <p className="text-gray-300 mt-1">
                                        <strong>80+ Problems Solved</strong>
                                    </p>
                                    <a href="https://leetcode.com/u/user7126SD/" className="text-emerald-400 hover:text-emerald-300 text-sm inline-block mt-1">View Profile ↝</a>
                                </li>

                                <li className="relative pl-8">
                                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                    <strong className="text-white block">Chess.com</strong>
                                    <p className="text-gray-300 mt-1">
                                         <strong>Peak: 1400+</strong> 
                                    </p>
                                     <a href="https://www.chess.com/member/sadikrahman" className="text-emerald-400 hover:text-emerald-300 text-sm inline-block mt-1">View Profile ↝</a>
                                </li>

                                <li className="relative pl-8">
                                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                    <strong className="text-white block">Lichess</strong>
                                    <p className="text-gray-300 mt-1">
                                         <strong> Peak: 1450+ </strong>
                                    </p>
                                     <a href="https://lichess.org/@/SadikRahman" className="text-emerald-400 hover:text-emerald-300 text-sm inline-block mt-1">View Profile ↝</a>
                                </li>
                                
                            </ul>
                        </div>

                    </div>
                    <DownloadCV />
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default About;