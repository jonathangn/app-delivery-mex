'use client'

import Image from "next/image";
import Modal from "react-modal"
import { useContext, useEffect, useState } from "react";

import { IoCloseOutline } from "react-icons/io5"
import { CartContext } from "../context/CartContext";

const OrderState = () => {
  const MAIN_API = process.env.NEXT_PUBLIC_MAIN_API

  //FOR NEXT FUNCTION VIEW ORDERS
  // if (userOrders.length > 0) {
  //   const lastOrder = userOrders[0]
  //   const res = fetch(`${MAIN_API}/orders/${lastOrder?._id}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'API-Key': process.env.DATA_API_KEY,
  //     },
  //   })
  //   const order = res.json()
  //   setStatus(order.status)
  // }
  const { lastOrder, banner, setBanner, handleUpdateOrder } = useContext(CartContext)
  const [stateTx, setStateTx] = useState('');
  const [status, setStatus] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${MAIN_API}/orders`)
      const json = await res.json();
      const order = json.find(order => (order._id === lastOrder._id))
      setStatus(order?.status)
      switch (order?.status) {
        case 0:
          setStateTx('Comanda')
          break;
        case 1:
          setStateTx('Preparación')
          break;
        case 2:
          setStateTx('Despachado')
          break;
        default:
          break;
      }
    };
    fetchData()

    if (status <= 2 && banner) {
      setInterval(() => {
        fetchData()
      }, 60000);
    }
  }, [lastOrder, status])

  return (
    <>
      {banner ?
        <div id="marketing-banner" tabIndex="-1" className="fixed z-50 flex flex-col md:flex-col w-[calc(100%-2rem)] py-4 -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm max-w-[400px] left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600 justify-center ">
          <div className="flex items-center flex-shrink-0 justify-evenly ">
            <div className="flex flex-col items-start mb-3 mr-4 md:mb-0 ">
              <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Estado último pedido</span>
              <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">{stateTx}</p>
            </div>
            <IoCloseOutline className="text-4xl cursor-pointer text-orange" onClick={() => { setBanner(false) }} />
          </div>
        </div> : <></>
      }
    </>
  )
};

export default OrderState;
