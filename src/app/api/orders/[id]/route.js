import connectDB from "../../../utils/mongo";
import Order from "../../../models/Order";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request, { params }) {
    await connectDB();
    try {
        // console.log(params.id)
        // const req = await request.json()
        const order = await Order.findById(params.id).exec();
        // const orders = await Order.find();
        // console.log(order)
        return NextResponse.json(order)
    } catch (err) {
        return NextResponse.json(err)
    }
}

export async function PUT(request, { params }) {
    // const secret = request.nextUrl.searchParams.get('secret')
    // const tag = request.nextUrl.searchParams.get('tag')
    // if (secret !== process.env.MY_SECRET_TOKEN) {
    //   return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    // }

    // if (!tag) {
    //   return NextResponse.json({ message: 'Missing tag param' }, { status: 400 })
    // }
    // revalidateTag(tag)

    await connectDB();
    try {
        // const filter = { _id: req._id };
        // const update = { status: req.status++ };
        // const updatedOrder = await Order.findOneAndUpdate(filter, update);

        //WORKING
        // const req = await request.json()
        // const { data } = await req
        // const { _id, status } = data.order

        const order = await Order.findOne({ _id: params.id });
        // const newStatus = status + 1;
        // doc.status = newStatus;
        if (order.status < 2) {
            order.status++
        }
        const updatedOrder = await order.save();
        return NextResponse.json(updatedOrder)
        // return NextResponse.json(updatedOrder, { revalidated: true, now: Date.now() })
        // return NextResponse.json(updatedOrder)
    } catch (err) {
        console.log(err.message)
    }
}