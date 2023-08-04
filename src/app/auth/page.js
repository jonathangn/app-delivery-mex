
import Banner from "../components/Banner"
import NavAuth from "../components/NavAuth"
import Panel from "../components/Panel"
import FooterAuth from "../components/FooterAuth"
import Login from "../components/Login"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Footer from "../components/Footer"

export default async function Auth() {

    return (
        <>
            <Login />
            <FooterAuth />
        </>
    )
}
