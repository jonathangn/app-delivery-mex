// 'use client'
import FooterAuth from "../components/FooterAuth";
import NavAuth from "../components/NavAuth";
import Panel from "../components/Panel";

async function getOrders() {
    // // const authHeader = headers().get('authorization')
    // // const { userOrders } = useContext(CartContext)
    const MAIN_API = process.env.NEXT_PUBLIC_MAIN_API
    const res = await fetch(`${MAIN_API}/orders`, { cache: 'no-store', next: { revalidate: 10 } })
    const orders = await res.json()
    // const fetchOrds = await import("../../app/api/orders/route.js")
    // const resOrds = await fetchOrds.GET()
    // const orders = await resOrds.json()
    return orders
}

export default async function Admin() {

    const orders = await getOrders()
    const comanda = orders && orders?.filter((item) => item.status <= 1)

    return (
        <>
            {/* <NavAuth /> */}
            <Panel orders={comanda} />
            <FooterAuth />
        </>
    )
}