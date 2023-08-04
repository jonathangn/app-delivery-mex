import mongoose from "mongoose";
import Product from "./Product"
import { nanoid } from 'nanoid'

const OrderSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(6)
    },
    customerName: {
      type: String,
      maxlength: 50,
    },
    customerLast: {
      type: String,
      maxlength: 50,
    },
    email: {
      type: String,
      maxlength: 50,
    },
    mobile: {
      type: String,
      maxlength: 10,
    },
    address: {
      type: String,
      // maxlength: 200,
    },
    details: {
      type: String,
      // maxlength: 200,
    },
    comments: {
      type: String,
      // maxlength: 400,
    },
    createdAt: {
      type: Date,
      inmutable: true,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    },
    status: {
      type: Number,
      default: 0,
      max: 3,
    },
    total: {
      type: Number,
    },
    method: {
      type: String,
    },
    cart: {
      type: mongoose.Schema.Types.Mixed
    }
  }
);

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
