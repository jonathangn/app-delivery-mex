import Link from "next/link";
import Image from "next/image";

import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return <footer className="bg-primary bg-pattern py-16">
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-y-6 justify-center">
        <Link href={'#'}>
          <Image src={'logo.svg'} width={180} height={180} alt="" />
        </Link>
        <div className="flex gap-x-6 text-xl text-white ">
          <Link target="_blank" href={'https://www.tiktok.com/@lachulada.co'}>
            <FaTiktok />
          </Link>
          <Link target="_blank" href={'https://www.instagram.com/lachulada.co/'}>
            <FaInstagram />
          </Link>
        </div>
        <div className="text-white font-medium">
          Derechos Reservados &copy; 2023
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
