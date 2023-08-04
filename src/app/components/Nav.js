'use client'

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Nav = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext)

  return (
    <nav className="absolute w-full py-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-3 justify-between items-center">
        <Link href="#" className="max-w-[200px] lg:max-w-max">
          <Image src={'logo.svg'} width={200} height={150} alt="" />
        </Link>
        <div className="hidden lg:flex gap-x-8 items-center">
          <div className="flex gap-x-3 items-center">
            <Image src={'phone.svg'} width={42} height={42} alt="" />
            <div className="text-white">
              <div className="font-robotoCondensed uppercase font-medium leading-none text-sm">Atención de 11 AM a 11PM</div>
              <div className="text-3xl font-robotoCondensed font-extrabold leading-none tracking-wide">318 6118823</div>
            </div>
          </div>
          <div onClick={() => setIsOpen(!isOpen)} className="relative cursor-pointer hidden lg:flex">
            <Image src={'bag.svg'} width={38} height={38} alt="" />
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[14px] font-robotoCondensed absolute -bottom-2 -right-1 font-semibold">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
