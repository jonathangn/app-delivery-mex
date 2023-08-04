import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 60,
    },
    description: {
      type: String,
      maxlength: 200,
    },
    image: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    priceSm: {
      type: Number,
      required: true
    },
    priceMd: {
      type: Number,
    },
    priceLg: {
      type: Number,
    },
    toppings: {
      image: {
        type: String,
      },
      name: {
        type: String,
      },
      price: {
        type: Number
      }
    },
  },
  { timestamps: true }
);

export default mongoose.models["Product"] || mongoose.model("Product", ProductSchema);
