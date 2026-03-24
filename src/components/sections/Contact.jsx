import React, { useState } from 'react'
import RevealOnScroll from '../RevealOnScroll'
import emailjs from "emailjs-com"
import { FaFacebook, FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import SectionHeading from '../SectionHeading';
import { toast } from 'react-toastify';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const SOCIALS = [
    { label: "GitHub", href: "https://github.com/SadikRahman14", Icon: FaGithub },
    { label: "X", href: "https://x.com/SadikRa94780860", Icon: FaXTwitter },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sadik-rahman-7b0658253/", Icon: FaLinkedin },
    { label: "Email", href: "mailto:sadik.nai.008@gmail.com", Icon: FiMail },
    { label: "Facebook", href: "https://www.facebook.com/SadikRahman14p/", Icon: FaFacebook },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then(() => {
        toast.success("Message Send Successfully")
        setFormData({ name: "", email: "", message: "" })
      })
      .catch(() => toast.error("Oops! Something Went Wrong. Please Try Again"))
  }

  return (
    <section
      id='contact'
      className='mt-20 min-h-screen flex items-center justify-center py-16 md:py-20'
    >
      <RevealOnScroll>
        {/* mobile: full width; desktop: your original w-150 */}
        <div className='px-4 w-full md:w-150 mx-auto'>
          <SectionHeading> Get in Touch </SectionHeading>

          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='relative'>
              <input
                type="text" id='name' name='name' required
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-green-200 transition 
                          focus:outline-none focus:border-green-500 focus:bg-green-500/5'
                placeholder='Name...'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className='relative'>
              <input
                type="email" id='email' name='email' required
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-green-200 transition 
                          focus:outline-none focus:border-green-500 focus:bg-green-500/5'
                placeholder='example@gmail.com'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className='relative'>
              <textarea
                type="message" id='message' name='message' required
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

          {/* Socials — desktop unchanged; mobile larger tap + wrap */}
          
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Contact
