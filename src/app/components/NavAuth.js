'use client'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const NavAuth = () => {
    const { isAdmin } = useContext(CartContext)

    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
                    <div className="flex md:order-2">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Cerrar sesión</button>

                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">

                    </div>
                </div>
            </nav>
        </>

    )
}

export default NavAuth;