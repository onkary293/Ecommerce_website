import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  category: {
    type: mongoose.ObjectId,
    ref: "category",
    required: true,
  },
  quantity: {
    type: Number,
    require: true,
    },
    photo: {
        data: Buffer,
        contentType:String,
    },
    shipping: {
        type:Boolean,
    }
},
{timestamps:true}
);


export default mongoose.model("products",productsSchema)