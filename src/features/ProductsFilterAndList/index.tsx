"use client";

import React, { useState } from "react";

import ProductsList from "../ProductsList";
import Paginate from "@/components/Paginate";
import LayoutChange from "../LayoutChange";

import getQueryClient from "@/utils/getQueryClient";

export default function ProductsFilterAndList () {

  const [layoutType, setLayoutType] = useState<'grid' | 'table'>('grid');
  const [currentPage, setCurrentPage] = useState(0);
  const queryClient = getQueryClient();

  const limitPerRow = 10;

  const onPageChange = (selected: number) => {
    setCurrentPage(selected);
  }

  const handleLayoutChange = (layout: "grid" | "table") => {
    setLayoutType(layout);
  }

  return (
    <>
        <div className="flex justify-between mb-5">
            <LayoutChange 
                handleChange={handleLayoutChange}
                layoutType = {layoutType}
            />
            <Paginate total = {100} limit = {limitPerRow} onPageChange={onPageChange}/>
        </div>
        <div className="max-h-[500px] overflow-x-auto overflow-y-scroll border">
            <ProductsList layoutType = {layoutType} currentPage = {currentPage} limitPerRow = {limitPerRow}/>
        </div>
    </>
  )
}
