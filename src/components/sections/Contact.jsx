import React, { useState } from 'react'
import RevealOnScroll from '../RevealOnScroll'
import emailjs from "emailjs-com"
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })



    const SOCIALS = [
        { label: "GitHub", href: "https://github.com/your-username", Icon: FaGithub },
        { label: "X", href: "https://x.com/your-handle", Icon: FaXTwitter },
        { label: "LinkedIn", href: "https://linkedin.com/in/your-id", Icon: FaLinkedin },
        { label: "Email", href: "mailto:you@example.com", Icon: FiMail },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        )
            .then((result) => {
                alert("Message Sent")
                setFormData({ name: "", email: "", message: "" })
            })
            .catch(() => alert("Oops! Something Went Wrong. Please Try Again"))
    }

    return (
        <section
            id='contact'
            className='min-h-screen flex items-center justify-center py-20'
        >
            <RevealOnScroll>
                <div className='px-4 w-150'>
                    <h2 className='text-center text-4xl font-bold mb-10 bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent'>
                        Get in Touch
                    </h2>

                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div className='relative'>
                            <input type="text" id='name' name='name' required
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-green-200 transition 
                          focus:outline-none focus:border-green-500 focus:bg-green-500/5'
                                placeholder='Name...'
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className='relative'>
                            <input type="email" id='email' name='email' required
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-green-200 transition 
                          focus:outline-none focus:border-green-500 focus:bg-green-500/5'
                                placeholder='example@gmail.com'
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className='relative'>
                            <textarea type="message" id='message' name='message' required
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-green-200 transition 
                          focus:outline-none focus:border-green-500 focus:bg-green-500/5'
                                placeholder='Your Message...'
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type='submit'
                            className='w-[100%] bg-green-500/40 text-green-200/90 px-6 py-3 rounded font-medium transition relative overflow-hidden 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Socials (added below form; design kept consistent) */}
                    <div className="mt-10 flex justify-center gap-3">
                        {SOCIALS.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10
                 text-green-200/80 hover:text-green-200 hover:border-green-500/40 transition"
                            >
                                <Icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default Contact
