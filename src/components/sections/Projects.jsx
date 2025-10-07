import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import SectionHeading from "../SectionHeading";

const PROJECTS = [
    {
        title: "Shanjeeban",
        description:
            "Mobile health & donor coordination app with real-time requests, push notifications, and secure auth.",
        tech: ["Flutter", "Firebase", "Dart"],
        href: "https://github.com/SadikRahman14/Shanjeeban",
    },
    {
        title: "Vien",
        description:
            "MERN e-commerce/admin dashboard with role-based access, product CRUD, charts, and server-side pagination.",
        tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
        href: "https://github.com/SadikRahman14/Vien",
    },
    {
        title: "Innovest",
        description:
            "Investment portfolio web app: watchlists, transactions, P/L analytics, and CSV import/export.",
        tech: ["MySQL", "Laravel", "React"],
        href: "https://github.com/kazi-kamruddin/Innovest",
    },
    {
        title: "Beacon",
        description:
            "Internal incident & asset tracker with audit logs, email alerts, and fine-grained permissions.",
        tech: [".NET", "ASP.NET Core MVC", "C#"],
        href: "https://github.com/SadikRahman14/Beacon",
    },
];



function ProjectCard({ title, description, tech, href }) {
    return (
        <div
            className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'
        >
            <h3 className='text-green-200/90 text-xl font-bold mb-2'>{title}</h3>

            <p className='text-green-100/90 mb-4'>{description}</p>

            <div className='flex flex-wrap gap-2 mb-2'>
                {tech.map((t, i) => (
                    <span
                        key={i}
                        className='bg-green-700/30 text-green-300 py-1 px-3 rounded-full text-sm
                       hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'
                    >
                        {t}
                    </span>
                ))}
            </div>

            <div className='flex justify-between items-center'>
                <a href={href} className='text-green-400 hover:text-green-300 transition-colors my-4'>
                    {" "}
                    View Project ↝{" "}
                </a>
            </div>
        </div>
    );
}

const Projects = () => {
    return (
        <section id='projects' className='mt-20 min-h-screen flex items-center justify-center py-20'>
            <RevealOnScroll>
                <div className='max-w-5xl mx-auto px-4'>
                    <SectionHeading>Featured Projects</SectionHeading>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {PROJECTS.map((p, idx) => (
                            <ProjectCard key={idx} {...p} />
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Projects;
