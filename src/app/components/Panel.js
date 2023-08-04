'use client'
import Link from 'next/link'
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const Panel = ({ orders }) => {
    const { isAdmin } = useContext(CartContext)

    return (
        <div className="container mx-auto py-4">
            <div className="relative overflow-x-auto">
                <dl className="max-w-sm mx-auto text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700" >
                    <div className='flex flex-row justify-evenly'>
                        <div className="flex flex-col">
                            <dt className="mb-1 font-semibold text-gray-500 md:text-lg dark:text-gray-400">Cliente</dt>
                        </div>
                        <div className="flex flex-col">
                            <dt className="mb-1 font-semibold text-gray-500 md:text-lg dark:text-gray-400">$ Total</dt>
                        </div>
                    </div>
                </dl>
                {orders && orders?.map((order) => {
                    return <>
                        <Link key={order._id} href={`/admin/order/${order._id}`} >
                            <dl className="bg-green-50 rounded-xl my-2 max-w-[20rem] mx-auto p-2 text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700" >
                                <div className='flex flex-row justify-between '>
                                    <div className="flex flex-col">
                                        <dd className="text-lg ">{order.customerName}</dd>
                                    </div>
                                    <div className="flex flex-col">
                                        <dd className="text-lg font-semibold">{order.total}</dd>
                                    </div>
                                </div>
                            </dl>
                        </Link>
                    </>
                })}
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