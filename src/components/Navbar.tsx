import Image from "next/image";
import NavLogo from "@/assets/nav_logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='bg-white flex flex-col items-center text-black p-2'>
      <Image src={NavLogo} alt='Direct Ministries Logo' className='w-20 m-2' />
      <ul className='flex gap-8 text-sm mt-4 mb-2 flex-wrap justify-center'>
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
  );
};

export default Navbar;
