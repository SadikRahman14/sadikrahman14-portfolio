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
    <a 
        href={href} 
        aria-label="View on GitHub"
        className='text-green-400 hover:text-green-300 transition-colors my-4 block'
    >
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="currentColor"
        >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
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
