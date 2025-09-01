'use client'
import Link from 'next/link'
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { signOut } from 'next-auth/react'

const Panel = ({ orders }) => {
    // const { isAdmin } = useContext(CartContext)

    return (
        <div className="container mx-auto py-4">
            <div className="mt-5">
                <h1 className="text-4xl font-bold mb-2 text-gray-600">Comanda</h1>
                <button className='text-amber-500 font-bold mb-5' onClick={() => signOut()}>Cerrar sesión</button>
                <table className="table-fixed border-collapse border border-gray-300 w-full      mx-auto text-gray-800">
                    <tr className=''>
                        <th className="w-3/5 border mb-1 font-semibold text-gray-600 md:text-lg">Cliente</th>
                        <th className="w-1/5 border mb-1 font-semibold text-gray-600 md:text-lg">Total</th>
                        <th className="w-1/5 border mb-1 font-semibold text-gray-600 md:text-lg">Acciones</th>
                    </tr>
                    {orders && orders?.map((order) => {
                        return <>
                            <tr className='bg-amber-100 rounded-xl text-gray-600 h-[4rem]'>
                                <td className="px-5 border text-lg text-gray-700">{order.customerName}</td>
                                <td className="px-5 border text-lg font-semibold text-gray-500 text-center">{order.total}</td>
                                <td className="px-5 border text-lg font-semibold text-center">
                                    <Link key={order._id} href={`/admin/order/${order._id}`} >
                                        <button className="bg-amber-500 text-white px-2 py-1 rounded-md ml-4">Ver</button>
                                    </Link>
                                </td>
                            </tr>
                        </>
                    })}
                </table>
            </div>
        </div>
    );
};

export default Panel;



// import { useRouter } from 'next/router';

// export default function YourPage() {

//   const router = useRouter();

//   return (<div onClick={() => router.back()}>Back</div>);
// }