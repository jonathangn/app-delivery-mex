import Link from "next/link";
import Image from "next/image";

import { FaYoutube, FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const FooterAuth = () => {
  return <footer className="bg-primary bg-pattern py-8 fixed bottom-0 w-full">
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-y-6 justify-center">
        <Link href={'#'}>
          <Image src={'logo.svg'} width={180} height={180} alt="" />
        </Link>
        {/* <div className="flex gap-x-6 text-xl text-white ">
          <Link href={'#'}>
            <FaYoutube />
          </Link>
          <Link href={'#'}>
            <FaFacebook />
          </Link>
          <Link href={'#'}>
            <FaInstagram />
          </Link>
          <Link href={'#'}>
            <FaPinterest />
          </Link>
        </div> */}
        {/* <div className="text-white font-medium">
          Derechos Reservados &copy; 2023
        </div> */}
      </div>
    </div>
  </footer>;
};

export default FooterAuth;
