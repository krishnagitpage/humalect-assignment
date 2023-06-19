"use client";

import ProductsGrid from "./ProductsGrid";
import ProductsTable from "./ProductsTable";

import { useQuery, useQueryClient } from "react-query";
import { getAll } from "@/api/products";
import { calcDiscountPrice } from "@/utils";

type ProductsListProps = {
    layoutType: "table" | "grid",
}

import CardList from "@/components/Skeletons/CardList";
const ProductsList = ({layoutType}: ProductsListProps) => {
  
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data,
    isFetching,
  } = useQuery("products", () => getAll());

  if (isLoading || isFetching) return <CardList cards={6}/>

  if (isError) return <div>Error while fetching</div>

  const formatData = (data: any[]) => {
    return data.map(item => {
      const { price , discountPercentage } = item;
      
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