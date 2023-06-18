"use client";

import Container from "@/components/Container";
import Paginate from "@/components/Paginate";
import LayoutChange from "@/features/LayoutChange";
import ProductsList from "@/features/ProductsList";
import ReactPaginate from "react-paginate";

export default function Home() {

  const limitPerRow = 10;

  return (
      <Container className = "pt-5">
        <div className="flex justify-between mb-5">
          <LayoutChange />
          <Paginate total = {100} limit = {10} onPageChange={() => {}}/>
        </div>
        <div className="max-h-[500px] overflow-x-auto overflow-y-scroll border">
          <ProductsList layoutType="grid"/>
        </div>
      </Container>

  )
}
