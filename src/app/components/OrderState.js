'use client'

import Image from "next/image";
import Modal from "react-modal"
import { useContext, useEffect, useState } from "react";

import { IoCloseOutline } from "react-icons/io5"
import { CartContext } from "../context/CartContext";

const OrderState = () => {
  const { userOrders, banner, setBanner } = useContext(CartContext)
  // const [status, setStatus] = useState(userOrders[-1]?.status);
  const [stateTx, setStateTx] = useState('');
  // console.log(userOrders)

  useEffect(() => {
    const status = userOrders[0]?.status
    switch (status) {
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
  })

  return (
    <>
      {banner && userOrders?.map((order, index) => {
        return (
          <>
            <div id="marketing-banner" tabindex="-1" className="fixed z-50 flex flex-col md:flex-col w-[calc(100%-2rem)] py-4 -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm max-w-[400px] left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600 justify-center " >
              <div className="flex items-center flex-shrink-0 justify-evenly " key={index}>
                <div className="flex flex-col items-start mb-3 mr-4 md:mb-0 ">
                  <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Estado último pedido</span>
                  <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">{stateTx}</p>
                </div>
                <IoCloseOutline className="text-4xl cursor-pointer text-orange" onClick={() => { setBanner(false) }} />
              </div>
            </div>

            {/* <div className={statusClass(0)}>
<Image src="/img/paid.png" width={30} height={30} alt="" />
<span>Payment</span>
<div className={styles.checkedIcon}>
    <Image
        className={styles.checkedIcon}
        src="/img/checked.png"
        width={20}
        height={20}
        alt=""
    />
</div>
</div>
<div className={statusClass(1)}>
<Image src="/img/bake.png" width={30} height={30} alt="" />
<span>Preparing</span>
<div className={styles.checkedIcon}>
    <Image
        className={styles.checkedIcon}
        src="/img/checked.png"
        width={20}
        height={20}
        alt=""
    />
</div>
</div>
<div className={statusClass(2)}>
<Image src="/img/bike.png" width={30} height={30} alt="" />
<span>On the way</span>
<div className={styles.checkedIcon}>
    <Image
        className={styles.checkedIcon}
        src="/img/checked.png"
        width={20}
        height={20}
        alt=""
    />
</div>
</div>
<div className={statusClass(3)}>
<Image src="/img/delivered.png" width={30} height={30} alt="" />
<span>Delivered</span>
<div className={styles.checkedIcon}>
    <Image
        className={styles.checkedIcon}
        src="/img/checked.png"
        width={20}
        height={20}
        alt=""
    />
</div>
</div> */}
          </>
        )
      })}
    </>
  )
};

export default OrderState;
