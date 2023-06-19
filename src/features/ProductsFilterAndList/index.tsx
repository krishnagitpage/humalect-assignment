"use client";

import React, { useState } from "react";

import ProductsList from "../ProductsList";
import Paginate from "@/components/Paginate";
import LayoutChange from "../LayoutChange";

import getQueryClient from "@/utils/getQueryClient";
import { useQuery } from "react-query";
import { getAll } from "@/api/products";

const ProductsFilterAndList = () => {

  const [layoutType, setLayoutType] = useState<'grid' | 'table'>('grid');
  const [currentPage, setCurrentPage] = useState(0);
  
  const queryClient = getQueryClient();


  const onPageChange = (selected: number) => {
    setCurrentPage(selected);
  }

  const handleLayoutChange = (layout: "grid" | "table") => {
    setLayoutType(layout);
  }

  const {
    isLoading,
    isError,
    data,
  } = useQuery(["products-total", ], () => getAll(1, 0));
  
  if (isLoading) return "Loading";

  if (isError) return <>"Failed to fetch"</>;

  const limitPerRow = 10;
  const total = data.total;

  return (
    <>
        <div className="flex justify-between mb-5">
            <LayoutChange 
                handleChange={handleLayoutChange}
                layoutType = {layoutType}
            />
            <Paginate total = {total} limit = {limitPerRow} onPageChange={onPageChange} forcePage={currentPage} />
        </div>
        <div className="max-h-[500px] overflow-x-auto overflow-y-scroll border">
            <ProductsList layoutType = {layoutType} currentPage = {currentPage} limitPerRow = {limitPerRow}/>
        </div>
    </>
  )
}

export default ProductsFilterAndList;