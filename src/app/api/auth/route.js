import connectDB from "../../utils/mongo";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import User from '../../models/User'
import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";

// import { useRouter } from 'next/navigation'

// export async function GET() {
//     await connectDB();
//     try {
//         const orders = await Order.find();
//     } catch (err) {
//         return NextResponse.status(500).json(err)
//     }
// }

export async function POST(request) {
    const cookieStore = cookies()
    // const router = useRouter()
    // const { setAdmin } = useContext(CartContext)
    await connectDB();
    // try {
    // const { method, query: { id }, cookies } = request;
    // const user = await Order.findById(id);
    const { mail, pass, method, } = await request.json();
    console.log(cookieStore.getAll(), '<--- Cookies')
    const user = await User.findOne({ mail, pass })
    const token = cookieStore?.token
    if (!user) {
        console.log("No está")
        return NextResponse.json({ message: 'No existe' })
    } else {
        if (user.role === 1) {
            console.log("Es administrador")
            redirect('/')
        } else {
            console.log("Es convencional")
            // window.location.replace('/')
            return NextResponse.json({ user })
            // redirect('/')
        }
        console.log(user)
    }
}