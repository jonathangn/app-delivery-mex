import FooterAuth from "../components/FooterAuth";
import NavAuth from "../components/NavAuth";
import Panel from "../components/Panel";

async function getOrders() {
    const MAIN_API = process.env.NEXT_PUBLIC_MAIN_API
    // const authHeader = headers().get('authorization')
    const res = await fetch(`${MAIN_API}/orders`, { cache: 'no-store' })
    const orders = await res.json()
    return orders
}

export default async function Admin() {
    // const { isAdmin } = useContext(CartContext)
    const orders = await getOrders()
    const comanda = orders?.filter((item) => item.status <= 1)

    return (
        <>
            {/* <NavAuth /> */}
            <Panel orders={comanda} />
            <FooterAuth />
        </>
    )
}