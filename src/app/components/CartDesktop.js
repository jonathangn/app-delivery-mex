'use client'

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import CartTop from "./CartTop";
import CartItem from './CartItem'
import CartBottom from "./CartBottom";

const CartDesktop = () => {
  const { isOpen, cart } = useContext(CartContext)

  return (
    <div className={`${isOpen ? 'left-0' : '-left-full'} bg-white fixed top-0 bottom-0 w-[500px] shadow-2x1 hidden lg:flex flex-col transition-all duration-300`}>
      <CartTop />
      <div className={`px-10 flex flex-col gap-y-4 h-[65vh] py-2 mr-4 mt-8 overflow-y-scroll scrollbar-thin ${cart.length >= 3 && 'scrollbar-track-black/10 scrollbar-thumb-secondary'}`}>
        {cart.map((pizza, index) => {
          return <CartItem pizza={pizza} key={index} />
        })}
      </div>
      <CartBottom />
    </div>
  );
};

export default CartDesktop;

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