'use client'
import { useContext, useEffect, useState } from "react";
import Order from "@/app/components/Order";
import { CartContext } from "@/app/context/CartContext";

export default function OrderDetail({ params }) {

    const MAIN_API = process.env.NEXT_PUBLIC_MAIN_API
    const { handleUpdateOrder } = useContext(CartContext);

    const [order, setOrder] = useState();
    const [status, setStatus] = useState();
    const [time, setTime] = useState();
    const [stateTx, setStateTx] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${MAIN_API}/orders`)
            const json = await res.json();
            const order = json.find(order => (order._id === params.id))
            setOrder(order)
            setStatus(order?.status)
            setTime(order?.createdAt)
        };
        fetchData();
        switch (status) {
            case 0:
                setStateTx('Comanda')
                break;
            case 1:
                setStateTx('Preparación')
                break;
            case 2:
                setStateTx('despachado')
                break;
            default:
                break;
        }
    });

    return (
        <Order order={order} time={time} stateTx={stateTx} setStateTx={setStateTx} handleUpdateOrder={handleUpdateOrder} status={status} setStatus={setStatus} />
    );
}