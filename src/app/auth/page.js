
// 'use client'
import Banner from "../components/Banner"
import NavAuth from "../components/NavAuth"
import Panel from "../components/Panel"
import FooterAuth from "../components/FooterAuth"
import Login from "../components/Login"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Footer from "../components/Footer"
import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'

export default function Auth() {
    // const { data: session, status } = useSession()
    // const resSignApi = await signIn('credentials', {
    //     mail,
    //     pass,
    //     redirect: false
    // })

    return (
        <>
            <Login />
            <FooterAuth />
        </>
    )
}
