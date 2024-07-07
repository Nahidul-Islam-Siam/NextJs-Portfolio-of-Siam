import React from 'react';
import Image from 'next/image';
import { ButtonLink } from './Scroller';
import { saveAs } from 'file-saver';

const PDF_File_URL = 'http://localhost:3000/resume_of_siam.pdf';

const Hero: React.FC = () => {
  const downloadFile = () => {
    saveAs(PDF_File_URL, 'resume_of_siam.pdf');
  };

  return (
    <div id='hero' className="relative h-screen flex items-center justify-center hdr dark:bg-gray-100 dark:text-gray-800">
      <svg className="absolute left-0 top-0 right-99 z-[-1]" viewBox="0 0 800 800">
        <defs>
          <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="73" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse rx="127.5" ry="184.5" cx="58.48854527148316" cy="363.1451261127883" fill="hsla(286, 59%, 10%, 1.00)"></ellipse>
        </g>
      </svg>
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between text-center lg:text-left">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl"><span className="animated-gradient">Welcome to my portfolio!</span> 👋</h1>
          <h2 className="text-xl md:text-2xl mb-8 mt-4">This website is for me to showcase my previous projects and achievements, hope you enjoy your stay!
            <p>This website was created using <span>Next.js</span> and <span>Tailwind CSS</span></p>
          </h2>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a href="#previouswork" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </span>
  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </span>
  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Previous Work</span>
</a>

            <a href={PDF_File_URL} download="resume_of_siam.pdf" className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-md hover:bg-gray-800 flex items-center space-x-2">
              <span>Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image src="/p1.jpg" alt="Business SVG" width={300} height={300} className="object-contain rounded-full" />
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <span className="scroll-indicator block h-6 w-4 rounded-full bg-transparent border ml-6"></span>
      </div>
    </div>
  );
};

export default Hero;
