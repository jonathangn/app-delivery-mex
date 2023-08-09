import Pizza from './components/Pizza';
import Banner from './components/Banner';
import Nav from './components/Nav';
import CartMobile from './components/CartMobile';
import CartMobileIcon from './components/CartMobileIcon';
import WhatsAppIcon from './components/WhatsAppIcon';
import CartDesktop from './components/CartDesktop';
import OrderState from './components/OrderState';
import Footer from './components/Footer';
import { cookies, headers } from 'next/headers'

import dbConnect from './utils/mongo';
import Product from './models/Product';
import axios from 'axios';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';

async function getProducts() {
  // const MAIN_API = process.env.MAIN_API
  // const res = await fetch(`${MAIN_API}/products`, { cache: 'no-store' })
  // StaticData const res = await fetch(`http://localhost:3000/api/products`, { cache: 'force-cache' })
  // DynamicData const res = await fetch(`http://localhost:3000/api/products`, { cache: 'no-store' })
  //  const pizzas = await fetch("http://localhost:3000/api/products");
  //  const orders = admin && await axios.get("http://localhost:3000/api/orders");
  const fetchProd = await import("../app/api/products/route.js", { cache: 'no-store' })
  const resProd = await fetchProd.GET()
  const products = await resProd.json()
  return products
}

export default async function Home() {
  // const theme = cookies().get('theme')
  const pizzas = await getProducts()
  const rice = pizzas.filter((i) => i?.category === 'rice')
  const taco = pizzas.filter((i) => i?.category === 'taco')
  const burr = pizzas.filter((i) => i?.category === 'burr')
  const txmx = pizzas.filter((i) => i?.category === 'txmx')
  return (
    <>
      <Nav />
      <CartMobileIcon />
      <WhatsAppIcon />
      <CartMobile />
      <section>
        <Banner />
        <div className='container mx-auto'>
          <div>
            {
              <div className='grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12'>
                {rice?.map((rice) => {
                  return <Pizza pizza={rice} key={rice._id} />
                })}
              </div>
            }
          </div>
        </div>
        <div className='container mx-auto'>
          <div>
            {
              <div className='grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12'>
                {taco?.map((taco) => {
                  return <Pizza pizza={taco} key={taco._id} />
                })}
              </div>
            }
          </div>
        </div>
        <div className='container mx-auto'>
          <div>
            {
              <div className='grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12'>
                {burr?.map((burr) => {
                  return <Pizza pizza={burr} key={burr._id} />
                })}
              </div>
            }
          </div>
        </div>
        <div className='container mx-auto'>
          <div>
            {
              <div className='grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12'>
                {txmx?.map((txmx) => {
                  return <Pizza pizza={txmx} key={txmx._id} />
                })}
              </div>
            }
          </div>
        </div>
      </section>
      <CartDesktop />
      <OrderState />
      <Footer />
    </>
  );
}