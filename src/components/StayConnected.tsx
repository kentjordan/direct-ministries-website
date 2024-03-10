"use client";
import { FaFacebook, FaSpotify, FaYoutube } from "react-icons/fa";

const StayConnected = () => {
  return (
    <div className='bg-black flex justify-center sm:justify-between items-center p-16 flex-wrap text-white'>
      <span className='text-lg md:text-2xl font-bold text-center m-4'>
        STAY CONNECTED
      </span>
      <div className='flex m-4 gap-8'>
        <FaFacebook
          className='w-8 h-8 md:w-10 md:h-10 cursor-pointer'
          onClick={() => {
            window.open("https://www.facebook.com/directministriesofficial");
          }}
        />
        <FaSpotify
          className='w-8 h-8 md:w-10 md:h-10 cursor-pointer'
          onClick={() => {
            alert("Not yet available.");
          }}
        />
        <FaYoutube
          className='w-8 h-8 md:w-10 md:h-10 cursor-pointer'
          onClick={() => {
            alert("Not yet available.");
          }}
        />
      </div>
    </div>
  );
};

export default StayConnected;
