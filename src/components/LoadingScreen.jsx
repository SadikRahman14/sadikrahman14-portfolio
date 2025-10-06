import React, { useEffect, useRef, useState } from 'react'
import me from "../assets/me_bg_resize.png"

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [isExiting, setIsExiting] = useState(false);
  const fullText = "<SadikRahman... />";

  const timers = useRef([]);

  useEffect(() => {
    let index = 0;

    function typeNextChar() {
      if (index <= fullText.length) {
        setText(fullText.substring(0, index));
        index++;

        let delay = 100;
        // keep your pause indexes exactly the same
        if (index === 13 || index === 14 || index === 15 || index === 16) {
          delay = 500;
        }

        const id = setTimeout(typeNextChar, delay);
        timers.current.push(id);
      } else {
        // gentle fade-out, then call onComplete at your same 1s mark
        setIsExiting(true);
        const id = setTimeout(() => onComplete(), 1000);
        timers.current.push(id);
      }
    }

    typeNextChar();

    return () => {
      // cleanup all pending timers
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [fullText, onComplete]);

  return (
    <div
      className={
        `fixed inset-0 z-50 bg-black text-gray-100 flex flex-col justify-center items-center
         transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`
      }
      role="status"
      aria-live="polite"
    >
      <div className="relative mx-auto mb-8 w-35 h-35 md:w-35 md:h-35">
        <div
          className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-800 blur-lg opacity-60"
          aria-hidden
        />
        <img
          src={me}
          alt="Portrait of Sadik Rahman"
          className="relative rounded-full object-cover border border-white/10 shadow-lg"
          draggable="false"
        />
      </div>

      <div className='mb-4 text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-green-700'>
        {text}
        <span className='animate-blink motion-reduce:hidden ml-1' aria-hidden> </span>
      </div>

      <div className='w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden'>
        <div className='w-[40%] h-full bg-blue-800 shadow-[0_0_15px_#3b82f6] animate-loading-bar motion-reduce:animate-none' />
      </div>
    </div>
  )
}

export default LoadingScreen
