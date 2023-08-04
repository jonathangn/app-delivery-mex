
'use client'

import Image from "next/image";
import Modal from "react-modal"
import PizzaDetails from "./PizzaDetails";
import { IoCloseOutline } from "react-icons/io5"
import OrderState from './OrderState';
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

Modal.setAppElement('body')

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
}

const Pizza = ({ pizza }) => {

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    if (modal) {
      setModal(false)
    } else { setModal(true) }
  }

  return <div className="group py-2  px-4 xl:py-4 xl:px-2 rounded-xl">
    <Image onClick={toggleModal} className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer" width={270} height={270} src={pizza.image} alt="" priority={1} />
    <div>
      <div className="text-xl font-bold mb-3 capitalize cursor-pointer">{pizza.name}</div>
    </div>
    <div>
      <div className="text-lg font-semibold mb-3">{pizza.size}</div>
    </div>
    <div className="text-sm font-medium min-h-[60px] mb-6 ">
      {pizza.description}
    </div>
    <div className="mb-6 flex items-center justify-between">
      <div className="hidden lg:flex text-xl font-semibold">Desde: {pizza.priceSm}</div>
      <button onClick={toggleModal} className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm">Seleccionar</button>
      <button onClick={toggleModal} className="btn btn-sm gradient lg:hidden px-3 text-sm">Desde: {pizza.priceSm}</button>
    </div>
    {modal && (<Modal isOpen={modal} style={modalStyles} onRequestClose={toggleModal} contentLabel="Pizza Modal" className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none">
      <div onClick={toggleModal} className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer">
        <IoCloseOutline className="text-4xl text-orange" />
      </div>
      <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />

    </Modal>
    )}

  </div>;
};

export default Pizza;