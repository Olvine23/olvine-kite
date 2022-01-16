/* eslint-disable no-unused-vars */
 
import {Step } from './Register';
export const Header = () => {
  return (
    <div className="header relative  ">
      
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-13">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h1 className="mb-2  md:text-6xl text-white font-bold tracking-tight  mb-6 text-4xl sm:leading-none">
            KENYA <span className="text-green-600 font-Times New Roman"> INNOVATION </span> <span className="text-red-500">AND</span>  TRADE <span > EXPO</span>
          </h1>
         
          <h1 className="md:text-4xl text-2xl mb-8  text-white">7th - 9th April 2022</h1>
          <p className="mb-7 text-base rounded  bg-white p-2 text-red md:text-lg">
            <span className="uppercase text-black text-3xl mr-3">Theme:</span> <br /> <span className="text-3xl text-red-500 font-bold">Thriving Through Innnovation & Trade</span>   
          </p>
          <h1 className="text-white text-2xl">Register To Attend As </h1>
          <Step />
           
           
          {/* <div className="buttons mb-7">
          <button className="text-white bg-green-600 p-1 rounded text-2xl">Register as <br /> delegate</button>
          <button className="text-white bg-green-600 p-3 rounded  ml-3 p-1 rounded text-2xl">Register as <br /> start-up</button>
          <button className="text-white bg-green-600 p-3 rounded ml-3 p-1 rounded text-2xl ">Register as <br /> exhibitor</button>
          
          </div> */}
          <a
            href="/"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="red"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};