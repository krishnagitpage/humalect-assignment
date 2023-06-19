"use client";

import React from "react";

import { useFilterContext } from "@/utils/FilterProviderContext"
import ProductsList from "../ProductsList";
import Paginate from "@/components/Paginate";
import LayoutChange from "../LayoutChange";

const ProductsFilterAndList = () => {
  const { layoutType, setLayoutType } = useFilterContext();
  const layoutChange = (layout: "table" | "grid") => {
    setLayoutType(layout);
  }
  console.log("component productfilterandlist load");
  return (
    <>
        <div className="flex justify-between mb-5">
            <LayoutChange 
                handleChange={layoutChange}
                layoutType = {layoutType}
            />
            <Paginate total = {100} limit = {10} onPageChange={() => {}}/>
        </div>
        <div className="max-h-[500px] overflow-x-auto overflow-y-scroll border">
            <ProductsList layoutType = {layoutType} />
        </div>
    </>
  )
}

export default ProductsFilterAndList;