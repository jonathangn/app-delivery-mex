'use client'

import { useContext } from "react";
import { BsHandbagFill } from "react-icons/bs"
import { CartContext } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";


const WhatsAppIcon = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext)

  return (
    <Link href="https://wa.me/+573186118823" target="_blank" className="rounded-full flex justify-center items-center text-white cursor-pointer fixed left-[10%] bottom-[5%] z-20 lg:hidden">
      <Image src={'phone.svg'} width={72} height={72} alt="WhatsApp Icon" />
    </Link>);
};

export default WhatsAppIcon;
