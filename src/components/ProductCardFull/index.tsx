"use client";

import Image from "next/image";
import { calcDiscountPrice } from "@/utils";
import ProgressBar from "../ProgressBar";

const columns = [
  { key : "id", title: "Id" },
  { key : "title", title: "Title" },
  { key : "category", title: "Category" },
  { key : "price", title: "Price" },
  { key : "discountPrice", title: "Discount Price" },
];

const ProductCardFull = ({data}: any) => {

  return (
    <div className="flex justify-between items-center p-5 space-x-5">
        <div className='img-container'>
          <div className="text-center mb-3 text-6x1 font-semibold">{data.title}</div>
          <div className="h-[200px] w-[200px] relative">
              <Image
                src={data.thumbnail}
                alt = {data.thumbnail}
                fill={true}
                className= "rounded-lg"
              />
          </div>
        </div>
        <div className="w-full">
            <div className="space-y-3">
              <div>{data.description}</div>
              <div>Original Price {data.price}</div>
              <div>Discounted Price {calcDiscountPrice(data.price, data.discountPercentage)}</div>
              <ProgressBar
                percentage={(data.rating/5) * 100}
                label = {"Rating"}
                value = {data.rating}
              />
            </div>
        </div>
        
      </div>
  )
}

export default ProductCardFull