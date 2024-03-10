"use client";
import Image from "next/image";
import DirectMinistriesLogoBox from "@/assets/logo_box.svg";
import { FaFacebook, FaSpotify, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='bg-black w-full flex md:justify-between p-12 flex-wrap justify-center'>
      <div className='flex flex-col justify-center sm:items-start items-center m-8'>
        <Image
          src={DirectMinistriesLogoBox}
          alt='Direct Ministries Logo Box'
          className='w-32 h-32'
        />
        <span className='text-center mt-4'>
          © {new Date().getFullYear()} Direct Ministries Official Website
        </span>
      </div>
      <div className='flex gap-16 m-8 flex-wrap'>
        <div>
          <span className='text-xl font-bold'>Navigation</span>
          <ul className='mt-8 text-stone-300 flex flex-col gap-3'>
            <li>
              <Link href='#five-fold-ministry'>Ministries</Link>
            </li>
            <li>
              <Link href='#about-us'>About us</Link>
            </li>
            <li>
              <Link href='#contact-us'>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <span className='text-xl font-bold'>Social Links</span>
          <ul className='mt-8 text-stone-300 flex flex-col gap-3'>
            <li>
              <div
                className='flex gap-3 cursor-pointer items-center'
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/directministriesofficial"
                  );
                }}>
                <FaFacebook className='w-4 h-4 md:w-6 md:h-6 text-white' />
                <span>Facebook</span>
              </div>
            </li>
            <li>
              <div
                className='flex gap-3 cursor-pointer items-center'
                onClick={() => {
                  alert("Not yet available.");
                }}>
                <FaSpotify className='w-4 h-4 md:w-6 md:h-6 text-white' />
                <span>Spotify</span>
              </div>
            </li>
            <li>
              <div
                className='flex gap-3 cursor-pointer items-center'
                onClick={() => {
                  alert("Not yet available.");
                }}>
                <FaYoutube className='w-4 h-4 md:w-6 md:h-6 text-white' />
                <span>Youtube</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
