import ProductsGrid from "./ProductsGrid";
import ProductsTable from "./ProductsTable";

import { useQuery, useQueryClient } from "react-query";
import { getAll } from "@/api/products";
import { calcDiscountPrice } from "@/utils";

import { useState } from "react";

type ProductsListProps = {
    layoutType: "table" | "grid",
}

const ProductsList = ({layoutType}: ProductsListProps) => {
  
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data,
    isFetching,
    isPreviousData
  } = useQuery("products", () => getAll());

  if (isLoading) return <div>Loading Users</div>

  if (isError) return <div>Error while fetching: </div>

  const formatData = (data: any[]) => {
    return data.map(item => {
      const {price , discountPercentage} = item;
      
      return {
        ...item,
        ...{
          discountPrice: calcDiscountPrice(price, discountPercentage)
        }
      }
    });
  }

  return (
    <>
        {
            layoutType == "table" ? 
            <ProductsTable data = {formatData(data.products)} /> :
            <ProductsGrid data = {formatData(data.products)} />
        }
    </>

  )
}

export default ProductsList;