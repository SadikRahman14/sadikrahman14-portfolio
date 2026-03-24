import React from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import cvfile from "../assets/Sadik_Rahman_CV_2026.pdf";
import SectionHeading from "./SectionHeading";

const DownloadCV = () => {
    const CV_URL = cvfile;

    return (
        <section id="cv" className="mt-10 relative min-h-[40vh] flex items-center justify-center py-20 overflow-hidden">
            <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center">
                
                <SectionHeading>Download CV</SectionHeading>

                <p className="text-gray-300/90 mb-8">
                    Grab a copy of my latest resume or view it online.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 w-full md:w-auto">
                    {/* Download */}
                    <a
                        href={CV_URL}
                        download="Sadik_Rahman_CV.pdf"
                        className="w-full md:w-auto text-center relative inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 sm:px-6 py-3 sm:py-3.5 font-medium text-white shadow-lg shadow-emerald-600/20 ring-1 ring-emerald-400/30 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 min-h-[44px]"
                    >
                        <FiDownload className="h-5 w-5" />
                        Download CV
                    </a>

                    {/* View online */}
                    <a
                        href={CV_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full md:w-auto text-center relative inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/40 px-5 sm:px-6 py-3 sm:py-3.5 font-medium text-emerald-300 hover:text-emerald-200 hover:bg-emerald-500/10 transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 min-h-[44px]"
                    >
                        <FiExternalLink className="h-5 w-5" />
                        View Online
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DownloadCV;