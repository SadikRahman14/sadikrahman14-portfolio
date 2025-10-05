import React, { useEffect, useState } from 'react'
import me from "../assets/me_bg_resize.png"

const LoadingScreen = ({ onComplete }) => {

  const [text, setText] = useState("");
  const fullText = "<SadikRahman... />"

  useEffect(() => {
    let index = 0;

    function typeNextChar() {
      if (index <= fullText.length) {
        setText(fullText.substring(0, index));
        index++;

        let delay = 100;

        if (index === 13 || index === 14 || index === 15 || index === 16) {
          delay = 500;
        }

        setTimeout(typeNextChar, delay);
      } else {

        setTimeout(() => onComplete(), 1000);
      }
    }

    typeNextChar();


    return () => { };
  }, [fullText, onComplete]);

  return (
    <div className='fixed inset-0 z-50 bg-black text-gray-100 flex flex-col justify-center items-center'>
      <div className="relative mx-auto mb-8 w-70 h-70 md:w-70 md:h-70">
        <div
          className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-800 blur-lg opacity-60"
          aria-hidden
        />
        <img
          src={me}
          alt="Your portrait"
          className="relative w-full h-full rounded-full object-cover border border-white/10 shadow-lg"
        />
      </div>
      <div className='mb-4 text-4xl font-mono font-bold text-green-700'>
        {text} <span className='animate-blink ml-1'>  </span>
      </div>

      <div className='w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden'>
        <div className='w-[40%] h-full bg-blue-800 shadow-[0_0_15px_#3b82f6] animate-loading-bar'>

        </div>
      </div>
    </div>
  )
}

export default LoadingScreen