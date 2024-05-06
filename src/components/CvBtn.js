import React from "react";
import Link from "next/link";
import { AiOutlineFilePdf } from "react-icons/ai";

const CvBtn = () => {
  return (
    <div className="flex justify-center">
      <a
        className="flex justify-center gap-2 bg-gradient-to-r from-[#88dbc8] to-[#69dbc1] text-white rounded-md ml-8 px-4 py-2 sm:text-xl sm:px-6 sm:py-4 lg:text-2xl lg:px-6 lg:py-6"
        href='/assets/pdfs/cv-Milena.pdf'
        alt="Milena CV"
        // locale={false}
        // rel="noopener noreferrer"
        target="_blank"
      >
        <AiOutlineFilePdf className="mt-1" />
        My CV
      </a>
      
    </div>
  );
};

export default CvBtn;
