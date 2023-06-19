"use client";

import ProductsGrid from "./ProductsGrid";
import ProductsTable from "./ProductsTable";

import { useQuery } from "react-query";
import { getAll } from "@/api/products";
import CardList from "@/components/Skeletons/CardList";

type ProductsListProps = {
  layoutType: "table" | "grid",
  currentPage: number,
  limitPerRow: number
}

const ProductsList = ({ layoutType, currentPage, limitPerRow }: ProductsListProps) => {

  const {
    isLoading,
    isError,
    data,
  } = useQuery([`products`, currentPage], () => getAll(limitPerRow, currentPage * limitPerRow));

  if (isLoading) {
    return <CardList cards={6}/>
  }

  if (isError) return <div>Error while fetching</div>

  return (
    <>
        {
            layoutType == "table" ? 
            <ProductsTable data = {data.products} /> :
            <ProductsGrid data = {data.products} />
        }
    </>

  )
}

export default ProductsList;