import React from "react";

const SectionHeading = ({ children, className = "" }) => {
  return (
    <div className={`group mb-10 ${className}`}>
      <div className="flex items-center justify-center gap-3 sm:gap-4">

        <span
          className="block h-[1px] sm:h-[2px] bg-gray-700
                     w-8 sm:w-20
                     transition-all duration-300
                     "
        />

        <h2 className="cursor-pointer text-center text-4xl font-bold bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent
                      hover:bg-gradient-to-r hover:to-green-500 hover:from-green-800">
          {children}
        </h2>

        <span
          className="block h-[1px] sm:h-[2px] bg-gray-700
                     w-8 sm:w-8
                     transition-all duration-300
                     group-hover:w-12 sm:group-hover:w-20"
        />
      </div>
    </div>
  );
};

export default SectionHeading;
