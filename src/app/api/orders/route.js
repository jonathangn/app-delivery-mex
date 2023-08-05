import connectDB from "../../utils/mongo";
import Order from "../../models/Order";
import { NextRequest, NextResponse } from "next/server";
// import { revalidatePath } from 'next/cache'

export async function GET() {
  // const path = request.nextUrl.searchParams.get('path')
  // revalidatePath(path)

  await connectDB();
  try {
    const orders = await Order.find();
    return NextResponse.json(orders)
    // return NextResponse.json({ orders, revalidated: true, now: Date.now() })
  } catch (err) {
    return NextResponse.json(err)
  }
}

export async function POST(request) {
  await connectDB();
  try {
    // READ BODY
    // const res = await request.json()
    // return NextResponse.json({ res })
    // READ FORMDATA
    // const formData = await request.formData()
    // return NextResponse.json({ formData })
    // USAR DIRECTO
    // const createdOrder = await Order.create(request);
    // return NextResponse.json({ success: true, data: order })
    // await order.save();
    const req = await request.json()
    const createdOrder = await Order.create(req);
    return NextResponse.json(createdOrder)
  } catch (err) {
    console.log(err.message)
  }
}

export async function PUT(request) {
  await connectDB();
  try {
    const req = await request.json()
    // const filter = { _id: req._id };
    // const update = { status: req.status++ };
    // const updatedOrder = await Order.findOneAndUpdate(filter, update);
    const { data } = await req
    const { _id, status } = data.order
    // const doc = await Order.findById(_id).exec();
    const doc = await Order.findOne({ _id: _id });
    // const newStatus = status + 1;
    // doc.status = newStatus;
    if (status < 2) {
      doc.status = status + 1
    }
    const updatedOrder = await doc.save();
    return NextResponse.json(updatedOrder)
    // return NextResponse.json(updatedOrder)
  } catch (err) {
    console.log(err.message)
  }
}

//   if (method === "PUT") {
//     if (!token || token !== process.env.token) {
//       return res.status(401).json("Not authenticated!")
//     }
//     try {
//       const product = await Product.findByIdAndUpdate(id, req.body, {
//         new: true,
//       });
//       res.status(200).json(product);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }

//   if (method === "DELETE") {
//     if (!token || token !== process.env.token) {
//       return res.status(401).json("Not authenticated!")
//     }
//     try {
//       await Product.findByIdAndDelete(id);
//       res.status(200).json("The product has been deleted!");
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
// }