"use client";

import Container from "@/components/Container";
import ProductsFilterAndList from "@/features/ProductsFilterAndList";

export default function Home() {
  console.log("Home reload")
  return (
      <Container className = "pt-5">
          <ProductsFilterAndList/>
      </Container>
  )
}
