// cart context
'use client'

// import { Cloudinary } from "@cloudinary/url-gen";
import { createContext, useEffect, useState } from "react";
import OrderState from "../components/OrderState";
import { redirect, useRouter } from 'next/navigation'
import connectDB from "../utils/mongo";


export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const router = useRouter();
    const MAIN_API = process.env.NEXT_PUBLIC_MAIN_API
    // const cld = new Cloudinary({ cloud: { cloudName: 'app-delivery-mex-img' } });

    //CART
    const [cart, setCart] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [cartTotal, setCartTotal] = useState(0)
    const [itemAmount, setItemAmount] = useState(0)

    //ADMIN
    const [isAdmin, setIsAdmin] = useState(false)
    // const [orders, setOrders] = useState([])

    //USER
    const [successMsg, setSuccessMsg] = useState(false)
    const [userOrders, setUserOrders] = useState([])
    const [lastOrder, setLastOrder] = useState({})
    const [banner, setBanner] = useState(false)

    let dailyOps = []

    useEffect(() => {
        const amount = cart.reduce((a, c) => {
            return a + c.amount
        }, 0)
        setItemAmount(amount)
    })

    useEffect(() => {
        const price = cart.reduce((a, c) => {
            return a + Number(c.price) * c.amount
        }, 0)
        setCartTotal(price)
    })

    useEffect(() => {
        if (Object.keys(lastOrder).length !== 0) {
            fetch(`${MAIN_API}/api/orders/${lastOrder._id}`).then(res => {
                setLastOrder(res.json())
            }).catch(err => console.log(err))
        }
    }, [])

    const addToCart = (id, image, name, price, additionalTopping, size, crust) => {
        additionalTopping.sort((a, b) => a.name.localeCompare(b.name));

        const newItem = {
            id, image, name, price, additionalTopping, size, crust, amount: 1
        }

        const cartItemIndex = cart.findIndex((item) =>
            item.id === id && item.price === price && item.size === size &&

            JSON.stringify(item.additionalTopping) === JSON.stringify(additionalTopping) && item.crust === crust
        )

        if (cartItemIndex === -1) {
            setCart([...cart, newItem])
        } else {
            const newCart = [...cart];
            newCart[cartItemIndex].amount
                += 1;
            setCart(newCart)
        }

        setIsOpen(true)

    }

    const removeItem = (id, price, crust) => {
        const itemIndex = cart.findIndex((item) => item.id === id && item.price === price && item.crust === crust);

        if (itemIndex !== -1) {
            const newCart = [...cart]
            newCart.splice(itemIndex, 1)
            setCart(newCart)
        }
    }

    const increaseAmount = (id, price) => {
        const itemIndex = cart.findIndex((item) => item.id === id && item.price === price)

        if (itemIndex !== -1) {
            const newCart = [...cart]
            newCart[itemIndex].amount += 1
            setCart(newCart)
        }
    }

    const decreaseAmount = (id, price) => {
        const itemIndex = cart.findIndex((item) => item.id === id && item.price === price)

        if (itemIndex !== -1) {
            const newCart = [...cart]
            if (newCart[itemIndex].amount > 1) {
                newCart[itemIndex].amount -= 1
            }
            setCart(newCart)
        }
    }

    const handleCreateOrder = async (data) => {
        const total = parseFloat(cartTotal).toFixed(2);

        try {
            const body = { ...data, total: total, cart: cart };

            // STANDAR POST
            const res = await fetch("/api/orders", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                setCart([])
                setSuccessMsg(true)
                const newOrder = await res.json()
                userOrders.push(newOrder)
                setLastOrder(newOrder)
                setBanner(true)
            }
        } catch (e) {
            console.log(e.message)
        }
    };

    const handleUpdateOrder = async (data) => {
        try {
            const body = { data }
            // STANDAR PUT
            const res = await fetch(`/api/orders/${data.order._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (res.status === 200) {
                const { _id, status } = await res.json()
                // dailyOps.push({ _id, status })
                return status
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleLogin = async (data) => {
        try {
            const body = { ...data }

            // STANDAR POST
            const res = await fetch(`${MAIN_API}/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'API-Key': process.env.DATA_API_KEY,
                },
                body: JSON.stringify(body),
            });
            if (res.status === 200) {
                // console.log("ESTA ES LA RESPUESTA", res)
                setIsAdmin(true)
                // const token = cookies.token
                // if (!token || token !== process.env.token) {
                //   return res.status(401).json("Not authenticated!")
                // }
                //     res.setHeader(
                //         "Set-Cookie",
                //         cookie.serialize("token", process.env.TOKEN, {
                //             maxAge: 60 * 60,
                //             sameSite: "strict",
                //             path: "/",
                //         })
                //     );
                //     res.status(200).json("Succesfull Login");
                // } else {
                //     console.log("ENTRÓ AL ELSE")
                //     res.status(400).json("Wrong Credentials!");
                // }
            }
        } catch (err) {
            console.log(err)
        }
    };

    return <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cart, setCart, removeItem, increaseAmount, decreaseAmount, itemAmount, cartTotal, handleCreateOrder, userOrders, banner, setBanner, isAdmin, successMsg, setSuccessMsg, handleLogin, handleUpdateOrder, lastOrder, dailyOps }}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;