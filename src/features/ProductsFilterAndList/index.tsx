"use client";

import { useFilterContext } from "@/utils/FilterProviderContext"
import ProductsList from "../ProductsList";
import Paginate from "@/components/Paginate";
import LayoutChange from "../LayoutChange";

const ProductsFilterAndList = () => {
  const { layoutType, setLayoutType } = useFilterContext();
  const layoutChange = (layout: "table" | "grid") => {
    setLayoutType(layout);
  }

  return (
    <>
        <div className="flex justify-between mb-5">
            <LayoutChange 
                handleChange={layoutChange}
            />
            <Paginate total = {100} limit = {10} onPageChange={() => {}}/>
        </div>
        <div className="max-h-[500px] overflow-x-auto overflow-y-scroll border">
            <ProductsList layoutType = {layoutType} />
        </div>
    </>
  )
}

export default ProductsFilterAndList