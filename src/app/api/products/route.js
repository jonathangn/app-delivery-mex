import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../utils/mongo";
import Product from "../../models/Product";
import mongoose from "mongoose";
import { cookies, headers } from "next/headers";

export async function GET(request) {
  await connectDB();

  try {
    const products = await Product.find();
    return NextResponse.json(products)
  } catch (err) {
    return NextResponse.json(err)
  }
}
